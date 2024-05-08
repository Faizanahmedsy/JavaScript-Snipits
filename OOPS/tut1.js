class Student {
  constructor(name, techStack, college, degree) {
    this.name = name;
    this.techStack = techStack;
    this.college = college;
    this.degree = degree;
  }
}

const faizan = new Student(
  "Faizan",
  ["Next", "React", "Ionic"],
  "Nemon International School Of Technology",
  "Btech in Computer Science and Data Science"
);

console.log(faizan.techStack);
console.log(faizan.college);
