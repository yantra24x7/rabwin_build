(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{B0QU:function(t,i,n){"use strict";n.d(i,"a",(function(){return l})),n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return a})),n("mrSG");var s=n("8Y7J"),o=n("PqYM");class e{constructor(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!1}}let l=class{constructor(t,i,n){this.elRef=i,this.document=n,this.onClick=new s.m,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new s.m,this._viewportChangedSubscriber=null,this.options=new e,this.defaultOptions=new e,this._lastPercent=0,this._gradientUUID=null,this.render=()=>{this.applyOptions(),this.options.lazy?(null===this.svgElement&&this.draw(this._lastPercent),this.isInViewport&&(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)):(this.options.animation&&this.options.animationDuration>0?this.animate(this._lastPercent,this.options.percent):this.draw(this.options.percent),this._lastPercent=this.options.percent)},this.polarToCartesian=(t,i,n,s)=>{let o=s*Math.PI/180;return{x:t+Math.sin(o)*n,y:i-Math.cos(o)*n}},this.draw=t=>{let i=(t=void 0===t?this.options.percent:Math.abs(t))>100?100:t,n=2*this.options.radius+2*this.options.outerStrokeWidth;this.options.showBackground&&(n+=2*this.options.backgroundStrokeWidth+this.max(0,2*this.options.backgroundPadding));let s,o,e={x:n/2,y:n/2},l=e.x,r=e.y-this.options.radius,a=this.polarToCartesian(e.x,e.y,this.options.radius,360*(this.options.clockwise?i:100-i)/100);100===i&&(a.x=a.x+(this.options.clockwise?-.01:.01)),[s,o]=i>50?this.options.clockwise?[1,1]:[1,0]:this.options.clockwise?[0,1]:[0,0];let h=this.options.animateTitle?t:this.options.percent,u=h>this.options.maxPercent?this.options.maxPercent.toFixed(this.options.toFixed)+"+":h.toFixed(this.options.toFixed),c=this.options.animateSubtitle?t:this.options.percent,b={x:e.x,y:e.y,textAnchor:"middle",color:this.options.titleColor,fontSize:this.options.titleFontSize,fontWeight:this.options.titleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.titleFormat&&"Function"===this.options.titleFormat.constructor.name){let t=this.options.titleFormat(h);t instanceof Array?b.texts=[...t]:b.texts.push(t.toString())}else"auto"===this.options.title?b.texts.push(u):this.options.title instanceof Array?b.texts=[...this.options.title]:b.texts.push(this.options.title.toString());let p={x:e.x,y:e.y,textAnchor:"middle",color:this.options.subtitleColor,fontSize:this.options.subtitleFontSize,fontWeight:this.options.subtitleFontWeight,texts:[],tspans:[]};if(void 0!==this.options.subtitleFormat&&"Function"===this.options.subtitleFormat.constructor.name){let t=this.options.subtitleFormat(c);t instanceof Array?p.texts=[...t]:p.texts.push(t.toString())}else this.options.subtitle instanceof Array?p.texts=[...this.options.subtitle]:p.texts.push(this.options.subtitle.toString());let d={text:""+this.options.units,fontSize:this.options.unitsFontSize,fontWeight:this.options.unitsFontWeight,color:this.options.unitsColor},m=0,g=1;if(this.options.showTitle&&(m+=b.texts.length),this.options.showSubtitle&&(m+=p.texts.length),this.options.showTitle)for(let D of b.texts)b.tspans.push({span:D,dy:this.getRelativeY(g,m)}),g++;if(this.options.showSubtitle)for(let D of p.texts)p.tspans.push({span:D,dy:this.getRelativeY(g,m)}),g++;null===this._gradientUUID&&(this._gradientUUID=this.uuid()),this.svg={viewBox:`0 0 ${n} ${n}`,width:this.options.responsive?"100%":n,height:this.options.responsive?"100%":n,backgroundCircle:{cx:e.x,cy:e.y,r:this.options.radius+this.options.outerStrokeWidth/2+this.options.backgroundPadding,fill:this.options.backgroundColor,fillOpacity:this.options.backgroundOpacity,stroke:this.options.backgroundStroke,strokeWidth:this.options.backgroundStrokeWidth},path:{d:`M ${l} ${r}\n        A ${this.options.radius} ${this.options.radius} 0 ${s} ${o} ${a.x} ${a.y}`,stroke:this.options.outerStrokeColor,strokeWidth:this.options.outerStrokeWidth,strokeLinecap:this.options.outerStrokeLinecap,fill:"none"},circle:{cx:e.x,cy:e.y,r:this.options.radius-this.options.space-this.options.outerStrokeWidth/2-this.options.innerStrokeWidth/2,fill:"none",stroke:this.options.innerStrokeColor,strokeWidth:this.options.innerStrokeWidth},title:b,units:d,subtitle:p,image:{x:e.x-this.options.imageWidth/2,y:e.y-this.options.imageHeight/2,src:this.options.imageSrc,width:this.options.imageWidth,height:this.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+this._gradientUUID,colorStop1:this.options.outerStrokeColor,colorStop2:"transparent"===this.options.outerStrokeGradientStopColor?"#FFF":this.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+this._gradientUUID,colorStop1:this.options.backgroundColor,colorStop2:"transparent"===this.options.backgroundGradientStopColor?"#FFF":this.options.backgroundGradientStopColor}}},this.getAnimationParameters=(t,i)=>{let n,s,o,e=this.options.startFromZero||t<0?0:t,l=i<0?0:this.min(i,this.options.maxPercent),r=Math.abs(Math.round(l-e));return r>=100?(n=100,s=this.options.animateTitle||this.options.animateSubtitle?Math.round(r/n):1):(n=r,s=1),o=Math.round(this.options.animationDuration/n),o<10&&(o=10,n=this.options.animationDuration/o,s=!this.options.animateTitle&&!this.options.animateSubtitle&&r>100?Math.round(100/n):Math.round(r/n)),s<1&&(s=1),{times:n,step:s,interval:o}},this.animate=(t,i)=>{this._timerSubscription&&!this._timerSubscription.closed&&this._timerSubscription.unsubscribe();let n=this.options.startFromZero?0:t,s=i,{step:e,interval:l}=this.getAnimationParameters(n,s),r=n;this._timerSubscription=n<s?Object(o.a)(0,l).subscribe(()=>{r+=e,r<=s?!this.options.animateTitle&&!this.options.animateSubtitle&&r>=100?(this.draw(s),this._timerSubscription.unsubscribe()):this.draw(r):(this.draw(s),this._timerSubscription.unsubscribe())}):Object(o.a)(0,l).subscribe(()=>{r-=e,r>=s?!this.options.animateTitle&&!this.options.animateSubtitle&&s>=100?(this.draw(s),this._timerSubscription.unsubscribe()):this.draw(r):(this.draw(s),this._timerSubscription.unsubscribe())})},this.emitClickEvent=t=>{this.options.renderOnClick&&this.animate(0,this.options.percent),this.onClick.emit(t)},this.applyOptions=()=>{for(let t of Object.keys(this.options))this.hasOwnProperty(t)&&void 0!==this[t]?this.options[t]=this[t]:this.templateOptions&&void 0!==this.templateOptions[t]&&(this.options[t]=this.templateOptions[t]);this.options.radius=Math.abs(+this.options.radius),this.options.space=+this.options.space,this.options.percent=+this.options.percent>0?+this.options.percent:0,this.options.maxPercent=Math.abs(+this.options.maxPercent),this.options.animationDuration=Math.abs(this.options.animationDuration),this.options.outerStrokeWidth=Math.abs(+this.options.outerStrokeWidth),this.options.innerStrokeWidth=Math.abs(+this.options.innerStrokeWidth),this.options.backgroundPadding=+this.options.backgroundPadding},this.getRelativeY=(t,i)=>(1*(t-i/2)-.18).toFixed(2)+"em",this.min=(t,i)=>t<i?t:i,this.max=(t,i)=>t>i?t:i,this.uuid=()=>{var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(i){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==i?n:3&n|8).toString(16)}))},this.findSvgElement=function(){if(null===this.svgElement){let t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=()=>{this.findSvgElement();let t=this.isInViewport;this.isInViewport=this.isElementInViewport(this.svgElement),t!==this.isInViewport&&this.onViewportChanged.emit({oldValue:t,newValue:this.isInViewport})},this.onScroll=t=>{this.checkViewport()},this.loadEventsForLazyMode=()=>{if(this.options.lazy){this.document.addEventListener("scroll",this.onScroll,!0),this.window.addEventListener("resize",this.onScroll,!0),null===this._viewportChangedSubscriber&&(this._viewportChangedSubscriber=this.onViewportChanged.subscribe(({newValue:t})=>{t&&this.render()}));let t=Object(o.a)(0,50).subscribe(()=>{null===this.svgElement?this.checkViewport():t.unsubscribe()})}},this.unloadEventsForLazyMode=()=>{this.document.removeEventListener("scroll",this.onScroll,!0),this.window.removeEventListener("resize",this.onScroll,!0),null!==this._viewportChangedSubscriber&&(this._viewportChangedSubscriber.unsubscribe(),this._viewportChangedSubscriber=null)},this.document=n,this.window=this.document.defaultView,Object.assign(this.options,t),Object.assign(this.defaultOptions,t)}isDrawing(){return this._timerSubscription&&!this._timerSubscription.closed}isElementInViewport(t){if(null==t)return!1;let i,n=t.getBoundingClientRect(),s=t.parentNode;do{if(i=s.getBoundingClientRect(),n.top>=i.bottom)return!1;if(n.bottom<=i.top)return!1;if(n.left>=i.right)return!1;if(n.right<=i.left)return!1;s=s.parentNode}while(s!=this.document.body);return!(n.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||n.bottom<=0||n.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||n.right<=0)}ngOnInit(){this.loadEventsForLazyMode()}ngOnDestroy(){this.unloadEventsForLazyMode()}ngOnChanges(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())}};var r;let a=r=class{static forRoot(t={}){return{ngModule:r,providers:[{provide:e,useValue:t}]}}}},SiWv:function(t,i,n){"use strict";n.r(i);var s=n("8Y7J");class o{constructor(t,i,n){this.service=t,this.nav=i,this.router=n,this.myLoader=!1,this.nav.hide()}ngOnInit(){localStorage.clear(),this.myLoader=!0,this.service.machine_lmw().subscribe(t=>{this.myLoader=!1,this.machine_list=t})}oee(t,i){localStorage.setItem("machine_id",i),localStorage.setItem("machine_name",t),this.router.navigate(["/oee_dashboard"],{queryParams:{machine_name:t}})}}class e{}var l=n("pMnS"),r=n("NcP4"),a=n("xYTU"),h=n("t68o"),u=n("zbXB"),c=n("9AJC"),b=n("fo5T"),p=n("XePT"),d=n("SVse"),m=n("IheW");let g=(()=>{class t{constructor(t){this.http=t}machine_lmw(){return this.http.get("tab_machine_list")}}return t.ngInjectableDef=s.Tb({factory:function(){return new t(s.Ub(m.c))},token:t,providedIn:"root"}),t})();var D=n("cXjN"),S=n("iInd"),x=s.rb({encapsulation:0,styles:[[""]],data:{}});function k(t){return s.Pb(0,[(t()(),s.tb(0,0,null,null,2,"div",[["class","machine_prod running"]],null,[[null,"click"]],(function(t,i,n){var s=!0;return"click"===i&&(s=!1!==t.component.oee(null==t.context.$implicit?null:t.context.$implicit.machine_name,null==t.context.$implicit||null==t.context.$implicit.id?null:t.context.$implicit.id.$oid)&&s),s}),null,null)),(t()(),s.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),s.Nb(2,null,["",""]))],null,(function(t,i){t(i,2,0,null==i.context.$implicit?null:i.context.$implicit.machine_name)}))}function w(t){return s.Pb(0,[(t()(),s.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(t()(),s.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function f(t){return s.Pb(0,[(t()(),s.tb(0,0,null,null,12,"section",[["class","tablet_page"]],null,null,null,null,null)),(t()(),s.tb(1,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(t()(),s.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(t()(),s.Nb(-1,null,["Machine list"])),(t()(),s.tb(4,0,null,null,4,"div",[["class","page"]],null,null,null,null,null)),(t()(),s.tb(5,0,null,null,3,"div",[["class","section_top_padding"]],null,null,null,null,null)),(t()(),s.tb(6,0,null,null,2,"div",[["class","machine_Container machine_lmw_page"]],null,null,null,null,null)),(t()(),s.ib(16777216,null,null,1,null,k)),s.sb(8,278528,null,0,d.m,[s.O,s.L,s.r],{ngForOf:[0,"ngForOf"]},null),(t()(),s.tb(9,0,null,null,1,"footer",[["class","footer_align"]],null,null,null,null,null)),(t()(),s.tb(10,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null)),(t()(),s.ib(16777216,null,null,1,null,w)),s.sb(12,16384,null,0,d.n,[s.O,s.L],{ngIf:[0,"ngIf"]},null)],(function(t,i){var n=i.component;t(i,8,0,n.machine_list),t(i,12,0,n.myLoader)}),null)}function v(t){return s.Pb(0,[(t()(),s.tb(0,0,null,null,1,"app-machine-lmw",[],null,null,null,f,x)),s.sb(1,114688,null,0,o,[g,D.a,S.l],null,null)],(function(t,i){t(i,1,0)}),null)}var y=s.pb("app-machine-lmw",o,v,{},{},[]),F=n("s7LF"),C=n("QQfA"),_=n("IP0z"),W=n("gavF"),P=n("POq0"),M=n("Xd0L"),O=n("/Co4"),z=n("JjoW"),E=n("cUpR"),I=n("/HVE"),L=n("qJ5m"),V=n("Mz6y"),j=n("5GAg"),U=n("DkaU"),A=n("s6ns"),T=n("821u"),$=n("OIZN"),G=n("G0yt"),B=n("KMir"),q=n("Wc//"),J=n("Fwaw"),Z=n("zMNK"),R=n("hOhj"),H=n("Gi4r"),N=n("oapL"),Y=n("HsOI"),Q=n("ZwOa"),X=n("igqZ"),K=n("02hT"),tt=n("Q+lL"),it=n("pBi1"),nt=n("lT8R"),st=n("BV1i"),ot=n("elxJ"),et=n("5Bek"),lt=n("c9fC"),rt=n("FVPZ"),at=n("qJ50"),ht=n("AaDx"),ut=n("mkRZ"),ct=n("dFDH"),bt=n("rWV4"),pt=n("zQui"),dt=n("8rEH"),mt=n("r0V8"),gt=n("10VE"),Dt=n("BzsH"),St=n("cw5Z"),xt=n("hfXE"),kt=n("ECJv"),wt=n("EApP"),ft=n("1Q6g"),vt=n("B0QU");n.d(i,"MachineLmwModuleNgFactory",(function(){return yt}));var yt=s.qb(e,[],(function(t){return s.Cb([s.Db(512,s.j,s.bb,[[8,[l.a,r.a,a.a,a.b,h.a,u.b,u.a,c.a,c.b,c.h,c.i,c.e,c.f,c.g,b.a,p.a,y]],[3,s.j],s.w]),s.Db(4608,d.p,d.o,[s.t,[2,d.L]]),s.Db(4608,F.D,F.D,[]),s.Db(4608,F.g,F.g,[]),s.Db(4608,C.c,C.c,[C.i,C.e,s.j,C.h,C.f,s.q,s.y,d.d,_.b,[2,d.j]]),s.Db(5120,C.j,C.k,[C.c]),s.Db(5120,W.a,W.d,[C.c]),s.Db(4608,P.c,P.c,[]),s.Db(4608,M.b,M.b,[]),s.Db(5120,O.a,O.b,[C.c]),s.Db(5120,z.a,z.b,[C.c]),s.Db(4608,E.e,M.c,[[2,M.g],[2,M.l]]),s.Db(4608,M.a,M.w,[[2,M.f],I.a]),s.Db(5120,L.b,L.a,[[3,L.b]]),s.Db(5120,V.b,V.c,[C.c]),s.Db(135680,j.h,j.h,[s.y,I.a]),s.Db(4608,U.e,U.e,[s.L]),s.Db(5120,A.c,A.d,[C.c]),s.Db(135680,A.e,A.e,[C.c,s.q,[2,d.j],[2,A.b],A.c,[3,A.e],C.e]),s.Db(4608,T.i,T.i,[]),s.Db(5120,T.a,T.b,[C.c]),s.Db(5120,$.c,$.a,[[3,$.c]]),s.Db(4608,G.v,G.v,[s.j,s.q,G.jb,G.w]),s.Db(4608,B.i,B.j,[]),s.Db(5120,B.h,B.k,[B.i,s.A]),s.Db(4608,B.t,B.t,[E.d]),s.Db(4608,B.m,B.n,[]),s.Db(5120,B.l,B.o,[B.m,s.A]),s.Db(4608,B.f,B.f,[s.l]),s.Db(4608,q.a,q.a,[]),s.Db(1073742336,S.p,S.p,[[2,S.u],[2,S.l]]),s.Db(1073742336,d.c,d.c,[]),s.Db(1073742336,F.C,F.C,[]),s.Db(1073742336,F.m,F.m,[]),s.Db(1073742336,F.z,F.z,[]),s.Db(1073742336,_.a,_.a,[]),s.Db(1073742336,M.l,M.l,[[2,M.d],[2,E.f]]),s.Db(1073742336,I.b,I.b,[]),s.Db(1073742336,M.v,M.v,[]),s.Db(1073742336,J.c,J.c,[]),s.Db(1073742336,Z.g,Z.g,[]),s.Db(1073742336,R.c,R.c,[]),s.Db(1073742336,C.g,C.g,[]),s.Db(1073742336,W.c,W.c,[]),s.Db(1073742336,W.b,W.b,[]),s.Db(1073742336,H.c,H.c,[]),s.Db(1073742336,N.c,N.c,[]),s.Db(1073742336,P.d,P.d,[]),s.Db(1073742336,Y.e,Y.e,[]),s.Db(1073742336,Q.c,Q.c,[]),s.Db(1073742336,X.e,X.e,[]),s.Db(1073742336,M.m,M.m,[]),s.Db(1073742336,M.t,M.t,[]),s.Db(1073742336,K.a,K.a,[]),s.Db(1073742336,tt.a,tt.a,[]),s.Db(1073742336,M.q,M.q,[]),s.Db(1073742336,O.c,O.c,[]),s.Db(1073742336,z.d,z.d,[]),s.Db(1073742336,it.b,it.b,[]),s.Db(1073742336,it.a,it.a,[]),s.Db(1073742336,nt.a,nt.a,[]),s.Db(1073742336,st.a,st.a,[]),s.Db(1073742336,M.x,M.x,[]),s.Db(1073742336,M.n,M.n,[]),s.Db(1073742336,ot.a,ot.a,[]),s.Db(1073742336,et.c,et.c,[]),s.Db(1073742336,lt.a,lt.a,[]),s.Db(1073742336,rt.a,rt.a,[]),s.Db(1073742336,at.e,at.e,[]),s.Db(1073742336,L.c,L.c,[]),s.Db(1073742336,j.a,j.a,[]),s.Db(1073742336,V.e,V.e,[]),s.Db(1073742336,U.c,U.c,[]),s.Db(1073742336,ht.a,ht.a,[]),s.Db(1073742336,ut.a,ut.a,[]),s.Db(1073742336,ct.d,ct.d,[]),s.Db(1073742336,bt.j,bt.j,[]),s.Db(1073742336,A.k,A.k,[]),s.Db(1073742336,pt.p,pt.p,[]),s.Db(1073742336,dt.m,dt.m,[]),s.Db(1073742336,T.j,T.j,[]),s.Db(1073742336,mt.d,mt.d,[]),s.Db(1073742336,mt.c,mt.c,[]),s.Db(1073742336,gt.i,gt.i,[]),s.Db(1073742336,Dt.b,Dt.b,[]),s.Db(1073742336,$.d,$.d,[]),s.Db(1073742336,G.c,G.c,[]),s.Db(1073742336,G.f,G.f,[]),s.Db(1073742336,G.g,G.g,[]),s.Db(1073742336,G.k,G.k,[]),s.Db(1073742336,G.l,G.l,[]),s.Db(1073742336,G.r,G.r,[]),s.Db(1073742336,G.t,G.t,[]),s.Db(1073742336,G.x,G.x,[]),s.Db(1073742336,G.z,G.z,[]),s.Db(1073742336,G.D,G.D,[]),s.Db(1073742336,G.G,G.G,[]),s.Db(1073742336,G.J,G.J,[]),s.Db(1073742336,G.M,G.M,[]),s.Db(1073742336,G.P,G.P,[]),s.Db(1073742336,G.U,G.U,[]),s.Db(1073742336,G.X,G.X,[]),s.Db(1073742336,G.Y,G.Y,[]),s.Db(1073742336,G.Z,G.Z,[]),s.Db(1073742336,G.y,G.y,[]),s.Db(1073742336,St.h,St.h,[]),s.Db(1073742336,xt.b,xt.b,[]),s.Db(1073742336,kt.b,kt.b,[]),s.Db(1073742336,B.b,B.b,[]),s.Db(1073742336,wt.i,wt.i,[]),s.Db(1073742336,ft.a,ft.a,[]),s.Db(1073742336,vt.c,vt.c,[]),s.Db(1073742336,e,e,[]),s.Db(256,M.e,M.i,[]),s.Db(256,St.p,"en-US",[]),s.Db(256,wt.b,{default:wt.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),s.Db(1024,S.j,(function(){return[[{path:"",component:o}]]}),[]),s.Db(256,vt.b,{backgroundColor:"#212226",backgroundOpacity:1,backgroundStroke:"#212226",backgroundStrokeWidth:18,backgroundPadding:0,radius:36,space:-17,titleFontSize:"40",titleFontWeight:"800",titleColor:"#ffffff",toFixed:0,maxPercent:100,outerStrokeWidth:17,innerStrokeWidth:17,showSubtitle:!1,showUnits:!1},[])])}))}}]);