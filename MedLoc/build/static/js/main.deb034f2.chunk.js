(this.webpackJsonpmedloc=this.webpackJsonpmedloc||[]).push([[0],{1209:function(e){e.exports=JSON.parse("{}")},1212:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(0),c=n.n(r),i=n(29),o=n.n(i),s=(n(825),n(59)),l=n.n(s),u=n(150),d=n(26),p=n(19),j=n(487),b=n.n(j),h=(n(843),n(27)),f=n(31),m=n(44),O=n(48),x=n(726),g=n.n(x),v=n(207),y=n(1274),k=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={stats:[],loading:!1,columns:[],dataState:[],height:201},a.getMuiTheme=function(){return Object(v.a)({overrides:{MUIDataTable:{root:{backgroundColor:"red",margin:"dense",padding:"auto"},paper:{boxShadow:"none"}},MUIDataTableBodyCell:{root:{backgroundColor:"inherit",padding:"3px",textAlign:"center",margin:"dense"}},MUIDataTableToolbar:{root:{minHeight:"40px"}}}})},a.tableRef=c.a.createRef(),a}return Object(f.a)(n,[{key:"getInitialState",value:function(){return{state:0}}},{key:"componentDidMount",value:function(){var e=document.getElementById("tble").clientHeight;this.setState({height:e})}},{key:"render",value:function(){var e=[],t=this.props.dataProps.features;if(null!==t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];Object.keys(r.properties),e.push(r.properties)}var i=[];null!==this.props.userFeaturesProps&&(i=this.props.userFeaturesProps.map((function(e){return e.replace(/ /g,"_")})));var o=i.map((function(e){return{name:e,label:e.slice(0,20)+"...",options:{hint:e}}}));return o.push("fid"),o.reverse(),Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)("div",{style:{margin:0,height:"100%"},children:Object(a.jsx)(y.a,{theme:this.getMuiTheme(),children:Object(a.jsx)(g.a,{title:Object(a.jsx)("h4",{style:{float:"left",color:"#383838"},children:"Data Explorer"}),columns:o,data:e,options:{filter:!0,rowHover:!0,downloadOptions:{filename:"CustomDownload.csv",separator:","},filterType:"dropdown",responsive:"stacked",tableBodyHeight:"30vh",draggableColumns:{enabled:!0,transitionTime:300},rowsPerPageOptions:[5,10,50],rowsPerPage:5,viewColumns:!0}})})})})}}]),n}(c.a.Component),C=(n(758),n(1300)),w=n(1303),S=n(1305),P=n(1298),N=n(106),E=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.breaks=new Set(e.props.data.features.map((function(e){return e.properties.clusters}))),e.breaks=Array.from(e.breaks).sort((function(e,t){return+e-+t})),e.colorScale=N.a().domain(e.breaks).range(N.c),e}return Object(f.a)(n,[{key:"handleZoom",value:function(e){this.setState({selectedDomain:e})}},{key:"handleBrush",value:function(e){this.setState({zoomDomain:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsxs)(C.a,{domainPadding:30,width:500,height:300,containerComponent:Object(a.jsx)(w.a,{responsive:!1,zoomDimension:"x",zoomDomain:this.state.zoomDomain,onZoomDomainChange:this.handleZoom.bind(this)}),children:[Object(a.jsx)(S.a,{text:"".concat(this.props.columnName," by cluster"),x:225,y:25,textAnchor:"middle"}),Object(a.jsx)(P.a,{style:{q1:{fill:function(t){return console.log(t),e.colorScale(t.datum.x)}},q3:{fill:function(t){return console.log(t),e.colorScale(t.datum.x)}},median:{stroke:"white",strokeWidth:2}},data:this.props.data.features.map((function(t){return{x:t.properties.clusters,y:t.properties[e.props.columnName]}}))})]})})}}]),n}(c.a.Component);n(744);var I=n(1297),M=n(1307),D=n(1304),T=n(751),R=n(149),z=n(28),H=n.n(z),A=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"createLeafletElement",value:function(e){}},{key:"componentDidMount",value:function(){var e=this;!function(e,t,n){for(var a=[],r=(t-e)/(n-1);e<t;)a.push(e),e+=r;a.push(t)}(100,200,5);var t=H.a.control({position:"topright"});t.onAdd=function(){for(var t,n,a,r=H.a.DomUtil.create("div","info legend"),c=[e.props.extentProps,e.props.extentProps,e.props.extentProps],i=[],o=0;o<c.length;o++)t=c[o],n=c[o+1],i.push('<i style="background:'+(((a=t+1)>1e3?"#800026":a>500?"#BD0026":a>200?"#E31A1C":a>100?"#FC4E2A":a>50?"#FD8D3C":"#FEB24C")+'"></i> ')+t+(n?"&ndash;"+n:"+"));return r.innerHTML=i.join("<br>"),r};var n=this.props.leaflet.map;t.addTo(n)}}]),n}(T.a),L=(Object(R.c)(A),n(1209),n(394));var F=function(e){var t=e.dataProps.features,n=Object(r.useRef)(),c=Object(r.useRef)(null),i=Object(r.useRef)(),o=Object(r.useRef)(null),s=Object(r.useRef)(null);if(null!==t)for(var l in t)if(t.hasOwnProperty(l)){var u=t[l];Object.keys(u.properties);break}var d,p,j=e.userSelectedItems,b=j.replace(/_/g," "),h=t.map((function(e){return e.properties[j]})),f=typeof h[0];if("string"!==f){var m=L.ckmeans(h,7);d=m.map((function(e){return e[0]})),p=N.b().domain(d).range(["#8dd3c7,","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"])}else d=new Set(h),p=N.a().domain(d).range(N.c);return I.a.BaseLayer,I.a.Overlay,Object(r.useEffect)((function(){if(i.current){console.log(e.dataProps,"props"),n.current=H.a.geoJSON(e.dataProps,{style:function(e){return{fillColor:p(e.properties[j]),weight:0,opacity:1,color:"white",dashArray:"3",fillOpacity:1}}}),n.current.eachLayer((function(e){e.bindPopup("".concat(j," : ").concat(e.feature.properties[j]))})),null!==c.current&&i.current.leafletElement.removeControl(c.current),null!==n.current&&i.current.leafletElement.removeLayer(n.current),null!==o.current&&i.current.leafletElement.removeControl(o.current),null!==s.current&&i.current.leafletElement.removeControl(s.current),c.current=H.a.control({position:"topright"}),o.current=H.a.control({position:"topright"}),s.current=H.a.control({position:"bottomright"}),o.current.onAdd=function(){var e=H.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> ".concat(b,"</p>"),e},s.current.onAdd=function(){var e=H.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> Main Map </p>",e},c.current.onAdd=function(){var e,t,n=H.a.DomUtil.create("div","info legend"),a=[];d=Array.from(d);for(var r=Array.from(d).slice(0,7),c=0;c<r.length;c++){if("number"===f){var i=r[c]%1===0;e=i?r[c]:d[c].toFixed(2),t=r[c+1]?i?r[c+1]:r[c+1].toFixed(2):r[c+1]}else e=r[c],t=void 0;a.push('<i style="background:'+p(r[c])+'"></i> '+e+(t?" &ndash; "+t:"string"!==f?"+":""))}return n.innerHTML=a.join("<br>"),n},n.current.addTo(i.current.leafletElement),o.current.addTo(i.current.leafletElement),c.current.addTo(i.current.leafletElement),s.current.addTo(i.current.leafletElement)}}),[j,e.dataProps]),Object(a.jsx)(M.a,{attributionControl:!1,ref:i,center:[41.8781,-87.6298],zoom:10,style:{height:"100%",width:"100%"},children:Object(a.jsx)(D.a,{url:"\thttps://api.mapbox.com/styles/v1/aradnia/ckilrttol26ng17pa9l4m0ucd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJhZG5pYSIsImEiOiJjanlhZDdienQwNGN0M212MHp3Z21mMXhvIn0.lPiKb_x0vr1H62G_jHgf7w"})})};var _=function(e){var t=e.dataProps.features,n=Object(r.useRef)(),c=Object(r.useRef)(null),i=Object(r.useRef)(),o=Object(r.useRef)(null),s=Object(r.useRef)(null);if(null!==t)for(var l in t)if(t.hasOwnProperty(l)){var u=t[l];Object.keys(u.properties);break}var d,p,j=e.userSelectedItems,b=j.replace(/_/g," "),h=t.map((function(e){return e.properties[j]})),f=typeof h[0];if("string"!==f){var m=L.ckmeans(h,7);d=m.map((function(e){return e[0]})),p=N.b().domain(d).range(["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"])}else d=new Set(h),p=N.a().domain(d).range(N.c);return I.a.BaseLayer,I.a.Overlay,Object(r.useEffect)((function(){if(i.current){n.current=H.a.geoJSON(e.dataProps,{style:function(e){return{fillColor:p(e.properties[j]),weight:0,opacity:1,color:"white",dashArray:"3",fillOpacity:1}}}),n.current.eachLayer((function(e){e.bindPopup("".concat(j," : ").concat(e.feature.properties[j]))})),null!==c.current&&i.current.leafletElement.removeControl(c.current),null!==n.current&&i.current.leafletElement.removeLayer(n.current),null!==o.current&&i.current.leafletElement.removeControl(o.current),null!==s.current&&i.current.leafletElement.removeControl(s.current),c.current=H.a.control({position:"topright"}),o.current=H.a.control({position:"topright"}),s.current=H.a.control({position:"bottomright"}),o.current.onAdd=function(){var e=H.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> ".concat(b,"</p>"),e},s.current.onAdd=function(){var e=H.a.DomUtil.create("div","info titleMap");return e.innerHTML="<p> Preview Map </p>",e},c.current.onAdd=function(){var e,t,n=H.a.DomUtil.create("div","info legend"),a=[];d=Array.from(d);var r=Array.from(d).slice(0,7);d>7&&"string"===f&&r.push("Others...");for(var c=0;c<r.length;c++){if("number"===f){var i=r[c]%1===0;e=i?r[c]:d[c].toFixed(2),t=r[c+1]?i?r[c+1]:r[c+1].toFixed(2):r[c+1]}else e=r[c],t=void 0;a.push('<i style="background:'+p(r[c])+'"></i> '+e+(t?" &ndash; "+t:"string"!==f?"+":""))}return n.innerHTML=a.join("<br>"),n},n.current.addTo(i.current.leafletElement),o.current.addTo(i.current.leafletElement),c.current.addTo(i.current.leafletElement),s.current.addTo(i.current.leafletElement)}}),[j,e.dataProps]),Object(a.jsx)(M.a,{attributionControl:!1,ref:i,center:[41.8781,-87.6298],zoom:10,style:{height:"100%",width:"100%"},children:Object(a.jsx)(D.a,{url:"\thttps://api.mapbox.com/styles/v1/aradnia/ckilrttol26ng17pa9l4m0ucd/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXJhZG5pYSIsImEiOiJjanlhZDdienQwNGN0M212MHp3Z21mMXhvIn0.lPiKb_x0vr1H62G_jHgf7w"})})},J=n(646),B=n(1282),U=n(1220),Z=n(1277),G=n(1278),W=n(1221),X=n(655),Y=n(719),q=n(652),K=n(1281),Q=n(483),$=n.n(Q),V=n(754),ee=n.n(V),te=n(506),ne=n.n(te),ae=n(507),re=n.n(ae),ce=n(661),ie=n(120),oe=n(753),se=n.n(oe),le=n(752),ue=n.n(le),de=n(656),pe=n(480),je=n(486),be=n(1283),he=Object(J.a)((function(e){return{button:{margin:e.spacing(1)}}}));function fe(e){var t=he(),n=Object(r.useState)(e.loading||!1),i=Object(p.a)(n,2),o=i[0],s=i[1];return c.a.useEffect((function(){s(e.loading||!1)}),[e.loading]),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{onClick:e.propsOnClick,variant:"contained",color:"primary",disabled:o,className:t.button,endIcon:o?Object(a.jsx)(be.a,{children:"timer"}):Object(a.jsx)(be.a,{children:"send"}),children:"Run"})})}var me=Object(J.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"40%"},selectEmpty:{marginTop:e.spacing(1)}}}));function Oe(e){var t=c.a.createRef(),n=me(),r=c.a.useState(""),i=Object(p.a)(r,2),o=i[0],s=i[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(B.a,{container:!0,direction:"row",alignItems:"center",justify:"center",children:[Object(a.jsx)(pe.a,{className:n.formControl,children:Object(a.jsxs)(je.a,{labelId:"demo-simple-select-placeholder-label-label",id:"demo-simple-select-placeholder-label",value:o,onChange:function(e){s(e.target.value)},displayEmpty:!0,className:n.selectEmpty,children:[Object(a.jsx)(de.a,{value:"",children:Object(a.jsx)("em",{children:"Select..."})}),Object(a.jsx)(de.a,{value:2,children:" 2 "}),Object(a.jsx)(de.a,{value:3,children:" 3"}),Object(a.jsx)(de.a,{value:4,children:" 4 "}),Object(a.jsx)(de.a,{value:5,children:" 5 "}),Object(a.jsx)(de.a,{value:6,children:" 6 "})]})}),Object(a.jsx)(fe,{ref:t,propsOnClick:function(){e.handleSubmit(o,e.userFeatures)}})]})})}var xe=Object(J.a)((function(e){return{root:{margin:"2px",padding:"5px",fontSize:"8px"},cardHeader:{padding:e.spacing(1,2)},list:{width:280,height:"250px",backgroundColor:e.palette.background.paper,overflow:"auto",textTransform:"capitalize"},MuiTypography:{fontSize:"8px"},button:{margin:e.spacing(1,1)},MuiListItem:{padding:"0px",margin:0}}}));function ge(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function ve(e,t){return e.filter((function(e){return-1!==t.indexOf(e)}))}function ye(e){var t,n=e.dataProps.features;if(null!==n)for(var r in n)if(n.hasOwnProperty(r)){var i=n[r];t=Object.keys(i.properties);break}var o=t.map((function(e){return e.replace(/_/g," ")})),s=xe(),l=c.a.useState([]),u=Object(p.a)(l,2),j=u[0],b=u[1],h=c.a.useState(),f=Object(p.a)(h,2),m=f[0],O=f[1],x=c.a.useState(o.reverse()),g=Object(p.a)(x,2),v=g[0],y=g[1],k=c.a.useState([]),C=Object(p.a)(k,2),w=C[0],S=C[1],P=ve(j,v),N=ve(j,w);e.featureProps(w);var E,I,M=function(e){return function(){var t=j.indexOf(e),n=Object(d.a)(j);if(-1===t){e.replace(/ /g,"_");n.push(e)}else n.splice(t,1);b(n)}},D=function(t){return function(){var n=j.indexOf(t),a=Object(d.a)(j);if(-1===n){var r=t.replace(/ /g,"_");e.methodProps(r)}else a.splice(n,1);O(t)}},T=function(e){return function(){var t=j.indexOf(e),n=Object(d.a)(j);-1===t?n.push(e):n.splice(t,1),b(n)}},R=function(e){return ve(j,e).length},z=function(e){return function(){var t,n;R(e)===e.length?b(ge(j,e)):b((t=j,n=e,[].concat(Object(d.a)(t),Object(d.a)(ge(n,t)))))}};return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(B.a,{container:!0,spacing:0,direction:"column",justify:"space-evenly",alignItems:"center",className:s.root,children:[Object(a.jsx)(B.a,{item:!0,children:(E="Features",I=v,Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(G.a,{className:s.cardHeader,avatar:Object(a.jsx)("div",{children:Object(a.jsx)(Y.a,{fontSize:"small",onClick:z(I),checked:R(I)===I.length&&0!==I.length,indeterminate:R(I)!==I.length&&0!==R(I),disabled:0===I.length,inputProps:{"aria-label":"all items selected"}})}),title:E,subheader:"".concat(R(I),"/").concat(I.length," selected"),children:Object(a.jsx)(ce.a,{title:"Hover over each section to learn about how they work",children:Object(a.jsx)($.a,{})})}),Object(a.jsx)(K.a,{}),Object(a.jsxs)(U.a,{className:s.list,dense:!0,component:"div",role:"list",children:[I.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(a.jsxs)(W.a,{role:"listitem",button:!0,disableRipple:!0,children:[Object(a.jsx)(Y.a,{fontSize:"small",onClick:M(e),checked:-1!==j.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(a.jsx)(Y.a,{icon:Object(a.jsx)(ne.a,{fontSize:"small"}),checkedIcon:Object(a.jsx)(re.a,{fontSize:"small"}),onClick:D(e),checked:e===m,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(a.jsx)(X.a,{id:t,primary:"".concat(e)})]},e)})),Object(a.jsx)(W.a,{})]})]}))}),Object(a.jsx)(B.a,{item:!0,children:Object(a.jsxs)(B.a,{container:!0,direction:"row",alignItems:"center",children:[Object(a.jsx)(q.a,{variant:"contained",color:"primary",size:"small",className:s.button,onClick:function(){S(w.concat(P)),y(ge(v,P)),b(ge(j,P))},disabled:0===P.length,"aria-label":"move selected right",children:Object(a.jsx)(ue.a,{})}),Object(a.jsx)(q.a,{variant:"contained",color:"primary",size:"small",className:s.button,onClick:function(){y(v.concat(N)),S(ge(w,N)),b(ge(j,N))},disabled:0===N.length,"aria-label":"move selected left",children:Object(a.jsx)(se.a,{})})]})}),Object(a.jsx)(B.a,{item:!0,children:function(e,t){return Object(a.jsxs)(Z.a,{children:[Object(a.jsx)(G.a,{className:s.cardHeader,avatar:Object(a.jsx)(Y.a,{fontSize:"small",onClick:z(t),checked:R(t)===t.length&&0!==t.length,indeterminate:R(t)!==t.length&&0!==R(t),disabled:0===t.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(R(t),"/").concat(t.length," selected")}),Object(a.jsx)(K.a,{}),Object(a.jsxs)(U.a,{className:s.list,dense:!0,component:"div",role:"list",children:[t.map((function(e){var t="transfer-list-all-item-".concat(e,"-label");return Object(a.jsxs)(W.a,{spacing:0,role:"listitem",button:!0,children:[Object(a.jsx)(Y.a,{onClick:T(e),checked:-1!==j.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(a.jsx)(Y.a,{icon:Object(a.jsx)(ne.a,{fontSize:"small"}),checkedIcon:Object(a.jsx)(re.a,{fontSize:"small"}),onClick:D(e),checked:e===m,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}}),Object(a.jsx)(X.a,{id:t,primary:"".concat(e)})]},e)})),Object(a.jsx)(W.a,{})]})]})}("Selected Features",w)}),Object(a.jsxs)(B.a,{item:!0,children:[Object(a.jsxs)(ie.a,{variant:"overline",className:s.title,children:["Number of Clusters",Object(a.jsx)(ce.a,{title:"Hover over each section to learn about how they work",children:Object(a.jsx)(ee.a,{style:{marginTop:"3px"},fontSize:"small"})})," "]})," "]})]})})}var ke=n(755),Ce=n(1302),we=n(1284),Se=n(267);Object(J.a)((function(e){return{tabsRoot:{height:"30px"},tabRoot:{height:"42px"},root:{width:"100%",height:"50%"}}}));function Pe(e){var t=c.a.useState(0),n=Object(p.a)(t,2),r=n[0],i=n[1],o=e.history.map((function(e,t){return Object(a.jsx)(we.a,Object(ke.a)({label:"Iter-".concat(t)},{id:"scrollable-auto-tab-".concat(n=0),"aria-controls":"scrollable-auto-tabpanel-".concat(n)}),"Iter-".concat(t));var n}));return Object(a.jsx)(Se.a,{square:!0,children:Object(a.jsx)(Ce.a,{style:{height:"30px"},value:r,onChange:function(t,n){i(n),e.handleIteration(n)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:o})})}var Ne=n(1279),Ee=Object(J.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(10)}}}}));function Ie(){var e=Ee();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(Ne.a,{})})}var Me=n(12),De=n(17),Te=n(1275),Re=n(659),ze=n(479),He=n(761),Ae=n(1276),Le=n(727),Fe=n(756),_e=n.n(Fe),Je=n(484),Be=n.n(Je),Ue=n(510),Ze=n.n(Ue),Ge=n(508),We=n.n(Ge),Xe=n(509),Ye=n.n(Xe),qe=n(757),Ke=n.n(qe),Qe=Object(J.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(Me.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(Me.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(De.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(De.d)(e.palette.common.white,.25)},marginRight:e.spacing(5),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Me.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(Me.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Me.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function $e(){var e=Qe(),t=c.a.useState(null),n=Object(p.a)(t,2),r=n[0],i=n[1],o=c.a.useState(null),s=Object(p.a)(o,2),l=s[0],u=s[1],d=Boolean(r),j=Boolean(l),b=function(e){i(e.currentTarget)},h=function(){u(null)},f=function(){i(null),h()},m="primary-search-account-menu",O=Object(a.jsxs)(Le.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:m,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:f,children:[Object(a.jsx)(de.a,{onClick:f,children:"Profile"}),Object(a.jsx)(de.a,{onClick:f,children:"My account"})]}),x="primary-search-account-menu-mobile",g=Object(a.jsxs)(Le.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:h,children:[Object(a.jsxs)(de.a,{children:[Object(a.jsx)(ze.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(a.jsxs)(Ae.a,{badgeContent:4,children:[" /* Fix Color!! */",Object(a.jsx)(We.a,{})]})}),Object(a.jsx)("p",{children:"Messages"})]}),Object(a.jsxs)(de.a,{children:[Object(a.jsx)(ze.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(a.jsx)(Ae.a,{badgeContent:11,color:"secondary",children:Object(a.jsx)(Ye.a,{})})}),Object(a.jsx)("p",{children:"Notifications"})]}),Object(a.jsxs)(de.a,{onClick:b,children:[Object(a.jsx)(ze.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(a.jsx)(Ze.a,{})}),Object(a.jsx)("p",{children:"Profile"})]})]});return Object(a.jsxs)("div",{className:e.grow,children:[Object(a.jsx)(Te.a,{position:"static",style:{background:"#222729"},children:Object(a.jsxs)(Re.a,{variant:"dense",children:[Object(a.jsx)(ze.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(_e.a,{})}),Object(a.jsx)(ie.a,{className:e.title,variant:"h6",noWrap:!0,children:"MEDLOC"}),Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(Be.a,{})}),Object(a.jsx)(He.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(a.jsx)("div",{className:e.grow}),Object(a.jsxs)("div",{className:e.sectionDesktop,children:[Object(a.jsx)(ze.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(a.jsx)(Ae.a,{badgeContent:4,color:"secondary",children:Object(a.jsx)(We.a,{})})}),Object(a.jsx)(ze.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(a.jsx)(Ae.a,{badgeContent:17,color:"secondary",children:Object(a.jsx)(Ye.a,{})})}),Object(a.jsx)(ze.a,{edge:"end","aria-label":"account of current user","aria-controls":m,"aria-haspopup":"true",onClick:b,color:"inherit",children:Object(a.jsx)(Ze.a,{})})]}),Object(a.jsx)("div",{className:e.sectionMobile,children:Object(a.jsx)(ze.a,{"aria-label":"show more","aria-controls":x,"aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(a.jsx)(Ke.a,{})})})]})}),g,O]})}var Ve=function(){var e=Object(r.useRef)(null),t=Object(r.useState)("200px"),n=Object(p.a)(t,2),i=n[0],o=n[1],s=Object(r.useState)(!1),j=Object(p.a)(s,2),h=j[0],f=j[1];Object(r.useEffect)((function(){e.current&&o(e.current.offsetHeight)}));var m="https://raw.githubusercontent.com/AhmadzadehSanaz/Studio-Lab-Healthcare-Ellinger/main/Data%20Pipeline/hexagon_collection_master.geojson",O=Object(r.useState)([]),x=Object(p.a)(O,2),g=x[0],v=x[1],y=Object(r.useState)(null),C=Object(p.a)(y,2),w=C[0],S=C[1],P=function(e){var t=Object(d.a)(g);t.push(e),v(t)};function N(){return(N=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.a.get(m).then((function(e){var t=e.data;t.features.forEach((function(e){return e.properties.clusters="0"})),S(t)})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]);var I=Object(r.useState)("Preview_Map"),M=Object(p.a)(I,2),D=M[0],T=M[1],R=Object(r.useState)(!1),z=Object(p.a)(R,2),H=z[0],A=(z[1],c.a.useState(!1)),L=Object(p.a)(A,2),J=(L[0],L[1],Object(r.useState)(null)),B=Object(p.a)(J,2),U=B[0],Z=B[1],G=Object(r.useState)(!1),W=Object(p.a)(G,2),X=(W[0],W[1],function(e,t){var n=t.map((function(e){return e.replace(/ /g,"_")})),a={"selected features":n,"number of clusters":e};f(!0),b.a.post("/get_kmeans_cluster/",JSON.stringify(a),{withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"}}).then((function(e){var t=e.data,a={};Object.keys(t).forEach((function(e){e=t[e],a[e.fid]=e.clusters.toString()})),P({features:n,fidClusterMap:a});var r=JSON.parse(JSON.stringify(w));r.features.forEach((function(e){e.properties.clusters=a[e.properties.fid]})),S(r),f(!1)})).catch((function(e){console.log(e),f(!1)}))}),Y=Object(r.useState)(null),q=Object(p.a)(Y,2);return q[0],q[1],Object(a.jsx)("div",{className:"App",children:null!==w?Object(a.jsxs)("div",{className:"containerDash",children:[Object(a.jsx)("nav",{className:"navDash generalComp",children:Object(a.jsx)($e,{})}),Object(a.jsx)("div",{className:"mainDash generalComp",children:Object(a.jsx)(Pe,{history:g,handleIteration:function(e){var t=g[e],n=JSON.parse(JSON.stringify(w));n.features.forEach((function(e){e.properties.clusters=t.fidClusterMap[e.properties.fid]})),S(n)}})}),Object(a.jsxs)("div",{className:"sidebarDash generalComp",style:{padding:"5px"},children:[Object(a.jsx)(ye,{dataProps:w,methodProps:T,featureProps:Z,handleSubmit:X,userFeatures:U}),h?Object(a.jsx)("div",{style:{height:"60px",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(Ie,{})}):Object(a.jsx)(Oe,{handleHistory:P,handleSubmit:X,userFeatures:U})]}),Object(a.jsx)("div",{className:"content4 generalComp",children:Object(a.jsx)("span",{children:Object(a.jsx)(_,{dataProps:w,userSelectedItems:D,userClickedProp:H})})}),Object(a.jsx)("div",{className:"content5 generalComp",children:Object(a.jsx)("span",{children:Object(a.jsx)(F,{dataProps:w,userSelectedItems:"clusters",userClickedProp:H})})}),Object(a.jsx)("div",{className:"content6 generalComp",style:{display:"grid",placeItems:"center"},children:Object(a.jsx)(E,{data:w,columnName:D})}),Object(a.jsx)("div",{className:"content7 generalComp",id:"tble",ref:e,children:Object(a.jsx)(k,{style:{padding:"5px"},dataProps:w,userFeaturesProps:U,heightProp:i})})]}):Object(a.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)(Ie,{})})})};n(1210);var et=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(Ve,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(et,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},825:function(e,t,n){},843:function(e,t,n){}},[[1212,1,2]]]);
//# sourceMappingURL=main.deb034f2.chunk.js.map