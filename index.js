function sendmail(){
    var params = {
    name: document.getElementById("name").Value,
    email: document.getElementById("email").Value,
    message : document.getElementById("message").Value,
    };

const serviceID = "service_y9mlrun";
const templateID = "template_rigjz1f";

emailjs
.send(serviceID,templateID,params)
.then((res) => {
    document.getElementById("name").Value = "";
    document.getElementById("email").Value = "";
    document.getElementById("message").Value = "";
    console.log(res);
    alert("your message sent");
})
.catch((err) => console.log(err));
}
    