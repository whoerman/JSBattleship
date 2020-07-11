
for (a=0; a<2; a++) {
    for (x=1; x<11; x++) {
        for (y=1; y<11; y++)  {
            document.getElementById(a+'-'+x+'-'+y).addEventListener('click', function() {
                console.log(this.id);
                document.getElementById(this.id).src = '../JSBattleship/empty.jpg';
            })
        }
    }
}
