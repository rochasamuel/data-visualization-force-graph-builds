(this["webpackJsonpdata-visualization-graph"]=this["webpackJsonpdata-visualization-graph"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(18),o=n.n(a),r=(n(120),n(121),n(14)),s=n(17),l=(n(122),n(75)),u=n(32),j=n(258),d=n(259),b=n(5),O={container:{borderRadius:"10px",background:"#F2F2F2",width:"fit-content",padding:"15px",height:"fit-content",position:"absolute",zIndex:"1",top:"20px",left:"20px"}};function p(e){return Object(b.jsx)("div",{style:O.container,children:Object(b.jsx)(d.a,{id:"combo-box-demo",options:e.nodes,getOptionLabel:function(e){return e.id},onInputChange:function(t,n){var c=e.nodes.filter((function(e){return e.id===n})),i=1+40/Math.hypot(c[0].x,c[0].y,c[0].z);e.graphRef.current.cameraPosition({x:c[0].x*i,y:c[0].y*i,z:c[0].z*i},c[0],3e3)},style:{width:300},renderInput:function(e){return Object(b.jsx)(j.a,Object(u.a)(Object(u.a)({},e),{},{label:"ID da base",variant:"outlined"}))}})})}function h(e){var t=e.data,n=e.applyFilter,c=e.label,i=e.placeholder;return Object(b.jsx)("div",{style:{marginBottom:"20px"},children:Object(b.jsx)(d.a,{multiple:!0,size:"small",limitTags:2,id:"multiple-limit-tags",options:t,style:{width:300},getOptionLabel:function(e){return e},onChange:function(e,t){n(t)},renderInput:function(e){return Object(b.jsx)(j.a,Object(u.a)(Object(u.a)({},e),{},{variant:"outlined",label:c,placeholder:i}))}})})}var f=n(4),x=n(8),m=n(261),g=n(249),v=n(250),y=n(248),C=n(51),N=n.n(C),S=n(194),A=n(252),I=n(256),k=n(255),F=n(251),D=n(253),T=n(254),P=n(246),z=Object(x.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,c=e.onClose,i=Object(f.a)(e,["children","classes","onClose"]);return Object(b.jsxs)(g.a,Object(u.a)(Object(u.a)({disableTypography:!0,className:n.root},i),{},{children:[Object(b.jsx)(S.a,{variant:"h6",children:t}),c?Object(b.jsx)(y.a,{"aria-label":"close",className:n.closeButton,onClick:c,children:Object(b.jsx)(N.a,{})}):null]}))})),R=Object(x.a)((function(e){return{root:{padding:e.spacing(2)}}}))(v.a);function L(e){return Object(b.jsx)(F.a,{component:P.a,children:Object(b.jsxs)(A.a,{size:"small","aria-label":"a dense table",children:[Object(b.jsx)(D.a,{children:Object(b.jsxs)(T.a,{children:[Object(b.jsx)(k.a,{children:Object(b.jsx)("b",{children:"ID"})}),Object(b.jsx)(k.a,{align:"center",children:Object(b.jsx)("b",{children:"Assunto"})})]})}),Object(b.jsx)(I.a,{children:e.DICIONARIO.map((function(e){return Object(b.jsxs)(T.a,{children:[Object(b.jsx)(k.a,{children:e.id}),Object(b.jsx)(k.a,{align:"center",children:e.assunto.map((function(t,n){return e.assunto[n+1]?"".concat(t,", "):"".concat(t)}))})]})}))})]})})}function w(e){var t=e.close,n=e.open,c=e.node;return Object(b.jsx)("div",{children:Object(b.jsxs)(m.a,{onClose:t,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(b.jsx)(z,{id:"customized-dialog-title",onClose:t,children:"Dicion\xe1rio de Dados"}),Object(b.jsx)(R,{dividers:!0,children:L(c)})]})})}var B=n(96),M=n.n(B),U=n(95),E=n.n(U);var J=function(e){var t=e.graphType,n=e.close,i=Object(c.useRef)(null),a=Object(c.useState)(!0),o=Object(r.a)(a,2),u=o[0],j=o[1],d=Object(c.useState)([]),O=Object(r.a)(d,2),f=O[0],x=O[1],m=Object(c.useState)([]),g=Object(r.a)(m,2),v=g[0],y=g[1],C=Object(c.useState)([]),S=Object(r.a)(C,2),A=S[0],I=S[1],k=Object(c.useState)([]),F=Object(r.a)(k,2),D=F[0],T=F[1],P=Object(c.useState)([]),z=Object(r.a)(P,2),R=z[0],L=z[1],B=Object(c.useState)({}),U=Object(r.a)(B,2),J=U[0],H=U[1],V=Object(c.useState)(!1),G=Object(r.a)(V,2),W=G[0],q=G[1],K=Object(c.useState)(!1),Q=Object(r.a)(K,2),X=Q[0],Y=Q[1],Z=Object(c.useState)(!1),$=Object(r.a)(Z,2),_=$[0],ee=$[1],te=Object(c.useState)(!1),ne=Object(r.a)(te,2),ce=ne[0],ie=ne[1],ae=Object(c.useState)([]),oe=Object(r.a)(ae,2),re=oe[0],se=oe[1],le=Object(c.useState)([]),ue=Object(r.a)(le,2),je=ue[0],de=ue[1],be=Object(c.useState)([]),Oe=Object(r.a)(be,2),pe=Oe[0],he=Oe[1],fe=Object(c.useState)([]),xe=Object(r.a)(fe,2),me=xe[0],ge=xe[1];Object(c.useEffect)((function(){fetch("conns.json").then((function(e){return e.json()})).then((function(e){y(e),I(e)}),[]),fetch("nodes.json").then((function(e){return e.json()})).then((function(e){x(e),T(e),j(!1)}))}),[]),Object(c.useEffect)((function(){var e,t;re.length>0?(e=D.filter((function(e){return e.ASSUNTO.some((function(e){return re.includes(e)}))})),t=A.filter((function(t){return Object(s.a)(e.map((function(e){return e.id}))).includes(t.source.id)&&Object(s.a)(e.map((function(e){return e.id}))).includes(t.target.id)}))):(t=A,e=D),je.length>0&&(e=e.filter((function(e){return Object(s.a)(new Set([].concat.apply([],Object(s.a)(e.DICIONARIO.map((function(e){return e.assunto})))))).some((function(e){return je.includes(e)}))})),t=t.filter((function(t){return Object(s.a)(e.map((function(e){return e.id}))).includes(t.source.id)&&Object(s.a)(e.map((function(e){return e.id}))).includes(t.target.id)}))),pe.length>0&&(e=e.filter((function(e){return pe.includes(e.PLATAFORMA)})),t=t.filter((function(t){return Object(s.a)(e.map((function(e){return e.id}))).includes(t.source.id)&&Object(s.a)(e.map((function(e){return e.id}))).includes(t.target.id)}))),me.length>0&&(e=e.filter((function(e){return me.includes(e.CONJUNTO)})),t=t.filter((function(t){return Object(s.a)(e.map((function(e){return e.id}))).includes(t.source.id)&&Object(s.a)(e.map((function(e){return e.id}))).includes(t.target.id)}))),(re.length>0||je.length>0||pe.length>0||me.length>0)&&Y(!0),L({nodes:e,links:t}),ie(!1)}),[ce]);var ve,ye=function(e){var t=1+40/Math.hypot(e.x,e.y,e.z);i.current.cameraPosition({x:e.x*t,y:e.y*t,z:e.z*t},e,3e3),H(e),q(!0)};return Object(b.jsxs)("div",{className:"Graph",children:["3D"===t?Object(b.jsx)(b.Fragment,{children:!u&&Object(b.jsx)(l.b,{ref:i,graphData:{nodes:f,links:v},nodeLabel:"id",linkLabel:function(e){return"".concat(e.protocolo)},nodeAutoColorBy:"PLATAFORMA",onNodeClick:ye,linkDirectionalParticles:1,linkDirectionalParticleWidth:2})}):Object(b.jsx)(b.Fragment,{children:!u&&Object(b.jsx)(l.a,{ref:i,graphData:{nodes:f,links:v},nodeLabel:"id",linkLabel:function(e){return"".concat(e.protocolo)},nodeAutoColorBy:"PLATAFORMA"})}),X&&function(e){var t=e.nodes,n=e.links;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"filteredResultsContainer",children:[Object(b.jsxs)("div",{className:"filteredResultsNav",children:[Object(b.jsx)(N.a,{style:{cursor:"pointer"},onClick:function(){return Y(!1)}}),Object(b.jsx)(E.a,{style:{cursor:"pointer"},onClick:function(){x(t),y(n)}}),Object(b.jsx)(M.a,{style:{cursor:"pointer"},onClick:function(){x(D),y(A)}})]}),Object(b.jsx)("div",{style:{marginTop:"40px"},children:t.map((function(e){return Object(b.jsx)("div",{className:"filteredResultsNodeId",onClick:function(){return ye(e)},style:{cursor:"pointer",marginBottom:"6px"},children:e.id})}))})]})})}(R),W&&(ve=J,Object(b.jsxs)("div",{className:"nodeInfoContainer",children:[Object(b.jsx)(N.a,{style:{cursor:"pointer"},onClick:function(){return q(!1)}}),Object(b.jsxs)("div",{className:"nodeInfoTitle",children:[Object(b.jsx)("b",{children:"Informa\xe7\xf5es da Base: "}),ve.id]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Plataforma: "}),ve.PLATAFORMA]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Caminho: "}),ve.CAMINHO]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Conjunto: "}),ve.CONJUNTO]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Assunto: "}),ve.ASSUNTO]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Dscri\xe7\xe3o: "}),ve.DESCR]}),Object(b.jsxs)("div",{className:"nodeInfoProp",children:[Object(b.jsx)("b",{children:"Dicion\xe1rio: "}),Object(b.jsx)("div",{onClick:function(){return ee(!0)},className:"nodeInfoDicioLink",children:"Visualizar Dicion\xe1rio"})]})]})),_&&Object(b.jsx)(w,{open:_,close:function(){return ee(!1)},node:J}),Object(b.jsxs)("div",{style:{borderRadius:"10px",background:"#F2F2F2",width:"fit-content",padding:"15px 15px 0 15px",height:"fit-content",maxHeight:"80vh",position:"absolute",zIndex:"1",top:"130px",left:"20px"},children:[Object(b.jsx)(h,{data:Object(s.a)(new Set(Object(s.a)([].concat.apply([],Object(s.a)(f.map((function(e){return e.ASSUNTO}))))))),applyFilter:function(e){se(e),ie(!0)},label:"Assuntos",placeholder:"assuntos"}),Object(b.jsx)(h,{data:["dado pessoal","transferencia","seguranca","dados","cliente"],applyFilter:function(e){de(e),ie(!0)},label:"Assuntos das Colunas",placeholder:"assuntos"}),Object(b.jsx)(h,{data:Object(s.a)(new Set(f.map((function(e){return e.PLATAFORMA})))),applyFilter:function(e){he(e),ie(!0)},label:"Plataforma",placeholder:"plataforma"}),Object(b.jsx)(h,{data:Object(s.a)(new Set(f.map((function(e){return e.CONJUNTO})))),applyFilter:function(e){ge(e),ie(!0)},label:"Conjunto",placeholder:"conjunto"})]}),Object(b.jsx)("div",{style:{cursor:"pointer",position:"absolute",top:"0",right:"0",zIndex:"9999999",width:"100px",height:"100px",background:"#f2f2f2"},onClick:n,children:"Voltar"}),i.current&&Object(b.jsx)(p,{nodes:f,graphRef:i})]})};function H(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),o=Object(r.a)(a,2),s=o[0],l=o[1],u=function(){l(!1),i(!1)};return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(J,{graphType:"2D",close:u}),s&&Object(b.jsx)(J,{graphType:"3D",close:u}),!n&&!s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"home-title",children:"Escolha o modelo"}),Object(b.jsx)("button",{className:"home-2dbtn",onClick:function(){return i(!0)},children:"2D"}),Object(b.jsx)("button",{className:"home-3dbtn",onClick:function(){return l(!0)},children:"3D"})]})]})}var V=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(H,{})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,265)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),G(console.log)}},[[193,1,2]]]);
//# sourceMappingURL=main.413a6473.chunk.js.map