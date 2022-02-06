let image1 = document.getElementById("div1");
let image2 = document.getElementById("div2");
let image3 = document.getElementById("div3");
let mountain = document.getElementById('mountain');
let lake = document.getElementById('lake');
let beach = document.getElementById('beach');

let counter = 1;

function nextCarrusel(){
    if(counter===1){
        div1.className = "position2";
        div2.className = "position3";
        div3.className = "position1";
        counter=2;
    }else if(counter === 2){
        div1.className = "position3";
        div2.className = "position1";
        div3.className = "position2";
        counter=3;
    }else if(counter === 3){
        div1.className = "position1";
        div2.className = "position2";
        div3.className = "position3";
        counter=1;  
    }
}

function prevCarrusel(){
    if(counter===1){
        div1.className = "position3";
        div2.className = "position1";
        div3.className = "position2";
        counter=2;
    }else if(counter === 2){
        div1.className = "position2";
        div2.className = "position3";
        div3.className = "position1";
        counter=3;
    }else if(counter === 3){
        div1.className = "position1";
        div2.className = "position2";
        div3.className = "position3";
        counter=1;  
    }
}

div1.onmouseover = function(){
    mountain.className = "mountainHover"; 
}

div1.onmouseout = function(){
    mountain.className = "mountain"; 
}


div2.onmouseover = function(){
    lake.className = "lakeHover"; 
}

div2.onmouseout = function(){
    lake.className = "lake"; 
}

div3.onmouseover = function(){
    beach.className = "beachHover"; 
}

div2.onmouseout = function(){
    beach.className = "beach"; 
}



