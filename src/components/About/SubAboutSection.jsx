import { Box, Grid } from "@mui/material";
import TextAboutSection from "./TextAboutSection";
import image from "../../../public/images/developer.jpg";
import circleElements from "../../../public/images/developer.jpg";

export default function SubAboutSection() {
  // const dotHeight = window.innerWidth < 500 ? "100px " : "auto";
  return (
    <Grid container>
      <Grid xs={12} md={6} paddingTop={"50px"}>
        {/* ******************right side section (image)******************* */}
        <Box
          component="img"
          objectFit="cover"
          maxWidth="100%"
          maxHeight="auto"
          mr={3}
          alt="about us"
          src={image}
          position={"relative"}
        />
        <img
          style={{
            position: "absolute",
            top: 250,
            right: 20,
            // width: { dotHeight },
          }}
          src={circleElements}
          alt="dots"
        />
      </Grid>
      {/* *************left side section (Text section) *****************/}
      <Grid
        xs={12}
        md={6}
        overflow={"hidden"}
        flexDirection={"row-reverse"}
        alignItems={"top"}
        justifyContent={"space-between"}
        paddingTop={"50px"}
        paddingLeft={"50px"}
      >
        <TextAboutSection
          titr="تیم کامل با تجربه عالی"
          title1="کار تیمی عالی "
          title2="برای خدمت به درخواست شما "
          body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی"
        />
      </Grid>
    </Grid>
  );
}
