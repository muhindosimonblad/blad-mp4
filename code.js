
//sending message by the user
function sendmessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  
  let body= "name:"+name+
  "%0D%0AEmail:"+email+
  "%0D%0AMessage:"+message;

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


const correctpassword='blad2026';
function login(){
  let username = document.getElementById("loginusername").value;
  let password = document.getElementById("loginpassword").value;
  let correctpassword = document.getElementById("loginpassword").value;
  

  if(username==="" || password===""){
    alert("please fill in all fields");
  } else{
    if(password===correctpassword){
      localStorage.setItem('loggedIn'.'true');
      window.location.href=home.html;
    } else {
      document.getElementById("error").innerText='wrong password';
    }
}
      
  }
}

function signup(){
  let username = document.getElementById("signupusername").value;
  let password = document.getElementById("signuppassword").value;
  let email = document.getElementById("signupemail").value;
if(username==="" || password==="" || email===""){
    alert("please fill in all fields");
  } else{
    alert("Account created successfully");
    showlogin();
  }

}























