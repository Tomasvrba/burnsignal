(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(e,t,a){e.exports=a.p+"static/media/logo.0a58105d.png"},263:function(e,t,a){e.exports=a(638)},270:function(e,t,a){},272:function(e,t,a){},274:function(e,t,a){},287:function(e,t){},308:function(e,t){},310:function(e,t){},379:function(e,t){},574:function(e,t){},634:function(e,t,a){},636:function(e,t,a){},638:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(252),o=a.n(c),l=a(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(26),i=a(9),u={polls:[],web3:void 0,auth:!1,verified:!1},m=Object(n.createContext)(u),d=m.Provider,p=a(2),b=a.n(p),f=a(12),E=a(123),h=a(643),v=(a(270),a(272),a(274),a(38)),g=a(639),y=a(642),N=a(645),O=a(644),j=a(40),x=a.n(j),w=a(640),C=a(641),k="0x61a8598eabb7bddca95d3783c228878cd788e0a9",S=["Monday","Tuesday","Wendsday","Thursday","Friday","Saturday","Sunday"],F={BAR_CONFIG:function(e,t){return{type:"horizontalBar",responsive:!0,data:{labels:["Yes","No"],datasets:[{data:e,borderColor:"#d048b6",borderWidth:2,fill:!0}]},options:{legend:{display:!1},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Wei (ETH)"},ticks:{suggestedMin:0,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}}]}}}},SPLINE_CONFIG:function(e,t){return{options:{lineTension:100,bezierCurve:!0,legend:{display:!1},scales:{yAxes:[{id:"yAxis1",scaleLabel:{labelString:"Wei (ETH)",display:!0},ticks:{min:-1*t,max:t,callback:function(e,t,a){return e>1e8||e<-1e8?e.toExponential():e}}},{id:"yAxis2",labels:["","Yes","","No",""],type:"category",gridLines:{drawOnChartArea:!1,display:!1}}]}},type:"line",data:e}},SPLINE_STYLE:function(e){return{label:"Data",fill:!0,backgroundColor:e,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#d048b6",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#d048b6",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4}}},I=[{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_data",type:"string"},{name:"_deadline",type:"uint64"}],name:"newVoteProposal",outputs:[{name:"newProposal",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,name:"proposal",type:"address"},{indexed:!1,name:"issuer",type:"address"},{indexed:!1,name:"deadline",type:"uint256"},{indexed:!1,name:"name",type:"string"},{indexed:!1,name:"data",type:"string"},{indexed:!1,name:"optionA",type:"string"},{indexed:!1,name:"optionAaddr",type:"address"},{indexed:!1,name:"optionB",type:"string"},{indexed:!1,name:"optionBaddr",type:"address"}],name:"newProposalIssued",type:"event"}],B=a(253),L=a.n(B),D=a(254),_=a.n(D),M=a(255),q=a.n(M),A=a(256),P=a.n(A),T={walletconnect:{package:q.a,options:{infuraId:"INFURA_ID"}},authereum:{package:P.a,options:{}}},W=function(){return new Promise(function(){var e=Object(f.a)(b.a.mark(function e(t,a){var n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new _.a.Core({network:"mainnet",cacheProvider:!0,providerOptions:T}),e.next=4,n.connect();case 4:r=e.sent,c=new L.a(r),t(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}())},H=a(259),R=a.n(H);var z=function(){var e=Object(n.useState)(r.a.createElement(function(){return r.a.createElement(g.a,{onClick:function(){return function(){return U.apply(this,arguments)}()}},"Login")},null)),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)(r.a.createElement(n.Fragment,null)),E=Object(i.a)(p,2),h=E[0],j=E[1],S=Object(n.useState)(""),F=Object(i.a)(S,2),B=F[0],L=F[1],D=Object(n.useState)(""),_=Object(i.a)(D,2),M=_[0],q=_[1],A=Object(n.useState)(""),P=Object(i.a)(A,2),T=(P[0],P[1],Object(n.useState)({})),H=Object(i.a)(T,2),z=H[0],G=H[1],V=Object(n.useContext)(m),Y=V.dispatch,J=V.state;function U(){return(U=Object(f.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:a=e.sent,n=new t.eth.Contract(I,k),Y({payload:{web3:t,accounts:a,instance:n},type:"WEB3"}),c(r.a.createElement($,{account:a[0]})),j(r.a.createElement(K,{account:a[0]})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("Web3 login could not be detected");case 16:case"end":return e.stop()}},e,null,[[0,13]])}))).apply(this,arguments)}function $(e){var t=e.account;return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{type:"button","data-target":"#create","data-toggle":"modal"}," Create "),r.a.createElement(l.b,{to:"/profile/".concat(t)},r.a.createElement(g.a,null," Profile ")),r.a.createElement(g.a,null,"Logout"))}function K(e){var t=e.account;return r.a.createElement(l.b,{className:"nav-link",to:"/profile/".concat(t)},r.a.createElement("img",{className:"nav-profile",src:x()(t)}))}var Q=function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=J.web3,a=J.instance,n=J.accounts,e.next=3,t.eth.getBlock("latest");case 3:return r=e.sent,c=r.timestamp+604800,e.next=7,a.methods.newVoteProposal(M,B,c).send({from:n[0]}).on("transactionHash",function(e){document.getElementsByClassName("create-poll-description")[0].value="",document.getElementsByClassName("create-poll-question")[0].value=""});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),X=function(e){L(e.target.value)},Z=function(e){q(e.target.value)},ee=function(e){G(Object(v.a)({},e.target.name,!0))},te=function(e){G(Object(v.a)({},e.target.name,!1))};return r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top col-sm-12 col-md-7"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{className:"navbar-logo",src:R.a}),r.a.createElement("span",{className:"navbar-title"}," Burn Signal "))),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},h,r.a.createElement(y.a,{isOpen:u,toggle:function(){return d(function(e){return!e})}},r.a.createElement(N.a,{caret:!0},r.a.createElement("i",{className:"nav-login-icon tim-icons icon-minimal-down"})),r.a.createElement(O.a,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(g.a,null," Home ")),a,r.a.createElement(g.a,{divider:!0}),r.a.createElement(g.a,{type:"button","data-target":"#about","data-toggle":"modal"},"About"),r.a.createElement(g.a,{target:"_",href:"https://blog.burnsignal.io"},"Blog")))))))),r.a.createElement(function(){return r.a.createElement("div",{className:"modal fade",id:"about",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title align-left"},"About"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body about"},r.a.createElement("p",null,"Burn Signal is an experiment in distributed preference signaling where verified unique users burn ETH to signal their opinion."),r.a.createElement("p",null,"Votes are weighted quadratically."),r.a.createElement("p",null,"We use ",r.a.createElement("a",{target:"_",href:"https://brightid.org"},"BrightID")," as our proof of uniqueness, only votes cast by ethereum addresses that are verified unique by BrightID count towards the outcome of a burn signals."),r.a.createElement("br",null),r.a.createElement("p",null,"Burn Signal is funded by grants and community contributions. If you would like to contribute funds, check out our ",r.a.createElement("a",{target:"_",href:"https://gitcoin.co/grants/138/burner-vote"},"Gitcoin Grants campaign"),", if you would like to contribute code or other work, check out our ",r.a.createElement("a",{target:"_",href:"https://github.com/burnsignal"},"GitHub")," and our ",r.a.createElement("a",{target:"_",href:"https://colony.io/colony/burn"},"Colony"),"."),r.a.createElement("br",null),r.a.createElement("p",null,"Check out our ",r.a.createElement("a",{target:"_",href:"https://blog.burnsignal.io"}," blog ")," for more information.")))))},null),r.a.createElement(function(){return r.a.createElement("div",{className:"modal fade",id:"create",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title align-left"},"Create"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body about"},r.a.createElement("input",{autoFocus:z.question,onMouseEnter:ee,onMouseLeave:te,name:"question",value:M,onChange:Z,placeholder:"What question is on your mind?",className:"create-poll-question"}),r.a.createElement("textarea",{autoFocus:z.description,name:"description",onMouseEnter:ee,onMouseLeave:te,value:B,onChange:X,placeholder:"Description",className:"create-poll-description"}),r.a.createElement("button",{className:"btn btn-primary button-poll",onClick:Q}," Create ")))))},null))},G=a(127),V=a(138),Y=function(e){return Object(G.a)(e.substring(0,10)).reduceRight(function(e,t,a,n){return[].concat(Object(G.a)(e),[n.splice(~~(Math.random()*n.length),1)[0]])},[]).join("")},J=function(e){return parseInt(e)>=1e15?"".concat(parseFloat(e/Math.pow(10,18)).toFixed(3)," ETH"):parseInt(e)>=1e6?"".concat((e/1e9).toFixed(3)," GWEI"):parseInt(e)<1e6?"".concat(parseFloat(e).toFixed(2)," WEI"):void 0},U=function(e,t){var a=e.concat(t);return a.unshift(0),a},$=function(){var e=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={yes:[],no:[],voters:[]},e.next=3,Object.entries(t).map(function(e){var t=Object(i.a)(e,2),n=(t[0],t[1]),r=n.address,c=n.yes,o=n.no;a.voters.push(r),c.value.forEach(function(e,t){e=parseFloat(e),isNaN(e)&&(e=0),a.yes.push(e)}),o.value.forEach(function(e,t){e=-1*parseFloat(e),isNaN(e)&&(e=0),a.no.push(e)})});case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),K=function(e){return"-"===(e=(e=e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")).replace(/ /g,"-").toLowerCase()).substring(e.length-1,e.length)&&(e=e.slice(0,e.length-1)),e.replace("?","")},Q=function(e){e=e.toLowerCase().replace("0x","");for(var t=Object(V.keccak_256)(e),a="0x",n=0;n<e.length;n++)parseInt(t[n],16)>=8?a+=e[n].toUpperCase():a+=e[n];return a};var X=a(628);var Z=function(e){var t="".concat(K(e.title),".burnsignal.eth"),a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useContext)(m).state,u=(e.title,function(e){l(e.target.value)});function d(a){var n=a.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Vote ",r.a.createElement("span",{id:"pink"},n)," by sending any amount of ETH to ",r.a.createElement("br",null),r.a.createElement("a",{target:"_",href:"https://etherscan.io"},r.a.createElement("span",{id:"pink"},n),".",t),r.a.createElement("div",{className:"poll-qr"},r.a.createElement(X,{value:e.address[n]})),"To ensure that you vote counts, please link your ethereum account to your BrightID account at\u2028 ",r.a.createElement("a",{target:"_",href:"https://ethereum.brightid.org"},"ethereum.brightid.org")))}function p(t){var a=t.option;return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.title),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("span",{className:"vote-selection"}," How much ETH will you burn to cast your vote? "),r.a.createElement("input",{type:"number",autoFocus:!0,onChange:u,value:o,className:"modal-input",placeholder:"0.5 ETH"})),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal",onClick:function(){return h(a)}},"Vote ",a)))}function E(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Please verify your account"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Before casting your vote, you should verify your Ethereum account using BrightID."),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-verify","data-dismiss":"modal"},"Verify")))}var h=function(){var t=Object(f.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.web3,e.dismiss(),r=o%1===0?n.utils.toBN(parseFloat(o)).mul(n.utils.toBN(1e18)):parseInt(o*Math.pow(10,18)),t.next=5,n.eth.sendTransaction({to:e.address[a],from:s.accounts[0],value:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"modal fade",id:"yes",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},s.auth&&s.verified&&r.a.createElement(p,{option:"yes"}),!s.auth&&!s.verified&&r.a.createElement(d,{option:"yes"}),s.auth&&!s.verified&&r.a.createElement(E,null))),r.a.createElement("div",{className:"modal fade",id:"no",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},s.auth&&s.verified&&r.a.createElement(p,{option:"no"}),!s.auth&&!s.verified&&r.a.createElement(d,{option:"no"}),s.auth&&!s.verified&&r.a.createElement(E,null))))},ee=function(e){return'{ polls(where: { id: "'.concat(e,'" }) { yes no users { address yes { contributions timestamps total value sqrt } no { contributions timestamps total value sqrt } } } }')},te='{ issues(where: { title_not_contains: "question" }) { id poll body title issuer deadline optionBaddr optionAaddr } }',ae=function(e){return'{ user(id: "'.concat(e.toLowerCase(),'") { burns polls burned } }')},ne=function(){var e=Object(f.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thegraph.com/subgraphs/name/burnsignal/proof-of-concept",Object(s.a)({},(a=t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:a})}))).then(function(e){return e.json()}).then(function(e){return e}).catch(console.log);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var a},e)}));return function(t){return e.apply(this,arguments)}}();function re(){return ce.apply(this,arguments)}function ce(){return(ce=Object(f.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(te);case 2:return t=e.sent,a={},t.data.issues.forEach(function(e){a[K(e.poll)]=Object(s.a)({},e)}),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(ee(t));case 2:if(0!=(a=e.sent).data.polls.length){e.next=7;break}return e.abrupt("return",{yes:0,no:0,users:[]});case 7:return e.abrupt("return",a.data.polls[0]);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function se(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(f.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(ae(t));case 2:if(null!==(a=e.sent).data.user){e.next=7;break}return e.abrupt("return",{burned:0,polls:[],burns:[]});case 7:return e.abrupt("return",a.data.user);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(634);var ue=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(0),p=Object(i.a)(d,2),h=p[0],v=p[1],g=Object(n.useState)(0),y=Object(i.a)(g,2),N=y[0],O=y[1],j=Object(E.f)().address;return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(j);case 2:t=e.sent,a=t.burned,n=t.polls,r=t.burns,O(J(parseInt(a)/r.length)),v(r.length),c(J(a)),m(n);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("div",{className:"profile"},r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(l.b,{to:"/profile/".concat(j)},r.a.createElement("img",{className:"profile-blockie",src:x()(j)})),r.a.createElement("div",{className:"profile-stats"},r.a.createElement("div",{className:"profile-address"},r.a.createElement("a",{href:"https://etherscan.io/address/".concat(j)},Q(j))),r.a.createElement("span",{className:"profile-stat"},"Burned: ",r.a.createElement("span",{id:"pink"},a)," "),r.a.createElement("span",{className:"profile-stat"},"Burns: ",r.a.createElement("span",{id:"pink"},h)," "),r.a.createElement("span",{className:"profile-stat"},"Average: ",r.a.createElement("span",{id:"pink"},N)," "),r.a.createElement("p",{className:"profile-verified"},"Verified: ",r.a.createElement("span",{id:"pink"},"false")," ")))))),r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Polls")),r.a.createElement("div",{className:"card-body"}),r.a.createElement("ul",null,u.map(function(e){return r.a.createElement(l.b,{to:"/poll/".concat(K(e))},r.a.createElement("li",null," ",e," "))}))))))},me=a(130),de=a.n(me),pe=function(e,t){var a;return(a=[]).concat.apply(a,Object(G.a)(Array.from({length:t},function(){return e})))};var be=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollRecords,n=a.yes,r=a.no,c=U(n,r),o=Math.max.apply(Math,Object(G.a)(c)),l=Math.min.apply(Math,Object(G.a)(c)),i=Math.ceil((.2*o+o)/10*10),u=-1*Math.ceil((.2*l+l)/10*10),m=document.getElementById(t).getContext("2d"),d=u>i?u:i,p=c.length>S.length?pe(S,parseInt(c.length/S.length)):S.slice(0,c.length),b=m.createLinearGradient(0,337.5,0,25);b.addColorStop(1,"rgba(255,51,138,0.225)"),b.addColorStop(.7,"rgba(255,51,138,0.2)"),b.addColorStop(.5,"rgba(255,51,138,0.125)"),b.addColorStop(.2,"rgba(255,51,138,0.075)"),b.addColorStop(0,"rgba(119,52,169,0)");var f={labels:p,datasets:[Object(s.a)({},F.SPLINE_STYLE(b),{data:c})]};new de.a(m,Object(s.a)({},F.SPLINE_CONFIG(f,d)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};var fe=function(e){var t=e.chartId;return Object(n.useEffect)(function(){!function(){var a=e.pollCount,n=a.yes,r=a.no,c=document.getElementById(t).getContext("2d"),o=n>r?n:r,l=.2*o+o,i=[n,r];new de.a(c,Object(s.a)({},F.BAR_CONFIG(i,l)))}()},[]),r.a.createElement(n.Fragment,null,r.a.createElement("canvas",{id:t}," "))};a(636);var Ee=function(e){var t=Object(n.useState)({yes:[],no:[]}),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)({yes:"",no:""}),d=Object(i.a)(u,2),p=d[0],h=d[1],v=Object(n.useState)({yes:0,no:0}),g=Object(i.a)(v,2),y=g[0],N=g[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),k=j[0],S=j[1],F=Object(n.useState)(!1),I=Object(i.a)(F,2),B=I[0],L=I[1],D=Object(n.useState)(0),_=Object(i.a)(D,2),M=(_[0],_[1]),q=Object(n.useState)(0),A=Object(i.a)(q,2),P=(A[0],A[1],Object(n.useState)("0x")),T=Object(i.a)(P,2),W=T[0],H=T[1],R=Object(n.useState)(""),z=Object(i.a)(R,2),G=z[0],V=z[1],J=Object(n.useContext)(m).state,U=Object(E.f)().address,K=Object(E.e)(),X=void 0!==e.location?U:e.id;function ee(e){var t="/poll/".concat(X,"/").concat(e);K[K.length-1]!==t&&K.push(t)}return Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n,r,c,l,i,u,m,d,p;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===J.polls[X]){e.next=17;break}return t=J.polls[X],a=t.title,n=t.body,r=t.issuer,c=t.optionAaddr,l=t.optionBaddr,e.next=4,oe(a);case 4:return i=e.sent,u=i.yes,m=i.users,d=i.no,e.next=8,$(m);case 8:p=e.sent,N({yes:parseInt(u),no:parseInt(d)}),h({yes:c,no:l}),H(Q(r)),M(p.voters.length),o(Object(s.a)({},p)),S(n),L(!0),V(a);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[J.polls]),r.a.createElement("div",{className:"poll"},r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement(l.b,{className:"poll-issuer",to:"/profile/".concat(W)},r.a.createElement("img",{className:"poll-profile",src:x()(W)})),r.a.createElement("div",{className:"poll-title"},G)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"poll-description"},k),r.a.createElement("div",{className:"vote-options"},r.a.createElement("button",{type:"button","data-target":"#yes","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return ee("yes")}},"Yes"),r.a.createElement("button",{type:"button","data-target":"#no","data-toggle":"modal",className:"btn btn-primary btn-simple",onClick:function(){return ee("no")}},"No")))))),r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"Results")),r.a.createElement("div",{className:"card-body"},B&&r.a.createElement(fe,{chartId:Y(X),pollCount:y}))))),r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"card-category"},"History")),r.a.createElement("div",{className:"card-body"},B&&r.a.createElement(be,{chartId:Y(X),pollRecords:c})))),r.a.createElement(Z,{dismiss:function(){var t=e.location.pathname.replace("/yes","");t=t.replace("/no",""),K.push(t)},title:G,address:p})))};var he=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),u=s[0],d=s[1],p=Object(n.useState)({}),E=Object(i.a)(p,2),h=E[0],g=E[1],y=Object(n.useContext)(m).state,N=function(e){c(e.target.value)},O=function(e){d(e.target.value)},j=function(e){g(Object(v.a)({},e.target.name,!0))},k=function(e){g(Object(v.a)({},e.target.name,!1))},S=function(){var e=Object(f.a)(b.a.mark(function e(){var t,n,r,c,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.web3,n=y.instance,r=y.accounts,e.next=3,t.eth.getBlock("latest");case 3:return c=e.sent,o=c.timestamp+604800,e.next=7,n.methods.newVoteProposal(u,a,o).send({from:r[0]}).on("transactionHash",function(e){document.getElementsByClassName("create-poll-description")[0].value="",document.getElementsByClassName("create-poll-question")[0].value=""});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,y.web3&&r.a.createElement("div",{className:"new-poll"},r.a.createElement(w.a,null,r.a.createElement(C.a,{sm:"12",md:{size:8,offset:2}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(l.b,{to:"/profile/".concat(y.accounts[0])},r.a.createElement("img",{className:"new-poll-profile",src:x()(y.accounts[0])})),r.a.createElement(function(){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{autoFocus:h.question,onMouseEnter:j,onMouseLeave:k,name:"question",value:u,onChange:O,placeholder:"What question is on your mind?",className:"create-poll-question"}),r.a.createElement("textarea",{autoFocus:h.description,name:"description",onMouseEnter:j,onMouseLeave:k,value:a,onChange:N,placeholder:"Description",className:"create-poll-description"}),r.a.createElement("button",{className:"btn btn-primary button-poll",onClick:S}," Create "))},null)))))),Object.keys(y.polls).reverse().map(function(e,t){return r.a.createElement(l.b,{to:"/poll/".concat(e)},r.a.createElement(Ee,{key:e,id:e}))}))};var ve=Object(E.g)(function(e){var t=Object(n.useContext)(m),a=t.dispatch;return t.state,Object(n.useEffect)(function(){return window.scrollTo(0,0)},[e.location.pathname]),Object(n.useEffect)(function(){!function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:t=e.sent,a({payload:t,type:"POLL"});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(z,null),r.a.createElement(E.a,{path:"/profile/:address",component:ue}),r.a.createElement(E.a,{path:"/poll/:address",component:Ee}),r.a.createElement(E.a,{exact:!0,path:"/",component:he})))});o.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(function(e,t){switch(t.type){case"POLL":return Object(s.a)({},e,{polls:t.payload});case"WEB3":return Object(s.a)({},e,t.payload,{auth:!0,verified:!0});default:return e}},u),c=Object(i.a)(a,2),o=c[0],l=c[1];return r.a.createElement(d,{value:{state:o,dispatch:l}},t)},null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(n.Fragment,null,r.a.createElement(ve,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[263,2,1]]]);
//# sourceMappingURL=main.26c3255e.chunk.js.map