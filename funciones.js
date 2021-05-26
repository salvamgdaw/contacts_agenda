const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const listarContactos = (db, parentNode) =>{
    let cont=0;
    let keys = Object.keys(db);
    for(key of keys){
        let contacto = JSON.parse(db.getItem(key));
        crearContacto(parentNode, contacto, db);
        cont++;
    }

    if(cont == 0){
        noContacts(parentNode);
    }
}

const noContacts = (parentNode) =>{
    let divNoContacts = document.createElement('div');
    let content = document.createElement('h1');
    content.innerHTML = "No hay contactos";
    divNoContacts.appendChild(content);
    divNoContacts.classList.add('noContacts');
    parentNode.appendChild(divNoContacts)
}

const crearContacto = (parentNode, contacto, db) =>{

    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('contacto');
    iconoBorrar.classList.add('material-icons', 'icono');

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id);
        window.location.href = '/';
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);
}

const vName = (name) =>{
    let res=0;
    if(/^[a-z ,A-Z]{3,16}/i.test(name)){
        res = 1;
    }
    return res;
}

const vNum = (number) =>{
    let res=0;
    if(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(number)){
        res = 1;
    }
    return res;
}

const vDirecction = (direcction) =>{
    let res=0;
    if(/^[a-z ,A-Z]+[0-9]{1,3}$/i.test(direcction)){
        res = 1;
    }
    return res;
}