const add = (a,b)=>{
   return a+b;
}
const fetchData = (callback)=>{
   setTimeout(function(){
       callback("someData")
   },300)
}
module.exports = {
    add,fetchData
}