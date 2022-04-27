
 var  signupDetails = JSON.parse(localStorage.getItem('signupDetails')) || [];
 document.querySelector('form').addEventListener('submit',()=>{
     event.preventDefault();
     var  obj = {
         name:document.querySelector('#name').value,
         number:document.querySelector('#number').value,
         email:document.querySelector('#email').value,
         password:document.querySelector('#password').value,
         
     }
     signupDetails.push(obj)
     localStorage.setItem('signupDetails',JSON.stringify(signupDetails));
                alert('Signup  Successfully');
              
 })