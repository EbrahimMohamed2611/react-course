import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  OnSelectedItem: (item: string) => void;
}

function ListGroupWithState({
  items,
  heading,
  OnSelectedItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // arr[0] selectedIndex
  // arr[1] setSelectedIndex
  //   let selectedIndex = -1;

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              OnSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupWithState;
