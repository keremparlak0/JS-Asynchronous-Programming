// Set Timeout

// setTimeout(function () {
//     console.log("2 sn sonra consola yazıldı")
// },2000)

// Set Interval(Aralıklı fonksiyon çalışması...)
let i = 0
let value = setInterval(function() {
    i++
    console.log(i)
},1000)
//      Clear Interval
document.getElementById("btn").addEventListener("click", () => {
    clearInterval(value)
})