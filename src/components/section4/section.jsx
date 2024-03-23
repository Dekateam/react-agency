import * as React from "react";
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Box, Button } from "@mui/material";
import Stack from '@mui/material/Stack';

const cards = [
{ color: "#E3D295", text: "برنزی" ,price:"10میلیون تومان" },
{ color: "#BBBBBB",title:"پرفروش", text: "نقره ای",price:"25میلیون تومان"},
{ color: "#FF9C7D",  text: " طلایی" ,price:"30 میلیون تومان "}
];


export default function Section() {
  return (
    
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "black",
        backgroundColor:"#F9F9F9",
        overflow:"hidden" 
      }}
    >
      
      {/* TextTop */}

      <Typography
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" ,fontSize:"30px"}}
      >
        پکیج های اقتصادی
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", justifyContent: "center", textAlign: "center", fontSize: "10px", marginTop: "0.20rem" }}
      >
        <Box
      sx={{
        width:"350px",
        height:"64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
       }}
      >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          ، و با استفاده از طراحان گرافیک است
          ، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،     </Box>
       </Typography>
      

      {/* cards */}

      <Grid container spacing={4} justifyContent="center" marginTop="1rem"
              sx={{ display: "flex", justifyContent: "center", textAlign: "center",variant:"contained"}}
              >
        {cards.map((card) => (
          <Grid item key={card}>
            <Card 
            sx={{ 
              Width:"100px" ,
              Height:"420px" ,
              variant: "contained",
              borderTop: `6px solid ${card.color}`,
              Radius: "10px 10px 10px 10px", // Rounded top corners
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)"
              }
               }}>
             <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                {/* <Typography sx={{ fontSize: 14, marginTop: "1rem" }} color="text.secondary" >
                  {card.title}
                </Typography> */}
                <Typography variant="h5" component="div" sx={{ marginTop: "2rem" }}>
                  {card.text}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 25, marginTop: "1rem" }} color="#4187AE">
                  {card.price}
                </Typography>
                <Typography sx={{ fontSize: 14, marginTop: "-0.5rem", borderBottom: "1px solid rgba(236, 236, 236, 1)" }} color="#BDBEBD" gutterBottom>
                  3 ماهه
                </Typography>
                <Typography variant="body2" >
                <Box
              sx={{
               width: "200px",
               height: "100px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               marginTop:"2rem"
               }}
              >
                لورم ایپسوم متن ساختگی با تولید 
                سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  </Box>
                </Typography>
                <Button
                 variant="outlined" 
                 sx={{                  
                  minWidth:"120px",
                  marginTop:"3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s, background-color 0.3s",
                 "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#0077CC",
                  color: "#fff",
                  }
                  }}>
                    خریداین پکیج  </Button>
                 </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
