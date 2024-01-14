let getUsersdata = JSON.parse(localStorage.getItem("usersdata"));
console.log(getUsersdata);

function Signin(){
   let username = document.getElementById("phone").value;
   let mobile = document.getElementById("tax").value;
   let password = document.getElementById("case").value;

   if(mobile.length <= 10 || mobile.length >= 10 )
     {
        alert("Mobile number should be of 10 digits")
     }
     else if(mobile.length == 0)
     {
        alert("Enter Mobile Number")
     }

   else{

       let userData = {
        username:username,
        mobile:mobile,
        password:password
       }

      let users = [...getUsersdata,userData];
      localStorage.setItem("usersdata", JSON.stringify(users));


      alert("account created");
      window.location.href = "signup.html"
   }


}