function handleClickBlackPawn() {
  console.log("Black pawn");
  if (event.currentTarget.style.backgroundColor == "green") {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listWhite = document.querySelectorAll(".white");
    var listBlack = document.querySelectorAll(".black");
    for (var i = 0; i < listWhiteSoldier.length; i++) {
      if (listWhiteSoldier[i].style.backgroundColor == "yellow") {
        listWhiteSoldier[i].style.bottom = event.currentTarget.style.bottom;
        listWhiteSoldier[i].style.left = event.currentTarget.style.left;
        event.currentTarget.style.left = "-12.5%";
        event.currentTarget.style.bottom = "100%";
        event.currentTarget.style.opacity="0";
        event.currentTarget.style.visibility="hidden";
        for (var i = 0; i < listBlackSoldier.length; i++) {
          listBlackSoldier[i].style.pointerEvents = "auto";
        }
        for (var i = 0; i < listWhiteSoldier.length; i++) {
          listWhiteSoldier[i].style.pointerEvents = "none";
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
  } else {
    var listWhiteSoldier = document.querySelectorAll(".WhiteSoldier");
    var listBlackSoldier = document.querySelectorAll(".BlackSoldier");
    var listWhite = document.querySelectorAll(".white");
    var listBlack = document.querySelectorAll(".black");
    var listBox = document.querySelectorAll(".box");
    if (event.currentTarget.style.backgroundColor == "") {
      event.currentTarget.style.backgroundColor = "yellow";
      event.currentTarget.style.border = "2px solid black";
      for (var i = 0; i < listBlackSoldier.length; i++) {
        if (listBlackSoldier[i] != event.currentTarget) {
          listBlackSoldier[i].style.pointerEvents = "none";
        }
      }
      for (var i = 0; i < listWhiteSoldier.length; i++) {
        listWhiteSoldier[i].style.pointerEvents = "none";
      }
      var currentPositionByLeft = parseFloat(event.currentTarget.style.left);
      var currentPositionByBottom = parseFloat(
        event.currentTarget.style.bottom
      );
      if (currentPositionByBottom == 75) {
        for (var i = 12.5; i <= 25; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 62.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 62.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
      if (currentPositionByBottom == 62.5) {
        for (var i = 12.5; i <= 12.5; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 50
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 50
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
      if (currentPositionByBottom == 50) {
        for (var i = 12.5; i <= 12.5; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 37.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 37.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
      if (currentPositionByBottom == 37.5) {
        for (var i = 12.5; i <= 12.5; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 25
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 25
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
      if (currentPositionByBottom == 25) {
        for (var i = 12.5; i <= 12.5; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 12.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 12.5
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
      if (currentPositionByBottom == 12.5) {
        for (var i = 12.5; i <= 12.5; i += 12.5) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listWhiteSoldier.length; k++) {
                if (
                  parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left) &&
                  parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkWhiteAppear = true;
                  break;
                }
              }
              if (checkWhiteAppear == true) break;
              else {
                for (var k = 0; k < listBlackSoldier.length; k++) {
                  if (
                    parseFloat(listBlackSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left) &&
                    parseFloat(listBlackSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkBlackAppear = true;
                    break;
                  }
                }
                if (checkBlackAppear == true) break;
                else {
                  listBox[j].style.backgroundColor = "gray";
                  listBox[j].style.border = "2px solid black";
                  break;
                }
              }
            }
          }
          if (checkBlackAppear == true || checkWhiteAppear == true) {
            break;
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft + 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft + 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 0
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
        if (
          currentPositionByLeft >= 0 &&
          currentPositionByLeft - 12.5 <= 87.5
        ) {
          for (var i = 0; i < listWhiteSoldier.length; i++) {
            if (
              parseFloat(listWhiteSoldier[i].style.left) ==
                currentPositionByLeft - 12.5 &&
              parseFloat(listWhiteSoldier[i].style.bottom) == 0
            ) {
              listWhiteSoldier[i].style.backgroundColor = "green";
              listWhiteSoldier[i].style.pointerEvents = "auto";
              listWhiteSoldier[i].style.border = "2px solid black";
              break;
            }
          }
        }
      }
    } else {
      event.currentTarget.style.backgroundColor = "";
      event.currentTarget.style.border = "";
      for (var i = 0; i < listBlackSoldier.length; i++) {
        listBlackSoldier[i].style.pointerEvents = "auto";
      }
      for (var i = 0; i < listWhiteSoldier.length; i++) {
        listWhiteSoldier[i].style.pointerEvents = "none";
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
