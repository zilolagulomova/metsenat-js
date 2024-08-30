const token = window.localStorage.getItem("token");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    window.localStorage.removeItem("token");
    window.location.replace("login.html")
    
    if(!token) {
        window.location.replace("login.html")
    }
})