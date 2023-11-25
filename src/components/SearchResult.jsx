import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchQueryFromAPI } from "../utils/apiList";
import { AppContext } from "../context/ContextApI";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import Loader2 from "../utils/shared/Loader2";

const SearchResult = () => {
  const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchQueryFromAPI(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                {loading && <Loader2 />}
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
  )
}

export default SearchResult