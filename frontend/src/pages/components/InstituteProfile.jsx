import React, { useState } from "react";
import { useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "../atoms/Button";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function InstituteProfile({ institute }) {
  const templates = useSelector((state) => state.template.templates);

  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedTemplate(event.target.value);
  };
  // async function handleClick(e) {
  //   await axios
  //     .get("/profile", { withCredentials: true })
  //     .then()
  //     .catch((error) => console.log(error));
  // }
  return (
    <>
      {institute.instituteName}'s Profile page
      {/* <Button type="button" text="click me" onClick={handleClick} /> */}
      <div>
        {templates.length && (
          <div>
            <h4>Choose template to generate certificate</h4>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Template
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedTemplate}
                label="Select Template"
                onChange={handleChange}
              >
                {templates.map((template, index) => {
                  return (
                    <MenuItem key={template._id} value={index}>
                      {template.title}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        )}
      </div>
      <Button
        type="button"
        text="Generate certificate template"
        onClick={() => navigate(`/profile/${institute._id}/template-form`)}
      />
      <Button
        type="submit"
        text="Generate certificate"
        onClick={() =>
          navigate(`/profile/${institute._id}/certificate-form`, {
            state: templates[selectedTemplate],
          })
        }
      />
    </>
  );
}
