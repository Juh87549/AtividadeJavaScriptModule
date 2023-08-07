function mostrarPopUp() {
  document.getElementById('popUpContainer').style.display='block'
}

function voltarPopUp() {
  document.getElementById('popUpContainer').style.display='none'
}

function salvarPerfil() {
  //Obter os valores preenchidos nos campos
  const nomeCompleto = document.getElementById('nomeCompleto').value;
  const cpf = document.getElementById('cpf').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const email = document.getElementById('email').value;
  const tipoSanguineo = document.getElementById('tipoSanguineo').value;
  const celular = document.getElementById('celular').value;
  const endereço = document.getElementById('endereço').value;

  //Fazer algo com as informaçoes (por exemplo, enviar para um servidor)
  console.log("Nome Completo: ", nomeCompleto);
  console.log("CPF: ",cpf);
  console.log("Data de Nascimento", dataNascimento);
  console.log("E-mail: ", email);
  console.log("Tipo Sanguíneo: ", tipoSanguineo);
  console.log("Celular: ", celular);
  console.log("Endereço: ", endereço);

  //Fechar o pop-up após salvar
  fecharPopUp();
}