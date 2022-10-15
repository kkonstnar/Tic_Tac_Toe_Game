window.onload = function() {
    var xArray = [[],[],[],[],[],[],[],[]];
    var oArray = [[],[],[],[],[],[],[],[]];
    var id = 0;
    var x = true; //used to alternate X and O insertions
    var status = document.getElementById("status");
    var gameBoard = document.getElementById("board");
    var boardList = gameBoard.querySelectorAll("div");
    var button = document.querySelector("button");


    boardList.forEach( element => {
        element.setAttribute("class", "square");
        element.setAttribute("id", id);
        id++; //ensures each div has a unique ID
        element.addEventListener( "click", clicked =>{

            if (x && !element.classList.contains("X") && !element.classList.contains("O")) {
            //prevents boxes already containing a value from being updated
                element.textContent = "X";
                element.classList.add("X");

                var num = element.getAttribute("id"); //gets id number for selected div (string)

                // adds the ID of the divs marked for X or O into the xArray elements

                if (parseInt(num) == 0 || parseInt(num) == 1 || parseInt(num) == 2){
                    xArray[0].push(parseInt(num));

                } if (parseInt(num) == 3 || parseInt(num) == 4 || parseInt(num) == 5) {
                    xArray[1].push(parseInt(num));

                } if (parseInt(num) == 6 || parseInt(num) == 7 || parseInt(num) == 8) {
                    xArray[2].push(parseInt(num));

                } if (parseInt(num) == 0 || parseInt(num) == 3 || parseInt(num) == 6) {
                    xArray[3].push(parseInt(num));

                } if (parseInt(num) == 1 || parseInt(num) == 4 || parseInt(num) == 7) {
                    xArray[4].push(parseInt(num));

                } if (parseInt(num) == 2 || parseInt(num) == 5 || parseInt(num) == 8) {
                    xArray[5].push(parseInt(num));

                } if (parseInt(num) == 0 || parseInt(num) == 4 || parseInt(num) == 8) {
                    xArray[6].push(parseInt(num));

                } if (parseInt(num) == 2 || parseInt(num) == 4 || parseInt(num) == 6) {
                    xArray[7].push(parseInt(num));

                }

                x = false; //allows O to be the next player
            } else if (!x && !element.classList.contains("X") && !element.classList.contains("O")) {
            //prevents boxes already containing a value from being updated

                element.textContent = "O";
                element.classList.add("O");

                var num = element.getAttribute("id"); //gets id number for selected div (string)

                // adds the ID of the divs marked for X or O into the oArray elements

                if (parseInt(num) == 0 || parseInt(num) == 1 || parseInt(num) == 2){
                    oArray[0].push(parseInt(num));

                } if (parseInt(num) == 3 || parseInt(num) == 4 || parseInt(num) == 5) {
                    oArray[1].push(parseInt(num));

                } if (parseInt(num) == 6 || parseInt(num) == 7 || parseInt(num) == 8) {
                    oArray[2].push(parseInt(num));

                } if (parseInt(num) == 0 || parseInt(num) == 3 || parseInt(num) == 6) {
                    oArray[3].push(parseInt(num));

                } if (parseInt(num) == 1 || parseInt(num) == 4 || parseInt(num) == 7) {
                    oArray[4].push(parseInt(num));

                } if (parseInt(num) == 2 || parseInt(num) == 5 || parseInt(num) == 8) {
                    oArray[5].push(parseInt(num));

                } if (parseInt(num) == 0 || parseInt(num) == 4 || parseInt(num) == 8) {
                    oArray[6].push(parseInt(num));

                } if (parseInt(num) == 2 || parseInt(num) == 4 || parseInt(num) == 6) {
                    oArray[7].push(parseInt(num));

                }

                x = true; //allows X to be the next player

            }

            //checks if X won
            xArray.forEach( element => {
                if (element.length == 3) {
                    status.textContent = "Congratulations! X is the Winner!";
                    status.classList.add("you-won");
                    oArray = [[],[],[],[],[],[],[],[]]; //prevents winner from changing after one was declared
               }
            } )

            //checks if O won
            oArray.forEach( element => {
                if (element.length == 3) {
                    status.textContent = "Congratulations! O is the Winner!";
                    status.classList.add("you-won");
                    xArray = [[],[],[],[],[],[],[],[]]; //prevents winner from changing after one was declared
               }
            } )

            //the first player's array to achieve any of the following combinations wins:
            //[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

        })
        //adds hover effect to boxes
        element.onmouseover = mouseOn => {
            element.classList.add("hover");
        }
        element.onmouseout = mouseOn => {
            element.classList.remove("hover");
        }

    })

    //resets all variables and classes to normal
    button.addEventListener("click", restart => {
        boardList.forEach( element => {
            element.textContent = "";
            element.classList.remove("X");
            element.classList.remove("O");
            xArray = [[],[],[],[],[],[],[],[]];
            oArray = [[],[],[],[],[],[],[],[]];
            x = true;
            status.textContent = "Move your mouse over a square and click to play an X or an O.";
            status.classList.remove("you-won");
        })
    })
}