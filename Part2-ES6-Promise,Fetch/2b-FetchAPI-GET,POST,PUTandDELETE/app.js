class Request {
    get(url) { //Get Request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: {
                    'Content-type': 'application/json; chatset=UTF-8',
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({data}),
                headers: {
                    'Content-type': 'application/json; charset= UTF-8'
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
        
    }
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE'
            })
            .then(response =>{
                return response.json()
            })
            .then(data => resolve("Data Deleted"))
            .catch(err => reject(err))
        })
        
    }
}
const request = new Request()
let albums

///////////GET REQUEST///////////
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => {
//     albums = data
//     console.log(albums)
// })
// .catch(err => console.error(err))
// console.log(albums) // Asenkron bir işlem olduğu için consola 'undefined'
// çıktısı verecek. Bu yüzden then'in içine yazmalıyız 
//////////////////////////////////
///////////POST REQUEST///////////
// request.post("https://jsonplaceholder.typicode.com/albums", {
//     title: "Kerem",
//     userId: 1
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))
//////////////////////////////////
///////////PUT REQUEST///////////
// request.put("https://jsonplaceholder.typicode.com/albums/1", {
//     "userId": 1,
//     "title": "Kerem PARLAK"
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))
//////////////////////////////////
///////////DELETE REQUEST///////////
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.error(err))
//////////////////////////////////