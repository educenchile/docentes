"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[171],{36279:(e,t,n)=>{n.r(t),n.d(t,{SlideThumbnail:()=>Ae,default:()=>Se});var o=n(18659),r=n(96421),a=n(83083);const i={position:"absolute",left:0,right:0,top:0,bottom:0,contain:"strict"},l=(0,r.Pi)((e=>{var t,n,r,a;let{backgroundImage:l,backgroundImageOpacity:s,backgroundImageSize:d,backgroundImagePosition:c,backgroundColor:u,onClick:m}=e;const g=m;return o.createElement(o.Fragment,null,o.createElement("div",{onClick:g,style:{...i,backgroundColor:u},role:"button",tabIndex:g?0:void 0,"aria-label":g?"slide background":void 0}),l&&o.createElement("div",{style:{...i,opacity:s,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===c||void 0===c?void 0:c.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===c||void 0===c?void 0:c.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(r=null===d||void 0===d?void 0:d.Width)&&void 0!==r?r:0," ").concat(null!==(a=null===d||void 0===d?void 0:d.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(l),"')"),pointerEvents:"none"}}))})),s=(0,o.createContext)(void 0);const d="CHART_DATA_TABLE",c=["onClick","onMouseOver","onMouseOut","onMouseEnter","onMouseLeave"];function u(e,t,n){return(0,o.useMemo)((()=>{const o={};return c.forEach((r=>{const a=e[r];o[r]=a?e=>{e.stopPropagation(),e.preventDefault(),a(t,n)}:void 0})),o}),[e,t,n])}var m=n(16229),g=n(50968);const h=g.ZP.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,backgroundColor:t.brand.primary(.15),"& img":{border:"1px solid ".concat(t.brand.primary()),width:"100%",height:"100%",userSelect:"none"}}})),v=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=u(i,n,r);return o.createElement(h,{ref:t,style:{width:"100%",height:"100%",...(0,m.g)(n),...a},...l})})));var w=n(55239),f=n(56476),p=n(47170),b=n(21814),y=n(7850);const k=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n,r;let{item:a,style:i,parentItem:l,documentConfig:d,...c}=e;const{delta:g,slideItems:h,slideSize:v}=function(){const e=(0,o.useContext)(s);if(!e)throw new Error("FakeItems context missing");return e}(),k=u(c,a,l),I=null!==(n=a.data)&&void 0!==n?n:a,{color:C,curveTos:A,dash:S,headType:x,lineCap:E,opacity:T,source:P,tailType:B,target:z,thickness:q}=I,{sourceRect:R,targetRect:F}=(0,b.n)(P,z,"logical")(h),L=null!==(r=a.dataPositionAndSizeWithoutCurveTos)&&void 0!==r?r:(0,f.U)(P,z,"logical")(h),Z=(0,p.Av)(A,L),O=(0,y.l)({slideSize:v,parentItem:l}),_=(0,m.g)(a);return o.createElement(w.E,{color:C,curveTos:Z,dash:S,delta:g,documentConfigColors:null===d||void 0===d?void 0:d.colors,eventHandlers:k,headType:x,itemStyle:_,lineCap:E,ref:t,opacity:T,sourceRect:R,style:i,tailType:B,targetRect:F,thickness:q,viewBox:O})})));var I=n(14091);const C=o.lazy((()=>Promise.all([n.e(788),n.e(482)]).then(n.bind(n,18995)))),A=e=>o.createElement(o.Suspense,{fallback:null},o.createElement(C,{...e})),S=o.lazy((()=>n.e(323).then(n.bind(n,31629)))),x=e=>o.createElement(o.Suspense,{fallback:null},o.createElement(S,{...e})),E=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,documentConfig:i,...l}=e;const s=u(l,n,r),{Data:c,Id:g,Options:h,Size:v,ChartType:w,Type:f,RawData:p,tableRawData:b,Version:y}=n.data||n,k=w||f,C=k===d,S=y>=1,E=y>=2?I.X.LabelsFontSize:void 0,T=y<2,P=y>=3?h.TextColor:void 0,B={pointerEvents:"none"};return o.createElement("div",{ref:t,style:{...(0,m.g)(n),...a},role:"button",tabIndex:void 0===s.onClick?0:void 0,...s},C?o.createElement(x,{cellStyles:h.CellStyles,data:b||p,id:g,tableStyles:h.TableStyles,normalWordBreak:S,style:B}):o.createElement(A,{colors:[...h.Colors],data:c,enableAnimation:!1,height:v.Height,id:g,invertYAxis:h.InvertYAxis,prefix:h.Prefix,showAxisLabels:h.AxisLabels,showLegend:h.Legend,showTooltip:h.Tooltip,suffix:h.Suffix,textColor:h.TextColor,type:k,width:v.Width,documentConfig:i,lineVariant:h.LineVariant,showLineMarkers:h.ShowMarkers,labelsFontSize:E,showTitles:T,colorAllTexts:P,style:B}))})));function T(e,t,n){var o,r,a,i,l,s,d,c;return Number(null!==(o=null!==(r=null!==(a=e(t))&&void 0!==a?a:null===(i=t.data)||void 0===i?void 0:i.ZIndex)&&void 0!==r?r:t.ZIndex)&&void 0!==o?o:0)-Number(null!==(l=null!==(s=null!==(d=e(n))&&void 0!==d?d:null===(c=n.data)||void 0===c?void 0:c.ZIndex)&&void 0!==s?s:n.ZIndex)&&void 0!==l?l:0)}const P=g.ZP.div((e=>{let{theme:{size:t}}=e;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),B=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,getZIndexOfItem:r,style:a,canBeTranslated:i,documentConfig:l,t:s,parentItem:d,renderItem:c,...g}=e;const h=u(g,n,d),v=[...n.groupedItems].sort(((e,t)=>T(r,e,t)));return o.createElement(P,{ref:t,style:{...(0,m.g)(n),...a},...h},v.map((e=>o.createElement(be,{key:e.Id,itemType:e.type,item:e,parentItem:n,getZIndexOfItem:r,canBeTranslated:i,documentConfig:l,t:s,events:g,renderItem:c}))))})));var z=n(57423);var q=n(66203),R=n(69553);const F=e=>{let{className:t,color:n,height:r,size:a,style:i,width:l,...s}=e;return o.createElement(R.Z,{className:t,color:n,height:r,size:a,style:i,viewBox:"0 0 16 16",width:l,...s},o.createElement("g",null,o.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))},L=g.ZP.div((e=>{let{theme:{color:t,size:n,shadow:o}}=e;return{background:t.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.neutral.white(),borderRadius:n.units(.33),padding:n.units(.5),boxShadow:o.short}})),Z=(0,g.ZP)(F)((()=>({width:"50%",height:"50%"}))),O=g.ZP.p((e=>{let{theme:{size:t},$showTitle:n}=e;return{display:n?"block":"none",fontSize:t.units(3)}})),_=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n;let{item:r,parentItem:a,style:i,...l}=e;const s=u(l,r,a),d=null!==(n=r.Source)&&void 0!==n?n:r.data.Source,[c,g]=(0,o.useState)(null),[h,v]=(0,o.useState)(!1),[w,f]=(0,o.useState)(null),p=(0,o.useRef)(!1),b=(0,o.useRef)(/\.(gif)|data:image\/gif/.test(d)),y=(0,o.useCallback)((()=>{try{!function(e,t,n){const o=new Image;let r=n;n||(r={mimeType:"image/png"}),o.onload=()=>{try{var e;const n=document.createElement("canvas");n.width=o.width,n.height=o.height;const a=n.getContext("2d");a&&a.drawImage(o,0,0);const i=n.toDataURL(null===(e=r)||void 0===e?void 0:e.mimeType);t(null,i)}catch(n){t(!0,null)}},o.onerror=()=>{t(!0,null)},o.setAttribute("crossOrigin","anonymous"),o.src=(0,z.F)(e,{v:"anonymous"})}(d,((e,t)=>{p.current&&(e?v(!0):(g(t),f(d)))}))}catch(e){console.warn(e),v(!0)}}),[d]);if((0,o.useEffect)((()=>(p.current=!0,()=>{p.current=!1})),[]),(0,o.useEffect)((()=>{b.current&&y()}),[y]),(0,o.useEffect)((()=>{b.current?!b.current||c&&w===d||y():(g(null),v(!1),f(null))}),[d,c,w,y]),b.current&&!c&&!h)return null;const k=r.data||r,I=parseInt(k.Size.Height,10)<200;return o.createElement("div",{ref:t,style:{overflow:"hidden",...(0,m.g)(r),...i},className:k.Frame,role:"button",tabIndex:void 0===s.onClick?0:void 0,...s},h?o.createElement(L,null,o.createElement(Z,null),o.createElement(O,{$showTitle:!I},"GIF")):o.createElement("div",{style:{position:"absolute",top:"".concat(k.Offset.top,"%"),left:"".concat(k.Offset.left,"%"),right:"".concat(k.Offset.right,"%"),bottom:"".concat(k.Offset.bottom,"%")}},o.createElement("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,q.s)(k.Transformations),objectFit:k.objectFit},src:c||d,alt:k.Name})))})));var W=n(79057),M=n(50285);const N=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:d,hasDefaultAnimation:c=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1}=e;const{Question:h,Answers:v,Appearance:w,Id:f}=t,p=v.filter((e=>{let{Image:t}=e;return t.length>0}));return o.createElement(M.h,{type:W.w.Image,itemId:f,question:h||d("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:c,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:w,answers:p,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,dataCy:"imageInteractiveQuestionItem"})};N.Container=M.h.Container,N.Question=M.h.Question,N.Subtitle=M.h.Subtitle,N.Answers=M.h.Answers,N.Answer=M.h.Answer,N.Feedback=M.h.Feedback,N.Button=M.h.Button;const Q=(0,r.Pi)(N);var H=n(68670);const D=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:d,hasDefaultAnimation:c=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1}=e;const{Question:h,Answers:v,Appearance:w,Id:f}=t,p=v.filter((e=>{let{Text:t}=e;return t.length>0})),b=d("__new.editor.content.questionMultiple");return o.createElement(M.h,{type:W.w.Quiz,itemId:f,question:h||b,disabled:n,showAnswersIcon:i,hasDefaultAnimation:c,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:w,answers:p,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,dataCy:"quizInteractiveQuestionItem"})};D.Container=M.h.Container,D.Question=M.h.Question,D.Subtitle=M.h.Subtitle,D.Answers=M.h.Answers,D.Answer=M.h.Answer,D.Feedback=M.h.Feedback,D.Button=M.h.Button;const V=(0,r.Pi)(D);var j=n(61789);const G=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:d,hasDefaultAnimation:c=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1,showResultPreview:h=!1}=e;const{Question:v,Answers:w,Appearance:f,Id:p}=t,b=w.filter((e=>{let{Text:t}=e;return t.length>0})),y=d("__new.editor.content.questionMultiple");return o.createElement(M.h,{type:W.w.Survey,itemId:p,question:v||y,disabled:n,showAnswersIcon:i,hasDefaultAnimation:c,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:f,answers:b,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,showResultPreview:h,showResultEnabled:t.Options.ShowResults,dataCy:"surveyInteractiveQuestionItem"})};G.Container=M.h.Container,G.Question=M.h.Question,G.Subtitle=M.h.Subtitle,G.Answers=M.h.Answers,G.Answer=M.h.Answer,G.Feedback=M.h.Feedback,G.Button=M.h.Button;const U=(0,r.Pi)(G),X=e=>{let{item:t,disabled:n,feedbackText:r,showAnswersIcon:a,feedbackColor:i,documentColors:l,t:s,hasDefaultAnimation:d=!1,answerSelectedPreview:c=!1,selectedAnswerIds:u,showCorrectAnswers:m=!1}=e;const{Question:g,Answers:h,Appearance:v,Id:w}=t;return o.createElement(M.h,{type:W.w.TrueFalse,itemId:w,question:g||s("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:d,documentColors:l,feedbackText:r,feedbackColor:i,appearance:v,answers:h,answerSelectedPreview:c,selectedAnswerIds:u,showCorrectAnswers:m,dataCy:"trueFalseInteractiveQuestionItem"})};X.Container=M.h.Container,X.Question=M.h.Question,X.Answers=M.h.Answers,X.Answer=M.h.Answer,X.Feedback=M.h.Feedback,X.Button=M.h.Button;const Y=(0,r.Pi)(X),$=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,t:i,selectedAnswerIds:l,showCorrectAnswers:s=!1,documentConfig:d,...c}=e;const g=u(c,n,r),{Frame:h,Type:v}=n.data||n;let w;switch(v){case W.w.Quiz:w=o.createElement(V,{key:n.Id,item:n.data||n,t:i,selectedAnswerIds:l,showCorrectAnswers:s,disabled:s,documentColors:null===d||void 0===d?void 0:d.colors});break;case W.w.OpenAnswer:w=o.createElement(H.g,{key:n.Id,item:n.data||n,t:i,userAnswer:null!==l&&void 0!==l&&l.length?l[0]:void 0,disabled:s,documentColors:null===d||void 0===d?void 0:d.colors});break;case W.w.TrueFalse:w=o.createElement(Y,{key:n.Id,item:n.data||n,t:i,selectedAnswerIds:l,showCorrectAnswers:s,disabled:s,documentColors:null===d||void 0===d?void 0:d.colors});break;case W.w.Image:w=o.createElement(Q,{key:n.Id,item:n.data||n,t:i,selectedAnswerIds:l,showCorrectAnswers:s,disabled:s,documentColors:null===d||void 0===d?void 0:d.colors});break;case W.w.Sort:w=o.createElement(j.X,{key:n.Id,item:n.data||n,t:i,showCorrectAnswers:s,disabled:s,documentColors:null===d||void 0===d?void 0:d.colors});break;case W.w.Survey:w=o.createElement(U,{key:n.Id,item:n.data||n,t:i,selectedAnswerIds:l});break;default:throw new Error("InteractiveQuestion type ".concat(v," does not have any component associated"))}return o.createElement("div",{ref:t,style:{...(0,m.g)(n),overflow:"hidden",...a},className:h,role:"button",tabIndex:void 0===g.onClick?0:void 0,...g},w)}))),J=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=u(i,n,r),s=n.data||n;return o.createElement("div",{ref:t,className:"pin-item",style:{...(0,m.g)(n),zIndex:99999,maxWidth:"100%",width:"100%",height:"100%",...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement("img",{style:{width:"32px",height:"32px"},src:s.Source,alt:s.Name}))})));var K=n(67125);const ee=g.ZP.div((e=>{let{theme:{color:t,size:n}}=e;return{background:t.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.neutral.white(),borderRadius:n.units(2/3),padding:n.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(n.units(1)," 0 ").concat(t.neutral.black(.2)),"& svg":{width:n.units(5.5)}}})),te=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=u(i,n,r),s=n.data||n,d=parseInt(s.Size.Height,10)<50?"80%":"100%";return o.createElement("div",{ref:t,style:{...(0,m.g)(n),...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement(ee,null,o.createElement(K.Z,{height:d})))}))),ne=g.ZP.div({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),oe=/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),re=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n,r;let{item:a,parentItem:i,style:l,...s}=e;const d=u(s,a,i),c=(0,o.useRef)(null),g=null!==(n=a.data)&&void 0!==n?n:a,h=null===(r=g.Colors)||void 0===r?void 0:r[0],v=g.sourceSvg||g.SourceSvg;(0,o.useLayoutEffect)((()=>{const e=c.current;e&&(e.querySelectorAll(".color1").forEach((e=>{e.style.fill=h})),oe&&e.querySelectorAll("linearGradient").forEach((e=>{const t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[v,h]);const w=(0,o.useCallback)((e=>{c.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return o.createElement(ne,{className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:v},ref:w,style:{...(0,m.g)(a),backgroundColor:g.Background,...l},...d})})));var ae=Array.isArray;function ie(e){var t,n,o=typeof e,r="";if("string"===o||"number"===o)return e||"";if(ae(e)&&e.length>0)for(t=0,n=e.length;t<n;t++)""!==(o=ie(e[t]))&&(r+=(r&&" ")+o);else for(t in e)e.hasOwnProperty(t)&&e[t]&&(r+=(r&&" ")+t);return r}var le=n(40395),se=n(37993),de=n(75324);const ce=g.ZP.div({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(e=>{let{theme:{color:t,size:n}}=e;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(t.neutral.black(.5))},"&.interparagraph_medium":{...de.oB.mixins.setInterparagraph(n.units(1))},"&.interparagraph_big":{...de.oB.mixins.setInterparagraph(n.units(2.25))},"& p":{margin:"0 0 ".concat(n.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:n.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:n.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(n.units(5)),border:"none",padding:0}}})),ue=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,canBeTranslated:i,...l}=e;const s=u(l,n,r),d=n.data||n,c=(0,se.j)(d),g=d.Version>=6;return o.createElement(ce,{ref:t,className:ie([c,{notranslate:!i}]),style:{...(0,m.g)(n),backgroundColor:d.Background,color:d.Color,fontSize:d.FontSize,fontFamily:(0,le.k)(d.FontFamily,g),padding:d.Padding,lineHeight:d.LineHeight,letterSpacing:"".concat(d.LetterSpacing,"px"),wordWrap:d.Version<2?"initial":"break-word",...a},dangerouslySetInnerHTML:{__html:d.TextMessage},...s})})));var me=n(27971),ge=n(85960);const he=(0,g.ZP)(de.h2)((e=>{let{theme:{color:t}}=e;return{color:t.neutral.cement()}})),ve=(0,g.Zz)((e=>{let{theme:t,width:n,name:r}=e;const a=(0,me.v4)(),[i,l]=(0,o.useState)(null),[s,d]=(0,o.useState)(null),c=(0,o.useCallback)((()=>{const e=[];for(let t=0;t<41;t+=1)e.push(128);if(i&&s){s.clearRect(0,0,i.width,i.height),s.fillStyle=t.color.neutral.cement();for(let t=0;t<41;t+=1){var n;const o=8*t,r=4,a=-((null!==(n=e[t])&&void 0!==n?n:0)/2||5);s.fillRect(o,i.height,r,a)}}}),[i,s,t.color.neutral]);return(0,o.useEffect)((()=>{const e=document.querySelector("#canva-element-fake".concat(a));e&&(l(e),d(e.getContext("2d")),c())}),[a,c]),o.createElement("div",{className:"widget-audio-player"},o.createElement("div",{className:"widget-audio-player-play-container"},o.createElement(ge.Z,null)),o.createElement("div",{className:"widget-audio-player-info-container"},o.createElement("div",{className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},o.createElement("canvas",{id:"canva-element-fake".concat(a),style:{width:"100%",height:"42%"}})),o.createElement("div",{className:"widget-audio-player-file-progress-bar"}),o.createElement("div",{className:"widget-audio-player-file-name-container"},o.createElement(he,{className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},r))))})),we=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=u(i,n,r),s=n.data||n,{Name:d,Size:c,Background:g}=s;return o.createElement("div",{ref:t,style:{...(0,m.g)(n),backgroundColor:g,...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement(ve,{name:d,width:c.Width}))}))),fe=g.ZP.div((e=>{let{theme:{color:t}}=e;return{background:t.neutral.black(.8),color:t.neutral.white(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),pe=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=u(i,n,r),s=n.data||n,{Background:d}=s;return o.createElement(fe,{ref:t,style:{...(0,m.g)(n),backgroundColor:d,...a},...l},o.createElement(F,{height:"50%",width:"50%"}))}))),be=(0,r.Pi)((e=>{let{itemType:t,item:n,parentItem:r,getZIndexOfItem:i,events:l,renderItem:s,...c}=e;const u=(0,o.useRef)(null);function m(){return{item:n,parentItem:r,zIndex:i(n),getZIndexOfItem:i,ref:s?u:void 0,...l,...c}}const g=function(){switch(t){case a.q.Activity:return o.createElement($,{...m()});case a.q.Area:return o.createElement(v,{...m()});case a.q.Arrow:return o.createElement(k,{...m()});case a.q.Chart:case d:return o.createElement(E,{...m()});case a.q.Group:return o.createElement(B,{...m()});case a.q.Image:return o.createElement(_,{...m()});case a.q.Pin:return o.createElement(J,{...m()});case a.q.RichContent:return o.createElement(te,{...m()});case a.q.Svg:return o.createElement(re,{...m()});case a.q.Text:return o.createElement(ue,{...m()});case a.q.WidgetAudio:{var e;const t=null!==(e=n.data)&&void 0!==e?e:n;return t.DisplayPlayer&&!t.IsBackground?o.createElement(we,{...m()}):null}case a.q.WidgetVideo:return o.createElement(pe,{...m()});default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}();return s?s({item:n,itemId:n.Id,itemType:t,itemNode:g,itemRef:u,parentItem:r}):g}));var ye;!function(e){e.RichContents="richContents",e.WidgetsAudio="widgetsAudio",e.WidgetsVideo="widgetsVideo",e.Charts="charts",e.Areas="areas",e.Groups="groups",e.Images="images",e.Pins="pins",e.Svgs="svgs",e.Texts="texts",e.Activities="activities",e.Arrows="arrows"}(ye||(ye={}));const ke=e=>{if("allItems"in e&&e.allItems)return e.allItems;const t=[];return Object.values(ye).forEach((n=>{const o=e[n];o&&t.push(...o)})),t},Ie=[];function Ce(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((e=>e.data?!e.data.IdGroup:!e.IdGroup)).map((e=>({item:e,itemType:t}))))&&void 0!==n?n:Ie}const Ae=(0,r.Pi)((e=>{var t,n,r,i;let{canBeTranslated:d=!0,delta:c,documentConfig:u,getZIndexOfItem:m=(()=>{}),itemStyles:g,onBackgroundClick:h,onItemClick:v,onItemMouseEnter:w,onItemMouseLeave:f,renderItem:p,showBackgroundColor:b=!0,showBackgroundImage:y=!0,slide:k,t:I}=e;const[C,A]=(0,o.useState)(ke(k)),S=((e,t)=>{if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor})(k,b),x=((e,t)=>{var n,o,r;if(t)return"Background"in e?e.Background:null!==(n=null===(o=e.background)||void 0===o?void 0:o.CurrentBackgroundImage)&&void 0!==n?n:null===(r=e.background)||void 0===r?void 0:r.currentBackgroundImage})(k,y),E=(e=>{var t;return"data"in e?null!==(t=e.data.backgroundSize)&&void 0!==t?t:e.data.SizeBackground:e.SizeBackground?e.SizeBackground:e.BackgroundHeight||e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Width,Height:e.Height}})(k),P=(e=>{var t;return"data"in e?null!==(t=e.data.backgroundPosition)&&void 0!==t?t:e.data.PositionBackground:e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft||e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground})(k),B="data"in k?k.data.OpacityBackground:k.OpacityBackground,z={width:parseFloat(null!==(t=("data"in k?k.data.Size:null!==(n=k.Size)&&void 0!==n?n:k).Width)&&void 0!==t?t:"0"),height:parseFloat(null!==(r=("data"in k?k.data.Size:null!==(i=k.Size)&&void 0!==i?i:k).Height)&&void 0!==r?r:"0")},q=(0,o.useMemo)((()=>({onClick:v,onMouseEnter:w,onMouseLeave:f})),[v,w,f]),R=(e=>Object.values(ye).reduce(((t,n)=>{var o,r;return t+(null!==(o=null===(r=e[n])||void 0===r?void 0:r.length)&&void 0!==o?o:0)}),0))(k);return(0,o.useEffect)((()=>{A(ke(k))}),[R,k]),o.createElement(s.Provider,{value:{slideItems:C,delta:c,slideSize:z}},o.createElement(l,{key:k.Id,backgroundImageOpacity:B,backgroundImage:x,backgroundImageSize:E,backgroundImagePosition:P,backgroundColor:S,onClick:h}),[...Ce(k.activities,a.q.Activity),...Ce(k.areas,a.q.Area),...Ce(k.arrows,a.q.Arrow),...Ce(k.charts,a.q.Chart),...Ce(k.groups,a.q.Group),...Ce(k.images,a.q.Image),...Ce(k.pins,a.q.Pin),...Ce(k.richContents,a.q.RichContent),...Ce(k.svgs,a.q.Svg),...Ce(k.texts,a.q.Text),...Ce(k.widgetsAudio,a.q.WidgetAudio),...Ce(k.widgetsVideo,a.q.WidgetVideo)].sort(((e,t)=>T(m,e.item,t.item))).map((e=>{let{item:t,itemType:n}=e;return o.createElement(be,{key:t.Id,itemType:n,item:t,parentItem:void 0,events:q,getZIndexOfItem:m,canBeTranslated:d,documentConfig:u,style:null===g||void 0===g?void 0:g[t.Id],renderItem:p,t:I})})))})),Se=Ae}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/slideThumbnail.ca31f34a.chunk.js.map