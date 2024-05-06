"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { firestore } from "../../utils/firebase_service";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

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
      await firestore.collection("blogs").add({
        title: title,
        category: category,
        content: content
      });
      alert("Blog submitted successfully!");
      setTitle('');
      setCategory('');
      setContent('');
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <main>
      <div className="h-screen w-screen flex items-center flex-col">
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
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Submit</button>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-4"
          />
        </div>
      </div>
    </main>
  );
}
