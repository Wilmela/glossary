import { useState, useContext } from "react";
import { FaSave, FaTrash, FaEdit, FaTimes } from "react-icons/fa";
import { GlossaryContext } from "../context";

const Glossary = ({ id, name, meaning }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { deleteItem, updateItem, handleChange, handleDefinitionChange, title, definition} = useContext(GlossaryContext);

  const onEdit = () => {
    setIsEditable(true);
  };
  const onSave = (id) => {
    if (!(title && definition)) return alert("Enter title and definition");
    updateItem(id);
    setIsEditable(false);
  };

  const onDelete = (id) => {
    deleteItem(id);
  };

  const cancel = () => {
    setIsEditable(false);
  };

  const handleMouseEnter = ()=>{
    setIsHover(true);
  }
  const handleMouseLeave= ()=>{
    setIsHover(false);
  }

  return (
    <>
      <div data-aos='fade-down' style={{...styles.container, background: isHover ? '#eee': '#fff'}} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >

        <div style={{display:'flex', flexDirection:'column', width:'70%'}}>
          {isEditable ? ( <input type="text" onChange={handleChange} style={styles.input} /> ) :
              <h3 style={{ color: "blue", }} data-aos='fade-right'>{name}</h3> 
          }
          {isEditable ? ( <textarea type="text" onChange={handleDefinitionChange} style={{...styles.input, marginTop:'.5rem'}} /> ) :
              <p style={styles.meaning}>{meaning}</p>
          }
        </div>
        
        <div style={styles.icons} >
          {isEditable ? ( <FaSave size={20} onClick={() => onSave(id)} cursor="pointer" color="green" /> ) : 
          ( <FaEdit size={20} onClick={onEdit} color="blue" cursor="pointer" /> )}
          {isEditable ? ( <FaTimes size={20} color="red" cursor="pointer" onClick={cancel} /> ) :
          (<FaTrash size={20} color="red" cursor="pointer" onClick={() => onDelete(id)} /> )}
        </div>

      </div>
    </> 
    );
};

const styles = {
  container: {
    padding: ".8rem",
    marginTop: ".5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    background:"#fff",
    borderRadius: ".5rem",
    cursor:'pointer',
  },
  input: {
    padding: ".2rem",
    borderRadius: ".2rem",
    cursor: "text",
  },
  meaning: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#59656f",
    marginTop: 5,
  },
  icons: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "20%",
    marginLeft: "2rem",
  },
};
export default Glossary;
