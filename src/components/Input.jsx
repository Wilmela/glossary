import { useContext } from "react";
import { GlossaryContext } from "../context";
import { FaPlusCircle } from "react-icons/fa";

const Input = () => {
  const { handleChange, addItem, title, setTitle } = useContext(GlossaryContext);

  const onAdd = () => {
    if (!title) {
      return alert("Enter a title");
    }
    addItem();
    setTitle("");
  };
  return (
    <div
    className="input-comp"
      style={{
        
      }}
    >
      <input
        type="text"
        placeholder="Enter an item..."
        style={{
          padding: ".8rem",
          width: "90%",
          borderRadius: ".5rem",
          border: "none",
          marginRight: "1rem",
        }}
        onChange={handleChange}
      />
      <FaPlusCircle onClick={onAdd} size={30} color="green" cursor="pointer" />
    </div>
  );
};

export default Input;
