var prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];



const tickets = [];
let ticketanuller = [];
let choice;
function menu() {
    console.log("1/ afficher les trajet.");
    console.log("2/ acheter un ticket. ");
    console.log("3/ afficher les ticket. ")
    console.log("4/ annuler un ticket.  ");
    console.log("5/ rechercher un ticket. ");
    console.log("6/ filtrer les  trajets.  ");
    console.log("7/ trier les trajets. ");
    console.log("8/ statistique: ");
    console.log("0/ quiter les programe. ")
};
do {
    menu();
    choice = Number(prompt("Entrez choix: "));
    switch (choice) {
        case 1:
            affichertrajet();
            break;
        case 2:
            achiter();
            break;
        case 3:
            afficherticket();
            break;
        case 4:
            annulerticket();
            break;
        case 5:
            rechercher();
        break;
        case 6:
            filtrer();
             break;
        case 7:
            trier();
            break;
        case 8:
            statistique();
            break;
        
    }

} while (choice != 0);

function affichertrajet() {
    console.log(trips)
};
function achiter() {

    var nomber = Number(prompt("entrez le id de trajet: "));
    var nom = prompt("enter le nom de passengeur: ");
    nom = nom.toLowerCase();
    exist = false;
    let seates;
    let tids;
  
    for (let i = 0; i < trips.length; i++) {
        
        if (trips[i].id === nomber ) {
            if (trips[i].availableSeats>=1){
               
                   if (ticketanuller.length!=0){
                     for (let j=0;j<ticketanuller.length;j++){
                        if (ticketanuller[j].tripid=nomber){
                             seates=ticketanuller[j].seate
                             tids=ticketanuller[j].tid

                    ticketanuller.splice(j,1)}}

                        }
                   
                                               
                    else {seates=trips[i].availableSeats;tids=tickets.length +1}
              
                
                 
                var ticket = {
                tid: tids,
                name: nom,
                departure: trips[i].departure,
                destination: trips[i].destination,
                tripid: trips[i].id,
                seate:  seates,

                
                price: trips[i].price

            };
              
            tickets.push(ticket)
            trips[i].availableSeats = trips[i].availableSeats - 1;
            console.log(ticket);
            exist = true;
           break;
            } else { console.log("the trip is full")}
            
        }
        
        
        } if (!exist){ console.log("no trips availibel: ")};
        
    };

function afficherticket() {
    for (let i=0;i<tickets.length;i++){
        console.log(`----------------------\n#ticket id :${tickets[i].tid}\n#trajet : ${tickets[i].tripid}\n${tickets[i].
            departure}-->${tickets[i].destination}\npassageur : ${tickets[i].name}\nplace: ${tickets[i].
                seate}\nprix : ${tickets[i].price}\n-------------------
            
            `)

    }
    








};
function annulerticket() {
    let ticketid = Number(prompt("entre the number of the ticket: "));
    
    for(let i=0;i<tickets.length;i++){
        let l = tickets[i].tripid-1;
        if (ticketid===tickets[i].tid){
            ticketanuller.push(tickets[i])
            tickets.splice(i,1)
            trips[l].availableSeats +=1
            console.log("the ticket have been deleted. ")
        }
    }

};
function rechercher(){
    let nomrechercher = prompt("enter le nom de passageur: ");
    nomrechercher = nomrechercher.toLowerCase();
    let trouver = false;
    for (let i= 0; i<tickets.length;i++){
        if (tickets[i].name===nomrechercher){
            console.log(tickets[i])
            trouver= true;
            
        }
        
    }if(!trouver){console.log("there is no ticket")}
        
};
function filtrer(){
    let city = prompt("entre la ville de depart: ");
    let existtrip =false;
   for (let i=0; i<trips.length;i++){
    let depar = trips[i].departure;
    depar = depar.toLowerCase();
        if(depar===city){
            console.log(trips[i].departure+"==>"+trips[i].destination +" : "+ trips[i].price);
            existtrip =true;
      }
    }if (!existtrip){console.log("there is no trips of that departeur. ")}
};
function trier(){
    let order;
    function monotonie(){
        console.log("1/ croissant: ");
        console.log("2/ decroissant: ")

    }
    do {
        monotonie();
         order = Number(prompt("Entrez l'ordre: "));
        switch(order){
            case 1:
                croissant();
                break;
            case 2 :
                decroissant();
                break;


        }
    }while(order===1 || order===2)

        function croissant(){
            let system = trips ;
            let tri;
            let sewaped;
            do{ sewaped = false;
                for (let i=0;i<system.length -1;i++){
                    for (let j=0;j<system.length-i -1;j++){
                        if(trips[j].price>system[j+1].price){
                            tri = system[j+1];
                            system[j+1] =system[j];
                            system[j] = tri;
                            sewaped = true;
                        }
                    }
                }
            }while(sewaped)
                for(let i=0;i<system.length;i++)
            {console.log(system[i].departure+"==>"+system[i].destination +" : "+ system[i].price);}
        
        } 
        function decroissant(){
            let system =trips
            let tri;
            let sewaped;
            do{ sewaped = false;
                for (let i=0;i<system.length-1;i++){
                    for (let j=0;j<system.length-i-1;j++){
                        if(system[j].price<system[j+1].price){
                            tri = system[j+1];
                            system[j+1] =system[j];
                            system[j] = tri;
                            sewaped = true;
                        }
                    }
                }
            }while(sewaped)
                 for(let i=0;i<system.length;i++)
            {console.log(system[i].departure+"==>"+system[i].destination +" : "+ system[i].price);}
}}
function statistique(){
    let ticketnumber=0;
    let sommme=0;
    
    for (let i=0;i<tickets.length;i++){
        ticketnumber=tickets.length
        
    }console.log("the number of solde ticketis :"+ticketnumber);
    for (let i=0;i<tickets.length;i++){
        sommme= sommme + tickets[i].price

    } console.log("chiffre d'affaires total est :"+ sommme);
    let sold =0;
    let mostsold =null;


    for (let i=0;i<trips.length;i++){
        cnt = 0;
        for ( let j=0;j<tickets.length;j++){
            if (tickets[j].tripid===trips[i].id){
                cnt+=1
            }
        }
        if (cnt>sold){
            sold=cnt;
            mostsold=trips[i].id
        }
    }
    if(mostsold!=0){console.log("the most sold  trips id is : "+mostsold);}
    else {console.log("no trips sold yet. ")}
    

}
