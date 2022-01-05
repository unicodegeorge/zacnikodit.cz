import * as React from "react";
import { signOut } from "firebase/auth";
import { logOff } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { FormControlLabel, FormLabel, Box, Typography} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

function BottomNav() {

  const handleLogOff = () => {
    logOff();
    navigate("/login");
  };
  const navigate = useNavigate();
  

  const divStyle = {
    left: "90px",
    width: "40%",
    position: "relative",
  };
  const currYear = new Date().getFullYear();
  return (
      <Box bgcolor={"rgb(255, 255, 255, 0.8)"} sx={{ paddingTop: 0.3, paddingBottom: 0.3, width: '100%', position: 'absolute', left: '0%', bottom: 0}}>
        <Typography color={"black"} fontWeight={"bolder"} textAlign={"center"} variant="caption" sx={{position: 'relative', left: '40%', top: '-4%', fontFamily: 'Fira Code'}}> NAUCSEKODIT.WEB.APP © 2021 - {currYear} </Typography>
      </Box>
  );
}
export default BottomNav;
