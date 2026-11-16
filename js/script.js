const langButtons=[...document.querySelectorAll('[data-lang]')];
    function setLang(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-th][data-en]').forEach(el=>{const value=el.dataset[lang];if(value.includes('<'))el.innerHTML=value;else el.textContent=value});langButtons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('torako-lang',lang)}
    const saved=localStorage.getItem('torako-lang');setLang(saved||((navigator.language||'th').toLowerCase().startsWith('th')?'th':'en'));
    langButtons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    const themeBtn=document.getElementById('themeBtn');
    const themeColor=document.querySelector('meta[name="theme-color"]');
    function syncThemeControl(){const night=document.body.classList.contains('night');themeBtn.textContent=night?'☀':'☾';themeBtn.setAttribute('aria-label',night?'Switch to light mode':'Switch to dark mode');if(themeColor)themeColor.content=night?'#17131c':'#fbf8f5'}
    if(localStorage.getItem('torako-theme')==='night')document.body.classList.add('night');
    syncThemeControl();
    themeBtn.addEventListener('click',()=>{document.body.classList.toggle('night');const night=document.body.classList.contains('night');localStorage.setItem('torako-theme',night?'night':'day');syncThemeControl()});
    document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('navLinks').classList.toggle('open'));document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
    const topButton=document.getElementById('toTop');window.addEventListener('scroll',()=>topButton.classList.toggle('show',window.scrollY>500),{passive:true});document.getElementById('year').textContent=new Date().getFullYear();

