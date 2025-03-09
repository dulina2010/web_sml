class ParentController {
    constructor(parentModel, db) {
        this.parentModel = parentModel;
        this.db = db;
    }

    async viewChildrenProgress(parentId) {
        try {
            const children = await this.db.getChildrenByParentId(parentId);
            return children.map(child => ({
                id: child.id,
                name: child.name,
                progress: child.progress
            }));
        } catch (error) {
            console.error("Error fetching children's progress:", error);
            throw error;
        }
    }

    async updateChildProgress(childId, progressData) {
        try {
            await this.db.updateChildProgress(childId, progressData);
            console.log(`Progress updated for child ID: ${childId}`);
        } catch (error) {
            console.error("Error updating child's progress:", error);
            throw error;
        }
    }

    async getParentDetails(parentId) {
        try {
            const parentDetails = await this.db.getParentById(parentId);
            return {
                id: parentDetails.id,
                name: parentDetails.name,
                children: parentDetails.children
            };
        } catch (error) {
            console.error("Error fetching parent details:", error);
            throw error;
        }
    }
}

export default ParentController;