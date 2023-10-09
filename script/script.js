//eserciozio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageCalculator(_otherPerson) {
    console.log(_otherPerson);
    if (this.age < _otherPerson.age) {
      console.log(
        this.firstName + ` e' piu' giovane di ${_otherPerson.firstName}`
      );
    } else {
      console.log(
        _otherPerson.firstName + ` e' piu' giovane di ${this.firstName}`
      );
    }
  }
}

const lorenzo = new User(`lorenzo`, `baldassari`, `30`, `Milano`);
console.log(lorenzo);
const giovanni = new User(`giovanni`, `rossi`, `50`, `Ravenna`);
console.log(giovanni);
const maria = new User(`maria`, `bianchi`, `10`, `Livorno`);
console.log(maria);

giovanni.ageCalculator(lorenzo);
maria.ageCalculator(lorenzo);

//esercizio 2

class Pet {
  constructor(_petName, _petOwner, _species, _breed) {
    this.petName = _petName;
    this.petOwner = _petOwner;
    this.species = _species;
    this.breed = _breed;
  }
  checkOwner(_otherPetOwner) {
    if (this.petOwner === _otherPetOwner.petOwner) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

const ghighini = new Pet(`ghighini`, `lorenzo`, `cat`, `persian`);
const pluto = new Pet(`pluto`, `lorenzo`, `dog`, `husky`);
const balto = new Pet(`balto`, `mara`, `dog`, `wolf`);
console.log(ghighini);
console.log(pluto);
console.log(balto);

pluto.checkOwner(ghighini);
pluto.checkOwner(balto);

const petname = document.getElementById(`petName`);
const petOwner = document.getElementById(`petOwner`);
const species = document.getElementById(`species`);
const breed = document.getElementById(`breed`);
const listPosition = document.getElementById(`lists`);
const block = document.getElementById(`block`);
console.log(petname);
// const validity=document.getElementById(`validity`)

const createList = function (event) {
  event.preventDefault();
  const title = document.createElement(`h5`);
  title.innerText = petname.value;
  title.classList.add(`title`);
  const li1 = document.createElement(`li`);
  li1.innerHTML = `<span class="span1"> Name: </span> ${petname.value}`;
  const li2 = document.createElement(`li`);
  li2.innerHTML = `<span class="span1"> Owner: </span> ${petOwner.value}`;
  const li3 = document.createElement(`li`);
  li3.innerHTML = `<span class="span1"> species :</span> ${species.value}`;
  const li4 = document.createElement(`li`);
  li4.innerHTML = `<span class="span1"> Breed :</span> ${breed.value}`;
  const list = document.createElement(`ol`);
  list.classList.add(`ol`);
  const deleteButton = document.createElement(`button`);
  deleteButton.classList.add(`button1`);
  deleteButton.innerText = `Delete`;
  deleteButton.addEventListener(`click`, function () {
    listPosition.removeChild(this.parentNode);
  });
  list.appendChild(title);
  list.appendChild(li1);
  list.appendChild(li2);
  list.appendChild(li3);
  list.appendChild(li4);
  list.appendChild(deleteButton);
  listPosition.appendChild(list);
  petname.value = "";
  petOwner.value = "";
  species.value = "";
  breed.value = "";
};
