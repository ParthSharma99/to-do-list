import { React, useState } from "react";
import List_item from "./list_item";

const List = (props) => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  const add_item = (text) => {
    setList([...list, text]);
  };

  const delete_item = (id) => {
    // let temp = list;
    // temp.splice(id, 1);
    list.splice(id, 1);
    setList([...list]);
  };

  const edit_item = (id, newText) => {
    list.splice(id, 1, newText);
    setList([...list]);
    console.log(list);
  };

  return (
    <div className="list-wrapper">
      <div className="heading">
        <h1>To-Do List</h1>
        <h3>List Count : {list.length}</h3>
      </div>
      {list.map((text, id) => {
        return (
          <List_item
            text={text}
            delete_item={delete_item}
            id={id}
            key={id}
            edit_item={edit_item}
          />
        );
      })}

      <form
        className="add-item-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          add_item(inputText);
          setInputText("");
        }}
      >
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <input type="submit" className="add-item-button" value="Add Item" />
      </form>
    </div>
  );
};

export default List;
