import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/ContextApI";
import Header from "./components/Header";
import Feed from "./components/Feed" 
import SearchResult from "./components/SearchResult"
import VideoDetails from "./components/VideoDetails"

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="/searchresult/:searchQuery" element={<SearchResult />}/>
            <Route path="/videodetails/:id" element={<VideoDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
