import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const parent = <h1 className="heading">This is React element using JSX</h1>;

// React Component
// Class Component - Old ways of creating components
// Functional Component - New ways of creating components
const TitleComponent = () => <h1 className="heading">Namaste React using JSX 🚀</h1>;

const ParentComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      {/* Can be called like a function */}
      {TitleComponent()}
      {/* Calling a react element inside a component */}
      {parent}
      <h2 className="subHeading">This is a Functional Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
root.render(<ParentComponent />);
