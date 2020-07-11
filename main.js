// //board setup
// var newSquare = document.createElement('img')
// for (a = 0; a < 2; a++) {
//     a === 0 ? currentBoxLocation = 'left-div' : currentBoxLocation = 'right-div';
//     for (x = 1; x < 11; x++) {
//         currentRowLocation = a + '-' + x
//         var rowDiv = document.createElement("div");
//         document.getElementById(currentBoxLocation).appendChild(rowDiv).setAttribute('id', currentRowLocation);
//         for (y = 1; y < 11; y++) {
//             currentElementLocation = a + '-' + x + '-' + y;
//             var imageBox = document.createElement("img");
//             document.getElementById(currentRowLocation).appendChild(imageBox).setAttribute('id', currentElementLocation).setAttribute('src', '../JSBattleship/waves.jpg');
//             console.log(currentBoxLocation, currentRowLocation, currentElementLocation);
//         }
//     }
// }

let player1Array = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

let player2Array = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];



    //board play
    for (a = 0; a < 2; a++) {
        for (x = 1; x < 11; x++) {
            for (y = 1; y < 11; y++) {
                document.getElementById(a + '-' + x + '-' + y).addEventListener('click', function () {
                    console.log(this.id);

                    //if the square is empty
                    document.getElementById(this.id).src = '../JSBattleship/empty.jpg';
                })
            }
        }
    }