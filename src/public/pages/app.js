function sendEmail(Name, Email, Telephone, Message) {
  const options = {
    method: "POST",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: Name,
    email: Email,
    telephone:Telephone,
    message: Message
  })
  };
return fetch("../pages/contacto.html", options)
  .then(res =>{
    if(res.status === 200){
      Swal.fire({
      icon: 'success',
      title: 'Your message has been sent Successfully!',
      })
      form.reset()
    }else{
      Swal.fire({
      icon: 'error',
      title: 'Error, please try agian!',
      })
      }
    })
}