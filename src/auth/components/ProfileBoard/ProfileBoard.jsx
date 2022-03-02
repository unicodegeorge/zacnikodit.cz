import {
  CardMedia,
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  storage,
  database,
  fetchUserData,
} from "../../../firebase/firebase-config";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import {} from "../../../firebase/firebase-config";
import { EditSharp, ShareOutlined } from "@mui/icons-material";

function ProfileBoard() {
  const [profilePic, setProfilePic] = useState();
  const [userData, setUserData] = useState();
  const [user, loading, error] = useAuthState(auth);

  const handleEditProfile = () => {
    alert("To be continued")
  }

  useEffect(() => {
    if (user) {
        const asyncGetData = async () => {
          
          const data = await fetchUserData(user.uid);
          setUserData(data);
        }
        asyncGetData()
        .catch((error) => {
          alert(error);
        })
      }; 

      
  }, [loading]);

  return (
    <div>
      <Card sx={{ maxWidth: 450, margin: "0 auto", marginTop: "50px"}}>
        <CardMedia
          component="img"
          height="250"
          image={
            userData
              ? user?.photoURL 
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStek1E2cJ7vDNe5-8BCmh8HmYuyjkPEnHgPw&usqp=CAU"
          }
          alt="green iguana"
          sx={{borderBottom: "10px solid #eb4034"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={"red"}>
            {user?.displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData?.aboutme}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="text" onClick={handleEditProfile} endIcon={<EditSharp />}>
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default ProfileBoard;
