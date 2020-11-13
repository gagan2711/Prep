export default init;
function createElement(elemName,className,html){
   const $elm =  document.createElement(elemName);
   $elm.innerHTML(html);
   header.classList.add(className);
   return $elm;
}
function tabs(){
     const container = createElement('div','container');
     const header = createElement('ul','header');
     const layout = createElement('div','layout');
     container.append(header);
     container.append(layout);
     return {
         container:container,
         header:header,
         layout:layout
     }
}
function init(list,callback){
    const tabs = tabs();
    list.forEach((item,index)=>{
        const liItem = createElement('li',"item",item.label)
        tabs.header.appendChild(liItem);
        if(index==0){
            tabs.layout.appendChild(callback(item));
        }
        liItem.addEventListner('click',function(){
            tabs.layout.appendChild(callback(item));
        })
    })
}