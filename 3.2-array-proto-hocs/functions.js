const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames () {
 return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durabilityValue) {
  return weapons.filter(weapon => weapon.durability > durabilityValue).length;
}

function hasReliableWeapons(durabilityValue) {
 return weapons.some(weapon => weapon.durability > durabilityValue);
}


function getReliableWeaponsNames(durabilityValue) {
 return weapons.filter(weapon => weapon.durability > durabilityValue).map(relibleWeapon => relibleWeapon.name);
}

function getTotalDamage() {
  return weapons.reduce((totalDamage, weapon) => totalDamage + weapon.attack, 0);
}
