import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");t.addEventListener("submit",a);function a(o){o.preventDefault();const r=o.target.delay.value,i=o.target.state.value;new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(r):l(r)},r)}).then(e=>{s.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:resolveImageUrl})}).catch(e=>{s.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:imageUrl,iconColor:"#fff"})}),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map
