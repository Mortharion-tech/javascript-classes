//How do we declare variables with classes?? Let and const not available anymore?
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
//console.log(currentYear);

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(value) {
        if (!value) {
            console.log('First name cannot be empty');
            return;
        }
        this._firstName = value;
    }

    set lastName(value) {
        if (!value) {
            console.log('Last name cannot be empty');
            return;
        }
        this._lastName = value;
    }

    set age(value) {
        if (!value) {
            console.log('Age cannot be empty');
            return;
        }
        this._age = value;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get birthYear() {
        let birthYear = currentYear - this.age;
//        console.log(birthYear);
        return birthYear;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Teacher extends User {
    constructor(firstName, lastName, age, groups, yearsOfExperience) {
        super(firstName, lastName, age);
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    set groups(value) {
        if (!value) {
            console.log('Groups cannot be empty');
            return;
        }
        this._groups = value;
    }

    set yearsOfExperience(value) {
        if (!value) {
            console.log('Years of experience cannot be empty');
            return;
        }
        this._yearsOfExperience = value;
    }

    get groups() {
        return this._groups;
    }

    get yearsOfExperience() {
        return this._yearsOfExperience;
    }

    isGroupTeacher(groupName) {
//        console.log(groupName);
//        console.log(this.groups);
//        console.log(this.groups.some((data) => data.includes(groupName)));
        if (this.groups.some((groupArray) => groupArray.includes(groupName))) {
            return true;
        } else {
            return false;
        }
    }
}

class Student extends User {
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;

    constructor(firstName, lastName, age, group, averageGrade) {
        super(firstName, lastName, age);
        this.group = group;
        this.averageGrade = averageGrade;        
    }

    set group(value) {
        if (!value) {
            console.log('Group cannot be empty');
            return;
        }
        this._group = value;
    }

    set averageGrade(value) {
        if (!value) {
            console.log('Average grade cannot be empty');
            return;
        }
        this._averageGrade = value;
    }

    get group() {
        return this._group;
    }

    get averageGrade() {
        return this._averageGrade;
    }

    isEligibleForScholarship() {
//        console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP);
        if (this._averageGrade <= Student.MIN_GRADE_FOR_SCHOLARSHIP) {
            return true;
        } else {
            return false;
        }
    }
}

//this code has to work
const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41);
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9);
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9);

console.log(student1.fullName); // Tom Cruise
console.log(student2.birthYear); // 1975
console.log(student1.isEligibleForScholarship()); // true
//Why is it true? Student 1 grade is worse than 4
console.log(student2.isEligibleForScholarship()); // false
//Why is it false? Student 2 grade is better than 4
console.log(teacher1.isGroupTeacher(student1.group)); // true
console.log(teacher1.isGroupTeacher(student2.group)); // false
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4