// function getData(data) { // return Promise object
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 resolve(data)
//             } else {
//                 reject(new Error("String bir değer giriniz"))
//             }
//         },4000)
//     })
// }

// getData("15")
// .then(response => console.log(response))
// .catch((err) => console.error(err))

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number+2)
            } else {
                reject(new Error("Lütfen bir sayı giriniz!"))
            }
        }, 3000);
    })
}

addTwo("10")
.then(response => {
    return response + 2 //yeniden Promise döndürecek
}).then(response2 => console.log(response2))
.catch(err => console.error(err))

// Yalnızca 1 tane catch kullanılır
// Birden çok then kullanılabilir(Promise Chain)