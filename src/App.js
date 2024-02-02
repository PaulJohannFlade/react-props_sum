import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={6} valueB={9} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      <p>
        {valueA} + {valueB} = {valueA + valueB}
      </p>
    </div>
  );
}
