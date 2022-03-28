let a = +prompt("nhap a")
let b = +prompt("nhap b")
let c = +prompt("nhap c")
let delta = Math.pow(b, 2) - (4 * a * c)

if (delta == 0) {
    let x = (-b) / (2 * a)
    document.write("phuong trinh co nghiem kep la :" + x)
} else if (delta > 0) {
    let x1 = ((-b) + Math.sqrt(delta)) / a
    let x2 = ((-b) - Math.sqrt(delta)) / a
    document.write("nghiem x1 la:" + x1 + "<br>" + "nghiem x2 la:" + x2)
} else {
    document.write("phuong trinh vo nghiem")
}