import { Box , Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import largeImg from "../../../public/images/developer.jpg";

const Gallery = () => {
  return (
    <>
      <Grid container sx={{ marginTop: "10vh" }}>
        <Grid xs={12} md={6}>
          <Typography>کامپوننت محیا</Typography>
        </Grid>

<Grid xs={12} md={6} container padding={"10px"}>
        <Grid container xs={12} >
          {/* image large & top */}
          <Grid xs={8} marginTop={"50px"} zIndex={10} display={"flex"} justifyContent={"center"}>
            <img
              src={largeImg}
              alt="Large Image"
              width={"100%"}
              height={"100%"}
            />
          </Grid>
          <Grid xs={4}>
            <Box sx={{position:{md:"relative"},right:{ md:"50px"}}}  display={"flex"} justifyContent={"center"}>
            <svg
              width="150%"
              height="100%"
              viewBox="0 0 241 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              sx={{position:"relative", left:"50px"}}
            >
              <circle cx="2.6549" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="2.99474" r="2.6549" fill="#BDBEBD" />
              <circle cx="2.6549" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="29.1647" r="2.6549" fill="#BDBEBD" />
              <circle cx="2.6549" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="55.3336" r="2.6549" fill="#BDBEBD" />
              <circle cx="2.6549" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="81.5035" r="2.6549" fill="#BDBEBD" />
              <circle cx="2.6549" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="107.673" r="2.6549" fill="#BDBEBD" />
              <circle cx="2.6549" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="28.8246" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="54.9944" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="81.164" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="107.334" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="133.503" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="159.673" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="185.843" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="212.012" cy="133.843" r="2.6549" fill="#BDBEBD" />
              <circle cx="238.182" cy="133.843" r="2.6549" fill="#BDBEBD" />
            </svg>
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12}>
            <Grid xs={7} marginTop={"20px"} >
                <Box sx={{marginLeft: {md:"50px"}}} >
            <img
              src={largeImg}
              alt="Large Image"
              width={"90%"}
              height={"90%"}
            />
            </Box>
            </Grid>

            <Grid xs={5} marginTop={"10px"} display={"flex"} justifyContent={"center"}>
            <img
              src={largeImg}
              alt="Large Image"
              width={"80%"}
              height={"80%"}
              
            />
            </Grid>
        </Grid>

        </Grid>
       
      </Grid>
    </>
  );
};
export default Gallery;
