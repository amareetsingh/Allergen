import React, { useState } from "react";
import setting_icon from "../../../assests/satting_icon.svg";
import view_icon from "../../../assests/view_icon.svg";
import qr_code from "../../../assests/qr-code.svg";
import edit_icon from "../../../assests/edit_icon.svg";
import calculation_icon from "../../../assests/calculation_btn.svg";
import { getRecipeDetials } from "../../../store/actions/Recipe";
import { useDispatch, useSelector } from "react-redux";
import LebleModle from "../Models/LebleModle";
const Index = ({ item, index }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <>
      <LebleModle show={show} setShow={setShow} />
      <li
        className="list-group-item border border-1 d-flex justify-content-between align-items-start"
        key={index}
      >
        <div className="ms-2 me-auto">
          <input
            className="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          {item["recipe-name"]}
        </div>
        <div className=" d-flex">
          <img src={calculation_icon} alt="" className="btn" />
          <img src={qr_code} alt="" className="btn" />

          <img
            src={setting_icon}
            alt=""
            className="btn"
            onClick={() => {
              dispatch(getRecipeDetials(item));
              setShow(true);
            }}
          />
          <img src={view_icon} alt="" className="btn" />
          <img src={edit_icon} alt="" className="btn" />
        </div>
      </li>
    </>
  );
};

export default Index;
