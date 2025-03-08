/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student{
  constructor(name, age, grades){
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {  
        this.grades.push(grade);  
        return `The grade ${grade} has been added to the student's grades.`;
    } else {
        return `Invalid grade.`;
    }
}

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    
    let sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
}

  hasPassed(passingGrade){
 if(this.calculateAverageGrade() >= passingGrade){
  return `The student has passed.`;}
  else{
    return `The student has not passed.`;
  }
}
getName() {
  return this.name;
}

getAge() {
  return this.age;
}
}

class Course {
  constructor(title) {
      this.title = title;
      this.students = [];  
  }

  enrollStudent(student) {
    if (student instanceof Student) {  
      this.students.push(student);
      return `${student.name} has been enrolled in ${this.title}.`;
  } else {
      return `Only students can be enrolled.`;
  }
  }
}
let student1 = new Student("Kelvin", 20);
console.log(student1.addGrade(90));   
console.log(student1.addGrade(100));  
console.log(student1.calculateAverageGrade()); 
console.log(student1.hasPassed(70));  

let course1 = new Course("Math 101");
console.log(course1.enrollStudent(student1));
console.log(course1.enrollStudent("Mike"));  