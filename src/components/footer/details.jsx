import {
  Avatar,
  Box,
  Link,
  List,
  ListItem,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import AnalyticsIcon from "@mui/icons-material/Analytics";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import img from "../../../public/images/Artboard.png";

const Details = () => {
  return (
    <>
      <Grid
        xs={12}
        container
        sx={{
          color: "white",
          backgroundColor: "#113143",
          paddingTop: { xs: "50px", lg: "250px" },
          paddingLeft: "50px",
        }}
      >
        <Grid xs={3} sx={{ paddingRight: "50px" }}>
          <Box display={"flex"} justifyContent={"end"} flexDirection={"column"}>
            <Box
              component={"img"}
              sx={{ width: "70%", height: "70%" }}
              src={img}
              alt="not loading..."
              display={"flex"}
              justifyContent={"end"}
              alignItems={"top"}
              marginLeft={"-50px"}
              marginTop={"-50px"}
            />
            <Typography variant="h4" marginTop={"10px"}>
              DEKA TEAM
            </Typography>
            <Typography fontSize={"0.85rem"}>Best Agency in Iran</Typography>
            <Typography
              sx={{ marginTop: "20px", color: "grey", fontSize: "1rem" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            </Typography>
          </Box>
          <Box>
            <List
              sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
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
        <Grid xs={3}>
          <List sx={{ py: 0 }}>
            <Typography sx={{ color: "white" }}>پشتیبانی</Typography>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                وابسته ها
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                نقشه سایت
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                سیاست لغو
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                سیاست حفظ حریم خصوصی
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                سلب مسئولیت حقوقی
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={3}>
          <Typography sx={{ color: "white" }}>لینک های سریع</Typography>
          <List>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                درباره ما
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                با ما تماس بکیرید
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                محصولات
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                حساب کاربری
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#"
                sx={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                }}
              >
                ثبت نام
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={3} sx={{ paddingRight: "50px" }}>
          <Typography>ارتباط با ما</Typography>
          <Grid
            container
            sx={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              flexDirection: "row",
              borderRadius: "10px",
              padding: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Grid xs={2} sx={{ display: "flex", justifyContent: "start" }}>
              <ApartmentIcon sx={{ color: "#006064" }} />
            </Grid>
            <Grid
              xs={10}
              sx={{
                display: "flex",
                justifyContent: "end",
                marginLeft: "10px",
              }}
            >
              <Typography fontSize={"0.65rem"}>
                مشهد، وکیل آباد، بلوار دندان پزشکان
              </Typography>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            sx={{
              backgroundColor: "white",
              color: "black",
              display: "flex",
              flexDirection: "row",
              borderRadius: "10px",
              padding: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Grid xs={2} sx={{ display: "flex", justifyContent: "start" }}>
              <WifiCalling3Icon sx={{ color: "#006064" }} />
            </Grid>
            <Grid xs={10}>
              <Typography fontSize={"0.65rem"} marginLeft={"10px"}>
                +444777222
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Details;
