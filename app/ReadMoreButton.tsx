'use client'

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};


function ReadMoreButton({article} : Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
    .replace(/#/g, "[other character]");
    const url = `/article?${queryString}`;
    // console.log(url);
    router.push(url);
    
  }

  return (
    <button
      onClick={handleClick}  
      className="bg-green-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-green-500"
    >
      Read More
    </button>
  )
}

export default ReadMoreButton