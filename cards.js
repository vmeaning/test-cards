'use strict';

//prototype
let aCard = {
    suit: undefined,
    value: undefined
}

//constructor
function TheCard(suit, value){
    this.__proto__ = aCard;
    this.suit = suit.toUpperCase();
    this.value = value;
    this.screenName = this.suit + this.value;
    // TODO: сделать проверку валидности входных данных. Объект не должен создаваться, если данные не валидные
}
