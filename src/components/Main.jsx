import React, { useState } from "react";

function Main() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handletask = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task === "") {
      alert("Please enter a valid task");
      return;
    } else {
      setList([...list, task]); //store the list in state
      setTask(""); //clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(list[index]);
  };

  const handleSaveEdit = () => {
    if (editTask === "") {
      alert("Please enter a valid task");
      return;
    }

    const newList = [...list];
    newList[editIndex] = editTask;
    setList(newList);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center shadow-lg w-75">
        <h1 className="text-black display-3 text-center">Todo List</h1>
        <div className="d-flex align-items-center justify-content-center p-5">
          <input
            type="text"
            value={task}
            onChange={handletask}
            className="form-control"
            placeholder="Add Task..."
          />

          <button
            className="btn btn-primary"
            style={{ marginLeft: "10px" }}
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <div className="d-flex">
          <ol>
            
            {list.map((task, index) => (
              <li
                key={index}
                style={{
                  textDecoration: "none",
                  textAlign: "justify",
                  marginBottom: "5px",
                }}
              >
                {editIndex === index ? (
                  <div className="d-flex">
                    <input
                      type="text"
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                      className="form-control"
                      style={{ marginRight: "5px" }}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handleSaveEdit}
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setEditIndex(null);
                        setEditTask("");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    {task}
                    <button
                      className="btn btn-info"
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleEditTask(index)}
                    >
                      <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "5px" }}
                      onClick={() => handleDeleteTask(index)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Main;
