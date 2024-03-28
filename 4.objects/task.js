function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if ("marks" in this) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function (...marksToAdd) {
    if ("marks" in this && this.marks.length !== 0) {
        return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    } else return 0
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}
