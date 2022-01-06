import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Modal,
  Typography,
  Box,
  FormControl,
  Input,
  TextField,
  InputLabel,
  IconButton,
} from "@mui/material";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  app,
  auth,
  database,
  isProfileSetupDone,
  uploadProfileFile,
} from "../../../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppRegistrationTwoTone, PhotoCamera } from "@mui/icons-material";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function ProfileSetup(props) {
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState();

  const displayNameRef = useRef();
  const aboutMeRef = useRef();
  const navigate = useNavigate();
  const handleFinishSetup = async () => {
    await setDoc(doc(database, "users", auth.currentUser.uid), {
      displayName: displayNameRef.current.value,
      aboutme: aboutMeRef.current.value,
      uid: auth.currentUser.uid,
      friends: [],
      profilePicture: "profile-picture",
      setupDone: true,
    }).catch(function(err) {
      alert(err);
    });



    await uploadProfileFile(profilePic);
    
    props.setProfileSetupDone(true);
    setOpen(false);
  };

  const handleFileUpload = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {

    if (user) {
      if(isProfileSetupDone(user.uid)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

  }


    , [loading]);

  const style = {
    width: 500,
    height: 400,
    margin: "0 auto",
    backgroundColor: "rgb(158, 214, 139)",
    padding: 10,
    fontFamily: "Fira Code",
    fontWeight: "bold",
    color: "white",
    border: "4px solid white",
    marginTop: "50px",
  };

  return (

    user !== null && <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            gutterBottom={true}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            SETUP YOUR PROFILE
          </Typography>
          <form>
            <FormControl
              label="wow"
              variant="outlined"
              margin="dense"
              fullWidth={true}
            >
              <InputLabel htmlFor="displayName" color="success">
                {" "}
                DISPLAY NAME{" "}
              </InputLabel>
              <Input inputRef={displayNameRef} aria-describedby="displayName" />
            </FormControl>

            <FormControl
              label="img"
              variant="outlined"
              margin="normal"
              fullWidth={true}
            >
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  aria-describedby="profilePicture"
                  type="file"
                  onChange={handleFileUpload}
                />
                <IconButton
                  color="success"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </FormControl>
            <FormControl
              label="wow"
              variant="outlined"
              margin="dense"
              fullWidth={true}
            >
              <TextField
                id="aboutMe"
                multiline={true}
                rows="5"
                sx={{ color: "white" }}
                inputRef={aboutMeRef}
                InputLabelProps={{ "aria-describedBy": "aboutMe" }}
              />
            </FormControl>

            <FormControl
              label="wow"
              variant="outlined"
              margin="normal"
              fullWidth={true}
            >
              <IconButton
                color="info"
                component="span"
                onClick={handleFinishSetup}
              >
                <AppRegistrationTwoTone />
              </IconButton>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </>)
}
export default ProfileSetup;
