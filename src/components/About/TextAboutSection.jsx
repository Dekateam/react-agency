import { Box, Stack, Typography } from "@mui/material";
// import placeholder from "../../assets/images/placeholder.png";
export default function TextAboutSection(props) {
  return (
    <>
      <Box>
        <Typography variant="p" color="#4187AE">
          {props.titr}
        </Typography>
        <Typography variant="h3" sx={{ py: 2 }}>
          {props.title1}
          <br />
          {props.title2}
        </Typography>
        <Typography variant="body1">{props.body}</Typography>
        <Box my={2}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            columnGap={2}
          >
            <img
              src={props.roundPhoto}
              alt={props.alt}
              style={{ borderRadius: "50%", width: 91, height: 91 }}
            />
            <figcaption>{props.titrPhoto}</figcaption>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
