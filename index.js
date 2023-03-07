let home = document.getElementById('home');
let guides = document.getElementById("guides");
let resources = document.getElementById('resources');
let servers = document.getElementById("servers");

function alerted () {
    alert('hello');
}

// function redirected(url) {
//     window.location.href=url;
// }

// home.addEventListener(onclick, redirected("index.html"));
// guides.addEventListener(onclick, redirected("guides.html"));
resources.addEventListener(onclick, alerted);