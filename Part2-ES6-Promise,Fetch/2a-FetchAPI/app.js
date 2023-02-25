function getTextFile() {// Text File
    fetch("example.txt")
    .then(response => {        
        return response.text()
    })
    .then(data => console.log(data))
    .catch(err => console.error(err))


}
function getJsonFile() {// JSON File
    fetch("example.json")
    .then(response => response.json()) //return
    .then(data => console.log(data))
    .catch(err => console.error(err, "Bir hata Oluştu!"))
}

function getExternalAPI() {
    fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live")
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data.result[0]))
    .catch(err => console.error(err, "Bir hata Oluştu!"))
}
// getTextFile()
// getJsonFile()
getExternalAPI()