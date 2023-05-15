import React from "react";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import Accrodion from "../Accordion";
import SelectBox from "../../../inputFields/selectBox";
const Index = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Inhalt" value="1" />
            <Tab label="Layout" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div
            className=" d-flex flex-column justify-content-between  "
            style={{ height: "550px" }}
          >
            <Accrodion />
            <div className="mt-4 ">
              <button className="btn btn-success btn-lg">Speichern</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="text-start"   style={{ height: "550px" }} >
            <div className="border-bottom ">
              <p>Layout Einstellungen</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Querformat
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Hochformat
                </label>
              </div>
            </div>
            <div className="border-bottom mt-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="RadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Standard Etiketten Layout
                </label>
              </div>
              <div className="mt-3 mb-3">
                <SelectBox
                  options={[
                    { label: "60mm * 100mm", value: "option1" },
                    { label: "Option 2", value: "option2" },
                  ]}
                  value={"selectedOption"}
                />
              </div>
            </div>
            <div className="border-bottom mt-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="RadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Standard Etiketten Layout
                  <br></br>
                  <span className="text-muted" style={{ fontSize: "10px" }}>
                    Du hast die Möglichkeit bis zu 10 Layout Vorlagen zu
                    speichern. Die Vorlage kannst du auf verschiedene Rezepte
                    anwenden. Wähle aus gespeicherten Layout Vorlagen:
                  </span>
                </label>
              </div>
              <div className="mt-3 mb-3">
                <div className="d-flex justify-content-between mb-3 ">
                  <label className="form-label"> Gespeicherte Vorlage</label>
                  <div className="gap-2 d-flex">
                    <button className="btn btn-warning">save</button>
                    <button className="btn btn-success">scan</button>
                  </div>
                </div>

                <SelectBox
                  options={[
                    { label: "60mm * 100mm", value: "option1" },
                    { label: "Option 2", value: "option2" },
                  ]}
                  value={"selectedOption"}
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-4 mt-5">
              <div>
                <label for="customRange2" className="form-label">
                  Breite Nährwerttabelle
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="3"
                  max="5"
                  id="customRange2"
                />
              </div>
              <div>
                <label for="customRange2" className="form-label">
                  Breite Etikett
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="5"
                  id="customRange2"
                />
              </div>
              <div>
                <label for="customRange2" className="form-label">
                  Höhe Etikett
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="5"
                  id="customRange2"
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Index;
