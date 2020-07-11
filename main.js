var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
    PlayerHits = [0, 0]
    PlayerMisses = [0, 0]
    activePlayer = 0;
    boardsdata = [
        [
            [0, 0, 0, 0, 0, 0, 4, 4, 4, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [3, 3, 3, 0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
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

                if (activePlayer == (this.id).charAt(0)) {
                    //comment don't shoot your own ships
                    document.getElementById('comment0').textContent = 'Don\'t shoot your own ships!';

                    //if the square is empty
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] === 0) {
                    //change the square to the nothing graphic
                    document.getElementById(this.id).src = '../JSBattleship/empty.jpg';
                    //chamge the value of that square's corresponding number in the board array to 8
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 8;
                    //comment that it is a miss
                    document.getElementById('comment0').textContent = 'Player '+(activePlayer+1)+' missed!';
                    //add to the missed score
                    PlayerMisses[activePlayer] += 1;
                    document.getElementById('miss' + activePlayer).textContent = ' Miss: ' + PlayerMisses[activePlayer];
                    //change players           
                    // document.getElementById('P'+(activePlayer+1)+"ships").textContent = 'Player '+(activePlayer+1)+ ' Ships';
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary to switch it back and forth
                    // document.getElementById('P'+(activePlayer+1)+"ships").textContent = '(Player '+(activePlayer+1)+ ' Shooting)';


                    //if the square has a ship
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] > 0 && boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] < 6) {
                    document.getElementById(this.id).src = '../JSBattleship/blast.jpg';
                    //chamge the value of that square's corresponding number in the board array to 9
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 9;
                    //comment that it is a hit
                    document.getElementById('comment0').textContent = 'Player '+(activePlayer+1)+ ' has a hit!!';
                    //add to the hit score
                    PlayerHits[activePlayer] += 1;
                    document.getElementById('hits' + activePlayer).textContent = ' Hits: ' + PlayerHits[activePlayer];
                    //change players
                    // document.getElementById('P'+(activePlayer+1)+"ships").textContent = 'Player '+(activePlayer+1)+ ' Ships';
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary to switch it back and forth
                    // document.getElementById('P'+(activePlayer+1)+"ships").textContent = '(Player '+(activePlayer+1)+ ' Shooting)';

                } else {
                    //comment that you already shot there
                    document.getElementById('comment0').textContent = 'You already shot there!';
                }



            })
        }
    }
}