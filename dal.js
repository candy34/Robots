const {users} = require('./data')

function getUsers (){
    return users
}

function getUser (userId) {
    let chosenUser = {}
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            chosenUser = users[i]
        }
    }
    return chosenUser
}


function addUser (newUser) {
    users.users.push(newUser)
    return users.users
}
function deleteUser () {

}
function updateUser () {
}

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}

