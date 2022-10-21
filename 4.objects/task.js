function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}



Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark)
    }
}

Student.prototype.addMarks = function(...rest) {
  if(this.marks === undefined){ 
    this.marks = [];
    } else {
      this.marks.push(...rest)
    }
}

Student.prototype.getAverage = function() {
  let sum = this.marks.reduce((acc, cv) => {
    return acc + cv;
}, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


// let student1 = new Student('Анна', 'женщина', 22);
// let student2 = new Student('Саша', 'мужчина', 21);
// let student3 = new Student('Иван', 'мужчина', 27);