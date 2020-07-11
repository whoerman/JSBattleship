var boardsdata;

// boardsdata[0][0][2] player (0 or 1) - row (1 to 10 so 0 to 9) - column (1 to 10 so 0 to 9)
function initializeData() {
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

                //if the square is empty
                if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] === 0) {
                    //change the square to the nothing graphic
                    document.getElementById(this.id).src = '../JSBattleship/empty.jpg';
                    //chamge the value of that square's corresponding number in the board array to 8
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 8;
                } else if (boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] === 1) {
                    //if the square has a ship
                    document.getElementById(this.id).src = '../JSBattleship/blast.jpg';
                    //chamge the value of that square's corresponding number in the board array to 9
                    boardsdata[parseInt((this.id).charAt(0))][parseInt((this.id).charAt(2)) - 1][parseInt((this.id).charAt(4)) - 1] = 9;
                } else {
                    console.log("you already shot there!")
                }
                


            })
        }
    }
}