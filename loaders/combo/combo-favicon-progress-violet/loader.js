var r=root.querySelector('.prog');var n=root.querySelector('.pct');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;r.style.setProperty('--p',v+'%');n.textContent=v+'%';},28);
