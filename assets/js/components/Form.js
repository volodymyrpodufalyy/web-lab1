const createForm = () => {
    const submit_btn = document.createElement("div");

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
    

    submit_btn.innerHTML = '<button type="submit"><h3>Submit</h3></button>';
    submit_btn.className = "submit__btn";
  
    const form_container = document.createElement("div");
    form_container.className = "form__container";
    const form_content = document.createElement("div");
    form_content.className = "form__content";
    form_content.id = "form_content";
    form_container.appendChild(form_content);

    return {
        submit_btn, form_container, form_content, inputs
    }
}

export default createForm;