
// import './App.css'
import Section2 from "./components/home/section2";
import Footer from "./components/footer/footer";
import Section4 from "./components/section/section4";
import { Container } from "@mui/material";
import SubAboutSection from "./components/About/SubAboutSection";
import Navbar from "./components/navbar/navbar"


function App() {
  return (
    <>
      <Container>
        <Navbar/>
        <Section2 />
        <Section4 />
        <SubAboutSection />
        <Footer />
      </Container>

    </>
  );
}

export default App;
