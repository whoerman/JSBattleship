var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
    playerNames = ['Player 1', 'Player 2']
    activePlayer = 0;
    otherPlayer = 1;
    shipTypes = [ null, 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
    ;
    shipHoles = [
        [null, 5, 4, 3, 3, 2, 17, 100], //empty, the five ships, then total hits (for win) and misses
        [null, 5, 4, 3, 3, 2, 17, 100]
    ];
    shipHits = [
        [null, 0, 0, 0, 0, 0, 0, 0], //empty, the five ships, then hits and misses to compare with holes
        [null, 0, 0, 0, 0, 0, 0, 0]
    ];

    shipNumber = 0;
    squareData = 0;
    boardsdata = [
        [
            [7, 1, 1, 1, 1, 1, 7, 7, 5, 5],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 2, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 2, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 2, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 2, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 3, 3, 3, 7, 7, 7, 7, 4, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 4, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 4, 7],
        ],
        [
            [7, 7, 7, 7, 7, 7, 7, 7, 5, 5],
            [7, 7, 7, 7, 2, 2, 2, 2, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 1, 7, 7, 3, 3, 3, 7, 7],
            [7, 7, 1, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 1, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 1, 7, 7, 4, 4, 4, 7, 7],
            [7, 7, 1, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
        ]
    ]
}

initializeData();


document.querySelector('.player'+activePlayer).style.opacity = '.5';




//board play
function playGame() {
    for (player = 0; player < 2; player++) {
        for (row = 0; row < 10; row++) {
            for (column = 0; column < 10; column++) {
                document.getElementById(player + '-' + (row) + '-' + (column)).addEventListener('click', function () {
    
                    function changePlayerTurns() {
                        document.querySelector('.player' + activePlayer).style.opacity = '1'; //makes the now active screen full opacity 
                        activePlayer === 0 ? otherPlayer = 0 : otherPlayer = 1; //trade players
                        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                        document.querySelector('.player' + activePlayer).style.opacity = '0.5'; //dims the now inactive screen
                        console.log("Switch Players");
                    };
    
                    function checkSinkWin() {
                        console.log('check sinking or win');
                        if (shipHits[otherPlayer][squareData] === shipHoles[otherPlayer][squareData]) {
                            console.log( 'You sunk my '+ shipTypes[squareData] )
                            document.getElementById('P'+otherPlayer+'Ship'+squareData).style.display= 'none';
                            if (shipHits[otherPlayer][6] = 17) {
                                console.log('you won!')
                            } else return
                        } else return
    
                    }
    
    
                    //Play Game
                    console.log(this.id);
                    if (parseInt(activePlayer) === parseInt((this.id).charAt(0))) {
                        console.log("Don't Shoot at your own ships!")
                    } else {
                        squareData = boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))]
    
                        //7 is empty and means it is a miss
                        if (squareData === 7) {
                            //tell that it was a miss   
                            console.log("miss");
                            //add one to the miss total
                            shipHits[otherPlayer][7] += 1;
                            console.log(shipHits);
                            //set that square to 9 to indicate already shot at in future rounds  
                            boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 9;
                            //change the square's picture to a splash miss
                            document.getElementById(this.id).src = '../JSBattleship/splash.jpg';
                            //change players
                            changePlayerTurns()
    
                            // between 1 and 5 means it is a hit
                        } else if (squareData > 0 && squareData < 6) {
                            //tell that it was a hit   
                            console.log("hit");
                            //add one to the hit total and to that ship
                            shipHits[otherPlayer][6] += 1;
                            shipHits[otherPlayer][squareData] += 1;
                            console.log(shipHits);
                            //set that square to 9 to indicate already shot at in future rounds  
                            boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 9;
                            //change the square's picture to a splash miss
                            document.getElementById(this.id).src = '../JSBattleship/blast.jpg';
                            //check to see if sink or won
                            checkSinkWin();
                            //change players
                            changePlayerTurns();
    
                            //9 means you have already shot there so try again
                        } else if (squareData === 9) {
                            console.log('You already shot there! Try again!')
                        }
                    }
    
                })
            }
        }
    }
}

playGame();