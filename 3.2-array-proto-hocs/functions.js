const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames () {
  let weaponName = [];
  for (let i = 0; i < weapons.length; i++) {
	weaponName.push(weapons[i].name);
  }
  return weaponName;
}
function getCountReliableWeapons(durabilityValue) {
  let numberOfReliableWeapons = 0;
   for (let i = 0; i < weapons.length; i++) {
     if (weapons[i].durability > durabilityValue) {
       numberOfReliableWeapons++;
    }       
  }
  return numberOfReliableWeapons;
}
function hasReliableWeapons(durabilityValue) {
  for (let i = 0; i < weapons.length; i++) {
   	if (weapons[i].durability > durabilityValue) {
      return true;
    }
  }
}
function getReliableWeaponsNames(durabilityValue) {
  let reliableWeaponsNames = [];
    for (let i = 0; i < weapons.length; i++) {
   	  if (weapons[i].durability > durabilityValue) {
        reliableWeaponsNames.push(weapons[i].name); 
   	}
  }
  return reliableWeaponsNames;
}
function getTotalDamage() {
  let totalDamage = 0;
    for (let i = 0; i < weapons.length; i++) {
      totalDamage += weapons[i].attack;
  }
  return totalDamage;
}
