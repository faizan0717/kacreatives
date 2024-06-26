// pages/blogs/[title].tsx
"use client";
// Import necessary modules
import { useEffect, useState } from 'react';
import { firestore } from '../../../utils/firebase_service';
import Link from "next/link";

// Define interface for Blog
interface Blog {
  title: string;
  content: string;
  author: string;
  category: string;
}

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-opacity-30 bg-black backdrop-filter backdrop-blur-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <img
              src="/images/ka_logo_white.png"
              alt="Your Logo"
              className="h-8"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="contact-link" href="#contactsection">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// BlogPage component
const BlogPage = ({ params }: { params: { title: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (params.title) {
      const fetchBlog = async () => {
        try {
          const blogRef = await firestore.collection('blogs').where('id', '==', params.title).get();
          if (!blogRef.empty) {
            const blogData = blogRef.docs[0].data() as Blog;
            setBlog(blogData);
          } else {
            setNotFound(true);
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [params.title]);

  return (
    <div>
      <Navbar />
      <div className='mt-20'>
        <div className="container mx-auto mt-8">
          {loading ? (
            <p>Loading...</p>
          ) : notFound ? (
            <p>Blog not found.</p>
          ) : blog ? (
            <div className='m-4'>
              <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
              <div className="" style={{ maxWidth: "1000px" }} dangerouslySetInnerHTML={{
                __html: `
              <style>
                h1 { font-size: 2.25rem; } /* Example font size for h1 */
                h2 { font-size: 1.875rem; } /* Example font size for h2 */
                h3 { font-size: 1.5rem; } /* Example font size for h3 */
                h4 { font-size: 1.25rem; } /* Example font size for h4 */
                h5 { font-size: 1.125rem; } /* Example font size for h5 */
                h6 { font-size: 1rem; } /* Example font size for h6 */
              </style>
              ${blog.content}
            ` }} />
              <p className="text-sm text-gray-500 mt-4">Category: {blog.category}</p>
              <p className="text-sm text-gray-500 mt-4">Author: {blog.author}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
