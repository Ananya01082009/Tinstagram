function addUser() {
    username = document.getElementById(Username);
    localStorage.setItem("user_name", username);
    window.location = "kwitter_room.html";
}