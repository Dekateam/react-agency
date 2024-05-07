import { Avatar, Box, Link, List, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Logo from "../../../public/images/ArtboardLogo.png"

const BottomSx = () => {
  return (
    <>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        color={"white"}
        backgroundColor={"#113143"}
        alignItems={"center"}
        paddingTop={"50px"}
        paddingY={"20px"}
      >
        <Box component={"img"}
        src={Logo}
        alt="not loading..."/>
        <Typography variant="h3" paddingTop={"20px"}>
          DEKA TEAM
        </Typography>
        <Typography variant="h6">
          Best Agency In Iran
        </Typography>
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              paddingX: "30px",
            }}
          >
            <Link href="#">
              <Avatar
                sx={{
                  border: "1px solid #00b8d4",
                  backgroundColor: "inherit",
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <InstagramIcon
                  fontSize="0.75rem"
                  sx={{
                    color: "#00b8d4",
                  }}
                />
              </Avatar>
            </Link>

            <Link href="#">
              <Avatar
                sx={{
                  border: "1px solid #00b8d4",
                  backgroundColor: "inherit",
                  marginLeft: "10px",
                  marginRight: "10px",
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <TelegramIcon
                  fontSize="0.75rem"
                  sx={{
                    color: "#00b8d4",
                  }}
                />
              </Avatar>
            </Link>

            <Link href="#">
              <Avatar
                sx={{
                  border: "1px solid #00b8d4",
                  backgroundColor: "inherit",
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <LinkedInIcon
                  fontSize="0.75rem"
                  sx={{
                    color: "#00b8d4",
                  }}
                />
              </Avatar>
            </Link>
            <Link href="#">
              <Avatar
                sx={{
                  border: "1px solid #00b8d4",
                  backgroundColor: "inherit",
                  marginLeft: "10px",
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <FacebookIcon
                  fontSize="0.75rem"
                  sx={{
                    color: "#00b8d4",
                  }}
                />
              </Avatar>
            </Link>
          </List>
        </Box>
      </Grid>
    </>
  );
};

export default BottomSx;
