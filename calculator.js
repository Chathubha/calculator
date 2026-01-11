function fn0()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 0;
}
function fn1()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 1;
}
function fn2()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 2;
}
function fn3()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 3;
}
function fn4()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 4;
}
function fn5()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 5;
}
function fn6()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 6;
}
function fn7()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 7;
}
function fn8()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 8;
}
function fn9()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML= previous + 9;
}
function fdote()
{
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + "." ;
}
function feraseone()
{
    let previous = document.getElementById("display").innerHTML;
    let erase = previous.slice(0,-1);
    document.getElementById("display").innerHTML = erase ;
}

let op; //use for another function use globaly
let firstsave//use for another function use globaly
function fadd()
{
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op ="add";
}
function fdis()
{

    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    op ="dis";
}
function fdiv()
{
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
     op ="div";
}
function fmul()
{
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
     op ="mul";
}
function fsqure()
{
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
     op ="sqr";
}
function fmodule()
{
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
     op ="module";
}
function feql()
{
    let secondsave = document.getElementById("display").innerHTML;

    if(op=="add")
    {
        document.getElementById("display").innerHTML = parseFloat(firstsave) + parseFloat(secondsave);
    }

    else if(op=="dis")
    {
        document.getElementById("display").innerHTML = parseFloat(firstsave) - parseFloat(secondsave);
    }
    else if(op=="mul")
    {
        document.getElementById("display").innerHTML = parseFloat(firstsave) * parseFloat(secondsave);
    }
    else if(op=="div")
    {
        document.getElementById("display").innerHTML = parseFloat(firstsave) / parseFloat(secondsave);
    }
    else if(op=="module")
    {
        document.getElementById("display").innerHTML = parseFloat(firstsave) % parseFloat(secondsave);
    }
    else if(op=="sqr")
    {
        document.getElementById("display").innerHTML = Math.sqrt(parseFloat(firstsave));
    }
    else 
    {
        document.getElementById("display").innerHTML = "Invalid..!";
    }
        
}
function fallclr()
{
    document.getElementById("display").innerHTML ="";
    op="";
}