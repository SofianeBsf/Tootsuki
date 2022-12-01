let counter = 1 ;

        function count(){
            counter = counter + 1;
              document.querySelector('.pp').innerHTML=counter;       
        };
        document.addEventListener("DOMContentLoaded", function() {
                  document.getElementById("buttonp").onclick=count;
              });
        function countb(){
    if(counter>1){
        counter--;
    document.querySelector('.pp').innerHTML=counter;
    };
    
        };
        document.addEventListener("DOMContentLoaded",function(){
            document.getElementById("buttonm").onclick=countb;
        });