"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { SparklesCore } from "../ui/sparkles";
import { Oswald } from "next/font/google";
import { LayoutGrid } from "../ui/layout-grid";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HoverEffect } from "../ui/card-hover-effect";
import { Analytics } from "@vercel/analytics/react"
import { Button } from "../ui/moving-border";


const ka_font = Oswald({
  subsets: ['latin'],
  weight: ['400', '700']
})

const people = [
  {
    id: 1,
    name: "Faizan Ahmed",
    designation: "CEO",
    image: "/images/faizan.png"
  },
  {
    id: 2,
    name: "Syed Jaleed",
    designation: "Tech Head",
    image:
      "/images/jaleed.png",
  },
  {
    id: 3,
    name: "Fazal Ahmed",
    designation: "Product Manager & Finance",
    image:
      "/images/fazal.png",
  },
  {
    id: 4,
    name: "Minhaj Ahmed",
    designation: "Marcketing & Operations",
    image:
      "/images/minhaj.png",
  },
  {
    id: 5,
    name: "Sufiyan Ahmed",
    designation: "Legal",
    image:
      "/images/sufiyan.png",
  },
  {
    id: 6,
    name: "Bashar",
    designation: "Engineering",
    image:
      "/images/bashar.png",
  },
  {
    id: 7,
    name: "Tasleem",
    designation: "Engineering",
    image:
      "/images/tasleem.png",
  },
  {
    id: 8,
    name: "Khursan",
    designation: "Sales Head",
    image: "/Images/khursan.jpg"
  }
];

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TypewriterEffectSmoothDemo = () => {
  const words = [
    {
      text: "Kick",
      className: "text-l lg:text-5xl text-white-500"
    },
    {
      text: "start",
      className: "text-l lg:text-5xl text-white-500"
    },
    {
      text: "your",
      className: "text-l lg:text-5xl text-white-500"
    },
    {
      text: "buisness",
      className: "text-l lg:text-5xl text-white-500"
    },
    {
      text: "with",
      className: "text-l lg:text-5xl text-white-500"
    },
    {
      text: "Ka creatives.",
      className: "text-l text-red-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <TypewriterEffectSmooth words={words} />
    </div>
  );

}

const HeroSection = () => {
  return (
    <div id="homesection" className="mt-24 md:mt-48 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className={`${ka_font.className} text-6xl lg:text-9xl font-bold text-center text-white relative z-20`}>
        Ka Creatives<span className="text-red-500">.</span>
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

const Navbar = () => {
  useEffect(() => {
    const handleScrollToSection = (event: MouseEvent, sectionId: string) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth",block: 'center' });
      }
    };
    const addScrollListener = (linkId, sectionId) => {
      const link = document.getElementById(linkId);
      if (link) {
        link.addEventListener("click", (event) => handleScrollToSection(event, sectionId));
      }
    };
    addScrollListener("about-link", "scanmadi-section");
    addScrollListener("services-link", "servicesection");
    addScrollListener("contact-link", "contactsection");
    addScrollListener("blocks-link", "blogsection1");

    return () => {
      const removeScrollListener = (linkId, sectionId) => {
        const link = document.getElementById(linkId);
        if (link) {
          link.removeEventListener("click", handleScrollToSection);
          link.removeEventListener("click", (event) => handleScrollToSection(event, sectionId));
        }
      };
      removeScrollListener("about-link","scanmadi-section");
      removeScrollListener("services-link","servicesection");
      removeScrollListener("contact-link", "contactsection");
      removeScrollListener("blocks-link", "blogsection1");
    };
  }, []);

  return (
    <nav className="bg-opacity-30 bg-black backdrop-filter backdrop-blur-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="https://www.kacreatives.in/">
            <img
              src="/images/ka_logo_white.png"
              alt="Your Logo"
              className="h-8"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <Link href="https://www.kacreatives.in/">Home</Link>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="about-link" href="#scanmadi-section">Projects</a>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="services-link" href="#servicesection">Services</a>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="blocks-link" href="#blocksection1">Blog</a>
          </li>
          <li className="text-black-800 hover:text-red-600 cursor-pointer">
            <a id="contact-link" href="#contactsection">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
  
const handleSignUpScanMadi = () => {
  window.open("https://scanmadi.com/login", "_blank");
};

const OurProducts = () => {
  return (
    <div id="scanmadi-section" ref={OurProducts} className="lg:flex items-center justify-center">
      
      <CardContainer className="py-1 inter-var mx-2">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 text-red-500"
          >
            Scanಮಾಡಿ
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            A SaaS web app which allows restaurant owner to provide Qr menu to their customers.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 border">
            <Image
              src="/images/scan_madi_baner.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://scanmadi.com/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
              onClick={handleSignUpScanMadi}
            >
               Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="py-1 inter-var mx-2">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 text-red-500"
          >
            CleanMyData
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            A web application which will clean your scraped data to improve your Ai/ML training.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 border">
            <Image
              src="/images/comming_soon.gif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              {/* Try now → */}
              Coming Soon
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              {/* Sign up */}
              Coming Soon
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="py-1 inter-var mx-2">
        <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 text-red-500"
          >
            Alarmify
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            Turn off alarms with brain teasers, puzzles, and more for an invigorating start to your day.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 border">
            <Image
              src="/images/comming_soon.gif"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
               {/* Try now → */}
               Coming Soon
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
            >
              {/* Sign up */}
              Coming Soon
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

// const MovingBorder = () => {



//   return (
 
//   );
// }

const ContactUs = () => {

  const contactInfo = {
    phNo: +918884818405,
    email: "help@kacreatives.in"
  }

  return (
    <><span className="flex justify-center text-xl text-slate-400">Contact Us</span>
      <div className="m-2 flex justify-center text-slate-500 ">
        Do you like what we are doing or need any support Please Contact us
      </div>
    <div id="contactsection" className="lg:flex">
      <div className="lg:w-1/2">
        <div className="p-4 items-center justify-center">
          <div className="flex items-center justify-center ">
            <PinContainer
              title="Take me to whatsapp"
              href="https://twitter.com/mannupaaji"
            >
              <div onClick={() => window.open(`https://api.whatsapp.com/send?phone=${'6361991723'}`, '_blank')} className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Click to connect us on WhatsApp
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 ">
                  <Image
                    src="/images/contact_us.gif"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail" />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 m-8">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-4"> <span className="text-3xl">📞</span> Call Us </h3>
          <span>
            <Button className="bg-white text-black">
            <a href={`tel:${contactInfo.phNo}`} className="bg-white text-black rounded px-3 py-1">
              {contactInfo.phNo}
            </a>
            </Button>
          </span>
          {/* <p>Phone numbers</p> */}
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-4"><span className="text-3xl">📩</span> Email</h3>
          <span>
            <Button className="bg-white text-black p-0">
            <a href={`mailto:${contactInfo.email}`} className="bg-white text-black rounded px-3 py-1">
              {contactInfo.email}
            </a>
            </Button>
          </span>
        </div>
      </div>
    </div></>

  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-1000">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://kacreatives.in/" target="_blank" className="flex items-center">
              <img src="/images/ka_logo_white.png" className="h-8 me-3" alt="KA Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">KA Creatives</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Our Work</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://scanmadi.com/" target="_blank" className="hover:underline">Scanಮಾಡಿ</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" target="_blank" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/ka_creatives_" target="_blank" className="hover:underline ">Instagram</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" target="_blank" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://kacreatives.in/" target="_blank" className="hover:underline">Ka Creatives™</a>. All Rights Reserved.
          </span>
          {/* <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>

  )
}

const projects = [
  {
    "title": "Branding",
    "description": "Helping your business establish a strong brand identity through logo design, color schemes, typography, and visual elements.",
    "link": ""
  },
  {
    "title": "Web Development",
    "description": "Creating responsive and user-friendly websites tailored to your business needs, utilizing the latest web technologies and best practices.",
    "link": ""
  },
  {
    "title": "Other Software Development Requirements",
    "description": "Addressing any other software development needs your business may have, including custom software solutions, mobile app development, and software integrations.",
    "link": ""
  }
];

const OurServices = () => {
  return (
    <div id="servicesection" className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}


export default function Home() {
  return (
    <div className="bg-black">
      <Analytics/>
      <Navbar />
      <HeroSection />
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
      <OurProducts />
      <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
      <OurServices></OurServices>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
      <ContactUs>
      </ContactUs>
      <div className="mt-8">
      <Footer></Footer>
      </div>
    </div>
  );
}