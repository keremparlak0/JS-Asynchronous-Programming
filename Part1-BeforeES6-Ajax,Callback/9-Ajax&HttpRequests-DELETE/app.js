class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url)
        this.xhr.onload = () => {

            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback("Herhangi bir hata alındı!", null)
            }
        }
        this.xhr.send()
    }

}

const request = new Request()

request.delete("https://jsonplaceholder.typicode.com/albums/1", function (err, response) {
    if (err === null) {
        console.log(response)
    } else {
        console.log(err)
    }
})