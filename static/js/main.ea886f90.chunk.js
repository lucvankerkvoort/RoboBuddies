(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s={searchField:""},i={isPending:!1,robots:[],error:""},l=n(13),u=n(5),h=n(15),d=n(1),E=(n(26),n(3)),p=n(4),b=n(7),m=n(6),f=function(e){var t=e.robots;return a.a.createElement("div",{className:"card-section"},t.map((function(e,t){var n=e.id,r=e.name,o=e.email;return a.a.createElement("div",{id:n,className:"card",key:t},a.a.createElement("img",{src:"https://robohash.org/".concat(n),alt:"robots",width:"200px",key:t}),a.a.createElement("div",null,a.a.createElement("h2",null,r),a.a.createElement("p",null,o)))})))},O=function(e){var t=e.search;return a.a.createElement("div",null,a.a.createElement("input",{type:"search",placeholder:"search robots",onChange:t}))},g=function(e){return a.a.createElement("div",{style:{overflow:"scroll",height:"700px"}},e.children)},v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e.componentDidCatch=function(t,n){e.setState({hasError:!0})},e}return Object(p.a)(n,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops... Something went wrong"):this.props.children}}]),n}(a.a.Component),_=(n(27),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(E.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){e.props.onRequestRobots()},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"RoboFriends"),a.a.createElement(O,{search:n}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(f,{robots:c}))))}}]),n}(a.a.Component)),y=Object(u.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"UPDATE_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"UPDATE_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"UPDATE_ROBOTS_FAIL",payload:t})}))}))}}}))(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(d.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"UPDATE_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"UPDATE_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"UPDATE_ROBOTS_FAIL":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=Object(l.createLogger)(),R=Object(d.d)(S,Object(d.a)(h.a,w),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:R},a.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.ea886f90.chunk.js.map