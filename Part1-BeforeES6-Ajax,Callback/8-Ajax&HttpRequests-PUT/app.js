class Request {
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    put(url, data, callback){
        this.xhr.open("PUT", url)
        this.xhr.setRequestHeader("Content-Type", "application/json")
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText)
            }else{
                callback("Herhangi bir hata alındı!", null)
            }
        }


        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()
const data = {
    "userId": 10,
    "title": "Kerem PARLAK"
}


request.put("https://jsonplaceholder.typicode.com/albums/1",data, function(err, response) {
    if (err === null) {
        console.log(response)
    } else {
        console.log(err)
    }
})