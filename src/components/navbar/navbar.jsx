"use clint";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Navbar2 from "./navbar2";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "white" ? "white" : "#4187ae",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Navbar() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#4187ae" }}>
      <Grid container spacing={3}>
        <Grid item md={9} display={"flex"}>
          <Box alignItems={"center"} color={"white"} marginLeft={"50px"} sx={{display:{xs:"none", md:"flex"}}}>خبر روز </Box>
          <Box marginX={"20px"} display={"flex"} alignItems={"center"} sx={{display:{xs:"none", md:"flex"}}}>
            <Divider orientation="vertical" variant="middle" flexItem sx={{color:"white"}} />
            <Typography fontSize={"0.7rem"} marginX={"10px"} color={"white"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            </Typography>
          </Box>
          <Box sx={{ display: "flex",alignItems:"center",color:"white",display:{xs:"none", md:"flex"}}}>
            <EmailIcon />
            <Typography marginX={"10px"}> ایمیل:deka@gmail.com</Typography>
          </Box>
          <Box sx={{ display: "flex",alignItems:"center",marginX:"20px" , color:"white",display:{xs:"none", md:"flex"} }}>
            <LocalPhoneIcon />
            <Typography marginX={"10px"}>+9304027036</Typography>
          </Box>
        </Grid>

        <Grid item md={1}>
          <Box>
            {" "}
            <Box sx={{ minWidth: "50%", color:"white" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{color:"white"}}>EN</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="EN"
                  onChange={handleChange}
                  sx={{color:"white"}}
                >
                  <MenuItem value={10}>EN</MenuItem>
                  <MenuItem value={20}>FA</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

        </Grid>
        <Grid xs={12}>
            <Navbar2/>
        </Grid>
      </Grid>
    </Box>
  );
}
