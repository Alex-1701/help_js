"use strict"

class Processor {
    constructor(clockSpeed, cores, capacity, technicalProcess) {
        this._clockSpeed = clockSpeed;
        this._cores = cores;
        this._capacity = capacity;
        this._technicalProcess = technicalProcess;
    }

    set clockSpeed(value) {
        this._clockSpeed = value;
    }

    get clockSpeed() {
        return this._clockSpeed;
    }

    set cores(value) {
        this._cores = value;
    }

    get cores() {
        return this._cores;
    }

    set capacity(value) {
        this._capacity = value;
    }

    get capacity() {
        return this._capacity;
    }

    set technicalProcess(value) {
        this._technicalProcess = value;
    }

    get technicalProcess() {
        return this._technicalProcess;
    }

    getInfo() {
        let str = '<p>' + ' Тактовая частота: ' + this.clockSpeed + ' Гц' + '</p>';
        str += '<p>' + 'Количество ядер: ' + this.cores + '</p>';
        str += '<p>' + 'Разрядность: ' + this.capacity + '</p>';
        str += '<p>' + 'Техпроцесс: ' + this.technicalProcess + ' нм' + '</p>';
        return str;
    }
}

class Intel extends Processor {
    constructor(clockSpeed, cores, capacity, technicalProcess, release, price) {
        // Вызов родительского конструктора
        super(clockSpeed, cores, capacity, technicalProcess);

        this._release = release;
        this._price = price;
    }

    get release() {
        return this._release;
    }

    set release(value) {
        this._release = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    getInfo() {
        let str = '<p>' + ' Тактовая частота: ' + this.clockSpeed + ' Гц' + '</p>';
        str += '<p>' + 'Количество ядер: ' + this.cores + '</p>';
        str += '<p>' + 'Разрядность: ' + this.capacity + '</p>';
        str += '<p>' + 'Техпроцесс: ' + this.technicalProcess + ' нм' + '</p>';
        str += '<p>' + 'Выход: ' + this.release + ' год' + '</p>';
        str += '<p>' + 'Цена: ' + this.price + ' денег' + '</p>';
        return str;
    }
}