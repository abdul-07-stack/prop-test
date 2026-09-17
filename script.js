let yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", function() {
document.body.innerHTML = `
        <h1>Yessss! 🤣🎉</h1>
        <h2>You said YES!<h2/>
        <p>Okay...I guess you love me then. 😍❤</p>
    `;
});
let noButton = document.getElementById("noButton");
noButton.addEventListener("click", function() {
    alert("Are you sure? 😎");
});
noButton.addEventListener("mouseover", function() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "%";
    noButton.style.top = Math.random() * 80 + "%";
});