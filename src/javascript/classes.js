class list{
    constructor(){
        this.data = [];

    }

    addLista(task){
        this.task.push(task);
        console.log(this.task);
    }
}


class toDO extends list{
  constructor(){
      super();

      this.user = 'gabriel';
  }

  showUser(){
      console.log(this.user)
  }
}

module.exports = toDO;