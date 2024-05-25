"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {

    useEffect(() => {
        const handleScrollToSection = (event: MouseEvent, sectionId: string) => {
            event.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: 'center' });
            }
        };
        const addScrollListener = (linkId: string, sectionId: string) => {
            const link = document.getElementById(linkId);
            if (link) {
                link.addEventListener("click", (event) => handleScrollToSection(event, sectionId));
            }
        };
        addScrollListener("about-link", "scanmadi-section");
        addScrollListener("services-link", "servicesection");
        addScrollListener("contact-link", "contactsection");

        return () => {
            const removeScrollListener = (linkId: string, sectionId: string) => {
                const link = document.getElementById(linkId);
                if (link) {
                    link.removeEventListener("click", (event) => handleScrollToSection(event, sectionId));
                }
            };
            removeScrollListener("about-link", "scanmadi-section");
            removeScrollListener("services-link", "servicesection");
            removeScrollListener("contact-link", "contactsection");
        };
    }, []);

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
    );
};

export default function easyfy() {

    return (

        <div>
            <Navbar />
            <div className='mt-20' >
                <div className="container mx-auto mt-8" style={{ maxWidth: "1000px" }}>
                    <div className='m-4'>
                        <h1 className="text-3xl font-bold mb-4">Easyfy : A Command-Line Shortcut Manager</h1>
                        <img className="my-2" src="/images/easyfy.png" alt="" />
                        <p>
                            Are you tired of typing out long and complex commands every time you need to perform a task on the command line? Do you find yourself wishing for a way to simplify and streamline your workflow? Look no further! Introducing Easyfy – a powerful command-line shortcut manager designed to make your life easier.
                        </p>
                        <br></br>
                        <h1 className="text-xl font-bold mb-4">Getting Started</h1>
                        <p>To get started with Easyfy, follow these simple steps:</p>
                        <br></br>
                        <p>1. Installation: You can download the binary from our GitHub releases page.</p>
                        <div className="my-2">
                            <Link className="" href="https://github.com/faizan0717/easyfy">
                                <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View on GitHub</p>
                            </Link>
                        </div>
                        <p>2. Add System variable.</p>
                        <p className="text-lime-400">
                            a: location_where_easyfy_is_located
                        </p>
                        <p className="text-lime-400">
                            b: location_where_easyfy_is_located\shortcuts
                        </p>
                        <img className="my-2" src="/images/syetm_veriables.png" alt="" />
                        <p>3. Create a shortcut.</p>
                        <p>
                            * Just Type easyfy or easyfy "command which you want to create shortcut for"
                        </p>
                        <p className="text-lime-400">
                            eg: easyfy "npm run build && firebase deploy"
                        </p>
                        <br></br>
                        <h1 className="text-xl font-bold mb-4">Conclusion</h1>
                        <p>Easyfy is a simple yet powerful tool that can help you save time and increase productivity on the command line. With its intuitive interface and robust feature set, Easyfy is sure to become an essential part of your workflow. Try it out today and see the difference it can make!</p>
                        <p className="text-sm text-gray-500 mt-4">Author: Mohammed Faizan Ahmed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
