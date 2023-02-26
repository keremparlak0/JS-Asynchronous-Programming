// Select Elments

const githubForm = document.querySelector('#github-form')
const nameInput = document.querySelector('#githubname')
const clearLastUsers = document.querySelector('#clear-last-users')
const lastUsers = document.querySelector('#last-users')



const github = new GitHub()
const ui = new UI()



const getData = (e) => {
    let username = nameInput.value.trim()

    if (username === "") {
        alert('Geçerli bir kullanıcı adı giriniz.')
    }else{
        github.getGithubData(username)
            .then(response => {
                if (response.user.message !== 'Not Found') {
                    ui.showUserInfo(response.user)
                    ui.showRepoInfo(response.repo)
                }else{
                    ui.showError('Geçerli bir kullanıcı adı giriniz.')
                }
            })
            .catch(err => ui.showError(err))
    }

    ui.clearInput()
    e.preventDefault()   
}
// const clearAllSerached = (e) => {
    
// }
// const getrAllSerached = (e) => {
    
// }

eventListeners()
function eventListeners(){
    githubForm.addEventListener('submit', getData)
    // clearLastUsers.addEventListener('click', clearAllSerached)
    // document.addEventListener('DOMContentLoaded', getAllSearched)
}
