(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{3133:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/programme",function(){return a(1712)}])},1952:function(e,r,a){"use strict";a.d(r,{Z:function(){return c}});var t=a(5893),n=a(8298),s=a.n(n);function c(e){var r=e.hero,a=e.description;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:s().hero,children:r}),(0,t.jsx)("p",{className:s().description,children:a})]})}},1712:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return Z},default:function(){return A}});var t=a(5893),n=a(8434),s=a(4184),c=a.n(s),i=a(9332),l=a.n(i),o=a(1664),u=a(7294),d=a(5026),_=a(3855),m=a(2699),f=a(313),p=a(5830),h=a(255),v=a.n(h);var j=function(e){return(0,d.Z)((0,_.Z)(e),"p",{locale:p.Z})};function k(e){var r=e.talk,a=r.title,n=r.speaker,s=r.start,i=r.end,l=e.showTime,d=(0,u.useState)(!1),p=d[0],h=d[1],k=(0,u.useState)(""),x=k[0],g=k[1];(0,u.useEffect)((function(){var e=Date.now();h((0,m.Z)(e,(0,_.Z)(s))&&(0,f.Z)(e,(0,_.Z)(i))),g("".concat(j(s)," \u2013 ").concat(j(i)))}),[i,s]);var w,N,y,b="/speakers/".concat(n[0].slug);return(0,t.jsxs)("div",{className:v().talk,children:[l&&(0,t.jsx)("p",{className:v().time,children:x||(0,t.jsx)(t.Fragment,{children:"\xa0"})}),(0,t.jsx)(o.default,{href:b,children:(0,t.jsx)("a",{className:c()(v().card,(w={},N=v()["is-live"],y=p,N in w?Object.defineProperty(w,N,{value:y,enumerable:!0,configurable:!0,writable:!0}):w[N]=y,w)),children:(0,t.jsxs)("div",{className:v()["card-body"],children:[(0,t.jsx)("h4",{title:a,className:v().title,children:a}),(0,t.jsxs)("div",{className:v().speaker,children:[(0,t.jsx)("div",{className:v()["avatar-group"],children:n.map((function(e){return(0,t.jsx)("div",{className:v()["avatar-wrapper"],children:(0,t.jsx)("img",{loading:"lazy",alt:e.name,className:v().avatar,src:e.image.url,title:e.name,height:24})},e.name)}))}),(0,t.jsx)("h5",{className:v().name,children:n.map((function(e){return e.name})).join(", ")})]})]})})})]},a)}function x(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}function g(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return x(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return x(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var r=e.stage,a=r.schedule.reduce((function(e,r){return e[r.start]=g(e[r.start]||[]).concat([r]),e}),{});return(0,t.jsxs)("div",{className:l().row,children:[(0,t.jsx)("h3",{className:c()(l()["stage-name"],l()[r.slug]),children:(0,t.jsx)("span",{children:r.name})}),(0,t.jsx)("div",{className:c()(l().talks,l()[r.slug]),children:Object.keys(a).map((function(e){return(0,t.jsx)("div",{children:a[e].map((function(e,r){return(0,t.jsx)(k,{talk:e,showTime:0===r},e.title)}))},e)}))})]},r.name)}function N(e){var r=e.allStages;return(0,t.jsx)("div",{className:l().container,children:(0,t.jsx)("div",{className:l()["row-wrapper"],children:r.map((function(e){return(0,t.jsx)(w,{stage:e},e.slug)}))})})}var y=a(6289),b=a(1952),S=a(9953),Z=!0;function A(e){var r=e.allStages,a={title:"Programme : conf\xe9rence onestla.tech",description:S.KM};return(0,t.jsx)(n.Z,{meta:a,children:(0,t.jsxs)(y.Z,{children:[(0,t.jsx)(b.Z,{hero:"Programme",description:a.description}),(0,t.jsx)(N,{allStages:r})]})})}},8298:function(e){e.exports={hero:"header_hero___txUl",description:"header_description__LtI0Y"}},9332:function(e){e.exports={container:"schedule_container__aYvHo","row-wrapper":"schedule_row-wrapper__vrqEj",row:"schedule_row__8BAuU","stage-name":"schedule_stage-name__5oGAf",talks:"schedule_talks__Jx3ck"}},255:function(e){e.exports={talk:"talk-card_talk__xpi0a",time:"talk-card_time__dv5p2",card:"talk-card_card__n4tWE","is-live":"talk-card_is-live__lsdus","card-body":"talk-card_card-body____ugs",title:"talk-card_title__Jdfn7",speaker:"talk-card_speaker__2HW_f",name:"talk-card_name__h71OT",avatar:"talk-card_avatar__M0WA4","avatar-wrapper":"talk-card_avatar-wrapper__Bgp8n","avatar-group":"talk-card_avatar-group__FfdaB",link:"talk-card_link__FNqk7"}}},function(e){e.O(0,[145,429,36,774,888,179],(function(){return r=3133,e(e.s=r);var r}));var r=e.O();_N_E=r}]);