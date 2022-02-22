document.getElementById('submit-btn').addEventListener('click',function(){
    const numBox=document.getElementById('num-box');
    const numBoxValue=numBox.value;
    const field=document.getElementById('field');
    field.innerHTML='';
    for(let i=1;i<11;i++){
        const calc=numBoxValue*i;
        const p=document.createElement('div');
        p.style.marginBottom='10px'
        p.style.borderBottom='3px solid lightblue'
        p.innerHTML= `${numBoxValue}*${i}= ${calc}`
        field.appendChild(p);
    
        numBox.value='';
       
        
    }

})
function clear(){
    // window.location.reload();
    console.log('clicked');
}
document.getElementById('clear').addEventListener('click',function(){
    window.location.reload();
})