"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[81],{71305:function(e,n,t){var r=t(29439),s=t(47313);n.Z=function(e,n){var t=(0,s.useState)(n),i=(0,r.Z)(t,2),a=i[0],c=i[1],o=(0,s.useState)(),u=(0,r.Z)(o,2),d=u[0],l=u[1],h=e(a);return{inputValue:a,error:!h&&d,isValid:h,inputHandler:function(e){c(e.currentTarget.value)},blurHandler:function(e){l(!0)},clearInput:function(){c(n),l(!1)},setInput:function(e){c(e)}}}},94081:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(93433),s=t(29439),i=t(47313),a=t(85554),c=t(33473),o=t(82937),u=t(42669),d=t(18104),l=t(34207),h=t(51515),Z=t(70633),f=t(16157),x=t(29266),p=t(35553),j=t(48569),v=t(73477),m=t(82315),g=t(79433),_=t(67440),S=t(82138),C=t(71305),b=t(71924),z=t(14417),k=t(88208),w=t(46417),H=function(e){var n=(0,a.v9)((function(e){return e.auth.token})),t=(0,i.useState)(!1),r=(0,s.Z)(t,2),c=r[0],o=r[1],d=(0,i.useState)(!1),h=(0,s.Z)(d,2),H=h[0],B=h[1],I=(0,i.useState)(!1),y=(0,s.Z)(I,2),D=y[0],N=y[1],P=(0,i.useState)(""),V=(0,s.Z)(P,2),A=(V[0],V[1],(0,i.useState)("")),O=(0,s.Z)(A,2),W=O[0],q=O[1],E=(0,C.Z)((function(e){return""!==e.length}),""),T=E.inputValue,R=E.error,F=E.isValid,L=E.inputHandler,M=E.blurHandler,Y=E.clearInput,J=(0,C.Z)((function(e){return""!==e.length}),0),Q=J.inputValue,U=J.error,X=J.isValid,G=J.inputHandler,K=J.blurHandler;J.clearInput;return(0,w.jsxs)("div",{children:[(0,w.jsxs)(b.Z,{children:[(0,w.jsx)(z.Z,{expandIcon:(0,w.jsx)(_.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,w.jsx)(u.Z,{variant:"h5",children:"Add Coupon"})}),(0,w.jsxs)(k.Z,{className:Z.Z.addSize,children:[(0,w.jsxs)("div",{className:Z.Z.basicInputs,children:[(0,w.jsxs)(f.Z,{className:Z.Z.stackInput,children:[(0,w.jsx)(x.Z,{children:"Code"}),(0,w.jsx)(p.Z,{sx:{mt:1},onChange:L,onBlur:M,value:T,fullWidth:!0,variant:"standard"}),R&&(0,w.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:"Code is required!"})]}),(0,w.jsxs)(f.Z,{className:Z.Z.stackInput,children:[(0,w.jsx)(x.Z,{children:"Discount"}),(0,w.jsx)(p.Z,{sx:{mt:1},onChange:G,onBlur:K,value:Q,fullWidth:!0,variant:"standard"}),U&&(0,w.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:"Discount amount is required!"})]})]}),(0,w.jsx)(v.Z,{variant:"contained",startIcon:(0,w.jsx)(S.Z,{}),color:"success",disabled:!F||!X,onClick:function(){o(!0),fetch("/coupon/create-coupon",{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({code:T,discount:Q})}).then((function(e){return e.json()})).then((function(n){if(!n.success)return B(!0),q(n.msg),o(!1);e.pushBreads(n.payload),Y(),N(!0),o(!1)})).catch((function(e){return B(!0),q(e.msg),o(!1)}))},className:Z.Z.sizeBtn,children:c?(0,w.jsx)(l.Z,{size:25,color:"inherit"}):"Add"})]})]}),(0,w.jsx)(m.Z,{open:D,onClose:function(){return N(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"success",children:"Successfully Created!"})},"snackbar"),(0,w.jsx)(m.Z,{open:H,onClose:function(){return B(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"error",children:W})},"1")]})},B=t(24378),I=t(63988),y=t(53805),D=t(37982),N=t(90495),P=t(61359),V=t(39874),A=t(89791),O=t(59629),W=t(99780),q=t(32415),E=t(40765),T=t(12019),R=t(47515),F=t(59017),L=t(34940),M=t(13656),Y=(t(16031),function(e){var n=(0,a.v9)((function(e){return e.auth.token})),t=(0,i.useState)(!1),r=(0,s.Z)(t,2),c=(r[0],r[1],(0,i.useState)(!1)),u=(0,s.Z)(c,2),l=u[0],h=u[1],f=(0,i.useState)(!1),x=(0,s.Z)(f,2),j=x[0],v=x[1],_=(0,i.useState)(0),S=(0,s.Z)(_,2),C=S[0],b=S[1],z=(0,i.useState)(10),k=(0,s.Z)(z,2),H=k[0],B=k[1];return(0,w.jsxs)(i.Fragment,{children:[(0,w.jsxs)(q.Z,{children:[(0,w.jsx)("div",{className:Z.Z.searchDiv,children:(0,w.jsx)(p.Z,{variant:"standard",startAdornment:(0,w.jsxs)(F.Z,{position:"start",children:[(0,w.jsx)(E.Z,{})," "]}),type:"text",value:e.search,onChange:function(n){return e.setSearch(n.target.value)}})}),(0,w.jsx)(L.Z,{}),(0,w.jsxs)(o.ZP,{item:!0,xs:12,sx:{mx:1},children:[(0,w.jsx)(V.Z,{children:(0,w.jsxs)(I.Z,{size:"small",children:[(0,w.jsx)(N.Z,{children:(0,w.jsxs)(O.Z,{children:[(0,w.jsx)(D.Z,{children:(0,w.jsx)(W.Z,{active:"code"===e.field,onClick:function(){return e.requestSort("code",!e.asc)},children:"Code"})}),(0,w.jsx)(D.Z,{children:(0,w.jsx)(W.Z,{active:"amount"===e.field,onClick:function(){return e.requestSort("amount",!e.asc)},children:"Discount"})}),(0,w.jsx)(D.Z,{}),(0,w.jsx)(D.Z,{}),(0,w.jsx)(D.Z,{})]})}),(0,w.jsx)(y.Z,{children:e.list.slice(C*H,C*H+H).map((function(t,r){return(0,w.jsxs)(O.Z,{children:[(0,w.jsx)(D.Z,{children:t.code}),(0,w.jsx)(D.Z,{children:t.amount}),(0,w.jsx)(D.Z,{width:"30px",children:(0,w.jsx)(d.Z,{color:"success",onClick:function(){return e.editData(t)},children:(0,w.jsx)(T.Z,{})})}),(0,w.jsx)(D.Z,{width:"30px",children:(0,w.jsx)(d.Z,{color:"error",onClick:function(){return r=t._id,void fetch("/coupon/delete/"+r,{headers:{Authorization:"Bearer "+n}}).then((function(e){return e.json()})).then((function(n){n.success||h(!0),e.removeBread(r),v(!0)})).catch((function(e){h(!0)}));var r},children:(0,w.jsx)(R.Z,{})})}),(0,w.jsx)(D.Z,{align:"left",width:"30px",children:(0,w.jsx)(M.Z,{checked:t.isActive,onChange:function(){return r=t._id,s=t.isActive,void fetch("/coupon/switch/"+r+"?value="+!s,{headers:{Authorization:"Bearer "+n}}).then((function(e){return e.json()})).then((function(n){n.success||h(!0),e.editBread(n.payload),v(!0)})).catch((function(e){h(!0)}));var r,s}})})]},t._id)}))}),(0,w.jsx)(A.Z,{})]})}),(0,w.jsx)(P.Z,{rowsPerPageOptions:[10,20,30,40,50],component:"div",count:e.list.length,rowsPerPage:H,page:C,onPageChange:function(e,n){b(n)},onRowsPerPageChange:function(e){B(+e.target.value),b(0)}})]})]}),(0,w.jsx)(m.Z,{open:j,onClose:function(){return v(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"success",children:"The operation was successfull!"})},"snackbar1"),(0,w.jsx)(m.Z,{open:l,onClose:function(){return h(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"error",children:"An error occured!"})},"snackbar")]})}),J=(t(10688),t(92350)),Q=t(2517),U=t(5448),X=t(71235),G=function(e){var n=(0,a.v9)((function(e){return e.auth.token})),t=(0,i.useState)(!1),r=(0,s.Z)(t,2),c=r[0],o=r[1],u=(0,i.useState)(!1),d=(0,s.Z)(u,2),h=d[0],_=d[1],S=(0,i.useState)(!1),b=(0,s.Z)(S,2),z=b[0],k=b[1],H=(0,i.useState)([]),B=(0,s.Z)(H,2),I=(B[0],B[1],(0,i.useState)("")),y=(0,s.Z)(I,2),D=y[0],N=y[1],P=(0,C.Z)((function(e){return""!==e.length}),""),V=P.inputValue,A=P.error,O=P.isValid,W=P.inputHandler,q=P.blurHandler,E=(P.clearInput,P.setInput),T=(0,C.Z)((function(e){return""!==e.length}),0),R=T.inputValue,F=T.error,L=T.isValid,M=T.inputHandler,Y=T.blurHandler,G=(T.clearInput,T.setInput);(0,i.useEffect)((function(){null!==e.data&&(E(e.data.code),G(e.data.amount))}),[e.data]);return(0,w.jsxs)(i.Fragment,{children:[(0,w.jsxs)(Q.Z,{open:e.open,onClose:e.handleClose,fullWidth:!0,maxWidth:"xs",children:[(0,w.jsx)(U.Z,{children:"Edit Coupon"}),(0,w.jsx)(X.Z,{children:(0,w.jsxs)("div",{className:Z.Z.addSize,children:[(0,w.jsxs)("div",{className:Z.Z.basicInputs,children:[(0,w.jsxs)(f.Z,{className:Z.Z.stackInput,children:[(0,w.jsx)(x.Z,{children:"Code"}),(0,w.jsx)(p.Z,{sx:{mt:1},onChange:W,onBlur:q,value:V,fullWidth:!0,variant:"standard"}),A&&(0,w.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:"Code is required!"})]}),(0,w.jsxs)(f.Z,{className:Z.Z.stackInput,children:[(0,w.jsx)(x.Z,{children:"Discount"}),(0,w.jsx)(p.Z,{sx:{mt:1},onChange:M,onBlur:Y,value:R,fullWidth:!0,variant:"standard"}),F&&(0,w.jsx)(j.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:"Discount amount is required!"})]})]}),(0,w.jsx)(v.Z,{variant:"contained",startIcon:(0,w.jsx)(J.Z,{}),color:"success",disabled:!O||!L,onClick:function(){o(!0),fetch("/coupon/edit/"+e.data._id,{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({code:V,discount:R})}).then((function(e){return e.json()})).then((function(n){if(!n.success)return _(!0),N(n.msg),o(!1);e.switchBread(n.payload),k(!0),o(!1),e.handleClose()})).catch((function(e){return _(!0),N(e.msg),o(!1)}))},className:Z.Z.sizeBtn,children:c?(0,w.jsx)(l.Z,{size:25,color:"inherit"}):"Save"})]})})]}),(0,w.jsx)(m.Z,{open:z,onClose:function(){return k(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"success",children:"The operation was successfull!"})},"snackbar"),(0,w.jsx)(m.Z,{open:h,onClose:function(){return _(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"error",children:D})},"1")]})},K=function(){var e=(0,a.v9)((function(e){return e.auth.token})),n=(0,a.v9)((function(e){return e.tour.coupons})),t=(0,i.useState)([]),f=(0,s.Z)(t,2),x=f[0],p=f[1],j=(0,i.useState)(!1),v=(0,s.Z)(j,2),m=v[0],g=v[1],_=(0,i.useState)(!1),S=(0,s.Z)(_,2),C=(S[0],S[1]),b=(0,i.useState)(!1),z=(0,s.Z)(b,2),k=(z[0],z[1],(0,i.useState)("")),I=(0,s.Z)(k,2),y=I[0],D=I[1],N=(0,i.useState)(!1),P=(0,s.Z)(N,2),V=P[0],A=P[1],O=(0,i.useState)(null),W=(0,s.Z)(O,2),q=W[0],E=W[1],T=(0,i.useState)({field:"code",asc:!0}),R=(0,s.Z)(T,2),F=R[0],L=R[1];(0,i.useEffect)((function(){0===n.length?M():p(n)}),[]),(0,i.useEffect)((function(){if(n.length>0){var e,t=(0,r.Z)(n),s=new RegExp(y,"i");""!==y&&(t=t.filter((function(e){return s.test(e.name)||s.test(e.serial)}))),e=t.sort((function(e,n){return e[F.field]-n[F.field]})),p(F.asc?e:e.reverse())}}),[F,n,y]);var M=function(){g(!0),C(!1),fetch("/coupon/get-coupons",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){if(!e.success)return g(!1),C(!0);(0,B.W)(c.d.setCoupons(e.payload)),p(e.payload),g(!1)})).catch((function(e){return g(!1),C(!0)}))},J=function(e){var t=(0,r.Z)(n),s=t.findIndex((function(n){return n._id.toString()===e._id.toString()}));s>=0&&(t[s]=e,(0,B.W)(c.d.setCoupons(t)))};return(0,w.jsxs)(i.Fragment,{children:[(0,w.jsxs)(o.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:(0,w.jsxs)("div",{className:Z.Z.listsHead,children:[(0,w.jsx)(u.Z,{variant:"h4",children:"Coupons"}),(0,w.jsx)(d.Z,{sx:{color:"success.main",bgcolor:"success.lighter"},onClick:M,children:(0,w.jsx)(h.Z,{})})]})}),(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25,mt:5},children:(0,w.jsx)(H,{pushBreads:function(e){var t=[].concat((0,r.Z)(n),[e]);(0,B.W)(c.d.setCoupons(t))}})}),(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25,mt:2},children:m?(0,w.jsx)(l.Z,{color:"inherit"}):n.length>0&&(0,w.jsx)(Y,{requestSort:function(e,n){L({field:e,asc:n})},asc:F.asc,field:F.field,list:x,removeBread:function(e){var t=n.filter((function(n){return n._id!==e}));(0,B.W)(c.d.setCoupons(t))},search:y,setSearch:D,editData:function(e){E(e),A(!0)},editBread:J})})]}),null!==q&&(0,w.jsx)(G,{open:V,handleClose:function(){return A(!1)},data:q,switchBread:J})]})}},92350:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413),s=t(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"},a=t(60810),c=function(e,n){return s.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};c.displayName="SaveOutlined";var o=s.forwardRef(c)},70633:function(e,n){n.Z={listsHead:"pincodes_listsHead__+nl4a",addArea:"pincodes_addArea__YE0uc",stackInput:"pincodes_stackInput__zlTqi",searchDiv:"pincodes_searchDiv__OUxLq",basicInputs:"pincodes_basicInputs__rWuLD",addSize:"pincodes_addSize__E8Ygf",sizeBtn:"pincodes_sizeBtn__QrIRX",addressHolder:"pincodes_addressHolder__H5Ao2",address:"pincodes_address__QquYj",infoDiv:"pincodes_infoDiv__BNbPP",straight:"pincodes_straight__mjndl"}}}]);