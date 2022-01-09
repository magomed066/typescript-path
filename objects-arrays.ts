// const person: {
//   age: number,
//   name: string
// } = {
//   age: 20,
//   name: 'Magomed'
// }

// const product: {
//   id: string, 
//   price: number,
//   tags: string[],
//   details: {
//     title: string,
//     description: string
//   }
// } = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }

// console.log(person.nickname) // Gets an error that the property doesn't exist

const person = {
  age: 20, 
  name: "Magomed",
  hobbies: ['Sports', 'Reading']
}

let favoriteActivities: string[]
// favoriteActivities = ['Sports', 1] // Gets an error
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // Gets an ERROR!
}


