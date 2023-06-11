const items = [];
module.exports = class person {

    constructor(id, firstName, lastName, email, imgUrl) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.imgUrl = imgUrl;
    }

    save() {
        items.push(this);
    }

    static getAllItems() {
        return items;
    }

    static getProguctById(id) {
        const pd = items.find(p => p.id == id);
        return pd;
    }


}