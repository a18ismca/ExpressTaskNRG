

const loadUsers = () => {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/users", false);
    xhttp.send();

    const users = JSON.parse(xhttp.responseText);

    for (let user of users){
        const userDatabase = `
        <tr>
            <td class="user-name">${user.name}</td>
            <td class="user-alias">${user.alias}</td>
            <td class="user-pwd">${user.password}</td>
            <td class="user-confirmpwd">${user.confirmpwd}</td>
            <td><button>Edit stats</button></td>
        </tr>
        `
        document.getElementById('listOfUsers').innerHTML = document.getElementById('listOfUsers').innerHTML + userDatabase;


    }

}
loadUsers()