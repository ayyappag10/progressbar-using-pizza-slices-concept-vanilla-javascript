
window.addEventListener('load', function(){
    newFunction();
    rects[1].style.tr
    setInterval(rotate, 100);
})

var rects;
var keyrect;
var rotated = 0;

function newFunction() {
    rects = document.getElementsByClassName("foregroundrect");
    keyrect = document.getElementById("keyrect");
}

function rotate(){
    if(rotated == 360)
    {
        rotated = 0;
    }
    if(rotated == 0)
    {
        for(let i=0; i<rects.length; i++)
        {
            rects[i].style.visibility=  "visible"
        }
        rects[1].style.visibility ="hidden"
    }
    else if(rotated == 90)
    {
        rects[2].style.visibility = "hidden";
    }
    else if(rotated == 180)
    {
        rects[3].style.visibility = "hidden";
    }
    else if(rotated == 270)
    {
        rects[0].style.visibility = "hidden";
        rects[1].style.visibility = "visible";
        rects[1].style.backgroundColor = "#0000ff"
    }    
    rotated = rotated + 10;
    keyrect.style.transform = `rotate(${rotated}deg)`;
}