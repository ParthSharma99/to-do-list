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

      <div className="add-item-wrapper">
        <input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button
          onClick={() => {
            add_item(inputText);
            setInputText("");
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default List;
