// let mevalar = ["olma", "anor", "kiwi", "nok", "apelsin", "mandarin"]

// for (let i = 0; i < mevalar.length; i++) {
//     if(mevalar[i].length>=4){
//         console.log(mevalar[i])
//         mevalar[i].concat("lar")
//     }
// }

// for (let meva of mevalar) {
//     console.log(meva);
// }


let letterSearch = ["olma", "anor","kiwi", "nok", "apelsin", "mandarin","novvoy","norin"]
let letterN = []
for (let i = 0; i < letterSearch.length; i++) {
    const element = letterSearch[i];
    if (element.includes('n')) {
        letterN.push(element)
    }
}
console.log(letterN);



