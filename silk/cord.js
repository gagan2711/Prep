
  var svg=d3.select("#chart")
            .append("svg")
            .attr("width","100%")
            .attr("height","500")
            .attr("style","margin-left: 25%;")
            .append('g')
            .attr("transform","translate(300,250)")
            .attr("class","circle")
    var outerRadius=170;
    var innerRadius=150;

    var points = [];
    var colors = ['#20e56f','#ff6ef5','#ffcd40',"#7752ff","#ff6757","#24d5e6","#a2495f"];
    angle = 0;
    for(var i = 0; i<=105;i++){
        var endAngle = angle + 0.04;
        if(i==104){
           //endAngle = endAngle - 0.01;
        }
        if(i<13){
         color = colors[0];
        }else if(i<35){
          color = colors[1];
        }else if(i<48){
          color = colors[2];
        }else if(i<68){
          color = colors[3];
        }else if(i<78){
          color = colors[4];
        }else if(i<95){
          color = colors[5];
        }else if(i<105){
          color = colors[6];
        }
        if(i%9==0)
        {
          outerRadius = 160;
        }else if(i%7==0){
          outerRadius = 190;
        }else if(i%15==0){
          outerRadius = 200;
        }else if(i%20==0){
          outerRadius = 220;
        }
        else{
          outerRadius = 170;
        }
        
        var arcLine=d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
        
        var pathForeground=svg.append('path')
                .datum({startAngle:angle,endAngle: endAngle})
                .style("fill",color)
                .attr("d",arcLine)  
                
        if(i == 60){
           pathForeground.attr("class","tobeShown")  
           var angleData = {
             startAngle: angle,
              endAngle: endAngle,
               outerRadius:outerRadius
           }
        }
        points.push({
        x:innerRadius*(Math.sin(angle + 0.02)),
        y:-innerRadius*(Math.cos(angle + 0.02))
        });
        angle = angle + 0.0593;
        if(angle >= 6.24){
         break;
        }
        
    }
    function addNewItem(){
       
    }
    $('path').click(function(){
         if($(this).attr("class") == "tobeShown"){
           //$(".tobeHidden").hide(500);
          
           $(".circle").children().animate({"opacity":"0.2"},500,function(){
                //$(this).css({"stroke":"red"})
            $("#chart svg").animate({"margin-left":"0%"},1000,function(){
             
             $("#lineage1").css({"width":"50%"})
             
             $("#lineage2").show(0,function(){
               $("#lineageHeader").show(1000);
                 $("#lineage").show(1000)
              
             });
             
           })
           
           })
           
           
         }
         
    });
    
    svg.append("circle")
                     .attr("cx", 0)
                     .attr("cy", 0)
                     .attr("r", 140)
                     .attr('style', "fill: none;stroke:#d4d4d4;");
    var midx =0,midy=0;
    
    //red lines
   var lineData = [points[30],points[32],points[52],points[54],points[64],points[74],points[94],points[103]]
for(var obj in lineData){
    midx = (points[20].x+lineData[obj].x)/2 ;
    midy = (points[20].y+lineData[obj].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[20].x, points[20].y],
	[midx, midy],
	[lineData[obj].x, lineData[obj].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('style', "fill: none;stroke: "+colors[1]+";")
    .attr('class', "tobeHidden line")
    
    }
    midx = (points[52].x+points[84].x)/2 ;
    midy = (points[52].y+points[84].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[52].x, points[52].y],
	[midx, midy],
	[points[84].x, points[84].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('style', "fill: none;stroke: "+colors[1]+";")
    .attr('class', "tobeHidden line")
    
    //blue lines..
    var lineData = [points[30],points[32],points[94],points[103]]
for(var obj in lineData){
    midx = (points[80].x+lineData[obj].x)/2 ;
    midy = (points[80].y+lineData[obj].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[80].x, points[80].y],
	[midx, midy],
	[lineData[obj].x, lineData[obj].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('style', "fill: none;stroke:#24d5e6;")
    .attr('class', "tobeHidden line")
    
    }
    //yellow lines..
    var lineData = [points[30],points[28],points[80],points[10]]
for(var obj in lineData){
    midx = (points[100].x+lineData[obj].x)/2 ;
    midy = (points[100].y+lineData[obj].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[100].x, points[100].y],
	[midx, midy],
	[lineData[obj].x, lineData[obj].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('style', "fill: none;stroke:#a2495f;")
    .attr('class', "tobeHidden line")
    }
    
    //red lines..
    var lineData = [points[50],points[40],points[80],points[10],points[100],points[30]]
for(var obj in lineData){
    midx = (points[60].x+lineData[obj].x)/2 ;
    midy = (points[60].y+lineData[obj].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[60].x, points[60].y],
	[midx, midy],
	[lineData[obj].x, lineData[obj].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('style', "fill: none;stroke:#7752ff;")
    .attr('class','tobeShown line')
    
    }
function addFirstline(){
    midx = (points[60].x+points[20].x)/2 ;
    midy = (points[60].y+points[20].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[60].x, points[60].y],
	[midx, midy],
	[points[20].x, points[20].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('class', "line")
    .attr('style', "fill: none;stroke:#7752ff;")
     
     }
function addSecondline(){
    midx = (points[60].x+points[26].x)/2 ;
    midy = (points[60].y+points[26].y)/2 ;
    if(midx >0 ){
     midx = midx -10;
    }else{
     midx = midx+10;
    }
    if(midy >0 ){
     midy = midy -10;
    }else{
     midy =  midy+10;
    }
    var point = [
	[points[60].x, points[60].y],
	[midx, midy],
	[points[26].x, points[26].y]
    ];
    var lineGenerator = d3.line()
	.curve(d3.curveCardinal);
    var pathData = lineGenerator(point);
    svg.append('path')
	.attr('d', pathData)
    .attr('class', "line")
    .attr('style', "fill: none;stroke:#7752ff;")
     increaseOuterRadious();
     }
function increaseOuterRadious(){
   var arcLine=d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(angleData.outerRadius + 10)
                .startAngle(angleData.startAngle)
                .endAngle(angleData.endAngle)
        var pathForeground=svg.append('path')
                .style("fill","#7752ff")
                .attr("d",arcLine)
                
}