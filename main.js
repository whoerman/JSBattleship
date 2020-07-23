var boardsdata, player, currentPlayer;



function initializeData() {
    //names are replaced at the nameInput form
    playerNames = ['Player1', 'Player2'];
    currentPlayer = [0, 1];

    //setting the ship data
    shipTypes = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
    // the five ships, then total hits (for win) and misses
    shipHoles = [5, 4, 3, 3, 2, 17, 100];
    // the five ships, then hits and misses to compare with holes for each person
    shipHits = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    currentShipInputSquare = [0, 0];

    //each player has a board, and empty square's value is a 7
    // boardsdata[0][0][0] player (0 or 1) - row (0 to 9) - column ( 0 to 9)
    boardsdata = [
        [
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        ]
    ]

    boardfill = 0;
    shipNumber = 0;
    shipCount = 0;
    shipTypeCounter = 0;
    currentSquare = [0, 0, 0];
}

// hiding and exposing the elements to start the setup
function setBoardforShipInput() {
    //hide the playing boards
    document.querySelector('.player0Board').style.display = 'none';
    document.querySelector('.player1Board').style.display = 'none';
    //hide the ship pictures
    document.getElementById('0shipPicDiv').style.display = 'none';
    document.getElementById('1shipPicDiv').style.display = 'none';
    //put the instructions on the left side
    document.getElementById("P0Title2").textContent = 'Ship Installation Board';
    document.getElementById("P0Comment1").textContent = 'Use this board to set up your ships';
    document.getElementById("P0Comment2").textContent = '(Instructions to the right - click on the squares)';
    //hide the elements of the right side
    document.getElementById('P1Title2').style.display = 'none';
    document.getElementById('P1Comment1').style.display = 'none';
    document.getElementById('P1Comment2').style.display = 'none';
    document.getElementById('shipInputInstructions').style.display = 'none';
};

//getting the player names
function nameInputForms() {
    document.getElementById("nameFormButton").addEventListener("click", function () {
        playerNames[0] = document.getElementById("1name").value;
        playerNames[1] = document.getElementById("2name").value;
        shipInputInstructions();
    });
};

//instructions for inputting the ships
function shipInputInstructions() {
    //hide the name input div
    document.getElementById('nameInput').style.display = 'none';
    //reveal the welcome with the player names
    document.getElementById('shipInputInstructions').style.display = 'block';
    document.getElementById("welcomeNames").textContent = 'Welcome, ' + playerNames[0] + ' & ' + playerNames[1] + '!';
    settingShips();
}




//setting all the data to zero
initializeData();

// turn on instruction Setup
setBoardforShipInput();

//get the name input
nameInputForms();







function settingShips() {
    //turn on the title over the selection board
    document.getElementById("P0Title2").textContent = 'Time to set ' + playerNames[0] + '\'s ships!';
    //the warning box for player 2 to turn away
    document.getElementById("P0Title2").style.color = '#ff0000';
    document.getElementById("P0Title2").style.textShadow = '2px 2px #000000';
    document.getElementById("player2LA").textContent = playerNames[1];
    document.getElementById("player1LA").textContent = playerNames[0];
    //hiding format for each ships with instructions
    document.getElementById('Carrier').style.display = 'block';
    document.getElementById('Battleship').style.display = 'none';
    document.getElementById('Cruiser').style.display = 'none';
    document.getElementById('Submarine').style.display = 'none';
    document.getElementById('Destroyer').style.display = 'none';
    document.getElementById('Buttons').style.display = 'none';
    document.getElementById('P0Comment1').textContent = 'Click the square above in a straight line';
    document.getElementById('P0Comment2').textContent = '(can be horizontal or vertical)';
    //setting each ship
    currentPlayer = 0;
    setSquareValues();
}


function setSquareValues() {
    for (row = 0; row < 10; row++) {
        for (column = 0; column < 10; column++) {
            document.getElementById(row + '-' + column).addEventListener('click', function () {

                //player 1 (actually 0)
                console.log(this.id)
                shipTypeCounter += 1;

                switch (shipTypeCounter) {
                    case 1:
                        shipDataInputValue = 1;
                        break;
                    case 2:
                        shipDataInputValue = 1;
                        break;
                    case 3:
                        shipDataInputValue = 1;
                        break;
                    case 4:
                        shipDataInputValue = 1;
                        break;
                    case 5:
                        shipDataInputValue = 1;
                        document.getElementById('Carrier').style.display = 'none';
                        document.getElementById('Battleship').style.display = 'block';
                        break;
                    case 6:
                        shipDataInputValue = 2;
                        break;
                    case 7:
                        shipDataInputValue = 2;
                        break;
                    case 8:
                        shipDataInputValue = 2;
                        break;
                    case 9:
                        shipDataInputValue = 2;
                        document.getElementById('Battleship').style.display = 'none';
                        document.getElementById('Cruiser').style.display = 'block';
                        break;
                    case 10:
                        shipDataInputValue = 3;
                        break;
                    case 11:
                        shipDataInputValue = 3;
                        break;
                    case 12:
                        shipDataInputValue = 3;
                        document.getElementById('Cruiser').style.display = 'none';
                        document.getElementById('Submarine').style.display = 'block';
                        break;
                    case 13:
                        shipDataInputValue = 4;
                        break;
                    case 14:
                        shipDataInputValue = 4;
                        break;
                    case 15:
                        shipDataInputValue = 4;
                        document.getElementById('Submarine').style.display = 'none';
                        document.getElementById('Destroyer').style.display = 'block';
                        break;
                    case 16:
                        shipDataInputValue = 5;
                        break;
                    case 17:
                        shipDataInputValue = 5;
                        document.getElementById('Destroyer').style.display = 'none';
                        document.getElementById('Buttons').style.display = 'block';
                        document.getElementById("okButton").addEventListener("click", function () {
                            console.log("OK")
                            for (rowReset = 0; rowReset < 10; rowReset++) {
                                for (columnReset = 0; columnReset < 10; columnReset++) {
                                    document.getElementById(rowReset + '-' + columnReset).src = '../JSBattleship/blank.jpg';
                                }
                            }
                        currentPlayer = 1;
                        document.getElementById("P0Title2").textContent = 'Time to set ' + playerNames[1] + '\'s ships!';
                        document.getElementById("player2LA").textContent = playerNames[0];
                        document.getElementById("player1LA").textContent = playerNames[1];
                        document.getElementById('Buttons').style.display = 'none';
                        })
                        document.getElementById("redoButton").addEventListener("click", function () {
                            console.log('redo')
                            for (rowReset = 0; rowReset < 10; rowReset++) {
                                for (columnReset = 0; columnReset < 10; columnReset++) {
                                    document.getElementById(rowReset + '-' + columnReset).src = '../JSBattleship/blank.jpg';
                                }
                            }
                        document.getElementById('Buttons').style.display = 'none';
                        })
                        break;
                    case 18:
                        //turn on the title over the selection board
                        document.getElementById("P0Title2").textContent = 'Time to set ' + playerNames[1] + '\'s ships!';
                        shipDataInputValue = 1;

                        break;
                    case 19:
                        shipDataInputValue = 1;
                        break;
                    case 20:
                        shipDataInputValue = 1;
                        break;
                    case 21:
                        shipDataInputValue = 1;
                        break;
                    case 22:
                        shipDataInputValue = 1;
                        document.getElementById('Carrier').style.display = 'none';
                        document.getElementById('Battleship').style.display = 'block';
                        break;
                    case 23:
                        shipDataInputValue = 2;
                        break;
                    case 24:
                        shipDataInputValue = 2;
                        break;
                    case 25:
                        shipDataInputValue = 2;
                        break;
                    case 26:
                        shipDataInputValue = 2;
                        document.getElementById('Battleship').style.display = 'none';
                        document.getElementById('Cruiser').style.display = 'block';
                        break;
                    case 27:
                        shipDataInputValue = 3;
                        break;
                    case 28:
                        shipDataInputValue = 3;
                        break;
                    case 29:
                        shipDataInputValue = 3;
                        document.getElementById('Cruiser').style.display = 'none';
                        document.getElementById('Submarine').style.display = 'block';
                        break;
                    case 30:
                        shipDataInputValue = 4;
                        break;
                    case 31:
                        shipDataInputValue = 4;
                        break;
                    case 32:
                        shipDataInputValue = 4;
                        document.getElementById('Submarine').style.display = 'none';
                        document.getElementById('Destroyer').style.display = 'block';
                        break;
                    case 33:
                        shipDataInputValue = 5;
                        break;
                    case 34:
                        shipDataInputValue = 5;

                        break;
                    case 35:
                        shipDataInputValue = 5;

                        break;
                    default:
                        console.log('switch default')
                }

                currentSquare[0] = parseInt((this.id).charAt(0));
                currentSquare[1] = parseInt((this.id).charAt(2));
                boardsdata[currentPlayer][currentSquare[0]][currentSquare[1]] = shipDataInputValue;
                //change the current square to the squareData number 
                document.getElementById(currentSquare[0] + '-' + currentSquare[1]).src = '../JSBattleship/space' + shipDataInputValue + '.jpg';



            })
        }
    }
}




//setting up the ships
function setShips() {

    // fillBoard0();

    function fillBoard0() {
        document.querySelector('.player' + otherPlayer + 'Board').style.opacity = '.5';
        document.getElementById("P0Title2").textContent = 'Time to set Player 1\'s ships!';
        document.getElementById("P0Title2").style.color = '#ff0000';
        document.getElementById("P0Title2").style.textShadow = '2px 2px #000000';
        // document.getElementById('0shiPicDiv').style.display = 'none';

        player = 0;
        shipCount = 0;
        squareData = 1;
        clickSquare();
    }

    function fillBoard1() {

        // document.getElementById("0shipPicDiv").style.display = 'block';

        document.querySelector('.player' + activePlayer + 'Board').style.opacity = '.3';
        document.getElementById("P0Title2").textContent = 'Player 1\'s ships!';
        document.getElementById("P0Title2").style.color = '#000000';
        document.getElementById("P0Title2").style.textShadow = 'none';

        document.querySelector('.player' + otherPlayer + 'Board').style.opacity = '1';
        document.getElementById("P1Title2").textContent = 'Time to set Player 2\'s ships!';
        document.getElementById("P1Title2").style.color = '#ff0000';
        document.getElementById("P1Title2").style.textShadow = '2px 2px #000000';

        player = 1;
        shipCount = 0;
        squareData = 1;
        clickSquare();
    }

    function prepareGame() {
        for (player = 0; player < 2; player++) {
            for (row = 0; row < 10; row++) {
                for (column = 0; column < 10; column++) {
                    document.getElementById(parseInt(player) + '-' + (row) + '-' + (column)).src = '../JSBattleship/waves.jpg';
                }
            }
        }
        playGame();
    }


    function clickSquare() {
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                document.getElementById(parseInt(player) + '-' + (row) + '-' + (column)).addEventListener('click', function () {

                    function checkDirection() {
                        console.log('check direction')
                        console.log(currentSquare[0], currentSquare[1], currentSquare[2], )
                    }


                    console.log(this.id)
                    currentSquare[0] = parseInt((this.id).charAt(0));
                    currentSquare[1] = parseInt((this.id).charAt(2));
                    currentSquare[2] = parseInt((this.id).charAt(4));
                    shipCount += 1;
                    console.log(shipCount);
                    checkDirection();

                    boardsdata[currentSquare[0]][currentSquare[1]][currentSquare[2]] = squareData;

                    //change the current square to the squareData number graphic
                    document.getElementById(currentSquare[0] + '-' + currentSquare[1] + '-' + currentSquare[2]).src = '../JSBattleship/space' + squareData + '.jpg';




                    if (shipCount === 5) {
                        squareData += 1;
                    } else if (shipCount === 9) {
                        squareData += 1;
                    } else if (shipCount === 12) {
                        squareData += 1;
                    } else if (shipCount === 15) {
                        squareData += 1;
                    } else if (shipCount === 17) {
                        boardfill += 1;
                        if (boardfill === 1) {
                            prepareGame();
                        } else {
                            fillBoard1();
                        }


                    }


                })
            }
        }
    }
}

setShips();


//board play
function playGame() {
    for (player = 0; player < 2; player++) {
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                document.getElementById(player + '-' + (row) + '-' + (column)).addEventListener('click', function () {

                    function changePlayerTurns() {
                        document.querySelector('.player' + activePlayer + 'Board').style.opacity = '1'; //makes the now active screen full opacity 
                        activePlayer === 0 ? otherPlayer = 0 : otherPlayer = 1; //trade players
                        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                        document.getElementById('P' + otherPlayer + 'Comment1').textContent = playerNames[activePlayer] + '\'s turn';
                        document.querySelector('.player' + activePlayer + 'Board').style.opacity = '0.5'; //dims the now inactive screen
                    };

                    function checkSink() {
                        console.log('check sinking or win');
                        if (shipHits[otherPlayer][squareData] === shipHoles[otherPlayer][squareData]) {
                            console.log('You sunk my ' + shipTypes[squareData])
                            document.getElementById('P' + otherPlayer + 'Comment1').textContent = 'You sunk the ' + shipTypes[squareData] + '!';
                            document.getElementById('P' + otherPlayer + 'Ship' + squareData).style.display = 'none';
                            // checkWIn()
                        }
                    }

                    function checkWIn() {
                        if (shipHits[otherPlayer][6] = 17) {
                            console.log('you won!')
                        }
                    }




                    //Play Game
                    if (parseInt(activePlayer) === parseInt((this.id).charAt(0))) {
                        document.getElementById('P' + activePlayer + 'Comment1').textContent = 'Not at your own ships! Try Again!';
                        document.getElementById('P' + activePlayer + 'Comment1').style.color = '#ff0000';
                        setTimeout(function () {
                            document.getElementById('P' + activePlayer + 'Comment1').style.color = '#000000';
                        }, 500);
                    } else {
                        squareData = boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))]
                        console.log(squareData);
                        //7 is empty and means it is a miss
                        if (squareData === 7) {
                            //tell that it was a miss   
                            document.getElementById('P' + otherPlayer + 'Comment1').textContent = 'It was a miss!';
                            //add one to the miss total
                            shipHits[otherPlayer][7] += 1;
                            //set that square to 9 to indicate already shot at in future rounds  
                            boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 9;
                            //change the square's picture to a splash miss
                            document.getElementById(this.id).src = '../JSBattleship/splash.jpg';
                            //change players
                            changePlayerTurns()

                            // between 1 and 5 means it is a hit
                        } else if (squareData > 0 && squareData < 6) {
                            //tell that it was a hit   
                            document.getElementById('P' + otherPlayer + 'Comment1').textContent = 'It was a hit!';
                            //add one to the hit total and to that ship
                            shipHits[otherPlayer][6] += 1;
                            console.log(shipHits[otherPlayer][6])
                            shipHits[otherPlayer][squareData] += 1;
                            console.log(shipHits[otherPlayer][squareData])
                            document.getElementById('P' + activePlayer + 'Comment2').textContent = playerNames[activePlayer] + ' has ' + shipHits[otherPlayer][6] + ' out of 17 hits!';
                            //set that square to 9 to indicate already shot at in future rounds  
                            boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 9;
                            //change the square's picture to a splash miss
                            document.getElementById(this.id).src = '../JSBattleship/blast.jpg';
                            //check to see if sink or won
                            checkSink();
                            //change players
                            changePlayerTurns();

                            //9 means you have already shot there so try again
                        } else if (squareData === 9) {
                            console.log('You already shot there! Try again!')
                            document.getElementById('P' + otherPlayer + 'Comment1').textContent = 'You already shot there! Try again!';
                        }
                    }

                })
            }
        }
    }
}

//playGame();