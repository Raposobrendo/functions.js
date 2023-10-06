let a = 1
let b = 1
let c

console.log(a)
console.log(b)
for(let i = 0; i < 8; i++){
    c = a + b
    a = b
    b = c
    console.log(c)
}