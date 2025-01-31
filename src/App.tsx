import { useState } from "react";
import Navbar from "./pages/Navbar";
import { SelectedPage } from "./types";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Promote from "./pages/Promote";
import Question from "./pages/Questions";



function App() {

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Pricing setSelectedPage={setSelectedPage}/>
      <Promote />
      <Question setSelectedPage={setSelectedPage}/>
      <Footer />
    </>
  )
}


export default App


