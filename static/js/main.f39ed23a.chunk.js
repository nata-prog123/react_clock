(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),l=n(4),s=n(1),d=n(0),u=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timerId=0,e.handleClick=function(){var t=new Date;e.setState({today:t})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({today:new Date}),console.info(e.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;t!==e.clockName&&window.console.debug("Renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.today,t=this.props.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t}),Object(d.jsx)("span",{children:" time is "}),Object(d.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(s.Component);n(13);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.handleMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",this.handleMenu),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.addEventListener("contextmenu",this.handleMenu),document.addEventListener("click",this.handleClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(u,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f39ed23a.chunk.js.map