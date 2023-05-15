import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Tabs from "./Tabs";
import "./style.css";
import html2pdf from "html2pdf.js";
import html2canvas from 'html2canvas';
// import html2canvas from 'html-to-image';
// import LabelPreview from '../../../Preview/LabelPreview'
const Index = ({ show, setShow }) => {
  const [pdfCall, setPdfCall] = useState(false);
  const { RecipeDetails } = useSelector((state) => state.totalRecipe);
  const containerRef = useRef(null);
console.log('REICPE DETAILS', RecipeDetails)

  const { Recipe_name, Kurze_bescheribung, Beilagen } = useSelector(
    (state) => state.Preview
  );


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
    container.style.filter = 'brightness(150%)';
  
    html2canvas(container, { backgroundColor: null })
      .then(function (canvas) {
        const dataURL = canvas.toDataURL('image/jpeg', 1.0);
        const link = document.createElement('a');
        link.download = 'image.jpg';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Reset the brightness of the container element
        container.style.filter = 'none';
      });
  }


  function generatePNG() {
    const container = containerRef.current;

    html2canvas(container).then(function (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
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
                  <button className="btn btn-success btn-sm " onClick={generatePNG}>PNG</button>
                  <button className="btn btn-success btn-sm" onClick={generateJPG} >JPG</button>
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
                    id="exampleRadios1"
                    value="option1"
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
                    id="exampleRadios1"
                    value="option1"
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    nur Nahrwerttabelle
                  </label>
                </div>
              </div>
              <div className="mt-4">
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
                      />
                      <label className="form-check-label">Angabe je</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
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
                    <input type="password" className="form-control" />
                  </div>
                  <div>
                    <select className="form-select  ">
                      <option selected value={RecipeDetails["unit-measure"]}>
                        {RecipeDetails["unit-measure"]}
                      </option>
                      <option value="ml">ml</option>
                    </select>
                  </div>
                </div>
                <div className="lable_div " style={{ height: "450px" }}>
                  <div
                    ref={containerRef}
                    className="d-flex w-75 justify-content-center  flex-column mt-4"
                    style={{  height: "auto" }}
                  >
                    <div className="d-flex justify-content-between w-75">
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
                        <h4>Rezeptrechner</h4>
                      </div>
                    </div>
                    <div className="w-100 d-flex gap-4">
                      <div
                        className="border border-1"
                        style={{ height: "200px", width: "300px" }}
                      ></div>
                      <div style={{ width: "200px" }}>
                        <p style={{ fontSize: "8px", lineHeight: "14px" }}>
                          Zutaten: Gaisburger Marsch (1), Hackbraten mit Soße
                          (2), Joghurt natur (fettarm) (Milch), Tortellini (roh)
                          (Gluten, Weizen, Eier), Sauerkirschen (im Glas), E-482
                          Calciumstearoyl-2-lactylat, DRM, A/B teting2333 -
                          (Nutella, Apples, Mehl) (Roggen, Gerste, mit
                          Geschmacksverstärker, mit Farbstoff,
                          Mehlbehandlungsmittel), Feldsalat, A test for the
                          searching (Roggen, Hafer, mit Antioxidationsmittel,
                          Säuerungsmittel), Fenchelsamen
                        </p>
                        <div
                          className="border border-1 text-center p-1"
                          style={{ fontSize: "10px" }}
                        >
                          ZU VERBRAUCHEN BIS: 05.01.2023
                        </div>
                        <div className="mt-3">
                          <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                            Netto Gewicht : 2250,0g
                          </p>
                          <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                            Alkohol: 0,0% Vol.
                          </p>
                          <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                            ggggggggggggggg
                          </p>
                          <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                            Fischfanggebiet:
                          </p>
                        </div>
                        <div>
                          <div style={{ float: "right" }}>
                            <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                              Preis:23.00E
                            </p>
                            <p style={{ fontSize: "10px", lineHeight: "6px" }}>
                              Preis pro 100g :4400 chf
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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