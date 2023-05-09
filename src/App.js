import Header from "./components/Header";
import searchImages from "./Api";
import "./index.css";
import { useState } from "react";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";

function App() {
  const [valueInput, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [resultApi, setResultApi] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleChange = async (e) => {
    setValue(e.target.value);
  };

  const getApiResults = async (getValue, page) => {
    setIsSearched(true);
    setIsLoading(true);
    const result = await searchImages(getValue, page);
    setImages(result.results);
    setTotalPage(result.total_pages);
    result.total > 0 ? setResultApi(true) : setResultApi(false);
    setIsLoading(false);
  };

  const changePageValue = (value) => {
    setPage(value);
    getApiResults(valueInput, value);
  };

  return (
    <div className="app-container">
      <Header
        handleChange={handleChange}
        valueInput={valueInput}
        getApiResults={getApiResults}
      />
      {isLoading ? (
        <div className="loading"></div>
      ) : isSearched ? (
        <>
          <ImageList images={images} />
          {resultApi ? (
            <Pagination
              page={page}
              totalPages={totalPage}
              changePage={changePageValue}
            />
          ) : (
            <div className="message">Sorry, we couldn't find any image</div>
          )}
        </>
      ) : null}
    </div>
  );
}

export default App;
