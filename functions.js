//ES5

var rect = new Rectangle(100, 200, [100, 200]);

function Rectangle(width, height, position) {
  this.width = width,
  this.height = height,
  this.position = position

}

var piece = new Piece('hi', [
  200, 300
], 'sharon');

function Piece(value, position, name) {
  this.value = value,
  this.position = position,
  this.PlayerName = name

}

Piece.prototype.move = function(x, y) {

  this.position = [
    this.position[0] + x,
    this.position[1] + y
  ];
}

Piece.prototype.setValue = function(val) {

  this.value = val;
  return true;
}

Piece.prototype.getValue = function() {

  return 'Value is' + this.value;
}

//ES6

class Piece {
  constructor(value, position, PlayerName) {
    this._value = value;
    this.position = position;
    this.PlayerName = name;
  }

  get value() {
    return this._value;
  }
  set value(val) {
    return this._value = val;
  }
  move(x, y) {
    this.position = [
      this.position[0] + x,
      this.position[1] + y
    ];
  }
}

class Rectangle {
  constructor(width, height, position) {
    this.width = width;
    this.position = position;
    this.height = height;
  }


  class Circle {
    constructor (diameter, circumference, area) {
        this.diameter = diameter;
        this.circumference = circumference;
        this.area = area;

    }
    get diameter() {
      return this._diameter;
    }
    set diameter(diam) {
      return this._diameter = diam;
    }
    move (x, y) {
      this.circumference = [
        this.circumference[0] + x,
        this.circumference[1] + y
      ];
    }
}

var c = new Circle(50, 20, 75)
c.diameter === .....



class Person  {
  constructor(firstName, lastName, age, langauge) {
    this._firstName = firstName,
    this._lastName = lastName,
    this.age = age,
    this.language = langauge
  }
  get fullName()  {

    return this._firstName + '' + this._lastName;

  }
  set fullName(fullName)  {
    const names = fullName.split('');
    this.firstName = names[0];
    this.lastName = names[1];
    return this._fullName = name;
  }
}
