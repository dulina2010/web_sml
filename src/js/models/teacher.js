class Teacher {
    constructor(id, name, subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }

    assignHomework(homework) {
        // Logic to assign homework
    }

    enterGrades(studentId, grade) {
        // Logic to enter grades for a student
    }

    manageClass(classId) {
        // Logic to manage class activities
    }

    getProfile() {
        return {
            id: this.id,
            name: this.name,
            subject: this.subject
        };
    }
}

export default Teacher;