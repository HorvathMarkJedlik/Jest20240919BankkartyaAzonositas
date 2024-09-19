module.exports = function check(kartyaszam){
    //A formátum ellenőrzése
    if(!(kartyaszam.length === 19 && kartyaszam[4] === ' ' && kartyaszam[9] === ' ' && kartyaszam[14] === ' ')){
        return false
    }
    //Hátulról kezdve minden második karaktert cseréljünk
    kartyaszam = kartyaszam.replaceAll(' ','')
    console.log(kartyaszam.length);
    let osszeg = 0
    for (let i = 14; i>=0; i-=2) {
        let jegy = parseInt(kartyaszam[i])
        if(2*jegy>9){
            jegy = jegy-9
        }
        osszeg += 2*jegy
    }
    for (let i = 1; i<=15; i+=2) {
        let jegy = parseInt(kartyaszam[i])
        osszeg += jegy
    }
    return osszeg
    
}

