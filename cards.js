'use strict';

//prototype
let aCard = {
    suit: undefined,
    value: undefined
}

//constructor
function createTheCard(suit, value){
    this.__proto__ = aCard;
    let s = suit.toUpperCase();
    this.suit = s;
    this.value = value;
    this.screenName = s + value;
    // TODO: сделать проверку валидности входных данных. Объект не должен создаваться, если данные не валидные
}
