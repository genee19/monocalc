// Keeps roster of operations to display and/or undo
export default class Roster {
  constructor(){
    this.list = [];
  }
  
  push(item) {
    return this.list = [...this.list, item]
  }
}
