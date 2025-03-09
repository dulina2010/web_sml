class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            grade: this.grade
        };
    }

    updateGrade(newGrade) {
        this.grade = newGrade;
    }

    // Additional methods for managing student-specific data can be added here
}

export default Student;