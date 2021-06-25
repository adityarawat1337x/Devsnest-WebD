import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./App.css";

function App() {
  const [Todos, setTodos] = useState(["aditya","rawat"]);

  function handleOnDragEnd(result){
    if (!result.destination) return;
    let tmp = Todos[result.destination.index];
    let tmp2 =  Todos[result.source.index];
    Todos[result.destination.index] = tmp2;
    Todos[result.source.index] = tmp;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <input></input>
        <button >Add</button>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {Todos.map((task, index) => {
                  return (
                    <Draggable key={index} draggableId={index+""} index={index} >
                      {(provided) => (
                        <li
                          key={index}
                          ref={provided.innerRef}
                          placeholder={provided.placeholder}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{task}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}
export default App;
