function displayWelcome(){
  let username = document.querySelector("#username").innerHTML;
  document.querySelector("div").style.display = "none;"
  document.querySelector("#welcome").innerHTML = `Welcome, ${username}!`;
  
}