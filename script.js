// Define predefined users
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match any predefined user
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to index.html
        return false;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
