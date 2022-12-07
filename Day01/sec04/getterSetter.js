class Profile{
  constructor(name){
    this.setName(name)
  }

  getName(){
   return this.name;
  }

  setName(newName){
    newName = newName.trim();
    if(newName === ""){
      throw "The name can't be Empty!"
    }
    this.name = newName;
  }
}

const getInfo = new Profile("Joe")
console.log(getInfo.name)

getInfo.setName("Joseph");
console.log(getInfo.getName())