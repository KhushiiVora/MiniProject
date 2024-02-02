import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import Certificate, { downloadPDF } from "./Certificate";
import Button from "../atoms/Button";

export default function GenerateCertificate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { instituteName, title, phrase, description, signature } =
    location.state;
  // console.log(template);
  const [formData, setFormData] = useState({
    studentName: "",
    studentWallet: "",
    rank: "",
    eventName: "",
  });
  const [date, setDate] = useState(dayjs());
  function handleChange(e) {
    const value = e?.target?.value;

    setFormData({
      ...formData,
      [e?.target?.name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("kmcka");
    const imgData = await downloadPDF();
    //blockchain function
    // backend calling to save the url of certificate in student model
    navigate("/");
  };

  return (
    <>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            label="Student Name"
            required
          />
          <br />
          <TextField
            type="text"
            name="studentWallet"
            value={formData.studentWallet}
            onChange={handleChange}
            label="Student e-Wallet Address"
            required
          />
          <TextField
            type="text"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            label="Student Rank"
            placeholder="1st"
          />
          <TextField
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            label="Event Name"
          />
          <br />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateField", "DateField"]}>
              <DateField
                label="Full letter month"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                format="LL"
                required
              />
            </DemoContainer>
          </LocalizationProvider>
          <Button type="submit" text="Generate" />
        </form>
      </div>
      <div>
        <Certificate
          instituteName={instituteName}
          title={title}
          phrase={phrase}
          description={description}
          eventName={formData.eventName}
          studentName={formData.studentName}
          studentWallet={formData.studentWallet}
          rank={formData.rank}
          date={date}
          signature={signature}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
