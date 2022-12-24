function fValorCorrida(distancia,bandeira){
    let valor;
    if (bandeira == 1){
    valor = distancia * 5;
    }
    else{
    if (bandeira == 2){
    valor = distancia * 7;
    }
    }
    return valor;
    }
    function fLerDistancia(){
    let distancia;
    do{
    if (distancia != undefined){
    alert("Valor informado é inválido... tente outra vez...");
    }
    distancia = prompt("Informe a distancia");
    }while (!Number(distancia));
    return distancia;
    }
    function fLerBandeira(){
    let bandeira;
    do{
    if (bandeira != undefined){
    alert("Valor informado é inválido... tente outra vez...");
    }
    bandeira = prompt("Informe a bandeira");
    }while (!Number(bandeira) || bandeira < 1 || bandeira > 2);
    return bandeira;
    }
    alert(fValorCorrida(fLerDistancia(),fLerBandeira()));



