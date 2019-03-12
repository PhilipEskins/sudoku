function makeArray(){
  var numArray=[];
  for (var i=1;numArray.length<=8;i++){
    var random=Math.ceil(Math.random()*9);
     if(!numArray.includes(random)){
      numArray.push(random);
    }

  }
  return numArray;
}

// function makeGrid(){
//   var grid=[];
//   var newRow = makeArray();
//   var counter=0;
//   for (var i=1;grid.length<=1;i++){
//     for (var j=0; j<newRow.length; j++) {
//       if (newRow[i] === grid[i][j]) {
//         counter++;
//         console.log(counter);
//       }
//       grid.push(makeArray())
//     }
//   }
//   return grid;
// }

function makeGrid3(){
  var grid=[];
  grid.push(makeArray())
  while(grid.length<9){
    var newArray=makeArray();
    var counter=0;
    for (var i=0;i<grid.length;i++){
      for(var j=0;j<9;j++){
        if(newArray[j]===grid[i][j]){
          counter++;
        }
      }
      if(counter===grid.length){
        grid.push(newArray);
      }
    }
  }
  return grid;
}

console.log(makeGrid3());


// function makeGrid2(){
//   var grid=[];
//   grid.push(makeArray())
//   for (var i=1;grid.length<=8;i++){
//     var newArr=makeArray();
//     for(var j=0;j<=8;j++){
//       if (newArr[i]===grid[i-1][j]){
//         counter++;
//       }
//
//     }
//   }
//   return grid;
// }
//
// function testGrid(){
//   var newGrid= makeGrid();
//   var controlArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   for (var i=0;i<9;i++){
//     var counter=0;
//     for (var j=0;j<9;j++){
//       if(controlArr[i]===newGrid[j][i]){
//         counter++;
//       }
//     }
//     if(counter>1){
//       testGrid();
//     }
//   }
//   return newGrid;
// }
//
// var myTest=testGrid();

console.log(makeGrid());
