const input = document.querySelector("#search-input");
const button = document.querySelector("#search-button");
const pokeName = document.querySelector("#pokemon-name");
const id = document.querySelector("#pokemon-id");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const types = document.querySelector("#types");
const hp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const sp_attack = document.querySelector("#special-attack");
const sp_defense = document.querySelector("#special-defense");
const speed = document.querySelector("#speed");
const image1 = document.getElementById("sprite");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const screen = document.getElementById("screen")

const colors = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
  unknown: 'a3a3a3',
  shadow: 'a3a3a3'
};

const api = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"


const fetchPoke = async (fetchLink) => {
  try {
    const response = await fetch(fetchLink);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
button.onclick = process;

async function process(){
  let query = input.value;
  query = query.toLowerCase();
  query = query.replaceAll(" ", "-"); 
  query = query.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
  let pokeData = await fetchPoke(api+"/"+query);
  if(pokeData){
    pokeName.innerText = pokeData.name.toUpperCase();
    id.innerText = pokeData.id;
    weight.innerText = pokeData.weight;
    height.innerText = pokeData.height;
    hp.innerText = pokeData.stats[0].base_stat;
    attack.innerText = pokeData.stats[1].base_stat;
    defense.innerText = pokeData.stats[2].base_stat;
    sp_attack.innerText = pokeData.stats[3].base_stat;
    sp_defense.innerText = pokeData.stats[4].base_stat;
    speed.innerText = pokeData.stats[5].base_stat;
    image1.src = pokeData.sprites.front_default;
    image2.src = pokeData.sprites.back_default;
    image3.src = pokeData.sprites.front_shiny;
    image4.src = pokeData.sprites.back_shiny;
    types.innerHTML = '';
for(let i=0;i<pokeData.types.length;i++)
{

  if(pokeData.types[i].type.name == "normal")
  {
    var span = document.createElement("span");

    span.style.background = colors.normal;
    span.innerHTML = "Normal";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "fire")
  {
    var span = document.createElement("span");

    span.style.background = colors.fire;
    span.innerHTML = "Fire";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "water")
  {
    var span = document.createElement("span");

    span.style.background = colors.water;
    span.innerHTML = "Water";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "electric")
  {
    var span = document.createElement("span");

    span.style.background = colors.electric;
    span.innerHTML = "Electric";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "grass")
  {
    var span = document.createElement("span");

    span.style.background = colors.grass;
    span.innerHTML = "Grass";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "ice")
  {
    var span = document.createElement("span");

    span.style.background = colors.ice;
    span.innerHTML = "Ice";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "fighting")
  {
    var span = document.createElement("span");

    span.style.background = colors.fighting;
    span.innerHTML = "Fighting";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
    if(pokeData.types[i].type.name == "poison")
  {
    var span = document.createElement("span");

    span.style.background = colors.poison;
    span.innerHTML = "Poison";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
    if(pokeData.types[i].type.name == "ground")
  {
    var span = document.createElement("span");

    span.style.background = colors.ground;
    span.innerHTML = "Ground";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
    if(pokeData.types[i].type.name == "flying")
  {
    var span = document.createElement("span");

    span.style.background = colors.flying;
    span.innerHTML = "Flying";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "psychic")
  {
    var span = document.createElement("span");

    span.style.background = colors.psychic;
    span.innerHTML = "Psychic";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "bug")
  {
    var span = document.createElement("span");

    span.style.background = colors.bug;
    span.innerHTML = "Bug";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "rock")
  {
    var span = document.createElement("span");

    span.style.background = colors.rock;
    span.innerHTML = "Rock";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "ghost")
  {
    var span = document.createElement("span");

    span.style.background = colors.ghost;
    span.innerHTML = "Ghost";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "dragon")
  {
    var span = document.createElement("span");

    span.style.background = colors.dragon;
    span.innerHTML = "Dragon";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "dark")
  {
    var span = document.createElement("span");

    span.style.background = colors.dark;
    span.innerHTML = "Dark";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "steel")
  {
    var span = document.createElement("span");

    span.style.background = colors.steel;
    span.innerHTML = "Steel";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
  if(pokeData.types[i].type.name == "fairy")
  {
    var span = document.createElement("span");
    span.style.background = colors.fairy;
    span.innerHTML = "Fairy";
    span.setAttribute('id','type');
    types.appendChild(span);
  }
}
screen.style.color = "black";
  }
  else
    alert("Pokémon not found");
}
