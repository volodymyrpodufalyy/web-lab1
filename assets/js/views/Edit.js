import createForm from "../components/Form.js";
import createInputEl from "../components/Input.js";

const Edit = async () => {
  const app_container = document.getElementById("app");

  
  const {submit_btn, form_container, form_content, inputs} = createForm();

  let radio_btns;

  const sharesResponse = await fetch('http://localhost:7070/shares');
  const shares = await sharesResponse.json();

  const sharesToChoose = [...Array(shares?.length).keys()];

  app_container.innerHTML = `<h2 class="form__title">Edit Share: choose share to edit</h2>`;

  sharesToChoose.map(i => {
      const shareBlock = document.createElement("button");
      const handleChooseClick = (e) => {
        app_container.innerHTML = `<h2 class="form__title">Edit Share</h2>`;
        inputs.map(async (item, index) => {
          const {inputEL, radioButtons} = await createInputEl(item, index, true, +e.target.innerText);
          form_content.appendChild(inputEL);
          radio_btns = radioButtons;
        });
        app_container.appendChild(form_container);
        app_container.appendChild(submit_btn);
      }
      shareBlock.addEventListener("click", handleChooseClick);
      shareBlock.innerText = `${i}`;
      app_container.appendChild(shareBlock);
  })

};

export default Edit;
