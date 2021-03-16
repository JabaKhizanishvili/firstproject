var w = document.getElementById("weight");
var h = document.getElementById("height");
var s = document.getElementById("s");
var r = document.querySelector('.result');
s.onclick = function(){
    var bmi = (w.value / (h.value * h.value)) * 10000;
    if(bmi < 24 && bmi > 18){
        r.innerHTML = "არ ხარ მსუქანი"
        r.style.color = 'green'
    } else if(bmi > 24){
        r.innerHTML = "სუქანი ხარ "
        r.style.color = 'red';
        var img = document.createElement("img");
        img.src = "images/fat.jpg";
        img.style.width = "30%";
        r.appendChild(img);
    } else{
        r.innerHTML = 'რაღაც ანომალიასთან გვაქ საქმე';
    }
};


