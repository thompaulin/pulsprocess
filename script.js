const button=document.querySelector('[data-menu-button]');const menu=document.querySelector('[data-menu]');if(button&&menu)button.addEventListener('click',()=>menu.classList.toggle('open'));const form=document.querySelector('[data-quote-form]');if(form){const params=new URLSearchParams(window.location.search);const pack=params.get('pack');if(pack&&form.elements['pack'])form.elements['pack'].value=pack;form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Demande de devis Pulse');const body=encodeURIComponent(`Bonjour,

Je souhaite recevoir un devis pour :

Pack / besoin : ${d.get('pack')||''}
Date : ${d.get('date')||''}
Lieu : ${d.get('lieu')||''}
Nombre de personnes : ${d.get('personnes')||''}
Nom : ${d.get('nom')||''}
Téléphone : ${d.get('tel')||''}
Email : ${d.get('email')||''}

Message :
${d.get('message')||''}

Merci.`);window.location.href=`mailto:contact@pulseprocess.fr?subject=${subject}&body=${body}`})}