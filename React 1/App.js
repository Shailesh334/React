// const heading = React.createElement("h1" , { id:"heading" , xyz : "abc"} , "Hello World From React !");

/*
      Asa nested banvaychay using react.createElement 

        <div id="parent">
            <div id="child1">
                <h1>This is h1 tag</h1>
            </div>
            <div id="child2">
                <h2>This is h2 tag</h2>
            </div>
        </div>


*/

const parent = React.createElement(
  "div",
  {
    id: "parent",
    xyz: "abc",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
      },
      React.createElement("h1", {}, "This is h1 tag")
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      React.createElement("h2", {}, "This is h2 tag")
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
