class Dragon {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...monsters) {
    let names = []
    for (let monster of monsters) {
      names.push(monster.name)
    }
    return names;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
