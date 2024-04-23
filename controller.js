#COntroller
function showLoginMessage(message) {
    const loginMessage = document.getElementById("loginMessage");
    loginMessage.innerHTML =message;
}


function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Check if the user exists in the model
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        currentUser = user;
        showLoginMessage(`<b>Login successfull for ${user.username}!</b>`);
        // Redirect to dashboard or perform other actions here
    } else{
        showLoginMessage("<b>Invalid username or password</b>");
    }

}
//Event listner
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
