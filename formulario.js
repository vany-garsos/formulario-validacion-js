const formulario= document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones ={
    nombre: /^[a-zA-Z\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.0]+$/,
    telefono: /^\d{10}$/,
    calle: /^[a-zA-Z0-9#_.+-\s]{1,40}$/,
    codigo: /^\d{5}$/
}

document.addEventListener('DOMContentLoaded', ()=>{
    
        let estadoSeleccionado= document.getElementById("estado");
        let municipioSeleccionado= document.getElementById("municipio");

        function cargarEstados(){
            fetch("https://api.copomex.com/query/get_estados?token=pruebas")
            .then(res => res.json())
            .then(salida =>{ 
                let opciones = `<option value="">Selecciona un Estado</option>`;
                salida.response.estado.forEach(elemento => opciones+=`<option value="${elemento}">${elemento}</option>`);
                estadoSeleccionado.innerHTML = opciones;
            }).catch(function(error){
                alert(error)
            });
        }
        cargarEstados();

        function cargarMunicipios(estado){
            fetch(`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=pruebas`)
            .then(res => res.json())
            .then(salida =>{ 
                let opciones = `<option value="">Selecciona un Municipio</option>`;
                salida.response.municipios.forEach(elemento => opciones+=`<option value="${elemento}">${elemento}</option>`);
                municipioSeleccionado.innerHTML = opciones;
            }).catch(function(error){
                alert(error)
            });
        }
        cargarMunicipios();

        estadoSeleccionado.addEventListener("change", e=> cargarMunicipios(e.target.value));
});


const validarFormulario = (e)=>{
   switch(e.target.name){
        case "correo":
           if(expresiones.correo.test(e.target.value)){
            document.getElementById("correo").classList.remove("error_input");
            document.getElementById("correo").classList.add("validar_input");
            document.getElementById("error_correo").classList.remove("error");
            document.getElementById("error_correo").classList.add("correcto");
           }else{
            document.getElementById("correo").classList.add("error_input");
            document.getElementById("correo").classList.remove("validar_input");
            document.getElementById("error_correo").classList.remove("correcto");
            document.getElementById("error_correo").classList.add("error");
           }
        break;
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("nombre").classList.remove("error_input");
                document.getElementById("nombre").classList.add("validar_input");
                document.getElementById("error_nombre").classList.remove("error");
                document.getElementById("error_nombre").classList.add("correcto");
               }else{
                document.getElementById("nombre").classList.add("error_input");
                document.getElementById("nombre").classList.remove("validar_input");
                document.getElementById("error_nombre").classList.remove("correcto");
                document.getElementById("error_nombre").classList.add("error");
               }
        break;
        case "apellidos":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("apellidos").classList.remove("error_input");
                document.getElementById("apellidos").classList.add("validar_input");
                document.getElementById("error_apellidos").classList.remove("error");
                document.getElementById("error_apellidos").classList.add("correcto");
               }else{
                document.getElementById("apellidos").classList.add("error_input");
                document.getElementById("apellidos").classList.remove("validar_input");
                document.getElementById("error_apellidos").classList.remove("correcto");
                document.getElementById("error_apellidos").classList.add("error");
               }
        break;
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById("telefono").classList.remove("error_input");
                document.getElementById("telefono").classList.add("validar_input");
                document.getElementById("error_telefono").classList.remove("error");
                document.getElementById("error_telefono").classList.add("correcto");
               }else{
                document.getElementById("telefono").classList.add("error_input");
                document.getElementById("telefono").classList.remove("validar_input");
                document.getElementById("error_telefono").classList.remove("correcto");
                document.getElementById("error_telefono").classList.add("error");
               }
        break;
        case "calle":
            if(expresiones.calle.test(e.target.value)){
                document.getElementById("calle").classList.remove("error_input");
                document.getElementById("calle").classList.add("validar_input");
                document.getElementById("error_calle").classList.remove("error");
                document.getElementById("error_calle").classList.add("correcto");
               }else{
                document.getElementById("calle").classList.add("error_input");
                document.getElementById("calle").classList.remove("validar_input");
                document.getElementById("error_calle").classList.remove("correcto");
                document.getElementById("error_calle").classList.add("error");
               }
        break;
        case "ciudad":
            if(expresiones.calle.test(e.target.value)){
                document.getElementById("ciudad").classList.remove("error_input");
                document.getElementById("ciudad").classList.add("validar_input");
                document.getElementById("error_ciudad").classList.remove("error");
                document.getElementById("error_ciudad").classList.add("correcto");
               }else{
                document.getElementById("ciudad").classList.add("error_input");
                document.getElementById("ciudad").classList.remove("validar_input");
                document.getElementById("error_ciudad").classList.remove("correcto");
                document.getElementById("error_ciudad").classList.add("error");
               }
        break;
        case "cp":
            if(expresiones.codigo.test(e.target.value)){
                document.getElementById("cp").classList.remove("error_input");
                document.getElementById("cp").classList.add("validar_input");
                document.getElementById("error_cp").classList.remove("error");
                document.getElementById("error_cp").classList.add("correcto");
               }else{
                document.getElementById("cp").classList.add("error_input");
                document.getElementById("cp").classList.remove("validar_input");
                document.getElementById("error_cp").classList.remove("correcto");
                document.getElementById("error_cp").classList.add("error");
               }
        break;
   }
   
}

function inputcompletado(){
    document.getElementById("correo").classList.remove("validar_input");
    document.getElementById("nombre").classList.remove("validar_input");
    document.getElementById("apellidos").classList.remove("validar_input");
    document.getElementById("telefono").classList.remove("validar_input");
    document.getElementById("calle").classList.remove("validar_input");
    document.getElementById("ciudad").classList.remove("validar_input");
    document.getElementById("cp").classList.remove("validar_input");
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
        
    input.addEventListener('blur', inputcompletado);
});



