class Group {
  constructor() {
    this.members = [];
  }

  has(value) {
    return this.members.includes(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  static from(collection) {
    let group = new Group();

    for (let value of collection) {
      group.add(value);
    }

    return group;
  }
}
