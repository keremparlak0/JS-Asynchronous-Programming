class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }
    //Get Request
    get(url, callback){
        this.xhr.open("GET", url)

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText)
            }else{//exception
                callback("Herhangi bir hata oluştu!", null)
            }
        }//or .bind(this)
        
        this.xhr.send()
    }
    

}
const request = new Request()
// request.get("https://jsonplaceholder.typicode.com/albums", function(err, response) {
//     if (err === null) {
//         //success
//         console.log(response)
//     } else {
//         //fail
//         console.log(err)
//     }
// })


request.get("https://jsonplaceholder.typicode.com/albums/50", function(err, response) {
    if (err === null) {
        //success
        console.log(response)
    } else {
        //fail
        console.log(err)
    }
})
