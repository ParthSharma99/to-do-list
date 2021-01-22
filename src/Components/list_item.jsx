import { React, useState } from "react";

const List_item = (props) => {
  const [itemText, setItemText] = useState(props.text);
  const [editMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(props.text);

  let delete_item = props.delete_item;

  return (
    <div>
      {editMode ? (
        <div className="list-item-wrapper">
          <input
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <div className="item-buttons">
            <div className="item-save-button">
              <button
                onClick={() => {
                  props.edit_item(props.id);
                  setEditMode(false);
                  setItemText(inputText);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="list-item-wrapper">
          <div className="item-description">{itemText}</div>
          <div className="item-buttons">
            <div className="item-delete-button">
              <button onClick={() => delete_item(props.id)}>Delete</button>
            </div>
            <div className="item-edit-button">
              <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List_item;
