let age = Number(prompt("Yoshingizni kiriting"))
let data = prompt('Siz talabamisiz? (ha/yoq)')

// if (age<18, data = "ha") {
//     console.log("siz uchun chipta narxi 5000 sum");
    
// }else {
//     console.log("siz uchun chipta narxi 10000 sum");
    
// }

let chipta = (age < 18 || data.toLowerCase() === "ha") ? 5000 : 10000;

console.log("Siz uchun chipta narxi: " + chipta + " so'm");



// Murakkab vazifa

let type = prompt("Mahsulot turini tanlang (telefon, laptop, quloqchin):")
let soni = Number(prompt("Nechta " + type + " xarid qilmoqchisiz?"));
let chegirma = prompt("Sizda chegirma kartasi bormi? (ha/yo'q)")




let narx = (type === "telefon") ? 200 :
           (type === "laptop") ? 800 :
           (type === "quloqchin") ? 50 :
           0;

if (narx === 0) {
    console.log(`Bu mahsulot turi mavjud emas`);
} else {
    let xisob = narx * soni;
    let oxir = (chegirma === "ha" && xisob > 300) ? xisob * 0.9 : xisob;

    console.log("Siz uchun to'lov summasi: " + oxir);
}
