function handleClickWhiteKing() {
  console.log("White king");
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
        alert("Black win");
        window.location.reload();
      }
    }
  } else {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listWhite = document.querySelectorAll(".white");
    var listBlack = document.querySelectorAll(".black");
    var listBox = document.querySelectorAll(".box");
    if (event.currentTarget.style.backgroundColor == "") {
      event.currentTarget.style.backgroundColor = "yellow";
      event.currentTarget.style.border = "2px solid black";
      for (var i = 0; i < listWhiteSoldier.length; i++) {
        if (listWhiteSoldier[i] != event.currentTarget) {
          listWhiteSoldier[i].style.pointerEvents = "none";
        }
      }
      for (var i = 0; i < listBlackSoldier.length; i++) {
        listBlackSoldier[i].style.pointerEvents = "none";
      }
      var currentPositionByLeft = parseFloat(event.currentTarget.style.left);
      var currentPositionByBottom = parseFloat(
        event.currentTarget.style.bottom
      );
      if (
        currentPositionByBottom >= 0 &&
        currentPositionByBottom + 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom + 12.5 &&
            parseFloat(listBox[i].style.left) == currentPositionByLeft
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (
        currentPositionByBottom >= 0 &&
        currentPositionByBottom - 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom - 12.5 &&
            parseFloat(listBox[i].style.left) == currentPositionByLeft
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (currentPositionByLeft >= 0 && currentPositionByLeft + 12.5 <= 87.5) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft + 12.5 &&
            parseFloat(listBox[i].style.bottom) == currentPositionByBottom
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (currentPositionByLeft >= 0 && currentPositionByLeft - 12.5 <= 87.5) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft - 12.5 &&
            parseFloat(listBox[i].style.bottom) == currentPositionByBottom
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (
        currentPositionByLeft >= 0 &&
        currentPositionByLeft + 12.5 <= 87.5 &&
        currentPositionByBottom >= 0 &&
        currentPositionByBottom + 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft + 12.5 &&
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom + 12.5
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (
        currentPositionByLeft >= 0 &&
        currentPositionByLeft - 12.5 <= 87.5 &&
        currentPositionByBottom >= 0 &&
        currentPositionByBottom - 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft - 12.5 &&
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom - 12.5
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (
        currentPositionByLeft >= 0 &&
        currentPositionByLeft + 12.5 <= 87.5 &&
        currentPositionByBottom >= 0 &&
        currentPositionByBottom - 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft + 12.5 &&
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom - 12.5
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
      if (
        currentPositionByLeft >= 0 &&
        currentPositionByLeft - 12.5 <= 87.5 &&
        currentPositionByBottom >= 0 &&
        currentPositionByBottom + 12.5 <= 87.5
      ) {
        for (var i = 0; i < listBox.length; i++) {
          if (
            parseFloat(listBox[i].style.left) == currentPositionByLeft - 12.5 &&
            parseFloat(listBox[i].style.bottom) ==
              currentPositionByBottom + 12.5
          ) {
            var checkBlackAppear = false;
            var checkWhiteAppear = false;
            for (var j = 0; j < listBlackSoldier.length; j++) {
              if (
                parseFloat(listBlackSoldier[j].style.bottom) ==
                  parseFloat(listBox[i].style.bottom) &&
                parseFloat(listBlackSoldier[j].style.left) ==
                  parseFloat(listBox[i].style.left)
              ) {
                checkBlackAppear = true;
                listBlackSoldier[j].style.backgroundColor = "green";
                listBlackSoldier[j].style.pointerEvents = "auto";
                listBlackSoldier[j].style.border = "2px solid black";
                break;
              }
            }
            if (checkBlackAppear == true) {
              break;
            } else {
              for (var j = 0; j < listWhiteSoldier.length; j++) {
                if (
                  parseFloat(listWhiteSoldier[j].style.bottom) ==
                    parseFloat(listBox[i].style.bottom) &&
                  parseFloat(listWhiteSoldier[j].style.left) ==
                    parseFloat(listBox[i].style.left)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) {
                break;
              } else {
                listBox[i].style.backgroundColor = "gray";
                listBox[i].style.border = "2px solid black";
                break;
              }
            }
          }
        }
      }
    } else {
      event.currentTarget.style.backgroundColor = "";
      event.currentTarget.style.border = "";
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
