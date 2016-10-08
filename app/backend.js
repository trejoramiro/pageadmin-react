class Backend {

  constructor() {
    this.deleted = [];
    this.updates = [];

    this.pages = [
      {"id": 1, "title": "Home", "body": "..."},
      {"id": 2, "title": "About Us", "body": "..."},
      {"id": 3, "title": "Contact Us", "body": "..."},
      {"id": 4, "title": "Products", "body": "..."}
    ];
  }

  getAll() {
    return this.pages
      .filter( (page) => { return this.deleted.indexOf(page.id) == -1 })
      .map( (page) => {
          var modified = page;
          this.updates.forEach( (update) => {
            if (update[0] == page.id) {
              modified[update[1]] = update[2];
            }
          });
          return modified;
      });
  }

  update(id, property, value) {
    this.updates.push([id, proprty, value]);
  }

  delete(id) {
    this.deleted.push(id);
  }
}

export default Backend;
