import React, { useEffect, useRef, useState } from "react";
import { database, uploadLessonFile } from "../../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  TextField,
} from "@mui/material";
import "./App.css";

function CreateLessonComponent() {
  let title = useRef();
  let description = useRef();
  let imgFileName = useRef();
  let madeBy = useRef();

  const [selectedFile, setSelectedFile] = useState();
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [selectedDificulty, setSelectedDificulty] = useState();

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFileSelected(true);
  };

  const handleChange = (event) => {
    setSelectedDificulty(event.target.value);
  };

  async function handleSubmit() {
    if (isFileSelected) {
      uploadLessonFile(selectedFile);
      try {
        const docRef = await addDoc(collection(database, "lessons"), {
          title: title.current.value,
          description: description.current.value,
          imgFileName: selectedFile.name,
          madeBy: madeBy.current.value,
          difficulty: selectedDificulty,
        });
        console.log("Document written with ", docRef.id);
      } catch (e) {
        console.error("Error with this document : ", e);
      }
    } else {
      alert("choose a banner");
    }
  }
  useEffect(() => {});

  return (
    <div id="create-lesson">
      <input ref={title} type="text" id="lesson-title" />

      <textarea ref={description} rows="51" id="lesson-goal" />

      <input
        className="fileUpload"
        id="fileUpload"
        style={{ color: "white", height: 200 }}
        type="file"
        onChange={fileChangeHandler}
      />

      <InputLabel
        sx={{ color: "white", fontWeight: "bold" }}
        id="demo-simple-select-label"
      >
        Difficulty
      </InputLabel>
      <br />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={1}
        label="Age"
        sx={{ backgroundColor: "white" }}
        onChange={handleChange}
      >
        <MenuItem value={1}>Begginer</MenuItem>
        <MenuItem value={5}>Intermediate</MenuItem>
        <MenuItem value={10}>Advanced</MenuItem>
      </Select>
      <br></br>
      <input type="text" ref={madeBy} placeholder="Author name" />
      <input className="form-btn" type="submit" onClick={handleSubmit} />
    </div>
  );
}

export default CreateLessonComponent;
