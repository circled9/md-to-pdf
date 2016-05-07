const concat = require("concat-files");

const srcs = [
  "css/sanitize.css",
  "css/style.css"
];
const dest = "./styles.css";

concat(srcs, dest, () => {
  console.log("css concatenated.");
});
