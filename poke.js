//form elements
const mainMenu = document.getElementById("primary-menu");
const hero = document.getElementById("heroImage");
const pokeThumbnails = document.getElementById("pokeThumbnails");

//icons
const bug = document.getElementById("menu-item-bug");
const dark = document.getElementById("menu-item-dark");
const dragon = document.getElementById("menu-item-dragon");
const electric = document.getElementById("menu-item-electric");
const fairy = document.getElementById("menu-item-fairy");
const fighting = document.getElementById("menu-item-fighting");
const fire = document.getElementById("menu-item-fire");
const flying = document.getElementById("menu-item-flying");
const ghost = document.getElementById("menu-item-ghost");
const grass = document.getElementById("menu-item-grass");
const ground = document.getElementById("menu-item-ground");
const ice = document.getElementById("menu-item-ice");
const normal = document.getElementById("menu-item-normal");
const poison = document.getElementById("menu-item-poison");
const psychic = document.getElementById("menu-item-psychic");
const rock = document.getElementById("menu-item-rock");
const steel = document.getElementById("menu-item-steel");
const water = document.getElementById("menu-item-water");

//pokemon characters
const gridImages = document.querySelectorAll(".gridImages"); 
const bugType = document.querySelectorAll(".bugType");
const darkType = document.querySelectorAll(".darkType");
const dragonType = document.querySelectorAll(".dragonType");
const electricType = document.querySelectorAll(".electricType");
const fairyType = document.querySelectorAll(".fairyType");
const fightingType = document.querySelectorAll(".fightingType");
const fireType = document.querySelectorAll(".fireType");
const flyingType = document.querySelectorAll(".flyingType");
const ghostType = document.querySelectorAll(".ghostType");
const grassType = document.querySelectorAll(".grassType");
const groundType = document.querySelectorAll(".groundType");
const iceType = document.querySelectorAll(".iceType");
const normalType = document.querySelectorAll(".normalType");
const poisonType = document.querySelectorAll(".poisonType");
const psychicType = document.querySelectorAll(".psychicType");
const rockType = document.querySelectorAll(".rockType");
const steelType = document.querySelectorAll(".steelType");
const waterType = document.querySelectorAll(".waterType");
const typeArray = []; 

bugFunction = function () {
    hero.className = "bug";
    mainMenu.style.borderBottomColor = "green";
    clearPokemon();
    for (let i=0; i<bugType.length; i++)
        bugType[i].style.display = "block";
}

darkFunction = function () {
    hero.className = "dark";
    mainMenu.style.borderBottomColor = "grey";
    clearPokemon();
    for (let i=0; i<darkType.length; i++)
        darkType[i].style.display = "block";
}

dragonFunction = function () {
    hero.className = "dragon";
    mainMenu.style.borderBottomColor = "skyBlue";
    clearPokemon();
    for (let i=0; i<dragonType.length; i++)
        dragonType[i].style.display = "block";
}

electricFunction = function () {
    hero.className = "electric"
    mainMenu.style.borderBottomColor = "yellow";
    clearPokemon();
    for (let i=0; i<electricType.length; i++)
        electricType[i].style.display = "block";
}

fairyFunction = function () {
    hero.className = "fairy"
    mainMenu.style.borderBottomColor = "pink";
    clearPokemon();
    for (let i=0; i<fairyType.length; i++)
        fairyType[i].style.display = "block";
}

fightingFunction = function () {
    hero.className = "fighting"
    mainMenu.style.borderBottomColor = "orange";
    clearPokemon();
    for (let i=0; i<fightingType.length; i++)
        fightingType[i].style.display = "block";
}

fireFunction = function () {
    hero.className = "fire";
    mainMenu.style.borderBottomColor = "red";
    clearPokemon();
    for (let i=0; i<fireType.length; i++)
        fireType[i].style.display = "block";
}

flyingFunction = function () {
    hero.className = "flying";
    mainMenu.style.borderBottomColor = "white";
    clearPokemon();
    for (let i=0; i<flyingType.length; i++)
        flyingType[i].style.display = "block";
}

ghostFunction = function () {
    hero.className = "ghost";
    mainMenu.style.borderBottomColor = "red";
    clearPokemon();
    for (let i=0; i<ghostType.length; i++)
        ghostType[i].style.display = "block";
}

grassFunction = function () {
    hero.className = "grass";
    mainMenu.style.borderBottomColor = "green";
    clearPokemon();
    for (let i=0; i<grassType.length; i++)
        grassType[i].style.display = "block";
}

groundFunction = function () {
    hero.className = "ground";
    mainMenu.style.borderBottomColor = "brown";
    clearPokemon();
    for (let i=0; i<groundType.length; i++)
        groundType[i].style.display = "block";
}

iceFunction = function () {
    hero.className = "ice";
    mainMenu.style.borderBottomColor = "green";
    clearPokemon();
    for (let i=0; i<iceType.length; i++)
        iceType[i].style.display = "block";
}

normalFunction = function () {
    hero.className = "normal";
    mainMenu.style.borderBottomColor = "white";
    clearPokemon();
    for (let i=0; i<normalType.length; i++)
        normalType[i].style.display = "block";
}

poisonFunction = function () {
    hero.className = "poison";
    mainMenu.style.borderBottomColor = "darkGreen";
    clearPokemon();
    for (let i=0; i<poisonType.length; i++)
        poisonType[i].style.display = "block";
}

psychicFunction = function () {
    hero.className = "psychic"
    mainMenu.style.borderBottomColor = "purple";
    clearPokemon();
    for (let i=0; i<psychicType.length; i++)
        psychicType[i].style.display = "block";    
}

rockFunction = function () {
    hero.className = "rock"
    mainMenu.style.borderBottomColor = "grey";
    clearPokemon();
    for (let i=0; i<rockType.length; i++)
        rockType[i].style.display = "block";    
}

steelFunction = function() {
    hero.className = "steel";
    mainMenu.style.borderBottomColor = "silver";
    clearPokemon();
    for (let i=0; i<steelType.length; i++)
        steelType[i].style.display = "block";
}

waterFunction = function () {
    hero.className = "water";
    mainMenu.style.borderBottomColor = "aqua";
    clearPokemon();
    for (let i=0; i<waterType.length; i++)
        waterType[i].style.display = "block";
}


    /*
    for (let property in mainMenu) {
    }
}
    Array.from(gridImages).map(function(x) {
        x.style.visibility = "hidden"
    });

    Array.from(fireType).map(function(x) {
        x.style.visibility = "visible"
    });
*/
    
clearPokemon = function () {
    for (let i=0; i<gridImages.length; i++)
        gridImages[i].style.display = "none";
}

//18 event listeners
bug.addEventListener("mouseenter", bugFunction);
dark.addEventListener("mouseenter", darkFunction);
dragon.addEventListener("mouseenter", dragonFunction);
electric.addEventListener("mouseenter", electricFunction);
fairy.addEventListener("mouseenter", fairyFunction);
fighting.addEventListener("mouseenter", fightingFunction);
fire.addEventListener("mouseenter", fireFunction);
flying.addEventListener("mouseenter", flyingFunction);
ghost.addEventListener("mouseenter", ghostFunction);
grass.addEventListener("mouseenter", grassFunction);
ground.addEventListener("mouseenter", groundFunction);
ice.addEventListener("mouseenter", iceFunction);
normal.addEventListener("mouseenter", normalFunction);
poison.addEventListener("mouseenter", poisonFunction);
psychic.addEventListener("mouseenter", psychicFunction);
rock.addEventListener("mouseenter", rockFunction);
steel.addEventListener("mouseenter", steelFunction);
water.addEventListener("mouseenter", waterFunction);




//fire.addEventListener("mouseenter", changeFire(event) event.hero.style.color = "purple";