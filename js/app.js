
class Player {
constructor(health,damage,heal,attack,specialAttacks) {
  this.health = health;
  this.damage = damage;
  this.heal = heal;
  this.attack = attack;
  this.specialAttacks = specialAttacks;
  }
playerAttack(dmgDealt){
m.setHealthh(m.getHealthh() - dmgDealt );
this.attack++;
}
playerHeal(Healed){
p.setHealth(p.getHealth() + healed);
}
playerSpeacial(dmg){
m.setHealthh(m.getHealthh() - dmg);
this.specialAttacks= this.specialAttacks+1;
}
getTotalSpecial(){
  return this.specialAttacks;
}
giveUp(){

}
GetHealth(){
  return this.health;
}
setHealth(health){
  this.health = health;
}
playerTotalAttacks(){  
  this.attack=this.attack + 1;
}
getTotalAttacks(){
return this.attack;
}
getTotalSpecial(){
  return this.specialAttacks;
  }
}
class Monster {
  constructor(health,damage){
    this.health = health;
    this.damage = damage;
  }
monsAttack(dmgGave,player){
player.setHealth(player.GetHealth() - dmgGave);

}
getHealthh(){
  return this.health;
}
setHealthh(health){
  this.health = health;
}
}
p = new Player(100,0,0,0,0)
m = new Monster(100,0)
//outputHealthMons= m.getHealthh();
//outputHealthPlay= p.GetHealth();
playON=true;
function updateMonsHealthBar() {
  let healthBar = document.getElementById("monster-healthbar");
  let currentWidth = m.getHealthh()*2;
  let newWidth = parseInt(currentWidth)+ "px";
  healthBar.style.width = newWidth; 
  //console.log(m.getHealthh());
  if(m.getHealthh() <=0){
    healthBar.style.width= '0%';
    checkWin()}
}
function updatePlayHealthBar() {
  let healthBar = document.getElementById("player-healthbar");
  let currentWidth = p.GetHealth()*2 ;
  let newWidth = parseInt(currentWidth)+ "px";
  healthBar.style.width = newWidth;
  //console.log(p.GetHealth());
  if(p.GetHealth() <=0){
  healthBar.style.width= '0%';
  checkWin()}
}
function checkWin(){
  if(p.GetHealth() <=0){
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    //newElement.id = "PlayerLoss"; 
    newElement.innerHTML = "MONSTERR WON!!";
    newElement.style.color="red"
    newElement.style.textAlign="center"
    place.appendChild(newElement);
    playON=false;
    var button = document.getElementById("attackk");
    button.disabled=true;
    var button = document.getElementById("heall");
    button.disabled=true;
    var button = document.getElementById("speciall");
    button.disabled=true;
    var button = document.getElementById("giveupp");
    button.disabled=true;
  }
  else if(m.getHealthh()<=0){
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    ////newElement.id = "PlayerLoss"; 
    newElement.innerHTML = "YOU HAVE WON!!";
    newElement.style.color="green"
    newElement.style.textAlign="center"
    place.appendChild(newElement);
    playON=false;
    var button = document.getElementById("attackk");
    button.disabled=true;
    var button = document.getElementById("heall");
    button.disabled=true;
    var button = document.getElementById("speciall");
    button.disabled=true;
    var button = document.getElementById("giveupp");
    button.disabled=true;
  }
  if(playON==false){
    var button = document.getElementById("attackk");
    button.disabled=true;
    var button = document.getElementById("heall");
    button.disabled=true;
    var button = document.getElementById("speciall");
    button.disabled=true;
    var button = document.getElementById("giveupp");
    button.disabled=true;
  }
}
  

function attack(){
  checkWin();
  amountX=Math.floor(Math.random() * 25)
  amountY=Math.floor(Math.random() * 30)
  if(amountX>=0 && playON==true){
  p.playerAttack(amountX);
  p.playerTotalAttacks();
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "PlayerDmg"; 
    newElement.innerHTML = "Player dealt "+ amountX;
    newElement.style.color="green"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
  }
  if(amountY>=0 && playON==true){
    m.monsAttack(amountY,p);
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "monsDmg"; 
    newElement.innerHTML = "Monster dealt "+ amountY;
    newElement.style.color="purple"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
  }
  updatePlayHealthBar()
  updateMonsHealthBar()
  
  }
function  heal(){
  if (p.getTotalAttacks()>=4 && p.GetHealth() < m.getHealthh() * 0.7){
    var heal=Math.floor(Math.random() * 50)
    p.playerHeal(heal);
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "healON"; 
    newElement.innerHTML = heal+" Healed"
    newElement.style.color="green"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);}
    else{
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "healOff"; 
    newElement.innerHTML = "You can't Heal now "
    newElement.style.color="red"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
    }
}
function specialAttacks(){
  
  if(p.getTotalAttacks()>=2&&!(p.getTotalSpecial() >= 2)){
    var dealt=Math.floor(Math.random() *60)
    p.playerSpeacial(dealt)
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "specialOn"; 
    newElement.innerHTML = "You used special attacks now and dealt "+dealt+"!!";
    newElement.style.color="red"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
    amountY=Math.floor(Math.random() * 30)
    m.monsAttack(amountY,p);
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "monsDmg"; 
    newElement.innerHTML = "Monster dealt "+ amountY;
    newElement.style.color="purple"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
    updatePlayHealthBar()
    updateMonsHealthBar()
    }
  else{
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "specialOff"; 
    newElement.innerHTML = "You can't use special attacks now "
    newElement.style.color="red"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
  }
}
function giveUp(){    
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "surrend"; 
    newElement.innerHTML = "You Gave up... "
    newElement.style.color="red"
    newElement.style.textAlign="center"
    newElement.style.fontWeight="bold"
    place.appendChild(newElement);
    playON=false;
    var place = document.getElementById("battle-logs");
    var newElement = document.createElement("div");
    newElement.id = "PlayerLoss"; 
    newElement.innerHTML = "MONSTERR WON!!";
    newElement.style.color="red"
    newElement.style.textAlign="center"
    place.appendChild(newElement);
    checkWin();
}  


