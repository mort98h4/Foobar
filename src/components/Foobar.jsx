import React from "react";

export default function Foobar(props) {
console.log(props)
  return (
    <div className="row text-center pt-3">
        <h1>{props.bar}</h1>
    </div>
  );
}
