var ul = document.getElementById("list");
var li = document.createElement("li");
li.classList.add('notification');
li.appendChild(document.createTextNode("Welcome To Kaos 14!"));
ul.appendChild(li);

function notifications(msg) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var br = document.createElement("br");
    li.classList.add('notification');
    li.appendChild(document.createTextNode(msg));
    li.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(br);
    ul.appendChild(li);
}