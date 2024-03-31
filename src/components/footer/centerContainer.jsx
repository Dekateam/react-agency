import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CenterContainer = () => {
  return (
    <Grid
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        position: { lg: "absolute" },
        top: { lg: "33%" },
        right: { lg: "10%" },
        left: { lg: "10%" },
        backgroundImage: "url('../../../public/images/background.png')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        color: "white",
        flexGrow: 1,
        borderRadius:{lg:"10px"}

      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "700px",
          height: "300px",
        }}
      >
        <Typography
          sx={{ padding: { lg: "20px 150px" } }}
          variant="h5"
          textAlign={"center"}
          paddingX={"20px"}
        >
          آیا نمی خواهید چیزی درباره اخبار کسب و کار از دست بدهید؟
        </Typography>
        <Box display={"flex"} paddingTop="10px" paddingX={"20px"}>
          <Button
            sx={{
              backgroundColor: "white",
              padding: "0px 60px",
              color: "#4187AE",
              "&:hover": { backgroundColor: "cadetblue", color: "InfoText" },
            }}
          >
            ارسال
          </Button>
          <TextField
            fullWidth
            label="ایمیل خود را وارد کنید"
            id="fullWidth"
            sx={{ border: "1px solid white", color: "white" }}
          />
        </Box>
      </Box>
    </Grid>
  );
};
export default CenterContainer;
