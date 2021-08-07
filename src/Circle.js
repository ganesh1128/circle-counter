import React from "react";

export default function Circle(props) {
  const { id } = props.data;

  return (
    <div>
      <h2>{props.data.count}</h2>
      <button
        onClick={() => {
          props.handleCount(props.data.id);
        }}
        className="btn"
        style={{ backgroundColor: id }}
      >
        click
      </button>
    </div>
  );
}
