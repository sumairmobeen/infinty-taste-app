(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(20),l=c.n(r),a=(c(71),c(72),c(14)),i=c(2);c(47),c(74),c(75);var j=c(19);var d=function(){var e=Object(s.useState)(0),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(i.jsxs)(j.a,{activeIndex:c,onSelect:function(e,t){n(e)},children:[Object(i.jsxs)(j.a.Item,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("b",{children:"RUSGULA WITH MALAI"})}),Object(i.jsx)("img",{className:"d-block w-90",height:"400",style:{margin:"0 auto"},src:"https://cdn.pixabay.com/photo/2014/12/22/12/33/sweets-577230__340.jpg",alt:"First slide"}),Object(i.jsx)(j.a.Caption,{})]}),Object(i.jsxs)(j.a.Item,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("b",{children:"KHOYA BURFI"})}),Object(i.jsx)("img",{className:"d-block w-90",height:"400",style:{margin:"0 auto"},src:"https://foodiewish.com/wp-content/uploads/2020/07/Kalakand-Recipe.jpg",alt:"First slide"}),Object(i.jsx)(j.a.Caption,{})]}),Object(i.jsxs)(j.a.Item,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("b",{children:"GULAB-JAMUN"})}),Object(i.jsx)("img",{className:"d-block w-90",style:{margin:"0 auto"},height:"400",src:"https://hamariweb.com/recipes/images/recipeimages/488.jpg",alt:"First slide"}),Object(i.jsx)(j.a.Caption,{})]}),Object(i.jsxs)(j.a.Item,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("b",{children:"BAISAN-LADOO"})}),Object(i.jsx)("img",{className:"d-block w-90",height:"400",style:{margin:"0 auto"},src:"https://content3.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-6.jpg?clr=525c0a",alt:"Second slide"}),Object(i.jsx)(j.a.Caption,{})]}),Object(i.jsxs)(j.a.Item,{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("b",{children:"BURFI WITH COCONUTS"})}),Object(i.jsx)("img",{className:" d-block w-90",height:"400",style:{margin:"0 auto"},src:"https://i.ndtvimg.com/i/2015-07/sweet-625_625x350_51438261999.jpg",alt:"Third slide"}),Object(i.jsx)(j.a.Caption,{})]})]})},o=c(7),b=(c(49),c(50),c(87),c(9)),h=c.n(b);var u=function(){return Object(i.jsx)("div",{className:"main",children:Object(i.jsxs)("div",{className:"center",children:[Object(i.jsx)(o.d,{children:Object(i.jsx)(o.i,{className:"rowcenter",children:Object(i.jsx)(o.c,{md:"6",children:Object(i.jsxs)("form",{className:"formcenter",onSubmit:function(e){e.preventDefault(),h()({method:"post",url:"http://localhost:5000/auth/signup",data:{name:document.getElementById("name").value,email:document.getElementById("email").value,phone:document.getElementById("phone").value,password:document.getElementById("password").value},withCredentials:!0}).then((function(e){e.data.status,document.getElementById("show-result").innerHTML=e.data.message})).catch((function(e){console.log(e)}))},children:[Object(i.jsx)("p",{className:"h4 text-center mb-4",children:"Sign up"}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterNameEx",className:"yello-text",children:"Your name"}),Object(i.jsx)("input",{type:"text",className:"form-control",required:!0,id:"name",placeholder:"Your Name"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterEmailEx",className:"black-text",children:"Your email"}),Object(i.jsx)("input",{type:"email",className:"form-control",placeholder:"Your Email",required:!0,id:"email"}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterConfirmEx",className:"black-text",children:"Phone"}),Object(i.jsx)("input",{type:"text",className:"form-control",required:!0,id:"phone",placeholder:"Enter Number"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterPasswordEx",className:"black-text",children:"Your password"}),Object(i.jsx)("input",{type:"password",className:"form-control",required:!0,id:"password",placeholder:"Enter Your Password"}),Object(i.jsx)("div",{className:"text-center mt-4",children:Object(i.jsx)(o.b,{color:"unique",type:"submit",children:"Register"})})]})})})}),Object(i.jsx)("center",{children:Object(i.jsx)("span",{style:{textAlign:"center",fontWeight:"bolder"},id:"show-result"})})]})})},O=c(8),m=(c(106),c(12)),x=window.location.href.split(":"),p=x="https"===x[0]?"https://infinity-taste.herokuapp.com/":"http://localhost:5000",g=n.a.createContext(),f=n.a.createContext(),v=function(){return Object(s.useContext)(g)},y=function(){return Object(s.useContext)(f)};function N(e){var t=e.children,c=Object(s.useState)({user:null,role:null,cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}),n=Object(a.a)(c,2),r=n[0],l=n[1];return Object(s.useEffect)((function(){h()({method:"get",url:p+"/profile",withCredentials:!0}).then((function(e){console.log("context response",e.data.profile),200===e.data.status&&l((function(t){return Object(O.a)(Object(O.a)({},t),{},{user:e.data.profile,role:e.data.profile.role})}))})).catch((function(e){return l((function(e){return Object(O.a)(Object(O.a)({},e),{},{role:"loggedout"})}))}))}),[]),Object(i.jsx)(g.Provider,{value:r,children:Object(i.jsx)(f.Provider,{value:l,children:t})})}var w=function(){Object(m.g)();var e=v(),t=y();return Object(i.jsx)("div",{className:"main",children:Object(i.jsxs)("div",{className:"logincenter",children:[Object(i.jsx)(o.d,{children:Object(i.jsx)(o.i,{children:Object(i.jsx)(o.c,{md:"6",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()({method:"post",url:"http://localhost:5000/auth/login",data:{email:document.getElementById("email").value,password:document.getElementById("password").value},withCredentials:!0}).then((function(e){console.log(e.data),200===e.data.status?t((function(t){return Object(O.a)(Object(O.a)({},t),{},{user:e.data.user,loginStatus:!0,token:e.data.token,role:e.data.user.role})})):alert(e.data.message)})).catch((function(e){console.log(e)}))},children:[Object(i.jsx)("p",{className:"h4 text-center mb-4",children:"Sign in"}),Object(i.jsx)("label",{htmlFor:"defaultFormLoginEmailEx",className:"black-text",children:"Your email"}),Object(i.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter Your Email"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"defaultFormLoginPasswordEx",className:"black-text",children:"Your password"}),Object(i.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter Your Password"}),Object(i.jsx)("div",{className:"text-center mt-4",children:Object(i.jsx)(o.b,{color:"indigo",type:"submit",children:"Login"})})]})})})}),"===>"+JSON.stringify(e)]})})},k=c(13),S=c(65);function C(){var e=v(),t=y(),c=Object(m.g)(),s=e.cart.reduce((function(e,t){return e+t.qty*t.price}),0);return console.log(e.cart,"global my cart"),Object(i.jsx)(o.i,{children:Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{class:"col-lg-8",children:Object(i.jsx)("div",{class:"mb-3",children:Object(i.jsxs)("div",{class:"pt-4 wish-list",children:[Object(i.jsxs)("h5",{class:"mb-4",children:["Cart (",Object(i.jsx)("span",{children:e.cart.length})," items)"]}),Object(i.jsx)("div",{class:"row mb-4"}),e.cart.map((function(e,c){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"row mb-4",children:[Object(i.jsx)("div",{class:"col-md-5 col-lg-3 col-xl-3",children:Object(i.jsxs)("div",{class:"view zoom overlay z-depth-1 rounded mb-3 mb-md-0",children:[Object(i.jsx)("img",{class:"img-fluid w-100",src:e.productimages,alt:"Sample"}),Object(i.jsx)("a",{href:"",children:Object(i.jsxs)("div",{class:"mask",children:[Object(i.jsx)("img",{class:"img-fluid w-100",src:"",alt:"Sample"}),Object(i.jsx)("div",{class:"mask rgba-black-slight"})]})})]})}),Object(i.jsx)("div",{class:"col-md-7 col-lg-9 col-xl-9",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{class:"d-flex justify-content-between",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h5",{children:e.productname}),Object(i.jsx)("p",{class:"mb-2 text-muted text-uppercase small"}),Object(i.jsx)("p",{class:"mb-3 text-muted text-uppercase small"})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{class:"def-number-input number-input safari_only mb-0 w-100",children:[Object(i.jsx)("button",{onClick:function(){return function(e){console.log("decrement index :",e),t((function(t){var c=t.cart;return t.cart[e].qty=1===t.cart[e].qty?1:t.cart[e].qty-1,localStorage.setItem("cart",JSON.stringify(c)),Object(O.a)(Object(O.a)({},t),{},{cart:c})}))}(c)},class:"minus decrease",children:"-"}),Object(i.jsx)("input",{class:"quantity",min:"0",name:"quantity",value:e.qty,type:"text",style:{textAlign:"center"},id:"increment"}),Object(i.jsx)("button",{class:"plus increase",onClick:function(){return function(e){console.log("increment ====>",e),t((function(t){var c=t.cart;return t.cart[e].qty=t.cart[e].qty+1,localStorage.setItem("cart",JSON.stringify(c)),Object(O.a)(Object(O.a)({},t),{},{cart:c})}))}(c)},children:"+"})]}),Object(i.jsx)("small",{id:"passwordHelpBlock",class:"form-text text-muted text-center"})]})]}),Object(i.jsxs)("div",{class:"d-flex justify-content-between align-items-center",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("a",{href:!0,type:"button",class:"card-link-secondary small text-uppercase mr-3",children:[Object(i.jsx)("i",{class:"fas fa-trash-alt mr-1"}),Object(i.jsx)("span",{onClick:function(e){return function(e){t((function(t){var c=t.cart;return t.cart=t.cart.splice(e,1),localStorage.setItem("cart",JSON.stringify(c)),Object(O.a)(Object(O.a)({},t),{},{cart:c})}))}(c)},children:"Delete item"})," "]})}),Object(i.jsx)("p",{class:"mb-0",children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{id:"summary",children:e.price*e.qty})})})]})]})})]})})})),Object(i.jsx)("hr",{class:"mb-4"})]})})}),Object(i.jsx)("div",{class:"col-lg-4",children:Object(i.jsx)("div",{class:"mb-3",children:Object(i.jsxs)("div",{class:"pt-4",children:[Object(i.jsx)("h5",{class:"mb-3",children:"The total amount of"}),Object(i.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(i.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0",children:["Temporary amount",Object(i.jsx)("span",{children:"RS:300"})]}),Object(i.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center px-0",children:["Shipping",Object(i.jsx)("span",{children:"Gratis"})]}),Object(i.jsxs)("li",{class:"list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("strong",{children:"The total amount of"}),Object(i.jsx)("strong",{children:Object(i.jsx)("p",{class:"mb-0",children:"(including VAT)"})})]}),Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:s})})]})]}),Object(i.jsx)("button",{type:"button",class:"btn btn-primary btn-block",onClick:function(){t((function(t){return Object(O.a)(Object(O.a)({},t),{},{cart:{cart:e.cart,totalPrice:s}})})),c.push("/Checkout")},children:"GO TO Checkout"})]})})})]})})}c(107);var F=function(){var e=v(),t=y(),c=Object(s.useState)([]),n=Object(a.a)(c,2),r=n[0],l=n[1],j=Object(s.useState)(!0),d=Object(a.a)(j,2),b=d[0],u=d[1];return Object(s.useEffect)((function(){h()({method:"get",url:p+"/getProducts",withCredentials:!0}).then((function(e){l(e.data.products)})).catch((function(e){console.log(e)}))}),[]),console.log("produt: ====== ya mera han",r),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("a",{className:"btn btn-outline-success",onClick:function(){u((function(e){return!e}))},style:{float:"right"},href:!0,children:[Object(i.jsx)("i",{class:"fas fa-cart-plus mr-3"}),Object(i.jsx)("span",{children:e.cart.length}),Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(i.jsx)(o.i,{children:!0===b?Object(i.jsxs)("main",{className:"container",children:[Object(i.jsx)("h1",{className:"text-center mt-1",children:"Products"}),Object(i.jsx)("div",{className:"row",children:r.map((function(e,c){return Object(i.jsx)("div",{className:"col-md-3 mt-3",children:Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("img",{className:"w-100",height:"200",src:e.productimages,alt:e.productname}),Object(i.jsx)("h3",{style:{textAlign:"center",marginTop:"10px"},children:e.productname}),Object(i.jsx)("p",{class:"card-text",children:e.description}),Object(i.jsxs)("div",{children:["PKR: ",e.price,"/Kg"]}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(e,c){console.log("index",c),console.log("cart is ",e),e.qty=1,t((function(t){var c,s=t.cart;return s=[].concat(Object(S.a)(s),[e]),c=t.cart.filter((function(t,c){return t._id===e._id})).length?Object(O.a)({},t):Object(O.a)(Object(O.a)({},t),{},{cart:s}),localStorage.setItem("cart",JSON.stringify(c.cart)),c}))}(e)},children:"Add To Cart"})]})},c)}))})]}):Object(i.jsx)(C,{})}),"===>"+JSON.stringify(e.cart)]})},E=c(43),I=c.n(E);var P=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(null),l=Object(a.a)(r,2),j=l[0],d=l[1],b=Object(s.useState)(""),u=Object(a.a)(b,2),O=u[0],m=u[1];return Object(s.useEffect)((function(){h()({method:"get",url:p+"/getorder",withCredentials:!0}).then((function(e){console.log("why status come in ===>",e.data.data),n(e.data.data),0===e.data.data.length&&m("no orders found")})).catch((function(e){console.log(e)}))}),[j]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.d,{children:Object(i.jsxs)(o.i,{children:[Object(i.jsx)("h1",{style:{textAlign:"center"},children:"My Orders"}),Object(i.jsxs)(o.j,{striped:!0,children:[Object(i.jsx)(o.l,{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"User ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Phone Number"}),Object(i.jsx)("th",{children:"Address"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{children:"Orders"}),Object(i.jsx)("th",{children:"Total Price"}),Object(i.jsx)("th",{children:"Date"}),Object(i.jsx)("th",{children:"Order Status"})]})}),Object(i.jsxs)(o.k,{children:[null===c.length?"loading":null,0===c.length?O:null,c&&c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:e._id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phonenumber}),Object(i.jsx)("td",{children:e.address}),Object(i.jsx)("td",{children:Object(i.jsx)("h5",{children:e.status})}),Object(i.jsx)("td",{children:e.orders.map((function(e,t){return Object(i.jsx)(i.Fragment,{children:e.cart.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.productname}),Object(i.jsxs)("td",{children:[e.qty," kg"]})]})})}))})}))}),Object(i.jsx)("td",{children:e.totalPrice}),Object(i.jsx)("td",{children:I()(e.createdOn).format("LLLL")}),Object(i.jsxs)("td",{children:[" ",Object(i.jsxs)("div",{class:"text-center pt-4",children:[Object(i.jsx)("button",{type:"button",class:"btn btn-light btn-sm mr-1 mb-2",id:"check",onClick:function(){var t;t=e._id,h()({method:"post",url:p+"/updateStatus",data:{id:t,status:"Order confirmed"},withCredentials:!0}).then((function(e){d(!j),alert(e.data.message)})).catch((function(e){console.log(e)}))},children:"Confirm Order"}),Object(i.jsx)("button",{type:"button",class:"btn btn-danger btn-sm px-3 mb-2 material-tooltip-main","data-toggle":"tooltip","data-placement":"top",title:"Add to wishlist",onClick:function(){var t;t=e._id,h()({method:"post",url:p+"/Ordercancel",data:{id:t,status:"Order Cancel"},withCredentials:!0}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))},children:Object(i.jsx)("i",{class:"fas fa-trash-alt"})})]})," "]})]},t)}))]})]})]})})})},A=c(116);var L=function(){Object(m.g)();var e=y();return Object(i.jsx)(A.a,{variant:"danger",onClick:function(){h()({method:"post",url:p+"/auth/logout",withCredentials:!0}).then((function(t){200===t.data.status&&(alert(t.data.message),e((function(e){return Object(O.a)(Object(O.a)({},e),{},{loginStatus:!1,role:"loggedout",user:null,cart:[]})})))}),(function(e){console.log(e.message)}))},children:"Logout"})},q=c(118),B=c(117);c(108),c.p;function R(){var e=Object(s.useState)(),t=Object(a.a)(e,2),c=t[0],n=(t[1],v());return console.log(c),Object(i.jsxs)("div",{children:[Object(i.jsx)(o.d,{children:Object(i.jsx)(o.i,{children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row justify-content-center",children:Object(i.jsxs)("div",{className:"col-md-6 mt-5",children:[Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Button Running");var t=document.getElementById("customFile"),c=document.getElementById("pName"),s=document.getElementById("price"),n=document.getElementById("description"),r=document.getElementById("stock"),l=new FormData;l.append("myFile",t.files[0]),l.append("productName",c.value),l.append("price",s.value),l.append("description",n.value),l.append("stock",r.value),h()({method:"post",url:p+"/admindashboard",data:l,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))},children:[Object(i.jsxs)("div",{className:"form-row",children:[Object(i.jsxs)("div",{className:"form-group col-md-6",children:[Object(i.jsx)("label",{htmlFor:"inputEmail4",children:"Product Name"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"pName",placeholder:"Name"})]}),Object(i.jsxs)("div",{className:"form-group col-md-6",children:[Object(i.jsx)("label",{htmlFor:"inputPassword4",children:"Price"}),Object(i.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"Price"})]})]}),Object(i.jsxs)("div",{className:"form-row",children:[Object(i.jsxs)("div",{className:"form-group col-md-6",children:[Object(i.jsx)("label",{htmlFor:"inputEmail4",children:"Stock"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"stock",placeholder:"Stock"})]}),Object(i.jsxs)("div",{className:"form-group col-md-6",children:[Object(i.jsx)("label",{htmlFor:"inputPassword4",children:"Description"}),Object(i.jsx)("input",{type:"text",className:"form-control",id:"description",placeholder:"Description"})]})]}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsxs)("div",{className:"custom-file",children:[Object(i.jsx)("input",{type:"file",className:"custom-file-input",id:"customFile"}),Object(i.jsx)("label",{className:"custom-file-label",for:"customFile",children:"Choose Image"})]})}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Confirm Order"})]}),Object(i.jsx)("br",{}),c?Object(i.jsx)("div",{class:"alert alert-success",role:"alert",children:c}):null]})})})})})}),"===>"+JSON.stringify(n)]})}var D=function(){var e=v();console.log(e.cart.totalPrice,"total price merii jan");var t=Object(s.useRef)(),c=Object(s.useRef)(),n=Object(s.useRef)();return Object(i.jsx)(o.i,{children:Object(i.jsx)(o.c,{md:"6",children:Object(i.jsxs)("form",{className:"formcenter",onSubmit:function(s){s.preventDefault(),h()({method:"post",url:p+"/order",data:{name:t.current.value,phonenumber:c.current.value,address:n.current.value,orders:e.cart,totalPrice:e.cart.totalPrice},withCredentials:!0}).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))},children:[Object(i.jsx)("p",{className:"h4 text-center mb-4",children:"Check Out Form"}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterNameEx",className:"grey-text",children:"Your name"}),Object(i.jsx)("input",{type:"text",className:"form-control",required:!0,ref:t,placeholder:"Your Name"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterConfirmEx",className:"grey-text",children:"Phone Number"}),Object(i.jsx)("input",{type:"text",className:"form-control",required:!0,ref:c,placeholder:"Phone Number"}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{htmlFor:"defaultFormRegisterConfirmEx",className:"grey-text",children:"Address"}),Object(i.jsx)("input",{type:"text",className:"form-control",required:!0,ref:n,placeholder:"Address"}),Object(i.jsx)("div",{className:"text-center mt-4",children:Object(i.jsx)(o.b,{color:"unique",type:"submit",children:"Confirm Order"})})]})})})};function T(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),l=Object(a.a)(r,2);l[0],l[1];return Object(s.useEffect)((function(){console.log("Running "),h()({method:"get",url:p+"/myorder",withCredentials:!0}).then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[]),Object(i.jsx)(o.d,{children:Object(i.jsxs)(o.i,{children:[Object(i.jsx)("h1",{style:{textAlign:"center"},children:"Order Detail"}),Object(i.jsxs)(o.j,{striped:!0,children:[Object(i.jsx)(o.l,{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{style:{color:"white"},children:"User ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Phone Number"}),Object(i.jsx)("th",{children:"Address"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{children:"Orders"}),Object(i.jsx)("th",{children:"Total Price"})]})}),Object(i.jsx)(o.k,{children:c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:e._id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phonenumber}),Object(i.jsx)("td",{children:e.address}),Object(i.jsx)("td",{children:e.status}),Object(i.jsx)("td",{children:e.orders.length}),Object(i.jsxs)("td",{children:["RS:",e.totalPrice]})]},t)}))})]})]})})}function _(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),l=Object(a.a)(r,2),j=l[0],d=l[1];return Object(s.useEffect)((function(){console.log("runnig"),h()({method:"get",url:p+"/ordercancel",withCredentials:!0}).then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[j]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(o.d,{children:Object(i.jsxs)(o.i,{children:[Object(i.jsx)("h1",{style:{textAlign:"center"},children:"My Orders"}),Object(i.jsxs)(o.j,{striped:!0,children:[Object(i.jsx)(o.l,{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"User ID"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Phone Number"}),Object(i.jsx)("th",{children:"Address"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{children:"Orders"}),Object(i.jsx)("th",{children:"Total Price"})]})}),Object(i.jsx)(o.k,{children:c.map((function(e,t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:e._id}),Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phonenumber}),Object(i.jsx)("td",{children:e.address}),Object(i.jsx)("td",{children:Object(i.jsx)("h5",{children:e.status})}),Object(i.jsx)("td",{children:e.orders.length}),Object(i.jsx)("td",{children:e.totalPrice}),Object(i.jsxs)("td",{children:[" ",Object(i.jsx)("div",{class:"text-center pt-4",children:Object(i.jsx)("button",{type:"button",id:"check",class:"btn btn-light btn-sm mr-1 mb-2",onClick:function(){var t;t=e._id,h()({method:"post",url:p+"/updateStatus",data:{id:t,status:"Order confirmed"},withCredentials:!0}).then((function(e){alert(e.data.message),d(!j)})).catch((function(e){console.log(e)}))},children:"Confirm Order"})})," "]})]},t)}))})]})]})})})}var Y=c.p+"static/media/logo.fb12fc56.png";var J=function(){var e=v();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("nav",{className:"sticky-top",children:Object(i.jsxs)(q.a,{bg:"dark",variant:"dark",children:[Object(i.jsx)("img",{src:Y,width:"80px",height:"50px"}),"admin"===e.role?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(B.a,{className:"mr-auto",children:[Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/",children:"Admin Dashboard"})}),Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/addproducts",children:"Add Product"})}),Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/orderhistory",children:"Order History"})})]}),Object(i.jsx)(L,{})]}):null,"user"===e.role?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(B.a,{className:"mr-auto",children:[Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/",children:"user Dashboard"})}),Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/myorders",children:"MY Order"})})]}),Object(i.jsx)(L,{})]}):null,"loggedout"===e.role?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(B.a,{className:"mr-auto",children:[Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/signup",children:"Signup"})}),Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/",children:"Home"})}),Object(i.jsx)(B.a.Link,{children:Object(i.jsx)(k.b,{to:"/login",children:"Login"})})]})}):null]})}),null===e.role?Object(i.jsx)(m.d,{children:Object(i.jsx)(m.b,{path:"*",children:Object(i.jsx)("h1",{children:"LOADING......"})})}):null,"loggedout"===e.role?Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.b,{exact:!0,path:"/",children:Object(i.jsx)(d,{})}),Object(i.jsx)(m.b,{path:"/signup",children:Object(i.jsx)(u,{})}),Object(i.jsx)(m.b,{path:"/login",children:Object(i.jsx)(w,{})}),Object(i.jsx)(m.b,{path:"*",children:Object(i.jsx)(m.a,{to:"/"})})]}):null,"user"===e.role?Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.b,{exact:!0,path:"/",children:Object(i.jsx)(F,{})}),Object(i.jsx)(m.b,{path:"/basket",children:Object(i.jsx)(C,{})}),Object(i.jsx)(m.b,{path:"/Checkout",children:Object(i.jsx)(D,{})}),Object(i.jsx)(m.b,{path:"/myorders",children:Object(i.jsx)(T,{})}),Object(i.jsx)(m.b,{path:"*",children:Object(i.jsx)(m.a,{to:"/"})})]}):null,"admin"===e.role?Object(i.jsxs)(m.d,{children:[Object(i.jsx)(m.b,{exact:!0,path:"/",children:Object(i.jsx)(P,{})}),Object(i.jsx)(m.b,{path:"/addproducts",children:Object(i.jsx)(R,{})}),Object(i.jsx)(m.b,{path:"/orderhistory",children:Object(i.jsx)(_,{})}),Object(i.jsx)(m.b,{path:"*",children:Object(i.jsx)(m.a,{to:"/"})})]}):null]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),r(e),l(e)}))};l.a.render(Object(i.jsx)(k.a,{children:Object(i.jsx)(N,{children:Object(i.jsx)(J,{})})}),document.getElementById("root")),U()},71:function(e,t,c){},72:function(e,t,c){},75:function(e,t,c){},87:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.9383415f.chunk.js.map