(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{VtcT:function(e,t,n){"use strict";n.r(t),n.d(t,"WatchModule",function(){return f});var i=n("PCNd"),a=n("ofXK"),o=n("kkd5"),r=n("fXoL"),s=n("0IaG"),c=n("tyNb"),l=n("DFav"),b=n("+wKw"),u=n("jhN1"),d=n("bTqV"),h=n("NFeN");const m=[{path:"",component:(()=>{class e{constructor(e,t,n,i,a,o){this.dialog=e,this.router=t,this.route=n,this.animeService=i,this.darkModeService=a,this.sanitizer=o,this.url=this.sanitizer.bypassSecurityTrustResourceUrl(""),n.queryParams.subscribe(e=>{this.changeUrl(e.url)})}changeUrl(e){this.url=this.sanitizer.bypassSecurityTrustResourceUrl(e)}ngOnInit(){}back(){const e=this.animeService.lastRoute;console.log(e),this.router.navigate(e?[e]:["/"]),this.animeService.lastAnimeOpened&&this.dialog.open(o.a,{data:{anime:this.animeService.lastAnimeOpened,animeId:this.animeService.lastAnimeOpened.id},panelClass:this.darkModeService.enabled.value?"modal-dark":"modal"})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(s.b),r.Nb(c.c),r.Nb(c.a),r.Nb(l.a),r.Nb(b.a),r.Nb(u.b))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-watch"]],decls:6,vars:1,consts:[["mat-icon-button","",1,"back-button",3,"click"],[1,"screen"],[1,"frame-container"],["title","Episode","sandbox","allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation","webkitallowfullscreen","true","mozallowfullscreen","true","allowfullscreen","true",3,"src"]],template:function(e,t){1&e&&(r.Tb(0,"button",0),r.ac("click",function(){return t.back()}),r.Tb(1,"mat-icon"),r.Ac(2," chevron_left "),r.Sb(),r.Sb(),r.Tb(3,"div",1),r.Tb(4,"div",2),r.Ob(5,"iframe",3),r.Sb(),r.Sb()),2&e&&(r.Cb(5),r.jc("src",t.url,r.sc))},directives:[d.a,h.a],styles:[".screen[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;background-color:#000;display:flex;align-items:center}.back-button[_ngcontent-%COMP%]{position:fixed;color:#fff;margin:20px;transform:scale(1.75);z-index:10;transition:all .3s ease}.back-button[_ngcontent-%COMP%]:hover{background-color:rgba(29,29,29,.555)}.frame-container[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;margin:auto 0;width:100vw;overflow:hidden}.frame-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;border:none;width:100%;height:100%;max-height:100vh}@media (max-width:1000px){.back-button[_ngcontent-%COMP%]{transform:scale(1.25)}}"]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({imports:[[c.g.forChild(m)],c.g]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({imports:[[a.c,p,i.a]]}),e})()}}]);