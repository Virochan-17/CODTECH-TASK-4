let a=[];
function b(){
 let c=document.getElementById('d');
 a.push(c.value);
 c.value='';
 e();
}
function e(){
 let f=document.getElementById('f');
 f.innerHTML='';
 for(let g=0;g<a.length;g++){
   let h=document.createElement('li');
   h.textContent=a[g];
   f.appendChild(h);
 }
}
