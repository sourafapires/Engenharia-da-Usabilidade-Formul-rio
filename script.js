const form = document.getElementById("form");
const username  = document.getElementById("username");
const address = document.getElementById("address");
const addressbairro = document.getElementById("address-bairro");
const addresscep = document.getElementById("address-cep");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const tipodeficiencia = document.getElementById("tipo-deficiencia");
const nomecomunidadepcd = document.getElementById("nome-comunidade-pcd");
const nomeprogramasocial = document.getElementById("nome-programa-social");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
}) 

address.addEventListener("blur", () => {
    checkInputAddress();
}) 

addressbairro.addEventListener("blur", () => {
    checkInputAddressBairro();
}) 

addresscep.addEventListener("blur", () => {
    checkInputAddressCep();
}) 

email.addEventListener("blur", () => {
    checkInputEmail();
}) 

telefone.addEventListener("blur", () => {
    checkInputTelefone();
}) 

tipodeficiencia.addEventListener("blur", () => {
    checkInputTipoDeficiencia();
}) 

nomecomunidadepcd.addEventListener("blur", () => {
    checkInputNomeComunidadePCD();
}) 

nomeprogramasocial.addEventListener("blur", () => {
    checkInputNomeProgramaSocial();
}) 

function checkInputUsername()
{
    const usernameValue = username.value;
        if(usernameValue ==="")
            {
                errorInput(username, "O nome do atleta é obrigatório !")
            }
        else
            {   
                const formItem = username.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputAddress()
{
    const addressValue = address.value;
        if(addressValue ==="")
            {
                errorInput(address, "O endereço do atleta é obrigatório !")
            }
        else
            {   
                const formItem = address.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputAddressBairro()
{
    const addressbairroValue = addressbairro.value;
        if(addressbairroValue ==="")
            {
                errorInput(addressbairro, "O bairro do atleta é obrigatório !")
            }
        else
            {   
                const formItem = addressbairro.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputAddressCep()
{
    const addresscepValue = addresscep.value;
        if(addresscepValue ==="")
            {
                errorInput(addresscep, "O CEP do atleta é obrigatório !")
            }
        else
            {   
                const formItem = addresscep.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputEmail()
{
    const emailValue = email.value;
        if(emailValue ==="")
            {
                errorInput(email, "O email do atleta é obrigatório !")
            }
        else
            {   
                const formItem = email.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputTelefone()
{
    const telefoneValue = telefone.value;
        if(telefoneValue ==="")
            {
                errorInput(telefone, "O telefone do atleta é obrigatório !")
            }
        else
            {   
                const formItem = telefone.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputTipoDeficiencia()
{
    const tipodeficienciaValue = email.value;
        if(tipodeficienciaValue ==="")
            {
                errorInput(tipodeficiencia, "O tipo de deficiência do atleta é obrigatório !")
            }
        else
            {   
                const formItem = tipodeficiencia.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputNomeComunidadePCD()
{
    const nomecomunidadepcdValue = email.value;
        if(nomecomunidadepcdValue ==="")
            {
                errorInput(nomecomunidadepcd, "O nome da comunidade PCD do atleta é obrigatório !")
            }
        else
            {   
                const formItem = nomecomunidadepcd.parentElement;
                formItem.className = "form-content"
            }
}

function checkInputNomeProgramaSocial()
{
    const nomeprogramasocialValue = email.value;
        if(nomeprogramasocialValue ==="")
            {
                errorInput(nomeprogramasocial, "O nome do programa social do atleta é obrigatório !")
            }
        else
            {   
                const formItem = nomeprogramasocial.parentElement;
                formItem.className = "form-content"
            }
}

function checkForm()
{
    checkInputUsername();
    checkInputAddress();
    checkInputAddressBairro();
    checkInputAddressCep();
    checkInputEmail();
    checkInputTelefone();
    checkInputTipoDeficiencia();
    checkInputNomeComunidadePCD();
    checkInputNomeProgramaSocial();

    const formItems = form.querySelectorAll(".form-content")
    
    const isValid = [...formItems].every((item)=>{
        return item.className === "form-content"
    }); 

    if(isValid){
        alert("CADASTRADO COM SUCESSO!!!")
    }
}



function errorInput(input, message)
{
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}