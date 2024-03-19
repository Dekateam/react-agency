import { Grid } from "@mui/material";
import TopSectionFooter from "./TopSectionFooter";
import Details from "./details";
import CenterContainer from "./centerContainer";
import backGround from "../../../public/images/background.png";

const Footer = () => {
  return (
    //***************************/ Top container in footer /**********************************/
    <Grid container sx={{ position: "relative" }}>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#454545",
        }}
      >
        <TopSectionFooter />
      </Grid>
      {/************************ Center container in footer ****************************/}
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "30%",
          right: "10%",
          left: "10%",
          backgroundImage: "url('../../../public/images/background.png')",
          backgroundSize: "cover",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <CenterContainer />
      </Grid>
      {/****************************** Bottom container in footer ***************************/}

      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Details />
      </Grid>
    </Grid>
  );
};
export default Footer;
