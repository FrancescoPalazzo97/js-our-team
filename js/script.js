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
    const card = `<div id="cards" class="d-flex">
                    <div class="card d-flex">
                        <div class="card-image">
                            <img src="./img/${obj.image}" alt="" class="w-100" id="image">
                        </div>
                        <div class="card-content d-flex align-items-center">
                            <ul>
                                <li>
                                    <h3 id="name">${obj.name}</h3>
                                </li>
                                <li id="role">
                                    ${obj.role}
                                </li>
                                <li id="email">
                                    <address><a href="#">${obj.email}</a></address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`

    return card

}

for (i = 0; i < teamMembers.length; i++){
    createCard(teamMembers[i])
}