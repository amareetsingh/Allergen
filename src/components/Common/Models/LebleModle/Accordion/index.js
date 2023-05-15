import React, { useEffect, useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputField from "../../../inputFields/inputField";
import CheckField from "../../../inputFields/checkField";
import SelectBox from "../../../inputFields/selectBox";
import { useSelector, useDispatch } from "react-redux";
import { getDateInDDMMYYYYFormat } from "../../../../../Services/function";
import {
  RecipeName,
  KurzeBascheribung,
  BeilagenAction,
} from "../../../../../store/actions/Preview";

const Index = () => {
  const dispatch = useDispatch();
  const KruzeRef = useRef();
  const BeilagenRef = useRef();
  const [expanded, setExpanded] = React.useState(false);
  const { RecipeDetails } = useSelector((state) => state.totalRecipe);
  const [isChecked, setIsChecked] = useState();
  const [isCheckedBeilagen, setIsCheckedBeilagen] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(
      RecipeName(
        RecipeDetails &&
          RecipeDetails["recipe-name"] &&
          RecipeDetails["recipe-name"]
      )
    );
  }, [RecipeDetails]);

  const handelRecipeName = (e) => {
    const Recipe_name = e.target.value;
    dispatch(RecipeName(Recipe_name));
  };

  const handleCheck = (e) => {
    const IsChecked = e.target.checked;
    setIsChecked(IsChecked);
  };

  const handleBeilgenCheck = (e) => {
    const check = e.target.checked;
    setIsCheckedBeilagen(check);
  };
  useEffect(() => {
    if (isChecked) {
      const KurzeValue = KruzeRef.current.value;
      // if (!KurzeValue) return;
      dispatch(KurzeBascheribung(KurzeValue));
    } else {
      let KurzeValue = "";
      dispatch(KurzeBascheribung(KurzeValue));
    }
  }, [isChecked]);

  useEffect(() => {
    if (isCheckedBeilagen) {
      const value = BeilagenRef.current.value;
      // if (!KurzeValue) return;
      dispatch(BeilagenAction(value));
    } else {
      let KurzeValue = "";
      dispatch(BeilagenAction(KurzeValue));
    }
  }, [isCheckedBeilagen]);

  const handleInputKruze = (e) => {
    const KurzeValue = e.target.value;
    // if (!KurzeValue) return;
    dispatch(KurzeBascheribung(KurzeValue));
  };
  const handleInputBeilagen = (e) => {
    const value = e.target.value;
    // if (!KurzeValue) return;
    dispatch(BeilagenAction(value));
  };

  return (
    <div className="d-flex flex-column gap-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lebensmittelke</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div style={{ width: "100%" }} className="text-start">
              <div className=" border-bottom ">
                <div className="mb-3">
                  <InputField
                    type={"text"}
                    defaultValue={RecipeDetails["recipe-name"]}
                    label={"Lebensmittelbezeichnung"}
                    onChange={handelRecipeName}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField
                      label={"Kurze Beschreibung"}
                      onChange={handleCheck}
                    />
                  </div>
                  <InputField
                    type={"text"}
                    ref={KruzeRef}
                    disabled={!isChecked}
                    onChange={handleInputKruze}
                  />
                  {/* <input type="text" ref={KruzeRef} value={'hello'} /> */}
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField
                      label={"Beilagen"}
                      onChange={handleBeilgenCheck}
                    />
                  </div>
                  <InputField
                    type={"text"}
                    onChange={handleInputBeilagen}
                    defaultValue="Beilagan:"
                    disabled={!isCheckedBeilagen}
                    ref={BeilagenRef}
                  />
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <SelectBox
                    options={[
                      {
                        label: "Mindestens haltbar bis",
                        value: "Mindestens haltbar bis",
                      },
                      {
                        label: "Zu verbrauchen bis",
                        value: "Zu verbrauchen bis",
                      },
                    ]}
                    value={"selectedOption"}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"  Mindestens heltbar bis"} />
                  </div>

                  <InputField
                    type={"text"}
                    defaultValue={
                      RecipeDetails["mhd-date"] &&
                      RecipeDetails["mhd-date"].date &&
                      getDateInDDMMYYYYFormat(RecipeDetails["mhd-date"].date)
                    }
                  />
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <SelectBox
                    options={[
                      { label: "Netto Gewicht", value: "Netto Gewicht" },
                      { label: "Netto Füllmenge", value: "Netto Füllmenge" },
                      {
                        label: "Abtropfgewicht & Füllgewicht",
                        value: "Abtropfgewicht & Füllgewicht",
                      },
                    ]}
                    value={"selectedOption"}
                    label={"Bezeichnung auswählen"}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"Netto Gewicht"} />
                  </div>
                  <InputField
                    type={"text"}
                    defaultValue={`${RecipeDetails.nettogewicht}g`}
                  />
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <SelectBox
                    options={[
                      { label: "Herkunft", value: "Herkunft" },
                      { label: "Fischfanggebiet", value: "Fischfanggebiet" },
                    ]}
                    value={"selectedOption"}
                    label={"Bezeichnung auswählen"}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"    Herkunfit/fischfanggebiet"} />
                  </div>

                  <InputField type={"text"} defaultValue="test location" />
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <InputField
                    type="text"
                    label="Artikel Nummer"
                    defaultValue={"abc-1232"}
                  />
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"Chargen Nummer"} />
                  </div>
                  <InputField
                    type={"text"}
                    defaultValue={RecipeDetails["batch-number"]}
                  />
                </div>

                <div className="mb-3">
                  <InputField
                    type={"text"}
                    defaultValue="1234"
                    label="EAN Code Nummer"
                  />
                </div>
                <div className="mb-3  ">
                  <InputField type={"text"} label="EAN Code" />
                </div>
                <div className="mb-3 d-flex gap-2 align-content-center ">
                  <InputField type={"text"} label="Preis" />
                  <InputField type={"text"} />
                </div>
                <div className="mb-3 d-flex gap-2 ">
                  <InputField
                    type={"text"}
                    label="Preis pro 100g"
                    defaultValue="44,00"
                  />
                  <InputField type={"text"} defaultValue="CHF" />
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"Alkoholgehalt anzeigen"} />
                  </div>
                  {/* <InputField type={"text"} defaultValue="11234-455-5-66 est:" /> */}
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField label={"Hinweise zur Aufbewahrung"} />
                  </div>
                  {/* <InputField type={"text"} defaultValue="11234-455-5-66 est:" /> */}
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Zutatenliste</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="text-start">
              <div className="border-bottom ">
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Zutatenliste
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    defaultValue={
                      "Zutaten: Gaisburger Marsch (1), Hackbraten mit Soße (2), Joghurt natur (fettarm) (Milch), Tortellini (roh) (Gluten, Weizen, Eier), Sauerkirschen (im Glas), E-482 Calciumstearoyl-2-lactylat, DRM (0,0%), Aal (Fisch) (0,0%), A/B teting2333 - (Nutella, Apples, Mehl) (Roggen, Gerste, mit Geschmacksverstärker, mit Farbstoff, Mehlbehandlungsmittel (i) ), Feldsalat, A test for the searching (Roggen, Hafer, mit Antioxidationsmittel, Säuerungsmittel (i) ), Fenchelsamen (0,0%)"
                    }
                    rows="7"
                  ></textarea>
                </div>
                <div className="d-flex gap-2 mb-3">
                  <button className="btn btn-success">
                    zutaten zusammenfenassen
                  </button>{" "}
                  <button className="btn btn-warning">Reset</button>
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3 d-flex gap-3 ">
                  <label className="form-label " style={{ fontSize: "14px" }}>
                    Allergene & Zusatzstoffe Kennzeichnung
                  </label>
                  <button className="btn btn-warning">edit</button>
                </div>
              </div>

              <div className=" mt-3">
                <label className="form-label"> QUID Regelug</label>
                <p className="text-muted">
                  Wähle Zutaten aus, für die in Klammern () die %-Angabe
                  angezeigt werden soll:
                </p>
                <div className="d-flex flex-column gap-3">
                  {RecipeDetails["recipe-items"].map((item, index) => (
                    <div className="form-check" key={index}>
                      <CheckField
                        label={item.ingredient.name}
                        defaultChecked={item.quid == "n" ||item.quid ==null ? false : true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Nährwerte</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="text-start">
              <div className="d-flex gap-3">
                Roh
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    Zubergeitet
                  </label>
                </div>
              </div>
              <div className="d-flex flex-column gap-4 mt-5">
                <InputField type={"text"} label="Brennwert" />
                <InputField type={"text"} label="Fett" />
                <InputField type={"text"} label="Davon Gesättigte Fettsäuren" />
                <InputField type={"text"} label="Kohlenhydrate" />
                <InputField type={"text"} label="Davon Zucker" />
                <InputField type={"text"} label="Eiweiß" />
                <InputField type={"text"} label="Salz" />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Adresse und Logo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="text-start">
              <div className="mb-3">
                <div className="form-check">
                  <CheckField label={"Logo"} />
                </div>
                <InputField type={"text"} />
              </div>
              <div className="d-flex flex-column gap-4">
                <InputField type={"text"} label="Firma" />
                <InputField type={"text"} label="StraBe" />
                <InputField type={"text"} label="Postleitzahlt" />
                <InputField type={"text"} label="Stadt" />
                <InputField type={"text"} label="Land" />
                <InputField type={"text"} label="Telefonnummer" />
                <InputField type={"text"} label="E-Mail" />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Index;
