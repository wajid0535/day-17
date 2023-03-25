let count=document.querySelector(".count")
let time=10;
count.innerHTML=time--;
setTimeout(() => {
    count.innerHTML=time--; 
    setTimeout(() => {
        count.innerHTML=time--; 
        setTimeout(() => {
            count.innerHTML=time--; 
            setTimeout(() => {
                count.innerHTML=time--;
                setTimeout(() => {
                    count.innerHTML=time--; 
                    setTimeout(() => {
                        count.innerHTML=time--; 
                        setTimeout(() => {
                            count.innerHTML=time--; 
                            setTimeout(() => {
                                count.innerHTML=time--; 
                                setTimeout(() => {
                                    count.innerHTML=time--;
                                    setTimeout(() => {
                                        count.innerHTML= "Happy Independence Day"
                                    }, 1000); 
                                }, 1000);
                            }, 1000); 
                        }, 1000); 
                    }, 1000); 
                }, 1000); 
            }, 1000);
        }, 1000);
    }, 1000);
   
    
}, 1000);