function parseCount (value) {
  const parsed = Number.parseInt(value);
  if (isNaN(parsed)) {
    throw new Error('Невалидное значение');
  }
  return parsed;
}

function validateCount (value) {
  try {
  return parseCount(value)
  } catch(error) {
    return error;
  }
}

// 2 задание

class Triangle {
  constructor(a, b, c) {
  if (a + b < c || a + c < b || b + c < a) {
    throw new Error ('Треугольник с такими сторонами не существует')
  }
  this.a = a;
  this.b = b;
  this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c
  }

  getArea (){
    let p = this.getPerimeter() / 2;

    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);

    } catch(error) {
      return {
        getPerimeter() {
          return 'Ошибка! Треугольник не существует'
      },
      getArea() {
          return 'Ошибка! Треугольник не существует'
      }
      }
    }
}