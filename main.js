
for (a=0; a<2; a++) {
    for (x=1; x<11; x++) {
        for (y=1; y<11; y++)  {
            document.getElementById('#'+a+'-'+x+'-'+y).addEventListener('click', function() {
                document.getElementById('current-1').src = '../JSBattleship/empty.jpg'
            })
        }
    }
}
