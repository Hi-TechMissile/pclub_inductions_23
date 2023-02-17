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
