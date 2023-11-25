import React, { useContext, useEffect } from "react";

import { AppContext } from "../context/ContextApI";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

function Feed() {
  const { loading, searchResults } = useContext(AppContext);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-3.5rem)] bg-black">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5">
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
