function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{g1aE:function(n,l,t){"use strict";t.r(l);var e,u=t("8Y7J"),a=function(){function n(l,t,e){var u=this;_classCallCheck(this,n),this.route=l,this.service=t,this.fb=e,this.myLoader=!1,localStorage.getItem("machine_name"),this.newmachine=localStorage.getItem("machine"),this.myLoader=!0,this.machine=this.route.snapshot.queryParamMap.get("machine_name"),this.machine?(this.myLoader=!1,localStorage.setItem("machine_name",this.machine),this.myLoader=!0,this.service.live(this.machine).subscribe((function(n){u.myLoader=!1,u.liveoee=n}))):this.service.live(this.newmachine).subscribe((function(n){u.myLoader=!1,u.liveoee=n}))}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.machine_class=localStorage.getItem("machine"),this.reason=localStorage.getItem("reason"),localStorage.getItem("machine_name"),this.login=this.fb.group({shift_num:[""],date:[""]}),this.myLoader=!0,this.service.getmachines().subscribe((function(l){n.machine_response=l,n.myLoader=!1,n.login.patchValue({machine_name:n.machine_response[0]}),n.service.getshift().subscribe((function(l){n.shift_response=l}))}))}},{key:"select_shift",value:function(n){this.login.value.shift_num=n}},{key:"logintest",value:function(n){var l=this;this.myLoader=!0;var t={machine:localStorage.getItem("machine_name"),shift_num:this.login.value.shift_num,date:this.login.value.date};this.myLoader=!0,this.service.overall_report(t).subscribe((function(n){l.myLoader=!1,l.get_report=n,l.reportList=!0}))}}]),n}(),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),r=t("NcP4"),c=t("xYTU"),b=t("t68o"),s=t("zbXB"),g=t("9AJC"),_=t("fo5T"),p=t("XePT"),d=t("ITXy"),m=t("B0QU"),f=t("SVse"),h=t("bujt"),C=t("iInd"),P=t("Fwaw"),O=t("5GAg"),M=t("omvX"),D=t("s7LF"),v=t("Mr+X"),x=t("Gi4r"),k=t("IheW"),w=((e=function(){function n(l){_classCallCheck(this,n),this.http=l}return _createClass(n,[{key:"live",value:function(n){return console.log(n),this.http.get("live_oee_tab?machine="+n)}},{key:"getmachines",value:function(){return this.http.get("tab_machine_list")}},{key:"getshift",value:function(){return this.http.get("tab_shift_list")}},{key:"overall_report",value:function(n){return this.http.get("oee_past_dashboard?machine="+n.machine+"&&shift_num="+n.shift_num+"&&date="+n.date)}}]),n}()).ngInjectableDef=u.Tb({factory:function(){return new e(u.Ub(k.c))},token:e,providedIn:"root"}),e),y=u.rb({encapsulation:0,styles:[["h2[_ngcontent-%COMP%]{color:#fff}.page[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]{padding:10px 0}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{background:#2c2f34;padding:12px 20px;display:flex;justify-content:space-between}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px;margin:0;color:#fff}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;margin:0;padding:0 15px;color:#a8a8a8}.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child, .section_top_padding[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{border-right:1px solid #707070}.mat-fab.mat-primary[_ngcontent-%COMP%], .mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]{background-image:linear-gradient(#f69320,#7b4a10);color:#fff!important}.machine_detail_Page[_ngcontent-%COMP%]{padding:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-left:10px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   button.back.mat-flat-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{min-width:64px;padding:0;height:64px;border-radius:8px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:14px;margin-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]   .machine_name_list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:22px;color:#a8a8a8}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before{display:none}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent;padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:26px;color:#fff}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-left:20px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   button.mat-icon-button.mat-button-base[_ngcontent-%COMP%]{padding-top:12px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]   button.mat-raised-button.mat-button-base.mat-primary[_ngcontent-%COMP%]{padding:9px 32px;margin-left:14px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#2c2f34;border:1px solid #707070;padding:0 20px;border-radius:7px;height:55px}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-arrow-wrapper{transform:translateY(-20%)!important}.machine_detail_Page[_ngcontent-%COMP%]   .header_machine[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .lhs_wrapper[_ngcontent-%COMP%]     .mat-select-value{font-size:22px;color:#fff}.machine_prod[_ngcontent-%COMP%]{padding:12px 40px 12px 12px;display:flex;align-items:center;background:#2c2f34;border-radius:12px;margin-bottom:10px;border:4px solid #f69320}.machine_prod[_ngcontent-%COMP%]   .circle_progress_wrapper[_ngcontent-%COMP%]{text-align:center;width:49%!important;height:348px;float:left}.machine_prod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;text-align:center;margin:0;color:#fff}.machine_prod[_ngcontent-%COMP%]   .label_info[_ngcontent-%COMP%]{float:left;width:60%}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;margin-bottom:20px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .upper_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]{display:flex;background-color:#78542c;border:3px solid #f69320;border-radius:12px;padding:20px 15px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:30px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:46px;font-weight:500;margin:0;color:#fff;line-height:38px;border-bottom:1px solid #fff;padding-bottom:10px}.machine_prod[_ngcontent-%COMP%]   .lower_row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}  .mat-form-field-underline{display:none}footer[_ngcontent-%COMP%]{background:#2c2f34;padding:9px 30px 9px 9px;position:fixed;width:100%;bottom:0;text-align:right}.footer_action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.footer_action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:30px;font-size:26px}  .mat-select-placeholder{color:rgba(255,255,255,.42)}  input.mat-input-element{color:#828386;font-size:20px;font-weight:500}input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#828386}input[_ngcontent-%COMP%]::-moz-placeholder{color:#828386}input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#828386}input[_ngcontent-%COMP%]::placeholder{color:#828386}"]],data:{}});function F(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Nb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.machine)}))}function N(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Nb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.machine_class)}))}function L(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,41,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,32,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,2,"div",[["class","circle_progress_wrapper"]],null,null,null,null,null)),(n()(),u.tb(3,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#78542C"],["outerStrokeColor","#F69320"],["radius","65"]],null,null,null,d.b,d.a)),u.sb(4,770048,null,0,m.a,[m.b,u.k,f.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null),(n()(),u.tb(5,0,null,null,27,"div",[["class","label_info"]],null,null,null,null,null)),(n()(),u.tb(6,0,null,null,10,"div",[["class","upper_row"]],null,null,null,null,null)),(n()(),u.tb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(8,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(9,null,["",""])),(n()(),u.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Actual"])),(n()(),u.tb(12,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(13,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(14,null,["",""])),(n()(),u.tb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Target"])),(n()(),u.tb(17,0,null,null,15,"div",[["class","lower_row"]],null,null,null,null,null)),(n()(),u.tb(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(19,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(20,null,["","%"])),(n()(),u.tb(21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Availability"])),(n()(),u.tb(23,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(24,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(25,null,["","%"])),(n()(),u.tb(26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Performance"])),(n()(),u.tb(28,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(29,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(30,null,["","%"])),(n()(),u.tb(31,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Quality"])),(n()(),u.tb(33,0,null,null,0,"div",[["style","clear: both;height: 1px;"]],null,null,null,null,null)),(n()(),u.tb(34,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Nb(35,null,["",""])),(n()(),u.tb(36,0,null,null,5,"div",[["class","footer_action"]],null,null,null,null,null)),(n()(),u.tb(37,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Fb(n,38).onClick()&&e),e}),h.b,h.a)),u.sb(38,16384,null,0,C.m,[C.l,C.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Gb(39,1),u.sb(40,180224,null,0,P.b,[u.k,O.h,[2,M.a]],{color:[0,"color"]},null),(n()(),u.Nb(-1,0,["Production List"]))],(function(n,l){var t=l.component;n(l,4,0,"65",u.xb(1,"",null==t.liveoee?null:t.liveoee.oee,""),"#F69320","#78542C","true","300");var e=n(l,39,0,"/production");n(l,38,0,e),n(l,40,0,"primary")}),(function(n,l){var t=l.component;n(l,9,0,null==t.liveoee?null:t.liveoee.actual),n(l,14,0,null==t.liveoee?null:t.liveoee.target),n(l,20,0,null==t.liveoee?null:t.liveoee.availability),n(l,25,0,null==t.liveoee?null:t.liveoee.perfomance),n(l,30,0,null==t.liveoee?null:t.liveoee.quality),n(l,35,0,t.reason),n(l,37,0,u.Fb(l,40).disabled||null,"NoopAnimations"===u.Fb(l,40)._animationMode)}))}function S(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,46,"div",[["class","machine_Container"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,32,"div",[["class","machine_prod running"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,2,"div",[["class","circle_progress_wrapper"]],null,null,null,null,null)),(n()(),u.tb(3,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#78542C"],["outerStrokeColor","#F69320"],["radius","65"]],null,null,null,d.b,d.a)),u.sb(4,770048,null,0,m.a,[m.b,u.k,f.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null),(n()(),u.tb(5,0,null,null,27,"div",[["class","label_info"]],null,null,null,null,null)),(n()(),u.tb(6,0,null,null,10,"div",[["class","upper_row"]],null,null,null,null,null)),(n()(),u.tb(7,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(8,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(9,null,["",""])),(n()(),u.tb(10,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Actual"])),(n()(),u.tb(12,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(13,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(14,null,["",""])),(n()(),u.tb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Target"])),(n()(),u.tb(17,0,null,null,15,"div",[["class","lower_row"]],null,null,null,null,null)),(n()(),u.tb(18,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(19,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(20,null,["","%"])),(n()(),u.tb(21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Availability"])),(n()(),u.tb(23,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(24,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(25,null,["","%"])),(n()(),u.tb(26,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Performance"])),(n()(),u.tb(28,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),u.tb(29,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),u.Nb(30,null,["","%"])),(n()(),u.tb(31,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["Quality"])),(n()(),u.tb(33,0,null,null,0,"div",[["style","clear: both;height: 1px;"]],null,null,null,null,null)),(n()(),u.tb(34,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Nb(35,null,["",""])),(n()(),u.tb(36,0,null,null,10,"div",[["class","footer_action"]],null,null,null,null,null)),(n()(),u.tb(37,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Fb(n,38).onClick()&&e),e}),h.b,h.a)),u.sb(38,16384,null,0,C.m,[C.l,C.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Gb(39,1),u.sb(40,180224,null,0,P.b,[u.k,O.h,[2,M.a]],{color:[0,"color"]},null),(n()(),u.Nb(-1,0,["Reason"])),(n()(),u.tb(42,0,null,null,4,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Fb(n,43).onClick()&&e),e}),h.b,h.a)),u.sb(43,16384,null,0,C.m,[C.l,C.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Gb(44,1),u.sb(45,180224,null,0,P.b,[u.k,O.h,[2,M.a]],{color:[0,"color"]},null),(n()(),u.Nb(-1,0,["Production List"]))],(function(n,l){var t=l.component;n(l,4,0,"65",u.xb(1,"",null==t.get_report?null:t.get_report.oee,""),"#F69320","#78542C","true","300");var e=n(l,39,0,"/reflect");n(l,38,0,e),n(l,40,0,"primary");var a=n(l,44,0,"/production");n(l,43,0,a),n(l,45,0,"primary")}),(function(n,l){var t=l.component;n(l,9,0,null==t.get_report?null:t.get_report.actual),n(l,14,0,null==t.get_report?null:t.get_report.target),n(l,20,0,null==t.get_report?null:t.get_report.availability),n(l,25,0,null==t.get_report?null:t.get_report.perfomance),n(l,30,0,null==t.get_report?null:t.get_report.quality),n(l,35,0,t.reason),n(l,37,0,u.Fb(l,40).disabled||null,"NoopAnimations"===u.Fb(l,40)._animationMode),n(l,42,0,u.Fb(l,45).disabled||null,"NoopAnimations"===u.Fb(l,45)._animationMode)}))}function I(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function z(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,34,"section",[["class","tablet_page"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,2,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),u.tb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),u.Nb(-1,null,["OEE Dashboard"])),(n()(),u.tb(4,0,null,null,26,"div",[["class","page"]],null,null,null,null,null)),(n()(),u.tb(5,0,null,null,25,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),u.tb(6,0,null,null,24,"div",[["class","machine_detail_Page"]],null,null,null,null,null)),(n()(),u.tb(7,0,null,null,19,"div",[["class","running"]],null,null,null,null,null)),(n()(),u.tb(8,0,null,null,18,"div",[["class","header_machine"]],null,null,null,null,null)),(n()(),u.tb(9,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,t){var e=!0,a=n.component;return"submit"===l&&(e=!1!==u.Fb(n,11).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.Fb(n,11).onReset()&&e),"ngSubmit"===l&&(e=!1!==a.logintest(a.login.value)&&e),e}),null,null)),u.sb(10,16384,null,0,D.G,[],null,null),u.sb(11,540672,null,0,D.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Kb(2048,null,D.d,null,[D.k]),u.sb(13,16384,null,0,D.t,[[4,D.d]],null,null),(n()(),u.tb(14,0,null,null,12,"div",[["class","rhs_wrapper"]],null,null,null,null,null)),(n()(),u.tb(15,0,null,null,7,"button",[["class","back"],["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Fb(n,16).onClick()&&e),e}),h.b,h.a)),u.sb(16,16384,null,0,C.m,[C.l,C.a,[8,null],u.D,u.k],{routerLink:[0,"routerLink"]},null),u.Gb(17,1),u.sb(18,180224,null,0,P.b,[u.k,O.h,[2,M.a]],{color:[0,"color"]},null),(n()(),u.tb(19,0,null,0,3,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),u.tb(20,0,null,null,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,v.b,v.a)),u.sb(21,9158656,null,0,x.b,[u.k,x.d,[8,null],[2,x.a],[2,u.l]],null,null),(n()(),u.Nb(-1,0,["keyboard_arrow_left"])),(n()(),u.ib(16777216,null,null,1,null,F)),u.sb(24,16384,null,0,f.n,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,N)),u.sb(26,16384,null,0,f.n,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,L)),u.sb(28,16384,null,0,f.n,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,null,1,null,S)),u.sb(30,16384,null,0,f.n,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(31,0,null,null,1,"footer",[["class","footer_align"]],null,null,null,null,null)),(n()(),u.tb(32,0,null,null,0,"img",[["src","../../../assets/images/yantra1.png"]],null,null,null,null,null)),(n()(),u.ib(16777216,null,null,1,null,I)),u.sb(34,16384,null,0,f.n,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,11,0,t.login);var e=n(l,17,0,"/Tablet");n(l,16,0,e),n(l,18,0,"primary"),n(l,21,0),n(l,24,0,t.machine),n(l,26,0,t.machine_class),n(l,28,0,t.liveoee&&!t.get_report),n(l,30,0,t.get_report),n(l,34,0,t.myLoader)}),(function(n,l){n(l,9,0,u.Fb(l,13).ngClassUntouched,u.Fb(l,13).ngClassTouched,u.Fb(l,13).ngClassPristine,u.Fb(l,13).ngClassDirty,u.Fb(l,13).ngClassValid,u.Fb(l,13).ngClassInvalid,u.Fb(l,13).ngClassPending),n(l,15,0,u.Fb(l,18).disabled||null,"NoopAnimations"===u.Fb(l,18)._animationMode),n(l,20,0,u.Fb(l,21).inline,"primary"!==u.Fb(l,21).color&&"accent"!==u.Fb(l,21).color&&"warn"!==u.Fb(l,21).color)}))}var j=u.pb("app-oee-dashboard",a,(function(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"app-oee-dashboard",[],null,null,null,z,y)),u.sb(1,114688,null,0,a,[C.a,w,D.g],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),A=t("QQfA"),q=t("IP0z"),E=t("gavF"),J=t("POq0"),T=t("Xd0L"),U=t("/Co4"),G=t("JjoW"),V=t("cUpR"),X=t("/HVE"),Q=t("qJ5m"),W=t("Mz6y"),Z=t("DkaU"),B=t("s6ns"),Y=t("821u"),H=t("OIZN"),R=t("G0yt"),K=t("KMir"),$=t("Wc//"),nn=t("zMNK"),ln=t("hOhj"),tn=t("oapL"),en=t("HsOI"),un=t("ZwOa"),an=t("igqZ"),on=t("02hT"),rn=t("Q+lL"),cn=t("pBi1"),bn=t("lT8R"),sn=t("BV1i"),gn=t("elxJ"),_n=t("5Bek"),pn=t("c9fC"),dn=t("FVPZ"),mn=t("qJ50"),fn=t("AaDx"),hn=t("mkRZ"),Cn=t("dFDH"),Pn=t("rWV4"),On=t("zQui"),Mn=t("8rEH"),Dn=t("r0V8"),vn=t("10VE"),xn=t("BzsH"),kn=t("cw5Z"),wn=t("hfXE"),yn=t("ECJv"),Fn=t("EApP"),Nn=t("1Q6g"),Ln=t("JUyF");t.d(l,"OeeDashboardModuleNgFactory",(function(){return Sn}));var Sn=u.qb(o,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[i.a,r.a,c.a,c.b,b.a,s.b,s.a,g.a,g.b,g.h,g.i,g.e,g.f,g.g,_.a,p.a,j]],[3,u.j],u.w]),u.Db(4608,f.p,f.o,[u.t,[2,f.L]]),u.Db(4608,D.D,D.D,[]),u.Db(4608,D.g,D.g,[]),u.Db(4608,A.c,A.c,[A.i,A.e,u.j,A.h,A.f,u.q,u.y,f.d,q.b,[2,f.j]]),u.Db(5120,A.j,A.k,[A.c]),u.Db(5120,E.a,E.d,[A.c]),u.Db(4608,J.c,J.c,[]),u.Db(4608,T.b,T.b,[]),u.Db(5120,U.a,U.b,[A.c]),u.Db(5120,G.a,G.b,[A.c]),u.Db(4608,V.e,T.c,[[2,T.g],[2,T.l]]),u.Db(4608,T.a,T.w,[[2,T.f],X.a]),u.Db(5120,Q.b,Q.a,[[3,Q.b]]),u.Db(5120,W.b,W.c,[A.c]),u.Db(135680,O.h,O.h,[u.y,X.a]),u.Db(4608,Z.e,Z.e,[u.L]),u.Db(5120,B.c,B.d,[A.c]),u.Db(135680,B.e,B.e,[A.c,u.q,[2,f.j],[2,B.b],B.c,[3,B.e],A.e]),u.Db(4608,Y.i,Y.i,[]),u.Db(5120,Y.a,Y.b,[A.c]),u.Db(5120,H.c,H.a,[[3,H.c]]),u.Db(4608,R.v,R.v,[u.j,u.q,R.jb,R.w]),u.Db(4608,K.i,K.j,[]),u.Db(5120,K.h,K.k,[K.i,u.A]),u.Db(4608,K.t,K.t,[V.d]),u.Db(4608,K.m,K.n,[]),u.Db(5120,K.l,K.o,[K.m,u.A]),u.Db(4608,K.f,K.f,[u.l]),u.Db(4608,$.a,$.a,[]),u.Db(1073742336,C.p,C.p,[[2,C.u],[2,C.l]]),u.Db(1073742336,f.c,f.c,[]),u.Db(1073742336,D.C,D.C,[]),u.Db(1073742336,D.m,D.m,[]),u.Db(1073742336,D.z,D.z,[]),u.Db(1073742336,q.a,q.a,[]),u.Db(1073742336,T.l,T.l,[[2,T.d],[2,V.f]]),u.Db(1073742336,X.b,X.b,[]),u.Db(1073742336,T.v,T.v,[]),u.Db(1073742336,P.c,P.c,[]),u.Db(1073742336,nn.g,nn.g,[]),u.Db(1073742336,ln.c,ln.c,[]),u.Db(1073742336,A.g,A.g,[]),u.Db(1073742336,E.c,E.c,[]),u.Db(1073742336,E.b,E.b,[]),u.Db(1073742336,x.c,x.c,[]),u.Db(1073742336,tn.c,tn.c,[]),u.Db(1073742336,J.d,J.d,[]),u.Db(1073742336,en.e,en.e,[]),u.Db(1073742336,un.c,un.c,[]),u.Db(1073742336,an.e,an.e,[]),u.Db(1073742336,T.m,T.m,[]),u.Db(1073742336,T.t,T.t,[]),u.Db(1073742336,on.a,on.a,[]),u.Db(1073742336,rn.a,rn.a,[]),u.Db(1073742336,T.q,T.q,[]),u.Db(1073742336,U.c,U.c,[]),u.Db(1073742336,G.d,G.d,[]),u.Db(1073742336,cn.b,cn.b,[]),u.Db(1073742336,cn.a,cn.a,[]),u.Db(1073742336,bn.a,bn.a,[]),u.Db(1073742336,sn.a,sn.a,[]),u.Db(1073742336,T.x,T.x,[]),u.Db(1073742336,T.n,T.n,[]),u.Db(1073742336,gn.a,gn.a,[]),u.Db(1073742336,_n.c,_n.c,[]),u.Db(1073742336,pn.a,pn.a,[]),u.Db(1073742336,dn.a,dn.a,[]),u.Db(1073742336,mn.e,mn.e,[]),u.Db(1073742336,Q.c,Q.c,[]),u.Db(1073742336,O.a,O.a,[]),u.Db(1073742336,W.e,W.e,[]),u.Db(1073742336,Z.c,Z.c,[]),u.Db(1073742336,fn.a,fn.a,[]),u.Db(1073742336,hn.a,hn.a,[]),u.Db(1073742336,Cn.d,Cn.d,[]),u.Db(1073742336,Pn.j,Pn.j,[]),u.Db(1073742336,B.k,B.k,[]),u.Db(1073742336,On.p,On.p,[]),u.Db(1073742336,Mn.m,Mn.m,[]),u.Db(1073742336,Y.j,Y.j,[]),u.Db(1073742336,Dn.d,Dn.d,[]),u.Db(1073742336,Dn.c,Dn.c,[]),u.Db(1073742336,vn.i,vn.i,[]),u.Db(1073742336,xn.b,xn.b,[]),u.Db(1073742336,H.d,H.d,[]),u.Db(1073742336,R.c,R.c,[]),u.Db(1073742336,R.f,R.f,[]),u.Db(1073742336,R.g,R.g,[]),u.Db(1073742336,R.k,R.k,[]),u.Db(1073742336,R.l,R.l,[]),u.Db(1073742336,R.r,R.r,[]),u.Db(1073742336,R.t,R.t,[]),u.Db(1073742336,R.x,R.x,[]),u.Db(1073742336,R.z,R.z,[]),u.Db(1073742336,R.D,R.D,[]),u.Db(1073742336,R.G,R.G,[]),u.Db(1073742336,R.J,R.J,[]),u.Db(1073742336,R.M,R.M,[]),u.Db(1073742336,R.P,R.P,[]),u.Db(1073742336,R.U,R.U,[]),u.Db(1073742336,R.X,R.X,[]),u.Db(1073742336,R.Y,R.Y,[]),u.Db(1073742336,R.Z,R.Z,[]),u.Db(1073742336,R.y,R.y,[]),u.Db(1073742336,kn.h,kn.h,[]),u.Db(1073742336,wn.b,wn.b,[]),u.Db(1073742336,yn.b,yn.b,[]),u.Db(1073742336,K.b,K.b,[]),u.Db(1073742336,Fn.i,Fn.i,[]),u.Db(1073742336,Nn.a,Nn.a,[]),u.Db(1073742336,Ln.a,Ln.a,[]),u.Db(1073742336,m.c,m.c,[]),u.Db(1073742336,o,o,[]),u.Db(256,T.e,T.i,[]),u.Db(256,kn.p,"en-US",[]),u.Db(256,Fn.b,{default:Fn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),u.Db(1024,C.j,(function(){return[[{path:"",component:a}]]}),[]),u.Db(256,m.b,{backgroundColor:"#212226",backgroundOpacity:1,backgroundStroke:"#212226",backgroundStrokeWidth:18,backgroundPadding:0,radius:83,responsive:!0,space:-17,titleFontSize:"40",titleFontWeight:"800",titleColor:"#ffffff",toFixed:0,maxPercent:100,outerStrokeWidth:17,innerStrokeWidth:17,showSubtitle:!0,showUnits:!1,subtitle:["OEE"]},[])])}))}}]);