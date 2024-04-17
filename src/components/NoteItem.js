import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = ({ title, description, tag, _id, updateNote, showAlert }) => {
  const { deleteNote } = useContext(noteContext);
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(_id);
                showAlert("Deleted Successfully", "success");
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote({ _id, title, description, tag });
              }}
            ></i>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
