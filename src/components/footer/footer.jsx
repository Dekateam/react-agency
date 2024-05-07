import { Grid } from "@mui/material";
import TopSectionFooter from "./TopSectionFooter";
import Details from "./details";
import CenterContainer from "./centerContainer";
import backGround from "../../../public/images/background.png";
import BottomSx from "./BottomSx";

const Footer = () => {
  return (
    //***************************/ Top container in footer /**********************************/
    <Grid container sx={{ position: "relative"}}>
        <TopSectionFooter />
      {/************************ Center container in footer ****************************/}
     
        <CenterContainer />
     
      {/****************************** Bottom container in footer ***************************/}

      <Grid
        xs={12}
        sx={{
          display: "flex",
          display:{xs:"none", md:"inline"},
          justifyContent: "center",
        }}
      >
        <Details />
      </Grid>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          display:{xs:"inline", md:"none"},
          justifyContent: "center",
        }}
      >
        <BottomSx/>
      </Grid>
    </Grid>
  );
};
export default Footer;
