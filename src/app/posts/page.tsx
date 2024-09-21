'use client'
import { useEffect, useState } from "react";

export default function Home() {

const [posts, setPosts] = useState([]); 
const [loading, setLoading] = useState(true); 


  useEffect(() => {
    // Fetch the data
    const fetchPost = async() => { 
      try {
        // Get the data
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // Handle data in JSON Format
        const data = await res.json();

        // Log the data to the console
        console.log(data)

        // Manage the state of the data
        setPosts(data.slice(0, 5));

        // Stop loading
        setLoading(false);
      }
      catch {
        // Catch any error while fetching
        console.log('error fetching posts')
      }
    };

    // Execute the function
    fetchPost();
  },[]);

  // Mange loading state
  if (loading) {
    return <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className='text-center text-lg animate-spin h-6  mr-3 border-2 border-white rounded-full '>
                </div>
            </div>;
  }

  // Component for rendering
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1>Fetching JSON PLACEHOLDER</h1>

     {posts.map(posts => (
        <div className="text-center w-[50%]" key={posts.userid}>
        <p className="text-[20px] font-semibold ">{posts.title}</p>
        <p className="text-[14px] opacity-70 font-light">{posts.body}</p>
      </div>
      
     ))}
    </div>
  );
}
