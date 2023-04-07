(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.page {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  background-color: #3981f1;\n  padding: 30px;\n}\n\n.logo {\n  color: white;\n  font-weight: bold;\n  font-size: 36px;\n}\n\n.main {\n  flex-grow: 1;\n  display: flex;\n}\n\n.side-bar {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 30px 40px;\n  min-width: 250px;\n  width: 25vw;\n  background-color: #f5f6f8;\n}\n\n.priority-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.projects {\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.priority-list button,\n#add-project-btn {\n  cursor: pointer;\n  text-align: start;\n  font-size: 18px;\n  background-color: #f5f6f8;\n  border: none;\n  color: black;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.name-div {\n  display: flex;\n}\n\n.name-div p {\n  flex-grow: 1;\n}\n\n.name-div button {\n  justify-self: end;\n}\n\n.form,\n.edit-form {\n  display: none;\n  flex-direction: column;\n}\n\n.project-details {\n  display: none;\n  min-width: 75vw;\n}\n\n.priority-details {\n  display: none;\n  min-width: 75vw;\n}\n\n.checklist-div,\n.notes-div {\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.note-div,\n.task-div {\n  display: flex;\n}\n\n.notes .tick-box {\n  width: 10px;\n  height: 10px;\n  border: 1px solid black;\n}\n",""]);const l=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(c[d]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&c[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],l=0;l<e.length;l++){var d=e[l],a=r.base?d[0]+r.base:d[0],s=i[a]||0,u="".concat(a," ").concat(s);i[a]=s+1;var p=n(u),y={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(y);else{var m=o(y,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var l=n(i[c]);t[l].references--}for(var d=r(e,o),a=0;a<i.length;a++){var s=n(i[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),c=n.n(i),l=n(565),d=n.n(l),a=n(216),s=n.n(a),u=n(589),p=n.n(u),y=n(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),t()(y.Z,m),y.Z&&y.Z.locals&&y.Z.locals;const f=e=>{e.preventDefault(),v.reset(),v.style.display="none"},v=document.querySelector(".edit-form"),x=e=>{v.style.display="flex",document.querySelector("#edit-title").value=projectArray[e].title,document.querySelector("#edit-description").value=projectArray[e].description;let t="true"===projectArray[e].priority;document.querySelector("#edit-priority").checked=t,document.querySelector("#edit-btn").addEventListener("click",(t=>{((e,t)=>{e.preventDefault(e);const n=document.querySelector("#edit-title").value,r=document.querySelector("#edit-description").value,o=document.querySelector("#edit-priority").checked;projectArray[t].title=n,projectArray[t].description=r,projectArray[t].priority=o.toString(),projectNameRender(projectArray),v.style.display="none"})(t,e)})),document.querySelector("#edit-cancel-btn").addEventListener("click",f)},h=()=>{q.remove(),A=document.createElement("div"),j=document.createElement("input"),L=document.createElement("button"),L.textContent="Add Task",L.addEventListener("click",(()=>{console.log(C.id),g(C.id)})),w=document.createElement("button"),w.textContent="Cancel Task",w.addEventListener("click",k),A.append(j,L,w),C.append(A)},b=()=>{M.remove(),N=document.createElement("div"),R=document.createElement("textarea"),$=document.createElement("button"),$.textContent="Add Note",$.addEventListener("click",(()=>{E(C.id)})),D=document.createElement("button"),D.textContent="Cancel Note",D.addEventListener("click",S),N.append(R,$,D),T.append(N)},g=e=>{const t=j.value;F[e].checklist.push(t),console.log(e),taskRender(F[e].checklist)},k=()=>{A.remove(),C.append(q)},E=e=>{const t=R.value;F[e].notes.push(t),console.log(F),noteRender(F[e].notes)},S=()=>{R.remove(),$.remove(),D.remove(),T.append(M)};let C,q,A,j,L,w,T,M,N,R,$,D;const H=(e,t)=>{document.querySelector(".project-details").style.display="block",document.querySelector(".priority-details").style.display="none";const n=document.querySelector(".title"),r=document.querySelector(".description"),o=document.querySelector(".priority");"x"===t?(n.textContent="",r.textContent="",o.textContent=""):(n.textContent=e[t].title,r.textContent=e[t].description,"true"===e[t].priority?o.textContent="Priority: true":o.textContent="Priority: false"),C=document.querySelector(".checklist-div"),T=document.querySelector(".notes-div"),"x"===t?(C.style.display="none",T.style.display="none"):(C.style.display="flex",C.setAttribute("id",t),T.setAttribute("id",t),T.style.display="flex",C.innerHTML="",T.innerHTML="",q=document.createElement("button"),q.textContent="+ Add Task",q.addEventListener("click",h),C.appendChild(q),M=document.createElement("button"),M.textContent="+ Add Notes",M.addEventListener("click",b),T.appendChild(M)),""!=e[t].checklist&&taskRender(e[t].checklist),""!=e[t].notes&&noteRender(e[t].notes)},I=e=>{const t=document.querySelector(".project-list");let n;t.innerHTML="";for(let r=0;r<e.length;r++){n=document.createElement("div"),n.className="name-div",n.setAttribute("id",`${r}`);const o=document.createElement("p");o.textContent=`${e[r].title}`,o.setAttribute("id",`${r}`),o.addEventListener("click",(t=>{H(e,t.target.id)})),t.prepend(n);const i=document.createElement("button");i.setAttribute("id",`${r}`),i.textContent="Edit",i.addEventListener("click",(e=>{x(e.target.id)}));const c=document.createElement("button");c.textContent="Delete",c.addEventListener("click",(()=>{P(e,n)})),n.append(o,i,c)}H(e,n?n.id:"x")},P=(e,t)=>{const n=t.id;e.splice(n,1),t.remove(),I(e),console.log(e)},Z=I,z=e=>{e.preventDefault(),_.reset(),_.style.display="none"},O=e=>{e.preventDefault(e);const t=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#priority").checked;if(!t||!n)return void alert("please fill all the details");_.reset(),_.style.display="none";const o=U(`${t}`,`${n}`,`${r}`);F.push(o),console.log(F),Z(F)};let F=[];const U=(e,t,n,r=[],o=[],i)=>({title:e,description:t,priority:n,checklist:r,notes:o,deadline:i}),_=document.querySelector(".form");document.querySelector(".top-priority").addEventListener("click",(()=>{document.querySelector(".project-details").style.display="none";const e=document.querySelector(".priority-details");e.style.display="block",console.log(projectArray);for(let t=0;t<projectArray.length;t++)if(console.log("a"),console.log(projectArray[t].priority),"true"===projectArray[t].priority){const n=document.createElement("div");n.textContent=projectArray[t].title,e.appendChild(n),n.addEventListener("click",(()=>{detailsRender(projectArray,t)}))}})),document.querySelector("#add-project-btn").addEventListener("click",(()=>{_.style.display="flex",document.querySelector("#cancel-btn").addEventListener("click",z),document.querySelector("#add-btn").addEventListener("click",O)}))})()})();