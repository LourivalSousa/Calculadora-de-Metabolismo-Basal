let grafico; 

function getUserInput(){
    const user = {
        idade: document.getElementById("idade").value,
        peso: document.getElementById("peso").value,
        altura:document.getElementById("altura").value,
        sexo: document.getElementById("MorF").value
    }
    return user;
}

function calcularCal() {
    const user = getUserInput();
    if(user.sexo=='M'){
        return calcularM(user); 
    }else{
        return calcularF(user);
    }

}

function mostrarInformacoes(){
    const tmb = calcularCal();
    mudarHtml(tmb);
    MostrarGrafico();
    scrollTograph();    
}

function calcularM(user){
    return Math.floor((66.5 + (13.8 * user.peso) + (5 * user.altura) - (6.8 * user.idade)));
}

function calcularF(user){
    return Math.floor((665.1 + (9.563 * user.peso) + (1.850 * user.altura ) - (4.676 * user.idade)));
    
}

function mudarHtml(tmb){
    const canvas = document.getElementById("graficoContainer");
    canvas.style.display = "inline";
    const texto = document.getElementById("textoTmb");
    texto.innerHTML = `<p> Taxa de metabolismo basal: ${tmb} calorias</p>`
    texto.innerHTML += `<p> Nenhuma atividade física: ${tmb+((tmb*25)/100)} calorias </p>`
    texto.innerHTML += `<p> Atividade Moderada: ${tmb+((tmb*35)/100)} calorias </p>`      
    texto.innerHTML += `<p> Atividade Intensa: ${tmb+((tmb*45)/100)} calorias </p>`  
}
function scrollTograph(){
    const target = document.getElementById("graficoContainer").offsetTop;
    
    window.scrollTo({
        top: target -250,
        behavior: "smooth"
    })
}


 
function calcularProteina(){
    const user = getUserInput();
    const gramasDeProteinaPorKg = 2;
    return (user.peso * gramasDeProteinaPorKg);
}

function calcularGordura(){
    const user = getUserInput();
    return (user.peso*1);

}

function calcularCarbo(){
    const tmb = calcularCal();
    // converte as gramas de proteina e gordura de volta para medida em calorias
    const caloriasProteina = calcularProteina()*4;
    const caloriasGordura = calcularGordura()*9;
    return (tmb - (caloriasProteina + caloriasGordura)); 
}


function MostrarGrafico(){    
    const dados = Array(calcularProteina(),calcularCarbo(),calcularGordura());

    if(grafico!==undefined) {
        grafico.destroy(); 
    }
    grafico = criarGrafico();   
    addData(grafico,dados);
}
