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
    menu.style.display = "none";
    bt.onclick = open;
}