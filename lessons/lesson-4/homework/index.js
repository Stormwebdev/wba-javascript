for ( let i = 0; i < 5; i++)
console.log(i);

for ( let b = 0; b < 5; ++b) 
console.log(b);

for (;;) {
    let number = prompt("100 dan katta son kiriting:");

    if (number === null || number === " ") {
        alert("Kiritish bekor qilindi!");
        break;
    }

    
    if (number > 100) {
        alert("Siz 100 dan katta son kiritdingiz: " + number);
        break;
    }
}


let inp = prompt("2 dan boshlab nechagacha tub sonlarni topishni xohlaysiz?");
inp = Number(inp);

if (inp >= 2) {
    for (let i = 2; i <= inp; i++) {
        let is = true;


        for (let j = 2; j < i; j++) { 
            if (i % j) {
                is = false;
                break;
            }
        }

        if (is) {
            console.log(i);
        }
    }
} else {
    alert("2 dan katta son kiriting");
}

