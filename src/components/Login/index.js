import React from "react";
import { useState } from "react";
import { loginUser } from "../../store/actions/Auth";
import { useDispatch } from "react-redux";
import {formData} from '../DummyData'
const Index = () => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState({});


  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setLoginValue((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  
  return (
    <div className="container  ">
      <div className="d-flex  justify-content-center align-items-center mt-5      ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3  ">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="username"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleChange}
              defaultValue={"tszkorupa@googlemail.com"}
            />
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              defaultValue={'12341234'}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
