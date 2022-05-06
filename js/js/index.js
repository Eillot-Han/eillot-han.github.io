function setColor() {
    alert("p1");
    document.getElementById("p1").style.color = "#ff0000";
}

function setColck() {
    alert("p2");
    var date = new Date();
    var h1 = document.getElementById("h1");
    h1.innerHTML = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
}

function addClass(){
    alert("p3");
    document.getElementById("ur").classList.add("fn-active");
}

function remove() {
    alert("p4");
    document.getElementById("p8").remove();
}

function openi() {
    alert("p5");
    var win = window.open();
    win.location = "https://www.taobao.com";
}

function create() {
    alert("p6");
    var p9 = document.createElement("li");
    document.getElementById("ur").appendChild(p9);
    p9.innerHTML = "p9";
}

function changewin() {
    alert("p7");
    var div1 = document.getElementById("box");
    div1.style.width = window.width;
}