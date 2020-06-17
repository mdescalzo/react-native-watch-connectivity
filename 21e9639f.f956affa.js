(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),o=(t(0),t(123));const c={id:"user-info",title:"User Info",sidebar_label:"User Info"},a={id:"user-info",title:"User Info",description:"transferUserInfo",source:"@site/docs/user-info.md",permalink:"/react-native-watch-connectivity/docs/user-info",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/user-info.md",sidebar_label:"User Info",sidebar:"someSidebar",previous:{title:"Messages",permalink:"/react-native-watch-connectivity/docs/messages"},next:{title:"Application Context",permalink:"/react-native-watch-connectivity/docs/application-context"}},s=[{value:"transferUserInfo",id:"transferuserinfo",children:[]},{value:"transferCurrentComplicationUserInfo",id:"transfercurrentcomplicationuserinfo",children:[]},{value:"consumeUserInfo",id:"consumeuserinfo",children:[{value:"Typescript Support",id:"typescript-support",children:[]}]},{value:"getQueuedUserInfo",id:"getqueueduserinfo",children:[{value:"TypeScript support",id:"typescript-support-1",children:[]}]},{value:"clearUserInfoQueue",id:"clearuserinfoqueue",children:[]},{value:"dequeueUserInfo",id:"dequeueuserinfo",children:[]},{value:"subscribeToUserInfo",id:"subscribetouserinfo",children:[{value:"TypeScript Support",id:"typescript-support-2",children:[]}]}],i={rightToc:s};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"transferuserinfo"},"transferUserInfo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { transferUserInfo } from "react-native-watch-connectivity"\n\nconst userInfo = {key: "value"}; // Any number of key/value pairs\n\ntransferUserInfo(userInfo); \n')),Object(o.b)("h2",{id:"transfercurrentcomplicationuserinfo"},"transferCurrentComplicationUserInfo"),Object(o.b)("p",null,"Same as transferUserInfo but receives priority. Generally used to update information with complications presented on the watch face."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { transferCurrentComplicationUserInfo } from "react-native-watch-connectivity"\n\nconst userInfo = {key: "value"}; // Any number of key/value pairs\n\ntransferCurrentComplicationUserInfo(userInfo);\n')),Object(o.b)("h2",{id:"consumeuserinfo"},"consumeUserInfo"),Object(o.b)("p",null,"Handle all user info received from the Watch. You will also receive all user info sent from the Watch prior to the subscription being created. User info will be dequeued automatically."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const stop = consumeUserInfo(async (userInfo, date) => {\n    console.log('Received user info', userInfo);\n    await doSomeThingWithUserInfo(userInfo);\n})\n\n// ...\n\nstop();\n")),Object(o.b)("h3",{id:"typescript-support"},"Typescript Support"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// Type out expected user info to be received from the Watch\ntype UserInfoPayload {\n    myNumber: number;\n    myText: string;\n}\n\nconsumeUserInfo<UserInfoPayload>(async (userInfo, date) => {\n    console.log(userInfo.myText);\n})\n")),Object(o.b)("h2",{id:"getqueueduserinfo"},"getQueuedUserInfo"),Object(o.b)("p",null,"Returns all unprocessed user info received by the Watch, including all user info messages received prior to a user info subscription being registered."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { getQueuedUserInfo } from "react-native-watch-connectivity"\n\nconst queue = await getQueuedUserInfo();\n\nqueue.forEach(({userInfo, timestamp, id}) => {\n  console.log(userInfo);\n})\n')),Object(o.b)("h3",{id:"typescript-support-1"},"TypeScript support"),Object(o.b)("p",null,"It's possible to type the user info expected by the companion app."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { getQueuedUserInfo } from "react-native-watch-connectivity"\n\ntype MyUserInfo = {key: string}\n\nconst queue = await getQueuedUserInfo<MyUserInfo>();\n\nqueue.forEach(({userInfo}) => {\n  console.log(userInfo.key);\n})\n')),Object(o.b)("h2",{id:"clearuserinfoqueue"},"clearUserInfoQueue"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { clearUserInfoQueue } from "react-native-watch-connectivity"\n\nawait clearUserInfoQueue();\n')),Object(o.b)("h2",{id:"dequeueuserinfo"},"dequeueUserInfo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { getQueuedUserInfo, dequeueUserInfo } from "react-native-watch-connectivity"\n\nconst queue = await getQueuedUserInfo();\n\nqueue.forEach(({userInfo, timestamp, id}) => {\n  consumeUserInfo(userInfo);\n  dequeueUserInfo(id); \n})\n')),Object(o.b)("h2",{id:"subscribetouserinfo"},"subscribeToUserInfo"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { \n  subscribeToUserInfo\n} from "react-native-watch-connectivity"\n\nsubscribeToUserInfo(({userInfo, timestamp, id}) => {\n   console.log(`User info received @ ${timestamp}:`, JSON.stringify(userInfo, null, 2));\n})\n')),Object(o.b)("h3",{id:"typescript-support-2"},"TypeScript Support"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { \n  subscribeToUserInfo\n} from "react-native-watch-connectivity"\n\n\n// Type out expected user info to be received from the Watch\ntype UserInfoPayload {\n    myNumber: number;\n    myText: string;\n}\n\nsubscribeToUserInfo<UserInfoPayload>(({userInfo, timestamp, id}) => {\n  console.log(userInfo.myText)\n})\n')))}u.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,d=l["".concat(a,".").concat(b)]||l[b]||f[b]||c;return t?o.a.createElement(d,s(s({ref:n},u),{},{components:t})):o.a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<c;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);