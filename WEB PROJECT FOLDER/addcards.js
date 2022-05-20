
var data=[{title:"title1",dis:"discription1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia8vKQjgqw5v2GP5QIrb3TD0nsGO-bqavyA&usqp=CAU"},
{title:"title2",dis:"discription2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhy_-kXRyzWhE3_bP6BuAdhrJuHwoSz9Q0w&usqp=CAU"},
{title:"title1",dis:"discription1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia8vKQjgqw5v2GP5QIrb3TD0nsGO-bqavyA&usqp=CAU"},
{title:"title2",dis:"discription2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhy_-kXRyzWhE3_bP6BuAdhrJuHwoSz9Q0w&usqp=CAU"},
{title:"title1",dis:"discription1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia8vKQjgqw5v2GP5QIrb3TD0nsGO-bqavyA&usqp=CAU"},
{title:"title2",dis:"discription2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhy_-kXRyzWhE3_bP6BuAdhrJuHwoSz9Q0w&usqp=CAU"},
{title:"title1",dis:"discription1",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia8vKQjgqw5v2GP5QIrb3TD0nsGO-bqavyA&usqp=CAU"},
{title:"title2",dis:"discription2",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhy_-kXRyzWhE3_bP6BuAdhrJuHwoSz9Q0w&usqp=CAU"}]
data.forEach((element,i)=>{
const main=document.querySelector('.main');
const card=document.createElement('div');
card.classList='card';

const mcard=`<img src=${data[i].image} alt="Avatar" style="width:100%">
<div class="container">
<h4><b>${data[i].title}</b>
</h4> <p>${data[i].dis}</p>
</div>
<a href="payment.html">  <button class="button button1" >buy</button></a>`;
card.innerHTML+=mcard;
main.appendChild(card);
});