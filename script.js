window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos);

    // Crear handler para el formulario
    let formulario = document.querySelector('.create-card-form form');
    formulario.addEventListener('submit', crearNuevaTarjeta);

    // Añadir eventos a los botones de ordenación
    let botonOrdenarAZ = document.querySelector('.sort-btn:nth-of-type(1)');
    let botonOrdenarZA = document.querySelector('.sort-btn:nth-of-type(2)');

    botonOrdenarAZ.addEventListener('click', ordenarNombreAZ); // Ordenar A-Z
    botonOrdenarZA.addEventListener('click', ordenarNombreZA); // Ordenar Z-A
};


function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');

        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de información
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);

        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);

        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');

        // Añadimos info del país
        let pais = document.createElement('div');
        pais.classList.add('info-pais');
        pais.innerHTML = `
            <img src="${filosofo.pais.bandera}" alt="Bandera de ${filosofo.pais.nombre}">
            <span class="pais">${filosofo.pais.nombre}</span>`;
        filaInfo.append(pais);

        // Añadimos info de la corriente filosófica
        let corriente = document.createElement('div');
        corriente.classList.add('info-corriente');
        corriente.innerHTML = `<span>Corriente: </span><span class="corriente">${filosofo.corriente}</span>`;
        filaInfo.append(corriente);

        // Añadimos info del arma principal
        let arma = document.createElement('div');
        arma.classList.add('info-arma');
        arma.innerHTML = `<span>Arma: </span><span class="arma">${filosofo.arma}</span>`;
        filaInfo.append(arma);

        info.append(filaInfo);

        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);

        // Añadimos una a una las habilidades
        filosofo.habilidades.forEach((habilidad) => {
            let skill = document.createElement('div');
            skill.classList.add('skill');
            skill.innerHTML = `
                <img src="https://via.placeholder.com/16" alt="Icono de ${habilidad.habilidad}">
                <span class="skill-name">${habilidad.habilidad}</span>
                <div class="skill-bar">
                    <div class="level" style="width: ${habilidad.nivel * 25}%"></div>
                </div>`;
            habilidades.append(skill);
        });

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    });
}


function eliminarTarjeta(event) {
    let tarjeta = event.target.parentElement; // La tarjeta es el padre del botón
    tarjeta.remove(); // Elimina la tarjeta del DOM
}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    tarjetasOrdenadas.forEach(tarjeta => {
        contenedor.appendChild(tarjeta);
    });
}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });

    // Eliminar todas las tarjetas actuales
    let contenedor = document.querySelector('.cards-container');
    contenedor.innerHTML = '';

    // Añadir las tarjetas ordenadas
    tarjetasOrdenadas.forEach(tarjeta => {
        contenedor.appendChild(tarjeta);
    });
}
function crearNuevaTarjeta(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Crear un nuevo objeto filósofo a partir de los valores del formulario
    let nuevoFilosofo = {
        nombre: document.querySelector('.create-card-form .nombre').value,
        imagen: document.querySelector('.create-card-form .foto').value,
        pais: {
            nombre: document.querySelector('.create-card-form .pais').value,
            bandera: document.querySelector('.create-card-form .bandera').value
        },
        corriente: document.querySelector('.create-card-form .corriente').value,
        arma: document.querySelector('.create-card-form .arma').value,
        habilidades: [] // Por simplicidad, dejamos habilidades vacías
    };

    // Añadir habilidades del formulario
    let nivelesHabilidades = document.querySelectorAll('.create-card-form .skills');
    let nombresHabilidades = ["Sabiduría", "Oratoria", "Lógica", "Innovación"];

    nivelesHabilidades.forEach((input, index) => {
        nuevoFilosofo.habilidades.push({
            habilidad: nombresHabilidades[index],
            nivel: parseInt(input.value, 10) // Convierte el valor a número
        });
    });

    // Crear la nueva tarjeta en el DOM
    crearTarjetas([nuevoFilosofo]);

    // Limpiar el formulario después de enviarlo
    document.querySelector('.create-card-form form').reset();
}

function parsearTarjetas(tarjetas){
    let filosofosParseados = [];
    for (let tarjeta of tarjetas){
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        // Completar funció
        
        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades){
            let habilidadParaGuardar = {};
            // Completar funció
        }
        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}

function guardarTarjetas(){
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));
}


function cargarTarjetas() {
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]