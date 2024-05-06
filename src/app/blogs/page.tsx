// pages/blogs/[title].tsx
"use client";
import Link from "next/link";
import AvailableBlogs from "./AvailableBox"

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
const AllBlogPage = () => {

  return (
    <div>
      <Navbar />  
      <AvailableBlogs/>
    </div>
  );
};

export default AllBlogPage;
