// pages/blogs/[title].tsx
"use client";
import { useEffect, useState } from 'react';
import { firestore } from '../../../utils/firebase_service';
import Link from "next/link";
interface Blog {
  title: string;
  content: string;
  category: string;
}

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
          {/* <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="about-link" href="#scanmadi-section">Projects</a>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="services-link" href="#servicesection">Services</a>
          </li> */}
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
const BlogPage = ({ params }: { params: { title: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    console.log(params.title)
    if (params.title) {
      const fetchBlog = async () => {
        try {
          console.log("asdasdas")
          const blogRef = await firestore.collection('blogs').where('title', '==', params.title).get();
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
          <div>
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700">{blog.content}</p>
            <p className="text-sm text-gray-500 mt-4">Category: {blog.category}</p>
          </div>
        ) : null}
      </div>
      </div>
      
    </div>
  );
};

export default BlogPage;