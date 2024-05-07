import { useEffect, useState } from "react";
import { firestore } from "../../utils/firebase_service";
import { useRouter } from 'next/navigation'
import { HoverEffect } from "../../ui/card-hover-effect";
import { Oswald } from "next/font/google";

const ka_font = Oswald({
  subsets: ['latin'],
  weight: ['400', '700']
})

interface Blog {
  id: string;
  title: string;
  content: string;
}

const AvailableBlogs = () => {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = await firestore.collection("blogs").get();
        const fetchedBlogs = blogsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[]; // Type assertion here
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };
    fetchBlogs();
  }, []);

  const goToBlog = (title: string) => {
    router.push(`/blogs/${title}`);
  };

  const Blogs = () => {
    return (
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={blogs} />
      </div>
    )
  }

  return (
    <div>
      <h1 className={`${ka_font.className} text-6xl lg:text-9xl font-bold text-center text-white relative z-20  mt-20`}>
        Blogs<span className="text-red-500">.</span>
      </h1>
      <Blogs />
    </div>
  );
};

export default AvailableBlogs;
