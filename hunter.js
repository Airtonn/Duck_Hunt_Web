class Hunter {
    constructor() {
        this.element = document.createElement("div");
        this.element.id = "hunter";
        this.element.className = "hunter";
        document.body.appendChild(this.element);
        
        this.posX = window.innerWidth - 100;
        this.posY = window.innerHeight - 100;
        this.width = 50;
        this.height = 50;
        this.velocity = 3;
        this.health = 100;
        this.shootCooldown = 0;
        
        this.updatePosition();
    }
    
    update(duckX, duckY) {
        // IA: Perseguir o pato
        if (duckX < this.posX) {
            this.posX -= this.velocity;
        } else if (duckX > this.posX) {
            this.posX += this.velocity;
        }
        
        if (duckY < this.posY) {
            this.posY -= this.velocity;
        } else if (duckY > this.posY) {
            this.posY += this.velocity;
        }
        
        // Limites da tela
        if (this.posX < 0) this.posX = 0;
        if (this.posX > window.innerWidth - this.width) this.posX = window.innerWidth - this.width;
        if (this.posY < 0) this.posY = 0;
        if (this.posY > window.innerHeight - this.height) this.posY = window.innerHeight - this.height;
        
        this.updatePosition();
        
        // Atirar em direção ao pato
        this.shootCooldown--;
        if (this.shootCooldown <= 0) {
            this.shoot(duckX, duckY);
            this.shootCooldown = 60; // Atirar a cada 60 frames
        }
    }
    
    updatePosition() {
        this.element.style.left = this.posX + "px";
        this.element.style.top = this.posY + "px";
    }
    
    shoot(targetX, targetY) {
        const bullet = new Bullet(
            this.posX + this.width / 2,
            this.posY + this.height / 2,
            targetX,
            targetY,
            "hunter"
        );
        bullets.push(bullet);
    }
    
    takeDamage(damage) {
        this.health -= damage;
        return this.health <= 0;
    }
}
