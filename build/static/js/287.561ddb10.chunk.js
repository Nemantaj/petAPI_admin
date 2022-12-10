"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[287],{71305:function(e,n,t){var i=t(29439),r=t(47313);n.Z=function(e,n){var t=(0,r.useState)(n),s=(0,i.Z)(t,2),c=s[0],a=s[1],o=(0,r.useState)(),d=(0,i.Z)(o,2),u=d[0],l=d[1],h=e(c);return{inputValue:c,error:!h&&u,isValid:h,inputHandler:function(e){a(e.currentTarget.value)},blurHandler:function(e){l(!0)},clearInput:function(){a(n),l(!1)},setInput:function(e){a(e)}}}},32287:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var i=t(93433),r=t(29439),s=t(47313),c=t(85554),a=t(33473),o=t(82937),d=t(42669),u=t(18104),l=t(34207),h=t(51515),f=t(70633),Z=t(16157),x=t(29266),j=t(35553),p=t(48569),v=t(73477),_=t(82315),g=t(79433),m=t(67440),S=t(82138),P=t(71305),b=t(71924),k=t(14417),C=t(88208),w=t(46417),A=function(e){var n=(0,c.v9)((function(e){return e.auth.token})),t=(0,s.useState)(!1),i=(0,r.Z)(t,2),a=i[0],o=i[1],u=(0,s.useState)(!1),h=(0,r.Z)(u,2),A=h[0],z=h[1],H=(0,s.useState)(!1),y=(0,r.Z)(H,2),I=y[0],D=y[1],B=(0,s.useState)(""),O=(0,r.Z)(B,2),q=(O[0],O[1],(0,P.Z)((function(e){return e.length>=5}),"")),E=q.inputValue,N=q.error,W=q.isValid,T=q.inputHandler,V=q.blurHandler,R=q.clearInput;return(0,w.jsxs)("div",{children:[(0,w.jsxs)(b.Z,{children:[(0,w.jsx)(k.Z,{expandIcon:(0,w.jsx)(m.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,w.jsx)(d.Z,{variant:"h5",children:"Add Pincodes"})}),(0,w.jsxs)(C.Z,{className:f.Z.addArea,children:[(0,w.jsxs)(Z.Z,{className:f.Z.stackInput,children:[(0,w.jsx)(x.Z,{children:"Enter Pincodes"}),(0,w.jsx)(j.Z,{sx:{mt:1},onChange:T,onBlur:V,value:E,fullWidth:!0,variant:"standard"}),N&&(0,w.jsx)(p.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:"A valid pincode is required."})]}),(0,w.jsx)(v.Z,{variant:"contained",startIcon:(0,w.jsx)(S.Z,{}),color:"success",disabled:!W,onClick:function(){o(!0),fetch("/pincode/add-pincodes",{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify({pincodes:E})}).then((function(e){return e.json()})).then((function(n){if(!n.success)return z(!0),o(!1);e.pushPincodes(n.payload),R(),D(!0),o(!1)})).catch((function(e){return z(!0),o(!1)}))},children:a?(0,w.jsx)(l.Z,{size:25,color:"inherit"}):"Add"})]})]}),(0,w.jsx)(_.Z,{open:I,onClose:function(){return D(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"success",children:"Successfully Created!"})},"snackbar"),(0,w.jsx)(_.Z,{open:A,onClose:function(){return z(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"error",children:"An error occcured!"})},"1")]})},z=t(24378),H=t(63988),y=t(53805),I=t(37982),D=t(90495),B=t(61359),O=t(39874),q=t(89791),E=t(59629),N=t(99780),W=t(32415),T=t(40765),V=t(47515),R=t(59017),Y=t(34940),L=t(13656),Q=function(e){var n=(0,c.v9)((function(e){return e.auth.token})),t=(0,s.useState)(!1),i=(0,r.Z)(t,2),a=(i[0],i[1],(0,s.useState)(!1)),d=(0,r.Z)(a,2),l=d[0],h=d[1],Z=(0,s.useState)(!1),x=(0,r.Z)(Z,2),p=x[0],v=x[1],m=(0,s.useState)(0),S=(0,r.Z)(m,2),P=S[0],b=S[1],k=(0,s.useState)(10),C=(0,r.Z)(k,2),A=C[0],z=C[1];return(0,w.jsxs)(s.Fragment,{children:[(0,w.jsxs)(W.Z,{children:[(0,w.jsx)("div",{className:f.Z.searchDiv,children:(0,w.jsx)(j.Z,{variant:"standard",startAdornment:(0,w.jsxs)(R.Z,{position:"start",children:[(0,w.jsx)(T.Z,{})," "]}),type:"text",value:e.search,onChange:function(n){return e.setSearch(n.target.value)}})}),(0,w.jsx)(Y.Z,{}),(0,w.jsxs)(o.ZP,{item:!0,xs:12,sx:{mx:1},children:[(0,w.jsx)(O.Z,{children:(0,w.jsxs)(H.Z,{size:"small",children:[(0,w.jsx)(D.Z,{children:(0,w.jsxs)(E.Z,{children:[(0,w.jsx)(I.Z,{width:"30px",children:(0,w.jsx)(N.Z,{active:"_id"===e.field,onClick:function(){return e.requestSort("_id",!e.asc)},children:"Serial"})}),(0,w.jsx)(I.Z,{children:(0,w.jsx)(N.Z,{active:"code"===e.field,onClick:function(){return e.requestSort("code",!e.asc)},children:"Pincode"})}),(0,w.jsx)(I.Z,{}),(0,w.jsx)(I.Z,{})]})}),(0,w.jsx)(y.Z,{children:e.list.slice(P*A,P*A+A).map((function(t,i){return(0,w.jsxs)(E.Z,{children:[(0,w.jsx)(I.Z,{children:t._id}),(0,w.jsx)(I.Z,{children:t.code}),(0,w.jsx)(I.Z,{width:"30px",children:(0,w.jsx)(u.Z,{color:"error",onClick:function(){return i=t._id,void fetch("/pincode/delete/"+i,{headers:{Authorization:"Bearer "+n}}).then((function(e){return e.json()})).then((function(n){n.success||h(!0),e.removePincode(i),v(!0)})).catch((function(e){h(!0)}));var i},children:(0,w.jsx)(V.Z,{})})}),(0,w.jsx)(I.Z,{align:"left",width:"30px",children:(0,w.jsx)(L.Z,{checked:t.isActive,onChange:function(){return i=t._id,r=t.isActive,void fetch("/pincode/switch-status/"+i+"?value="+!r,{headers:{Authorization:"Bearer "+n}}).then((function(e){return e.json()})).then((function(n){n.success||h(!0),e.switchPincode(n.payload),v(!0)})).catch((function(e){h(!0)}));var i,r}})})]},t._id)}))}),(0,w.jsx)(q.Z,{})]})}),(0,w.jsx)(B.Z,{rowsPerPageOptions:[10,20,30,40,50],component:"div",count:e.list.length,rowsPerPage:A,page:P,onPageChange:function(e,n){b(n)},onRowsPerPageChange:function(e){z(+e.target.value),b(0)}})]})]}),(0,w.jsx)(_.Z,{open:p,onClose:function(){return v(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"success",children:"The operation was successfull!"})},"snackbar1"),(0,w.jsx)(_.Z,{open:l,onClose:function(){return h(!1)},anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3,children:(0,w.jsx)(g.Z,{variant:"filled",severity:"error",children:"An error occured!"})},"snackbar")]})},F=function(){var e=(0,c.v9)((function(e){return e.auth.token})),n=(0,c.v9)((function(e){return e.tour.pincodes})),t=(0,s.useState)([]),Z=(0,r.Z)(t,2),x=Z[0],j=Z[1],p=(0,s.useState)(!1),v=(0,r.Z)(p,2),_=v[0],g=v[1],m=(0,s.useState)(!1),S=(0,r.Z)(m,2),P=(S[0],S[1]),b=(0,s.useState)(!1),k=(0,r.Z)(b,2),C=(k[0],k[1],(0,s.useState)("")),H=(0,r.Z)(C,2),y=H[0],I=H[1],D=(0,s.useState)({field:"_id",asc:!0}),B=(0,r.Z)(D,2),O=B[0],q=B[1];(0,s.useEffect)((function(){0===n.length?E():j(n)}),[]),(0,s.useEffect)((function(){if(n.length>0){var e,t=(0,i.Z)(n),r=new RegExp(y,"i");""!==y&&(t=t.filter((function(e){return r.test(e.code)||r.test(e._id)}))),e=t.sort((function(e,n){return e[O.field]-n[O.field]})),j(O.asc?e:e.reverse())}}),[O,n,y]);var E=function(){g(!0),P(!1),fetch("/pincode/get-pincodes",{headers:{Authorization:"Bearer "+e}}).then((function(e){return e.json()})).then((function(e){if(!e.success)return g(!1),P(!0);(0,z.W)(a.d.setPincodes(e.payload)),j(e.payload),g(!1)})).catch((function(e){return g(!1),P(!0)}))};return(0,w.jsxs)(o.ZP,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25},children:(0,w.jsxs)("div",{className:f.Z.listsHead,children:[(0,w.jsx)(d.Z,{variant:"h4",children:"Pincodes"}),(0,w.jsx)(u.Z,{sx:{color:"success.main",bgcolor:"success.lighter"},onClick:E,children:(0,w.jsx)(h.Z,{})})]})}),(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25,mt:5},children:(0,w.jsx)(A,{pushPincodes:function(e){var t=[].concat((0,i.Z)(n),(0,i.Z)(e));(0,z.W)(a.d.setPincodes(t))}})}),(0,w.jsx)(o.ZP,{item:!0,xs:12,sx:{mb:-2.25,mt:2},children:_?(0,w.jsx)(l.Z,{color:"inherit"}):n.length>0&&(0,w.jsx)(Q,{requestSort:function(e,n){q({field:e,asc:n})},asc:O.asc,field:O.field,list:x,removePincode:function(e){var t=n.filter((function(n){return n._id!==e}));(0,z.W)(a.d.setPincodes(t))},switchPincode:function(e){var t=(0,i.Z)(n),r=t.findIndex((function(n){return n._id===e._id}));r>=0&&(t[r]=e,(0,z.W)(a.d.setPincodes(t)))},search:y,setSearch:I})})]})}},70633:function(e,n){n.Z={listsHead:"pincodes_listsHead__+nl4a",addArea:"pincodes_addArea__YE0uc",stackInput:"pincodes_stackInput__zlTqi",searchDiv:"pincodes_searchDiv__OUxLq",basicInputs:"pincodes_basicInputs__rWuLD",addSize:"pincodes_addSize__E8Ygf",sizeBtn:"pincodes_sizeBtn__QrIRX",addressHolder:"pincodes_addressHolder__H5Ao2",address:"pincodes_address__QquYj",infoDiv:"pincodes_infoDiv__BNbPP",straight:"pincodes_straight__mjndl"}}}]);