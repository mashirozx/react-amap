/*! For license information please see vendors-uiwjs.4e82eebc.chunk.js.LICENSE.txt */
(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[12],{780:function(e,t,i){e.exports=function(){"use strict";function e(e,t){var i=document.createElement("textarea");i.value=e,i.setAttribute("readonly",""),i.style={position:"absolute",left:"-9999px"},document.body.appendChild(i);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);i.select();var s=!1;try{s=!!document.execCommand("copy")}catch(a){s=!1}document.body.removeChild(i),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(s)}return e}()},781:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i(2),s=i(28),a=i(23),r=i(782),o=i(783),h=i(17),l=i(784),c=i(1238),g=i(0),d=i.n(g),p=(i(785),function(e){Object(l.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={dragging:!1},n.warpper=void 0,n.paneNumber=void 0,n.startX=void 0,n.startY=void 0,n.move=void 0,n.target=void 0,n.boxWidth=void 0,n.boxHeight=void 0,n.preWidth=void 0,n.nextWidth=void 0,n.preHeight=void 0,n.nextHeight=void 0,n.preSize=void 0,n.nextSize=void 0,n.onDragEnd=n.onDragEnd.bind(Object(h.a)(n)),n.onDragging=n.onDragging.bind(Object(h.a)(n)),n}return Object(o.a)(i,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var i=this.target.previousElementSibling,n=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,i&&(this.preWidth=i.clientWidth,this.preHeight=i.clientHeight),n&&(this.nextWidth=n.clientWidth,this.nextHeight=n.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,i=t.mode,n=t.onDragging,s=this.target.nextElementSibling,a=this.target.previousElementSibling,r=e.clientX-this.startX,o=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===i){if(this.preSize=this.preWidth+r>-1?this.preWidth+r:0,this.nextSize=this.nextWidth-r>-1?this.nextWidth-r:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),a&&s&&(a.style.width="".concat(this.preSize,"%"),s.style.width="".concat(this.nextSize,"%"))}if("vertical"===i&&this.preHeight+o>-1&&this.nextHeight-o>-1){if(this.preSize=this.preHeight+o>-1?this.preHeight+o:0,this.nextSize=this.nextHeight-o>-1?this.nextHeight-o:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;a&&s&&(a.style.height="".concat(this.preSize,"%"),s.style.height="".concat(this.nextSize,"%"))}n&&n(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,i=t.prefixCls,r=t.className,o=t.children,h=t.mode,l=t.visiable,c=t.lineBar,g=t.disable,p=(t.onDragEnd,t.onDragging,Object(a.a)(t,["prefixCls","className","children","mode","visiable","lineBar","disable","onDragEnd","onDragging"])),u=this.state.dragging,m=[i,r,"".concat(i,"-").concat(h),u?"dragging":null].filter(Boolean).join(" ").trim(),v=d.a.Children.toArray(o);return d.a.createElement("div",Object(n.a)({className:m},p,{ref:function(t){return e.warpper=t}}),d.a.Children.map(v,(function(t,n){var a=Object.assign({},t.props,{className:["".concat(i,"-pane"),t.props.className].filter(Boolean).join(" ").trim(),style:Object(s.a)({},t.props.style)}),r=!0===l||l&&l.includes(n+1)||!1,o={className:["".concat(i,"-bar"),c?"".concat(i,"-line-bar"):null,c?null:"".concat(i,"-large-bar")].filter(Boolean).join(" ").trim()};return(!0===g||g&&g.includes(n+1))&&(o.className=[o.className,g?"disable":null].filter(Boolean).join(" ").trim()),d.a.createElement(d.a.Fragment,null,0!==n&&r&&d.a.createElement("div",Object(s.a)({},o),d.a.createElement("div",{onMouseDown:e.onMouseDown.bind(e,n+1)})),d.a.cloneElement(t,Object(s.a)({},a)))})))}}]),i}(d.a.Component));p.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"}},785:function(e,t,i){}}]);
//# sourceMappingURL=vendors-uiwjs.4e82eebc.chunk.js.map