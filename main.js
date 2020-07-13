var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
    PlayerHits = [0, 0];
    PlayerMisses = [0, 0];
    playerNames = [ 'Player 1', 'Player 2']
    activePlayer = 0;
    otherPlayer = 1;
    shipTypes = [[ 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer' ], [ 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer' ]];
    shipHoles = [[ 5, 4, 3, 3, 2, 17 ], [ 0 , 5, 4, 3, 3, 2, 17 ] ];
    shipHits = [[ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ];
    shipNumber = 0;
    boardsdata = [
        [
            [0, 1, 1, 1, 1, 1, 0, 0, 5, 5],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
            [0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
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
// document.querySelector('.player'+activePlayer).style.opacity = '.5';




//board play
for (player = 0; player < 2; player++) {
    for (row = 0; row < 10; row++) {
        for (column = 0; column < 10; column++) {
            document.getElementById(player + '-' + (row) + '-' + (column)).addEventListener('click', function () {

                // function changePlayerTurns() {
                //     document.querySelector('.player'+activePlayer).style.opacity = '1'; //makes the now active screen full opacity 
                //     activePlayer === 0 ? otherPlayer = 0 : otherPlayer = 1 ;   //trade players
                //     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
                //     document.querySelector('.player'+activePlayer).style.opacity = '0.5'; //dims the now inactive screen
                //     document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+'\'s Turn!';
                // };

                // function checkSinking() {
                //     console.log(shipHits);
                //     if (shipHits[otherPlayer][shipNumber] === shipHoles[otherPlayer][shipNumber]) {
                //         console.log(playernames[activePlayer]+" sunk "+palyerNames[otherPlayer]+' '+shipTypes[activePlayer][shipNumber])
                //     }
                    
                    
                    
                // }

                console.log(this.id);
                if (activePlayer === boardsdata[parseInt(this.id.charAt(0))])
                let squareData = boardsdata[parseInt(this.id.charAt(0))][parseInt(this.id.charAt(2))][parseInt(this.id.charAt(4))]
                if (squareData === 0) {

                }

                // if (activePlayer == (this.id).charAt(0)) {    //comment don't shoot your own ships
                //     document.getElementById('comment'+activePlayer).textContent = 'Don\'t shoot your own ships!';

                //     //if the square is empty
                // } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] === 0) {
                //     //change the square to the splash graphic
                //     document.getElementById(this.id).src = '../JSBattleship/splash.jpg';
                //     //chamge the value of that square's corresponding number in the board array to 8
                //     boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 8;
                //     //comment that it is a miss
                //     document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+' missed!';
                //     //add to the missed score
                //     PlayerMisses[activePlayer] += 1;
                //     document.getElementById('miss' + activePlayer).textContent = ' Miss: ' + PlayerMisses[activePlayer];
                //     //change players 
                //     changePlayerTurns();                   


                //     //if the square has a ship
                // } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] > 0 && boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] < 6) {
                    
                //      //change the hit array picture at that location
                //     document.getElementById(this.id).src = '../JSBattleship/blast.jpg';

                //     //change the hit on the individual battleship
                //     shipNumber = boardsdata[parseInt(this.id.charAt(0))][(parseInt(this.id.charAt(2)))][(parseInt(this.id.charAt(4)))];
                //     shipHits[parseInt(this.id.charAt(0))][shipNumber] += 1;
                //     shipHits[parseInt(this.id.charAt(0))][6] += 1;
                //     checkSinking();

                //     //chamge the value of that square's corresponding number in the board array to 9
                //     boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2))][parseInt((this.id).charAt(4))] = 9;
                   
                //     //comment that it is a hit
                //     document.getElementById('comment'+activePlayer).textContent = 'Player '+(activePlayer+1)+ ' has a hit!!';
                    
                //     //add to the hit score
                //     PlayerHits[activePlayer] += 1;
                //     document.getElementById('hits' + activePlayer).textContent = ' Hits: ' + PlayerHits[activePlayer];
                //     //change players 
                //     changePlayerTurns();

                // } else {
                //     //comment that you already shot there
                //     document.getElementById('comment0').textContent = 'You already shot there!';
                // }



            })
        }
    }
}