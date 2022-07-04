import { useContext, useState } from "react";
import { GlossaryContext } from "../context";
import { FaPlusCircle } from "react-icons/fa";

const Input = () => {
  const {
    handleChange,
    handleDefinitionChange,
    addItem,
    title,
    setTitle,
    definition,
    setDefinition,
  } = useContext(GlossaryContext);

  const [postItem, setPostItem] = useState(false);

  const onAdd = () => {
    if (!(title && definition)) {
      return alert("Enter a title and definition");
    }
    addItem();
    setTitle("");
    setDefinition("");
    setPostItem(false)
  };
  return (
    <>
    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'1rem'}}>
      <button onClick={() => setPostItem(!postItem)} type="button" style={styles.btn}>{!postItem ? 'Add Glossary ': 'Cancel'}</button>
    </div>

   {postItem && (<div className="input-comp">
      <div style={{ width: "90%", marginRight: "1rem" }}>
        <input
          type="text"
          placeholder="Enter an item..."
          style={{...styles.inputStyle, marginBottom:'1rem'}}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Enter definition..."
          style={styles.inputStyle}
          onChange={handleDefinitionChange}
        />
      </div>

      <FaPlusCircle onClick={onAdd} size={35} color="green" cursor="pointer" />
    </div>)}
    </>
  );
};

const styles = {
  btn: {
    width: "90%",
    background: "#59656f",
    color: "#f1f5f8",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: ".5rem",
    border: "none",
  },
  inputStyle: {
    padding: ".8rem",
    width: "100%",
    borderRadius: ".5rem",
    border: "none",
    marginRight: "1rem",
  },
};

export default Input;
