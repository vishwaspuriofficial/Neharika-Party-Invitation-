// var left = document.querySelector(".left-door");
// var right = document.querySelector(".right-door");
// left.classList.toggle("left-doorOpen");
//   right.classList.toggle("right-doorOpen");
// function openDoor() {
//   document.getElementById("click").click();
//   setTimeout(function() {
 
// }, 1000);



function RSVP() {
  let person = prompt("Please Enter Your Name to RSVP:");
  if (person=="") {
    alert("Empty")
    return
  }
    //show success banner
    alert(person)
          let params = {
      user_id: 'YGmp4QGAcWQ3Zy0M-',
      service_id: 'service_uydwywr',
      template_id: 'template_0eiwk2o',
      template_params: {
        name: person
      }
          }
      let headers = {
      'Content-type': 'application/json'
  };
    
    let options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('Your mail is sent!');
          alert("Congratulations! You have successfully RSVP fo the party! Remember to dress according to the weather as its an outdoor party!");
        } else {
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log('Oops... ' + error);
    });
  }
            
    // emailjs.sendForm('neharika_rsvp', 'rsvp_email', params, 'YGmp4QGAcWQ3Zy0M-')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
      

    // npm install @emailjs/browser --save

  



function playSound() {
var audio = new Audio('sound.mp3');
audio.play();
}