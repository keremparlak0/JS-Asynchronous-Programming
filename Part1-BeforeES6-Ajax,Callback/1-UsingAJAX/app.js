// HTTP STATUS
// - 200 : OK
// - 403 : FORBIDDEN
// - 404 : NOT FOUND
// - 505 : INTERNAL SERVER ERROR

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", () => {
    //XMLHttpRequest

    const xhr = new XMLHttpRequest()

    // xhr.onreadystatechange = function() { 
    //     // console.log(this.readyState) //readystate değiştikçe konsola yazdıracağız
    //     // console.log(this.status)
    //     if (this.status == 200 && this.readyState == 4) {// Böyle bir url varsa ve response ready olursa
    //         // Response hazır
    //         console.log(this.responseText)// example.txt'yi yazdırdık
    //     }
    // }
    xhr.onload = function () { // Bu fonksiyon sadece response=4 iken yani ready durumunda çalışır
        if(this.status === 200){
            // console.log(this.responseText)// ↑yukarıdaki fonk. aynısı
            const div = document.querySelector("#ajax")
            div.textContent = this.responseText //example.txt'yi div içine yazdırdık
        }
    }

    xhr.onprogress = function () {// Ready state 3 iken .alışır
        console.log("Process işleniyor...", this.readyState)
    }

    xhr.open("GET", "example.txt", true)//Bağlantı Açıyoruz
                                        //İlk yere methodumuzu
                                        //ikinci yere adresimizi
                                        //üçüncü yere de senkron/asenkron tercihimizi yazıyoruz
                                            //asenkron-true
                                            //senkron-false
    xhr.send()
    console.log(xhr)
})