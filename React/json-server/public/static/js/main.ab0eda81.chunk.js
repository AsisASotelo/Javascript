(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{146:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),l=t.n(s),o=(t(95),t(96),t(97),t(98),t(24)),c=t(25),m=t(27),i=t(26),u=t(149),d=t(150),h=t(151),E=t(152),f=t(153),p=t(154),g=t(10),b=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pusle fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading ..."))},v="http://localhost:3001/";function N(e){var a=e.dish;e.onClick;return r.a.createElement(u.a,null,r.a.createElement(g.b,{to:"/menu/".concat(a.id)},r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(E.a,null,a.name))))}var O=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(N,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.dishes.errMess))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},y=t(155),w=t(156),M=t(157),k=t(41);function L(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(b,null):n?r.a.createElement("h4",null,n):r.a.createElement(k.FadeTransform,{in:!0,tranformProps:{exitTranform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{src:v+a.image,alt:a.name}),r.a.createElement(y.a,null,r.a.createElement(E.a,null,a.name),a.designation?r.a.createElement(w.a,null,a.designation):null,r.a.createElement(M.a,null,a.description))))}var j=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(L,{item:e.leader,isLoading:e.dishesLoading,errMess:e.dishesErrMess}))))};function C(e){var a=e.dish;return console.log("Dish detail render invoked"),null!=a?r.a.createElement("div",{className:"col-12 col-sm-12 col-md-5 m-1"},r.a.createElement(k.FadeTransform,{in:!0,tranformProps:{exitTranform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{width:"100%",src:v+a.image,alt:a.name}),r.a.createElement(y.a,null,r.a.createElement(E.a,null,a.name),r.a.createElement(M.a,null,a.description))))):r.a.createElement("div",null)}function S(e){var a=e.comments;e.postComment,e.dishId;if(null!=a)return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(k.Stagger,{in:!0},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"--",e.author))})))))}var x=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(b,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement(p.a,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(C,{dish:e.dish}),r.a.createElement(S,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):void 0},D=t(28),F=t(158),A=t(159),I=t(160),T=t(161),P=t(162),R=t(163),_=t(164),H=t(165),q=t(174),W=t(166),B=t(167),G=t(168),z=t(169),Y=t(170),J=t(171),U=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(D.a)(n)),n.toggleModal=n.toggleModal.bind(Object(D.a)(n)),n.handleLogin=n.handleLogin.bind(Object(D.a)(n)),n}return Object(c.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+"Remember: "+this.remember.chekee),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{onClick:this.toggleNav}),r.a.createElement(I.a,{className:"ml-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Sandys Food Service"})),r.a.createElement(T.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(P.a,{navbar:!0},r.a.createElement(R.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(R.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About")),r.a.createElement(R.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(R.a,null,r.a.createElement(g.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact"))),r.a.createElement(P.a,{className:"ml-auto",navbar:!0},r.a.createElement(R.a,null,r.a.createElement(_.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement(H.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Sandy's Food Service"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines."))))),r.a.createElement(q.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(W.a,{toggle:this.toggleModal},"Login"),r.a.createElement(B.a,null,r.a.createElement(G.a,{onSubmit:this.handleLogin},r.a.createElement(z.a,null,r.a.createElement(Y.a,{htmlFor:"username"},"Username"),r.a.createElement(J.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(z.a,null,r.a.createElement(Y.a,{htmlFor:"username"},"Username"),r.a.createElement(J.a,{type:"password",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(z.a,null,r.a.createElement(Y.a,{check:!0},r.a.createElement(J.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember Me")),r.a.createElement(_.a,{type:"submit",value:"submit",className:"bg-primary"})))))}}]),t}(n.Component);var K=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/aboutus"},"About")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},Z=t(53),$=t(7),Q=t(172),V=t(173),X=t(11),ee=function(e){return e&&e.length},ae=function(e){return function(a){return!a||a.length<=e}},te=function(e){return function(a){return a&&a.length>=e}},ne=function(e){return!isNaN(Number(e))},re=function(e){return/^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).handleBlur=function(e){return function(a){n.setState({touched:Object($.a)(Object($.a)({},n.state.touched),{},Object(Z.a)({},e,!0))})}},n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(c.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current state is: "+JSON.stringify(e)),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(g.b,{to:"/home"},"Home")),r.a.createElement(p.a,{active:!0},"Contact Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact Us")),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us Your Feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(X.Form,{model:"feedback",onSubmit:function(a){return e.handleSubmit(a)}},r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(Y.a,{htmlFor:"firstname",md:2},"FirstName"),r.a.createElement(V.a,{md:10},r.a.createElement(X.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ee,minLength:te(3),maxLength:ae(15)}}),r.a.createElement(X.Errors,{classname:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 charactors",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(Y.a,{htmlFor:"lastname",md:2},"LastName"),r.a.createElement(V.a,{md:10},r.a.createElement(X.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ee,minLength:te(3),maxLength:ae(15)}}),r.a.createElement(X.Errors,{classname:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 charactors",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(Y.a,{htmlFor:"telnum",md:2},"Contact Telephone"),r.a.createElement(V.a,{md:10},r.a.createElement(X.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:ee,minlength:te(3),maxLength:ae(15),isNumber:ne}}),r.a.createElement(X.Errors,{classname:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less"}}))),r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(Y.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(V.a,{md:10},r.a.createElement(X.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ee,validEmail:re}}),r.a.createElement(X.Errors,{classname:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}}))),r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(V.a,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(Y.a,{check:!0},r.a.createElement(X.Control.checkbox,{model:".agree",type:"checkbox",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(V.a,{md:{size:3,offset:1}},r.a.createElement(X.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(Q.a,{className:"form-group",p:!0},r.a.createElement(Y.a,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(V.a,{md:10},r.a.createElement(X.Control.textarea,{model:".message",id:"message",name:"message",placeholder:"Email",className:"form-control"}))),r.a.createElement(Q.a,{className:"form-group"},r.a.createElement(V.a,{md:{size:10,offset:2}}),r.a.createElement(_.a,{type:"submit",color:"primary"},"Send Feedback"))))))}}]),t}(n.Component),le=function(){return{type:"DISHES_LOADING"}},oe=function(e){return{type:"DISHES_FAILED",payload:e}},ce=function(e){return{type:"ADD_DISHES",payload:e}},me=function(e){return{type:"COMMENTS_FAILED",payload:e}},ie=function(e){return{type:"ADD_COMMENTS",payload:e}},ue=function(){return{type:"PROMOS_LOADING"}},de=function(e){return{type:"PROMOS_FAILED",payload:e}},he=function(e){return{type:"ADD_PROMOS",payload:e}},Ee=t(29),fe=t(19),pe=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(Ee.d,null,r.a.createElement(Ee.b,{path:"/home",component:function(){return r.a.createElement(j,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.filter((function(e){return e.featured}))[0]})}}),r.a.createElement(Ee.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(O,{dishes:e.props.dishes})}}),r.a.createElement(Ee.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(x,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,addComment:e.props.postComment})}}),r.a.createElement(Ee.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(se,{resetFeedbackForm:e.props.resetFeedbackForm})}}),r.a.createElement(Ee.a,{to:"/home"})),r.a.createElement(K,null))}}]),t}(n.Component),ge=Object(Ee.g)(Object(fe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var s={dishId:e,rating:a,author:t,comment:n};return s.date=(new Date).toISOString(),fetch(v+"comments",{method:"POST",body:JSON.stringify(s),header:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){new Error(e.message);throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("Post comments ",e.message),alert("Your comment could not be posted \n"+e.message)}))}}(a,t,n,r))},fetchDishes:function(){e((function(e){return e(le(!0)),fetch(v+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message),e})).then((function(e){return e.json()})).then((function(a){return e(ce(a))})).catch((function(a){return e(oe(a.message))}))}))},resetFeedbackForm:function(){e(X.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(v+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message),e})).then((function(e){return e.json()})).then((function(a){return e(ie(a))})).catch((function(a){return e(me(a.message))}))}))},fetchPromos:function(){e((function(e){return e(ue(!0)),fetch(v+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message),e})).then((function(e){return e.json()})).then((function(a){return e(he(a))})).catch((function(a){return e(de(a.message))}))}))}}}))(pe)),be=(t(146),t(20)),ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:null,dishes:a.payload});case"DISHES_LOADING":return Object($.a)(Object($.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:a.payload,dishes:[]});default:return e}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:null,comments:a.payload});case"COMMENTS_FAILED":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:a.payload,comments:[]});case"ADD_COMMENT":var t=a.payload;return t.id=e.comments.length,t.date=(new Date).toISOString(),Object($.a)(Object($.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROMOS":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_LOADING":return Object($.a)(Object($.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object($.a)(Object($.a)({},e),{},{isLoading:!1,errMess:a.payload,promotions:[]});default:return e}},ye=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Me=t(87),ke=t(88),Le=t.n(ke),je={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel",message:""},Ce=Object(be.createStore)(Object(be.combineReducers)(Object($.a)({dishes:ve,comments:Ne,promotions:Oe,leaders:we},Object(X.createForms)({feedback:je}))),Object(be.applyMiddleware)(Me.a,Le.a)),Se=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(fe.Provider,{store:Ce},r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(ge,null))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(147)},98:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.ab0eda81.chunk.js.map