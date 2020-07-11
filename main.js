var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
    PlayerHits = [0,0]
    PlayerMisses = [0,0]
    activePlayer = 0;
    boardsdata = [
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
    ]
}

initializeData();
console.log(boardsdata)


//board play
for (player = 0; player < 2; player++) {
    for (row = 0; row < 10; row++) {
        for (column = 0; column < 10; column++) {
            document.getElementById(player + '-' + (row + 1) + '-' + (column + 1)).addEventListener('click', function () {
                console.log(this.id);

                if (activePlayer == (this.id).charAt(0)) {
                    //comment don't shoot your own ships
                    document.getElementById('comment0').textContent = 'Don\'t shoot your own ships!'; 


                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] === 0) {
                    //if the square is empty
                    //change the square to the nothing graphic
                    document.getElementById(this.id).src = '../JSBattleship/empty.jpg';
                    //chamge the value of that square's corresponding number in the board array to 8
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 8;
                    //comment that it is a miss
                    document.getElementById('comment0').textContent = 'You missed!'; 
                    //add to the missed score
                    PlayerMisses[activePlayer] += 1;
                    document.getElementById('miss'+activePlayer).textContent = ' Miss: '+ PlayerMisses[activePlayer]; 
                    //change players
                    activePlayer === 0 ? activePlayer = 1 : activePlayer= 0;  //ternary to switch it back and forth
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] > 0 && boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] < 6) {
                    //if the square has a ship
                    document.getElementById(this.id).src = '../JSBattleship/blast.jpg';
                    //chamge the value of that square's corresponding number in the board array to 9
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 9;
                    //comment that it is a hit
                    document.getElementById('comment0').textContent = 'It is a hit!!'; 
                    //add to the hit score
                    PlayerHitss[activePlayer] += 1;
                    document.getElementById('hits'+activePlayer).textContent = ' Hits: '+ PlayerHits[activePlayer]; 
                    //change players
                    activePlayer === 0 ? activePlayer = 1 : activePlayer= 0;  //ternary to switch it back and forth
                } else {
                    //comment that you already shot there
                    document.getElementById('comment0').textContent = 'You already shot there!'; 
                }
                


            })
        }
    }
}