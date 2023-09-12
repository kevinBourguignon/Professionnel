let container = [];

function fillTable(_data){

    container = _data;
    let montab = document.querySelector('#legu');

    let monBody = montab.createTBody();
    monBody.setAttribute("id", "body");

    for (let i =0; i < _data.length; i++){

        let maligne = monBody.insertRow();

        let monObjet = _data[i];
        maligne.setAttribute("id", "ligne" + monObjet.Id);

        for(let i = 0; i < 7; i++){
            switch (i){
                case 0:
                    let macellule = maligne.insertCell();
                    macellule.innerText = monObjet.Name;
                    break;
                case 1:
                    let macellule1 = maligne.insertCell();
                    macellule1.innerText = monObjet.Variety;
                    break;
                case 2:
                    let macellule2 = maligne.insertCell();
                    macellule2.innerText = monObjet.PrimaryColor;
                    break;
                case 3:
                    let macellule3 = maligne.insertCell();
                    macellule3.innerText = monObjet.LifeTime;
                case 4:
                    let macellule4 = maligne.insertCell();
                    macellule4.innerText = monObjet.Fresh;
                    
            }

        }
    }
}

fetch("legumos.json")
.then(response => response.json())
.then(response => fillTable(response))
.catch(error => alert("Erreur ; " + error));