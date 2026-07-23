const env=document.getElementById('envelope');const card=document.getElementById('card');let stage=0;
document.querySelector('.seal').onclick=e=>{e.stopPropagation();if(stage!==0)return;stage=1;env.classList.add('open');}
card.onclick=e=>{e.stopPropagation();if(stage===1){stage=2;card.classList.add('open');fx();}else if(stage===2){stage=0;card.classList.remove('open');env.classList.remove('open');document.getElementById('fx').innerHTML='';}}
function fx(){const fx=document.getElementById('fx');
for(let i=0;i<30;i++){let b=document.createElement('div');b.className='balloon';b.style.left=Math.random()*100+'vw';b.style.background=['#ff6b81','#ffd166','#74c0fc','#69db7c'][i%4];b.style.animationDelay=Math.random()*2+'s';fx.appendChild(b);}
for(let i=0;i<40;i++){let p=document.createElement('div');p.className='petal';p.textContent='🌸';p.style.left=Math.random()*100+'vw';p.style.animationDelay=Math.random()*3+'s';fx.appendChild(p);}
for(let i=0;i<120;i++){let s=document.createElement('div');s.className='spark';s.style.left=(160+Math.random()*220)+'px';s.style.top=(40+Math.random()*260)+'px';s.style.animationDelay=(Math.random()*2)+'s';fx.appendChild(s);}
}