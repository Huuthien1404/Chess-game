function handleClickWhiteRook() {
  console.log("White rook");
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
      for (var i = 12.5; i <= 87.5; i += 12.5) {
        if (currentPositionByLeft >= 0 && currentPositionByLeft + i <= 87.5 && currentPositionByLeft + i >= 0) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.left) == currentPositionByLeft + i &&
              parseFloat(listBox[j].style.bottom) == currentPositionByBottom
            ) {
              for (var k = 0; k < listBlackSoldier.length; k++) {
                if (
                  parseFloat(listBlackSoldier[k].style.left) ==
                  parseFloat(listBox[j].style.left) &&
                  parseFloat(listBlackSoldier[k].style.bottom) ==
                  parseFloat(listBox[j].style.bottom)
                ) {
                  checkBlackAppear = true;
                  listBlackSoldier[k].style.backgroundColor = "green";
                  listBlackSoldier[k].style.pointerEvents = "auto";
                  listBlackSoldier[k].style.border = "2px solid black";
                  break;
                }
              }
              if (checkBlackAppear == true) {
                break;
              } else {
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
                if (checkWhiteAppear == true) {
                  break;
                } else {
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
      }
      for (var i = 12.5; i <= 87.5; i += 12.5) {
        if (
          currentPositionByBottom >= 0 &&
          currentPositionByBottom + i <= 87.5 && currentPositionByBottom + i >= 0
        ) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom + i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listBlackSoldier.length; k++) {
                if (
                  parseFloat(listBlackSoldier[k].style.bottom) ==
                    currentPositionByBottom + i &&
                  parseFloat(listBlackSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left)
                ) {
                  checkBlackAppear = true;
                  listBlackSoldier[k].style.backgroundColor = "green";
                  listBlackSoldier[k].style.pointerEvents = "auto";
                  listBlackSoldier[k].style.border = "2px solid black";
                  break;
                }
              }
              if (checkBlackAppear == true) {
                break;
              } else {
                for (var k = 0; k < listWhiteSoldier.length; k++) {
                  if (
                    parseFloat(listWhiteSoldier[k].style.bottom) ==
                      currentPositionByBottom + i &&
                    parseFloat(listWhiteSoldier[k].style.left) ==
                      parseFloat(listBox[j].style.left)
                  ) {
                    checkWhiteAppear = true;
                    break;
                  }
                }
                if (checkWhiteAppear == true) {
                  break;
                } else {
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
      }
      for (var i = 12.5; i <= 87.5; i += 12.5) {
        if (
          currentPositionByBottom >= 0 &&
          currentPositionByBottom - i <= 87.5 && currentPositionByBottom - i >= 0
        ) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.bottom) ==
                currentPositionByBottom - i &&
              parseFloat(listBox[j].style.left) == currentPositionByLeft
            ) {
              for (var k = 0; k < listBlackSoldier.length; k++) {
                if (
                  parseFloat(listBlackSoldier[k].style.bottom) ==
                  parseFloat(listBox[j].style.bottom) &&
                  parseFloat(listBlackSoldier[k].style.left) ==
                  parseFloat(listBox[j].style.left)
                ) {
                  checkBlackAppear = true;
                  console.log(listBlackSoldier[k]);
                  listBlackSoldier[k].style.backgroundColor = "green";
                  listBlackSoldier[k].style.pointerEvents = "auto";
                  listBlackSoldier[k].style.border = "2px solid black";
                  break;
                }
              }
              if (checkBlackAppear == true) {
                break;
              } else {
                for (var k = 0; k < listWhiteSoldier.length; k++) {
                  if (
                    parseFloat(listWhiteSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom) &&
                    parseFloat(listWhiteSoldier[k].style.left) ==
                    parseFloat(listBox[j].style.left)
                  ) {
                    checkWhiteAppear = true;
                    break;
                  }
                }
                if (checkWhiteAppear == true) {
                  break;
                } else {
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
      }
      for (var i = 12.5; i <= 87.5; i += 12.5) {
        if (currentPositionByLeft >= 0 && currentPositionByLeft - i <= 87.5 && currentPositionByLeft - i >= 0) {
          var checkBlackAppear = false;
          var checkWhiteAppear = false;
          for (var j = 0; j < listBox.length; j++) {
            if (
              parseFloat(listBox[j].style.left) == currentPositionByLeft - i &&
              parseFloat(listBox[j].style.bottom) == currentPositionByBottom
            ) {
              for (var k = 0; k < listBlackSoldier.length; k++) {
                if (
                  parseFloat(listBlackSoldier[k].style.left) ==
                    currentPositionByLeft - i &&
                  parseFloat(listBlackSoldier[k].style.bottom) ==
                    parseFloat(listBox[j].style.bottom)
                ) {
                  checkBlackAppear = true;
                  listBlackSoldier[k].style.backgroundColor = "green";
                  listBlackSoldier[k].style.pointerEvents = "auto";
                  listBlackSoldier[k].style.border = "2px solid black";
                  break;
                }
              }
              if (checkBlackAppear == true) {
                break;
              } else {
                for (var k = 0; k < listWhiteSoldier.length; k++) {
                  if (
                    parseFloat(listWhiteSoldier[k].style.left) ==
                      currentPositionByLeft - i &&
                    parseFloat(listWhiteSoldier[k].style.bottom) ==
                      parseFloat(listBox[j].style.bottom)
                  ) {
                    checkWhiteAppear = true;
                    break;
                  }
                }
                if (checkWhiteAppear == true) {
                  break;
                } else {
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
