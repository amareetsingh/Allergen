import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Tabs from "./Tabs";
import "./style.css";
import NutritionalTable from "./NutritionalTable";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import { useDispatch } from "react-redux";
import { formData } from "../../../DummyData";
import { getUser } from "../../../../store/actions/Auth";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import html2canvas from 'html-to-image';
// import LabelPreview from '../../../Preview/LabelPreview'
const Index = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const [pdfCall, setPdfCall] = useState(false);
  const { RecipeDetails } = useSelector((state) => state.totalRecipe);
  const containerRef = useRef(null);
  const [isCheckedRadio, setIsCheckedRadio] = useState(false);
  const [AnableTableCheckValue, setAngableTableCheckValue] = useState(false);
  const [ReferenzmengeTableCheckbox, setReferenzmengeTableCheckbox] =
    useState(false);
  const { user, isLoading } = useSelector((state) => state.users);
  const [unit, setUnit] = useState();
  console.log("REICPE DETAILS", RecipeDetails);

  const {
    Recipe_name,
    Kurze_bescheribung,
    Beilagen,
    Zu_input_value,
    MindestensSelect,
    Netto_value,
    Netto_full_value,
    Abtropfgewicht_value,
    Fullgewicht_Value,
    fischanggebiet_value,
    Herkunfit_value,
    Chargen_number_value,
    PreisValue,
    PriesProValue,
    prepared_raw_value,
    layout_radio_check,
    changeLayoutValue,
    sliderValue,
    sliderValue2,
  } = useSelector((state) => state.Preview);

  const recipe = {
    recipeItems: RecipeDetails["recipe-items"],
    totalWeight: RecipeDetails["total-weight"],
    reductionFactor: RecipeDetails["reduction-factor"],
    nutritionalType: prepared_raw_value ? prepared_raw_value : "raw",
    // nutritionalType:'raw'
  };

  const unitOnchange = (e) => {
    const unitValue = e.target.value;
    setUnit(unitValue);
  };
  // generate pdf

  const generatePDF = (value) => {
    const options = {
      filename: "my-document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(containerRef.current).save();
  };

  // generate jpg

  function generateJPG() {
    const container = containerRef.current;

    // Increase the brightness of the container element
    container.style.filter = "brightness(150%)";

    html2canvas(container, { backgroundColor: null }).then(function (canvas) {
      const dataURL = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.download = "image.jpg";
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset the brightness of the container element
      container.style.filter = "none";
    });
  }

  function generatePNG() {
    const container = containerRef.current;

    html2canvas(container).then(function (canvas) {
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  const handleOptionChange = (event) => {
    setIsCheckedRadio(event.target.value === "true");
  };

  useEffect(() => {
    if (changeLayoutValue == 40) {
      setIsCheckedRadio(true);
    }
    if (changeLayoutValue !== 40) {
      setIsCheckedRadio(false);
    }
  }, [changeLayoutValue]);

  const AngabeTableCheckbox = (e) => {
    const checked = e.target.checked;
    setAngableTableCheckValue(checked);
  };
  const ReferenzmengeHandle = (e) => {
    const checked = e.target.checked;
    setReferenzmengeTableCheckbox(checked);
  };

  useEffect(() => {
    dispatch(getUser(formData));
  }, []);

  function cleanIntegerInFormat(number) {
    let formattedNumber = number.toFixed(1); // Fix the number to one decimal place
    formattedNumber = formattedNumber.replace(".", ","); // Replace the decimal point with a comma
    return formattedNumber;
  }
  let totalWeight = RecipeDetails["total-weight"];
  let reductionFactor = RecipeDetails["reduction-factor"];
  reductionFactor = reductionFactor ? reductionFactor : 1;
  let portionsCount = RecipeDetails["portions-count"];

  let Produktionsmenge_input = (totalWeight * reductionFactor) / portionsCount;
  Produktionsmenge_input = cleanIntegerInFormat(Produktionsmenge_input); // Replace with the appropriate JavaScript function
  let Produktionsmenge_inputDe = Produktionsmenge_input.replace(".", ",");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        // size="lg"
        // fullscreen={true}
        dialogClassName="custom-dialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontSize: "14px" }}
          >
            Etiketten Generater | {RecipeDetails["recipe-name"]}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="container d-flex">
            <div
              className="col p-2  "
              style={{ height: "650px", overflowY: "scroll" }}
            >
              <div className="d-flex justify-content-between ">
                <p>Druckberich</p>{" "}
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-success btn-sm "
                    onClick={generatePNG}
                  >
                    PNG
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={generateJPG}
                  >
                    JPG
                  </button>
                  <button
                    className="btn btn-success btn-sm "
                    onClick={generatePDF}
                  >
                    PDF
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p>Was möchtest du drucken?</p>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    checked={isCheckedRadio === false}
                    value="false"
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Vollstandiges lebensmitteletkett
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    checked={isCheckedRadio === true}
                    value="true"
                    onChange={handleOptionChange}
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    nur Nahrwerttabelle
                  </label>
                </div>
              </div>
              <div className="mt-4 ">
                <div>
                  <p>Welche Angaben soll deine Nährwerttabelle enthalten?</p>
                  <div className="d-flex gap-2 mt-4">
                    <div
                      className=" d-flex flex-column gap-3"
                      style={{ width: "170px" }}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          onChange={AngabeTableCheckbox}
                        />
                        <label className="form-check-label">Angabe je</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          onChange={ReferenzmengeHandle}
                        />
                        <label className="form-check-label">
                          mit Referenzmenge
                        </label>
                      </div>
                    </div>
                    <div style={{ width: "90px" }}>
                      {" "}
                      <input type="email" className="form-control" />{" "}
                    </div>

                    <label
                      for="inputPassword"
                      className="col-sm-2 col-form-label"
                    >
                      PortionsgroBe
                    </label>
                    <div style={{ width: "90px" }}>
                      <input
                        type="text"
                        className="form-control"
                        value={Produktionsmenge_inputDe}
                      />
                    </div>
                    <div>
                      <select className="form-select  " onChange={unitOnchange}>
                        <option selected value={RecipeDetails["unit-measure"]}>
                          {RecipeDetails["unit-measure"]}
                        </option>
                        <option value="ml">ml</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* **** table start  */}

              <div
                className="mt-6` d-flex gap-4 justify-content-center align-items-center"
                style={{ width: "100%", height: `${sliderValue2}%`,}}
              >
           
           <div
                  style={{
                    height:'80%',
                    width: "30px",
                    borderBottom: "1px solid black",
                    borderTop: "1px solid black",
                  }}
                  className="d-flex justify-content-center"
                >
                  <div
                    style={{
                      height: "100%",
                      width: "1px ",
                      background: "black",
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div  style={{ width: `${changeLayoutValue}%`  }}>
            
                  <div
                    className="d-flex align-items-center "
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{ height: "30px", borderRight: "1px solid black" }}
                    ></div>
                    <div
                      style={{ width: "100%", borderBottom: "1px solid black" }}
                    >
                      {" "}
                    </div>
                    <div
                      style={{ height: "30px", borderRight: "1px solid black" }}
                    ></div>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ width: "100%" }}
                  >
                    <div>
                      {Recipe_name && (
                        <h6 style={{ lineHeight: "30px" }}>{Recipe_name}</h6>
                      )}
                      {Kurze_bescheribung && (
                        <p style={{ lineHeight: "8px" }}>
                          {Kurze_bescheribung}
                        </p>
                      )}
                      {Beilagen && <p>{Beilagen}</p>}
                    </div>
                    <div>
                      {Chargen_number_value.isChecked && (
                        <span
                          style={{
                            fontSize: "12px",
                            lineHeight: "10px",
                            float: "right",
                            marginTop: "4px",
                          }}
                        >
                          {Chargen_number_value.value}
                        </span>
                      )}
                      <h4>Rezeptrechner</h4>
                    </div>
                  </div>

                  <div style={{ width: "100%" }}>
                    {isCheckedRadio == true ? (
                      <div
                        style={{ width: "100%", border: "1px solid yellow" }}
                      >
                        <NutritionalTable
                          unit={unit}
                          recipe={recipe}
                          AnableTableCheckValue={AnableTableCheckValue}
                          ReferenzmengeTableCheckbox={
                            ReferenzmengeTableCheckbox
                          }
                        />
                        {ReferenzmengeTableCheckbox && (
                          <p style={{ fontSize: "10px" }}>
                            *Referenzmenge für einen durchschnittlichen
                            Erwachsenen (8400 kJ/ 2000 kcal)
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        {/* add flex column  */}
                        <div
                          className={
                            layout_radio_check == true
                              ? " d-flex flex-column  gap-2"
                              : "d-flex gap-2"
                          }
                          style={{ width: "auto" }}
                        >
                          <div
                            className=""
                            style={{
                              minWidth: "200px",
                              width: `${sliderValue}%`,
                            }}
                          >
                            <NutritionalTable
                              unit={unit}
                              recipe={recipe}
                              AnableTableCheckValue={AnableTableCheckValue}
                              ReferenzmengeTableCheckbox={
                                ReferenzmengeTableCheckbox
                              }
                            />
                          </div>
                          {/* add width 100%  */}
                          <div
                            style={{
                              minWidth: "200px",
                              width:
                                layout_radio_check == true ? "100%" : "250px",
                            }}
                          >
                            <p style={{ fontSize: "8px", lineHeight: "14px" }}>
                              Zutaten: Gaisburger Marsch (1), Hackbraten mit
                              Soße (2), Joghurt natur (fettarm) (Milch),
                              Tortellini (roh) (Gluten, Weizen, Eier),
                              Sauerkirschen (im Glas), E-482
                              Calciumstearoyl-2-lactylat, DRM, A/B teting2333 -
                              (Nutella, Apples, Mehl) (Roggen, Gerste, mit
                              Geschmacksverstärker, mit Farbstoff,
                              Mehlbehandlungsmittel), Feldsalat, A test for the
                              searching (Roggen, Hafer, mit
                              Antioxidationsmittel, Säuerungsmittel),
                              Fenchelsamen
                            </p>
                            {Zu_input_value.isChecked && (
                              <div
                                className="border border-1 text-center p-1"
                                style={{ fontSize: "10px" }}
                              >
                                {MindestensSelect} {Zu_input_value.value}
                              </div>
                            )}
                            <div className="mt-3">
                              {Netto_value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Netto Gewicht : {Netto_value.value}
                                </p>
                              )}
                              {Abtropfgewicht_value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Abtropfgewicht :{Abtropfgewicht_value.value}
                                </p>
                              )}
                              {Fullgewicht_Value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Füllgewicht :{Fullgewicht_Value.value}
                                </p>
                              )}
                              {Netto_full_value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Netto Füllmenge :{Netto_full_value.value}
                                </p>
                              )}
                              {fischanggebiet_value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Fischfanggebiet :{fischanggebiet_value.value}
                                </p>
                              )}
                              {Herkunfit_value.isChecked && (
                                <p
                                  style={{
                                    fontSize: "10px",
                                    lineHeight: "6px",
                                  }}
                                >
                                  Herkunft :{Herkunfit_value.value}
                                </p>
                              )}
                            </div>
                            <div>
                              <div style={{ float: "right" }}>
                                {PreisValue.isChecked && (
                                  <p
                                    style={{
                                      fontSize: "10px",
                                      lineHeight: "6px",
                                    }}
                                  >
                                    Preis: {PreisValue.value}{" "}
                                    {PreisValue.select_Value}
                                  </p>
                                )}
                                {PriesProValue.isChecked && (
                                  <p
                                    style={{
                                      fontSize: "10px",
                                      lineHeight: "6px",
                                    }}
                                  >
                                    Preis pro 100g : {PriesProValue.value}{" "}
                                    {PriesProValue.select_Value}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          {ReferenzmengeTableCheckbox && (
                            <p style={{ fontSize: "10px", lineHeight: "4px" }}>
                              *Referenzmenge für einen durchschnittlichen
                              Erwachsenen (8400 kJ/ 2000 kcal)
                            </p>
                          )}
                          {
                            <p style={{ fontSize: "10px", lineHeight: "15px" }}>
                              {` ${
                                user && user.user && user.user.companyName
                              }, ${
                                user && user.user && user.user.streetNumber
                              }, ${
                                user && user.user && user.user.postalCode
                              }, ${user && user.user && user.user.city},${
                                user && user.user && user.user.country
                              }, Telefon:${
                                user && user.user && user.user.phone
                              }, E-Mail: ${
                                user && user.user && user.user.publicEmail
                              }`}{" "}
                            </p>
                          }
                        </div>
                      </>
                    )}
                  </div>
                </div>


              </div>
            </div>
            <div
              className="col col-4 border-start text-center "
              style={{ overflowY: "scroll" }}
            >
              <Tabs />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Index;
