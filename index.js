var angka
var tebakan 
angka = Math.ceil(Math.random()*5)
tebakan = 3
console.log(angka, 'angka1')
function play(input){
    if(input === angka){
        console.log('masuk')
        alert("YOU WIN")
        angka = Math.ceil(Math.random()*5)
        tebakan = 3
        console.log(angka, 'angka2')
    } else {
        tebakan -= 1
    } 
    if(tebakan === 0){
        alert("YOU HAVE BEEN ATTACKED!!!")
        tebakan = 3
    }
    console.log(tebakan, 'tebak')
    console.log(input, 'input')

}

