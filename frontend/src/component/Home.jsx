import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import SearchResultCard from "./SearchResultCard";
import SearchBar from "./SearchBar";

function Home() {
  const res = useSelector((state) => state.data);

  const youtube = res.youtubeData;
  const goocus = res.goocusData;
console.log("data")
  console.log(goocus, youtube);

  return (
    <>
      <SearchBar/>
      <div className="container mx-auto p-6">
  <h1 className="text-xl mb-4"></h1>
  <div className="flex gap-4 overflow-x-auto scrollbar-hide">
    {youtube &&
      youtube.map((video, index) => (
        <div className="min-w-[300px]">
          <VideoCard key={index} video={video} />
        </div>
      ))}
  </div>




      <h1 className="text-xl  my-6"></h1>
      <div className="">
        {goocus &&
          goocus.map((item, index) => (
            <SearchResultCard  key={index} item={item} />
            
          ))}
      </div>
    </div>
    </>

  );
}

export default Home;
