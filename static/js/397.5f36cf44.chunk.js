"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[397],{2397:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var a,r,o,i,s,d,l=t(168),f=t(7691),c=f.ZP.h2(a||(a=(0,l.Z)(["\n  font-family: sans-serif;\n  font-size: 30px;\n  line-height: 1.15;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n"]))),u=t(184),p=function(n){var e=n.title,t=n.children;return(0,u.jsxs)("section",{children:[(0,u.jsx)(c,{children:e}),t]})},x=f.ZP.label(r||(r=(0,l.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.15;\n"]))),m=(f.ZP.input(o||(o=(0,l.Z)(["\n  all: unset;\n  display: flex;\n  border: 2px solid #deaf85;\n  ","\n  padding: 15px;\n  font-size: 20px;\n  &:focus-visible {\n    border-radius: 4px;\n    border: 3px solid lightblue;\n  }\n"])),""),t(9434)),h=t(7574),b=t(2007),g=t.n(b),Z=t(6417),v=function(){var n=(0,m.I0)();return(0,u.jsx)(Z.Z,{margin:"normal",fullWidth:!0,id:"name",label:"Username",name:"name",autoFocus:!0,onChange:function(e){n((0,h.T)(e.currentTarget.value))},placeholder:"Search"})};x.propTypes={filter:g().string};var y=f.ZP.ul(i||(i=(0,l.Z)(["\n  list-style-type: none;\n  margin: auto;\n  padding: 0;\n  width: 450px;\n"]))),j=f.ZP.li(s||(s=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 25px;\n  line-height: 1.15;\n  padding: 10px 0;\n  letter-spacing: 0.05em;\n"]))),w=f.ZP.button(d||(d=(0,l.Z)(["\n  box-shadow: inset 0px 0px 12px 3px #ffffff;\n  background: linear-gradient(to bottom, #deaf85 5%, #deaf85 100%);\n  background-color: #deaf85;\n  border-radius: 4px;\n  border: 2px solid #deaf85;\n  display: inline-block;\n  cursor: pointer;\n  color: #212121;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 16px 16px;\n  text-decoration: none;\n  &:hover {\n    background: linear-gradient(to bottom, #dfaf98 5%, #dfaf98 100%);\n    background-color: #212121;\n    color: #ffffff;\n  }\n"]))),k=t(3475),P=t(6916),C=function(n){return n.contacts.items},z=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},A=function(n){return n.filter},L=((0,P.P1)([C,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),function(){var n=(0,m.v9)(C),e=(0,m.v9)(A),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})),a=(0,m.I0)();if(t)return(0,u.jsx)(y,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,u.jsxs)(j,{children:[t,": ",r,(0,u.jsx)(w,{type:"button",onClick:function(){return a((0,k.GK)(e))},children:"Delete"})]},e)}))})});y.propTypes={contacts:g().arrayOf(g().exact({id:g().string.isRequired,name:g().string.isRequired,number:g().number.isRequired}))};var I,T,S,q,R,F,G=t(5705),N=t(2797),U=(0,f.ZP)(G.l0)(I||(I=(0,l.Z)(["\n  border: 2px solid #deaf85;\n  width: 450px;\n  display: block;\n  padding: 15px;\n  margin: auto;\n"]))),V=(0,f.ZP)(G.Bc)(T||(T=(0,l.Z)(["\n  color: tomato;\n"]))),B=f.ZP.label(S||(S=(0,l.Z)(["\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.15;\n"]))),E=(0,f.ZP)(G.gN)(q||(q=(0,l.Z)(["\n  all: unset;\n  display: flex;\n  border: 2px solid #deaf85;\n  margin: 10px 0;\n  padding: 15px;\n  font-size: 20px;\n  &:focus-visible {\n    border-radius: 4px;\n    border: 3px solid lightblue;\n  }\n"]))),J=f.ZP.button(R||(R=(0,l.Z)(["\n  box-shadow: inset 0px 0px 12px 3px #ffffff;\n  background: linear-gradient(to bottom, #deaf85 5%, #deaf85 100%);\n  background-color: #ededed;\n  border-radius: 4px;\n  border: 2px solid #deaf85;\n  display: inline-block;\n  cursor: pointer;\n  color: #212121;\n  font-family: Arial;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 16px 37px;\n  text-decoration: none;\n  margin: 10px 0;\n  &:hover {\n    background: linear-gradient(to bottom, #dfaf98 5%, #dfaf98 100%);\n    background-color: #212121;\n    color: #ffffff;\n  }\n"]))),K=RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{1,3}\\)[ \\-]*)|([0-9]{1,4})[ \\-]*)*?[0-9]{1,4}?[ \\-]*[0-9]{1,9}?$/),$=N.Ry().shape({name:N.Z_().required().min(3).max(16).matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:N.Z_().required().min(6).max(10).matches(K,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),D={name:"",number:""},M=function(){var n=(0,m.v9)(C),e=(0,m.I0)();return(0,u.jsx)(G.J9,{initialValues:D,onSubmit:function(t,a){var r=a.resetForm;n.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):e((0,k.uK)(t)),r()},validationSchema:$,children:(0,u.jsxs)(U,{autoComplete:"off",children:[(0,u.jsxs)(B,{children:["Name",(0,u.jsx)(E,{type:"text",name:"name"}),(0,u.jsx)(V,{component:"div",name:"name"})]}),(0,u.jsxs)(B,{children:["Number",(0,u.jsx)(E,{type:"tel",name:"number"}),(0,u.jsx)(V,{component:"div",name:"number"})]}),(0,u.jsx)(J,{type:"submit",children:"Add contact"})]})})},O=f.ZP.div(F||(F=(0,l.Z)(["\n  margin: 16px;\n"]))),W=t(2791);function H(){var n=(0,m.I0)(),e=(0,m.v9)(z),t=(0,m.v9)(_),a=(0,m.v9)(C),r=(0,m.v9)(A);return(0,W.useEffect)((function(){n((0,k.yF)())}),[n]),(0,u.jsxs)(O,{children:[(0,u.jsx)(p,{title:"Phonebook"}),(0,u.jsx)(M,{}),(0,u.jsxs)(p,{title:"Contacts",children:[(0,u.jsx)(v,{}),e&&!t&&(0,u.jsx)("b",{children:"Loading..."}),a.length>0&&(0,u.jsx)(L,{contacts:r})]})]})}}}]);
//# sourceMappingURL=397.5f36cf44.chunk.js.map