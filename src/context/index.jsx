import { useState, useEffect, createContext } from "react";
const HOST = "http://localhost:3000";
const URL = "glossaries";

export const GlossaryContext = createContext();

export const GlossaryProvider = ({ children }) => {
  const [glossaries, setGlossaries] = useState([]);
  const [title, setTitle] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    const fetchGlossaries = async () => {
      try {
        const res = await fetch(`${HOST}/${URL}`);
        const data = await res.json();
        setGlossaries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGlossaries();
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDefinitionChange = (e) => {
    setDefinition(e.target.value);
  };

  const addItem = async () => {
    const item = await fetch(`${HOST}/${URL}`, {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 100),
        title,
        definition
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await item.json();
    setGlossaries((prev) => [...prev, data]);

    window.location.reload();
  };

  const deleteItem = async (id) => {
    const itemId = await fetch(`${HOST}/${URL}/${id}`, {
      method: "DELETE",
    });
    setGlossaries(glossaries.filter((item) => item.id != itemId));
    window.location.reload();
  };

  const updateItem = async (id) => {
    const item = await fetch(`${HOST}/${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        definition
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await item.json();

    setGlossaries([...glossaries, {title : result.title, definition: result.definition}]);
    window.location.reload();
  };
  return (
    <GlossaryContext.Provider value={{ glossaries, deleteItem, addItem, updateItem, handleChange, handleDefinitionChange, title, setTitle, definition, setDefinition }} >
      {children}
    </GlossaryContext.Provider>
  );
};
