const { Dragon } = require('./Dragon')

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color)
        this.lifeGoals = lifeGoals
        this.friend = friend
    }

    hasLifeGoals() {
        console.log(`${this.name} likes to ${this.lifeGoals}`)
    }

    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = {
    FriendlyDragon
}