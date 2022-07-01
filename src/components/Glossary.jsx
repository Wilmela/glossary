import { useState, useContext } from "react";
import { FaSave, FaTrash, FaEdit, FaTimes } from "react-icons/fa";
import { GlossaryContext } from "../context";

const Glossary = ({ id, name }) => {
  const [isEditable, setIsEditable] = useState(false);
  const { deleteItem, updateItem, handleChange, title } =
    useContext(GlossaryContext);

  const onEdit = () => {
    setIsEditable(true);
  };
  const onSave = (id) => {
    if (!title) return alert("Enter title");
    updateItem(id);
    setIsEditable(false);
  };

  const onDelete = (id) => {
    deleteItem(id);
  };

  const cancel = () => {
    setIsEditable(false);
  };

  return (
    <>
      <div
        style={{
          padding: ".8rem",
          marginTop: ".5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          background: "#fff",
          borderRadius: ".5rem",
        }}
      >
        {isEditable ? ( <input type="text" onChange={handleChange} style={{ padding: ".2rem", borderRadius: ".2rem", cursor: "text" }} /> ) :
         ( <p style={{ color: "#59656f" }}>{name}</p> )}

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "20%", }} >
          {isEditable ? ( <FaSave size={20} onClick={() => onSave(id)} cursor="pointer" color="green" /> ) : 
          ( <FaEdit size={20} onClick={onEdit} color="blue" cursor="pointer" /> )}
          {isEditable ? ( <FaTimes size={20} color="red" cursor="pointer" onClick={cancel} /> ) :
          (<FaTrash size={20} color="red" cursor="pointer" onClick={() => onDelete(id)} /> )}
        </div>
      </div>
    </>
  );
};

export default Glossary;
