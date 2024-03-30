//callback function is what? how do we use it 
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  //take out everything where the year does not live within 1500's

  const targetBirth = inventors.filter(inventor =>  inventor.year >= 1500  )

  //CORRECT
  
  //why callback function? you are breaking down the inventors array into its indexes. 
  console.log(targetBirth)
  
  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)
  // the new data set needs to have specific properties from the keyss. 
  
  // const names = inventors.map((inventor) => inventor.first && inventor.last)

  const onlyNames = inventors.map(inventor =>  ({first: inventor.first, last: inventor.last}) )
  console.log(onlyNames)
  //close youre creating an ojbect so make sure youre syntax is correct, you need to have the first and last in an object and that means callback notation with what you are passing which is the specific new object params.

  //you cna't just pass this last one because both are truthy plus its not an ojbect, you need the first and last keys invovled here! 
  // console.log(names)
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order
  //subtract one property value from another to see which is more. 
 
  // inventors.sort((a,b, inventor)=> ( inventor.passed - inventor.year)  )
const sortedInventors = inventors.sort((a,b) => a.year - b.year)
//reread the problem, overcomplication 
console.log(sortedInventors)
  
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
//identify a specific value and the property it belongs to 

// const ada = inventors.find( 'ada' => {first: 'ada' })
//issue with argument, you are iterating on an array so you need to basically be calling the individual indexes and then keying into each ones specific property that is equal to the value we are looking for
  
const ada = inventors.find(inventor => inventor.first == 'Ada' )
  console.log(ada)
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
 //subtract values to get a total years of each inventor and add that to a sumtotal starting at zero

  // const yearsLived = inventors.reduce(inventor=> {
  //   let sumTotal =

  // })
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
  
const reorganizedNames = people.map( person => person.split(' ').reverse().join(', ')   )
//correct!

console.log(reorganizedNames)
  //ultimately we want to join back up after we reverse and split into two strings and we are inserting this into a new array 
// const namesProper = people.map(person => split(person).reverse().join(', '));
//the split needs the style of how its to be done, but you also need to the form to do it on. You've created the name for the indecies with your argument. 

  // console.log(happy)
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".
  //create an empty object where we are going to have keys and how often the keys are mentioned from the data set. Increment if the key has been mentioned otherwise set it to one when its read .

  // function count(data) {
  //   counter = {}; 
    
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
//use 19 as an operator to see if the value of their year born subtracts from the current year is greater. 

const isOlderThanNineTeen = devs.some(dev => new Date().getFullYear() - dev.year >= 19)
console.log(isOlderThanNineTeen)

// console.log(atLeastOne)
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?
  //same operate this time it will be ab oolean 

// console.log(every)
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  
  // take the value keyed in from the property and find it. 
 
  // console.log(targetId);
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  
  //take a value at an array index to return the idnex 
 
//  console.log(targetIndex);
  
  