(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/cake.21933752.svg"},118:function(e,t,a){e.exports=a.p+"static/media/zxx-1.3900ca3f.jpg"},119:function(e,t,a){e.exports=a.p+"static/media/zxx-2.98e63d15.jpg"},120:function(e,t,a){e.exports=a.p+"static/media/zxx-3.7bfab71a.jpg"},121:function(e,t,a){e.exports=a.p+"static/media/zxx-4.795833af.jpg"},122:function(e,t,a){e.exports=a.p+"static/media/zxx-5.7275a1d1.jpg"},123:function(e,t,a){e.exports=a.p+"static/media/zxx-6.c8e3ad66.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/zxx-7.67ad1f03.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/zxx-8.0e0e6bb7.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/zxx-9.0091fdfc.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/zxx-1-2.219601a8.jpg"},131:function(e,t,a){e.exports=a(227)},136:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},227:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),s=(a(136),a(20)),c=a(21),o=a(25),m=a(22),d=a(24),u=a(232),p=a(231),y=(a(226),a(148),a(149),a(15)),f=(a(150),a(128)),x=Object(f.a)(),g=a(45),h=a(19),E=a(228),j=a(230),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={touchStartTime:0,duration:0,cardVisible:!0,timer:null},a.touch=a.touch.bind(Object(y.a)(Object(y.a)(a))),a.touchEnd=a.touchEnd.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"touch",value:function(e){var t=this,a=Math.floor(Date.now()),n=0;this.setState({timer:setInterval(function(e){n=Math.floor(Date.now())-e,t.setState({duration:n})},50,a),timerout:setTimeout(function(){t.setState({duration:0,cardVisible:!0}),x.push("/sbd/celebration")},3e3)}),setTimeout(function(e){clearInterval(e)},2500,this.state.timer),this.setState({touchStartTime:a,cardVisible:!1})}},{key:"touchEnd",value:function(e){clearInterval(this.state.timer),console.log(this.state.duration),this.state.duration<2500&&clearTimeout(this.state.timerout),this.setState({duration:this.state.duration<2500?0:2500,cardVisible:this.state.duration<2500})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{height:600,display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,null,l.a.createElement(E.a,{onTouchStart:function(t){return e.touch(t)},onTouchEnd:function(t){return e.touchEnd(t)},onMouseDown:function(t){return e.touch(t)},onMouseUp:function(t){return e.touchEnd(t)},hoverable:!0,style:{width:280,height:350,display:"flex",justifyContent:"center",alignItems:"center"}},this.state.cardVisible?l.a.createElement("h1",{style:{color:"grey",textAlign:"center",userSelect:"none"}},"\u8bf7\u957f\u6309\u6b64\u5904"):l.a.createElement(j.a,{style:{userSelect:"none"},type:"circle",percent:parseInt(100*this.state.duration/2500)})))))}}]),t}(n.Component),v=a(50),T=a.n(v),O=a(112),w=a.n(O),k=a(229),C=k.a.Title,I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a.toEntry=a.toEntry.bind(Object(y.a)(Object(y.a)(a))),a.toGallary=a.toGallary.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toEntry",value:function(e){x.push("/")}},{key:"toGallary",value:function(e){x.push("/sbd/gallary")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{textAlign:"center",userSelect:"none"}},l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{xs:20,sm:16,md:12,lg:8,xl:8},l.a.createElement(C,{style:{color:"#595959"}},"\u8001\u59d0\u751f\u65e5\u5feb\u4e50"))),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{xs:20,sm:16,md:12,lg:8,xl:8},l.a.createElement("img",{src:w.a}))),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{xs:20,sm:16,md:12,lg:8,xl:8},l.a.createElement(C,{level:2,style:{color:"#595959",position:"relative"}},"1993.3.10 ~"," ",l.a.createElement("span",{style:{fontSize:"45px",fontWeight:1e3,position:"relative",top:"4px"}},"\u221e")," "))),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{xs:20,sm:16,md:12,lg:8,xl:8},l.a.createElement(C,{level:2,style:{color:"#595959",position:"relative"}},"\u6c38\u8fdc\u5e74\u8f7b"," "))),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{xs:20,sm:16,md:12,lg:8,xl:8},l.a.createElement(C,{level:2,style:{color:"#595959",position:"relative"}},"\u6c38\u8fdc\u70ed\u6cea\u76c8\u7736"," "))),l.a.createElement(T.a,{style:{marginTop:"30px",marginBottom:"30px"},type:"primary",onClick:function(t){return e.toGallary(t)}},"To gallary"))}}]),t}(n.Component),M=a(118),S=a.n(M),z=a(119),D=a.n(z),B=a(120),V=a.n(B),G=a(121),L=a.n(G),W=a(122),A=a.n(W),J=a(123),q=a.n(J),H=a(124),P=a.n(H),U=a(125),$=a.n(U),F=a(126),K=a.n(F),N=k.a.Title,Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a.toLiftTime=a.toLiftTime.bind(Object(y.a)(Object(y.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toLiftTime",value:function(e){console.log("to"),x.push("/sbd/lifetime")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(N,{level:2,style:{color:"#595959",marginTop:"35px"}},"March 3 2019")),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(N,{level:2,style:{color:"#595959"}},"Harbour Square Park")),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(N,{level:2,style:{color:"#595959"}},"Toronto")),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:S.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:D.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:V.a,alt:""})))),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:L.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:A.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:q.a,alt:""})))),l.a.createElement(g.a,{type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:P.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:$.a,alt:""}))),l.a.createElement(h.a,{style:{paddingTop:"30px"},xs:20,sm:16,md:12,lg:6,xl:6},l.a.createElement(E.a,{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{style:{width:"100%"},src:K.a,alt:""})))),l.a.createElement(g.a,{style:{marginTop:"45px",marginBottom:"45px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(T.a,{onClick:function(t){return e.toLiftTime(t)},size:"large",type:"primary",shape:"round"},"My life time")))}}]),t}(n.Component),R=a(127),X=a.n(R),Y=k.a.Title,Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={totalTime:0,birthTime:new Date("March 11, 1993 00:00:00"),days:0,hours:0,mins:0,seconds:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=(new Date).getTime()-this.state.birthTime;this.setState({days:Math.floor(t/864e5),hours:Math.floor(t/36e5),mins:Math.floor(t/6e4),seconds:Math.floor(t/1e3)}),setInterval(function(){var t=new Date-e.state.birthTime;e.setState({days:Math.floor(t/864e5),hours:Math.floor(t/36e5),mins:Math.floor(t/6e4),seconds:Math.floor(t/1e3)})},1e3)}},{key:"render",value:function(){return l.a.createElement("div",{style:{userSelect:"none"}},l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},"\u4f60\u5df2\u5728\u8fd9\u4e2a\u4e16\u754c\u5ea6\u8fc7\u4e86\uff1a")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},this.state.days," \u5929")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},this.state.hours," \u5c0f\u65f6")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},this.state.mins," \u5206")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},this.state.seconds," \u79d2")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(h.a,{type:"flex",justify:"space-around",align:"middle",xs:20,sm:20,md:20,lg:20,xl:20},l.a.createElement("img",{style:{width:"100%"},src:X.a}))),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:3,style:{color:"#595959"}},"By Combo")),l.a.createElement(g.a,{style:{marginTop:"30px"},type:"flex",justify:"space-around",align:"middle"},l.a.createElement(Y,{level:2,style:{color:"#595959"}},"\u5b8c \u2570\uff08\uffe3\u25bd\uffe3\uff09\u256d")))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{history:x},l.a.createElement("div",null,l.a.createElement(p.a,{path:"/sbd/",exact:!0,component:b}),l.a.createElement(p.a,{path:"/sbd/celebration",component:I}),l.a.createElement(p.a,{path:"/sbd/gallary",component:Q}),l.a.createElement(p.a,{path:"/sbd/lifetime",component:Z})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.3c082b21.chunk.js.map