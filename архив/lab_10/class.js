"use strict"

class HardDrive {
    constructor(oType, oCapacity, oInterface, oSpeed) {
        this.type = oType;
        this.capacity = oCapacity;
        this.interface = oInterface;
        this.speed = oSpeed;
    }

    getType() {
        return this.type;
    }
    setType(oType) {
        this.type = oType;
    }

    getCapacity() {
        return this.capacity;
    }
    setCapacity(oCapacity) {
        this.capacity = oCapacity;
    }

    getInterface() {
        return this.interface;
    }
    setInterface(oInterface) {
        this.interface = oInterface;
    }

    getSpeed() {
        return this.speed;
    }
    setSpeed(oSpeed) {
        this.speed = oSpeed;
    }

    getInfo() {
        return this.type + ' ' + this.capacity + ' ' + this.interface + ' ' + this.speed;
    }
}

class Kingston extends HardDrive {
    constructor(oType, oCapacity, oInterface, oSpeed, oReleaseDate, oPrice) {
        super(oType, oCapacity, oInterface, oSpeed);
        this.releaseDate = oReleaseDate;
        this.price = oPrice;
    }

    getReleaseDate() {
        return this.releaseDate;
    }
    setReleaseDate(oReleaseDate) {
        this.releaseDate = oReleaseDate;
    }

    getPrice() {
        return this.price;
    }
    setPrice(oPrice) {
        this.price = oPrice;
    }

    getInfo() {
        return this.type + ' ' + this.capacity + ' ' + this.interface + ' ' + this.speed + ' ' + this.releaseDate + ' ' + this.price;
    }
}  