document.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("auth-link");
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn) {
        authLink.textContent = "Profile";
        authLink.href = "profile.html"
        authLink.onClick = null;
    } else {
        authLink.textContent = "Login / Register";
        authLink.href = "#";
    }

});

function toggleAuthPopUp() {
    const popup = document.getElementById("auth-popup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // here would come the authentication logic (e.g. API call to authenticate user)

    // for now we just mock that
    localStorage.setItem("loggedIn", true);
    const authLink = document.getElementById("auth-link");
    authLink.textContent = "Profile";
    authLink.href = "profile.html";
    authLink.onClick = null;

    toggleAuthPopUp();
});