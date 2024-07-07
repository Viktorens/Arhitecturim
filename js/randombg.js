var files = ["zcara.jpg", "sala-multifuctionala-moeciu-de-sus.jpg", "centru-de-medicina-preventiva.jpg", "studiu-pentru-o-biserica-protestanta.jpg", "locuinta-ip.jpg", "locuinta-m.jpg", "bungalou-mauritius.jpg"];
var number = 0;
randbgs1();
// randbgs2();

function randbgs1() {
    var section1 = document.getElementById("mid-section1");
    var section2 = document.getElementById("mid-section2");
    var header = document.getElementById("page-header");
    var rand = Math.floor(Math.random() * files.length);
    number = rand;
    section1.style.backgroundImage = "url(images/backgrounds/" + files[rand] + ")";
    section2.style.backgroundImage = "url(images/backgrounds/" + files[rand] + ")";
    header.style.backgroundImage = "url(images/backgrounds/" + files[rand] + ")";
}

function randbgs2() {
    var section2 = document.getElementById("mid-section2");
    var rand = Math.floor(Math.random() * files.length);
    if (rand == number) {
        if (rand != files.length - 1) {
            rand += 1;
        }
        else {
            rand -= 1;
        }
    }    
    section2.style.backgroundImage = "url(images/backgrounds/" + files[rand] + ")";
}
