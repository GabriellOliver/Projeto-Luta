// Knigth ou Sorcerer
// LittleMonster ou BigMonster

class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor (name) {
        this.name = name;
    }

    get life () {
         return this._life;

    }
    set life (newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knigth extends Character {

    constructor (name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;

    }
}

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {

    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {

    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1E1, fighter2E1,logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1E1 = fighter1E1;
        this.fighter2E1 = fighter2E1;
        this.log = logObject;
    }

    start() {
        this.update();

        this.fighter1E1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2E1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update () {
        //Fighter 1
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1Pct = (this.fighter1.life / this.maxLife) * 100;
        this.fighter1E1.querySelector('.bar').style.width = `${f1Pct}%`

        //Fighter 2
        this.fighter2E1.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let f2Pct = (this.fighter2.life / this.maxLife) * 100;
        this.fighter2E1.querySelector('.bar').style.width = `${f2Pct}%`

    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMenssage('...')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMenssage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`)
        } else {
            this.log.addMenssage(`${attacked.name} conseguiu defender..`)
        }
        this.update();
    }
}

class log {
    list = [];

    constructor() {
        this.listE1 = this.listE1;
    }

    addMenssage(msg) {
        this.list.push(msg);
        this.render();

    }

    render () {
        this.listE1.innerHTML = '';
        
        for(let i in this.list) {
            this.listE1.innerHTML += `<li>${this.list[1]}</li>`;
        }
    }
    }

    