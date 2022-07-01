import Header from "./components/Header";
import Glossaries from "./components/Glossaries";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Glossaries />
        <Input />
      </div>
    </div>
  );
};

export default App;
