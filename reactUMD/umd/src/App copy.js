
function findSome(arr,no){
    let returnArr = [];
    arr.forEach(function(value,index){
          if(arr.indexOf(no - value) != -1){
               returnArr.push([no,no-value]);
          }
    });
    return returnArr;
}