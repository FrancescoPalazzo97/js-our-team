const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

// Functions
// Funzione per creare la stringa da aggiungere successivamente
const createCard = (obj) => { 

    const { name, role, email, img} = obj

    const card = `<div class="card d-flex">
                        <div class="card-image">
                            <img src="../${img}" alt="" class="w-100">
                        </div>
                        <div class="card-content d-flex align-items-center">
                            <ul>
                                <li>
                                    <h3>${name}</h3>
                                </li>
                                <li>
                                    ${role}
                                </li>
                                <li>
                                    <address><a href="#">${email}</a></address>
                                </li>
                            </ul>
                        </div>
                    </div>`;

    console.log(card)

    return card;

}

//Funzione che aggiunge la stringa generata dalla funzione createCard alla sezion cards del documento
const printCard = (arr) => {
    let cards = ``;

    for (i = 0; i < arr.length; i++){
        cards += createCard(arr[i]);
    }

    console.log(cards)

    document.getElementById(`cards`).innerHTML = cards;
    
}

const addMember = (e) => {
    e.preventDefault();
    
    // Recupero i valori inseriti nella form
    const name = document.getElementById(`name`).value;
    const role = document.getElementById(`role`).value;
    const email = document.getElementById(`email`).value; 
    const img = document.getElementById(`img`).value;

    // Controllo i valori inseriti
    if (!name || !role || !email || !img) {
        alert(`Completa tutti i campi`);
        return
    }


    // Creo il nuovo object
    const newMember = {
        name,
        role,
        email,
        img
    };

    console.log(newMember)

    // Inserisco il nuovo object nell'array
    teamMembers.push(newMember);

    e.target.reset();

    printCard(teamMembers);
}

printCard(teamMembers) // Richiamo la funzione

document.querySelector(`form`).addEventListener(`submit`, addMember);
 
 
