(this.webpackJsonpmedloc=this.webpackJsonpmedloc||[]).push([[0],{1209:function(e){e.exports=JSON.parse("{}")},1212:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),c=n.n(a),i=n(29),o=n.n(i),s=(n(825),n(59)),l=n.n(s),u=n(150),d=n(26),p=n(19),j=n(487),b=n.n(j),h=(n(843),n(27)),f=n(31),m=n(44),O=n(48),x=n(726),g=n.n(x),v=n(207),y=n(1274),k=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={stats:[],loading:!1,columns:[],dataState:[],height:201},r.getMuiTheme=function(){return Object(v.a)({overrides:{MUIDataTable:{root:{backgroundColor:"red",margin:"dense",padding:"auto"},paper:{boxShadow:"none"}},MUIDataTableBodyCell:{root:{backgroundColor:"inherit",padding:"3px",textAlign:"center",margin:"dense"}},MUIDataTableToolbar:{root:{minHeight:"40px"}}}})},r.tableRef=c.a.createRef(),r}return Object(f.a)(n,[{key:"getInitialState",value:function(){return{state:0}}},{key:"componentDidMount",value:function(){var e=document.getElementById("tble").clientHeight;this.setState({height:e})}},{key:"render",value:function(){var e=[],t=this.props.dataProps.features;if(null!==t)for(var n in t)if(t.hasOwnProperty(n)){var a=t[n];Object.keys(a.properties),e.push(a.properties)}var i=[];null!==this.props.userFeaturesProps&&(i=this.props.userFeaturesProps.map((function(e){return e.replace(/ /g,"_")})));var o=i.map((function(e){return{name:e,label:e.slice(0,20)+"...",options:{hint:e}}}));return o.push("fid"),o.reverse(),Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)("div",{style:{margin:0,height:"100%"},children:Object(r.jsx)(y.a,{theme:this.getMuiTheme(),children:Object(r.jsx)(g.a,{title:Object(r.jsx)("h4",{style:{float:"left",color:"#383838"},children:"Data Explorer"}),columns:o,data:e,options:{filter:!0,rowHover:!0,downloadOptions:{filename:"CustomDownload.csv",separator:","},filterType:"dropdown",responsive:"stacked",tableBodyHeight:"30vh",draggableColumns:{enabled:!0,transitionTime:300},rowsPerPageOptions:[5,10,50],rowsPerPage:5,viewColumns:!0}})})})})}}]),n}(c.a.Component),C=(n(758),n(1300)),w=n(1303),S=n(1305),P=n(1298),N=n(106),E=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(f.a)(n,[{key:"handleZoom",value:function(e){this.setState({selectedDomain:e})}},{key:"handleBrush",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){var e=this,t=Array.from(new Set(this.props.data.features.map((function(e){return e.properties.clusters})))).sort((function(e,t){return+e-+t}));console.log(t);var n=N.a().domain(t).range(N.c);return Object(r.jsx)("div",{children:Object(r.jsxs)(C.a,{domainPadding:30,width:600,height:300,containerComponent:Object(r.jsx)(w.a,{responsive:!1,zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)}),children:[Object(r.jsx)(S.a,{text:"".concat(this.props.columnName," by cluster"),x:225,y:25,textAnchor:"middle"}),Object(r.jsx)(P.a,{sortKey:function(e){return+e.x},style:{q1:{fill:function(e){return n(e.datum.x)}},q3:{fill:function(e){return n(e.datum.x)}},median:{stroke:"white",strokeWidth:2}},data:this.props.data.features.map((function(t){return{x:t.properties.clusters,y:t.properties[e.props.columnName]}}))})]})})}}]),n}(c.a.Component);n(744);var I=n(1297),M=n(1307),D=n(1304),T=n(751),R=n(149),z=n(28),A=n.n(z),H=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"createLeafletElement",value:function(e){}},{key:"componentDidMount",value:function(){var e=this;!function(e,t,n){for(var r=[],a=(t-e)/(n-1);e<t;)r.push(e),e+=a;r.push(t)}(100,200,5);var t=A.a.control({position:"topright"});t.onAdd=function(){for(var t,n,r,a=A.a.DomUtil.create("div","info legend"),c=[e.props.extentProps,e.props.extentProps,e.props.extentProps],i=[],o=0;o<c.length;o++)t=c[o],n=c[o+1],i.push('<i style="background:'+(((r=t+1)>1e3?"#800026":r>500?"#BD0026":r>200?"#E31A1C":r>100?"#FC4E2A":r>50?"#FD8D3C":"#FEB24C")+'"></i> ')+t+(n?"&ndash;"+n:"+"));return a.innerHTML=i.join("<br>"),a};var n=this.props.leaflet.map;t.addTo(n)}}]),n}(T.a),L=(Object(R.c)(H),n(1209),n(394));var F=function(e){var t=e.dataProps.features,n=Object(a.useRef)(),c=Object(a.useRef)(null),i=Object(a.useRef)(),o=Object(a.useRef)(null),s=Object(a.useRef)(null);if(null!==t)for(var l in t)if(t.hasOwnProperty(l)){var u=t[l];Object.keys(u.properties);break}var d,p,j=e.userSelectedItems,b=j.replace(/_/g," "),h=t.map((function(e){return e.properties[j]})),f=typeof h[0];if("string"!==f){var m=L.ckmeans(h,7);d=m.map((function(e){return e[0]})),p=N.b().domain(d).range(["#8dd3c7,","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"])}else d=new Set(h),d=Array.from(d).sort((function(e,t){return+e-+t})),console.log(d),p=N.a().domain(d).range(N.c);return I.a.BaseLayer,I.a.Overlay,Object(a.useEffect)((function(){if(i.current){console.log(e.dataProps,"props"),n.current=A.a.geoJSON(e.dataProps,{style:function(e){return{fillColor:p(e.properties[j]),weight:0,opacity:1,color:"white",dashArray:"3",fillOpacity:1}}}),n.current.eachLayer((function(e){e.bindPopup("".concat(j," : ").concat(e.feature.properties[j]))})),null!==c.current&&i.current.leafletElement.removeControl(c.current),null!==n.current&&i.current.leafletElement.removeLayer(n.current),null!==o.current&&i.current.leafletElement.removeControl(o.current),null!==s.current&&i.current.leafletElement.removeControl(s.current),c.current=A.a.control({position:"topright"}),o.current=A.a.control({position:"topright"}),s.current=A.a.control({position:"bottomright"}),o.current.onAdd=function(){var e=A.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> ".concat(b,"</p>"),e},s.current.onAdd=function(){var e=A.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> Main Map </p>",e},c.current.onAdd=function(){var e,t,n=A.a.DomUtil.create("div","info legend"),r=[];d=Array.from(d);for(var a=Array.from(d).slice(0,7),c=0;c<a.length;c++){if("number"===f){var i=a[c]%1===0;e=i?a[c]:d[c].toFixed(2),t=a[c+1]?i?a[c+1]:a[c+1].toFixed(2):a[c+1]}else e=a[c],t=void 0;r.push('<i style="background:'+p(a[c])+'"></i> '+e+(t?" &ndash; "+t:"string"!==f?"+":""))}return n.innerHTML=r.join("<br>"),n},n.current.addTo(i.current.leafletElement),o.current.addTo(i.current.leafletElement),c.current.addTo(i.current.leafletElement),s.current.addTo(i.current.leafletElement)}}),[j,e.dataProps]),Object(r.jsx)(M.a,{attributionControl:!1,ref:i,center:[41.8781,-87.6298],zoom:10,style:{height:"100%",width:"100%"},children:Object(r.jsx)(D.a,{url:"\thttps://api.mapbox.com/styles/v1/aradnia/ckilrttol26ng17pa9l4m0ucd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJhZG5pYSIsImEiOiJjanlhZDdienQwNGN0M212MHp3Z21mMXhvIn0.lPiKb_x0vr1H62G_jHgf7w"})})};var _=function(e){var t=e.dataProps.features,n=Object(a.useRef)(),c=Object(a.useRef)(null),i=Object(a.useRef)(),o=Object(a.useRef)(null),s=Object(a.useRef)(null);if(null!==t)for(var l in t)if(t.hasOwnProperty(l)){var u=t[l];Object.keys(u.properties);break}var d,p,j=e.userSelectedItems,b=j.replace(/_/g," "),h=t.map((function(e){return e.properties[j]})),f=typeof h[0];if("string"!==f){var m=L.ckmeans(h,7);d=m.map((function(e){return e[0]})),p=N.b().domain(d).range(["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"])}else d=new Set(h),p=N.a().domain(d).range(N.c);return I.a.BaseLayer,I.a.Overlay,Object(a.useEffect)((function(){if(i.current){n.current=A.a.geoJSON(e.dataProps,{style:function(e){return{fillColor:p(e.properties[j]),weight:0,opacity:1,color:"white",dashArray:"3",fillOpacity:1}}}),n.current.eachLayer((function(e){e.bindPopup("".concat(j," : ").concat(e.feature.properties[j]))})),null!==c.current&&i.current.leafletElement.removeControl(c.current),null!==n.current&&i.current.leafletElement.removeLayer(n.current),null!==o.current&&i.current.leafletElement.removeControl(o.current),null!==s.current&&i.current.leafletElement.removeControl(s.current),c.current=A.a.control({position:"topright"}),o.current=A.a.control({position:"topright"}),s.current=A.a.control({position:"bottomright"}),o.current.onAdd=function(){var e=A.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> ".concat(b,"</p>"),e},s.current.onAdd=function(){var e=A.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> Preview Map </p>",e},c.current.onAdd=function(){var e,t,n=A.a.DomUtil.create("div","info legend"),r=[];d=Array.from(d);var a=Array.from(d).slice(0,7);d>7&&"string"===f&&a.push("Others...");for(var c=0;c<a.length;c++){if("number"===f){var i=a[c]%1===0;e=i?a[c]:d[c].toFixed(2),t=a[c+1]?i?a[c+1]:a[c+1].toFixed(2):a[c+1]}else e=a[c],t=void 0;r.push('<i style="background:'+p(a[c])+'"></i> '+e+(t?" &ndash; "+t:"string"!==f?"+":""))}return n.innerHTML=r.join("<br>"),n},n.current.addTo(i.current.leafletElement),o.current.addTo(i.current.leafletElement),c.current.addTo(i.current.leafletElement),s.current.addTo(i.current.leafletElement)}}),[j,e.dataProps]),Object(r.jsx)(M.a,{attributionControl:!1,ref:i,center:[41.8781,-87.6298],zoom:10,style:{height:"100%",width:"100%"},children:Object(r.jsx)(D.a,{url:"\thttps://api.mapbox.com/styles/v1/aradnia/ckilrttol26ng17pa9l4m0ucd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJhZG5pYSIsImEiOiJjanlhZDdienQwNGN0M212MHp3Z21mMXhvIn0.lPiKb_x0vr1H62G_jHgf7w"})})},J=n(646),B=n(1282),U=n(1220),Z=n(1277),G=n(1278),W=n(1221),X=n(655),Y=n(719),q=n(652),K=n(1281),Q=n(483),$=n.n(Q),V=n(754),ee=n.n(V),te=n(506),ne=n.n(te),re=n(507),ae=n.n(re),ce=n(661),ie=n(120),oe=n(753),se=n.n(oe),le=n(752),ue=n.n(le),de=n(656),pe=n(480),je=n(486),be=n(1283),he=Object(J.a)((function(e){return{button:{margin:e.spacing(1)}}}));function fe(e){var t=he(),n=Object(a.useState)(e.loading||!1),i=Object(p.a)(n,2),o=i[0],s=i[1];return c.a.useEffect((function(){s(e.loading||!1)}),[e.loading]),Object(r.jsx)("div",{children:Object(r.jsx)(q.a,{onClick:e.propsOnClick,variant:"contained",color:"primary",disabled:o,className:t.button,endIcon:o?Object(r.jsx)(be.a,{children:"timer"}):Object(r.jsx)(be.a,{children:"send"}),children:"Run"})})}var me=Object(J.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"40%"},selectEmpty:{marginTop:e.spacing(1)}}}));function Oe(e){var t=c.a.createRef(),n=me(),a=c.a.useState(""),i=Object(p.a)(a,2),o=i[0],s=i[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(B.a,{container:!0,direction:"row",alignItems:"center",justify:"center",children:[Object(r.jsx)(pe.a,{className:n.formControl,children:Object(r.jsxs)(je.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:o,onChange:function(e){s(e.target.value)},displayEmpty:!0,className:n.selectEmpty,children:[Object(r.jsx)(de.a,{value:"",children:Object(r.jsx)("em",{children:"Select..."})}),Object(r.jsx)(de.a,{value:2,children:" 2 "}),Object(r.jsx)(de.a,{value:3,children:" 3"}),Object(r.jsx)(de.a,{value:4,children:" 4 "}),Object(r.jsx)(de.a,{value:5,children:" 5 "}),Object(r.jsx)(de.a,{value:6,children:" 6 "})]})}),Object(r.jsx)(fe,{ref:t,propsOnClick:function(){e.handleSubmit(o,e.userFeatures)}})]})})}var xe=Object(J.a)((function(e){return{root:{margin:"2px",padding:"5px",fontSize:"8px"},cardHeader:{padding:e.spacing(1,2)},list:{width:280,height:"250px",backgroundColor:e.palette.background.paper,overflow:"auto",textTransform:"capitalize"},MuiTypography:{fontSize:"8px"},button:{margin:e.spacing(1,1)},MuiListItem:{padding:"0px",margin:0}}}));function ge(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function ve(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function ye(e){var t,n=e.dataProps.features;if(null!==n)for(var a in n)if(n.hasOwnProperty(a)){var i=n[a];t=Object.keys(i.properties);break}var o=t.map((function(e){return e.replace(/_/g," ")})),s=xe(),l=c.a.useState([]),u=Object(p.a)(l,2),j=u[0],b=u[1],h=c.a.useState(),f=Object(p.a)(h,2),m=f[0],O=f[1],x=c.a.useState(o.reverse()),g=Object(p.a)(x,2),v=g[0],y=g[1],k=c.a.useState([]),C=Object(p.a)(k,2),w=C[0],S=C[1],P=ve(j,v),N=ve(j,w);e.featureProps(w);var E,I,M=function(e){return function(){var t=j.indexOf(e),n=Object(d.a)(j);if(-1===t){e.replace(/ /g,"_");n.push(e)}else n.splice(t,1);b(n)}},D=function(t){return function(){var n=j.indexOf(t),r=Object(d.a)(j);if(-1===n){var a=t.replace(/ /g,"_");e.methodProps(a)}else r.splice(n,1);O(t)}},T=function(e){return function(){var t=j.indexOf(e),n=Object(d.a)(j);-1===t?n.push(e):n.splice(t,1),b(n)}},R=function(e){return ve(j,e).length},z=function(e){return function(){var t,n;R(e)===e.length?b(ge(j,e)):b((t=j,n=e,[].concat(Object(d.a)(t),Object(d.a)(ge(n,t)))))}};return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)(B.a,{container:!0,spacing:0,direction:"column",justify:"space-evenly",alignItems:"center",className:s.root,children:[Object(r.jsx)(B.a,{item:!0,children:(E="Features",I=v,Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(G.a,{className:s.cardHeader,avatar:Object(r.jsx)("div",{children:Object(r.jsx)(Y.a,{fontSize:"small",onClick:z(I),checked:R(I)===I.length&&0!==I.length,indeterminate:R(I)!==I.length&&0!==R(I),disabled:0===I.length,inputProps:{"aria-label":"all items selected"}})}),title:E,subheader:"".concat(R(I),"/").concat(I.length," selected"),children:Object(r.jsx)(ce.a,{title:"Hover over each section to learn about how they work",children:Object(r.jsx)($.a,{})})}),Object(r.jsx)(K.a,{}),Object(r.jsxs)(U.a,{className:s.list,dense:!0,component:"div",role:"list",children:[I.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(r.jsxs)(W.a,{role:"listitem",button:!0,disableRipple:!0,children:[Object(r.jsx)(Y.a,{fontSize:"small",onClick:M(e),checked:-1!==j.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(r.jsx)(Y.a,{icon:Object(r.jsx)(ne.a,{fontSize:"small"}),checkedIcon:Object(r.jsx)(ae.a,{fontSize:"small"}),onClick:D(e),checked:e===m,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(r.jsx)(X.a,{id:t,primary:"".concat(e)})]},e)})),Object(r.jsx)(W.a,{})]})]}))}),Object(r.jsx)(B.a,{item:!0,children:Object(r.jsxs)(B.a,{container:!0,direction:"row",alignItems:"center",children:[Object(r.jsx)(q.a,{variant:"contained",color:"primary",size:"small",className:s.button,onClick:function(){S(w.concat(P)),y(ge(v,P)),b(ge(j,P))},disabled:0===P.length,"aria-label":"move selected right",children:Object(r.jsx)(ue.a,{})}),Object(r.jsx)(q.a,{variant:"contained",color:"primary",size:"small",className:s.button,onClick:function(){y(v.concat(N)),S(ge(w,N)),b(ge(j,N))},disabled:0===N.length,"aria-label":"move selected left",children:Object(r.jsx)(se.a,{})})]})}),Object(r.jsx)(B.a,{item:!0,children:function(e,t){return Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(G.a,{className:s.cardHeader,avatar:Object(r.jsx)(Y.a,{fontSize:"small",onClick:z(t),checked:R(t)===t.length&&0!==t.length,indeterminate:R(t)!==t.length&&0!==R(t),disabled:0===t.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(R(t),"/").concat(t.length," selected")}),Object(r.jsx)(K.a,{}),Object(r.jsxs)(U.a,{className:s.list,dense:!0,component:"div",role:"list",children:[t.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(r.jsxs)(W.a,{spacing:0,role:"listitem",button:!0,children:[Object(r.jsx)(Y.a,{onClick:T(e),checked:-1!==j.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(r.jsx)(Y.a,{icon:Object(r.jsx)(ne.a,{fontSize:"small"}),checkedIcon:Object(r.jsx)(ae.a,{fontSize:"small"}),onClick:D(e),checked:e===m,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(r.jsx)(X.a,{id:t,primary:"".concat(e)})]},e)})),Object(r.jsx)(W.a,{})]})]})}("Selected Features",w)}),Object(r.jsxs)(B.a,{item:!0,children:[Object(r.jsxs)(ie.a,{variant:"overline",className:s.title,children:["Number of Clusters",Object(r.jsx)(ce.a,{title:"Hover over each section to learn about how they work",children:Object(r.jsx)(ee.a,{style:{marginTop:"3px"},fontSize:"small"})})," "]})," "]})]})})}var ke=n(755),Ce=n(1302),we=n(1284),Se=n(267);Object(J.a)((function(e){return{tabsRoot:{height:"30px"},tabRoot:{height:"42px"},root:{width:"100%",height:"50%"}}}));function Pe(e){var t=c.a.useState(0),n=Object(p.a)(t,2),a=n[0],i=n[1],o=e.history.map((function(e,t){return Object(r.jsx)(we.a,Object(ke.a)({label:"Iter-".concat(t)},{id:"scrollable-auto-tab-".concat(n=0),"aria-controls":"scrollable-auto-tabpanel-".concat(n)}),"Iter-".concat(t));var n}));return Object(r.jsx)(Se.a,{square:!0,children:Object(r.jsx)(Ce.a,{style:{height:"30px"},value:a,onChange:function(t,n){i(n),e.handleIteration(n)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:o})})}var Ne=n(1279),Ee=Object(J.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(10)}}}}));function Ie(){var e=Ee();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(Ne.a,{})})}var Me=n(12),De=n(17),Te=n(1275),Re=n(659),ze=n(479),Ae=n(761),He=n(1276),Le=n(727),Fe=n(756),_e=n.n(Fe),Je=n(484),Be=n.n(Je),Ue=n(510),Ze=n.n(Ue),Ge=n(508),We=n.n(Ge),Xe=n(509),Ye=n.n(Xe),qe=n(757),Ke=n.n(qe),Qe=Object(J.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(Me.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Me.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(De.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(De.d)(e.palette.common.white,.25)},marginRight:e.spacing(5),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Me.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(Me.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Me.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function $e(){var e=Qe(),t=c.a.useState(null),n=Object(p.a)(t,2),a=n[0],i=n[1],o=c.a.useState(null),s=Object(p.a)(o,2),l=s[0],u=s[1],d=Boolean(a),j=Boolean(l),b=function(e){i(e.currentTarget)},h=function(){u(null)},f=function(){i(null),h()},m="primary-search-account-menu",O=Object(r.jsxs)(Le.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:m,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:f,children:[Object(r.jsx)(de.a,{onClick:f,children:"Profile"}),Object(r.jsx)(de.a,{onClick:f,children:"My account"})]}),x="primary-search-account-menu-mobile",g=Object(r.jsxs)(Le.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:h,children:[Object(r.jsxs)(de.a,{children:[Object(r.jsx)(ze.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(r.jsxs)(He.a,{badgeContent:4,children:[" /* Fix Color!! */",Object(r.jsx)(We.a,{})]})}),Object(r.jsx)("p",{children:"Messages"})]}),Object(r.jsxs)(de.a,{children:[Object(r.jsx)(ze.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(r.jsx)(He.a,{badgeContent:11,color:"secondary",children:Object(r.jsx)(Ye.a,{})})}),Object(r.jsx)("p",{children:"Notifications"})]}),Object(r.jsxs)(de.a,{onClick:b,children:[Object(r.jsx)(ze.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(r.jsx)(Ze.a,{})}),Object(r.jsx)("p",{children:"Profile"})]})]});return Object(r.jsxs)("div",{className:e.grow,children:[Object(r.jsx)(Te.a,{position:"static",style:{background:"#222729"},children:Object(r.jsxs)(Re.a,{variant:"dense",children:[Object(r.jsx)(ze.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(r.jsx)(_e.a,{})}),Object(r.jsx)(ie.a,{className:e.title,variant:"h6",noWrap:!0,children:"MEDLOC"}),Object(r.jsxs)("div",{className:e.search,children:[Object(r.jsx)("div",{className:e.searchIcon,children:Object(r.jsx)(Be.a,{})}),Object(r.jsx)(Ae.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(r.jsx)("div",{className:e.grow}),Object(r.jsxs)("div",{className:e.sectionDesktop,children:[Object(r.jsx)(ze.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(r.jsx)(He.a,{badgeContent:4,color:"secondary",children:Object(r.jsx)(We.a,{})})}),Object(r.jsx)(ze.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(r.jsx)(He.a,{badgeContent:17,color:"secondary",children:Object(r.jsx)(Ye.a,{})})}),Object(r.jsx)(ze.a,{edge:"end","aria-label":"account of current user","aria-controls":m,"aria-haspopup":"true",onClick:b,color:"inherit",children:Object(r.jsx)(Ze.a,{})})]}),Object(r.jsx)("div",{className:e.sectionMobile,children:Object(r.jsx)(ze.a,{"aria-label":"show more","aria-controls":x,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(r.jsx)(Ke.a,{})})})]})}),g,O]})}var Ve=function(){var e=Object(a.useRef)(null),t=Object(a.useState)("200px"),n=Object(p.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(!1),j=Object(p.a)(s,2),h=j[0],f=j[1];Object(a.useEffect)((function(){e.current&&o(e.current.offsetHeight)}));var m="https://raw.githubusercontent.com/AhmadzadehSanaz/Studio-Lab-Healthcare-Ellinger/main/Data%20Pipeline/hexagon_collection_master.geojson",O=Object(a.useState)([]),x=Object(p.a)(O,2),g=x[0],v=x[1],y=Object(a.useState)(null),C=Object(p.a)(y,2),w=C[0],S=C[1],P=function(e){var t=Object(d.a)(g);t.push(e),v(t)};function N(){return(N=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get(m).then((function(e){var t=e.data;t.features.forEach((function(e){return e.properties.clusters="0"})),S(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]);var I=Object(a.useState)("Preview_Map"),M=Object(p.a)(I,2),D=M[0],T=M[1],R=Object(a.useState)(!1),z=Object(p.a)(R,2),A=z[0],H=(z[1],c.a.useState(!1)),L=Object(p.a)(H,2),J=(L[0],L[1],Object(a.useState)(null)),B=Object(p.a)(J,2),U=B[0],Z=B[1],G=Object(a.useState)(!1),W=Object(p.a)(G,2),X=(W[0],W[1],function(e,t){var n=t.map((function(e){return e.replace(/ /g,"_")})),r={"selected features":n,"number of clusters":e};f(!0),b.a.post("/get_kmeans_cluster/",JSON.stringify(r),{withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then((function(e){var t=e.data,r={};Object.keys(t).forEach((function(e){e=t[e],r[e.fid]=e.clusters.toString()})),P({features:n,fidClusterMap:r});var a=JSON.parse(JSON.stringify(w));a.features.forEach((function(e){e.properties.clusters=r[e.properties.fid]})),S(a),f(!1)})).catch((function(e){console.log(e),f(!1)}))}),Y=Object(a.useState)(null),q=Object(p.a)(Y,2);return q[0],q[1],Object(r.jsx)("div",{className:"App",children:null!==w?Object(r.jsxs)("div",{className:"containerDash",children:[Object(r.jsx)("nav",{className:"navDash generalComp",children:Object(r.jsx)($e,{})}),Object(r.jsx)("div",{className:"mainDash generalComp",children:Object(r.jsx)(Pe,{history:g,handleIteration:function(e){var t=g[e],n=JSON.parse(JSON.stringify(w));n.features.forEach((function(e){e.properties.clusters=t.fidClusterMap[e.properties.fid]})),S(n)}})}),Object(r.jsxs)("div",{className:"sidebarDash generalComp",style:{padding:"5px"},children:[Object(r.jsx)(ye,{dataProps:w,methodProps:T,featureProps:Z,handleSubmit:X,userFeatures:U}),h?Object(r.jsx)("div",{style:{height:"60px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsx)(Ie,{})}):Object(r.jsx)(Oe,{handleHistory:P,handleSubmit:X,userFeatures:U})]}),Object(r.jsx)("div",{className:"content4 generalComp",children:Object(r.jsx)("span",{children:Object(r.jsx)(_,{dataProps:w,userSelectedItems:D,userClickedProp:A})})}),Object(r.jsx)("div",{className:"content5 generalComp",children:Object(r.jsx)("span",{children:Object(r.jsx)(F,{dataProps:w,userSelectedItems:"clusters",userClickedProp:A})})}),Object(r.jsx)("div",{className:"content6 generalComp",style:{display:"grid",placeItems:"center"},children:Object(r.jsx)(E,{data:w,columnName:D})}),Object(r.jsx)("div",{className:"content7 generalComp",id:"tble",ref:e,children:Object(r.jsx)(k,{style:{padding:"5px"},dataProps:w,userFeaturesProps:U,heightProp:i})})]}):Object(r.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsx)(Ie,{})})})};n(1210);var et=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(Ve,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(et,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},825:function(e,t,n){},843:function(e,t,n){}},[[1212,1,2]]]);
//# sourceMappingURL=main.6bc2de3e.chunk.js.map