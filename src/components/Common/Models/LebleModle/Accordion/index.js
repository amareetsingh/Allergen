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
import {
  getDateInDDMMYYYYFormat,
  getRowNutritionalVal,
} from "../../../../../Services/function";
import {
  RecipeName,
  KurzeBascheribung,
  BeilagenAction,
  MindestenSelectBox,
  Action_mid_Zu,
  set_netto_fullmenge,
  set_netto_gewticht,
  set_Abtropfgewicht,
  set_fullgewicht,
  set_fischanggebiet,
  set_Herkunfit,
  set_Chargen_number,
  setPreis,
  setPreisPro,
  setpreparedRaw,
} from "../../../../../store/actions/Preview";
import { ConstructionOutlined } from "@mui/icons-material";

const Index = () => {
  const dispatch = useDispatch();
  const KruzeRef = useRef();
  const BeilagenRef = useRef();
  const InputBoxZu = useRef();
  const InputFullmenge = useRef();
  const InputFullmenge2 = useRef();
  const getCheckBoxValue = useRef();
  const AbtropfwichtRef = useRef();
  const fullgewichtRef = useRef();
  const fischanggebietRef = useRef();
  const HerkunfitRef = useRef();
  const chargenNumberRef = useRef();
  const PreiesRef = useRef();
  const PreisProRef = useRef();
  const [expanded, setExpanded] = React.useState(false);
  const { RecipeDetails } = useSelector((state) => state.totalRecipe);
  const [isChecked, setIsChecked] = useState();
  const [isCheckedBeilagen, setIsCheckedBeilagen] = useState();
  const [isCheckedZu, setIsCheckedZu] = useState();
  const { MindestensSelect } = useSelector((state) => state.Preview);
  const [handleSelectBoxValue, sethandleSelectBoxValue] = useState();
  const [herkunftValue, setHerkunftValue] = useState();
  const [alkholeCheckValue, setAlkholeCheckValue] = useState();
  const [hinesiezurvalue, setHinwesiezuvalue] = useState();
  const [preisSelectValue, sePreisSelectValue] = useState();
  const [PreisCheckValue, setPreisCheckValue] = useState();
  const [PreisInputValue, setPreisInputValue] = useState();
  const [PriesProSelectValue, setPreisProSelectValue] = useState();
  const [PreisProInputValue, setPreisProInputValue] = useState();
  const [PreisProCheckValue, setPreisProCheckValue] = useState();

  const { prepared_raw_value } = useSelector((state) => state.Preview);

  const recipe = {
    recipeItems: RecipeDetails["recipe-items"],
    totalWeight: RecipeDetails["total-weight"],
    reductionFactor: RecipeDetails["reduction-factor"],
    nutritionalType: prepared_raw_value ? prepared_raw_value : "raw",
    // nutritionalType:'raw'
  };

  const nutritionalValues = getRowNutritionalVal(
    recipe.recipeItems,
    recipe.totalWeight,
    recipe.nutritionalType,
    recipe.reductionFactor
  );

  const preparedRawHandleCheckbox = (e) => {
    const checked = e.target.checked;

    if (checked == true) {
      dispatch(setpreparedRaw("prepared"));
    } else {
      dispatch(setpreparedRaw("raw"));
    }
  };

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
    setIsCheckedZu(true);
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

  // ******************** select box **********
  const handleSelectChange = (e) => {
    const Select_Value = e.target.value;

    dispatch(MindestenSelectBox(Select_Value));

    // console.log('select box value ', value)
  };

  const handleCheck_Zu = (e) => {
    const checked = e.target.checked;
    setIsCheckedZu(checked);
  };

  useEffect(() => {
    const InputValue = InputBoxZu.current.value;

    dispatch(MindestenSelectBox("Mindestens haltbar bis"));

    const Parmas = {
      isChecked: isCheckedZu,
      value: InputValue,
    };
    // if (!KurzeValue) return;
    dispatch(Action_mid_Zu(Parmas));
  }, [isCheckedZu, RecipeDetails]);

  const onChangeZu = (e) => {
    const vlaue = e.target.value;

    const Parmas = {
      isChecked: isCheckedZu,
      value: vlaue,
    };
    // if (!KurzeValue) return;
    dispatch(Action_mid_Zu(Parmas));
  };

  const handleChanageFullmenge = (e) => {
    const value = e.target.value;
    sethandleSelectBoxValue(value);
  };
  const handleCheckNetto = (e) => {
    const checked = e.target.checked;
    const value = InputFullmenge.current.value;
    const parmas = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_netto_gewticht(parmas));
  };

  const inputhandlefullmenge = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };
    dispatch(set_netto_gewticht(parmas));
  };

  const Netto_fullmenege_Check_box = (e) => {
    const checked = e.target.checked;
    const value = InputFullmenge2.current.value;

    const parmas = {
      isChecked: checked,
      value: value,
    };

    dispatch(set_netto_fullmenge(parmas));
  };

  const handleInputfullmenage = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };
    dispatch(set_netto_fullmenge(parmas));
  };

  const Abtropfgwicht_Check_box = (e) => {
    const checked = e.target.checked;
    const value = AbtropfwichtRef.current.value;
    const parmas = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_Abtropfgewicht(parmas));
  };

  const abtropfgwicht_input_field = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };
    dispatch(set_Abtropfgewicht(parmas));
  };

  const fullgewicht_input_field = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };

    dispatch(set_fullgewicht(parmas));
  };

  const fullgewicht_check_box = (e) => {
    const checked = e.target.checked;
    const value = fullgewichtRef.current.value;
    const params = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_fullgewicht(params));
  };

  const HerkunftSelect_box = (e) => {
    const value = e.target.value;
    setHerkunftValue(value);
  };

  const fischanggebiet_Check_box = (e) => {
    const checked = e.target.checked;
    const value = fischanggebietRef.current.value;
    const parmas = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_fischanggebiet(parmas));
  };

  const fischanggebiet_input_field = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };
    dispatch(set_fischanggebiet(parmas));
  };

  const Herkunfit_Check_box = (e) => {
    const checked = e.target.checked;
    const value = HerkunfitRef.current.value;
    const parmas = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_Herkunfit(parmas));
  };

  const Herkunfit_input_fild = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };
    dispatch(set_Herkunfit(parmas));
  };

  const ChargenNumber_check_box = (e) => {
    const checked = e.target.checked;
    const value = chargenNumberRef.current.value;
    const parmas = {
      isChecked: checked,
      value: value,
    };
    dispatch(set_Chargen_number(parmas));
  };

  const ChargenNumber_input_field = (e) => {
    const value = e.target.value;
    const parmas = {
      isChecked: true,
      value: value,
    };

    dispatch(set_Chargen_number(parmas));
  };

  const AlkholeCheckbox = (e) => {
    const checked = e.target.checked;
    setAlkholeCheckValue(checked);
  };

  const HinwesiezurCheck_box = (e) => {
    const checked = e.target.checked;
    setHinwesiezuvalue(checked);
  };

  const Preis_Check_box = (e) => {
    const checked = e.target.checked;
    const value = PreiesRef.current.value;
    setPreisInputValue(value);
    setPreisCheckValue(checked);
  };

  const Preis_input_field = (e) => {
    const value = e.target.value;
    setPreisInputValue(value);
  };

  const Preis_Select_box = (e) => {
    const value = e.target.value;
    sePreisSelectValue(value);
  };

  useEffect(() => {
    const parmas = {
      isChecked: PreisCheckValue,
      value: PreisInputValue,
      select_Value: preisSelectValue,
    };
    dispatch(setPreis(parmas));
  }, [PreisCheckValue, PreisInputValue, preisSelectValue]);

  // *********

  const PreisPro_Check_box = (e) => {
    const checked = e.target.checked;
    const value = PreisProRef.current.value;

    setPreisProCheckValue(checked);
    setPreisInputValue(value);
  };
  const PreisPro_Input_field = (e) => {
    const value = e.target.value;
    setPreisProInputValue(value);
  };

  const PreisPro_Select_box = (e) => {
    const value = e.target.value;
    setPreisProSelectValue(value);
  };
  useEffect(() => {
    const parmas = {
      isChecked: PreisProCheckValue,
      value: PreisProInputValue,
      select_Value: PriesProSelectValue,
    };
    dispatch(setPreisPro(parmas));
  }, [PreisProCheckValue, PreisProInputValue, PriesProSelectValue]);
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
                    defaultValue="Mindestens haltbar bis"
                    onChange={handleSelectChange}
                    ref={getCheckBoxValue}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField
                      defaultChecked={
                        RecipeDetails["mhd-date"] &&
                        RecipeDetails["mhd-date"].date
                      }
                      label={
                        MindestensSelect
                          ? MindestensSelect
                          : "Mindestens haltbar bis"
                      }
                      onChange={handleCheck_Zu}
                    />
                  </div>

                  <InputField
                    type={"text"}
                    ref={InputBoxZu}
                    onChange={onChangeZu}
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
                    onChange={handleChanageFullmenge}
                    options={[
                      { label: "Netto Gewicht", value: "Netto Gewicht" },
                      { label: "Netto Füllmenge", value: "Netto Füllmenge" },
                      {
                        label: "Abtropfgewicht & Füllgewicht",
                        value: "Abtropfgewicht & Füllgewicht",
                      },
                    ]}
                    label={"Bezeichnung auswählen"}
                  />
                </div>
                {handleSelectBoxValue == "Abtropfgewicht & Füllgewicht" ? (
                  <div className="mb-3">
                    <div className="form-check">
                      <CheckField
                        label={"Abtropfgewicht "}
                        onChange={Abtropfgwicht_Check_box}
                      />
                    </div>
                    <InputField
                      type={"text"}
                      ref={AbtropfwichtRef}
                      onChange={abtropfgwicht_input_field}
                      // defaultValue={`${RecipeDetails.nettogewicht}g`}
                      defaultValue={"10,0g"}
                    />
                    <div className="mt-4">
                      <div className="form-check">
                        <CheckField
                          label={"Füllgewicht"}
                          onChange={fullgewicht_check_box}
                        />
                      </div>
                      <InputField
                        type={"text"}
                        ref={fullgewichtRef}
                        onChange={fullgewicht_input_field}
                        // defaultValue={`${RecipeDetails.nettogewicht}g`}
                        defaultValue={"00,0g"}
                      />
                    </div>
                  </div>
                ) : handleSelectBoxValue == "Netto Füllmenge" ? (
                  <div className="mb-3">
                    <div className="form-check">
                      <CheckField
                        label={"Netto Füllmenge"}
                        onChange={Netto_fullmenege_Check_box}
                      />
                    </div>
                    <InputField
                      type={"text"}
                      ref={InputFullmenge2}
                      onChange={handleInputfullmenage}
                      // defaultValue={`${RecipeDetails.nettogewicht}g`}
                      defaultValue={"10,0g"}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <div className="form-check">
                      <CheckField
                        label={"Netto Gewicht"}
                        onChange={handleCheckNetto}
                      />
                    </div>
                    <InputField
                      type={"text"}
                      ref={InputFullmenge}
                      onChange={inputhandlefullmenge}
                      // defaultValue={`${RecipeDetails.nettogewicht}g`}
                      defaultValue={"10,0g"}
                    />
                  </div>
                )}
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <SelectBox
                    options={[
                      { label: "Herkunft", value: "Herkunft" },
                      { label: "Fischfanggebiet", value: "Fischfanggebiet" },
                    ]}
                    label={"Bezeichnung auswählen"}
                    onChange={HerkunftSelect_box}
                  />
                </div>
                {herkunftValue == "Fischfanggebiet" ? (
                  <div className="mb-3">
                    <div className="form-check">
                      <CheckField
                        onChange={fischanggebiet_Check_box}
                        label={"    fischfanggebiet/Herkunfit"}
                      />
                    </div>

                    <InputField
                      type={"text"}
                      ref={fischanggebietRef}
                      onChange={fischanggebiet_input_field}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <div className="form-check">
                      <CheckField
                        label={"    Herkunfit/fischfanggebiet"}
                        onChange={Herkunfit_Check_box}
                      />
                    </div>

                    <InputField
                      type={"text"}
                      ref={HerkunfitRef}
                      onChange={Herkunfit_input_fild}
                      defaultValue="test location"
                    />
                  </div>
                )}
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
                    <CheckField
                      label={"Chargen Nummer"}
                      onChange={ChargenNumber_check_box}
                    />
                  </div>
                  <InputField
                    type={"text"}
                    ref={chargenNumberRef}
                    onChange={ChargenNumber_input_field}
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
                  <div className="form-check">
                    <CheckField label="EAN Code" />
                  </div>
                  <InputField type={"text"} />
                </div>
                <div className="mb-3 d-flex gap-2 align-content-center flex-column ">
                  <div className="form-check">
                    <CheckField label="Preis" onChange={Preis_Check_box} />
                  </div>
                  <div className="d-flex gap-2">
                    <InputField
                      type={"text"}
                      ref={PreiesRef}
                      onChange={Preis_input_field}
                    />
                    <SelectBox
                      onChange={Preis_Select_box}
                      options={[
                        { label: "€", value: "€" },
                        { label: "CHF", value: "CHF" },
                      ]}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex gap-2   align-content-center flex-column ">
                  <div className="form-check">
                    <CheckField
                      label="Preis pro 100g"
                      onChange={PreisPro_Check_box}
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <InputField
                      type={"text"}
                      onChange={PreisPro_Input_field}
                      defaultValue="44,00"
                      ref={PreisProRef}
                    />
                    <SelectBox
                      onChange={PreisPro_Select_box}
                      options={[
                        { label: "CHF", value: "CHF" },
                        { label: "€", value: "€" },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className="border-bottom mt-5">
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField
                      label={"Alkoholgehalt anzeigen"}
                      onChange={AlkholeCheckbox}
                    />
                  </div>
                  {alkholeCheckValue == true && <InputField type={"text"} />}
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <CheckField
                      label={"Hinweise zur Aufbewahrung"}
                      onChange={HinwesiezurCheck_box}
                    />
                  </div>
                  {hinesiezurvalue == true && <InputField type={"text"} />}
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
                        defaultChecked={
                          item.quid == "n" || item.quid == null ? false : true
                        }
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
                    onChange={preparedRawHandleCheckbox}
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
                <InputField
                  type={"text"}
                  label="Brennwert"
                  value={`${nutritionalValues.energy_kj} kJ / ${nutritionalValues.energy_kcal} kcal`}
                />
                <InputField
                  type={"text"}
                  label="Fett"
                  value={`${nutritionalValues.fat_gram} g`}
                />

                <InputField
                  type={"text"}
                  label="Davon Gesättigte Fettsäuren"
                  value={`${nutritionalValues.sat_fat_gram} g`}
                />
                <InputField
                  type={"text"}
                  label="Kohlenhydrate"
                  value={`${nutritionalValues.carbs_gram} g`}
                />
                <InputField
                  type={"text"}
                  label="Davon Zucker"
                  value={`${nutritionalValues.sugar_gram} g`}
                />
                <InputField
                  type={"text"}
                  label="Eiweiß"
                  value={`${nutritionalValues.protein_gram} g`}
                />
                <InputField
                  type={"text"}
                  label="Salz"
                  value={`${nutritionalValues.salt_gram} g`}
                />
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
