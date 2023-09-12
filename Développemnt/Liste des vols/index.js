let container = [];
// let monheure = new Date();
// let hrs = monheure.getHours();
// let min = monheure.getMinutes();
// let sec = monheure.getSeconds();



function fillTable(_data){
    container = _data;
    let montab = document.querySelector('#flights');

    let monBody = montab.createTBody();
    monBody.setAttribute("id", "body");



    for (let i = 0; i < _data.length; i++){

        let maligne = monBody.insertRow();

        let monObjet= _data[i];
        maligne.setAttribute("id", "ligne"+ monObjet.flight_id);
        for(let i = 0; i < 13; i++){
            switch (i){
                case 0:
                    let macellule = maligne.insertCell();
                    macellule.innerText = monObjet.flight_id;
                    break;
                case 1: 
                    let macellule1 = maligne.insertCell();
                    macellule1.innerText = monObjet.start_city;
                    break;  
                case 2:
                    let macellule2 = maligne.insertCell();
                    macellule2.innerText = monObjet.arrival_city;
                    break;
                case 3:
                    let macellule3 = maligne.insertCell();
                    macellule3.innerText = monObjet.start_time;
                    break;
                case 4: 
                    let macellule4 = maligne.insertCell();
                    macellule4.innerText = monObjet.arrival_time;
                    break;  
                case 5:
                    let macellule5 = maligne.insertCell();
                    macellule5.innerText = monObjet.flight_duration;
                    break;
                case 6:
                    let macellule6 = maligne.insertCell();
                    macellule6.innerText = monObjet.airline_name;
                    break;
                case 7: 
                    let macellule7 = maligne.insertCell();
                    macellule7.innerText = monObjet.plane_maker;
                    break;  
                case 8:
                    let macellule8 = maligne.insertCell();
                    macellule8.innerText = monObjet.plane_ref;
                    break;
                case 9:
                    let macellule9 = maligne.insertCell();
                    macellule9.innerText = monObjet.plane_type;
                    break;
                case 10:
                    let macellule10 = maligne.insertCell();
                    macellule10.innerText = monObjet.plane_capacity;
                    break;
                case 11: 
                    let macellule11 = maligne.insertCell();
                    macellule11.innerText = monObjet.seats_free;
                    break;
                
                    
            }

        }     
        
    }
}





fetch("flights.json")
.then(response => response.json())
.then(response => fillTable(response))
.catch(error => alert("Erreur ; " + error));