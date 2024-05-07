"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import { firestore } from "../../utils/firebase_service";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [description,setdescription] = useState('');
  const router = useRouter();

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent:any) => {
    setContent(newContent);
    console.log(newContent);
  };

  const handleSubmit = async () => {
    try {
      // Generate random ID for the blog
      const id = Math.random().toString(36).substring(7);
      // Construct link for the blog
      const link = `/blogs/${id}`;

      await firestore.collection("blogs").doc(id).set({
        title: title,
        category: category,
        content: content,
        author: author,
        link: link,
        id:id,
        description:description
      });
      alert("Blog submitted successfully!");
      setTitle('');
      setCategory('');
      setContent('');
      setAuthor('');
      setdescription('');
      // Redirect to the link after submitting the blog
      router.push(link);
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <main>
      <div className="h-screen w-screen flex items-center flex-col text-black">
        <div className="h-full w-[90vw]">
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Submit</button>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-4 text-white"
          />
        </div>
      </div>
    </main>
  );
}
