import Section2 from "./components/home/section2";
import Footer from "./components/footer/footer";
import Section4 from "./components/section/section4";
import { Container } from "@mui/material";
import SubAboutSection from "./components/About/SubAboutSection";

function App() {
  return (
    <>
      <Container>
        <Section2 />
        <Section4 />
        <Footer />

        <SubAboutSection />
      </Container>
    </>
  );
}

export default App;
