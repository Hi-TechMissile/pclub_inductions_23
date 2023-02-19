// button variable for controlling onclick() event of menubar in mobile devices.
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

// Variables to control display of the three images of a particular product/item.
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

// button variables for controlling onclick() event on previous and next buttons to control 
// slideshow of images.
const bt1 = document.querySelector("#prev");
const bt2 = document.querySelector("#next");
bt1.onclick = prev;
bt2.onclick = next;
let current = 1;

// Function to move between images backwards in a cycle
function prev()
{
    current--;
    if(current==0)
    {
        // Display the required image based on value of current
        // and hide the others.
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

// Function to move between images forward in a cycle
function next()
{
    current++;
    if(current==4)
    {
        // Display the required image based on value of current
        // and hide the others.
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
