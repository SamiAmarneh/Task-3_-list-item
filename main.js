var data = "" ;
var cod = ['C++' , 'JAVA' , 'Python' ] ;
for(var i = 0; i <= 2; i++){
    
    data+="<option>" + cod[i] + "</option>" ;
}

document.querySelector("select").innerHTML = data;