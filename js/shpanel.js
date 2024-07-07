var showButton = document.getElementById("show-button");
var hideButton = document.getElementById("hide-button");
var container = document.getElementById("container");
var tabs = document.getElementsByClassName("description-tab");
var list = document.getElementsByClassName("submenu-item");

function openPanel() {
    container.style.height = "45vh";
    container.style.backgroundColor = "rgba(255,0,0,0.6)";
    hideButton.style.display = "block";
    showButton.style.display = "none";
    showTab(0);
}

function closePanel() {
    container.style.height = "30px";
    container.style.backgroundColor = "rgba(255,0,0,0.5)";
    hideButton.style.display = "none";
    showButton.style.display = "block";    
    hideAllTabs();
}

function showTab(n) {
    var i;
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        list[i].style.color = "white";
    }
    tabs[n].style.display = "block";
    list[n].style.color = "black";

}

function hideAllTabs() {
    var i;
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        list[i].style.color = "white";
    }
}