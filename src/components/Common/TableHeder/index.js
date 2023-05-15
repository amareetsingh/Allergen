import React, { useEffect, useState } from "react";
import { getTotalRecipe } from "../../../store/actions/Recipe";
import { useDispatch, useSelector } from "react-redux";
import {formData} from '../../DummyData'
const Index = ({ TotalRecipe, setRecipes, setIsOn, isOn }) => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");
  const {isLoading} = useSelector((state) => state.totalRecipe);

  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (inputValue == " ") {
      setRecipes(TotalRecipe);
    } else {
      const filterResults = TotalRecipe.filter((item) =>
        item["recipe-name"].toLowerCase().includes(inputValue.toLowerCase())
      );
      setRecipes(filterResults);
    }

    setFilterValue(inputValue);
  };

  const handleFilterData = (e) => {
    e.preventDefault();
    if (filterValue == " ") {
      setRecipes(TotalRecipe);
    } else {
      const filterResults = TotalRecipe.filter((item) =>
        item["recipe-name"].toLowerCase().includes(filterValue.toLowerCase())
      );
      setRecipes(filterResults);
    }
  };

  const handleClick = () => {
    setIsOn(!isOn);
  };



  const handleReload = ()=>{
    window.location.reload()
  }



  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          480/500 Rezepte{" "}
          <button
            className="btn btn-success "
            style={{ marginLeft: "10px" }}
            onClick={handleClick}
          >
            AZ
          </button>
          <button
            className="btn btn-success "
            style={{ marginLeft: "10px" }}
            onClick={handleReload}
          >
            {!isLoading? (
             "R"
            ) : (
              <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            )}
          </button>
        </div>
        <div>
          <button className="btn btn-success">Neves Rezept</button>
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-between">
        <div className="  w-50">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              onClick={handleFilterData}
            >
              Search
            </button>
          </form>
        </div>
        <button className="btn btn-success">Allergene Liste</button>
      </div>
    </div>
  );
};

export default Index;
