(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{g1aE:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{constructor(n,l,t){this.route=n,this.service=l,this.fb=t,this.myLoader=!1,localStorage.getItem("machine_name"),this.newmachine=localStorage.getItem("machine"),this.myLoader=!0,this.machine=this.route.snapshot.queryParamMap.get("machine_name"),this.machine?(this.myLoader=!1,localStorage.setItem("machine_name",this.machine),this.myLoader=!0,this.service.live(this.machine).subscribe(n=>{this.myLoader=!1,this.liveoee=n})):this.service.live(this.newmachine).subscribe(n=>{this.myLoader=!1,this.liveoee=n})}ngOnInit(){this.machine_class=localStorage.getItem("machine"),this.reason=localStorage.getItem("reason"),localStorage.getItem("machine_name"),this.login=this.fb.group({shift_num:[""],date:[""]}),this.myLoader=!0,this.service.getmachines().subscribe(n=>{this.machine_response=n,this.myLoader=!1,this.login.patchValue({machine_name:this.machine_response[0]}),this.service.getshift().subscribe(n=>{this.shift_response=n})})}select_shift(n){this.login.value.shift_num=n}logintest(n){this.myLoader=!0;let l={machine:localStorage.getItem("machine_name"),shift_num:this.login.value.shift_num,date:this.login.value.date};this.myLoader=!0,this.service.overall_report(l).subscribe(n=>{this.myLoader=!1,this.get_report=n,this.reportList=!0})}}class o{}var a=t("pMnS"),i=t("NcP4"),r=t("xYTU"),c=t("t68o"),b=t("zbXB"),s=t("9AJC"),g=t("fo5T"),_=t("XePT"),p=t("ITXy"),d=t("B0QU"),m=t("SVse"),h=t("bujt"),f=t("iInd"),P=t("Fwaw"),C=t("5GAg"),O=t("omvX"),M=t("s7LF"),D=t("Mr+X"),v=t("Gi4r"),x=t("IheW");let w=(()=>{class n{constructor(n){this.http=n}live(n){return console.log(n),this.http.get("live_oee_tab?machine="+n)}getmachines(){return this.http.get("tab_machine_list")}getshift(){return this.http.get("tab_shift_list")}overall_report(n){return this.http.get("oee_past_dashboard?machine="+n.machine+"&&shift_num="+n.shift_num+"&&date="+n.date)}}return n.ngInjectableDef=e.Tb({factory:function(){return new n(e.Ub(x.c))},token:n,providedIn:"root"}),n})();var k=e.rb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{color:#fff}.page[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]{padding:10px 0}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{background:#2c2f34;padding:12px 20px;display:flex;justify-content:space-between}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;margin:0;color:#fff}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;margin:0;padding:0 15px;color:#a8a8a8}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child, .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{border-right:1px solid #707070}.mat-fab.mat-primary[_ngcontent-%COMP%], .mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]{background-image:linear-gradient(#f69320,#7b4a10);color:#fff!important}.machine_detail_Page[_ngcontent-%COMP%]{padding:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-left:10px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   button.back.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{min-width:64px;padding:0;height:64px;border-radius:8px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:14px;margin-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;color:#a8a8a8}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before{display:none}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent;padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:26px;color:#fff}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   button.mat-icon-button.mat-button-base[_ngcontent-%COMP%]{padding-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   button.mat-raised-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{padding:9px 32px;margin-left:14px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#2c2f34;border:1px solid #707070;padding:0 20px;border-radius:7px;height:55px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:22px;color:#fff}.machine_prod[_ngcontent-%COMP%]{padding:12px 40px 12px 12px;display:flex;align-items:center;background:#2c2f34;border-radius:12px;margin-bottom:10px;border:4px solid #f69320}.machine_prod[_ngcontent-%COMP%]   .circle_progress_wrapper[_ngcontent-%COMP%]{text-align:center;width:49%!important;height:348px;float:left}.machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.machine_prod[_ngcontent-%COMP%]   .label_info[_ngcontent-%COMP%]{float:left;width:60%}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;margin-bottom:20px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}  .mat-form-field-underline{display:none}footer[_ngcontent-%COMP%]{background:#2c2f34;padding:9px 30px 9px 9px;position:fixed;width:100%;bottom:0;text-align:right}.footer_action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.footer_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:30px;font-size:26px}  .mat-select-placeholder{color:rgba(255,255,255,.42)}  input.mat-input-element{color:#828386;font-size:20px;font-weight:500}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#828386}input[_ngcontent-%COMP%]::-moz-placeholder{color:#828386}input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#828386}input[_ngcontent-%COMP%]::placeholder{color:#828386}"]],data:{}});function y(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Nb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.machine)}))}function F(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Nb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.machine_class)}))}function N(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,41,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,32,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,2,"div",[["class","circle_progress_wrapper"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#78542C"],["outerStrokeColor","#F69320"],["radius","65"]],null,null,null,p.b,p.a)),e.sb(4,770048,null,0,d.a,[d.b,e.k,m.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null),(n()(),e.tb(5,0,null,null,27,"div",[["class","label_info"]],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,10,"div",[["class","upper_row"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(9,null,["",""])),(n()(),e.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Actual"])),(n()(),e.tb(12,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(13,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(14,null,["",""])),(n()(),e.tb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Target"])),(n()(),e.tb(17,0,null,null,15,"div",[["class","lower_row"]],null,null,null,null,null)),(n()(),e.tb(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(19,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(20,null,["","%"])),(n()(),e.tb(21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Availability"])),(n()(),e.tb(23,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(24,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(25,null,["","%"])),(n()(),e.tb(26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Performance"])),(n()(),e.tb(28,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(29,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(30,null,["","%"])),(n()(),e.tb(31,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Quality"])),(n()(),e.tb(33,0,null,null,0,"div",[["style","clear: both;height: 1px;"]],null,null,null,null,null)),(n()(),e.tb(34,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Nb(35,null,["",""])),(n()(),e.tb(36,0,null,null,5,"div",[["class","footer_action"]],null,null,null,null,null)),(n()(),e.tb(37,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Fb(n,38).onClick()&&u),u}),h.b,h.a)),e.sb(38,16384,null,0,f.m,[f.l,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Gb(39,1),e.sb(40,180224,null,0,P.b,[e.k,C.h,[2,O.a]],{color:[0,"color"]},null),(n()(),e.Nb(-1,0,["Production List"]))],(function(n,l){var t=l.component;n(l,4,0,"65",e.xb(1,"",null==t.liveoee?null:t.liveoee.oee,""),"#F69320","#78542C","true","300");var u=n(l,39,0,"/production");n(l,38,0,u),n(l,40,0,"primary")}),(function(n,l){var t=l.component;n(l,9,0,null==t.liveoee?null:t.liveoee.actual),n(l,14,0,null==t.liveoee?null:t.liveoee.target),n(l,20,0,null==t.liveoee?null:t.liveoee.availability),n(l,25,0,null==t.liveoee?null:t.liveoee.perfomance),n(l,30,0,null==t.liveoee?null:t.liveoee.quality),n(l,35,0,t.reason),n(l,37,0,e.Fb(l,40).disabled||null,"NoopAnimations"===e.Fb(l,40)._animationMode)}))}function L(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,46,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,32,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,2,"div",[["class","circle_progress_wrapper"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#78542C"],["outerStrokeColor","#F69320"],["radius","65"]],null,null,null,p.b,p.a)),e.sb(4,770048,null,0,d.a,[d.b,e.k,m.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null),(n()(),e.tb(5,0,null,null,27,"div",[["class","label_info"]],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,10,"div",[["class","upper_row"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(9,null,["",""])),(n()(),e.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Actual"])),(n()(),e.tb(12,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(13,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(14,null,["",""])),(n()(),e.tb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Target"])),(n()(),e.tb(17,0,null,null,15,"div",[["class","lower_row"]],null,null,null,null,null)),(n()(),e.tb(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(19,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(20,null,["","%"])),(n()(),e.tb(21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Availability"])),(n()(),e.tb(23,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(24,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(25,null,["","%"])),(n()(),e.tb(26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Performance"])),(n()(),e.tb(28,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.tb(29,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Nb(30,null,["","%"])),(n()(),e.tb(31,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["Quality"])),(n()(),e.tb(33,0,null,null,0,"div",[["style","clear: both;height: 1px;"]],null,null,null,null,null)),(n()(),e.tb(34,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Nb(35,null,["",""])),(n()(),e.tb(36,0,null,null,10,"div",[["class","footer_action"]],null,null,null,null,null)),(n()(),e.tb(37,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Fb(n,38).onClick()&&u),u}),h.b,h.a)),e.sb(38,16384,null,0,f.m,[f.l,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Gb(39,1),e.sb(40,180224,null,0,P.b,[e.k,C.h,[2,O.a]],{color:[0,"color"]},null),(n()(),e.Nb(-1,0,["Reason"])),(n()(),e.tb(42,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Fb(n,43).onClick()&&u),u}),h.b,h.a)),e.sb(43,16384,null,0,f.m,[f.l,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Gb(44,1),e.sb(45,180224,null,0,P.b,[e.k,C.h,[2,O.a]],{color:[0,"color"]},null),(n()(),e.Nb(-1,0,["Production List"]))],(function(n,l){var t=l.component;n(l,4,0,"65",e.xb(1,"",null==t.get_report?null:t.get_report.oee,""),"#F69320","#78542C","true","300");var u=n(l,39,0,"/reflect");n(l,38,0,u),n(l,40,0,"primary");var o=n(l,44,0,"/production");n(l,43,0,o),n(l,45,0,"primary")}),(function(n,l){var t=l.component;n(l,9,0,null==t.get_report?null:t.get_report.actual),n(l,14,0,null==t.get_report?null:t.get_report.target),n(l,20,0,null==t.get_report?null:t.get_report.availability),n(l,25,0,null==t.get_report?null:t.get_report.perfomance),n(l,30,0,null==t.get_report?null:t.get_report.quality),n(l,35,0,t.reason),n(l,37,0,e.Fb(l,40).disabled||null,"NoopAnimations"===e.Fb(l,40)._animationMode),n(l,42,0,e.Fb(l,45).disabled||null,"NoopAnimations"===e.Fb(l,45)._animationMode)}))}function S(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function I(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,34,"section",[["class","tablet_page"]],null,null,null,null,null)),(n()(),e.tb(1,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),e.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Nb(-1,null,["OEE Dashboard"])),(n()(),e.tb(4,0,null,null,26,"div",[["class","page"]],null,null,null,null,null)),(n()(),e.tb(5,0,null,null,25,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),e.tb(6,0,null,null,24,"div",[["class","machine_detail_Page"]],null,null,null,null,null)),(n()(),e.tb(7,0,null,null,19,"div",[["class","running"]],null,null,null,null,null)),(n()(),e.tb(8,0,null,null,18,"div",[["class","header_machine"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var u=!0,o=n.component;return"submit"===l&&(u=!1!==e.Fb(n,11).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Fb(n,11).onReset()&&u),"ngSubmit"===l&&(u=!1!==o.logintest(o.login.value)&&u),u}),null,null)),e.sb(10,16384,null,0,M.G,[],null,null),e.sb(11,540672,null,0,M.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Kb(2048,null,M.d,null,[M.k]),e.sb(13,16384,null,0,M.t,[[4,M.d]],null,null),(n()(),e.tb(14,0,null,null,12,"div",[["class","rhs_wrapper"]],null,null,null,null,null)),(n()(),e.tb(15,0,null,null,7,"button",[["class","back"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Fb(n,16).onClick()&&u),u}),h.b,h.a)),e.sb(16,16384,null,0,f.m,[f.l,f.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Gb(17,1),e.sb(18,180224,null,0,P.b,[e.k,C.h,[2,O.a]],{color:[0,"color"]},null),(n()(),e.tb(19,0,null,0,3,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.tb(20,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,D.b,D.a)),e.sb(21,9158656,null,0,v.b,[e.k,v.d,[8,null],[2,v.a],[2,e.l]],null,null),(n()(),e.Nb(-1,0,["keyboard_arrow_left"])),(n()(),e.ib(16777216,null,null,1,null,y)),e.sb(24,16384,null,0,m.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,F)),e.sb(26,16384,null,0,m.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,N)),e.sb(28,16384,null,0,m.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,L)),e.sb(30,16384,null,0,m.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(31,0,null,null,1,"footer",[["class","footer_align"]],null,null,null,null,null)),(n()(),e.tb(32,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,S)),e.sb(34,16384,null,0,m.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,11,0,t.login);var e=n(l,17,0,"/Tablet");n(l,16,0,e),n(l,18,0,"primary"),n(l,21,0),n(l,24,0,t.machine),n(l,26,0,t.machine_class),n(l,28,0,t.liveoee&&!t.get_report),n(l,30,0,t.get_report),n(l,34,0,t.myLoader)}),(function(n,l){n(l,9,0,e.Fb(l,13).ngClassUntouched,e.Fb(l,13).ngClassTouched,e.Fb(l,13).ngClassPristine,e.Fb(l,13).ngClassDirty,e.Fb(l,13).ngClassValid,e.Fb(l,13).ngClassInvalid,e.Fb(l,13).ngClassPending),n(l,15,0,e.Fb(l,18).disabled||null,"NoopAnimations"===e.Fb(l,18)._animationMode),n(l,20,0,e.Fb(l,21).inline,"primary"!==e.Fb(l,21).color&&"accent"!==e.Fb(l,21).color&&"warn"!==e.Fb(l,21).color)}))}function z(n){return e.Pb(0,[(n()(),e.tb(0,0,null,null,1,"app-oee-dashboard",[],null,null,null,I,k)),e.sb(1,114688,null,0,u,[f.a,w,M.g],null,null)],(function(n,l){n(l,1,0)}),null)}var j=e.pb("app-oee-dashboard",u,z,{},{},[]),q=t("QQfA"),A=t("IP0z"),J=t("gavF"),E=t("POq0"),T=t("Xd0L"),U=t("/Co4"),G=t("JjoW"),V=t("cUpR"),X=t("/HVE"),Q=t("qJ5m"),W=t("Mz6y"),Z=t("DkaU"),B=t("s6ns"),Y=t("821u"),H=t("OIZN"),R=t("G0yt"),K=t("Wc//"),$=t("zMNK"),nn=t("hOhj"),ln=t("oapL"),tn=t("HsOI"),en=t("ZwOa"),un=t("igqZ"),on=t("02hT"),an=t("Q+lL"),rn=t("pBi1"),cn=t("lT8R"),bn=t("BV1i"),sn=t("elxJ"),gn=t("5Bek"),_n=t("c9fC"),pn=t("FVPZ"),dn=t("qJ50"),mn=t("AaDx"),hn=t("mkRZ"),fn=t("dFDH"),Pn=t("rWV4"),Cn=t("zQui"),On=t("8rEH"),Mn=t("r0V8"),Dn=t("10VE"),vn=t("BzsH"),xn=t("cw5Z"),wn=t("hfXE"),kn=t("ECJv"),yn=t("EApP"),Fn=t("1Q6g"),Nn=t("JUyF");t.d(l,"OeeDashboardModuleNgFactory",(function(){return Ln}));var Ln=e.qb(o,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,i.a,r.a,r.b,c.a,b.b,b.a,s.a,s.b,s.h,s.i,s.e,s.f,s.g,g.a,_.a,j]],[3,e.j],e.w]),e.Db(4608,m.o,m.n,[e.t,[2,m.K]]),e.Db(4608,M.D,M.D,[]),e.Db(4608,M.g,M.g,[]),e.Db(4608,q.c,q.c,[q.i,q.e,e.j,q.h,q.f,e.q,e.y,m.d,A.b,[2,m.i]]),e.Db(5120,q.j,q.k,[q.c]),e.Db(5120,J.a,J.d,[q.c]),e.Db(4608,E.c,E.c,[]),e.Db(4608,T.b,T.b,[]),e.Db(5120,U.a,U.b,[q.c]),e.Db(5120,G.a,G.b,[q.c]),e.Db(4608,V.e,T.c,[[2,T.g],[2,T.l]]),e.Db(4608,T.a,T.w,[[2,T.f],X.a]),e.Db(5120,Q.b,Q.a,[[3,Q.b]]),e.Db(5120,W.b,W.c,[q.c]),e.Db(135680,C.h,C.h,[e.y,X.a]),e.Db(4608,Z.e,Z.e,[e.L]),e.Db(5120,B.c,B.d,[q.c]),e.Db(135680,B.e,B.e,[q.c,e.q,[2,m.i],[2,B.b],B.c,[3,B.e],q.e]),e.Db(4608,Y.i,Y.i,[]),e.Db(5120,Y.a,Y.b,[q.c]),e.Db(5120,H.c,H.a,[[3,H.c]]),e.Db(4608,R.v,R.v,[e.j,e.q,R.jb,R.w]),e.Db(4608,K.a,K.a,[]),e.Db(1073742336,f.p,f.p,[[2,f.u],[2,f.l]]),e.Db(1073742336,m.c,m.c,[]),e.Db(1073742336,M.C,M.C,[]),e.Db(1073742336,M.m,M.m,[]),e.Db(1073742336,M.z,M.z,[]),e.Db(1073742336,A.a,A.a,[]),e.Db(1073742336,T.l,T.l,[[2,T.d],[2,V.f]]),e.Db(1073742336,X.b,X.b,[]),e.Db(1073742336,T.v,T.v,[]),e.Db(1073742336,P.c,P.c,[]),e.Db(1073742336,$.g,$.g,[]),e.Db(1073742336,nn.c,nn.c,[]),e.Db(1073742336,q.g,q.g,[]),e.Db(1073742336,J.c,J.c,[]),e.Db(1073742336,J.b,J.b,[]),e.Db(1073742336,v.c,v.c,[]),e.Db(1073742336,ln.c,ln.c,[]),e.Db(1073742336,E.d,E.d,[]),e.Db(1073742336,tn.e,tn.e,[]),e.Db(1073742336,en.c,en.c,[]),e.Db(1073742336,un.e,un.e,[]),e.Db(1073742336,T.m,T.m,[]),e.Db(1073742336,T.t,T.t,[]),e.Db(1073742336,on.a,on.a,[]),e.Db(1073742336,an.a,an.a,[]),e.Db(1073742336,T.q,T.q,[]),e.Db(1073742336,U.c,U.c,[]),e.Db(1073742336,G.d,G.d,[]),e.Db(1073742336,rn.b,rn.b,[]),e.Db(1073742336,rn.a,rn.a,[]),e.Db(1073742336,cn.a,cn.a,[]),e.Db(1073742336,bn.a,bn.a,[]),e.Db(1073742336,T.x,T.x,[]),e.Db(1073742336,T.n,T.n,[]),e.Db(1073742336,sn.a,sn.a,[]),e.Db(1073742336,gn.c,gn.c,[]),e.Db(1073742336,_n.a,_n.a,[]),e.Db(1073742336,pn.a,pn.a,[]),e.Db(1073742336,dn.e,dn.e,[]),e.Db(1073742336,Q.c,Q.c,[]),e.Db(1073742336,C.a,C.a,[]),e.Db(1073742336,W.e,W.e,[]),e.Db(1073742336,Z.c,Z.c,[]),e.Db(1073742336,mn.a,mn.a,[]),e.Db(1073742336,hn.a,hn.a,[]),e.Db(1073742336,fn.d,fn.d,[]),e.Db(1073742336,Pn.j,Pn.j,[]),e.Db(1073742336,B.k,B.k,[]),e.Db(1073742336,Cn.p,Cn.p,[]),e.Db(1073742336,On.m,On.m,[]),e.Db(1073742336,Y.j,Y.j,[]),e.Db(1073742336,Mn.d,Mn.d,[]),e.Db(1073742336,Mn.c,Mn.c,[]),e.Db(1073742336,Dn.i,Dn.i,[]),e.Db(1073742336,vn.b,vn.b,[]),e.Db(1073742336,H.d,H.d,[]),e.Db(1073742336,R.c,R.c,[]),e.Db(1073742336,R.f,R.f,[]),e.Db(1073742336,R.g,R.g,[]),e.Db(1073742336,R.k,R.k,[]),e.Db(1073742336,R.l,R.l,[]),e.Db(1073742336,R.r,R.r,[]),e.Db(1073742336,R.t,R.t,[]),e.Db(1073742336,R.x,R.x,[]),e.Db(1073742336,R.z,R.z,[]),e.Db(1073742336,R.D,R.D,[]),e.Db(1073742336,R.G,R.G,[]),e.Db(1073742336,R.J,R.J,[]),e.Db(1073742336,R.M,R.M,[]),e.Db(1073742336,R.P,R.P,[]),e.Db(1073742336,R.U,R.U,[]),e.Db(1073742336,R.X,R.X,[]),e.Db(1073742336,R.Y,R.Y,[]),e.Db(1073742336,R.Z,R.Z,[]),e.Db(1073742336,R.y,R.y,[]),e.Db(1073742336,xn.h,xn.h,[]),e.Db(1073742336,wn.b,wn.b,[]),e.Db(1073742336,kn.b,kn.b,[]),e.Db(1073742336,yn.i,yn.i,[]),e.Db(1073742336,Fn.a,Fn.a,[]),e.Db(1073742336,Nn.a,Nn.a,[]),e.Db(1073742336,d.c,d.c,[]),e.Db(1073742336,o,o,[]),e.Db(256,T.e,T.i,[]),e.Db(256,xn.p,"en-US",[]),e.Db(256,yn.b,{default:yn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),e.Db(1024,f.j,(function(){return[[{path:"",component:u}]]}),[]),e.Db(256,d.b,{backgroundColor:"#212226",backgroundOpacity:1,backgroundStroke:"#212226",backgroundStrokeWidth:18,backgroundPadding:0,radius:83,responsive:!0,space:-17,titleFontSize:"40",titleFontWeight:"800",titleColor:"#ffffff",toFixed:0,maxPercent:100,outerStrokeWidth:17,innerStrokeWidth:17,showSubtitle:!0,showUnits:!1,subtitle:["OEE"]},[])])}))}}]);