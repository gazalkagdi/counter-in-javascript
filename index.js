let count = 0;

document.getElementById("d").onclick = function(){
    count -= 1;
    document.getElementById("label").innerHTML = count;
}

document.getElementById("r").onclick = function(){
    count = 0;
    document.getElementById("label").innerHTML = count;
}

document.getElementById("i").onclick = function(){
    count += 1;
    document.getElementById("label").innerHTML = count;
}