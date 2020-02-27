class PGroup {
  constructor(members) {
    this.members = members;
  }

  has(value) {
    return this.members.includes(value);
  }

  add(value) {
    if (this.has(value)) {
      return this;
    }

    return new PGroup(this.members.concat([value]));
  }

  delete(value) {
    if (!this.has(value)) {
      return this;
    }

    return new PGroup(this.members.filter(m => m !== value));
  }
}
