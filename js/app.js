document.getElementById('submit-btn').addEventListener('click',function(){
    const numBox=document.getElementById('num-box');
    const numBoxValue=numBox.value;
    const field=document.getElementById('field');
    for(let i=1;i<11;i++){
        const calc=numBoxValue*i;
        const div=document.createElement('div');
        div.innerHTML= `${numBoxValue}*${i}= ${calc}`
        field.appendChild(div);
    
        numBox.value='';
       
        
    }

})