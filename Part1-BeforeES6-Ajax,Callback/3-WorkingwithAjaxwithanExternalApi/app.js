document.getElementById("change").addEventListener("click", change)

function change() {
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://rates.translatewp.online/eur_try")

    xhr.onload = function () {
        if (this.status) {
            const response = JSON.parse(this.responseText)
            const rate = response.rate
            const amount = Number(document.getElementById("amount").value)
            document.getElementById("tl").value = rate * amount
        }
    }

    xhr.send()
}