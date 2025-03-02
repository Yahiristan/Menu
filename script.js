document.addEventListener("DOMContentLoaded", function() {
        const body = document.querySelector("body");
        const sidebar = body.querySelector(".sidebar");
        const toggle = body.querySelector(".toggle");
        const searchBtn = body.querySelector(".search-box");
        const modeSwitch = body.querySelector(".toggle-switch");
        const modeTxt = body.querySelector(".mode-text");
    
        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");  
        if(body.classList.contains("dark")){
                modeTxt.innerText = "Modo Blanco";
        } else {
                modeTxt.innerText = "Modo Oscuro";
        }
        });

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        const loginBtn = document.querySelector(".bx-log-in-circle").parentElement; 
        loginBtn.addEventListener("click", function (event) {
                event.preventDefault(); 
                window.location.href = "login.html"; 
            });
    });