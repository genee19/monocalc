// Keeps roster of operations to display and/or undo
export default class Roster {
  constructor(){
    this.list = [];
  }
  
  push(item) {
    return this.list = [...this.list, item]
  }

  remove(index) {
    let item = this.list[index];
    this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));
    return [this.list, item]
  }
}
