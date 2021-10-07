const createInputEl = async (el, index, editing, shareNum) => {
  const inputEL = document.createElement("div");
  inputEL.className = `form__input`;

  console.log(el.name, "kdjfk");

  const inputName = document.createElement("h3");
  inputName.className = "input-name";
  inputName.innerText = el.name;
  inputEL.appendChild(inputName);

  let share;

  if (editing) {
    const shareResponse = await fetch(`http://localhost:7070/shares/${shareNum}`);
    share = await shareResponse.json();
  }

  console.log(share, "share ");


  const radioButtons = ["Low", "Medium", "High", "Extrahigh"];

  if (index !== 2) {
    const inputField = document.createElement("input");
    inputField.id = el.name.toLowerCase();
    if (editing) {
      index === 0 && (inputField.value = share?.brand);
      index === 1 && (inputField.value = share?.price);
    }
    inputEL.appendChild(inputField);
  } else {
    const inputContent = document.createElement("div");
    inputContent.className = "input-inner";
    inputEL.appendChild(inputContent);
    let radio_btn;
    radioButtons.map((item) => {
      const radio_label = document.createElement("label");
      radio_btn = document.createElement("input");
      radio_btn.type = "radio";
      radio_btn.value = item.toUpperCase();
      radio_btn.name = "riskLevel";
      radio_btn.id = item.toLowerCase();
      radio_label.innerText = item;
      radio_label.htmlFor = item.toLowerCase();
      if (editing) {
        radio_btn.checked = item.toUpperCase() === share?.riskLevel;
      }
      inputContent.appendChild(radio_label);
      inputContent.appendChild(radio_btn);
    });
  }


  return {
    radioButtons, inputEL
  };
};

export default createInputEl;
