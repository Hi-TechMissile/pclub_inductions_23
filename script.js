const bt = document.querySelector("#nav");
const menu = document.querySelector("#menu");
bt.onclick = open;
function open()
{
    menu.style.display = "block";
    bt.onclick = close;
}
function close()
{
    bt.onclick = open;
    menu.style.display = "none";
}
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const bt1 = document.querySelector("#prev");
const bt2 = document.querySelector("#next");
bt1.onclick = prev;
bt2.onclick = next;
let current = 1;
function prev()
{
    current--;
    if(current==0)
    {
        current = 3;
        three.style.display = "block";
        one.style.display = "none";
        two.style.display = "none";
    }
    if(current==1)
    {
        one.style.display = "block";
        two.style.display = "none";
        three.style.display = "none";
    }
    if(current==2)
    {
        one.style.display = "none";
        two.style.display = "block";
        three.style.display = "none";
    }
}
function next()
{
    current++;
    if(current==4)
    {
        current = 1;
        three.style.display = "none";
        one.style.display = "block";
        two.style.display = "none";
    }
    if(current==2)
    {
        one.style.display = "none";
        two.style.display = "block";
        three.style.display = "none";
    }
    if(current==3)
    {
        one.style.display = "none";
        two.style.display = "none";
        three.style.display = "block";
    }
}
