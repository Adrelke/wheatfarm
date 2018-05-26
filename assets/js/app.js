// function bake_cookie(name, value) {
//     var cookie = [name, '=', JSON.stringify(value), window.location.host.toString(), '; path=/;'].join('');
//     document.cookie = cookie;
// }

// function read_cookie(name) {
//     var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
//     result && (result = JSON.parse(result[1]));
//     return result;
// }


// Init Data
var wheat = {
    name:'wheat',
    total:0,
    increment:1
},
cow = {
    name:'cow',
    quantity:0,
    increment:0,
    bonus:0
}
tracteur = {
    name:'tracteur',
    quantity:0,
    increment:0,
    bonus:0

}
moissonneuse = {
    name:'moissonneuse',
    quantity:0,
    increment:0,
    bonus:0
}
superFermier = {
    name: 'Super-Fermier',
    quantity: 0,
    increment: 0,
    bonus: 0
}
tracteurNitro = {
    name: 'Tracteur-Nitro',
    quantity: 0,
    increment: 0,
    bonus: 0
}
vacheOgm = {
    name:'Vache OGM',
    quantity: 0,
    increment:0 ,
    bonus:0
}
fauxSpectral = {
    name: 'Faux Spectral',
    quantity: 0,
    increment: 0,
    bonus: 0
}
fermierMinecraft = {
    name: 'Fermier Minecraft',
    quantity: 0,
    increment: 0,
    bonus: 0
}
extraterrestre = {
    name: 'Extraterrestre',
    quantity: 0,
    increment: 0,
    bonus: 0
}
vaisseau = {
    name: 'Vaisseau',
    quantity: 0,
    increment: 0,
    bonus: 0
}

var nextCostCow = 25,
nextCostTracteur = 100,
nextCostMoissonneuse = 500,
nextCostSuperFermier = 3000,
nextCostTracteurNitro = 10000,
nextCostVacheOgm = 40000,
nextCostFauxSpecral = 200000,
nextCostFermierMinecraft = 1500000,
nextCostExtraterrestre = "",
nextCostVaisseau = ""



var upgrades = {
    clickplus:0
}

var events = {
    extraT: 0
}

var intervalID;

// Fonction contre rogue decimals
function roundIt(input) {
    var output = Math.round(input * 1000000) / 1000000;
    return output;
}

// Fonction incrementation du blé
function increment(number){
    wheat.total = wheat.total + number;
    document.getElementById('wheat').innerHTML = roundIt(wheat.total);
}

// Fonction vaches

function buyCow(){
    // cout exponentielle
    var cowCost = Math.floor(25 * Math.pow(1.15,cow.quantity));
    if (wheat.total >= cowCost ) {
        cow.increment+=1;
        cow.quantity++
        wheat.total = wheat.total - cowCost
        document.getElementById('cows').innerHTML = cow.quantity;
        document.getElementById('cowCost').innerHTML = cowCost;
        document.getElementById('prodCow').innerHTML = ("+" + cow.increment);
    }
    nextCostCow = Math.floor(25 * Math.pow(1.1,cow.quantity));
    document.getElementById('cowCost').innerHTML = roundIt(nextCostCow);
}

// Fonction tracteurs
function buyTracteur(){
    var tracteurCost = Math.floor(100 * Math.pow(1.15, tracteur.quantity));
    if (wheat.total >= tracteurCost) {
        tracteur.increment+=3;
        tracteur.quantity++
        wheat.total = wheat.total - tracteurCost;
        document.getElementById('tracteur').innerHTML = tracteur.quantity;
        document.getElementById('tracteurCost').innerHTML = tracteurCost;
        document.getElementById('prodTracteur').innerHTML = ("+" + tracteur.increment);
    }
    nextCostTracteur = Math.floor(100 * Math.pow(1.1, tracteur.quantity));
    document.getElementById('tracteurCost').innerHTML = roundIt(nextCostTracteur);
}

// Fonction moissonneuses
function buyMoissonneuse() {
    var moissonneuseCost = Math.floor(500 * Math.pow(1.15, moissonneuse.quantity));
    if (wheat.total >= moissonneuseCost) {
        moissonneuse.increment += 6;
        moissonneuse.quantity++
        wheat.total = wheat.total - moissonneuseCost;
        document.getElementById('moissonneuse').innerHTML = moissonneuse.quantity;
        document.getElementById('moissonneuseCost').innerHTML = moissonneuseCost;
        document.getElementById('prodMoissonneuse').innerHTML = ("+" + moissonneuse.increment);
    }
    nextCostMoissonneuse = Math.floor(500 * Math.pow(1.1, moissonneuse.quantity));
    document.getElementById('moissonneuseCost').innerHTML = roundIt(nextCostMoissonneuse);
}

// Fonction superFermier
function buySuperFermier() {
    var superFermierCost = Math.floor(3000 * Math.pow(1.15, superFermier.quantity));
    if (wheat.total >= superFermierCost) {
        superFermier.increment += 10;
        superFermier.quantity++
        wheat.total = wheat.total - superFermierCost;
        document.getElementById('superFermier').innerHTML = superFermier.quantity;
        document.getElementById('superFermierCost').innerHTML = superFermierCost;
        document.getElementById('prodSuperFermier').innerHTML = ("+" + superFermier.increment);
    }
    nextCostSuperFermier = Math.floor(3000 * Math.pow(1.1, superFermier.quantity));
    document.getElementById('superFermierCost').innerHTML = roundIt(nextCostSuperFermier);
}

// Fonction tracteurNitro
function buyTracteurNitro() {
    var tracteurNitroCost = Math.floor(10000 * Math.pow(1.15, tracteurNitro.quantity));
    if (wheat.total >= tracteurNitroCost) {
        tracteurNitro.increment += 40;
        tracteurNitro.quantity++
        wheat.total = wheat.total - tracteurNitroCost;
        document.getElementById('tracteurNitro').innerHTML = tracteurNitro.quantity;
        document.getElementById('tracteurNitroCost').innerHTML = tracteurNitroCost;
        document.getElementById('prodTracteurNitro').innerHTML = ("+" + tracteurNitro.increment);
    }
    nextCostTracteurNitro = Math.floor(10000 * Math.pow(1.1, tracteurNitro.quantity));
    document.getElementById('tracteurNitroCost').innerHTML = roundIt(nextCostTracteurNitro);
}

// Fonction vacheOgm
function buyVacheOgm() {
    var vacheOgmCost = Math.floor(40000 * Math.pow(1.15, vacheOgm.quantity));
    if (wheat.total >= vacheOgmCost) {
        vacheOgm.increment += 100 ;
        vacheOgm.quantity++
        wheat.total = wheat.total - vacheOgmCost;
        document.getElementById('vacheOgm').innerHTML = vacheOgm.quantity;
        document.getElementById('vacheOgmCost').innerHTML = vacheOgmCost;
        document.getElementById('prodVacheOgm').innerHTML = ("+" + vacheOgm.increment);
    }
    nextCostVacheOgm = Math.floor(40000 * Math.pow(1.1, vacheOgm.quantity));
    document.getElementById('vacheOgmCost').innerHTML = roundIt(nextCostVacheOgm);
}

// Fonction fauxSpectral
function buyFauxSpectral() {
    var fauxSpectralCost = Math.floor(200000 * Math.pow(1.15, fauxSpectral.quantity));
    if (wheat.total >= fauxSpectralCost) {
        fauxSpectral.increment += 400;
        fauxSpectral.quantity++
        wheat.total = wheat.total - fauxSpectralCost;
        document.getElementById('fauxSpectral').innerHTML = fauxSpectral.quantity;
        document.getElementById('fauxSpectralCost').innerHTML = fauxSpectralCost;
        document.getElementById('prodFauxSpectral').innerHTML = ("+" + fauxSpectral.increment);
    }
    nextCostFauxSpecral = Math.floor(200000 * Math.pow(1.1, fauxSpectral.quantity));
    document.getElementById('fauxSpectralCost').innerHTML = roundIt(nextCostFauxSpecral);
}

// Fonction fermierMinecraft
function buyFermierMinecraft() {
    var fermierMinecraftCost = Math.floor(1500000 * Math.pow(1.15, fermierMinecraft.quantity));
    if (wheat.total >= fermierMinecraftCost) {
        fermierMinecraft.increment += 6000;
        fermierMinecraft.quantity++
        wheat.total = wheat.total - fermierMinecraftCost;
        document.getElementById('fermierMinecraft').innerHTML = fermierMinecraft.quantity;
        document.getElementById('fermierMinecraftCost').innerHTML = fermierMinecraftCost;
        document.getElementById('prodFermierMinecraft').innerHTML = ("+" + fermierMinecraft.increment);
    }
    nextCostFermierMinecraft = Math.floor(1500000 * Math.pow(1.1, fermierMinecraft.quantity));
    document.getElementById('fermierMinecraftCost').innerHTML = roundIt(nextCostFermierMinecraft);
}

// Fonction extraterrestre
function buyExtraterrestre() {
    var extraterrestreCost = Math.floor(123456789 * Math.pow(1.15, extraterrestre.quantity));
    if (wheat.total >= extraterrestreCost) {
        extraterrestre.increment += 98000;
        extraterrestre.quantity++
        wheat.total = wheat.total - extraterrestreCost;
        document.getElementById('extraterrestre').innerHTML = extraterrestre.quantity;
        document.getElementById('extraterrestreCost').innerHTML = extraterrestreCost;
        document.getElementById('prodExtraterrestre').innerHTML = ("+" + extraterrestre.increment);
    }
    nextCostExtraterrestre = Math.floor(123456789 * Math.pow(1.1, extraterrestre.quantity));
    document.getElementById('extraterrestreCost').innerHTML = roundIt(nextCostExtraterrestre);
}

// Fonction vaisseau
function buyVaisseau() {
    var vaisseauCost = Math.floor(3999999999 * Math.pow(1.15, vaisseau.quantity));
    if (wheat.total >= vaisseauCost) {
        vaisseau.increment += 999999;
        vaisseau.quantity++
        wheat.total = wheat.total - vaisseauCost;
        document.getElementById('vaisseau').innerHTML = vaisseau.quantity;
        document.getElementById('vaisseauCost').innerHTML = vaisseauCost;
        document.getElementById('prodVaisseau').innerHTML = ("+" + vaisseau.increment);
    }
    nextCostVaisseau = Math.floor(3999999999 * Math.pow(1.1, vaisseau.quantity));
    document.getElementById('vaisseauCost').innerHTML = roundIt(nextCostVaisseau);
}


// Fonction upgrade
function upgrade(name) {
    console.log('test')
    if(name == 'clickplus' && wheat.total >= 500) {
        upgrades.clickplus = 1;
        wheat.increment ++;
        wheat.total -= 500;
        console.log('upgraded')
    }
    document.getElementById('wheat').innerHTML = roundIt(wheat.total);
}

// Fonction pour faire disparaitre upgrades à l'achat
function updateUpgrades() {
    if (upgrades.clickplus == 1){
        document.getElementById('bonusClick').style.display = 'none';
    } else {
        document.getElementById('bonusClick').style.display = 'inline';
        if (wheat.total >= 500) {
            document.getElementById('bonusClick').disabled = false;
        } else {
            document.getElementById('bonusClick').disabled = true;
        }
    }

}

// Fonction pour activer/desactiver bouttons si achat possible ou impossible
function canBuy() {
    if(wheat.total >= 25) {
        document.getElementById('canBuyCow').disabled = false;
    }else {
        document.getElementById('canBuyCow').disabled = true;
    }
    if(wheat.total >= 100) {
        document.getElementById('canBuyTracteur').disabled = false;
    } else {
        document.getElementById('canBuyTracteur').disabled = true;
    }
    if (wheat.total >= 500) {
        document.getElementById('canBuyMoissonneuse').disabled = false;
    } else {
        document.getElementById('canBuyMoissonneuse').disabled = true;
    }
    if (wheat.total >= 3000) {
        document.getElementById('canBuySuperFermier').disabled = false;
    } else {
        document.getElementById('canBuySuperFermier').disabled = true;
    }
    if (wheat.total >= 10000) {
        document.getElementById('canBuyTracteurNitro').disabled = false;
    } else {
        document.getElementById('canBuyTracteurNitro').disabled = true;
    }
    if (wheat.total >= 40000) {
        document.getElementById('canBuyVacheOgm').disabled = false;
    } else {
        document.getElementById('canBuyVacheOgm').disabled = true;
    }
    if (wheat.total >= 200000) {
        document.getElementById('canBuyFauxSpectral').disabled = false;
    } else {
        document.getElementById('canBuyFauxSpectral').disabled = true;
    }
    if (wheat.total >= 1500000) {
        document.getElementById('canBuyFermierMinecraft').disabled = false;
    } else {
        document.getElementById('canBuyFermierMinecraft').disabled = true;
    }
    if (wheat.total >= 123456789) {
        document.getElementById('canBuyExtraterrestre').disabled = false;
    } else {
        document.getElementById('canBuyExtraterrestre').disabled = true;
    }
    if (wheat.total >= 3999999999) {
        document.getElementById('canBuyVaisseau').disabled = false;
    } else {
        document.getElementById('canBuyVaisseau').disabled = true;
    }
}

// Function pour check si l'evenement est réalisable
function checkEvent(){
    if ( wheat.total >= 1000000000 && events.extraT === 0){
        var span = document.createElement('span')
        span.innerHTML ='Des signes étranges sont apparus dans vos champs. Prendre contact avec les extraterrestres pour 1000000000 de blé ? <button onclick="contactExtra()">Go</button';
        span.setAttribute('id','removeExtra')
        document.getElementById('evenement').appendChild(span);
        clearInterval(intervalID)
        events.extraT = 1;
    }
}

// Function declenchement event extraterrestre
function contactExtra() {
    document.getElementById('canBuyExtraterrestre').innerHTML="Extraterrestre";
    document.getElementById('canBuyVaisseau').innerHTML="Vaisseau"
    document.getElementById('extraName').innerHTML = "Extraterrestre :"
    document.getElementById('vaisseauName').innerHTML = "Vaisseau :"
    document.getElementById('extraterrestreCost').innerHTML = "123456789"
    document.getElementById('vaisseauCost').innerHTML = "3999999999"
    document.getElementById('extraterrestre').innerHTML = "0"
    document.getElementById('vaisseau').innerHTML = "0"
    wheat.total -= 1000000000
    document.getElementById('removeExtra').remove()
    
}

// Function mise a jour des valeurs
function updateData() {
    document.getElementById('cows').innerHTML = cow.quantity;
    document.getElementById('cowCost').innerHTML = cowCost;
    document.getElementById('prodCow').innerHTML = ("+" + cow.increment);
    document.getElementById('tracteur').innerHTML = tracteur.quantity;
    document.getElementById('tracteurCost').innerHTML = tracteurCost;
    document.getElementById('prodTracteur').innerHTML = ("+" + tracteur.increment);
    document.getElementById('moissonneuse').innerHTML = moissonneuse.quantity;
    document.getElementById('moissonneuseCost').innerHTML = moissonneuseCost;
    document.getElementById('prodMoissonneuse').innerHTML = ("+" + moissonneuse.increment);
    document.getElementById('superFermier').innerHTML = superFermier.quantity;
    document.getElementById('superFermierCost').innerHTML = superFermierCost;
    document.getElementById('prodSuperFermier').innerHTML = ("+" + superFermier.increment);
    document.getElementById('tracteurNitro').innerHTML = tracteurNitro.quantity;
    document.getElementById('tracteurNitroCost').innerHTML = tracteurNitroCost;
    document.getElementById('prodTracteurNitro').innerHTML = ("+" + tracteurNitro.increment);
    document.getElementById('vacheOgm').innerHTML = vacheOgm.quantity;
    document.getElementById('vacheOgmCost').innerHTML = vacheOgmCost;
    document.getElementById('prodVacheOgm').innerHTML = ("+" + vacheOgm.increment);
    document.getElementById('fauxSpectral').innerHTML = fauxSpectral.quantity;
    document.getElementById('fauxSpectralCost').innerHTML = fauxSpectralCost;
    document.getElementById('prodFauxSpectral').innerHTML = ("+" + fauxSpectral.increment);
    document.getElementById('fermierMinecraft').innerHTML = fermierMinecraft.quantity;
    document.getElementById('fermierMinecraftCost').innerHTML = fermierMinecraftCost;
    document.getElementById('prodFermierMinecraft').innerHTML = ("+" + fermierMinecraft.increment);
    document.getElementById('extraterrestre').innerHTML = extraterrestre.quantity;
    document.getElementById('extraterrestreCost').innerHTML = extraterrestreCost;
    document.getElementById('prodExtraterrestre').innerHTML = ("+" + extraterrestre.increment);
    document.getElementById('vaisseau').innerHTML = vaisseau.quantity;
    document.getElementById('vaisseauCost').innerHTML = vaisseauCost;
    document.getElementById('prodVaisseau').innerHTML = ("+" + vaisseau.increment);
    document.getElementById('cowCost').innerHTML = roundIt(nextCostCow);
    document.getElementById('tracteurCost').innerHTML = roundIt(nextCostTracteur);
    document.getElementById('moissonneuseCost').innerHTML = roundIt(nextCostMoissonneuse);
    document.getElementById('superFermierCost').innerHTML = roundIt(nextCostSuperFermier);
    document.getElementById('tracteurNitroCost').innerHTML = roundIt(nextCostTracteurNitro);
    document.getElementById('vacheOgmCost').innerHTML = roundIt(nextCostVacheOgm);
    document.getElementById('fauxSpectralCost').innerHTML = roundIt(nextCostFauxSpecral);
    document.getElementById('fermierMinecraftCost').innerHTML = roundIt(nextCostFermierMinecraft);
    document.getElementById('extraterrestreCost').innerHTML = roundIt(nextCostExtraterrestre);
    document.getElementById('vaisseauCost').innerHTML = roundIt(nextCostVaisseau);
    if ( events.extraT === 1) {
        document.getElementById('canBuyExtraterrestre').innerHTML = "Extraterrestre";
        document.getElementById('canBuyVaisseau').innerHTML = "Vaisseau"
        document.getElementById('extraName').innerHTML = "Extraterrestre :"
        document.getElementById('vaisseauName').innerHTML = "Vaisseau :"
        document.getElementById('extraterrestreCost').innerHTML = "123456789"
        document.getElementById('vaisseauCost').innerHTML = "3999999999"
        document.getElementById('extraterrestre').innerHTML = "0"
        document.getElementById('vaisseau').innerHTML = "0"
    }
}

// Function pour save le progress
function save() {
    saveVar= {
        wheat:wheat,
        cow:cow,
        tracteur:tracteur,
        moissonneuse:moissonneuse,
        superFermier:superFermier,
        tracteurNitro:tracteurNitro,
        vacheOgm:vacheOgm,
        fauxSpectral:fauxSpectral,
        fermierMinecraft: fermierMinecraft,
        extraterrestre : extraterrestre,
        vaisseau:vaisseau,
        nextCostCow:nextCostCow,
        nextCostTracteur:nextCostTracteur,
        nextCostMoissonneuse:nextCostMoissonneuse,
        nextCostSuperFermier:nextCostSuperFermier,
        nextCostTracteurNitro:nextCostTracteurNitro,
        nextCostVacheOgm:nextCostVacheOgm,
        nextCostFauxSpecral:nextCostFauxSpecral,
        nextCostFermierMinecraft:nextCostFermierMinecraft,
        nextCostExtraterrestre:nextCostExtraterrestre,
        nextCostVaisseau:nextCostVaisseau,
        upgrades:upgrades,
        events:events
    }
    // bake_cookie('game1',saveVar);
    localStorage.setItem('game1', JSON.stringify(saveVar));
    alert('Game saved')
}

// Function pour load le progress
function load() {
    var loadVar = {},
    string1 = localStorage.getItem('game1');
    if (string1){

        loadVar = JSON.parse(string1);
    }
    if (loadVar.wheat.name != null) wheat.name = loadVar.wheat.name;
    if (loadVar.wheat.total != null) wheat.total = loadVar.wheat.total;
    if (loadVar.wheat.increment != null) wheat.increment = loadVar.wheat.increment;
    if (loadVar.cow.name != null) cow.name = loadVar.cow.name;
    if (loadVar.cow.quantity != null) cow.quantity = loadVar.cow.quantity;
    if (loadVar.cow.increment != null) cow.increment = loadVar.cow.increment;
    if (loadVar.cow.bonus != null) cow.bonus = loadVar.cow.bonus;
    if (loadVar.tracteur.name != null) tracteur.name = loadVar.tracteur.name;
    if (loadVar.tracteur.quantity != null) tracteur.quantity = loadVar.tracteur.quantity;
    if (loadVar.tracteur.increment != null) tracteur.increment = loadVar.tracteur.increment;
    if (loadVar.tracteur.bonus != null) tracteur.bonus = loadVar.tracteur.bonus;
    if (loadVar.moissonneuse.name != null) moissonneuse.name = loadVar.moissonneuse.name;
    if (loadVar.moissonneuse.quantity != null) moissonneuse.quantity = loadVar.moissonneuse.quantity;
    if (loadVar.moissonneuse.increment != null) moissonneuse.increment = loadVar.moissonneuse.increment;
    if (loadVar.moissonneuse.bonus != null) moissonneuse.bonus = loadVar.moissonneuse.bonus;
    if (loadVar.superFermier.name != null) superFermier.name = loadVar.superFermier.name;
    if (loadVar.superFermier.quantity != null) superFermier.quantity = loadVar.superFermier.quantity;
    if (loadVar.superFermier.increment != null) superFermier.increment = loadVar.superFermier.increment;
    if (loadVar.superFermier.bonus != null) superFermier.bonus = loadVar.superFermier.bonus;
    if (loadVar.tracteurNitro.name != null) tracteurNitro.name = loadVar.tracteurNitro.name;
    if (loadVar.superFermier.quantity != null) superFermier.quantity = loadVar.superFermier.quantity;
    if (loadVar.superFermier.increment != null) superFermier.increment = loadVar.superFermier.increment;
    if (loadVar.superFermier.bonus != null) superFermier.bonus = loadVar.superFermier.bonus;
    if (loadVar.vacheOgm.name != null) vacheOgm.name = loadVar.vacheOgm.name;
    if (loadVar.vacheOgm.quantity != null) vacheOgm.quantity = loadVar.vacheOgm.quantity;
    if (loadVar.vacheOgm.increment != null) vacheOgm.increment = loadVar.vacheOgm.increment;
    if (loadVar.vacheOgm.bonus != null) vacheOgm.bonus = loadVar.vacheOgm.bonus;
    if (loadVar.fermierMinecraft.name != null) fermierMinecraft.name = loadVar.fermierMinecraft.name;
    if (loadVar.fermierMinecraft.quantity != null) fermierMinecraft.quantity = loadVar.fermierMinecraft.quantity;
    if (loadVar.fermierMinecraft.increment != null) fermierMinecraft.increment = loadVar.fermierMinecraft.increment;
    if (loadVar.fermierMinecraft.bonus != null) fermierMinecraft.bonus = loadVar.fermierMinecraft.bonus;
    if (loadVar.extraterrestre.name != null) extraterrestre.name = loadVar.extraterrestre.name;
    if (loadVar.extraterrestre.quantity != null) extraterrestre.quantity = loadVar.extraterrestre.quantity;
    if (loadVar.extraterrestre.increment != null) extraterrestre.increment = loadVar.extraterrestre.increment;
    if (loadVar.extraterrestre.bonus != null) extraterrestre.bonus = loadVar.extraterrestre.bonus;
    if (loadVar.vaisseau.name != null) vaisseau.name = loadVar.vaisseau.name;
    if (loadVar.vaisseau.quantity != null) vaisseau.quantity = loadVar.vaisseau.quantity;
    if (loadVar.vaisseau.increment != null) vaisseau.increment = loadVar.vaisseau.increment;
    if (loadVar.vaisseau.bonus != null) vaisseau.bonus = loadVar.vaisseau.bonus;
    if (loadVar.nextCostCow != null) nextCostCow = loadVar.nextCostCow;
    if (loadVar.nextCostTracteur != null) nextCostTracteur = loadVar.nextCostTracteur;
    if (loadVar.nextCostMoissonneuse != null) nextCostMoissonneuse = loadVar.nextCostMoissonneuse;
    if (loadVar.nextCostSuperFermier != null) nextCostSuperFermier = loadVar.nextCostSuperFermier;
    if (loadVar.nextCostTracteurNitro != null) nextCostTracteurNitro = loadVar.nextCostTracteurNitro;
    if (loadVar.nextCostVacheOgm != null) nextCostVacheOgm = loadVar.nextCostVacheOgm;
    if (loadVar.nextCostFauxSpecral != null) nextCostFauxSpecral = loadVar.nextCostFauxSpecral;
    if (loadVar.nextCostFermierMinecraft != null) nextCostFermierMinecraft = loadVar.nextCostFermierMinecraft;
    if (loadVar.nextCostExtraterrestre != null) nextCostExtraterrestre = loadVar.nextCostExtraterrestre;
    if (loadVar.nextCostVaisseau != null) nextCostVaisseau = loadVar.nextCostVaisseau;
    if (loadVar.upgrades.clickplus != null) upgrades.clickplus = loadVar.upgrades.clickplus;
    if (loadVar.events.extraT != null) events.extraT = loadVar.events.extraT
    updateData();
}

// Lancement automatique des fonctions toutes les 1 seconde
window.setInterval(function(){
    increment(cow.increment);
    increment(tracteur.increment);
    increment(moissonneuse.increment);
    increment(superFermier.increment);
    increment(tracteurNitro.increment);
    increment(vacheOgm.increment);
    increment(fauxSpectral.increment);
    increment(fermierMinecraft.increment);
    increment(extraterrestre.increment);
    increment(vaisseau.increment);
    updateUpgrades();
    canBuy();

}, 1000);

intervalID = setInterval(checkEvent,1000)