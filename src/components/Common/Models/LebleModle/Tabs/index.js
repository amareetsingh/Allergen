import React, { useState } from "react";
import { Box } from "@mui/material";
import { Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import Accrodion from "../Accordion";
import SelectBox from "../../../inputFields/selectBox";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  setQuerformat_radio_layout,
  setHochformat_radio_layout,
  changeLayoutwithMm,
  setSliderAction,
  setSliderAction1,
  setSliderAction2
} from "../../../../../store/actions/Preview";
import { useDispatch } from "react-redux";
const Index = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeMM = (event) => {
    const value = event.target.value;
    dispatch(changeLayoutwithMm(value));
  };

  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const HandleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleQuerformatLayout = (e) => {
    dispatch(setQuerformat_radio_layout(false));
  };

  const handleHochformatLayout = (e) => {
    dispatch(setHochformat_radio_layout(true));
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSliderChange = (e) => {
    const value = e.target.value;
    dispatch(setSliderAction(value))
    console.log("slider value", value);
  };
  const handleSliderChange1 = (e) => {
    const value = e.target.value;
    dispatch(setSliderAction1(value))
    console.log("slider value", value);
  };
  const handleSliderChange2 = (e) => {
    const value = e.target.value;
    dispatch(setSliderAction2(value))
    console.log("slider value", value);
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
          <div className="text-start" style={{ height: "550px" }}>
            <div className="border-bottom ">
              <p>Layout Einstellungen</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onChange={handleQuerformatLayout}
                  defaultChecked={true}
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
                  onChange={handleHochformatLayout}
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
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Standard Etiketten Layout
                </label>
              </div>
              <div className="mt-3 mb-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-controlled-open-select-label">
                    Etikettengrößen
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    defaultValue={80}
                    label="Etikettengrößen"
                    onChange={handleChangeMM}
                    disabled={selectedOption === "option2"}
                  >
                    <MenuItem value={40}> 60mm x 50mm </MenuItem>
                    <MenuItem value={60}> 60mm x 80mm</MenuItem>
                    <MenuItem value={80}> 60mm x 100mm</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="border-bottom mt-5">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="RadioDefault"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
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

                <FormControl fullWidth>
                  <InputLabel id="demo-controlled-open-select-label">
                    Gespeicherte Vorlage
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    // value={age}
                    defaultValue={10}
                    label="Gespeicherte Vorlage"
                    onChange={handleChange}
                    disabled={selectedOption === "option1"}
                  >
                    <MenuItem value={10}>Standard Layout</MenuItem>
                    <MenuItem value={20}> Layout 2</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                    <MenuItem value={30}>New Layout Tina</MenuItem>
                  </Select>
                </FormControl>
                {/* <SelectBox
                  options={[
                    { label: "60mm * 100mm", value: "option1" },
                    { label: "Option 2", value: "option2" },
                  ]}
                  value={"selectedOption"}
                /> */}
              </div>
            </div>
            <div className="d-flex flex-column gap-4 mt-5">
              <div>
                <label for="customRange2" className="form-label">
                  Breite Nährwerttabelle
                </label>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={10}
                  max={100}
                  onChange={handleSliderChange}
                />
              </div>
              <div>
                <label for="customRange2" className="form-label">
                  Breite Etikett
                </label>
                <Slider
                  defaultValue={30}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={10}
                  max={100}
                  onChange={handleSliderChange1}

                />
              </div>
              <div>
                <label for="customRange2" className="form-label">
                  Höhe Etikett
                </label>

                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={70}
                  max={200}
                  onChange={handleSliderChange2}

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
