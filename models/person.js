const items = [];
module.exports = class person {

    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    save() {
        items.push(this);
    }

    static getAllItems() {
        return items;
    }


}