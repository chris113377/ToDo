(this.webpackJsonpassignment1=this.webpackJsonpassignment1||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(7),o=a.n(r),l=a(1),i=a(2),c=a(4),u=a(3),m=a(5),p=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={task:"",getData:a.props.getData},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"app-header"},s.a.createElement("input",{className:"input-bar",type:"text",name:"inputValue",id:"",placeholder:"Please type your task",onChange:function(e){return t.setState({task:e.target.value})}}),s.a.createElement("button",{onClick:function(){t.props.getData(t.state.task)},className:"input-button",type:"submit"},"Add"))}}]),e}(n.Component),d=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={task:a.props.task,completed:a.props.completed,id:a.props.id},a.whichListLayout=function(){return!1===a.state.completed?s.a.createElement("li",{style:{marginTop:"15px"}},s.a.createElement("span",{className:"listSpan"},a.state.task),s.a.createElement("button",{className:"listBtn1",onClick:function(){return a.props.deleteItem(a.state.id)}},"Delete"),s.a.createElement("button",{className:"listBtn2",onClick:function(){return a.props.finished(a.state.id)}},"Completed")):s.a.createElement("li",{style:{marginTop:"15px"}},s.a.createElement("span",null,a.state.task))},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.whichListLayout())}}]),e}(n.Component),h=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={todos:[]},a.isCompleted=function(t){var e=a.state.todos.map((function(e){return e.id===t&&(e.completed=!0),e}));a.setState({todos:e})},a.deleteListItem=function(t){var e=a.state.todos.filter((function(e){return e.id!==t}));a.setState({todos:e})},a.generateToDo=function(t){var e={id:Math.floor(1e3*Math.random()),task:t,completed:!1};a.state.todos.unshift(e),console.log(e);var n=a.state.todos;a.setState({todos:n})},a.displayUnfinishedList=function(){return s.a.createElement(s.a.Fragment,null,a.state.todos.map((function(t){if(!1===t.completed)return s.a.createElement(d,{key:t.id,id:t.id,task:t.task,completed:t.completed,finished:a.isCompleted,deleteItem:a.deleteListItem})})))},a.displayFinishedList=function(){return s.a.createElement(s.a.Fragment,null,a.state.todos.map((function(t){if(!0===t.completed)return s.a.createElement(d,{key:t.id,id:t.id,task:t.task,completed:t.completed})})))},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement(p,{getData:this.generateToDo}),s.a.createElement("div",{className:"no-task"},0===this.state.todos.length&&s.a.createElement("h1",null,"No ToDo's at the time!")),s.a.createElement("section",{className:"list1"},s.a.createElement("h3",null,"Need to finish:"),this.displayUnfinishedList()),s.a.createElement("section",{className:"list2"},s.a.createElement("h3",null,"All done:"),this.displayFinishedList()))}}]),e}(n.Component),f=(a(13),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"app-name"},"My To-Do List"),s.a.createElement(h,null))}}]),e}(n.Component));o.a.render(s.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f321cec3.chunk.js.map