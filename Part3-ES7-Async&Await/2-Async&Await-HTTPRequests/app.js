class Request {
    async get(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => resolve(data.result[0]))
        // })

        const response = await fetch(url) // Response Object
        const responsedata = (await response).json() // JSON Object

        return responsedata
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }) // Response Object
        const responsedata = await response.json()

        return responsedata
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        const responseData = await response.json()

        return responseData
    }

    async delete(url) {
        const response = fetch(url, { method: "DELETE" })
        const responseData = (await response).json()

        return responseData
    }
}
const request = new Request()

request.get("https://jsonplaceholder.typicode.com/todos")
    .then(data => console.log("GET: ", data[0]))
    .catch(err => console.error("Hata"))

request.post("https://jsonplaceholder.typicode.com/todos", { "userId": 1, "title": "Kerem", "complated": true })
    .then(data => console.log("POST: ", data))
    .catch(err => console.error("Hata"))

request.put("https://jsonplaceholder.typicode.com/todos/1", { "userId": 1, "title": "Ayşe", "complated": false })
    .then(data => console.log("PUT: ", data))
    .catch(err => console.error("Hata"))

request.delete("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log("DELETE: ", data))
    .catch(err => console.error("Hata"))