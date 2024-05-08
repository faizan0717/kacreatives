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

  const handelAdd = (e: any) => {
    router.push("/editor")
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Bigelow Rules' rel='stylesheet'></link>
      <div style={{ fontFamily: "'Bigelow Rules', sans-serif", fontSize: '4rem' }} className="flex justify-center">
        Blogs
      </div>
      <div className="flex">
      {blogs.map((blog) => (
        <>  
              <div key={blog.id} className="max-w-sm m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {/* <a href="#"> */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
                {/* </a> */}
                <div className="flex">
                  <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Edit</button>
                  <button className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700">Delete</button>
                </div>
              </div>
        </>

      ))}
      </div>
      <div>
          <button onClick={handelAdd} className="bg-gray-100 text-black p-4 m-2 rounded-lg">Add</button>
        </div>
    </div>
  );
};

export default AvailableBlogs;
