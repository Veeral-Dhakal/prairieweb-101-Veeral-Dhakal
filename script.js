document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("Full-Name").value.trim();
        const email = document.getElementById("Email").value.trim();
        

        alert(`Thank you, ${fullName}! We will send info about the trail to your mail at ${email}.`);

        form.reset();
    });
});