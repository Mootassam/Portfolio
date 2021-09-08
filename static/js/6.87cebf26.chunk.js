(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[6],{261:function(n,e,t){"use strict";t.r(e);var a=t(112),i=t(1),o=t(23),r=t(11),c=t(4),s=t.n(c),d=t(113),l=t(19),m=t(20),p=function(){function n(){Object(l.a)(this,n)}return Object(m.a)(n,null,[{key:"errorMessage",value:function(n,e,t,a){var i,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!a&&!t[n])return null;var r=e[n];return(null===r||void 0===r||null===(i=r[0])||void 0===i?void 0:i.message)||(null===r||void 0===r?void 0:r.message)||r||null}}]),n}(),b=t(2);function u(n){var e=Object(d.d)(),t=e.register,a=e.errors,i=e.formState,o=i.touched,r=i.isSubmitted,c=n.name,s=n.placeholder,l=n.disabled,m=n.externalErrorMessage,u=p.errorMessage(c,a,o,r,m);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{name:c,id:c,ref:t,placeholder:s,disabled:l,className:"form-control ".concat(u?"is-invalid":"","\n            ")}),Object(b.jsx)("div",{className:"invalid-feedback",children:u})]})}u.defaultProps={type:"text",required:!1},u.prototype={name:s.a.string.isRequired,required:s.a.bool,type:s.a.string,disabled:s.a.bool,placeholder:s.a.string};var f=u;function j(n){var e=Object(d.d)(),t=e.register,a=e.errors,i=e.formState,o=i.touched,r=i.isSubmitted,c=n.name,s=n.placeholder,l=(n.required,n.externalErrorMessage),m=p.errorMessage(c,a,o,r,l);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("textarea",{id:c,name:c,ref:t,placeholder:s||void 0,className:"form-control ".concat(m?"is-invalid":"","\n        ")}),Object(b.jsx)("div",{className:"invalid-feedback",children:m})]})}j.defaultProps={required:!1},j.prototype={name:s.a.string.isRequired,required:s.a.bool,placeholder:s.a.string};var h=j,g=t(256),x=t(152),O={string:function(n,e){e=e||{};var t=x.b().nullable(!0).trim().label(n);return e.required&&(t=t.required()),(e.min||0===e.min)&&(t=t.min(e.min)),e.max&&(t=t.max(e.max)),t}},v=function(n){return n.loading?Object(b.jsx)("span",{className:"spinner-border spinner-border-sm"}):null},k=x.a().shape({name:O.string("name",{required:!0}),email:O.string("email",{required:!0}),subject:O.string("subject",{required:!0}),message:O.string("message",{required:!0})});var N,y=function(n){var e=Object(i.useState)((function(){var e=n.record||{};return{name:e.name,email:e.email,subject:e.subject,message:e.message}})),t=Object(a.a)(e,1)[0],o=Object(d.c)({resolver:Object(g.yupResolver)(k),mode:"all",defaultValues:t});return Object(b.jsx)(d.a,Object(r.a)(Object(r.a)({},o),{},{children:Object(b.jsxs)("form",{onSubmit:o.handleSubmit((function(e){n.onSubmit(e),Object.keys(t).forEach((function(n){o.setValue(n,t[n])}))})),className:"php-email-form",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6 form-group",children:Object(b.jsx)(f,{name:"name",placeholder:"Name",required:!0,autoFocus:!0})}),Object(b.jsx)("div",{className:"col-md-6 form-group mt-3 mt-md-0",children:Object(b.jsx)(f,{name:"email",placeholder:"Your Email",required:!0,autoFocus:!0})})]}),Object(b.jsx)("div",{className:"form-group mt-3",children:Object(b.jsx)(f,{name:"subject",placeholder:"Subject",required:!0,autoFocus:!0})}),Object(b.jsx)("div",{className:"form-group mt-3",children:Object(b.jsx)(h,{name:"message",placeholder:"Message"})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("button",{type:"submit",disabled:n.saveLoading,children:[Object(b.jsx)(v,{loading:n.saveLoading}),"Send Message"]})})]})}))},w=t(30),q=t(258),S={selectSaveLoading:Object(q.a)([function(n){return n.contact.form}],(function(n){return Boolean(n.saveLoading)}))},z=t(25),L=t(26).a.div(N||(N=Object(z.a)(['\n  .contact .info {\n    width: 100%;\n    background: #fff;\n  }\n\n  .contact .info i {\n    font-size: 20px;\n    color: #795548;\n    float: left;\n    width: 44px;\n    height: 44px;\n    background: #effbf9;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n  }\n\n  .contact .info h4 {\n    padding: 0 0 0 60px;\n    font-size: 22px;\n    font-weight: 600;\n    margin-bottom: 5px;\n    color: #222222;\n  }\n\n  .contact .info p {\n    padding: 0 0 0 60px;\n    margin-bottom: 0;\n    font-size: 14px;\n    color: #555555;\n  }\n  contact .info .address,\n  .contact .info .email,\n  .contact .info .phone {\n    margin-top: 10px;\n  }\n\n  .contact .info .email:hover i,\n  .contact .info .address:hover i,\n  .contact .info .phone:hover i {\n    background: #795548;\n    color: #fff;\n  }\n\n  .contact .php-email-form {\n    width: 100%;\n    background: #fff;\n  }\n\n  .contact .php-email-form .form-group {\n    padding-bottom: 8px;\n  }\n\n  .contact .php-email-form .error-message {\n    display: none;\n    color: #fff;\n    background: #ed3c0d;\n    text-align: center;\n    padding: 15px;\n    font-weight: 600;\n  }\n\n  .contact .php-email-form .sent-message {\n    display: none;\n    color: #fff;\n    background: #18d26e;\n    text-align: center;\n    padding: 15px;\n    font-weight: 600;\n  }\n\n  .contact .php-email-form .loading {\n    display: none;\n    background: #fff;\n    text-align: center;\n    padding: 15px;\n  }\n\n  .contact .php-email-form .loading:before {\n    content: "";\n    display: inline-block;\n    border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    margin: 0 10px -6px 0;\n    border: 3px solid #18d26e;\n    border-top-color: #eee;\n    -webkit-animation: animate-loading 1s linear infinite;\n    animation: animate-loading 1s linear infinite;\n  }\n\n  .contact .php-email-form input,\n  .contact .php-email-form textarea {\n    border-radius: 4px;\n    box-shadow: none;\n    font-size: 14px;\n  }\n\n  .contact .php-email-form input:focus,\n  .contact .php-email-form textarea:focus {\n    border-color: #795548;\n  }\n\n  .contact .php-email-form input {\n    height: 44px;\n  }\n\n  .contact .php-email-form textarea {\n    padding: 10px 12px;\n  }\n\n  .contact .php-email-form button[type="submit"] {\n    background: #795548;\n    border: 0;\n    padding: 10px 30px 12px 30px;\n    color: #fff;\n    transition: 0.4s;\n    border-radius: 50px;\n  }\n\n  .contact .php-email-form button[type="submit"]:hover {\n    background: #3dc8b7;\n  }\n\n  @-webkit-keyframes animate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes animate-loading {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  section {\n    padding: 60px 0;\n  }\n\n  .section-bg {\n    background-color: #e7f8f6;\n  }\n\n  .section-title {\n    text-align: center;\n    padding-bottom: 30px;\n  }\n\n  .section-title h2 {\n    font-size: 32px;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 20px;\n    padding-bottom: 20px;\n    position: relative;\n  }\n\n  .section-title h2::after {\n    content: "";\n    position: absolute;\n    display: block;\n    width: 50px;\n    height: 3px;\n    background: #795548;\n    bottom: 0;\n    left: calc(50% - 25px);\n  }\n\n  .section-title p {\n    margin-bottom: 0;\n  }\n']))),M=t(28),E=t(259);e.default=function(){var n=Object(i.useState)(!1),e=Object(a.a)(n,2),t=e[0],r=e[1],c=Object(o.d)(),s=Object(o.e)(S.selectSaveLoading);return Object(i.useEffect)((function(){r(!0)}),[c]),Object(b.jsx)(L,{children:Object(b.jsx)("section",{id:"contact",className:"contact",children:Object(b.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(b.jsxs)("div",{className:"section-title",children:[Object(b.jsx)("h2",{children:"Contact"}),Object(b.jsx)("p",{children:"Whether it's an idea or a question, contact us to find out how we can help you! And if you are in Tunis, we'll discuss it over coffee! ."})]}),Object(b.jsxs)("div",{className:"row mt-5",children:[Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)(M.i,{size:30}),Object(b.jsxs)("div",{className:"address",children:[Object(b.jsx)("h4",{children:"Location:"}),Object(b.jsx)("p",{children:"Tunis"})]}),Object(b.jsxs)("div",{className:"email",children:[Object(b.jsx)(E.a,{size:30}),Object(b.jsx)("h4",{children:"Email:"}),Object(b.jsx)("p",{children:"mootassame@gmail.com"})]}),Object(b.jsxs)("div",{className:"phone",children:[Object(b.jsx)(M.k,{size:30}),Object(b.jsx)("h4",{children:"Call:"}),Object(b.jsx)("p",{children:"+216 55.324.424"})]})]})}),Object(b.jsx)("div",{className:"col-lg-8 mt-5 mt-lg-0",children:t&&Object(b.jsx)(y,{saveLoading:s,onSubmit:function(n){c(w.a.doCreate(n))}})})]})]})})})}}}]);
//# sourceMappingURL=6.87cebf26.chunk.js.map