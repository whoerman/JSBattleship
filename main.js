var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (0 to 9) - column ( 0 to 9)
function initializeData() {
    playerNames = ['Player 1', 'Player 2']
    activePlayer = 0;
    otherPlayer = 1;
    shipTypes = [null, 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];;
    shipHoles = [
        [null, 5, 4, 3, 3, 2, 17, 100], //empty, the five ships, then total hits (for win) and misses
        [null, 5, 4, 3, 3, 2, 17, 100]
    ];
    shipHits = [
        [null, 0, 0, 0, 0, 0, 0, 0], //empty, the five ships, then hits and misses to compare with holes
        [null, 0, 0, 0, 0, 0, 0, 0]
    ];

    shipNumber = 0;
    shipCount = 0;
    currentSquare = [0, 0, 0];
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
}

initializeData();


document.querySelector('.player' + activePlayer + 'Board').style.opacity = '.5';

//can hide the board on one or both sides
//document.querySelector('#left-div').style.display = 'none';

//setting up the ships
function setShips() {

    
    let squareData =1;
    function fillBoard1() {
        clickSquare();
    }

    function fillBoard2() {
        console.log('done with clicksquare')
        clickSquare();
    }

    fillBoard1();

    function clickSquare() {
        for (player = 0; player < 2; player++) {
            for (row = 0; row < 10; row++) {
                for (column = 0; column < 10; column++) {
                    document.getElementById(player + '-' + (row) + '-' + (column)).addEventListener('click', function () {


                        function checkDirection() {
                            if (shipCount > 1) {

                            }
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
                        document.getElementById(currentSquare[0]+'-'+currentSquare[1]+'-'+currentSquare[2]).src = '../JSBattleship/space' + squareData + '.jpg';
                        //change the surrounding squares to arrows
                        if (boardsdata[currentSquare[0]][currentSquare[1]+1][currentSquare[2]] = 7) {
                            document.getElementById(currentSquare[0]+'-'+(currentSquare[1]+1)+'-'+currentSquare[2]).src = '../JSBattleship/down.jpg';
                        }
                        if (boardsdata[currentSquare[0]][currentSquare[1]-1][currentSquare[2]] = 7) {
                            document.getElementById(currentSquare[0]+'-'+(currentSquare[1]-1)+'-'+currentSquare[2]).src = '../JSBattleship/up.jpg';
                        }
                        if (boardsdata[currentSquare[0]][currentSquare[1]][currentSquare[2]-1] = 7) {
                            document.getElementById(currentSquare[0]+'-'+(currentSquare[1])+'-'+(currentSquare[2]-1)).src = '../JSBattleship/left.jpg';
                        }
                        if (boardsdata[currentSquare[0]][currentSquare[1]][currentSquare[2]+1] = 7) {
                            document.getElementById(currentSquare[0]+'-'+(currentSquare[1])+'-'+(currentSquare[2]+1)).src = '../JSBattleship/right.jpg';
                        }
                        
                        
                        

                        if (shipCount === 5){
                            squareData += 1;
                        } else if (shipCount === 9) {
                            squareData += 1;
                        } else if (shipCount === 12){
                            squareData += 1;
                        } else if (shipCount === 15){
                            squareData += 1;
                        } else if (shipCount === 17) {
                            fillBoard2()
                        }


                    })
                }
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