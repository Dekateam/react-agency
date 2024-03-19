import { Box, Button, TextField, Typography } from "@mui/material";


const CenterContainer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px 350px",
        }}
      >
        <Typography paddingTop="20px" variant="h5" textAlign={"center"}>
          آیا نمی خواهید چیزی درباره اخبار کسب و کار از دست بدهید؟
        </Typography>
        <Box display={"flex"} paddingTop="10px">
          <Button sx={{  backgroundColor: "white",padding:"0px 60px", color:"#4187AE","&:hover":{backgroundColor:"cadetblue",color:"InfoText"} }}>
            ارسال
          </Button>
          <TextField
            fullWidth
            label="ایمیل خود را وارد کنید"
            id="fullWidth"
            sx={{border:"1px solid white",color:"white"}}
          />
        </Box>
      </Box>
    </>
  );
};
export default CenterContainer;
