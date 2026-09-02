(()=>{
const files={ДСП:'audio/dsp.webm',ЛОК:'audio/lok.webm',ДНЦ:'audio/dnc.webm'};
const players={};let current=null;
function play(who){const src=files[who];if(!src)return;if(current){current.pause();current.currentTime=0}let a=players[who];if(!a){a=new Audio(src);a.preload='auto';players[who]=a}a.volume=(Number(document.getElementById('vol')?.value||65))/100;a.currentTime=0;current=a;const p=a.play();if(p&&p.catch)p.catch(()=>{});}
function setVolume(v){Object.values(players).forEach(a=>a.volume=v/100)}
document.querySelectorAll('[data-call]').forEach(b=>b.addEventListener('click',()=>play(b.dataset.call),true));
document.getElementById('vol')?.addEventListener('input',e=>setVolume(Number(e.target.value)));
const oldIncoming=window.radioIncoming;window.radioIncoming=function(who){play(who);return oldIncoming?oldIncoming(who):undefined};
window.radioPlaySound=play;
})();
