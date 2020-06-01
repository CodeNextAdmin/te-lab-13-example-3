function displayWelcome(){
  let username = document.querySelector("#username").value;
  console.log(username);
  // alert("hello, "+username);
  document.querySelector("div").style.display = "none";
  let welcomemsg = document.querySelector("#welcome")
  welcomemsg.innerHTML = `Welcome, ${username}!`;
  welcomemsg.style.display = "block";
  
}