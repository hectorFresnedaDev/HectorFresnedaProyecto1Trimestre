var flag=true;
function validar(){
    validarNombre();
    console.log(flag);
    validarDni();
    console.log(flag);

    if(flag==true){
       document.getElementById("botonGenerar").disabled=false; 
    }
}
function error(msg,elemento){
    var texto=document.createTextNode(msg);
    elemento.appendChild(texto);
}

function validarNombre(){
    var nombre=document.formFactura.nombre.value;
    if(nombre.length==0){
        console.log("Nombre error vacio");
        error("Nombre Vacio",document.getElementById("divNombre"));
        flag=false;
    }else if(nombre==""||nombre==" "||nombre=="  "||nombre=="   "||nombre=="    "||nombre=="     "){
        error("El campo no puede contener solo espacios",document.getElementById("divNombre"));
        flag=false;
    }else{
        flag=true;
        
    }
}
function validarDni(){
    var dni=document.formFactura.dni.value;
    var arrDni=dni.split("");
    var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var numero=0;
    if(dni.length==9 || (dni=!" "||dni!=""||dni!="  "||dni!="   "||dni!=null)){
        if(dni.toUpperCase().startsWith("X")){
            arrDni[0]=0;
        }else if(dni.toUpperCase().startsWith("Y")){
            arrDni[0]=1;
        }else if(dni.toUpperCase().startsWith("Z")){
            arrDni[0]=2;
        }
        for(i=0;i<arrDni.length-1;i++){
            numero=numero+arrDni[i]
        }
        var letra=numero%23;
        if(arrDni[8].toUpperCase()!=letras[letra]){
            console.log("error dni mal");
            error("El DNI introducido no es correcto",document.getElementById("divDni"));
        }else{
            flag=true;
        }
        console.log(numero);
    }else{
        error("No puedes dejar este campo vacio",document.getElementById("divDni"));
    }
}
function validarDir(){
    var direccion=document.formFactura.direccion;
    if(direccion.lenght<=0){
        error("");
    }
}