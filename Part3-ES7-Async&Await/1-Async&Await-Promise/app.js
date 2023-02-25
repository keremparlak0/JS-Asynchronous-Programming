///////////////ASYNC///////////////
// - Fonksiyonun başına gelen async, geri döndürdüğümüz veriyi Promise Haline getirir
//      -> Veri otomatik olarak resolve'a dönüştürülür.
//
// async function name(data) {
//     return data
// }
// name("Hello").then(resolve => console.log(resolve))
////////////////////////////////////
///////////////AWAIT////////////////
// async function name(data){
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This is a value")
//         },3000)
//     })
//     let response = await promise //await sayesinde yukarıdaki kod çalışmadan diğer koda devam edilmez
//                                  //yani 3 sn bekler ve öyle yazdırır
//     console.log(response)
//     console.log(data)
// }
// name("Hello")
////////////////////////////////////
////////////////////////////////////
// async function getData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data)
//             } else {
//                 reject(new Error("String bir değer giriniz"))
//             }
//         }, 3000);
//     })
//     let response = await promise // 3 sn sonra iki konsol çıktısını yazdırır
//     console.log("I was'nt wait it")
//     return response
// }
// getData(2)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
////////////////////////////////////

async function getCurrency(url) {
    const response = await fetch(url) //REsponse Object
    const data = await response.json() // JSON Object

    return data.result[0]
}

getCurrency("https://api.orhanaydogdu.com.tr/deprem/kandilli/live")
    .then(response => console.log(response))