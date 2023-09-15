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

        for(let i = 0; i < 6; i++){
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
                    break;
                case 4:
                    let macellule4 = maligne.insertCell();
                    macellule4.innerText = monObjet.Fresh;
                    break;
                case 5:
                    let macellule5 = maligne.insertCell();
                    let monButton = document.createElement("input");
                    monButton.setAttribute("type", "button");
                    monButton.setAttribute("class", "btn btn-link");
                    monButton.setAttribute("id", "btn_edite" + monObjet.Id);
                    monButton.value = "Editer";
                    macellule5.appendChild(monButton);
                    monButton.addEventListener("click", function(){
                        console.log("ok");
                            let editligne = document.querySelector("#ligne"+ monObjet.Id);
                           
                    });

                    let monBtn = document.createElement("input");
                    monBtn.setAttribute("type", "button");
                    monBtn.setAttribute("class", "btn btn-link");
                    monBtn.setAttribute("id", "btn_supprimer" + monObjet.Id);
                    monBtn.value = "Supprimer";
                    macellule5.appendChild(monBtn);
                    monBtn.addEventListener("click", function(){
                        let deleteligne = document.querySelector("#ligne"+ monObjet.Id);
                        deleteligne.remove();
                    }); 
                    break;

                default:
                    break;

                    
            }
        }
    }
}

function trieCroissant() {
    let sortie= container.sort((a,b) => a.Name - b.Name);
    console.log(sortie);
    return sortie;
   } 
    document.querySelector("#trie").addEventListener("click", function(){
    let reservoire = trieCroissant();
    let montab = document.querySelector("#body");
    montab.remove;
    fillTable(reservoire);
    
})



function trieDecroissant() {
    let sortie = container.sort((b, a) => b.Name - a.Name);
    console.log(sortie);
    return sortie;
}

document.querySelector("#trie").addEventListener("dblclick", function(){
    let reservoire = trieDecroissant();
    let montab = document.querySelector("#body");
    montab.remove();
    fillTable(reservoire);
})


fetch("legumos.json")
.then(response => response.json())
.then(response => fillTable(response))
.catch(error => alert("Erreur ; " + error));

