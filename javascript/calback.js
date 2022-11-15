















let usuarios = ["Adriano", "Marcia", "José"]

function addUsuario(user, callback) {

    setTimeout(() => { usuarios.push(user); callback() }, 1000)
}

addUsuario('Rulio', () => {
    console.log(usuarios)
})


// function listarUsuarios() {
//     console.log(usuarios)}

// addUsuario("Julio Cesar", listarUsuarios)

