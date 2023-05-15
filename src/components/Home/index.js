import React, { useEffect, useState } from "react";
import Navs from "../Common/Navs";
import TableHeader from "../Common/TableHeder";
import TableList from "../Common/TableList";
import { getTotalRecipe } from "../../store/actions/Recipe";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
import {formData} from '../DummyData'
const Index = () => {
  const dispatch = useDispatch();
  const { TotalRecipe, isLoading } = useSelector((state) => state.totalRecipe);
  const [recipes, setRecipes] = useState();
  const [isOn, setIsOn] = useState(false);
  const [pageData, setPageData] = useState([]);


  useEffect(() => {
    setRecipes(TotalRecipe && TotalRecipe?.recipes);
  }, [TotalRecipe]);



  useEffect(() => {
    dispatch(getTotalRecipe(formData));
  }, []);

  return (
    <div>
      <div className=" d-flex m-5 justify-content-between">
        <div className="col col-2 ">
          <Navs />
        </div>
        <div className="col  ">
          <TableHeader
            TotalRecipe={
              TotalRecipe && TotalRecipe.recipes && TotalRecipe.recipes
            }
            setRecipes={setRecipes}
            setIsOn={setIsOn}
            isOn={isOn}
          />
          <div className="mt-3">
            {isLoading ? (
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ height: "50vh" }}
              >
                <span className="visually-show">Loading...</span>
              </div>
            ) : (
              <ul className="list-group list-group-flush gap-3">
                {pageData &&
                  pageData.map((item, index) => (
                    <TableList item={item} index={index} />
                  ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <Pagination
              recipes={recipes && recipes}
              pageData={pageData}
              setPageData={setPageData}
              isOn={isOn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
