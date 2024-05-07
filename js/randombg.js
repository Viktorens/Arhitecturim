var files = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
var number = 0;
randbgs1();
randbgs2();

function randbgs1() {
    var section1 = document.getElementById("mid-section1");
    var rand = Math.floor(Math.random() * files.length);
    number = rand;
    section1.style.backgroundImage = "url(images/backgrounds/" + files[rand] + ")";
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
