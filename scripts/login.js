var signupDetails=JSON.parse(localStorage.getItem('signupDetails')) || [];

        document.querySelector('form').addEventListener('submit',()=>{
            event.preventDefault();
            var enteredEmail=document.querySelector('#email').value;
            var enteredPass=document.querySelector('#password').value;

            var flag=false;
            signupDetails.forEach(element => {
                if(enteredEmail==element.email && enteredPass==element.password){
                    flag=true;
                    alert('Login Successful');
                    // window.location.href='./index.html';
                    document.querySelector('#email').value='';
                    document.querySelector('#password').value='';
                    window.location.href='index.html';
                }
            });
            if(!flag){
                alert( 'invalid Credentials');
            }

        })