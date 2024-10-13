(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(26),r=n.n(a),s=n(10),c=n(4),d=n(12),l=n(15),p=n(14),h=n(13),m=n(2),u=m.a.div.withConfig({displayName:"Container",componentId:"sc-16hnsit-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;width:100vw;background-image:url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025686.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid-rr-similar');background-size:cover;"]),b=m.a.form.withConfig({displayName:"Form",componentId:"sc-16hnsit-1"})(["display:flex;flex-direction:column;height:60vh;width:80vw;margin-bottom:20px;background-color:#ffffff;border-radius:10px;padding:20px;"]),f=m.a.div.withConfig({displayName:"InputContainer",componentId:"sc-16hnsit-2"})(["display:flex;flex-direction:column;align-items:stretch;margin-bottom:10px;"]),j=m.a.input.withConfig({displayName:"InputElement",componentId:"sc-16hnsit-3"})(["border:1px solid;border-radius:5px;height:30px;padding:5px;"]),g=m.a.button.withConfig({displayName:"SubmitBtn",componentId:"sc-16hnsit-4"})(["align-self:flex-start;background-color:#096feb;border:0;border-radius:5px;color:#ffffff;height:30px;width:60px;"]),x=m.a.h1.withConfig({displayName:"Heading",componentId:"sc-16hnsit-5"})(["font-weight:500;"]),y=n(1),w=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,t,arguments)}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return Object(y.jsxs)(u,{children:[Object(y.jsxs)(b,{action:"https://file-upload-api-3.onrender.com/upload",method:"POST",encType:"multipart/form-data",children:[Object(y.jsx)(x,{children:"User Submission Form"}),Object(y.jsxs)(f,{children:[Object(y.jsx)("label",{htmlFor:"nameInput",children:"Name:"}),Object(y.jsx)(j,{htmlFor:"nameInput",type:"text",placeholder:"name",name:"name"})]}),Object(y.jsxs)(f,{children:[Object(y.jsx)("label",{htmlFor:"usernameInput",children:"Username:"}),Object(y.jsx)(j,{htmlFor:"usernameInput",type:"text",placeholder:"social media handle",name:"socialMediaHandle"})]}),Object(y.jsx)("input",{type:"file",name:"profileImage"}),Object(y.jsx)("br",{}),Object(y.jsx)(g,{type:"submit",children:"Submit"})]}),Object(y.jsx)(s.b,{to:"/admin-login",children:"Login as admin"})]})}}])}(i.Component),O=w,v=n(16),I=n.n(v),C=m.a.div.withConfig({displayName:"Container",componentId:"sc-15vehyc-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;width:100vw;background-image:url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025686.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid-rr-similar');background-size:cover;"]),k=m.a.form.withConfig({displayName:"Form",componentId:"sc-15vehyc-1"})(["display:flex;flex-direction:column;height:60vh;width:80vw;margin-bottom:20px;background-color:#ffffff;border-radius:10px;padding:20px;"]),N=m.a.div.withConfig({displayName:"InputContainer",componentId:"sc-15vehyc-2"})(["display:flex;flex-direction:column;align-items:stretch;margin-bottom:10px;"]),S=m.a.input.withConfig({displayName:"InputElement",componentId:"sc-15vehyc-3"})(["border:1px solid;border-radius:5px;height:30px;padding:5px;"]),E=m.a.button.withConfig({displayName:"LoginBtn",componentId:"sc-15vehyc-4"})(["align-self:flex-start;background-color:#096feb;border:0;border-radius:5px;color:#ffffff;height:30px;width:60px;"]),L=m.a.h1.withConfig({displayName:"Heading",componentId:"sc-15vehyc-5"})(["font-weight:500;"]),A=function(e){function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=Object(p.a)(this,t,[].concat(i))).state={name:"",password:"",showError:!1},e.onChangeName=function(t){e.setState({name:t.target.value,showError:!1})},e.onChangePassword=function(t){e.setState({password:t.target.value,showError:!1})},e.submitForm=function(t){t.preventDefault();var n=e.state,i=n.name,o=n.password;""!==i&&""!==o?(I.a.set("jwt_token","access_token",{expires:1}),e.props.history.replace("/admin-portal")):e.setState({showError:!0})},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.password,i=e.showError;return void 0!==I.a.get("jwt_token")?Object(y.jsx)(c.a,{to:"/admin-portal"}):Object(y.jsx)(C,{children:Object(y.jsxs)(k,{onSubmit:this.submitForm,children:[Object(y.jsx)(L,{children:"Admin Login"}),Object(y.jsxs)(N,{children:[Object(y.jsx)("label",{htmlFor:"nameInput",children:"Name:"}),Object(y.jsx)(S,{onChange:this.onChangeName,value:t,id:"nameInput",type:"text",placeholder:"name"})]}),Object(y.jsxs)(N,{children:[Object(y.jsx)("label",{htmlFor:"passwordInput",children:"Password:"}),Object(y.jsx)(S,{onChange:this.onChangePassword,value:n,id:"passwordInput",type:"password",placeholder:"password"})]}),Object(y.jsx)(E,{type:"submit",children:"Login"}),i&&Object(y.jsx)("p",{children:"*Enter valid credentials"})]})})}}])}(i.Component),_=A,F=n(24),U=n(30),D=n(31),P=n.n(D),H=m.a.div.withConfig({displayName:"Container",componentId:"sc-1b0o7yu-0"})(["background-image:url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025686.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid-rr-similar');background-size:cover;min-height:100vh;padding:25px;display:flex;flex-direction:column;align-items:stretch;"]),M=m.a.h1.withConfig({displayName:"Heading",componentId:"sc-1b0o7yu-1"})(["font-weight:500;"]),B=m.a.ul.withConfig({displayName:"UploadingsList",componentId:"sc-1b0o7yu-2"})(["padding-left:25px;padding-right:25px;list-style-type:none;width:100%;text-align:center;margin-top:0;min-height:70vh;background-color:#e8ebe9;"]),T=m.a.li.withConfig({displayName:"UploadedHead",componentId:"sc-1b0o7yu-3"})(["display:flex;justify-content:space-around;width:100%;background-color:#f5f7f6;"]),G=m.a.li.withConfig({displayName:"UploadedItem",componentId:"sc-1b0o7yu-4"})(["display:flex;justify-content:space-around;align-items:center;width:100%;border-top:1px solid;"]),z=m.a.h3.withConfig({displayName:"HeadParams",componentId:"sc-1b0o7yu-5"})(["width:33%;"]),J=m.a.button.withConfig({displayName:"LogoutBtn",componentId:"sc-1b0o7yu-6"})(["background-color:#096feb;border:0;border-radius:5px;color:#ffffff;height:30px;width:60px;"]),R=m.a.div.withConfig({displayName:"TopSection",componentId:"sc-1b0o7yu-7"})(["display:flex;justify-content:space-between;align-items:center;"]),q=m.a.div.withConfig({displayName:"BottomSection",componentId:"sc-1b0o7yu-8"})(["display:flex;justify-content:center;align-items:center;"]),K="INITIAL",Q="LOADING",V="SUCCESS",W=function(e){function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=Object(p.a)(this,t,[].concat(i))).state={data:[],status:K},e.getUploads=Object(U.a)(Object(F.a)().mark((function t(){var n,i;return Object(F.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({status:Q}),t.next=4,fetch("https://file-upload-api-3.onrender.com/uploads");case 4:return n=t.sent,t.next=7,n.json();case 7:(i=t.sent).splice(0,3),e.setState({data:i,status:V});case 10:case"end":return t.stop()}}),t)}))),e.renderData=function(){var t=e.state.data;return Object(y.jsxs)(B,{children:[Object(y.jsxs)(T,{children:[Object(y.jsx)(z,{children:"NAME"}),Object(y.jsx)(z,{children:"USERNAME"}),Object(y.jsx)(z,{children:"UPLOADED MEDIA"})]}),t.map((function(e){return Object(y.jsxs)(G,{children:[Object(y.jsx)("p",{children:e.name}),Object(y.jsx)("p",{children:e.username}),Object(y.jsx)("a",{href:"https://file-upload-api-3.onrender.com/uploads/".concat(e.image),target:"_blank",rel:"noreferrer",children:"media"})]})}))]})},e.renderLoader=function(){return Object(y.jsx)("div",{children:Object(y.jsx)(P.a,{type:"ThreeDots",color:"#0b69ff",height:"50",width:"50"})})},e.onLogout=function(){I.a.remove("jwt_token"),e.props.history.replace("/admin-login")},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getUploads()}},{key:"render",value:function(){var e=this.state.status;return void 0===I.a.get("jwt_token")?Object(y.jsx)(c.a,{to:"/admin-login"}):Object(y.jsxs)(H,{children:[Object(y.jsxs)(R,{children:[Object(y.jsx)(M,{children:"Admin Portal"}),Object(y.jsx)(J,{onClick:this.onLogout,type:"button",children:"Logout"})]}),Object(y.jsx)(q,{children:e===V?this.renderData():this.renderLoader()})]})}}])}(i.Component),X=W,Y=(n(61),function(){return Object(y.jsxs)(c.d,{children:[Object(y.jsx)(c.b,{exact:!0,path:"/",component:O}),Object(y.jsx)(c.b,{path:"/admin-login",component:_}),Object(y.jsx)(c.b,{path:"/admin-portal",component:X})]})});r.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(s.a,{children:Object(y.jsx)(Y,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3c25dbc8.chunk.js.map