import createForm from "../components/Form.js";
import createInputEl from "../components/Input.js";

const Create = () => {
  const app_container = document.getElementById("app");

  const {submit_btn, form_container, form_content, inputs} = createForm();

  let radio_btns;


  
  inputs.map(async (item, index) => {
    const {inputEL, radioButtons} = await createInputEl(item, index);
    console.log(inputEL, "inputEL");
    form_content.appendChild(inputEL);
    radio_btns = radioButtons;
  });


  let tradingLevel;

  const handleCreateButton = () => {
    let brand = "";
    let price = 0;
    inputs.map((item, index) => {
      if (index !== 2) {
        const input = document.getElementById(item.name.toLowerCase());
        if (input.value) {
          input.id === "brand" && (brand = input.value);
          input.id === "price" && (price = +input.value);
        }
      }
    });

    radio_btns.map((item) => {
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

  app_container.innerHTML = `<h2 class="form__title">Create Share</h2>`;
  app_container.appendChild(form_container);
  app_container.appendChild(submit_btn);
};

export default Create;
