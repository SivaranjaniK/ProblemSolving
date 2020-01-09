function findCelebrity(arr){
  const relationMap = {};
  const celebrityMap = {};
  for(let personPair of arr) {
    if (personPair[0] in relationMap) {
      relationMap[personPair[0]].push(personPair[1]);
    } else {
      relationMap[personPair[0]] = [personPair[1]];
    }
    if(personPair[0] in celebrityMap) {
      delete celebrityMap[personPair[0]];
    }
    if(!(personPair[1] in relationMap)) {
      celebrityMap[personPair[1]] = celebrityMap[personPair[1]] + 1 || 1;
    }
  }

  let numberOfCommoners = Object.keys(relationMap).length;
  let celebrity = "No celebrities"
  for(let celeb in celebrityMap) {
    if(celebrityMap[celeb] === numberOfCommoners){
      celebrity = celeb;
      break;
    }
  }  
  return celebrity;
}


