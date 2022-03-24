// import logo from "./logo.svg";
import "./App.css";
import "./web/comp/css/style.css";
import React, {useEffect} from "react"
// import Navbar from "./component/Navbar";
// import TextForms from "./component/TextForms";
// import NewModal from "./component/NewModal";
// import UserData from "./component/UserData"; 
// import NewData from "./newComponents/NewData"; 
import Header from "./web/comp/Header";
import Aboutus from "./web/comp/Aboutus";
import BuildSection from "./web/comp/BuildSection";
import Workflow from "./web/comp/Workflow";
import Testimonial from "./web/comp/Testimonial";
import Footer from "./web/comp/Footer";
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
      {/* <Navbar title="My App" />
      <TextForms heading="Enter Your Text Here" />
      {/* <Modal /> */}
      {/* <NewModal/> */}
      {/* 

      <UserData/>
      <NewData/> */}
      {/* <UserTable/> */}


      {/* web tamplate */}
      <Header/>
      <Aboutus/>
      <BuildSection/>
      <Workflow/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
