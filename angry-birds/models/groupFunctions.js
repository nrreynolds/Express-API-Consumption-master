const avianData = require('../data/angry_birds');

// Gets all the birds and filters out the humans
const getBirdsData = () => {
  let birdsObj = {'birds': []};
  avianData.forEach(function(organism){
    if(organism.species === 'bird'){
      birdsObj.birds.push(organism);
    }
  });
  return birdsObj
}

// Taka stuff
// const getBirds = () => {
//   avianData.filter( (bird) => {
//     return bird.species === 'Bird';
//   })
// }

// Gets the individual data from a bird
const getIndData = (ID) => {
  let targetBird = {};
  avianData.forEach(function(bird){
    if(bird.id === parseInt(ID)){
      targetBird = bird;
    }
  });
  return targetBird;
}

// Creates an array of objects that hold the pairs of key value pair
const allFilters = [
  {'name': 'The Flock', 'type': 'group'},
  {'name': 'The Stella Flock', 'type': 'group'},
  {'name': 'Ice Flock', 'type': 'group'},
  {'name': 'Mighty Creature', 'type': 'group'},
  {'name': 'The Instructor-flock', 'type': 'group'},
  {'name': 'Cupcakes', 'type': 'feels'},
  {'name': 'Ice cream', 'type': 'feels'},
  {'name': 'Bananas', 'type': 'feels'},
  {'name': 'bird', 'type': 'species'},
  {'name': 'human', 'type': 'species'}
]

const filterGroup = (unparsedFilter) => {
  const parsedFilter = unparsedFilter.split('+').join(' ');
  let filterType;

  allFilters.forEach(function(filter){
    if(filter.name === parsedFilter){
      filterType = filter.type;
    }
  })

  let birdsObj = {'birds': []};
  avianData.forEach(function(organism){
    if(organism[filterType] === parsedFilter){
      birdsObj.birds.push(organism);
    }
  });

  return birdsObj;
}

module.exports = {getBirdsData: getBirdsData, getIndData: getIndData, filterGroup: filterGroup}
