let box = {
  height: 10,
  width: 20,
};

let style = {
  color: "Red",
  borderStyle: "solid",
};
let font = {
  fontFamily: "Roboto",
  fontSize: "18px",
  fonwWeight: "bold",
};

let styleBox = Object.assign({}, box, style, font);

console.log(styleBox);
