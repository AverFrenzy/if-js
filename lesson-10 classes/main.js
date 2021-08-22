const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName)
    this.admissionYear = admissionYear
    this.courseName = courseName
  }

  get course() {
    const currentYear = new Date().getFullYear()
    return currentYear -  this.admissionYear
  }
}

class Students {
  constructor(studentsData) {
    const students = []
    studentsData.forEach((item)  => students.push(new Student(item.firstName, item.lastName, item.admissionYear, item.courseName)))
    this.students = students
  }

  getInfo() {
    return this.students.sort((a, b) => a.course - b.course).map(item => `${item.fullName} - ${item.courseName}, ${item.course}`)
  }
}

const students = new Students(studentsData)
console.log(students.getInfo())



