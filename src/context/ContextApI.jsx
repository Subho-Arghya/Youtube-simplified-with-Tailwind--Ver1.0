import { createContext, useState, useEffect } from "react";
import { fetchQueryFromAPI } from "../utils/apiList";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategory, setSelectCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const fetchSelectedCategoryData = (query) => {
    setLoading(true)
    fetchQueryFromAPI(`search/?q=${query}`)
        .then(({contents}) => {
            console.log(contents)
            localStorage.setItem('query', JSON.stringify(query))
            localStorage.setItem('results', JSON.stringify(contents))            
            setSearchResults(contents)
            setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching data:", error);          
          setLoading(false);
        });
  }
  
  useEffect(() => {    
    if (!localStorage.getItem('query') || JSON.parse(localStorage.getItem('query')) !== selectCategory) {
      fetchSelectedCategoryData(selectCategory) 
    } else {
      let storedVideo = JSON.parse(localStorage.getItem('results'))
      setSearchResults(storedVideo)
    }
           
  }, [selectCategory])  

  const value = {
    loading,
    setLoading,
    searchResults,
    setSearchResults,
    selectCategory,
    setSelectCategory,
    mobileMenu,
    setMobileMenu,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
