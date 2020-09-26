const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  
  if (!( members instanceof Array  ))return false
  if(  members.length==0) return null
  return members.map(
    (elem)=>{
      if(typeof elem == 'string')
      {
        return elem.trim()[0].toUpperCase()
      }
    }
  ).sort().join('');
};
