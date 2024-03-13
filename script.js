var uname="";
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    uname=storedUsername;
    if (username === storedUsername && password === storedPassword) {
      
      document.getElementById("loginMessage").style.color = "Green";
      document.getElementById("loginMessage").innerHTML = "Login successful please wait!";
      
    //   document.getElementById("loginMessage").innerHTML = "Please wait";
      setInterval(() => {
        window.location.href = 'Project.html';
      }, 2000);
    } else {
      document.getElementById("loginMessage").innerHTML = "Invalid username or password.";
    }
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;
  
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    document.getElementById("registerMessage").innerHTML = "Registration successful!";
  });
  
  // document.getElementById("username12").textContent=storedUsername;
  // document.getElementById("hello").innerHTML=uname;
  
  