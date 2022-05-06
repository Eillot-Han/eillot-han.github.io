function getset(i) {
    var pho = new Array();
    for (j = 1; j <= 4; j++) {
        pho[j] = document.getElementById(j);
        pho[j].style.borderLeft = "1px solid #f7f7f7";
        pho[j].style.borderRight = "1px solid #f7f7f7";
        pho[j].style.borderTop = "1px solid #f7f7f7";
        pho[j].style.borderBottom = "1px solid #fd4718";
        console.log(pho[j]);
    }
    pho[i].style.borderLeft = "1px solid #fd4718";
    pho[i].style.borderRight = "1px solid #fd4718";
    pho[i].style.borderTop = "1px solid #fd4718";
    pho[i].style.borderBottom = "1px solid #ffffff";
}

function downget(i){
    var tab = new Array();
    for(j=1;j<=5;j++){
        tab[j]=document.getElementById("tab"+j);
        tab[j].style="border-bottom:2px solid #ffffff;font-weight: normal;";
        console.log(tab[j]);
    }
    tab[i].style="border-bottom:2px solid rgb(255, 123, 0);font-weight: bold;";
}

function chong(i){
    var cho = new Array();
    for(j=1;j<=4;j++){
        cho[j]=document.getElementById("chong"+j);
        cho[j].style="color:black;";
        console.log(chong[j]);
    }
    cho[i].style="color: #ff6340;";
}