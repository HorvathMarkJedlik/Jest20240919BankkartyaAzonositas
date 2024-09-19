const check = require('../check.js')
test("Egy érvényes bankkártya számnál igazzal kellene visszatérni", () =>{
    expect(check("4539 3195 0343 6467")).toBe(true)
})

test("Egy nem érvényes bankkártya számnál hamissal kellene visszatérni", () =>{
    expect(check("8273 1232 7352 0569")).toBe(false)
})

test("Ha nem megfelelő formátum esetén hamissal kellene visszatérni", () =>{
    expect(check("45393195  0343   6467")).toBe(false)
})