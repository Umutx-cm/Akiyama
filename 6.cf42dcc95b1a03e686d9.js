(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"42UT":function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",function(){return B});var i=n("PCNd"),s=n("ofXK"),a=n("sJtc"),o=n("kkd5"),c=n("fXoL"),r=n("DFav"),l=n("0IaG"),d=n("+wKw"),h=n("qFsG"),b=n("NFeN"),m=n("cfTy"),u=n("Xa2L");function g(e,t){if(1&e){const e=c.Ub();c.Tb(0,"anime-item-list",8),c.ac("click",function(){c.sc(e);const n=t.$implicit;return c.ec(2).changeToDetail(n)}),c.Sb()}2&e&&c.jc("anime",t.$implicit)}function p(e,t){if(1&e&&(c.Tb(0,"div",6),c.zc(1,g,1,1,"anime-item-list",7),c.Sb()),2&e){const e=c.ec();c.Cb(1),c.jc("ngForOf",e.results)}}function f(e,t){1&e&&(c.Tb(0,"div",9),c.Ob(1,"mat-spinner",10),c.Sb()),2&e&&(c.Cb(1),c.jc("diameter",40))}let S=(()=>{class e{constructor(e,t,n){this.animeService=e,this.dialog=t,this.darkModeService=n,this.Status=a.b,this.currentStatus=a.b.loading,this.results=[]}ngOnInit(){0==this.animeService.animes.length&&(this.currentStatus=a.b.empty),this.animeService.animeObserver.asObservable().subscribe(e=>{this.results=e,this.currentStatus=a.b.loaded})}search(e){this.currentStatus=a.b.loading,this.animeService.search(e).subscribe(e=>{this.results=e,this.currentStatus=a.b.loaded})}changeToDetail(e){this.dialog.open(o.a,{data:{anime:e},panelClass:this.darkModeService.enabled?"modal-dark":"modal"})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(r.a),c.Nb(l.b),c.Nb(d.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-search"]],decls:10,vars:3,consts:[[1,"container",3,"ngSwitch"],[1,"search"],["placeholder","Search","matInput","",3,"keydown.enter"],["input",""],["class","search-results",4,"ngSwitchCase"],["class","loading",4,"ngSwitchCase"],[1,"search-results"],[3,"anime","click",4,"ngFor","ngForOf"],[3,"anime","click"],[1,"loading"],[3,"diameter"]],template:function(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",0),c.Tb(1,"h1"),c.Bc(2,"Search"),c.Sb(),c.Tb(3,"div",1),c.Tb(4,"input",2,3),c.ac("keydown.enter",function(){c.sc(e);const n=c.pc(5);return t.search(n.value)}),c.Sb(),c.Tb(6,"mat-icon"),c.Bc(7,"search"),c.Sb(),c.Sb(),c.zc(8,p,2,1,"div",4),c.zc(9,f,2,1,"div",5),c.Sb()}2&e&&(c.jc("ngSwitch",t.currentStatus),c.Cb(8),c.jc("ngSwitchCase",t.Status.loaded),c.Cb(1),c.jc("ngSwitchCase",t.Status.loading))},directives:[s.m,h.b,b.a,s.n,s.j,m.a,u.b],styles:[".search[_ngcontent-%COMP%]{background-color:var(--background);border-radius:13px;height:50px;width:30%;box-shadow:0 6px 11px 0 rgba(0,0,0,.34);display:flex;align-items:center}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:initial;border:none;font-size:16px;width:100%;padding:0 15px;outline:none}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--secondary-text-color)}.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:20px}@media (max-width:1000px){.search[_ngcontent-%COMP%]{width:100%}}.loading[_ngcontent-%COMP%]{width:100%;height:50vh;display:flex;align-items:center;justify-content:center}.search-results[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-wrap:wrap;justify-content:space-between}.search-results[_ngcontent-%COMP%]   anime-item-list[_ngcontent-%COMP%]{width:45%}@media (max-width:1000px){.search-results[_ngcontent-%COMP%]   anime-item-list[_ngcontent-%COMP%]{width:100%}}"]}),e})();var v=n("tyNb"),C=n("KIY9"),w=n("2ChS"),O=n("FKr1");let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["anime-item"]],inputs:{anime:"anime",episode:"episode"},decls:4,vars:2,consts:[["mat-ripple","",1,"anime"],[3,"src"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Ob(1,"img",1),c.Tb(2,"p"),c.Bc(3),c.Sb(),c.Sb()),2&e&&(c.Cb(1),c.kc("src","data:image/png;base64,",t.anime?t.anime.poster:t.episode.poster,"",c.uc),c.Cb(2),c.Cc(t.anime?t.anime.title:t.episode.title))},directives:[O.q],styles:['.anime[_ngcontent-%COMP%]{position:relative;border-radius:10px;width:180px;cursor:pointer;height:240px;transition:filter .3s ease}.anime[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.anime[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;top:0;width:100%;height:100%;background:hsla(0,0%,100%,0);background:linear-gradient(180deg,hsla(0,0%,100%,0),rgba(0,0,0,.733))}.anime[_ngcontent-%COMP%]:hover{filter:brightness(.65)}.anime[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{z-index:50;color:#fff;font-size:18px;font-weight:300!important;margin:10px;bottom:0;max-width:90%;left:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;position:absolute}@media (max-width:1000px){.anime[_ngcontent-%COMP%]{width:130px;height:190px}}']}),e})();var M=n("UyyX");const x=function(e){return{"fix-margin":e}};function I(e,t){if(1&e){const e=c.Ub();c.Tb(0,"anime-item",12),c.ac("click",function(){c.sc(e);const n=t.$implicit;return c.ec(3).changeToDetail(n)}),c.Sb()}if(2&e){const e=t.$implicit,n=t.index,i=c.ec(3);c.jc("anime",e)("ngClass",c.mc(2,x,n==i.info.animeList.length-1))}}function _(e,t){if(1&e&&(c.Rb(0),c.zc(1,I,1,4,"anime-item",11),c.Qb()),2&e){const e=c.ec(2);c.Cb(1),c.jc("ngForOf",e.info.animeList)}}function P(e,t){if(1&e){const e=c.Ub();c.Tb(0,"anime-item",14),c.ac("click",function(){c.sc(e);const n=t.$implicit;return c.ec(3).openEpisodeServersBottomSheet(n)}),c.Sb()}if(2&e){const e=t.$implicit,n=t.index,i=c.ec(3);c.jc("episode",e)("ngClass",c.mc(2,x,n==i.info.animeList.length-1))}}function k(e,t){if(1&e&&(c.Rb(0),c.zc(1,P,1,4,"anime-item",13),c.Qb()),2&e){const e=c.ec(2);c.Cb(1),c.jc("ngForOf",e.info.episodeList)}}function T(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",5),c.Tb(1,"div",6),c.ac("click",function(){c.sc(e);const t=c.pc(8);return c.ec().scrollLeft(t)}),c.Tb(2,"mat-icon"),c.Bc(3,"chevron_left"),c.Sb(),c.Sb(),c.Tb(4,"div",7),c.ac("click",function(){c.sc(e);const t=c.pc(8);return c.ec().scrollRight(t)}),c.Tb(5,"mat-icon"),c.Bc(6,"chevron_right"),c.Sb(),c.Sb(),c.Tb(7,"div",8,9),c.zc(9,_,2,1,"ng-container",10),c.zc(10,k,2,1,"ng-container",10),c.Sb(),c.Sb()}if(2&e){const e=c.ec();c.Cb(9),c.jc("ngIf",e.info.type==e.Type.Anime),c.Cb(1),c.jc("ngIf",e.info.type==e.Type.Episode)}}function j(e,t){1&e&&(c.Tb(0,"div",15),c.Ob(1,"mat-spinner",16),c.Sb()),2&e&&(c.Cb(1),c.jc("diameter",40))}function L(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div",15),c.Tb(1,"error",17),c.ac("click",function(){return c.sc(e),c.ec().retryClicked()}),c.Sb(),c.Sb()}}let z=(()=>{class e{constructor(e,t,n,i){this.router=e,this.bottomSheet=t,this.dialog=n,this.darkModeService=i,this.title="",this.retry=new c.o,this.Status=a.b,this.Type=a.c}ngOnInit(){}changeToDetail(e){this.dialog.open(o.a,{data:{anime:e},panelClass:this.darkModeService.enabled.value?"modal-dark":"modal"})}retryClicked(){this.retry.emit()}openEpisodeServersBottomSheet(e){const t=this.bottomSheet.open(C.a,{panelClass:this.darkModeService.enabled.value?"bottomSheet-dark":"",data:{episode:e}});t.instance.serverSelected.subscribe(e=>t.dismiss())}scrollLeft(e){e.scrollLeft-=e.clientWidth-150}scrollRight(e){e.scrollLeft+=e.clientWidth-150}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(v.c),c.Nb(w.b),c.Nb(l.b),c.Nb(d.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["anime-layout"]],inputs:{info:"info",title:"title"},outputs:{retry:"retry"},decls:8,vars:5,consts:[[1,"layout"],[1,"container"],[3,"ngSwitch"],["class","animes-container",4,"ngSwitchCase"],["class","info",4,"ngSwitchCase"],[1,"animes-container"],[1,"arrow-container","left",3,"click"],[1,"arrow-container","right",3,"click"],[1,"scroll-container"],["animes",""],[4,"ngIf"],[3,"anime","ngClass","click",4,"ngFor","ngForOf"],[3,"anime","ngClass","click"],[3,"episode","ngClass","click",4,"ngFor","ngForOf"],[3,"episode","ngClass","click"],[1,"info"],[3,"diameter"],[3,"click"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"h2"),c.Bc(3),c.Sb(),c.Sb(),c.Rb(4,2),c.zc(5,T,11,2,"div",3),c.zc(6,j,2,1,"div",4),c.zc(7,L,2,0,"div",4),c.Qb(),c.Sb()),2&e&&(c.Cb(3),c.Cc(t.title),c.Cb(1),c.jc("ngSwitch",t.info.currentStatus),c.Cb(1),c.jc("ngSwitchCase",t.Status.loaded),c.Cb(1),c.jc("ngSwitchCase",t.Status.loading),c.Cb(1),c.jc("ngSwitchCase",t.Status.error))},directives:[s.m,s.n,b.a,s.k,s.j,y,s.i,u.b,M.a],styles:[".layout[_ngcontent-%COMP%]{margin:30px 0}.animes-container[_ngcontent-%COMP%]{position:relative}.scroll-container[_ngcontent-%COMP%]{width:100%;position:relative;display:flex;overflow-x:auto;scroll-behavior:smooth}anime-item[_ngcontent-%COMP%]{padding:0 20px}.info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:200px}.left[_ngcontent-%COMP%]{background:#fff;background:linear-gradient(270deg,hsla(0,0%,100%,0),rgba(0,0,0,.6530987395))}.right[_ngcontent-%COMP%]{right:0;background:#fff;background:linear-gradient(90deg,hsla(0,0%,100%,0),rgba(0,0,0,.6530987395))}.arrow-container[_ngcontent-%COMP%]{position:absolute;height:100%;top:50%;transform:translateY(-50%);opacity:0;padding:0 10px;z-index:10;justify-self:center;cursor:pointer;display:flex;align-items:center;transition:opacity .3s ease}.arrow-container[_ngcontent-%COMP%]:hover{opacity:1}.arrow-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transform:scale(2)}@media (max-width:1000px){.arrow-container[_ngcontent-%COMP%]{padding:5px}.arrow-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transform:scale(1.25)}}"]}),e})();const F=[{path:"",component:(()=>{class e{constructor(e,t){this.animeService=e,this.router=t,this.animeInfo=new a.a,this.episodesInfo=new a.a(a.c.Episode),this.specialsInfo=new a.a,this.ovasInfo=new a.a,this.moviesInfo=new a.a}ngOnDestroy(){}ngOnInit(){this.getAnimes(),this.getEpisodes(),this.getMovies(),this.getSpecials(),this.getOvas()}getAnimes(){if(0!=this.animeService.animes.length)return this.animeInfo.animeList=this.animeService.animes,void(this.animeInfo.currentStatus=a.b.loaded);this.animeInfo.currentStatus=a.b.loading,this.animeService.fetchAnimes().subscribe(e=>{this.animeInfo.animeList=e,this.animeService.animes=e,this.animeInfo.currentStatus=a.b.loaded},()=>{this.animeInfo.currentStatus=a.b.error})}getMovies(){if(0!=this.animeService.movies.length)return this.moviesInfo.animeList=this.animeService.movies,void(this.moviesInfo.currentStatus=a.b.loaded);this.moviesInfo.currentStatus=a.b.loading,this.animeService.fetchMovies().subscribe(e=>{this.moviesInfo.animeList=e,this.animeService.movies=e,this.moviesInfo.currentStatus=a.b.loaded},()=>{this.moviesInfo.currentStatus=a.b.error})}getEpisodes(){if(0!=this.animeService.episodes.length)return this.episodesInfo.episodeList=this.animeService.episodes,void(this.episodesInfo.currentStatus=a.b.loaded);this.episodesInfo.currentStatus=a.b.loading,this.animeService.fetchEpisodes().subscribe(e=>{this.episodesInfo.episodeList=e,this.animeService.episodes=e,this.episodesInfo.currentStatus=a.b.loaded},()=>{this.episodesInfo.currentStatus=a.b.error})}getSpecials(){if(0!=this.animeService.specials.length)return this.specialsInfo.animeList=this.animeService.specials,void(this.specialsInfo.currentStatus=a.b.loaded);this.specialsInfo.currentStatus=a.b.loading,this.animeService.fetchSpecials().subscribe(e=>{this.specialsInfo.animeList=e,this.animeService.specials=e,this.specialsInfo.currentStatus=a.b.loaded},()=>{this.specialsInfo.currentStatus=a.b.error})}getOvas(){if(0!=this.animeService.ovas.length)return this.ovasInfo.animeList=this.animeService.ovas,void(this.ovasInfo.currentStatus=a.b.loaded);this.ovasInfo.currentStatus=a.b.loading,this.animeService.fetchOvas().subscribe(e=>{this.ovasInfo.animeList=e,this.animeService.ovas=e,this.ovasInfo.currentStatus=a.b.loaded},()=>{this.ovasInfo.currentStatus=a.b.error})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(r.a),c.Nb(v.c))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-page"]],decls:16,vars:5,consts:[[1,"container"],["routerLink","/search",1,"search"],["placeholder","Search","matInput",""],["input",""],["title","Recently added",3,"info","retry"],["title","Latest animes",3,"info","retry"],["title","Latest movies",3,"info","retry"],["title","Latest ovas",3,"info","retry"],["title","Latest specials",3,"info","retry"]],template:function(e,t){1&e&&(c.Tb(0,"div"),c.Tb(1,"div",0),c.Tb(2,"h1"),c.Bc(3,"Home"),c.Sb(),c.Tb(4,"div",1),c.Tb(5,"span",2,3),c.Bc(7,"Search"),c.Sb(),c.Tb(8,"mat-icon"),c.Bc(9,"search"),c.Sb(),c.Sb(),c.Sb(),c.Rb(10),c.Tb(11,"anime-layout",4),c.ac("retry",function(){return t.getEpisodes()}),c.Sb(),c.Tb(12,"anime-layout",5),c.ac("retry",function(){return t.getAnimes()}),c.Sb(),c.Tb(13,"anime-layout",6),c.ac("retry",function(){return t.getMovies()}),c.Sb(),c.Tb(14,"anime-layout",7),c.ac("retry",function(){return t.getOvas()}),c.Sb(),c.Tb(15,"anime-layout",8),c.ac("retry",function(){return t.getSpecials()}),c.Sb(),c.Qb(),c.Sb()),2&e&&(c.Cb(11),c.jc("info",t.episodesInfo),c.Cb(1),c.jc("info",t.animeInfo),c.Cb(1),c.jc("info",t.moviesInfo),c.Cb(1),c.jc("info",t.ovasInfo),c.Cb(1),c.jc("info",t.specialsInfo))},directives:[v.d,b.a,z],styles:[".search[_ngcontent-%COMP%]{background-color:var(--background);border-radius:13px;height:50px;width:30%;cursor:pointer;box-shadow:0 6px 11px 0 rgba(0,0,0,.34);display:flex;align-items:center}.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:initial;border:none;font-size:16px;width:100%;padding:0 15px;outline:none}.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--secondary-text-color)}.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:20px}@media (max-width:1000px){.search[_ngcontent-%COMP%]{width:100%}}"]}),e})()},{path:"search",component:S}];let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[v.g.forChild(F)],v.g]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[s.c,N,i.a]]}),e})()}}]);