import { useEffect, useState } from "react";
import { firestore } from "../../utils/firebase_service";
import { useRouter } from 'next/navigation'

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

  const goToBlog = (title:string) => {
    router.push(`/blogs/${title}`);
  };

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-gray-100 p-4 m-2 rounded-lg cursor-pointer" onClick={() => goToBlog(blog.title)}>
          <h2 className="text-xl font-semibold">{blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AvailableBlogs;
