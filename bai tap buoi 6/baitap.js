// bai3
let a = (x, y, z) => console.log(x, y, z)
let b = () => alert("hello")
let c = (a, b) => {
    m = a + b * 100
    return m
}

//bai2
var smartPhones = [
    { name: "iphone", price: 649 },
    { name: "Galaxy S6", price: 576 },
    { name: "Galaxy Note 5", price: 489 }
]

function price() {
    for (i = 0; i <= smartPhones.length + 1; i++) {
        console.log(smartPhones[i].price)
    }
}

price()

//bai1
//c1
function student(name, age, address) {
    let student = {
        Name: name,
        Age: age,
        Address: address,
    }
    console.log(student)
}
//c2
let student = (name, age, address) => {
    let student = {
        Name: name,
        Age: age,
        Address: address,
    }
    console.log(student)
}

student("Trung", 17, "Hanoi")