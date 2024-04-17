import React, { useState } from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [addList, setAddList] = useState([]);
  function inputHandler(e) {
    let conditionalInput = e.target.value.trim();
    setInputText(conditionalInput);
  }
  function taskHandler() {
    setAddList([inputText, ...addList]);
    setInputText('');
  }
  function deleteHandler(index) {
    const updateList = [...addList];
    updateList.splice(index, 1);
    setAddList(updateList);
  }
  return (
    <div className="text-center">
      <h1 className="text-decoration-none my-3 ">Todo List </h1>

      <input
        placeHolder="Enter task here to add to ToDo list ..."
        value={inputText}
        className="w-50 pl-2  "
        onChange={inputHandler}
      />
      <button className="ml-2 btn-primary rounded-lg" onClick={taskHandler}>
        Add Task 
      </button>

      <h3 className="mt-5">Added Tasks</h3>
      <ui className="list-group text-left ">
        {addList.map((list, index) => (
          <div className="row border border-secondary px-3 mb-1">
            <div className="col-sm-9">
              <li
                className="style-none "
                key={index}
                style={{ listStyleType: 'none' }}
              >
                {' '}
                {list}{' '}
              </li>
            </div>
            <div className="col-sm-3 text-right ">
              {' '}
              <button
                className="btn btn-danger "
                onClick={() => deleteHandler(index)}
              >
                Delete Task {index}
              </button>
            </div>
          </div>
        ))}
      </ui>
    </div>
  );
}
