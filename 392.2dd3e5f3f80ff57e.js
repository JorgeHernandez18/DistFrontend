"use strict";(self.webpackChunkppt_front=self.webpackChunkppt_front||[]).push([[392],{4392:(St,q,l)=>{l.r(q),l.d(q,{ProfesorLeaderModule:()=>qt});var m=l(4755),p=l(7751),C=l(8788),t=l(1902);let S=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[m.ez,p.Bz,C.g]})}return i})();var k=l(7556),_=l(9757);let N=(()=>{class i{constructor(e,o){this.authService=e,this.router=o}logout(){this.authService.logout()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(k.e),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-navbar"]],decls:7,vars:0,consts:[[1,"w-full","surface-0","m-0","p-2","px-4"],[1,"list-none","flex","justify-content-between","align-items-center"],["alt","user-image","width","40","src","../../../assets/images/profesor.png",1,"img-profile","rounded-circle"],[1,"nav-item"],["label","cerrar sesion","styleClass","py-3",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"nav",0)(1,"ul",1)(2,"li")(3,"a"),t._UZ(4,"img",2),t.qZA()(),t.TgZ(5,"li",3)(6,"p-button",4),t.NdJ("click",function(){return r.logout()}),t.qZA()()()())},dependencies:[_.zx]})}return i})();var F=l(6300);const I=function(){return["."]},J=function(){return["workplans","view"]},L=function(){return["projects","view"]};let M=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-sidebar"]],decls:19,vars:6,consts:[[1,"sidebar","list-none","h-screen","text-white","m-0","px-3","py-5"],[1,"flex","text-xl","font-semibold","mb-4","align-items-center","justify-content-center","text-white"],[1,"mb-3"],[1,"flex","px-3","py-2","hover:bg-blue-500","text-white","align-items-center","border-round","no-underline",3,"routerLink"],[1,"pi","pi-home","mr-2"],[1,"text-white"],[1,"pi","pi-file-edit","mr-2"],[1,"pi","pi-briefcase","mr-2"]],template:function(o,r){1&o&&(t.TgZ(0,"ul",0)(1,"a",1),t._uU(2," Docente "),t.qZA(),t._UZ(3,"p-divider"),t.TgZ(4,"li",2)(5,"a",3),t._UZ(6,"i",4),t.TgZ(7,"span",5),t._uU(8,"Inicio"),t.qZA()()(),t.TgZ(9,"li",2)(10,"a",3),t._UZ(11,"i",6),t.TgZ(12,"span",5),t._uU(13,"Plan de trabajo"),t.qZA()()(),t.TgZ(14,"li",2)(15,"a",3),t._UZ(16,"i",7),t.TgZ(17,"span",5),t._uU(18,"Proyectos de aula"),t.qZA()()()()),2&o&&(t.xp6(5),t.Q6J("routerLink",t.DdM(3,I)),t.xp6(5),t.Q6J("routerLink",t.DdM(4,J)),t.xp6(5),t.Q6J("routerLink",t.DdM(5,L)))},dependencies:[p.rH,F.i],styles:[".sidebar[_ngcontent-%COMP%]{width:100%!important}"]})}return i})(),O=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:6,vars:0,consts:[[1,"min-h-screen","flex","surface-ground","overflow-hidden"],[1,"min-h-screen","hidden","lg:block","absolute","left-0","top-0","lg:static","bg-gray-800",2,"width","280px"],[1,"min-h-screen","flex","flex-column","flex-auto"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-sidebar"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-navbar")(5,"router-outlet"),t.qZA()())},dependencies:[N,M,p.lC]})}return i})();var g=l(2340),v=l(3144);let U=(()=>{class i{constructor(e){this.http=e,this._apiURl=g.N.apiURL}list(){return this.http.get(`${this._apiURl}/pt/api/plantrabajo`)}create(e){return this.http.post(`${this._apiURl}/pt/api/plantrabajo`,e)}createActivity(e,o){return this.http.post(`${this._apiURl}/apt/api/actividadpt/${o}`,e)}listActivitys(e){return this.http.get(`${this._apiURl}/pt/api/actividadespt/${e}`)}eliminarActividad(e){return this.http.delete(`${this._apiURl}/apt/api/actividadpt/${e}`)}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var f=l(266);const D=function(){return{width:"300px"}};function Y(i,c){if(1&i&&(t.TgZ(0,"p-card",4)(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4," A\xf1o: "),t.TgZ(5,"strong"),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"p"),t._uU(9," Observacion: "),t.TgZ(10,"span",5),t._uU(11),t.qZA()()()),2&i){const e=c.$implicit;t.Akn(t.DdM(8,D)),t.xp6(2),t.hij("Plan de Trabajo #",e.id,""),t.xp6(4),t.Oqu(t.xi3(7,5,e.anio,"yyyy-MM-dd")),t.xp6(5),t.Oqu(e.cierre)}}const z=function(){return["..","workplans","view"]};let Q=(()=>{class i{constructor(e){this.workPlanService=e,this._workPlans=[],this.loaded=!1}ngOnInit(){this.workPlanService.list().subscribe({next:e=>{this._workPlans=e,this.loaded=!0}})}get workPlans(){return this._workPlans.filter((e,o)=>o<4)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(U))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-work-plans"]],decls:8,vars:3,consts:[[1,"flex","flex-wrap","card-container","blue-container"],["class"," flex ml-5 mb-3",3,"style",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","p-3"],[3,"routerLink"],[1,"flex","ml-5","mb-3"],[1,"text-danger"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Planes de Trabajo"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,Y,12,9,"p-card",1),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",2)(6,"p-button",3),t._uU(7," Mostrar planes de trabajo "),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",r.workPlans),t.xp6(3),t.Q6J("routerLink",t.DdM(2,z)))},dependencies:[m.sg,p.rH,_.zx,f.Z,m.uU]})}return i})(),j=(()=>{class i{constructor(e){this.http=e,this._apiURl=g.N.apiURL}create(e){return this.http.post(`${this._apiURl}/pa/api/proyectoaula`,e,{headers:{Authorization:[localStorage.getItem("session")]}})}list(){return this.http.get(`${this._apiURl}/pa/api/proyectoaula`)}grades(){return this.http.get(`${this._apiURl}/grado/api/grado`)}createActivity(e,o){return this.http.post(`${this._apiURl}/apa/api/actividadpa/${o}`,e,{headers:{Authorization:[localStorage.getItem("session")]}})}listActivities(e){return this.http.get(`${this._apiURl}/pa/api/actividadespa/${e}`)}eliminarActividad(e){return this.http.delete(`${this._apiURl}/apa/api/actividadpa/${e}`,{headers:{Authorization:[localStorage.getItem("session")]}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const R=function(){return{width:"300px"}};function V(i,c){if(1&i&&(t.TgZ(0,"p-card",4)(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p")(4,"strong"),t._uU(5,"Inicio: "),t.qZA(),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"p")(9,"strong"),t._uU(10,"Fin: "),t.qZA(),t._uU(11),t.ALo(12,"date"),t.qZA()()),2&i){const e=c.$implicit;t.Akn(t.DdM(9,R)),t.xp6(2),t.Oqu(e.nombre),t.xp6(4),t.hij(" ",t.lcZ(7,5,e.fecha_inicio),""),t.xp6(5),t.hij(" ",t.lcZ(12,7,e.fecha_fin)," ")}}const $=function(){return["..","projects","view"]};let G=(()=>{class i{constructor(e){this.aulaProjectsService=e,this._aulaProjects=[],this.loaded=!1}ngOnInit(){this.aulaProjectsService.list().subscribe({next:e=>{this._aulaProjects=e,this.loaded=!0}})}get aulaProjects(){return this._aulaProjects.filter((e,o)=>o<4)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(j))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-aula-projects"]],decls:7,vars:3,consts:[[1,"flex","flex-wrap","card-container","blue-container"],["class"," flex ml-5 mb-3",3,"style",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","p-3"],[3,"routerLink"],[1,"flex","ml-5","mb-3"]],template:function(o,r){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Proyectos de Aula"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,V,13,10,"p-card",1),t.qZA(),t.TgZ(4,"div",2)(5,"p-button",3),t._uU(6," Mostrar proyectos de aula "),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("ngForOf",r.aulaProjects),t.xp6(2),t.Q6J("routerLink",t.DdM(2,$)))},dependencies:[m.sg,p.rH,_.zx,f.Z,m.uU]})}return i})(),W=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-plmain"]],decls:4,vars:0,consts:[[1,"p-4"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-work-plans")(2,"br")(3,"app-aula-projects"),t.qZA())},dependencies:[Q,G]})}return i})();var a=l(5030);let b=(()=>{class i{constructor(e,o){this.http=e,this.router=o,this._apiURl=g.N.apiURL}listTransversalAxis(){return this.http.get(`${this._apiURl}/eje/api/eje`)}listTransversalAxisTypes(){return this.http.get(`${this._apiURl}/tipo_eje/api/tipo_eje`)}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN),t.LFG(p.F0))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var P=l(3648),Z=l(387),A=l(9125),x=l(1188),T=l(7205),y=l(9744),w=l(1919),d=l(7137);function E(i,c){1&i&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2," Id "),t._UZ(3,"p-sortIcon",20),t.qZA(),t.TgZ(4,"th",21),t._uU(5," A\xf1o "),t._UZ(6,"p-sortIcon",22),t.qZA(),t.TgZ(7,"th",23),t._uU(8," Eje Transversal "),t._UZ(9,"p-sortIcon",24),t.qZA(),t.TgZ(10,"th",25),t._uU(11," Observaciones "),t._UZ(12,"p-sortIcon",26),t.qZA(),t._UZ(13,"th"),t.qZA())}const H=function(i){return["../activity",i]};function X(i,c){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"a",27),t._uU(12,"Agregar actividades"),t.qZA()()()),2&i){const e=c.$implicit,o=t.oxw();let r;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(t.xi3(5,5,e.anio,"yyyy")),t.xp6(3),t.Oqu(null==(r=o.getTransversalAxi(e.id_eje_transversal))?null:r.nombre),t.xp6(2),t.Oqu(e.cierre),t.xp6(2),t.Q6J("routerLink",t.VKq(8,H,e.id))}}function B(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",28),t._uU(2,"No activities projects found."),t.qZA()())}const K=function(){return[10,25,50]},tt=function(){return{"min-width":"50rem"}},et=function(){return["id","nombre"]};let it=(()=>{class i{constructor(e,o,r,n){this.fb=e,this.workPlanService=o,this.axixService=r,this.toastr=n,this.showDialog=!1,this._workplans=[],this._transversalAxis=[]}ngOnInit(){this._form=this.fb.group({anio:[2023],id_eje_transversal:[1],cierre:[""]}),this.workPlanService.list().subscribe({next:e=>{this._workplans=e}}),this.axixService.listTransversalAxis().subscribe({next:e=>this._transversalAxis=e,error:e=>console.log(e)})}getTransversalAxi(e){return this.transversalAxis.find(o=>o.id==e)}get workplans(){return this._workplans}get form(){return this._form}get transversalAxis(){return this._transversalAxis}createWorkPlan(){this.workPlanService.create({anio:this._form.controls.anio.value,id_eje_transversal:this._form.controls.id_eje_transversal.value,cierre:this._form.controls.cierre.value}).subscribe({next:()=>{this._form.reset(),this.workPlanService.list().subscribe({next:o=>{this._workplans=o}}),this.toastr.success("Plan de trabajo creado con exito!")}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(U),t.Y36(b),t.Y36(P._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-list-work-plans"]],decls:20,vars:16,consts:[[1,"m-5"],["styleClass","m-4"],[1,"flex","justify-content-between","mb-3"],["styleClass","py-2","icon","pi pi-plus","label","Agregar",3,"click"],["header","Agregar Plan de trabajo","styleClass","w-6",3,"visible","modal","draggable","resizable","visibleChange"],[1,"p-5",3,"formGroup","ngSubmit"],["placeholder","A\xf1o","styleClass","w-full mb-4","formControlName","anio","view","year","dateFormat","yy","inputId","yearpicker"],["rows","5","pInputTextarea","","placeholder","Leccion aprendida","formControlName","cierre",1,"w-full","mb-4"],["placeholder","Eje transversal","styleClass","w-full mb-4","appendTo","body","formControlName","id_eje_transversal","optionValue","id","optionLabel","nombre",3,"options"],["styleClass","w-full mt-4","type","submit","label","Agregar"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",1,"",3,"input"],["inputSearch",""],["styleClass","p-datatable-sm",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","tableStyle","globalFilterFields"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pSortableColumn","id"],["field","id"],["pSortableColumn","anio"],["field","anio"],["pSortableColumn","id_eje_transversal"],["field","id_eje_transversal"],["pSortableColumn","cierre"],["field","cierre"],[3,"routerLink"],["colspan","4",1,"text-center","p-4"]],template:function(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Planes de trabajo"),t.qZA(),t.TgZ(2,"p-card",1)(3,"div",2)(4,"p-button",3),t.NdJ("click",function(){return r.showDialog=!0}),t.qZA(),t.TgZ(5,"p-dialog",4),t.NdJ("visibleChange",function(u){return r.showDialog=u}),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return r.createWorkPlan()}),t._UZ(7,"p-calendar",6)(8,"textarea",7)(9,"p-dropdown",8)(10,"p-button",9),t.qZA()(),t.TgZ(11,"span",10),t._UZ(12,"i",11),t.TgZ(13,"input",12,13),t.NdJ("input",function(){t.CHM(n);const u=t.MAs(14),h=t.MAs(16);return t.KtG(h.filterGlobal(u.value,"contains"))}),t.qZA()()(),t.TgZ(15,"p-table",14,15),t.YNc(17,E,14,0,"ng-template",16),t.YNc(18,X,13,10,"ng-template",17),t.YNc(19,B,3,0,"ng-template",18),t.qZA()()}2&o&&(t.xp6(5),t.Q6J("visible",r.showDialog)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(3),t.Q6J("options",r.transversalAxis),t.xp6(6),t.Q6J("value",r.workplans)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(13,K))("tableStyle",t.DdM(14,tt))("globalFilterFields",t.DdM(15,et)))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,p.rH,Z.jx,_.zx,f.Z,A.f,x.V,T.Lt,y.o,w.g,d.iA,d.lQ,d.fz,m.uU]})}return i})();function ot(i,c){1&i&&(t.TgZ(0,"tr")(1,"th",23),t._uU(2," Nombre "),t._UZ(3,"p-sortIcon",24),t.qZA(),t.TgZ(4,"th",25),t._uU(5," Fecha de Inicio "),t._UZ(6,"p-sortIcon",26),t.qZA(),t.TgZ(7,"th",27),t._uU(8," Fecha Fin "),t._UZ(9,"p-sortIcon",28),t.qZA(),t.TgZ(10,"th",29),t._uU(11," Cumplimiento "),t._UZ(12,"p-sortIcon",30),t.qZA(),t.TgZ(13,"th",31),t._uU(14," Acciones "),t._UZ(15,"p-sortIcon",32),t.qZA()())}function rt(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",33),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.eliminarActividad(n.id))}),t.qZA()()()}if(2&i){const e=c.$implicit;t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(t.xi3(5,4,e.fecha_inicio,"dd/MM/yyyy")),t.xp6(3),t.Oqu(t.xi3(8,7,e.fecha_fin,"dd/MM/yyyy")),t.xp6(3),t.Oqu(1===e.cumplimiento?"S\xed":"No")}}function at(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",34),t._uU(2,"No activities projects found."),t.qZA()())}const nt=function(){return[10,25,50]},st=function(){return{"min-width":"50rem"}},lt=function(){return["id","nombre"]},ct=function(){return["/pl/workplans/view"]};let pt=(()=>{class i{constructor(e,o,r,n,s){this.fb=e,this.workPlanService=o,this.toastr=r,this.axisService=n,this.activatedRoute=s,this.showDialog=!1,this.cumplimientoOptions=[{label:"S\xed",value:1},{label:"No",value:0}],this._form=this.fb.group({nombre:["",[a.kI.required]],fecha_inicio:["",[a.kI.required]],fecha_fin:["",[a.kI.required]],docente_apoyo:[1,[a.kI.required]],cumplimiento:["",[a.kI.required]],observacion:["",a.kI.required]}),this._activities=[],this._transversalAxis=[]}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{this.workplan=Number(e.get("id"))??1,this.workPlanService.listActivitys(this.workplan).subscribe({next:o=>{this._activities=o}})}),this.axisService.listTransversalAxis().subscribe({next:e=>{this._transversalAxis=e}})}get transversalAxis(){return this._transversalAxis}get form(){return this._form}get activities(){return this._activities}createActivity(){this.workPlanService.createActivity({nombre:this._form.controls.nombre.value,fecha_inicio:this._form.controls.fecha_inicio.value,fecha_fin:this._form.controls.fecha_fin.value,docente_apoyo:this._form.controls.docente_apoyo.value,cumplimiento:this._form.controls.cumplimiento.value,observacion:this._form.controls.observacion.value},this.workplan).subscribe({next:()=>{this._form.reset(),this.toastr.success("Actividad creada con exito!")}})}eliminarActividad(e){confirm("\xbfEst\xe1s seguro de que deseas eliminar esta actividad?")&&this.workPlanService.eliminarActividad(e).subscribe({next:()=>{this.toastr.success("Actividad eliminada con \xe9xito!"),this.actualizarListaDeActividades()},error:o=>{console.error("Error al eliminar la actividad:",o),this.toastr.error("Error al eliminar la actividad.")}})}actualizarListaDeActividades(){this.workPlanService.listActivitys(this.workplan).subscribe({next:e=>{this._activities=e}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(U),t.Y36(P._W),t.Y36(b),t.Y36(p.gz))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-activities"]],decls:24,vars:18,consts:[[1,"m-5"],["styleClass","m-4"],[1,"flex","justify-content-between","mb-3"],["styleClass","py-2","icon","pi pi-plus","label","Agregar",3,"click"],["header","Agregar Actividad","styleClass","w-6",3,"visible","modal","draggable","resizable","visibleChange"],[1,"p-5",3,"formGroup","ngSubmit"],["type","text","pInputText","","formControlName","nombre","placeholder","Nombre",1,"w-full","mb-4"],[1,"flex","justify-content-between","mb-4","flex-column","lg:flex-row"],["styleClass","w-full","placeholder","fecha de Inicio","appendTo","body","formControlName","fecha_inicio"],["styleClass","w-full","placeholder","fecha de Fin","appendTo","body","formControlName","fecha_fin"],["formControlName","cumplimiento","placeholder","Seleccionar Cumplimiento",1,"w-full","mb-4",3,"options"],["rows","5","pInputTextarea","","placeholder","observacion","formControlName","observacion",1,"w-full","mb-4"],["styleClass","w-full mt-4","type","submit","label","Agregar"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",1,"",3,"input"],["inputSearch",""],["styleClass","p-datatable-sm",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","tableStyle","globalFilterFields"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["label","Volver a plan de trabajo",3,"routerLink"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","fecha_inicio"],["field","fecha_inicio"],["pSortableColumn","fecha_fin"],["field","fecha_fin"],["pSortableColumn","cumplimiento"],["field","cumplimiento"],["pSortableColumn","acciones"],["field","acciones"],["pButton","","icon","pi pi-trash",3,"click"],["colspan","4",1,"text-center","p-4"]],template:function(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Crear actividades para el plan del trabajo"),t.qZA(),t.TgZ(2,"p-card",1)(3,"div",2)(4,"p-button",3),t.NdJ("click",function(){return r.showDialog=!0}),t.qZA(),t.TgZ(5,"p-dialog",4),t.NdJ("visibleChange",function(u){return r.showDialog=u}),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return r.createActivity()}),t._UZ(7,"input",6),t.TgZ(8,"div",7),t._UZ(9,"p-calendar",8)(10,"p-calendar",9),t.qZA(),t._UZ(11,"p-dropdown",10)(12,"textarea",11)(13,"p-button",12),t.qZA()(),t.TgZ(14,"span",13),t._UZ(15,"i",14),t.TgZ(16,"input",15,16),t.NdJ("input",function(){t.CHM(n);const u=t.MAs(17),h=t.MAs(19);return t.KtG(h.filterGlobal(u.value,"contains"))}),t.qZA()()(),t.TgZ(18,"p-table",17,18),t.YNc(20,ot,16,0,"ng-template",19),t.YNc(21,rt,13,10,"ng-template",20),t.YNc(22,at,3,0,"ng-template",21),t.qZA(),t._UZ(23,"p-button",22),t.qZA()}2&o&&(t.xp6(5),t.Q6J("visible",r.showDialog)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("options",r.cumplimientoOptions),t.xp6(7),t.Q6J("value",r.activities)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(14,nt))("tableStyle",t.DdM(15,st))("globalFilterFields",t.DdM(16,lt)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,ct)))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,p.rH,Z.jx,_.Hq,_.zx,f.Z,A.f,x.V,T.Lt,y.o,w.g,d.iA,d.lQ,d.fz,m.uU],encapsulation:2})}return i})();function ut(i,c){1&i&&(t.TgZ(0,"tr")(1,"th",24),t._uU(2," Id "),t._UZ(3,"p-sortIcon",25),t.qZA(),t.TgZ(4,"th",26),t._uU(5," Nombre "),t._UZ(6,"p-sortIcon",27),t.qZA(),t.TgZ(7,"th",28),t._uU(8," Eje Transversal "),t._UZ(9,"p-sortIcon",29),t.qZA(),t.TgZ(10,"th",30),t._uU(11," Fecha de Inicio "),t._UZ(12,"p-sortIcon",31),t.qZA(),t.TgZ(13,"th",32),t._uU(14," Fecha Fin "),t._UZ(15,"p-sortIcon",33),t.qZA(),t.TgZ(16,"th",34),t._uU(17," Grado "),t._UZ(18,"p-sortIcon",35),t.qZA(),t.TgZ(19,"th",36),t._uU(20," Actividades "),t._UZ(21,"p-sortIcon",37),t.qZA()())}const dt=function(i){return["../activity",i]};function mt(i,c){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"a",38),t._uU(17,"Agregar actividades"),t.qZA()()()),2&i){const e=c.$implicit,o=t.oxw();let r,n;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(null==(r=o.getAxis(e.id_eje_transversal))?null:r.nombre),t.xp6(2),t.Oqu(t.lcZ(9,7,e.fecha_inicio)),t.xp6(3),t.Oqu(t.lcZ(12,9,e.fecha_fin)),t.xp6(3),t.Oqu(null==(n=o.getGrade(e.grado))?null:n.descripcion),t.xp6(2),t.Q6J("routerLink",t.VKq(11,dt,e.id))}}function _t(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",39),t._uU(2,"No aula projects found."),t.qZA()())}const ht=function(){return[10,25,50]},ft=function(){return{"min-width":"50rem"}},gt=function(){return["id","nombre"]};let vt=(()=>{class i{constructor(e,o,r,n){this.fb=e,this.axixService=o,this.aulaProjectsService=r,this.toastr=n,this.showDialog=!1,this._form=e.group({nombre:[""],id_eje_transversal:[1],tipo_eje:[0],fecha_inicio:[""],fecha_fin:[""],docente_lider:[1],grado:[1],cierre:[""]}),this._transversalAxis=[],this._axisTypes=[],this._grades=[],this._aulaProjects=[]}ngOnInit(){this.axixService.listTransversalAxis().subscribe({next:e=>this._transversalAxis=e}),this.axixService.listTransversalAxisTypes().subscribe({next:e=>this._axisTypes=e}),this.aulaProjectsService.grades().subscribe({next:e=>this._grades=e}),this.aulaProjectsService.list().subscribe({next:e=>this._aulaProjects=e})}get form(){return this._form}get transversalAxis(){return this._transversalAxis}get axisTypes(){return this._axisTypes.filter(e=>e.id_eje_transversal==this._form.controls.id_eje_transversal.value)}get grades(){return this._grades}get aulaProjects(){return this._aulaProjects}getAxis(e){return this.transversalAxis.filter(o=>o.id==e).shift()}getGrade(e){return this.grades.filter(o=>o.id==e).shift()}createAulaProject(){const e={nombre:this._form.controls.nombre.value,id_eje_transversal:this._form.controls.id_eje_transversal.value,tipo_eje:this._form.controls.tipo_eje.value,fecha_inicio:this._form.controls.fecha_inicio.value,fecha_fin:this._form.controls.fecha_fin.value,docente_lider:this._form.controls.docente_lider.value,grado:this._form.controls.grado.value,cierre:this._form.controls.cierre.value};this.aulaProjectsService.create(e).subscribe({next:()=>{console.log(e),this.aulaProjectsService.list().subscribe({next:o=>{this._aulaProjects=o}}),this.toastr.success("Proyecto de aula creado con exito!")}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(b),t.Y36(j),t.Y36(P._W))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-aula-project-view"]],decls:25,vars:18,consts:[[1,"m-5"],["styleClass","m-4"],[1,"flex","justify-content-between","mb-3"],["styleClass","py-2","icon","pi pi-plus","label","Agregar",3,"click"],["header","Agregar Proyecto de Aula","styleClass","w-6",3,"visible","modal","draggable","resizable","visibleChange"],[1,"p-5",3,"formGroup","ngSubmit"],["type","text","pInputText","","formControlName","nombre","placeholder","Nombre",1,"w-full","mb-4"],["placeholder","Eje transversal","styleClass","w-full mb-4","appendTo","body","formControlName","id_eje_transversal","optionValue","id","optionLabel","nombre",3,"options"],["placeholder","Tipo de eje","styleClass","w-full mb-4","appendTo","body","formControlName","tipo_eje","optionValue","id","optionLabel","descripcion",3,"options"],[1,"flex","justify-content-between","mb-4","flex-column","lg:flex-row"],["styleClass","w-full","placeholder","fecha de Inicio","appendTo","body","formControlName","fecha_inicio"],["styleClass","w-full","placeholder","fecha de Fin","appendTo","body","formControlName","fecha_fin"],["placeholder","grados","styleClass","w-full mb-4","appendTo","body","formControlName","grado","optionValue","id","optionLabel","descripcion",3,"options"],["rows","5","pInputTextarea","","placeholder","cierre","formControlName","cierre",1,"w-full","mb-5"],["styleClass","w-full","type","submit","label","Agregar"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",1,"",3,"input"],["inputSearch",""],["styleClass","p-datatable-sm",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","tableStyle","globalFilterFields"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pSortableColumn","id"],["field","id"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","id_eje_transversal"],["field","id_eje_transversal"],["pSortableColumn","fecha_inicio"],["field","fecha_inicio"],["pSortableColumn","fecha_fin"],["field","fecha_fin"],["pSortableColumn","descripcion"],["field","descripcion"],["pSortableColumn","actividades"],["field","actividades"],[3,"routerLink"],["colspan","6",1,"text-center","p-4"]],template:function(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Proyectos de Aula"),t.qZA(),t.TgZ(2,"p-card",1)(3,"div",2)(4,"p-button",3),t.NdJ("click",function(){return r.showDialog=!0}),t.qZA(),t.TgZ(5,"p-dialog",4),t.NdJ("visibleChange",function(u){return r.showDialog=u}),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return r.createAulaProject()}),t._UZ(7,"input",6)(8,"p-dropdown",7)(9,"p-dropdown",8),t.TgZ(10,"div",9),t._UZ(11,"p-calendar",10)(12,"p-calendar",11),t.qZA(),t._UZ(13,"p-dropdown",12)(14,"textarea",13)(15,"p-button",14),t.qZA()(),t.TgZ(16,"span",15),t._UZ(17,"i",16),t.TgZ(18,"input",17,18),t.NdJ("input",function(){t.CHM(n);const u=t.MAs(19),h=t.MAs(21);return t.KtG(h.filterGlobal(u.value,"contains"))}),t.qZA()()(),t.TgZ(20,"p-table",19,20),t.YNc(22,ut,22,0,"ng-template",21),t.YNc(23,mt,18,13,"ng-template",22),t.YNc(24,_t,3,0,"ng-template",23),t.qZA()()}2&o&&(t.xp6(5),t.Q6J("visible",r.showDialog)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(2),t.Q6J("options",r.transversalAxis),t.xp6(1),t.Q6J("options",r.axisTypes),t.xp6(4),t.Q6J("options",r.grades),t.xp6(7),t.Q6J("value",r.aulaProjects)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(15,ht))("tableStyle",t.DdM(16,ft))("globalFilterFields",t.DdM(17,gt)))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,p.rH,a.sg,a.u,Z.jx,_.zx,f.Z,A.f,x.V,T.Lt,y.o,w.g,d.iA,d.lQ,d.fz,m.uU],styles:[".container-fluid[_ngcontent-%COMP%]{height:798px;overflow-y:scroll}"]})}return i})(),bt=(()=>{class i{constructor(e){this.http=e,this._apiUrl=g.N.apiURL}list(e){return this.http.get(`${this._apiUrl}/estudiante/api/estudiante`,{params:{q:e}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Zt(i,c){1&i&&(t.TgZ(0,"tr")(1,"th",23),t._uU(2," Nombre "),t._UZ(3,"p-sortIcon",24),t.qZA(),t.TgZ(4,"th",25),t._uU(5," Fecha de Inicio "),t._UZ(6,"p-sortIcon",26),t.qZA(),t.TgZ(7,"th",27),t._uU(8," Fecha Fin "),t._UZ(9,"p-sortIcon",28),t.qZA(),t.TgZ(10,"th",29),t._uU(11," Cumplimiento "),t._UZ(12,"p-sortIcon",30),t.qZA(),t.TgZ(13,"th",31),t._uU(14," Acciones "),t._UZ(15,"p-sortIcon",32),t.qZA()())}function At(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",33),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.eliminarActividad(n.id))}),t.qZA()()()}if(2&i){const e=c.$implicit;t.xp6(2),t.Oqu(e.nombre),t.xp6(2),t.Oqu(t.lcZ(5,4,e.fecha_inicio)),t.xp6(3),t.Oqu(t.lcZ(8,6,e.fecha_fin)),t.xp6(3),t.Oqu(1===e.cumplimiento?"S\xed":"No")}}function xt(i,c){1&i&&(t.TgZ(0,"tr")(1,"td",34),t._uU(2,"No activities projects found."),t.qZA()())}const Tt=function(){return[10,25,50]},yt=function(){return{"min-width":"50rem"}},wt=function(){return["id","nombre"]},Ct=function(){return["/pl/projects/view"]},Ut=[{path:"",children:[{path:"dashboard",component:W},{path:"workplans/view",component:it},{path:"workplans/activity/:id",component:pt},{path:"projects/view",component:vt},{path:"projects/activity/:id",component:(()=>{class i{constructor(e,o,r,n,s){this.fb=e,this.aulaProjectService=o,this.axisService=r,this.studentsService=n,this.activatedRoute=s,this.showDialog=!1,this.aulaProject=1,this.cumplimientoOptions=[{label:"S\xed",value:1},{label:"No",value:0}],this._form=this.fb.group({nombre:["",[a.kI.required]],fecha_inicio:["",[a.kI.required]],fecha_fin:["",[a.kI.required]],docente_apoyo:[1,[a.kI.required]],cumplimiento:["",[a.kI.required]],observacion:["",[a.kI.required]]}),this._axisTypes=[],this._activities=[],this.selectedStudents=[],this._students=[]}ngOnInit(){this.axisService.listTransversalAxisTypes().subscribe({next:e=>this._axisTypes=e}),this.activatedRoute.paramMap.subscribe(e=>{this.aulaProject=Number(e.get("id"))??1,this.aulaProjectService.listActivities(this.aulaProject).subscribe({next:o=>{this._activities=o}})})}filterStudents(e){const o=Number(e.query);this.studentsService.list(o).subscribe({next:r=>{this._students=r}})}get form(){return this._form}get axisTypes(){return this._axisTypes}get activities(){return this._activities}get students(){return this._students}createActivity(){if(!this.form.valid)return;const o={actividadPA:{nombre:this._form.controls.nombre.value,fecha_inicio:this._form.controls.fecha_inicio.value,fecha_fin:this._form.controls.fecha_fin.value,cumplimiento:this._form.controls.cumplimiento.value,observacion:this._form.controls.observacion.value},estudiantes:this.selectedStudents.map(r=>r.codigo)};this.aulaProjectService.createActivity(o,this.aulaProject).subscribe({next:()=>{this._form.reset()}})}eliminarActividad(e){confirm("\xbfEst\xe1s seguro de que deseas eliminar esta actividad?")&&this.aulaProjectService.eliminarActividad(e).subscribe({next:()=>{this.actualizarListaDeActividades()},error:o=>{console.error("Error al eliminar la actividad:",o)}})}actualizarListaDeActividades(){this.aulaProjectService.listActivities(this.aulaProject).subscribe({next:e=>{this._activities=e}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(a.qu),t.Y36(j),t.Y36(b),t.Y36(bt),t.Y36(p.gz))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-activities"]],decls:24,vars:18,consts:[[1,"m-5"],["styleClass","m-4"],[1,"flex","justify-content-between","mb-3"],["styleClass","py-2","icon","pi pi-plus","label","Agregar",3,"click"],["header","Agregar Actividad","styleClass","w-6",3,"visible","modal","draggable","resizable","visibleChange"],[1,"p-5",3,"formGroup","ngSubmit"],["type","text","pInputText","","formControlName","nombre","placeholder","Nombre",1,"w-full","mb-4"],[1,"flex","justify-content-between","mb-4","flex-column","lg:flex-row"],["styleClass","w-full","placeholder","fecha de Inicio","appendTo","body","formControlName","fecha_inicio"],["styleClass","w-full","placeholder","fecha de Fin","appendTo","body","formControlName","fecha_fin"],["formControlName","cumplimiento","placeholder","Seleccionar Cumplimiento",1,"w-full","mb-4",3,"options"],["rows","5","pInputTextarea","","placeholder","observacion","formControlName","observacion",1,"w-full","mb-4"],["styleClass","w-full mt-4","type","submit","label","Agregar"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",1,"",3,"input"],["inputSearch",""],["styleClass","p-datatable-sm",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions","tableStyle","globalFilterFields"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["label","Volver a proyectos de aula",3,"routerLink"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","fecha_inicio"],["field","fecha_inicio"],["pSortableColumn","fecha_fin"],["field","fecha_fin"],["pSortableColumn","cumplimiento"],["field","cumplimiento"],["pSortableColumn","acciones"],["field","acciones"],["pButton","","icon","pi pi-trash",3,"click"],["colspan","4",1,"text-center","p-4"]],template:function(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Crear actividades del proyecto de aula"),t.qZA(),t.TgZ(2,"p-card",1)(3,"div",2)(4,"p-button",3),t.NdJ("click",function(){return r.showDialog=!0}),t.qZA(),t.TgZ(5,"p-dialog",4),t.NdJ("visibleChange",function(u){return r.showDialog=u}),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return r.createActivity()}),t._UZ(7,"input",6),t.TgZ(8,"div",7),t._UZ(9,"p-calendar",8)(10,"p-calendar",9),t.qZA(),t._UZ(11,"p-dropdown",10)(12,"textarea",11)(13,"p-button",12),t.qZA()(),t.TgZ(14,"span",13),t._UZ(15,"i",14),t.TgZ(16,"input",15,16),t.NdJ("input",function(){t.CHM(n);const u=t.MAs(17),h=t.MAs(19);return t.KtG(h.filterGlobal(u.value,"contains"))}),t.qZA()()(),t.TgZ(18,"p-table",17,18),t.YNc(20,Zt,16,0,"ng-template",19),t.YNc(21,At,13,8,"ng-template",20),t.YNc(22,xt,3,0,"ng-template",21),t.qZA(),t._UZ(23,"p-button",22),t.qZA()}2&o&&(t.xp6(5),t.Q6J("visible",r.showDialog)("modal",!0)("draggable",!1)("resizable",!1),t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("options",r.cumplimientoOptions),t.xp6(7),t.Q6J("value",r.activities)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(14,Tt))("tableStyle",t.DdM(15,yt))("globalFilterFields",t.DdM(16,wt)),t.xp6(5),t.Q6J("routerLink",t.DdM(17,Ct)))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,p.rH,a.sg,a.u,Z.jx,_.Hq,_.zx,f.Z,A.f,x.V,T.Lt,y.o,w.g,d.iA,d.lQ,d.fz,m.uU],styles:["ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{list-style:none}"]})}return i})()},{path:"**",redirectTo:"dashboard"}],component:O}];let jt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(Ut),p.Bz]})}return i})(),Pt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[m.ez,a.UX,p.Bz,C.g]})}return i})(),qt=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[m.ez,a.u5,S,jt,Pt,a.UX,C.g]})}return i})()}}]);