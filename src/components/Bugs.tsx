import produce from "immer";
import React, { useState } from "react";
import { FaBug } from "react-icons/fa";

const Bugs = () => {
  const [bugObject, setBugs] = useState([
    { id: 1, name: "bug 1", isFixed: false },
    { id: 2, name: "bug 2", isFixed: false },
    { id: 3, name: "bug 3", isFixed: false },
  ]);

  const handleFixBus = (bugId: Number) => {
    setBugs(
      bugObject.map((bug) =>
        bug.id === bugId ? { ...bug, isFixed: true } : bug
      )
    );
  };

  const handleFixBugsWithImmer = (bigId: Number) => {
    setBugs(
      produce((draft) => {
        // draft is a proxy for bugObject state
        const bug = draft.find((bug) => bug.id === bigId);
        if (bug) bug.isFixed = true;
      })
    );
  };
  return (
    <div className="" style={{ margin: "10px", width: "350px" }}>
      <FaBug size={50} color="#dc3545" />
      <div className="m-2">
        {bugObject.map((bug, index) => (
          <div
            className={[
              "alert",
              bug.isFixed === false ? "alert-danger" : "alert-success",
            ].join(" ")}
          >
            {JSON.stringify(bug)}
            {/* <button
              onClick={() => handleFixBus(bug.id)}
              type="button"
              className="btn btn-light"
            >
              fix
            </button> */}
            <button
              onClick={() => handleFixBugsWithImmer(bug.id)}
              type="button"
              className="btn btn-light"
            >
              fix
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bugs;
