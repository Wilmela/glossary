import { useEffect } from "react";
import Header from "./components/Header";
import Glossaries from "./components/Glossaries";
import Input from "./components/Input";

import AOS from 'aos';

const App = () => {
  
  useEffect(()=>{
    AOS.init();
    AOS.refresh()
  })

  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <Glossaries />
        <Input />
      </div>
    </div>
  );
};

export default App;
