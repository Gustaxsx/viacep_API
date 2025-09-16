'use strict'

async function pesquisarCep(cep) {

    const url = `https://viacep.com.br/ws/${cep}/json`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function prencherCampos({ target }) {

    let infoCep = await pesquisarCep(target.value)
    console.log(infoCep.logradouro)
    document.getElementById('endereco').value = infoCep.logradouro
    document.getElementById('bairro').value = infoCep.bairro
    document.getElementById('cidade').value = infoCep.localidade
    document.getElementById('estado').value = infoCep.uf

}

document.getElementById('cep')
    .addEventListener('focusout', prencherCampos)

