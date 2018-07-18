
function buildPage(){

    //my logic
    document.body.innerHTML = "hello world<br>";

    var myAnchor = document.createElement("a");
    myAnchor.setAttribute("href", "https://kapeli.com/dash");

    myAnchor.textContent = "Dash";

    // document.body.appendChild(myAnchor);

    var header = document.createElement("div");

    header.style.backgroundColor = "green";
    header.style.height="300px";

    document.body.appendChild(header);

    header.appendChild(myAnchor);


}