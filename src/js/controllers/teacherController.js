export class TeacherController {
    constructor(db) {
        this.db = db; // Reference to the IndexedDB instance
    }

    async addClass(classData) {
        try {
            await this.db.add('classes', classData);
            console.log('Class added successfully');
        } catch (error) {
            console.error('Error adding class:', error);
        }
    }

    async enterGrades(gradeData) {
        try {
            await this.db.add('grades', gradeData);
            console.log('Grades entered successfully');
        } catch (error) {
            console.error('Error entering grades:', error);
        }
    }

    async getClasses(teacherId) {
        try {
            const classes = await this.db.getAll('classes', { teacherId });
            return classes;
        } catch (error) {
            console.error('Error fetching classes:', error);
            return [];
        }
    }

    async getGrades(classId) {
        try {
            const grades = await this.db.getAll('grades', { classId });
            return grades;
        } catch (error) {
            console.error('Error fetching grades:', error);
            return [];
        }
    }
}