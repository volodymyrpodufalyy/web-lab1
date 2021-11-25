import emailjs from "emailjs-com";

const sendMail = (content) =>
  emailjs
    .sendForm(
      "service_4v1irwd",
      "template_4xlcldf",
      content,
      "user_xD0nD5cy6buRWTvtcprPM"
    )
    .then(
      (result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    export default sendMail;