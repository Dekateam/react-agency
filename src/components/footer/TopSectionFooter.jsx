import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function TopSectionFooter() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "50px",
        paddingBottom: { xs: "50px", lg: "150px" },
        color: "white",
        backgroundColor: "#454545",
      }}
    >
      <AvatarGroup
        total={24}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Box sx={{ marginTop: "1rem" }}>
        <Typography
          variant="h6"
          sx={{ display: "flex", justifyContent: "center"}}
        >
          داستان موفقیت آنها را بخوانید
        </Typography>
        <Typography
          fontSize={"1.45rem"}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          با همکاری ما
        </Typography>
        <Typography
          fontSize={"0.55rem"}
          sx={{ marginTop: "1rem", display: "flex", justifyContent: "center",padding:"0px 50px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است،
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4187AE",
            "&:hover": { backgroundColor: "ButtonShadow", color: "black" },
          }}
        >
          بیشتر بدانید
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "1rem",
            backgroundColor: "#808080",
            "&:hover": { backgroundColor: "azure", color: "black" },
          }}
        >
          نظر شما
        </Button>
      </Box>
    </Grid>
  );
}
