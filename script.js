function register(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "" || pass === ""){
        alert("Remplis tous les champs !");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Compte créé !");
    window.location.href = "login.html";
}

function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    if(user === savedUser && pass === savedPass){
        alert("Connexion réussie 🚀");
        window.location.href = "dashboard.html";
    }else{
        alert("Identifiants incorrects !");
    }
}
