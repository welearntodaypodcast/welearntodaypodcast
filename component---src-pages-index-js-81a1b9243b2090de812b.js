(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(146),s=a(152),o=a(161),d=a(162),l=a.n(d),c=function(){return i.a.createElement(n.b,{query:"2011440971",render:function(e){return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(150);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("h1",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)),i.a.createElement(n.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),d=a.n(o);a.d(t,"a",function(){return d.a});a(147);var l=i.a.createContext({}),c=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},148:function(e){e.exports={data:{site:{siteMetadata:{title:"We #learntoday Podcast"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){"use strict";var r=a(151),i=a(0),n=a.n(i),s=a(4),o=a.n(s),d=a(154),l=a.n(d);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=r.data.site,d=t||o.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{title:"We #learntoday Podcast",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var r=a(148),i=a(0),n=a.n(i),s=a(4),o=a.n(s),d=a(146),l=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(d.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var c=l,u=(a(153),function(e){var t=e.children;return n.a.createElement(d.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},161:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},162:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),d=r(a(76)),l=r(a(0)),c=r(a(4)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+d+a+i+t+s+n+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return l.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var v=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,E=e.loading,R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,d.default)({opacity:R?1:0,transition:I?"opacity "+b+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,A={transitionDelay:b+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},I&&A,o,f),O={title:t,alt:this.state.isVisible?"":a,style:T,className:p};if(g){var W=g;return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&A)}),W.base64&&l.default.createElement(w,(0,d.default)({src:W.base64},O)),W.tracedSVG&&l.default.createElement(w,(0,d.default)({src:W.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,W.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:W.srcSetWebp,sizes:W.sizes}),l.default.createElement(w,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,d.default)({alt:a,title:t,loading:E},W))}}))}if(h){var q=h,x=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete x.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},z&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:z,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},I&&A)}),q.base64&&l.default.createElement(w,(0,d.default)({src:q.base64},O)),q.tracedSVG&&l.default.createElement(w,(0,d.default)({src:q.tracedSVG},O)),this.state.isVisible&&l.default.createElement("picture",null,q.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:q.srcSetWebp,sizes:q.sizes}),l.default.createElement(w,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,d.default)({alt:a,title:t,loading:E},q))}}))}return null},t}(l.default.Component);v.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});v.propTypes={resolutions:E,sizes:R,fixed:E,fluid:R,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=v;t.default=I}}]);
//# sourceMappingURL=component---src-pages-index-js-81a1b9243b2090de812b.js.map