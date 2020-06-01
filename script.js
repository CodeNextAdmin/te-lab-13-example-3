function displayWelcome(){
  let username = document.querySelector("#username").value;
  console.log(username);
  // alert("hello, "+username);
  document.querySelector(".form").style.display = "none";
  let welcomemsg = document.querySelector("#welcome");
  console.log(welcomemsg);
  welcomemsg.style.display = "block";
  welcomemsg.innerHTML = `Welcome, ${username}!`;
  
}