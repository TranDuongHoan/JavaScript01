document.addEventListener('click', function(event) {
    var passwordInput = document.getElementById("passwordInput");
    var showHideButton = document.getElementById("showHideButton ");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                showHideButton.textContent = "Hide";
            } else {
                passwordInput.type = "password";
                showHideButton.textContent = "Show";
            }
});
   