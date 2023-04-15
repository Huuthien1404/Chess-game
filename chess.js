window.onload = () => {
  document.querySelector("#container-black-rook1").style.pointerEvents = "none";
  document.querySelector("#container-black-rook2").style.pointerEvents = "none";
  document.querySelector("#container-black-knight1").style.pointerEvents =
    "none";
  document.querySelector("#container-black-knight2").style.pointerEvents =
    "none";
  document.querySelector("#container-black-bishop1").style.pointerEvents =
    "none";
  document.querySelector("#container-black-bishop2").style.pointerEvents =
    "none";
  document.querySelector("#container-black-queen").style.pointerEvents = "none";
  document.querySelector("#container-black-king").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn1").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn2").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn3").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn4").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn5").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn6").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn7").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn8").style.pointerEvents = "none";
  document.querySelector("#container-black-pawn1").style.bottom = "75%";
  document.querySelector("#container-black-pawn2").style.bottom = "75%";
  document.querySelector("#container-black-pawn3").style.bottom = "75%";
  document.querySelector("#container-black-pawn4").style.bottom = "75%";
  document.querySelector("#container-black-pawn5").style.bottom = "75%";
  document.querySelector("#container-black-pawn6").style.bottom = "75%";
  document.querySelector("#container-black-pawn7").style.bottom = "75%";
  document.querySelector("#container-black-pawn8").style.bottom = "75%";
  document.querySelector("#container-white-pawn1").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn2").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn3").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn4").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn5").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn6").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn7").style.bottom = "12.5%";
  document.querySelector("#container-white-pawn8").style.bottom = "12.5%";
  document.querySelector("#container-white-rook1").style.bottom = "0%";
  document.querySelector("#container-white-rook2").style.bottom = "0%";
  document.querySelector("#container-white-knight1").style.bottom = "0%";
  document.querySelector("#container-white-knight2").style.bottom = "0%";
  document.querySelector("#container-white-bishop1").style.bottom = "0%";
  document.querySelector("#container-white-bishop2").style.bottom = "0%";
  document.querySelector("#container-white-queen").style.bottom = "0%";
  document.querySelector("#container-white-king").style.bottom = "0%";
  document.querySelector("#container-black-rook1").style.bottom = "87.5%";
  document.querySelector("#container-black-rook2").style.bottom = "87.5%";
  document.querySelector("#container-black-knight1").style.bottom = "87.5%";
  document.querySelector("#container-black-knight2").style.bottom = "87.5%";
  document.querySelector("#container-black-bishop1").style.bottom = "87.5%";
  document.querySelector("#container-black-bishop2").style.bottom = "87.5%";
  document.querySelector("#container-black-queen").style.bottom = "87.5%";
  document.querySelector("#container-black-king").style.bottom = "87.5%";

  document.querySelector("#container-black-pawn1").style.left = "0%";
  document.querySelector("#container-black-pawn2").style.left = "12.5%";
  document.querySelector("#container-black-pawn3").style.left = "25%";
  document.querySelector("#container-black-pawn4").style.left = "37.5%";
  document.querySelector("#container-black-pawn5").style.left = "50%";
  document.querySelector("#container-black-pawn6").style.left = "62.5%";
  document.querySelector("#container-black-pawn7").style.left = "75%";
  document.querySelector("#container-black-pawn8").style.left = "87.5%";

  document.querySelector("#container-black-rook1").style.left = "0%";
  document.querySelector("#container-black-rook2").style.left = "87.5%";
  document.querySelector("#container-black-knight1").style.left = "12.5%";
  document.querySelector("#container-black-knight2").style.left = "75%";
  document.querySelector("#container-black-bishop1").style.left = "25%";
  document.querySelector("#container-black-bishop2").style.left = "62.5%";
  document.querySelector("#container-black-queen").style.left = "37.5%";
  document.querySelector("#container-black-king").style.left = "50%";

  document.querySelector("#container-white-pawn1").style.left = "0%";
  document.querySelector("#container-white-pawn2").style.left = "12.5%";
  document.querySelector("#container-white-pawn3").style.left = "25%";
  document.querySelector("#container-white-pawn4").style.left = "37.5%";
  document.querySelector("#container-white-pawn5").style.left = "50%";
  document.querySelector("#container-white-pawn6").style.left = "62.5%";
  document.querySelector("#container-white-pawn7").style.left = "75%";
  document.querySelector("#container-white-pawn8").style.left = "87.5%";

  document.querySelector("#container-white-rook1").style.left = "0%";
  document.querySelector("#container-white-rook2").style.left = "87.5%";
  document.querySelector("#container-white-knight1").style.left = "12.5%";
  document.querySelector("#container-white-knight2").style.left = "75%";
  document.querySelector("#container-white-bishop1").style.left = "25%";
  document.querySelector("#container-white-bishop2").style.left = "62.5%";
  document.querySelector("#container-white-queen").style.left = "37.5%";
  document.querySelector("#container-white-king").style.left = "50%";

  document.querySelector(".r1c1").style.bottom="87.5%";
  document.querySelector(".r1c2").style.bottom="87.5%";
  document.querySelector(".r1c3").style.bottom="87.5%";
  document.querySelector(".r1c4").style.bottom="87.5%";
  document.querySelector(".r1c5").style.bottom="87.5%";
  document.querySelector(".r1c6").style.bottom="87.5%";
  document.querySelector(".r1c7").style.bottom="87.5%";
  document.querySelector(".r1c8").style.bottom="87.5%";

  document.querySelector(".r1c1").style.left="0%";
  document.querySelector(".r1c2").style.left="12.5%";
  document.querySelector(".r1c3").style.left="25%";
  document.querySelector(".r1c4").style.left="37.5%";
  document.querySelector(".r1c5").style.left="50%";
  document.querySelector(".r1c6").style.left="62.5%";
  document.querySelector(".r1c7").style.left="75%";
  document.querySelector(".r1c8").style.left="87.5%";

  document.querySelector(".r2c1").style.bottom="75%";
  document.querySelector(".r2c2").style.bottom="75%";
  document.querySelector(".r2c3").style.bottom="75%";
  document.querySelector(".r2c4").style.bottom="75%";
  document.querySelector(".r2c5").style.bottom="75%";
  document.querySelector(".r2c6").style.bottom="75%";
  document.querySelector(".r2c7").style.bottom="75%";
  document.querySelector(".r2c8").style.bottom="75%";

  document.querySelector(".r2c1").style.left="0%";
  document.querySelector(".r2c2").style.left="12.5%";
  document.querySelector(".r2c3").style.left="25%";
  document.querySelector(".r2c4").style.left="37.5%";
  document.querySelector(".r2c5").style.left="50%";
  document.querySelector(".r2c6").style.left="62.5%";
  document.querySelector(".r2c7").style.left="75%";
  document.querySelector(".r2c8").style.left="87.5%";

  document.querySelector(".r3c1").style.bottom="62.5%";
  document.querySelector(".r3c2").style.bottom="62.5%";
  document.querySelector(".r3c3").style.bottom="62.5%";
  document.querySelector(".r3c4").style.bottom="62.5%";
  document.querySelector(".r3c5").style.bottom="62.5%";
  document.querySelector(".r3c6").style.bottom="62.5%";
  document.querySelector(".r3c7").style.bottom="62.5%";
  document.querySelector(".r3c8").style.bottom="62.5%";

  document.querySelector(".r3c1").style.left="0%";
  document.querySelector(".r3c2").style.left="12.5%";
  document.querySelector(".r3c3").style.left="25%";
  document.querySelector(".r3c4").style.left="37.5%";
  document.querySelector(".r3c5").style.left="50%";
  document.querySelector(".r3c6").style.left="62.5%";
  document.querySelector(".r3c7").style.left="75%";
  document.querySelector(".r3c8").style.left="87.5%";

  document.querySelector(".r4c1").style.bottom="50%";
  document.querySelector(".r4c2").style.bottom="50%";
  document.querySelector(".r4c3").style.bottom="50%";
  document.querySelector(".r4c4").style.bottom="50%";
  document.querySelector(".r4c5").style.bottom="50%";
  document.querySelector(".r4c6").style.bottom="50%";
  document.querySelector(".r4c7").style.bottom="50%";
  document.querySelector(".r4c8").style.bottom="50%";

  document.querySelector(".r4c1").style.left="0%";
  document.querySelector(".r4c2").style.left="12.5%";
  document.querySelector(".r4c3").style.left="25%";
  document.querySelector(".r4c4").style.left="37.5%";
  document.querySelector(".r4c5").style.left="50%";
  document.querySelector(".r4c6").style.left="62.5%";
  document.querySelector(".r4c7").style.left="75%";
  document.querySelector(".r4c8").style.left="87.5%";

  document.querySelector(".r5c1").style.bottom="37.5%";
  document.querySelector(".r5c2").style.bottom="37.5%";
  document.querySelector(".r5c3").style.bottom="37.5%";
  document.querySelector(".r5c4").style.bottom="37.5%";
  document.querySelector(".r5c5").style.bottom="37.5%";
  document.querySelector(".r5c6").style.bottom="37.5%";
  document.querySelector(".r5c7").style.bottom="37.5%";
  document.querySelector(".r5c8").style.bottom="37.5%";

  document.querySelector(".r5c1").style.left="0%";
  document.querySelector(".r5c2").style.left="12.5%";
  document.querySelector(".r5c3").style.left="25%";
  document.querySelector(".r5c4").style.left="37.5%";
  document.querySelector(".r5c5").style.left="50%";
  document.querySelector(".r5c6").style.left="62.5%";
  document.querySelector(".r5c7").style.left="75%";
  document.querySelector(".r5c8").style.left="87.5%";

  document.querySelector(".r6c1").style.bottom="25%";
  document.querySelector(".r6c2").style.bottom="25%";
  document.querySelector(".r6c3").style.bottom="25%";
  document.querySelector(".r6c4").style.bottom="25%";
  document.querySelector(".r6c5").style.bottom="25%";
  document.querySelector(".r6c6").style.bottom="25%";
  document.querySelector(".r6c7").style.bottom="25%";
  document.querySelector(".r6c8").style.bottom="25%";

  document.querySelector(".r6c1").style.left="0%";
  document.querySelector(".r6c2").style.left="12.5%";
  document.querySelector(".r6c3").style.left="25%";
  document.querySelector(".r6c4").style.left="37.5%";
  document.querySelector(".r6c5").style.left="50%";
  document.querySelector(".r6c6").style.left="62.5%";
  document.querySelector(".r6c7").style.left="75%";
  document.querySelector(".r6c8").style.left="87.5%";

  document.querySelector(".r7c1").style.bottom="12.5%";
  document.querySelector(".r7c2").style.bottom="12.5%";
  document.querySelector(".r7c3").style.bottom="12.5%";
  document.querySelector(".r7c4").style.bottom="12.5%";
  document.querySelector(".r7c5").style.bottom="12.5%";
  document.querySelector(".r7c6").style.bottom="12.5%";
  document.querySelector(".r7c7").style.bottom="12.5%";
  document.querySelector(".r7c8").style.bottom="12.5%";

  document.querySelector(".r7c1").style.left="0%";
  document.querySelector(".r7c2").style.left="12.5%";
  document.querySelector(".r7c3").style.left="25%";
  document.querySelector(".r7c4").style.left="37.5%";
  document.querySelector(".r7c5").style.left="50%";
  document.querySelector(".r7c6").style.left="62.5%";
  document.querySelector(".r7c7").style.left="75%";
  document.querySelector(".r7c8").style.left="87.5%";

  document.querySelector(".r8c1").style.bottom="0%";
  document.querySelector(".r8c2").style.bottom="0%";
  document.querySelector(".r8c3").style.bottom="0%";
  document.querySelector(".r8c4").style.bottom="0%";
  document.querySelector(".r8c5").style.bottom="0%";
  document.querySelector(".r8c6").style.bottom="0%";
  document.querySelector(".r8c7").style.bottom="0%";
  document.querySelector(".r8c8").style.bottom="0%";

  document.querySelector(".r8c1").style.left="0%";
  document.querySelector(".r8c2").style.left="12.5%";
  document.querySelector(".r8c3").style.left="25%";
  document.querySelector(".r8c4").style.left="37.5%";
  document.querySelector(".r8c5").style.left="50%";
  document.querySelector(".r8c6").style.left="62.5%";
  document.querySelector(".r8c7").style.left="75%";
  document.querySelector(".r8c8").style.left="87.5%";
}
function handleClickToMoveRow1() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box white r1c1") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box black r1c2") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box white r1c3") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box black r1c4") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box white r1c5") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box black r1c6") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box white r1c7") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box black r1c8") {
                    listWhiteSoldier[i].style.bottom = "87.5%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box white r1c1") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box black r1c2") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box white r1c3") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box black r1c4") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box white r1c5") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box black r1c6") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box white r1c7") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box black r1c8") {
                        listBlackSoldier[i].style.bottom = "87.5%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow2() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box black r2c1") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box white r2c2") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box black r2c3") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box white r2c4") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box black r2c5") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box white r2c6") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box black r2c7") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box white r2c8") {
                    listWhiteSoldier[i].style.bottom = "75%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box black r2c1") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box white r2c2") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box black r2c3") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box white r2c4") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box black r2c5") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box white r2c6") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box black r2c7") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box white r2c8") {
                        listBlackSoldier[i].style.bottom = "75%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow3() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box white r3c1") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box black r3c2") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box white r3c3") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box black r3c4") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box white r3c5") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box black r3c6") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box white r3c7") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box black r3c8") {
                    listWhiteSoldier[i].style.bottom = "62.5%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box white r3c1") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box black r3c2") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box white r3c3") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box black r3c4") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box white r3c5") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box black r3c6") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box white r3c7") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box black r3c8") {
                        listBlackSoldier[i].style.bottom = "62.5%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow4() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box black r4c1") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box white r4c2") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box black r4c3") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box white r4c4") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box black r4c5") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box white r4c6") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box black r4c7") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box white r4c8") {
                    listWhiteSoldier[i].style.bottom = "50%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;

            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box black r4c1") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box white r4c2") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box black r4c3") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box white r4c4") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box black r4c5") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box white r4c6") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box black r4c7") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box white r4c8") {
                        listBlackSoldier[i].style.bottom = "50%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow5() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box white r5c1") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box black r5c2") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box white r5c3") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box black r5c4") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box white r5c5") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box black r5c6") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box white r5c7") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box black r5c8") {
                    listWhiteSoldier[i].style.bottom = "37.5%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box white r5c1") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box black r5c2") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box white r5c3") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box black r5c4") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box white r5c5") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box black r5c6") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box white r5c7") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box black r5c8") {
                        listBlackSoldier[i].style.bottom = "37.5%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow6() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box black r6c1") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box white r6c2") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box black r6c3") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box white r6c4") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box black r6c5") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box white r6c6") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box black r6c7") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box white r6c8") {
                    listWhiteSoldier[i].style.bottom = "25%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box black r6c1") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box white r6c2") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box black r6c3") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box white r6c4") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box black r6c5") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box white r6c6") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box black r6c7") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box white r6c8") {
                        listBlackSoldier[i].style.bottom = "25%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow7() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box white r7c1") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box black r7c2") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box white r7c3") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box black r7c4") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box white r7c5") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box black r7c6") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box white r7c7") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box black r7c8") {
                    listWhiteSoldier[i].style.bottom = "12.5%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box white r7c1") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box black r7c2") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box white r7c3") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box black r7c4") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box white r7c5") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box black r7c6") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box white r7c7") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box black r7c8") {
                        listBlackSoldier[i].style.bottom = "12.5%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickToMoveRow8() {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listBlack = document.querySelectorAll(".black");
    var listWhite = document.querySelectorAll(".white");
    if (event.currentTarget.style.backgroundColor=="gray") {
        var ok = false;
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            if (listWhiteSoldier[i].style.backgroundColor=="yellow") {
                ok = true;
                if (event.currentTarget.className == "box black r8c1") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "0%";
                }
                else if (event.currentTarget.className == "box white r8c2") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "12.5%";
                }
                else if (event.currentTarget.className == "box black r8c3") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "25%";
                }
                else if (event.currentTarget.className == "box white r8c4") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "37.5%";
                }
                else if (event.currentTarget.className == "box black r8c5") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "50%";
                }
                else if (event.currentTarget.className == "box white r8c6") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "62.5%";
                }
                else if (event.currentTarget.className == "box black r8c7") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "75%";
                }
                else if (event.currentTarget.className == "box white r8c8") {
                    listWhiteSoldier[i].style.bottom = "0%";
                    listWhiteSoldier[i].style.left= "87.5%";
                }
                listWhiteSoldier[i].style.backgroundColor="";
                listWhiteSoldier[i].style.border="";
                for(var j1 = 0; j1 < listWhiteSoldier.length; j1++) {
                    listWhiteSoldier[j1].style.pointerEvents = "none";
                }
                for(var j2 = 0; j2 < listBlackSoldier.length; j2++) {
                    listBlackSoldier[j2].style.pointerEvents = "auto";
                }
                break;
            }
        }
        if (ok == false) {
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.backgroundColor=="yellow") {
                    ok = true;
                    if (event.currentTarget.className == "box black r8c1") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "0%";
                    }
                    else if (event.currentTarget.className == "box white r8c2") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "12.5%";
                    }
                    else if (event.currentTarget.className == "box black r8c3") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "25%";
                    }
                    else if (event.currentTarget.className == "box white r8c4") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "37.5%";
                    }
                    else if (event.currentTarget.className == "box black r8c5") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "50%";
                    }
                    else if (event.currentTarget.className == "box white r8c6") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "62.5%";
                    }
                    else if (event.currentTarget.className == "box black r8c7") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "75%";
                    }
                    else if (event.currentTarget.className == "box white r8c8") {
                        listBlackSoldier[i].style.bottom = "0%";
                        listBlackSoldier[i].style.left= "87.5%";
                    }
                    listBlackSoldier[i].style.backgroundColor="";
                    listBlackSoldier[i].style.border="";
                    for(var j1=0; j1 < listBlackSoldier.length; j1++) {
                        listBlackSoldier[j1].style.pointerEvents = "none";
                    }
                    for (var j2=0; j2 < listWhiteSoldier.length; j2++) {
                        listWhiteSoldier[j2].style.pointerEvents = "auto";
                    }
                    break;
                }
            }
        }
        for(var i = 0; i < listBlack.length; i++) {
            listBlack[i].style.backgroundColor="";
            listBlack[i].style.border="";
            listWhite[i].style.border="";
            listWhite[i].style.backgroundColor="";
        }
        for(var i = 0; i < listBlackSoldier.length; i++) {
            listBlackSoldier[i].style.backgroundColor="";
            listBlackSoldier[i].style.border="";
        }
        for(var i = 0; i < listWhiteSoldier.length; i++) {
            listWhiteSoldier[i].style.backgroundColor="";
            listWhiteSoldier[i].style.border="";
        }
    }
}
function handleClickWhitePawn() {
  console.log("White pawn");
  if (event.currentTarget.style.backgroundColor == "green") {
var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
var listWhite = document.querySelectorAll(".white");
var listBlack = document.querySelectorAll(".black");
for (var i = 0; i < listBlackSoldier.length; i++) {
  if (listBlackSoldier[i].style.backgroundColor == "yellow") {
    listBlackSoldier[i].style.bottom = event.currentTarget.style.bottom;
    listBlackSoldier[i].style.left = event.currentTarget.style.left;
    event.currentTarget.style.left = "-12.5%";
        event.currentTarget.style.bottom = "100%";
        event.currentTarget.style.opacity="0";
        event.currentTarget.style.visibility="hidden";
    for (var i = 0; i < listWhiteSoldier.length; i++) {
      listWhiteSoldier[i].style.pointerEvents = "auto";
    }
    for (var i = 0; i < listBlackSoldier.length; i++) {
      listBlackSoldier[i].style.pointerEvents = "none";
    }
    for (var i = 0; i < listWhite.length; i++) {
      listWhite[i].style.backgroundColor = "";
      listWhite[i].style.border = "";
    }
    for (var i = 0; i < listBlack.length; i++) {
      listBlack[i].style.backgroundColor = "";
      listBlack[i].style.border = "";
    }
    for (var i = 0; i < listBlackSoldier.length; i++) {
      listBlackSoldier[i].style.backgroundColor = "";
      listBlackSoldier[i].style.border = "";
    }
    for (var i = 0; i < listWhiteSoldier.length; i++) {
      listWhiteSoldier[i].style.backgroundColor = "";
      listWhiteSoldier[i].style.border = "";
    }
  }
}

}
else {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
  var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
  var listBlack = document.querySelectorAll(".black");
  var listWhite = document.querySelectorAll(".white");
  var listBox = document.querySelectorAll(".box");
  if (event.currentTarget.style.backgroundColor == "") {
    for(var i = 0; i < listWhiteSoldier.length; i++) {
        if (listWhiteSoldier[i]!=event.currentTarget) {
            listWhiteSoldier[i].style.pointerEvents="none";
        }
    }
    for(var i = 0; i < listBlackSoldier.length; i++) {
        listBlackSoldier[i].style.pointerEvents="none";
    }
    event.currentTarget.style.backgroundColor = "yellow";
    event.currentTarget.style.border="2px solid black";
    var currentPositionBottom = parseFloat(event.currentTarget.style.bottom);
    var currentPositionLeft = parseFloat(event.currentTarget.style.left);
    if (currentPositionBottom == 12.5) {
      if (currentPositionLeft == 0) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col1
        var checkRow6Col1 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="0%") {
                checkRow6Col1 = false;
                break;
            }
        }
        if (checkRow6Col1 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="0%") {
                    checkRow6Col1 = false;
                    break;
                }
            }
            if (checkRow6Col1 == false) {

            }
            else {
                document.querySelector(".r6c1").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c1").style.border="2px solid black";
                //check row5 col1
        var checkRow5Col1 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="0%") {
                checkRow5Col1 = false;
                break;
            }
        }
        if (checkRow5Col1 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="0%") {
                    checkRow5Col1 = false;
                    break;
                }
            }
            if (checkRow5Col1 == false) {

            }
            else {
                document.querySelector(".r5c1").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c1").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 2
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="12.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 12.5) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col2
        var checkRow6Col2 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="12.5%") {
                checkRow6Col2 = false;
                break;
            }
        }
        if (checkRow6Col2 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="12.5%") {
                    checkRow6Col2 = false;
                    break;
                }
            }
            if (checkRow6Col2 == false) {

            }
            else {
                document.querySelector(".r6c2").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c2").style.border="2px solid black";
                //check row5 col2
        var checkRow5Col2 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="12.5%") {
                checkRow5Col2 = false;
                break;
            }
        }
        if (checkRow5Col2 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="12.5%") {
                    checkRow5Col2 = false;
                    break;
                }
            }
            if (checkRow5Col2 == false) {

            }
            else {
                document.querySelector(".r5c2").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c2").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 1
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="0%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 3
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="25%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 25) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col3
        var checkRow6Col3 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="25%") {
                checkRow6Col3 = false;
                break;
            }
        }
        if (checkRow6Col3 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="25%") {
                    checkRow6Col2 = false;
                    break;
                }
            }
            if (checkRow6Col2 == false) {

            }
            else {
                document.querySelector(".r6c3").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c3").style.border="2px solid black";
                //check row5 col3
        var checkRow5Col3 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="25%") {
                checkRow5Col3 = false;
                break;
            }
        }
        if (checkRow5Col3 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="25%") {
                    checkRow5Col3 = false;
                    break;
                }
            }
            if (checkRow5Col3 == false) {

            }
            else {
                document.querySelector(".r5c3").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c3").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 2
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="12.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 4
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="37.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 37.5) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col4
        var checkRow6Col4 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="37.5%") {
                checkRow6Col4 = false;
                break;
            }
        }
        if (checkRow6Col4 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="37.5%") {
                    checkRow6Col4 = false;
                    break;
                }
            }
            if (checkRow6Col4 == false) {

            }
            else {
                document.querySelector(".r6c4").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c4").style.border="2px solid black";
                //check row5 col4
        var checkRow5Col4 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="37.5%") {
                checkRow5Col4 = false;
                break;
            }
        }
        if (checkRow5Col4 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="37.5%") {
                    checkRow5Col4 = false;
                    break;
                }
            }
            if (checkRow5Col4 == false) {

            }
            else {
                document.querySelector(".r5c4").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c4").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 3
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="25%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 5
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="50%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 50) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col5
        var checkRow6Col5 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="50%") {
                checkRow6Col5 = false;
                break;
            }
        }
        if (checkRow6Col5 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="50%") {
                    checkRow6Col5 = false;
                    break;
                }
            }
            if (checkRow6Col5 == false) {

            }
            else {
                document.querySelector(".r6c5").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c5").style.border="2px solid black";
                //check row5 col5
        var checkRow5Col5 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="50%") {
                checkRow5Col5 = false;
                break;
            }
        }
        if (checkRow5Col5 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="50%") {
                    checkRow5Col5 = false;
                    break;
                }
            }
            if (checkRow5Col5 == false) {

            }
            else {
                document.querySelector(".r5c5").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c5").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 4
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="37.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 6
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="62.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 62.5) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col6
        var checkRow6Col6 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="62.5%") {
                checkRow6Col6 = false;
                break;
            }
        }
        if (checkRow6Col6 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="62.5%") {
                    checkRow6Col6 = false;
                    break;
                }
            }
            if (checkRow6Col6 == false) {

            }
            else {
                document.querySelector(".r6c6").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c6").style.border="2px solid black";
                //check row5 col6
        var checkRow5Col6 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="62.5%") {
                checkRow5Col6 = false;
                break;
            }
        }
        if (checkRow5Col6 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="62.5%") {
                    checkRow5Col6 = false;
                    break;
                }
            }
            if (checkRow5Col6 == false) {

            }
            else {
                document.querySelector(".r5c6").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c6").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 5
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="50%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 7
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="75%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 75) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col7
        var checkRow6Col7 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="75%") {
                checkRow6Col7 = false;
                break;
            }
        }
        if (checkRow6Col7 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="75%") {
                    checkRow6Col7 = false;
                    break;
                }
            }
            if (checkRow6Col7 == false) {

            }
            else {
                document.querySelector(".r6c7").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c7").style.border="2px solid black";
                //check row5 col7
        var checkRow5Col7 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="75%") {
                checkRow5Col2 = false;
                break;
            }
        }
        if (checkRow5Col7 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="75%") {
                    checkRow5Col7 = false;
                    break;
                }
            }
            if (checkRow5Col7 == false) {

            }
            else {
                document.querySelector(".r5c7").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c7").style.border="2px solid black";
            }
        }
            }
        }
        //check row6 col 6
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="62.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
        //check row6 col 8
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="87.5%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      } else if (currentPositionLeft == 87.5) {
        var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
        //check row6 col8
        var checkRow6Col8 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="87.5%") {
                checkRow6Col8 = false;
                break;
            }
        }
        if (checkRow6Col8 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="25%" && listWhiteSoldier[i].style.left=="87.5%") {
                    checkRow6Col8 = false;
                    break;
                }
            }
            if (checkRow6Col8 == false) {

            }
            else {
                document.querySelector(".r6c8").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r6c8").style.border="2px solid black";
                //check row5 col8
        var checkRow5Col8 = true;
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="87.5%") {
                checkRow5Col8 = false;
                break;
            }
        }
        if (checkRow5Col8 == false) {

        }
        else{
            for(var i = 0; i < listWhiteSoldier.length; i++) {
                if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="87.5%") {
                    checkRow5Col8 = false;
                    break;
                }
            }
            if (checkRow5Col8 == false) {

            }
            else {
                document.querySelector(".r5c8").style.backgroundColor="gray";
                for(var x = 0; x < listBox.length; x++) {
                    if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                }
                document.querySelector(".r5c8").style.border="2px solid black";
            }
        }
            }
        }
        
        //check row6 col 7
        for(var i = 0; i < listBlackSoldier.length; i++) {
            if (listBlackSoldier[i].style.bottom == "25%" && listBlackSoldier[i].style.left=="75%") {
                listBlackSoldier[i].style.backgroundColor="green";
                listBlackSoldier[i].style.pointerEvents = "auto";
                listBlackSoldier[i].style.border="2px solid black";
                break;
            }
        }
      }
    }
    if (currentPositionBottom == 25) {
        if (currentPositionLeft == 0) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col1
            var checkRow5Col1 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="0%") {
                    checkRow5Col1 = false;
                    break;
                }
            }
            if (checkRow5Col1 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="0%") {
                        checkRow5Col1 = false;
                        break;
                    }
                }
                if (checkRow5Col1 == false) {
    
                }
                else {
                    document.querySelector(".r5c1").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c1").style.border="2px solid black";
                }
            }
            //check row4 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 12.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col2
            var checkRow5Col2 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    checkRow5Col2 = false;
                    break;
                }
            }
            if (checkRow5Col2 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="12.5%") {
                        checkRow5Col2 = false;
                        break;
                    }
                }
                if (checkRow5Col2 == false) {
    
                }
                else {
                    document.querySelector(".r5c2").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c2").style.border="2px solid black";
                }
            }
            //check row5 col 1
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="0%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 25) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col3
            var checkRow5Col3 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="25%") {
                    checkRow5Col3 = false;
                    break;
                }
            }
            if (checkRow5Col3 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="25%") {
                        checkRow5Col3 = false;
                        break;
                    }
                }
                if (checkRow5Col3 == false) {
    
                }
                else {
                    document.querySelector(".r5c3").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c3").style.border="2px solid black";
                }
            }
            //check row5 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 37.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col4
            var checkRow5Col4 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    checkRow5Col4 = false;
                    break;
                }
            }
            if (checkRow5Col4 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="37.5%") {
                        checkRow5Col4 = false;
                        break;
                    }
                }
                if (checkRow5Col4 == false) {
    
                }
                else {
                    document.querySelector(".r5c4").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c4").style.border="2px solid black";
                }
            }
            //check row5 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 50) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col5
            var checkRow5Col5 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="50%") {
                    checkRow5Col5 = false;
                    break;
                }
            }
            if (checkRow5Col5 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="50%") {
                        checkRow5Col5 = false;
                        break;
                    }
                }
                if (checkRow5Col5 == false) {
    
                }
                else {
                    document.querySelector(".r5c5").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c5").style.border="2px solid black";
                }
            }
            //check row5 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 62.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col6
            var checkRow5Col6 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    checkRow5Col6 = false;
                    break;
                }
            }
            if (checkRow5Col6 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="62.5%") {
                        checkRow5Col6 = false;
                        break;
                    }
                }
                if (checkRow5Col6 == false) {
    
                }
                else {
                    document.querySelector(".r5c6").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c6").style.border="2px solid black";
                }
            }
            //check row5 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 75) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col7
            var checkRow5Col7 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="75%") {
                    checkRow5Col7 = false;
                    break;
                }
            }
            if (checkRow5Col7 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="75%") {
                        checkRow5Col7 = false;
                        break;
                    }
                }
                if (checkRow5Col7 == false) {
    
                }
                else {
                    document.querySelector(".r5c7").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c7").style.border="2px solid black";
                }
            }
            //check row5 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row5 col 8
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 87.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row5 col8
            var checkRow5Col8 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "37.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    checkRow5Col8 = false;
                    break;
                }
            }
            if (checkRow5Col8 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="37.5%" && listWhiteSoldier[i].style.left=="87.5%") {
                        checkRow5Col8 = false;
                        break;
                    }
                }
                if (checkRow5Col8 == false) {
    
                }
                else {
                    document.querySelector(".r5c8").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r5c8").style.border="2px solid black";
                }
            }
            //check row5 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          }
    }
    if (currentPositionBottom == 37.5) {
        if (currentPositionLeft == 0) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col1
            var checkRow4Col1 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="0%") {
                    checkRow4Col1 = false;
                    break;
                }
            }
            if (checkRow4Col1 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="0%") {
                        checkRow4Col1 = false;
                        break;
                    }
                }
                if (checkRow4Col1 == false) {
    
                }
                else {
                    document.querySelector(".r4c1").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c1").style.border="2px solid black";
                }
            }
            //check row4 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 12.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col2
            var checkRow4Col2 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="12.5%") {
                    checkRow4Col2 = false;
                    break;
                }
            }
            if (checkRow4Col2 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="12.5%") {
                        checkRow4Col2 = false;
                        break;
                    }
                }
                if (checkRow4Col2 == false) {
    
                }
                else {
                    document.querySelector(".r4c2").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c2").style.border="2px solid black";
                }
            }
            //check row4 col 1
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="0%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 25) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col3
            var checkRow4Col3 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="25%") {
                    checkRow4Col3 = false;
                    break;
                }
            }
            if (checkRow4Col3 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="25%") {
                        checkRow4Col3 = false;
                        break;
                    }
                }
                if (checkRow4Col3 == false) {
    
                }
                else {
                    document.querySelector(".r4c3").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c3").style.border="2px solid black";
                }
            }
            //check row4 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 37.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col4
            var checkRow4Col4 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="37.5%") {
                    checkRow4Col4 = false;
                    break;
                }
            }
            if (checkRow4Col4 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="37.5%") {
                        checkRow4Col4 = false;
                        break;
                    }
                }
                if (checkRow4Col4 == false) {
    
                }
                else {
                    document.querySelector(".r4c4").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c4").style.border="2px solid black";
                }
            }
            //check row4 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 50) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col5
            var checkRow4Col5 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="50%") {
                    checkRow4Col5 = false;
                    break;
                }
            }
            if (checkRow4Col5 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="50%") {
                        checkRow4Col5 = false;
                        break;
                    }
                }
                if (checkRow4Col5 == false) {
    
                }
                else {
                    document.querySelector(".r4c5").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c5").style.border="2px solid black";
                }
            }
            //check row4 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 62.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col6
            var checkRow4Col6 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="62.5%") {
                    checkRow4Col6 = false;
                    break;
                }
            }
            if (checkRow4Col6 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="62.5%") {
                        checkRow4Col6 = false;
                        break;
                    }
                }
                if (checkRow4Col6 == false) {
    
                }
                else {
                    document.querySelector(".r4c6").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c6").style.border="2px solid black";
                }
            }
            //check row4 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 75) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col7
            var checkRow4Col7 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="75%") {
                    checkRow4Col7 = false;
                    break;
                }
            }
            if (checkRow4Col7 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="75%") {
                        checkRow4Col7 = false;
                        break;
                    }
                }
                if (checkRow4Col7 == false) {
    
                }
                else {
                    document.querySelector(".r4c7").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c7").style.border="2px solid black";
                }
            }
            //check row4 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 8
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="87.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 87.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row4 col8
            var checkRow4Col8 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="87.5%") {
                    checkRow4Col8 = false;
                    break;
                }
            }
            if (checkRow4Col8 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="50%" && listWhiteSoldier[i].style.left=="87.5%") {
                        checkRow4Col8 = false;
                        break;
                    }
                }
                if (checkRow4Col8 == false) {
    
                }
                else {
                    document.querySelector(".r4c8").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r4c8").style.border="2px solid black";
                }
            }
            //check row4 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "50%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          }
    }
    if (currentPositionBottom == 50) {
        if (currentPositionLeft == 0) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col1
            var checkRow3Col1 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="0%") {
                    checkRow3Col1 = false;
                    break;
                }
            }
            if (checkRow3Col1 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="0%") {
                        checkRow3Col1 = false;
                        break;
                    }
                }
                if (checkRow3Col1 == false) {
    
                }
                else {
                    document.querySelector(".r3c1").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c1").style.border="2px solid black";
                }
            }
            //check row3 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 12.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col2
            var checkRow3Col2 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    checkRow3Col2 = false;
                    break;
                }
            }
            if (checkRow3Col2 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="12.5%") {
                        checkRow3Col2 = false;
                        break;
                    }
                }
                if (checkRow3Col2 == false) {
    
                }
                else {
                    document.querySelector(".r3c2").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c2").style.border="2px solid black";
                }
            }
            //check row3 col 1
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="0%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 25) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col3
            var checkRow3Col3 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="25%") {
                    checkRow3Col3 = false;
                    break;
                }
            }
            if (checkRow3Col3 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="25%") {
                        checkRow3Col3 = false;
                        break;
                    }
                }
                if (checkRow3Col3 == false) {
    
                }
                else {
                    document.querySelector(".r3c3").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c3").style.border="2px solid black";
                }
            }
            //check row3 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row4 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 37.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col4
            var checkRow3Col4 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    checkRow3Col4 = false;
                    break;
                }
            }
            if (checkRow3Col4 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="37.5%") {
                        checkRow3Col4 = false;
                        break;
                    }
                }
                if (checkRow3Col4 == false) {
    
                }
                else {
                    document.querySelector(".r3c4").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c4").style.border="2px solid black";
                }
            }
            //check row3 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row3 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 50) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col5
            var checkRow3Col5 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="50%") {
                    checkRow3Col5 = false;
                    break;
                }
            }
            if (checkRow3Col5 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="50%") {
                        checkRow3Col5 = false;
                        break;
                    }
                }
                if (checkRow3Col5 == false) {
    
                }
                else {
                    document.querySelector(".r3c5").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c5").style.border="2px solid black";
                }
            }
            //check row3 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row3 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 62.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col6
            var checkRow3Col6 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    checkRow3Col6 = false;
                    break;
                }
            }
            if (checkRow3Col6 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="62.5%") {
                        checkRow3Col6 = false;
                        break;
                    }
                }
                if (checkRow3Col6 == false) {
    
                }
                else {
                    document.querySelector(".r3c6").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c6").style.border="2px solid black";
                }
            }
            //check row3 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row3 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 75) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col7
            var checkRow3Col7 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="75%") {
                    checkRow3Col7 = false;
                    break;
                }
            }
            if (checkRow3Col7 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="75%") {
                        checkRow3Col7 = false;
                        break;
                    }
                }
                if (checkRow3Col7 == false) {
    
                }
                else {
                    document.querySelector(".r3c7").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c7").style.border="2px solid black";
                }
            }
            //check row3 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row3 col 8
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 87.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row3 col8
            var checkRow3Col8 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    checkRow3Col8 = false;
                    break;
                }
            }
            if (checkRow3Col8 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="62.5%" && listWhiteSoldier[i].style.left=="87.5%") {
                        checkRow3Col8 = false;
                        break;
                    }
                }
                if (checkRow3Col8 == false) {
    
                }
                else {
                    document.querySelector(".r3c8").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r3c8").style.border="2px solid black";
                }
            }
            //check row3 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "62.5%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          }
    }
    if (currentPositionBottom == 62.5) {
        if (currentPositionLeft == 0) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col1
            var checkRow2Col1 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="0%") {
                    checkRow2Col1 = false;
                    break;
                }
            }
            if (checkRow2Col1 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="0%") {
                        checkRow2Col1 = false;
                        break;
                    }
                }
                if (checkRow2Col1 == false) {
    
                }
                else {
                    document.querySelector(".r2c1").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c1").style.border="2px solid black";
                }
            }
            //check row2 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 12.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col2
            var checkRow2Col2 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="12.5%") {
                    checkRow2Col2 = false;
                    break;
                }
            }
            if (checkRow2Col2 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="12.5%") {
                        checkRow2Col2 = false;
                        break;
                    }
                }
                if (checkRow2Col2 == false) {
    
                }
                else {
                    document.querySelector(".r2c2").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c2").style.border="2px solid black";
                }
            }
            //check row2 col 1
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="0%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 25) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col3
            var checkRow2Col3 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="25%") {
                    checkRow2Col3 = false;
                    break;
                }
            }
            if (checkRow2Col3 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="25%") {
                        checkRow2Col3 = false;
                        break;
                    }
                }
                if (checkRow2Col3 == false) {
    
                }
                else {
                    document.querySelector(".r2c3").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c3").style.border="2px solid black";
                }
            }
            //check row2 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 37.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col4
            var checkRow2Col4 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="37.5%") {
                    checkRow2Col4 = false;
                    break;
                }
            }
            if (checkRow2Col4 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="37.5%") {
                        checkRow2Col4 = false;
                        break;
                    }
                }
                if (checkRow2Col4 == false) {
    
                }
                else {
                    document.querySelector(".r2c4").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c4").style.border="2px solid black";
                }
            }
            //check row2 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 50) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col5
            var checkRow2Col5 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="50%") {
                    checkRow2Col5 = false;
                    break;
                }
            }
            if (checkRow2Col5 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="50%") {
                        checkRow2Col5 = false;
                        break;
                    }
                }
                if (checkRow2Col5 == false) {
    
                }
                else {
                    document.querySelector(".r2c5").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c5").style.border="2px solid black";
                }
            }
            //check row2 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 62.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col6
            var checkRow2Col6 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="62.5%") {
                    checkRow2Col6 = false;
                    break;
                }
            }
            if (checkRow2Col6 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="62.5%") {
                        checkRow2Col6 = false;
                        break;
                    }
                }
                if (checkRow2Col6 == false) {
    
                }
                else {
                    document.querySelector(".r2c6").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c6").style.border="2px solid black";
                }
            }
            //check row2 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 75) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col7
            var checkRow2Col7 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="75%") {
                    checkRow2Col7 = false;
                    break;
                }
            }
            if (checkRow2Col7 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="75%") {
                        checkRow2Col7 = false;
                        break;
                    }
                }
                if (checkRow2Col7 == false) {
    
                }
                else {
                    document.querySelector(".r2c7").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c7").style.border="2px solid black";
                }
            }
            //check row2 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row2 col 8
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="87.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 87.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row2 col8
            var checkRow2Col8 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="87.5%") {
                    checkRow2Col8 = false;
                    break;
                }
            }
            if (checkRow2Col8 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="75%" && listWhiteSoldier[i].style.left=="87.5%") {
                        checkRow2Col8 = false;
                        break;
                    }
                }
                if (checkRow2Col8 == false) {
    
                }
                else {
                    document.querySelector(".r2c8").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r2c8").style.border="2px solid black";
                }
            }
            //check row2 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "75%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          }
    }
    if (currentPositionBottom == 75) {
        if (currentPositionLeft == 0) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col1
            var checkRow1Col1 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="0%") {
                    checkRow1Col1 = false;
                    break;
                }
            }
            if (checkRow1Col1 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="0%") {
                        checkRow1Col1 = false;
                        break;
                    }
                }
                if (checkRow1Col1 == false) {
    
                }
                else {
                    document.querySelector(".r1c1").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c1").style.border="2px solid black";
                }
            }
            //check row1 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 12.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col2
            var checkRow1Col2 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    checkRow1Col2 = false;
                    break;
                }
            }
            if (checkRow1Col2 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="12.5%") {
                        checkRow1Col2 = false;
                        break;
                    }
                }
                if (checkRow1Col2 == false) {
    
                }
                else {
                    document.querySelector(".r1c2").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c2").style.border="2px solid black";
                }
            }
            //check row1 col 1
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="0%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 25) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col3
            var checkRow1Col3 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="25%") {
                    checkRow1Col3 = false;
                    break;
                }
            }
            if (checkRow1Col3 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="25%") {
                        checkRow1Col3 = false;
                        break;
                    }
                }
                if (checkRow1Col3 == false) {
    
                }
                else {
                    document.querySelector(".r1c3").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c3").style.border="2px solid black";
                }
            }
            //check row1 col 2
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="12.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 37.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col4
            var checkRow1Col4 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    checkRow1Col4 = false;
                    break;
                }
            }
            if (checkRow1Col4 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="37.5%") {
                        checkRow1Col4 = false;
                        break;
                    }
                }
                if (checkRow1Col4 == false) {
    
                }
                else {
                    document.querySelector(".r1c4").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c4").style.border="2px solid black";
                }
            }
            //check row1 col 3
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="25%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 50) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col5
            var checkRow1Col5 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="50%") {
                    checkRow1Col5 = false;
                    break;
                }
            }
            if (checkRow1Col5 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="50%") {
                        checkRow1Col5 = false;
                        break;
                    }
                }
                if (checkRow1Col5 == false) {
    
                }
                else {
                    document.querySelector(".r1c5").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c5").style.border="2px solid black";
                }
            }
            //check row1 col 4
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="37.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 62.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col6
            var checkRow1Col6 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    checkRow1Col6 = false;
                    break;
                }
            }
            if (checkRow1Col6 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="62.5%") {
                        checkRow1Col6 = false;
                        break;
                    }
                }
                if (checkRow1Col6 == false) {
    
                }
                else {
                    document.querySelector(".r1c6").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c6").style.border="2px solid black";
                }
            }
            //check row1 col 5
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="50%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 75) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col7
            var checkRow1Col7 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="75%") {
                    checkRow1Col7 = false;
                    break;
                }
            }
            if (checkRow1Col7 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="75%") {
                        checkRow1Col7 = false;
                        break;
                    }
                }
                if (checkRow1Col7 == false) {
    
                }
                else {
                    document.querySelector(".r1c7").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c7").style.border="2px solid black";
                }
            }
            //check row1 col 6
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="62.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
            //check row1 col 8
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          } else if (currentPositionLeft == 87.5) {
            var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
            //check row1 col8
            var checkRow1Col8 = true;
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="87.5%") {
                    checkRow1Col8 = false;
                    break;
                }
            }
            if (checkRow1Col8 == false) {
    
            }
            else{
                for(var i = 0; i < listWhiteSoldier.length; i++) {
                    if (listWhiteSoldier[i].style.bottom=="87.5%" && listWhiteSoldier[i].style.left=="87.5%") {
                        checkRow1Col8 = false;
                        break;
                    }
                }
                if (checkRow1Col8 == false) {
    
                }
                else {
                    document.querySelector(".r1c8").style.backgroundColor="gray";
                    for(var x = 0; x < listBox.length; x++) {
                        if (listBox[x].style.backgroundColor == "gray") listBox[x].style.pointerEvents = "auto";
                    }
                    document.querySelector(".r1c8").style.border="2px solid black";
                }
            }
            //check row1 col 7
            for(var i = 0; i < listBlackSoldier.length; i++) {
                if (listBlackSoldier[i].style.bottom == "87.5%" && listBlackSoldier[i].style.left=="75%") {
                    listBlackSoldier[i].style.backgroundColor="green";
                    listBlackSoldier[i].style.pointerEvents = "auto";
                    listBlackSoldier[i].style.border="2px solid black";
                    break;
                }
            }
          }
    }
  }
  else{
    for(var i = 0; i < listWhiteSoldier.length; i++) {
        if (listWhiteSoldier[i]!=event.currentTarget) {
            listWhiteSoldier[i].style.pointerEvents="auto";
        }
    }
    for (var i = 0; i < listBlackSoldier.length; i++) {
        listBlackSoldier[i].style.pointerEvents="none";
    }
    for(var i = 0; i < listBlack.length; i++) {
        listBlack[i].style.backgroundColor="";
        listBlack[i].style.border="";
    }
    for (var i = 0; i < listWhite.length; i++) {
        listWhite[i].style.border="";
        listWhite[i].style.backgroundColor="";
    }
    for(var i = 0; i < listBlackSoldier.length; i++) {
        listBlackSoldier[i].style.backgroundColor="";
        listBlackSoldier[i].style.border="";
    }
    for(var i = 0; i < listWhiteSoldier.length; i++) {
        listWhiteSoldier[i].style.backgroundColor="";
        listWhiteSoldier[i].style.border="";
    }
    event.currentTarget.style.backgroundColor = "";
    event.currentTarget.style.border = "";
  }
}
}
