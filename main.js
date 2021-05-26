const nombre = document.querySelector(".nombre");
const numero = document.querySelector(".numero");
const direccion = document.querySelector(".direccion");
const btnAddContact = document.querySelector(".btn-add-contact");

const listado = document.querySelector(".listadoContactos");

const db = window.localStorage;

btnAddContact.onclick = () => {
    vForm();
}

listarContactos(db, listado);

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName === "Enter"){
        vForm();
    }
  });

  const vForm = () =>{
    if(nombre.value == "" || numero.value =="" || direccion.value == ""){
        window.alert("Rellene el formulario.");
    } else{
        if(vName(nombre.value)){
            if(vNum(numero.value)){
                if(vDirecction(direccion.value)){
                    let contacto = {
                        id: Math.random(1,100),
                        nombre: nombre.value,
                        numero: numero.value,
                        direccion: direccion.value,
                    }
                    guardarContacto(db, contacto);
                } else{
                    window.alert("Dirección no valida.");
                }
            } else{
                window.alert("Número no valido.");
            }
        } else{
            window.alert("Nombre no valido.");
        }
    }
  }
