var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
    PlayerHits = [0, 0];
    PlayerMisses = [0, 0];
    activePlayer = 0;
    shipTypes = [ '', 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer' ];
    shipSunk = [[  0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0 ] ];
    shipHoles = [[  0 , 5, 4, 3, 3, 2, 17 ], [ 0 , 5, 4, 3, 3, 2, 17 ] ];
    shipHits = [[ 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0 ] ];
    shipNumber = 0;
    boardsdata = [
        [
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 5, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 3, 3, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 2, 2, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 3, 3, 3, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 4, 4, 4, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    ]
}

initializeData();
console.log(shipHits);
document.querySelector('.player'+activePlayer).style.opacity = '.5';




//board play
for (player = 0; player < 2; player++) {
    for (row = 0; row < 10; row++) {
        for (column = 0; column < 10; column++) {
            document.getElementById(player + '-' + (row + 1) + '-' + (column + 1)).addEventListener('click', function () {

                function changePlayerTurns() {
                    document.querySelector('.player'+activePlayer).style.opacity = '1'; //makes the now active screen full opacity       
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary to switch players
                    document.querySelector('.player'+activePlayer).style.opacity = '0.5'; //dims the now inactive screen
                    document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+'\'s Turn!';
                };

                function checkSinking() {
                    console.log(shipHits);
                    // if (shipHits[activePlayer][shipNumber] = shipHoles[activePlayer][shipNumber]) {
                    //     document.getElementById('comment'+activePlayer).textContent = 'You sank the '+shipTypes[activePlayer][shipNumber];
                    // } else return
                }



                if (activePlayer == (this.id).charAt(0)) {    //comment don't shoot your own ships
                    document.getElementById('comment'+activePlayer).textContent = 'Don\'t shoot your own ships!';

                    //if the square is empty
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] === 0) {
                    //change the square to the splash graphic
                    document.getElementById(this.id).src = '../JSBattleship/splash.jpg';
                    //chamge the value of that square's corresponding number in the board array to 8
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 8;
                    //comment that it is a miss
                    document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+' missed!';
                    //add to the missed score
                    PlayerMisses[activePlayer] += 1;
                    document.getElementById('miss' + activePlayer).textContent = ' Miss: ' + PlayerMisses[activePlayer];
                    //change players 
                    changePlayerTurns();                   


                    //if the square has a ship
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] > 0 && boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] < 6) {
                    
                     //change the hit array picture at that location
                    document.getElementById(this.id).src = '../JSBattleship/blast.jpg';

                    //change the hit on the individual battleship
                    shipNumber = boardsdata[parseInt(this.id.charAt(0))][(parseInt(this.id.charAt(2)))-1][(parseInt(this.id.charAt(4)))-1];
                    console.log(shipNumber);
                    shipHits[parseInt(this.id.charAt(0))][shipNumber] += 1;
                    shipHits[parseInt(this.id.charAt(0))][6] += 1;
                    checkSinking();

                    //chamge the value of that square's corresponding number in the board array to 9
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 9;
                   
                    //comment that it is a hit
                    document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+ ' has a hit!!';
                    
                    //add to the hit score
                    PlayerHits[activePlayer] += 1;
                    document.getElementById('hits' + activePlayer).textContent = ' Hits: ' + PlayerHits[activePlayer];
                    //change players 
                    changePlayerTurns();

                } else {
                    //comment that you already shot there
                    document.getElementById('comment0').textContent = 'You already shot there!';
                }



            })
        }
    }
}