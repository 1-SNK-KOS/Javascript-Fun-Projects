const randomColr = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

document.querySelector("#start").addEventListener(
  "click",
  function () {
     let intervalId = setInterval(changeColor,500);
    // if (!intervalId) intervalId = setInterval(changeColor, 500);
    // intervalId = setInterval(changeColor, 500);

    function changeColor() {
      document.body.style.backgroundColor = randomColr();
    }

    document.querySelector("#stop").addEventListener(
      "click",
      function () {
        clearInterval(intervalId);
        intervalId = null;
      },
      false
    );
  },
  false
);

// document.querySelector("#stop").addEventListener(
//   "click",
//   function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   },
//   false
// );
