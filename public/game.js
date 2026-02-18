// Stone Clash Game Logic and UI

class StoneClash {
    constructor() {
        this.playerHealth = 100;
        this.enemyHealth = 100;
        this.attackPower = 10;
        this.enemyAttackPower = 8;
        this.gameOver = false;
    }

    attackEnemy() {
        this.enemyHealth -= this.attackPower;
        if (this.enemyHealth <= 0) {
            this.gameOver = true;
            console.log('You defeated the enemy!');
        }
    }

    enemyAttack() {
        this.playerHealth -= this.enemyAttackPower;
        if (this.playerHealth <= 0) {
            this.gameOver = true;
            console.log('You were defeated!');
        }
    }

    playTurn() {
        this.attackEnemy();
        if (!this.gameOver) {
            this.enemyAttack();
        }
    }

    displayStatus() {
        console.log(`Player Health: ${this.playerHealth}`);
        console.log(`Enemy Health: ${this.enemyHealth}`);
    }
}

const game = new StoneClash();

// Game UI Logic
const gameContainer = document.getElementById('game-container');
const attackButton = document.getElementById('attack-button');

attackButton.addEventListener('click', () => {
    game.playTurn();
    game.displayStatus();
    if (game.gameOver) {
        alert('Game Over!');
    }
});

