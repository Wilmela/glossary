import { useContext } from "react";
import { GlossaryContext } from "../context";

import Glossary from "./Glossary";

const Glossaries = () => {
  const { glossaries } = useContext(GlossaryContext);

  return (
    <div className="glossaries-container">
      {glossaries.map((glossary) => (
        <Glossary
          key={`${glossary.id} + ${glossaries.item}`}
          name={glossary.title}
          id={glossary.id}
        />
      ))}
    </div>
  );
};

export default Glossaries;
