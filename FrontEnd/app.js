// Método GET
async function getAllUsers() {

  let url = "http://127.0.0.1:3000/users/getAllUsers";
  let resp = await fetch(url);
  let data = await resp.json();

  for (let i = 0; i < data.length; i++) {
    let usuario = data[i];
    let linha = `
      <tr>
        <td>${usuario.name}</td>
        <td>${usuario.age}</td>
        <td>${usuario.email}</td>
        <td class="actions">
          <button class="btn btn-edit" onclick="editUser('${usuario.id}', '${usuario.name}', '${usuario.age}', '${usuario.email}' )">Editar</button>
          <button class="btn btn-delete" onclick="deleteUser('${usuario.id}')">Excluir</button>
        </td>
      </tr>
    `

    let container = document.querySelector("#user-table-body")
    container.innerHTML += linha

  }

}
getAllUsers();

// Método POST
async function createUser() {

  let url = "http://127.0.0.1:3000/users/createUser";

  let nome = document.querySelector("#nome").value;
  let idade = document.querySelector("#idade").value;
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  let body = {
    "name": nome,
    "age": idade,
    "email": email,
    "password": senha
  }

  let resp = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body)
  })

}

// Preenche o formulário com os dados do usuário
function editUser (id, name, age, email) {

  document.querySelector("#user-id").value = id;
  document.querySelector("#nome").value = name;
  document.querySelector("#idade").value = age;
  document.querySelector("#email").value = email;
  document.querySelector("#senha").value = "";
  
}

//Método PUT

async function updateUser() {
  let id = document.querySelector("#user-id").value;
  let url = "http://127.0.0.1:3000/users/updateUser/" + id;

  let body = {
    "name": document.querySelector("#nome").value,
    "age": document.querySelector("#idade").value,
    "email": document.querySelector("#email").value,
    "password": document.querySelector("#senha").value
  }

  let resp = await fetch (url, {
    method: "PUT",
    headers: { "Content-type":"application/json" },
    body: JSON.stringify(body)

  });
}

// Método DELETE
async function deleteUser(id) {
  let url = "http://127.0.0.1:3000/users/deleteUser/" + id;
  let resp = await fetch(url, {
    method: "DELETE"
  })
  window.location.reload();
}

//Lógica do botão salvar

async function saveUser () {
  let id = document.querySelector("#user-id").value;

  if (id) {
    await updateUser();
    showToast("Usuário editado com sucesso! ✏️")
  } else {
    await createUser();
    showToast("Usuário salvo com sucesso! ✅")
  }

  setTimeout (() => {
    window.location.reload();
  }, 1500);
}

//Função de notificação

function showToast (message) {
  let toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("success")
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}