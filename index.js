var inputTarefa = document.getElementById("input-tarefa");
var btnAddTarefa =  document.getElementById("btn-add-tarefa");
var ulTarefa =  document.getElementById("lista-tarefas");
var body = document.getElementById("body")
var main = document.getElementById("main")
var idTarefa = 0;
var modoDark = true;

btnAddTarefa.addEventListener("click", ()=>{
    if(inputTarefa.value != ""){
        idTarefa++;
    var li =document.createElement("li");
    li.id = idTarefa;
    li.innerHTML = `${inputTarefa.value} <button onclick="removerTarefa(event)" ><img class="icone-remover" name=${idTarefa} src="img/cruz.png"></button>`;
    ulTarefa.appendChild(li);
    inputTarefa.value = ""
    }
    else{
    alert("Digite sua tarefa!")
}
});

function removerTarefa(event){
var elementoParaRemover = document.getElementById(event.target.name)
console.log(elementoParaRemover)
console.log(event.target)
elementoParaRemover.remove();
}

var iconeTema = document.getElementById("icone-tema")
console.log(iconeTema)

iconeTema.addEventListener("click",  mudaTema);

function mudaTema(){
    if (modoDark == true){
        main.style.backgroundColor= `rgb(219, 164, 144)`;
        body.style.backgroundImage= `url("img/claro.jpg")`;
        modoDark = false;
    }
    else{
        main.style.backgroundColor= `rgb(60, 60, 60)`;
        body.style.backgroundImage= `url("img/escuro.jpg")`;
        modoDark = true;
    }
    
}

inputTarefa.addEventListener("keypress", (event) =>{
    if (event.key == "Enter"){
        if(inputTarefa.value != ""){
            idTarefa++;
        var li =document.createElement("li");
        li.id = idTarefa;
        li.innerHTML = `${inputTarefa.value} <button onclick="removerTarefa(event)" ><img class="icone-remover" name=${idTarefa} src="img/cruz.png"></button>`;
        ulTarefa.appendChild(li);
        inputTarefa.value = ""
        }
        else{
        alert("Digite sua tarefa!")
    }
    }
})