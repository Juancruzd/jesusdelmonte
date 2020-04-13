 
function incfont() {
    var obj=document.getElementsByClassName("contenido");
    console.log(obj); 
    for(var i=0;i<obj.length;i++){   
            var fontsize = obj[i].style.fontSize; 
              
            fontsize = parseInt(fontsize.replace(/%/g, '')); 
            fontsize = parseInt(fontsize); 
            
            if(isNaN(fontsize)){
                fontsize=100;
                obj[i].setAttribute("style", "font-size:"+fontsize+"%");
            }else{
                if(fontsize<150){
                    fontsize += 10;      
                    obj[i].setAttribute("style", "font-size:"+fontsize+"%");
                } 
            }
    }
}
function decfont() {
    var obj=document.getElementsByClassName("contenido"); 
    for(var i=0;i<obj.length;i++){   
            var fontsize = obj[i].style.fontSize; 
              
            fontsize = parseInt(fontsize.replace(/%/g, '')); 
            fontsize = parseInt(fontsize); 
            console.log(fontsize);
            if(isNaN(fontsize)){
                fontsize=100;
                obj[i].setAttribute("style", "font-size:"+fontsize+"%");
            }else{
                if(fontsize>50){
                    fontsize -= 10;      
                    obj[i].setAttribute("style", "font-size:"+fontsize+"%");
                } 
            }
    }
}