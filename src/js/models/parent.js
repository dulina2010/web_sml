class Parent {
    constructor(id, name, children = []) {
        this.id = id;
        this.name = name;
        this.children = children; // Array of child IDs
    }

    addChild(childId) {
        if (!this.children.includes(childId)) {
            this.children.push(childId);
        }
    }

    removeChild(childId) {
        this.children = this.children.filter(child => child !== childId);
    }

    getChildren() {
        return this.children;
    }

    getDetails() {
        return {
            id: this.id,
            name: this.name,
            children: this.children
        };
    }
}

export default Parent;