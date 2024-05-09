"use client";
import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import { firestore } from "../../../utils/firebase_service";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

// BlogPage component
const BlogEdit = ({ params }: { params: { id: string } }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setdescription] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (params.id) {
            fetchBlogPost(params.id);
        }
    }, [params.id]);

    const fetchBlogPost = async (id:any) => {
        try {
            const docRef = firestore.collection('blogs').doc(id);
            const doc = await docRef.get();
            if (doc.exists) {
                const data = doc.data();
                if (data) {
                    setTitle(data.title || '');
                    setCategory(data.category || '');
                    setContent(data.content || '');
                    setAuthor(data.author || '');
                    setdescription(data.description || '');
                }

            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching blog post:', error);
        }
    };

    const handleSubmit = async () => {
        try {
          if (!params.id) {
            console.error('No blog post ID provided for editing!');
            return;
          }
    
          await firestore.collection('blogs').doc(params.id).update({
            title,
            category,
            content,
            author,
            description,
          });
          alert('Blog post updated successfully!');
          router.push(`/blogs/${params.id}`);
        } catch (error) {
          console.error('Error updating blog post:', error);
        }
      };

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

    const handleEditorChange = (newContent: any) => {
        setContent(newContent);
        console.log(newContent);
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

};

export default BlogEdit;
