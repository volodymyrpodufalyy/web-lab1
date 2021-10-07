const Create = () => {
  const app_container = document.getElementById("app");
  const submit_btn = document.createElement("div");

  submit_btn.innerHTML = '<button type="submit"><h3>Submit</h3></button>';
  submit_btn.className = "submit__btn";

  const create_form_container = document.createElement("div");
  create_form_container.className = "create__form";
  const create_content = document.createElement("div");
  create_content.className = "create__content";
  create_form_container.appendChild(create_content);

  let tradingLevel;

  const radioButtons = ["Low", "Medium", "High", "Extrahigh"];

  const createInputEl = (el, index) => {
    const inputEL = document.createElement("div");
    inputEL.className = `create__input`;

    const inputName = document.createElement("h3");
    inputName.className = "input-name";
    inputName.innerText = el.name;
    inputEL.appendChild(inputName);

    if (index !== 2) {
      const inputField = document.createElement("input");
      inputField.id = el.name.toLowerCase();
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
        inputContent.appendChild(radio_label);
        inputContent.appendChild(radio_btn);
      });
    }

    create_content.appendChild(inputEL);
  };

  const inputs = [
    {
      name: "Brand",
    },
    {
      name: "Price",
    },
    {
      name: "Risk level",
    },
  ];

  inputs.map((item, index) => createInputEl(item, index));

  const handleCreateButton = () => {
    let brand = "";
    let price = 0;
    inputs.map((item, index) => {
      if (index !== 2) {
        const input = document.getElementById(item.name.toLowerCase());
        if (input.value) {
          input.id === 'brand' && (brand = input.value);
          input.id === 'price' && (price = +input.value);
        }
      }
    });

    radioButtons.map((item) => {
      const input = document.getElementById(item.toLowerCase());
      console.log(input.checked, "checked");
      if (input.checked) {
        tradingLevel = input.value;
      } else {
        console.log("error, tradingLevel is undefined");
      }
    });
  

    if (tradingLevel && price && brand) {
      return fetch("http://localhost:7070/shares", {
        method: "POST",
        body: JSON.stringify({
          type: "Shares",
          brand: brand,
          price: price,
          buyingDate: "1 October",
          riskLevel: tradingLevel,
          tradingLevel: "GROWING",
          sharesCategory: "Usual",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.warn("Something went wrong.", error);
        });
    } else if (!tradingLevel || !brand || price) {
      alert("all fields must be entered");
    }
  };

  submit_btn.addEventListener("click", handleCreateButton);

  app_container.innerHTML = `<h2 class="create__title">Create Share</h2>`;
  app_container.appendChild(create_form_container);
  app_container.appendChild(submit_btn);
};

export default Create;
