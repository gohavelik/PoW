const button = document
  .querySelector(".menu-icon")
  .addEventListener("click", function () {
    document.querySelector(".header").style.backgroundColor = "black";
    document.querySelector(".header").style.display = "block";

    document.querySelector(".header").style.paddingBottom = "100%";

    document.querySelector(".menu").style.display = "block";
    document.querySelector(".menu").style.marginTop = "30%";

    document.querySelector(".hr1").style.marginTop = "50px";

    document.querySelector(".close-icon").style.display = "block";
    document.querySelector(".name").style.display = "none";
    document.querySelector(".name-bitshort").style.display = "none";
  });

const buttonClose = document
  .querySelector(".close-icon")
  .addEventListener("click", function () {
    document.querySelector(".header").style.backgroundColor = "transparent";
    document.querySelector(".menu").style.display = "none";

    if (screen.width >= 515) {
      document.querySelector(".name").style.display = "block";
    } else if (screen.width < 515) {
      document.querySelector(".name-bitshort").style.display = "block";
    }
    document.querySelector(".close-icon").style.display = "none";
  });

const copiedText = document.querySelector(".ip");
// copiedText.addEventListener("click", function () {
//   window.navigator.clipboard.writeText("discord.gg/xMJQapRBYe");
// });

copiedText.addEventListener("click", function () {
  window.open("https://discord.gg/xMJQapRBYe");
});
