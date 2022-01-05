import React, { useState, useEffect } from "react";
import { database, auth } from "../firebase/firebase-config";
import { collection, ref, getDocs } from "firebase/firestore";
import LessonBanner from "./LessonBanner";
import { CircularProgress } from "@mui/material";
import "./LessonsList.css";
import HomeComponent from "../components/home/HomeComponent";
import {useNavigate} from 'react-router-dom';
function LessonsList() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function getLessons() {
    setLoading(true);
    const querySnapshot = await getDocs(collection(database, "lessons"));
    querySnapshot.forEach((doc) => {
      const lesson = {
        id: doc.id,
        description: doc.get("description"),
        difficulty: doc.get("difficulty"),
        madeBy: doc.get("madeBy"),
        title: doc.get("title"),
        imgFileName: doc.get("imgFileName"),
      };
      setLessons((lessons) => [...lessons, lesson]);
    });
    setLoading(false);
  }

  const listOfLessons = lessons.map((lesson) => (
    <div key={lesson.id}>
      <LessonBanner
        title={lesson.title}
        description={lesson.description}
        madeBy={lesson.madeBy}
        difficulty={lesson.difficulty}
        name={lesson.imgFileName}
      />
      <br />
    </div>
  ));

  const listStyle = {
    display: "flex",

    flexWrap: "wrap",
    paddingTop: 35,
    justifyContent: "center",
    width: "34%",
    left: "3.53%",
    position: "relative",
    top: 30,
    overflowX: "hidden",
    overflowY: "scroll-hidden",
    height: "64vh",
  };

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <div>
      {loading && <CircularProgress sx={{position: "absolute", left: '50%', top: '50%'}} color="success" thickness="10"/> ||
      auth.currentUser !== null && 
        <div className="lessonComponent">
          <h2
            style={{
              fontSize: 14,
              color: "black",
              textAlign: "center",
              position: "absolute",
              top: 13,
              backgroundColor: "rgba(255, 255, 255, 1)",
              left: "3.53%",
              top: 103,
              zIndex: 300,
              padding: 5,
              width: "34.15%",
              margin: "0 auto",
            }}
          >
            NEWEST LESSONS
          </h2>
          <div className="lessons" style={listStyle}>
            {listOfLessons}
          </div>
        </div>
       ||
        auth.currentUser === null && <div>
            {navigate("/login")}
        </div>}
    </div>
  );
}
export default LessonsList;
