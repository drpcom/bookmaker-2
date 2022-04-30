export const handleZoomIn = () => {
  let el = document.querySelector(".ql-container.ql-snow");
  try {
    switch (el.style.fontSize) {
      case "0.7rem":
        el.style.fontSize = "0.9rem";
        break;
      case "0.9rem":
        el.style.fontSize = "1.1rem";
        break;
      case "1.1rem":
        el.style.fontSize = "1.2rem";
        break;
      case "1.2rem":
        el.style.fontSize = "1.3rem";
        break;
      case "":
        el.style.fontSize = "1.3rem";
        break;
      case "1.3rem":
        el.style.fontSize = "1.5rem";
        break;
      case "1.5rem":
        el.style.fontSize = "1.7rem";
        break;
      default:
        return;
    }
  } catch (error) {
    console.log("You can only zoom if there is an active doc!");
  }
};

export const handleZoomOut = () => {
  let el = document.querySelector(".ql-container.ql-snow");
  try {
    switch (el.style.fontSize) {
      case "1.7rem":
        el.style.fontSize = "1.5rem";
        break;
      case "1.5rem":
        el.style.fontSize = "1.3rem";
        break;
      case "1.3rem":
        el.style.fontSize = "1.2rem";
        break;
      case "1.2rem":
        el.style.fontSize = "1.1rem";
        break;
      case "":
        el.style.fontSize = "1.1rem";
        break;
      case "1.1rem":
        el.style.fontSize = "0.9rem";
        break;
      case "0.9rem":
        el.style.fontSize = "0.7rem";
        break;
      default:
        return;
    }
  } catch (error) {
    console.log("You can only zoom if there is an active doc!");
  }
};
