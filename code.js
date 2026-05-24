
//sending message by the user
function sendmessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  
  let body= "name:"+name+
  "%0D%0DEmail:"+email+
  "%0D%0DMessage:"+message;

  window.location.href= "mailto:muhindosimon949@gmail.com?subject=contactForm&body="+ body;
}



//--------------email us
function email(){
  window.location.href="mailto:muhindosimon949@gmail.com"
}

function call(){
  window.location.href="tel:+256789012949"
}




//searching for items
function searchitem(){
  let text=document.getElementById("searchbox").value.toLowerCase();
if(text==="contact"){
  window.location.href="conact.html"
} else if(text==="blog"){
window.location.href="blog.html"
}
else if(text==="blad academy"){
window.location.href="home.html"
}
else if(text==="about"){
window.location.href="about.html"
}
else{
  alert("soory, we are unable to find your search on this website")
}
}

//log in and sign up
function showsignup(){
  
  document.getElementById("loginform").classList.add("hidden");
  document.getElementById("signupform").classList.remove("hidden");

}
 
function showlogin(){
   document.getElementById("signupform").classList.add("hidden");
  document.getElementById("loginform").classList.remove("hidden");
}

/*function login(){
  let username = document.getElementById("loginusername").value;
  let password = document.getElementById("loginpassword").value;

  if(username==="" || password===""){
    alert("please fill in all fields");
  } else{
    alert("log in successfull!");
    window.location.href="home.html"
  }
}
  */

/*function signup(){
  let username = document.getElementById("signupusername").value;
  let password = document.getElementById("signuppassword").value;
  let email = document.getElementById("signupemail").value;
if(username==="" || password==="" || email===""){
    alert("please fill in all fields");
  } else{
    alert("Account created successfully");
    showlogin();
  }

}*/

function signup(){
  let username = document.getElementById("signupusername").value.trim();
  let password = document.getElementById("signuppassword").value;
  let email = document.getElementById("signupemail").value.trim();
  
  
  //checking for empty spaces
  if(username==="" || password==="" || email===""){
    alert("please fill in all fields");
    return;
  }

    //user length
    if(username.length<5){
      alert("user name must be at least 5 characters");
      return;
    }

    //valid email
    let emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailregex.test(email)){
      alert("plaese enter valid email address");
      return;
    }

    //password strength
    if(password.length<6){
      alert("password must be at least 6 characters");
      return;
    }


    //check user if already exist
    let users=JSON.parse(localStorage.getItem("users")) || {};
    if(users[username]){
      alert("user name already taken");
      return;
      }

      //save users
      users[username]={password:password,email:email};
      localStorage.setItem("users",JSON.stringify(users));
      alert("account created successfully");
      showlogin();
}

function login(){
 let username = document.getElementById("loginusername").value.trim();
  let password = document.getElementById("loginpassword").value;
 
 
  //checking for empty spaces
  if(username==="" || password===""){
    alert("please fill in all fields");
    return;
  }

//check if user exist
  let users=JSON.parse(localStorage.getItem("users")) || [];
    if(!users[username]){
      alert("user not found. please sign up first.");
      return;
      }

      //check password match
      if(users[username].password !== password){
        alert("incorrect password");
        return;
      }


      //success
      localStorage.setItem("currentuser",username);
      alert("log in successful!");
      window.location.href="home.html";

}























