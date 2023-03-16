// $(document).ready(function(){
//     $('#submit').click(function(){
//         var email = $('#email').val();
//         var pwd = $('#pwd').val();
//         $.ajax({
//             url: '/login.php',
//             type: 'POST',
//             data: {email: email, pwd: pwd},
//             success: function(response){
//                 $('#myForm')[0].reset();
//                 alert(response);
//             }
//         });
//     });
// });

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "profile.html";
    }
    e.preventDefault();
}