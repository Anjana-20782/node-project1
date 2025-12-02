const form = document.getElementById("signupForm");

if (form) {

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;

        const msg = document.getElementById("msg");

        if (password !== confirm) {
            msg.style.color = "red";
            msg.innerText = "Passwords do not match";
            return;
        }

        let formData={name,email,password,confirm}
       