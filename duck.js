class Duck {
    constructor() {
        this.element = document.getElementById("duck");       // referencia do pato
        this.posX = 0;                                       // posicao x do pato
        this.posY = 0;                                       // posicao y do pato
        this.velocity = 5;                                   // velocidade do pato
        this.heightScreen = window.innerHeight;            // altura da tela
        this.widthScreen = window.innerWidth;              // largura da tela
        this.heightDuck = this.element.offsetHeight;               // altura do pato
        this.widthDuck = this.element.offsetWidth;                 // largura do pato
        this.energy = 100;
        this.costRun = 10;
        this.health = 100;
        this.shootCooldown = 0;
    }
    
    update(keys) {
        let currentVelocity = this.velocity;
        
        if (this.energy > 100) this.energy = 100;
        else if (this.energy < 0) this.energy = 0;
        
        if (keys.shift) {
            currentVelocity = 10;
            this.energy -= this.costRun;
        } else {
            this.energy += this.costRun;
        }
        
        if (keys.w) this.posY -= currentVelocity;
        if (keys.s) this.posY += currentVelocity;
        if (keys.a) {
            this.posX -= currentVelocity;
            this.element.style.transform = "scale(-1, 1)";
        }
        if (keys.d) {
            this.posX += currentVelocity;
            this.element.style.transform = "scale(1, 1)";
        }
        
        // Limites da tela
        if (this.posX < 0) this.posX = 0;
        else if (this.posX > this.widthScreen - this.widthDuck) this.posX = this.widthScreen - this.widthDuck;
        
        if (this.posY < 0) this.posY = 0;
        else if (this.posY > this.heightScreen - this.heightDuck) this.posY = this.heightScreen - this.heightDuck;
        
        this.element.style.left = this.posX + "px";
        this.element.style.top = this.posY + "px";
    }
    
    shoot(targetX, targetY) {
        if (this.shootCooldown <= 0) {
            const bullet = new Bullet(
                this.posX + this.widthDuck / 2,
                this.posY + this.heightDuck / 2,
                targetX,
                targetY,
                "duck"
            );
            bullets.push(bullet);
            this.shootCooldown = 30;
        }
    }
    
    takeDamage(damage) {
        this.health -= damage;
        return this.health <= 0;
    }
}
export default Duck;