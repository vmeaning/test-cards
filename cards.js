'use strict';

//prototype
let aCard = {
    _suit: undefined,
    _value: undefined,
    _color: undefined
}

//constructor
function TheCard(suit, value){
    this.__proto__ = aCard;
    this._suit = suit.toUpperCase();
    this._value = value;
    this._screenName = this._suit + this._value;
    // TODO: сделать проверку валидности входных данных. Объект не должен создаваться, если данные не валидные
    // TODO create getters for screenName, suit and value
}
