import React from "react";

function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  //   items = [];

  let isListEmpty = items.length === 0 ? <p>Item not found</p> : null;

  const handleClcikEvent = (event: React.MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Of Elements</h1>
      {items.length === 0 && <p>Item not found</p>}
      {items.length !== 0 && (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              onClick={handleClcikEvent}
              key={index}
              className="list-group-item"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* {items.length === 0 ? <p>Item not found</p> : null} */}
      {/* {console.log("isListEmpty", isListEmpty)} */}
    </>

    // OR
    //     <React.Fragment>
    //     <h1>List Of Elements</h1>
    //     <ul className="list-group">
    //       <li className="list-group-item">An item</li>
    //       <li className="list-group-item">A second item</li>
    //       <li className="list-group-item">A third item</li>
    //       <li className="list-group-item">A fourth item</li>
    //       <li className="list-group-item">And a fifth one</li>
    //     </ul>
    //   </React.Fragment>
  );
}

export default ListGroup;
