const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let catsCount=0;
  matrix.forEach(
    (elem)=>{
      elem.forEach(
        (el)=>{if(el==`^^`)catsCount++;

        }
      )
    }
  )
  return catsCount;
};
