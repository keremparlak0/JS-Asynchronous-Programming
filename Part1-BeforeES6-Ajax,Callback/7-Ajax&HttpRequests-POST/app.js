class Request {
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    post(url, data, callback){
        this.xhr.open("POST", url)
        this.xhr.setRequestHeader("Content-Type", "application/json")//JSON verisi

        this.xhr.onload = () => {
            if (this.xhr.status == 201) { //201-created
                callback(null, this.xhr.responseText)
            }else{
                callback("Herhangi bir hata oluştu", null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()
let data = {
    "userId": 2,
    "title": "KEREM PARLAK"
}
request.post("https://jsonplaceholder.typicode.com/albums",data,function(err, response) {
    if (err == null) {
        console.log(response)
    } else {
        //fail
        console.log("err")
    }
})