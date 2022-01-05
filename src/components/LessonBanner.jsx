import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  CardHeader,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase-config";
import { BsSearch } from 'react-icons/bs';
import './LessonsList.css';


function LessonBanner(props) {
  const pathRef = ref(storage, "lesson-banners/" + props.name);

  const [imgSrc, setImgSrc] = useState();
  useEffect(() => {
    getDownloadURL(pathRef).then((url) => {
      setImgSrc(url);
      console.log(url);
    });
  }, []);

  return (
    <Card variant="filled" sx={{ maxWidth: 345, minWidth: 345, backgroundColor:"rgb(47, 230, 93)", outline: "1px solid white", color: "white", fontWeight: "bold", fontFamily: "FiraCode" }} className="card" raised="true">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt="lesson banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" endIcon={<BsSearch />} sx={{backgroundColor: 'white'}} color="success">
          Try it out!
        </Button>
      </CardActions>
    </Card>
  );
}
export default LessonBanner;
