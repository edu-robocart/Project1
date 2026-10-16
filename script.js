(function(){
const pages=[['index.html','HOME','home'],['intro.html','บทนำ','intro'],['related.html','เอกสารที่เกี่ยวข้อง','related'],['method.html','วิธีดำเนินการ','method'],['results.html','ผลการศึกษา','results'],['conclusion.html','สรุปและอภิปรายผล','conclusion'],['book.html','เล่มประกอบโครงการ','book']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin','<div id="bar"></div>');
document.getElementById('site-header').outerHTML='<header><a class="logo" href="index.html"><span>🤖</span> ROBO<b>CART</b></a><button id="burger" aria-label="เมนู">☰</button><nav id="nav">'+pages.map(p=>'<a href="'+p[0]+'"'+(p[2]===cur?' class="on"':'')+'>'+p[1]+'</a>').join('')+'</nav></header>';
document.getElementById('site-footer').outerHTML='<footer>เว็บไซต์นี้เป็นส่วนหนึ่งของรายวิชาโครงงานเทคโนโลยีดิจิทัลเพื่อการศึกษาและคอมพิวเตอร์ศึกษา<br>ภาควิชาเทคโนโลยีดิจิทัลเพื่อการศึกษาและคอมพิวเตอร์ศึกษา คณะศึกษาศาสตร์ มหาวิทยาลัยบูรพา<br><b>© ROBOCART</b></footer><button id="top" aria-label="กลับขึ้นบน">↑</button>';
document.getElementById('burger').onclick=()=>document.getElementById('nav').classList.toggle('open');
const top=document.getElementById('top');top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
addEventListener('scroll',()=>{const h=document.documentElement,p=h.scrollTop/(h.scrollHeight-h.clientHeight||1);document.getElementById('bar').style.width=p*100+'%';top.classList.toggle('on',h.scrollTop>400)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('show');
e.target.querySelectorAll('.meter i').forEach(m=>m.style.width=m.dataset.w+'%');
e.target.querySelectorAll('[data-count]').forEach(n=>{const t=+n.dataset.count,d=n.dataset.dec|0,s=n.dataset.suf||'';let st=null;const f=ts=>{st=st||ts;const k=Math.min((ts-st)/1400,1);n.textContent=(t*k).toFixed(d)+s;k<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});
io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const st=document.querySelector('.stage');
if(st){let a=0,drag=false,x0=0;const cube=st.querySelector('.cube'),frames=+st.dataset.frames||36,src=st.dataset.src;let img=null;
if(src){img=new Image();img.onload=()=>{st.innerHTML='';st.appendChild(img);set(0)};img.src=src.replace('{n}','01')}
const set=d=>{a+=d;if(img&&img.parentNode){let n=((Math.round(-a/(360/frames))%frames)+frames)%frames+1;img.src=src.replace('{n}',String(n).padStart(2,'0'))}else if(cube)cube.style.transform='rotateX(-18deg) rotateY('+a+'deg)'};
st.onpointerdown=e=>{drag=true;x0=e.clientX;st.setPointerCapture(e.pointerId)};
st.onpointermove=e=>{if(drag){set((e.clientX-x0)*.8);x0=e.clientX}};
st.onpointerup=()=>drag=false;
(function auto(){if(!drag)set(.4);requestAnimationFrame(auto)})();}
})();
