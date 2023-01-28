import "./App.css";
import FoodComponent from "./components/FoodComponent";
import { useState, useEffect } from "react";
import MenuData from "./data/MenuData";

function App() {
  const [foodData, setFoodData] = useState(MenuData);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);
  // All data are 18
  // the amount of Data in each page
  // pagination = 18 / the amount of Data on each page
  // 18 / 6= 3
  // 1=[0-5],2=[6-11],3=[12-17],

  const pagination = () => {
    const foodPerPage = 6; // show 6 food image on a page

    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage; //[0,],[6,],[12,]
      return MenuData.slice(start, start + foodPerPage);
    });
    return newFood;
  };
  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setFoodData(paginate[page]);
  }, [page]);
  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((data, index) => {
          return <FoodComponent key={index} {...data} />;
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePage(index)}
              className={`page-btn ${index === page ? "active-btn" : null}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
