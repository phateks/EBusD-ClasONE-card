function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,b=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,_=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??x)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[_("elementProperties")]=new Map,y[_("finalized")]=new Map,f?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");const v=globalThis,$=t=>t,A=v.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,z=`<${C}>`,T=document,O=()=>T.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,K=T.createTreeWalker(T,129);function G(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===U?"!--"===l[1]?r=R:void 0!==l[1]?r=M:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=n??U,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?I:D):r===I||r===D?r=j:r===R||r===M?r=U:(r=j,n=void 0);const p=r===j&&t[e+1].startsWith("/>")?" ":"";o+=r===U?i+z:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+k+p):i+k+(-2===c?e:p)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=V(t,e);if(this.el=Z.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[o++],i=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),K.nextNode(),a.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===F)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=H(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),H(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=J(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=J(this,s[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!H(a)||a!==this._$AH[r],a===B?t=B:t!==B&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===F)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=v.litHtmlPolyfillSupport;nt?.(Z,Q),(v.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class rt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:x},dt=(t=ct,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return pt({...t,state:!0,attribute:!1})}var ut,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));var bt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};const ft="ARISTON CLAS ONE",_t="CH",gt="TERMOREGLARE",xt="FLAME",wt="TUR",yt="RETUR",vt="EXT",$t="PRESIUNE",At="OFFSET TERMOREGLARE",Et="DHW SETPOINT",St="CH SETPOINT",kt="CONSUM",Ct=1,zt={min:-14,max:14,step:2},Tt={min:36,max:60,step:1},Ot={min:30,max:80,step:1},Ht=1,Pt=2.5;const Nt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)})`
  :host {
    display: block;
    min-width: 0;
    container-name: boiler-card;
    container-type: inline-size;
    --bc-accent: #4ecdc4;
    --bc-ch: #ff8a5c;
    --bc-dhw: #4ecdc4;
    --bc-green: #5dcaa5;
    --bc-txt: #e8eef6;
    --bc-sub: #8aa0bd;
    /* Transparent inner boxes so the card respects the dashboard background /
       any transparency applied via theme or card_mod. */
    --bc-box-bg: transparent;
    --bc-border: #26425f;
    --bc-radius: 18px;
    --bc-title: #cbd9ea;
    --bc-muted: #4a5a70;
    --bc-ticks: #5a6f88;
    --bc-flame-idle: #3a4a60;
    --bc-btn-bg: #1d314f;
    --bc-btn-hover: #25425f;
    --bc-ch-on-bg: #3a2410;
    --bc-tr-on-bg: #163a2a;
    --bc-alarm: #ff5c5c;
  }

  /* Light HA theme: keep the accents, switch text/borders to theme colours. */
  :host([light]) {
    --bc-txt: var(--primary-text-color, #1c2733);
    --bc-sub: var(--secondary-text-color, #5b6b7d);
    --bc-title: var(--primary-text-color, #1c2733);
    --bc-border: var(--divider-color, #c9d5e2);
    --bc-muted: #b4c0cd;
    --bc-ticks: #7d8c9c;
    --bc-flame-idle: #b4c0cd;
    --bc-btn-bg: #e3ebf5;
    --bc-btn-hover: #d3dfec;
    --bc-ch-on-bg: #ffe9df;
    --bc-tr-on-bg: #dcf5ec;
    --bc-alarm: #d93838;
  }

  ha-card {
    /* No hardcoded background: inherit the theme's default so transparency
       (e.g. via card_mod or a transparent theme) can be applied if needed. */
    background: var(--ha-card-background, var(--card-background-color, none));
    border: 1px solid var(--bc-border);
    border-radius: var(--bc-radius);
    box-shadow: 0 0 0 1px rgba(63, 208, 255, 0.06), 0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 12px;
    color: var(--bc-txt);
    overflow: hidden;
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .header-controls {
    display: contents;
  }
  .title-icon {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: linear-gradient(145deg, #ff8a5c33, #ff8a5c11);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .title-icon ha-icon {
    --mdc-icon-size: 18px;
    color: var(--bc-ch);
  }
  .title-text {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--bc-title);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status-badge {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 8px;
    padding: 3px 10px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
  .status-badge ha-icon { --mdc-icon-size: 14px; }
  .status-badge.offline { animation: pulse 1.6s ease-in-out infinite; }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.55; }
  }
  .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 10px;
    padding: 6px 12px;
    cursor: pointer;
    flex: 0 0 auto;
    user-select: none;
  }
  .badge ha-icon {
    --mdc-icon-size: 15px;
  }
  .badge .lbl {
    font-size: 10px;
    letter-spacing: 0.5px;
    font-weight: 600;
    color: var(--bc-sub);
  }
  .badge ha-icon { color: var(--bc-sub); }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--bc-muted);
  }
  .badge.ch.on { background: var(--bc-ch-on-bg); border-color: #ff8a5c55; }
  .badge.ch.on ha-icon,
  .badge.ch.on .lbl { color: var(--bc-ch); }
  .badge.ch.on .dot { background: var(--bc-ch); box-shadow: 0 0 8px var(--bc-ch); }
  .badge.tr.on { background: var(--bc-tr-on-bg); border-color: #5dcaa555; }
  .badge.tr.on .lbl { color: var(--bc-green); }
  .badge.tr.on .dot { background: var(--bc-green); box-shadow: 0 0 8px var(--bc-green); }
  .badge.unavailable { opacity: 0.45; cursor: not-allowed; }

  /* ---------- Flow row ---------- */
  .unit {
    flex: 0 0 124px;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .unit-icons {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .unit-icons .boiler {
    --mdc-icon-size: 32px;
    color: var(--bc-sub);
  }
  .unit-icons .flame {
    position: absolute;
    bottom: -2px;
    right: -2px;
    --mdc-icon-size: 18px;
    color: var(--bc-flame-idle);
  }
  .unit-icons .flame.burning {
    color: #ff8a5c;
    animation: flicker 0.9s ease-in-out infinite;
  }
  @keyframes flicker {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.75; transform: scale(1.12); }
  }
  .unit .lbl {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--bc-sub);
    font-weight: 600;
  }
  .unit .val {
    font-size: 15px;
    font-weight: 700;
    color: var(--bc-ch);
  }

  .pipe {
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    flex: 1;
  }
  .pipe.tur { border-left: 3px solid var(--bc-ch); }
  .pipe.retur { border-left: 3px solid #4ecdc4; }

  .offset-box {
    background: var(--bc-box-bg);
    border: 1px solid #5dcaa533;
    border-radius: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    transition: opacity 0.2s;
  }
  .offset-box.disabled { opacity: 0.4; }
  .offset-title {
    font-size: 11px;
    color: var(--bc-sub);
    letter-spacing: 0.5px;
    font-weight: 600;
    text-align: center;
  }
  .offset-title .sp {
    color: #4ecdc4;
    font-size: 17px;
    font-weight: 700;
  }
  .offset-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--bc-green);
    line-height: 1;
    text-align: center;
  }
  .offset-box .sp-control { padding: 0 2px; max-width: 280px; margin: 0 auto; }

  /* ---------- Offset + consumption row ---------- */
  .mid-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin: 0 0 8px;
  }
  .mid-row.single { grid-template-columns: minmax(0, 1fr); }
  .mid-row > .offset-box,
  .mid-row > .cons-box { min-width: 0; box-sizing: border-box; }
  .cons-box {
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
  .cons-row,
  .cons-total {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 6px;
    font-size: 13px;
  }
  .cons-name {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--bc-sub);
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  .cons-name ha-icon { --mdc-icon-size: 15px; }
  .cons-name.dhw { color: var(--bc-dhw); }
  .cons-name.ch { color: var(--bc-ch); }
  .cons-val { font-weight: 600; color: var(--bc-txt); white-space: nowrap; }
  .cons-total {
    border-top: 1px solid var(--bc-border);
    padding-top: 5px;
    margin-top: 2px;
  }
  .cons-total .cons-name { font-size: 11px; }
  .cons-total-val { font-size: 19px; font-weight: 700; color: var(--bc-txt); white-space: nowrap; }

  /* ---------- Setpoints row ---------- */
  .setpoints {
    display: flex;
    gap: 8px;
  }
  .sp-card {
    flex: 1;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 16px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .sp-card.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .sp-head {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .sp-head ha-icon { --mdc-icon-size: 17px; }
  .sp-head .t { font-size: 12px; font-weight: 600; color: var(--bc-txt); letter-spacing: 1px; }
  .sp-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }
  .step-btn {
    width: 44px;
    height: 34px;
    border-radius: 11px;
    background: var(--bc-btn-bg);
    border: none;
    color: var(--bc-txt);
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .step-btn:hover:not(:disabled) { background: var(--bc-btn-hover); }
  .step-btn:active:not(:disabled) { transform: scale(0.95); }
  .step-btn:disabled { opacity: 0.4; cursor: default; }
  .sp-val { font-size: 28px; font-weight: 700; transition: opacity 0.2s; }
  /* Value clicked/dragged but not yet confirmed by the boiler. */
  .sp-val.pending,
  .offset-value.pending { opacity: 0.6; }
  .flow-row {
    display: grid;
    grid-template-columns: 124px repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(56px, 1fr));
    gap: 6px;
    margin-bottom: 8px;
    align-items: stretch;
  }

  .flow-row > .unit {
    grid-column: 1;
    grid-row: 1 / span 2;
    min-width: 0;
    box-sizing: border-box;
  }

  .flow-row > .pipes {
    display: contents;
  }

  .flow-row > .pipe.tur {
    grid-column: 2;
    grid-row: 1;
  }

  .flow-row > .pipe.retur {
    grid-column: 3;
    grid-row: 1;
  }

  .flow-row > .sensor-tile {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 7px 9px;
  }

  .sensor-tile .tile-label {
    align-self: flex-start;
    color: var(--bc-sub);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.7px;
    line-height: 1.2;
    overflow-wrap: anywhere;
    text-align: left;
  }

  .sensor-tile .tile-value {
    align-self: center;
    color: var(--bc-txt);
    font-size: 21px;
    font-weight: 700;
    line-height: 1.1;
    margin: auto 0;
    text-align: center;
  }

  .flow-row > .pipe.tur .tile-value { color: var(--bc-ch); }
  .flow-row > .pipe.retur .tile-value { color: var(--bc-dhw); }
  .flow-row > .outdoor-temp .tile-value { color: var(--bc-txt); }

  .flow-row > .outdoor-temp {
    grid-column: 2;
    grid-row: 2;
  }

  .flow-row > .pressure-card {
    grid-column: 3;
    grid-row: 2;
    background: var(--bc-box-bg);
    border-left: 3px solid var(--bc-green);
    cursor: pointer;
  }

  .pressure-value {
    color: var(--bc-green) !important;
  }

  .pressure-value span {
    color: var(--bc-sub);
    font-size: 14px;
    font-weight: 600;
  }

  .flow-row > .pressure-card.alarm {
    border-color: var(--bc-alarm);
    border-left-color: var(--bc-alarm);
    background: color-mix(in srgb, var(--bc-alarm) 14%, transparent);
    animation: alarm-glow 1.6s ease-in-out infinite;
  }
  .pressure-card.alarm .tile-label { color: var(--bc-alarm); }
  .pressure-card.alarm .tile-label ha-icon {
    --mdc-icon-size: 13px;
    margin-right: 3px;
    vertical-align: -2px;
  }
  .pressure-card.alarm .pressure-value { color: var(--bc-alarm) !important; }
  @keyframes alarm-glow {
    0%, 100% { box-shadow: 0 0 0 0 transparent; }
    50% { box-shadow: 0 0 10px 0 color-mix(in srgb, var(--bc-alarm) 45%, transparent); }
  }

  @media (prefers-reduced-motion: reduce) {
    .flow-row > .pressure-card.alarm,
    .status-badge.offline,
    .unit-icons .flame.burning { animation: none; }
  }

  .flow-row > .tile-wide {
    grid-column: 2 / span 2;
  }

  ha-card > .offset-box {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    margin: 0 0 8px;
  }

  @container boiler-card (max-width: 760px) {
    ha-card {
      padding: 12px;
      overflow: hidden;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .title-wrap {
      flex: 0 0 auto;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .header-controls {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .badge {
      padding: 6px 10px;
      width: 100%;
      flex: none;
      justify-content: center;
      min-width: 0;
      box-sizing: border-box;
    }

    .flow-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(56px, auto));
      gap: 6px;
    }

    .unit,
    .pipes,
    .sp-card,
    .pipe {
      min-width: 0;
      box-sizing: border-box;
    }

    .unit {
      flex-basis: auto;
      width: 100%;
      min-width: 0;
      padding: 8px 6px;
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    .pipe {
      padding: 8px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }

    .flow-row > .sensor-tile {
      padding: 7px 7px;
    }

    .sensor-tile .tile-label {
      font-size: 10px;
      letter-spacing: 0.5px;
    }

    .sensor-tile .tile-value {
      font-size: clamp(17px, 4.5vw, 21px);
    }

    .pipe.tur {
      grid-column: 2;
      grid-row: 1;
    }

    .pipe.retur {
      grid-column: 3;
      grid-row: 1;
    }

    .flow-row > .outdoor-temp {
      grid-column: 2;
      grid-row: 2;
    }

    .flow-row > .pressure-card {
      grid-column: 3;
      grid-row: 2;
      justify-content: center;
      align-self: stretch;
    }

    .flow-row > .tile-wide {
      grid-column: 2 / span 2;
    }

    ha-card > .offset-box {
      width: 100%;
      min-width: 0;
      padding: 8px 7px;
    }

    .offset-box .offset-title {
      font-size: 10px;
      line-height: 1.2;
    }

    .offset-box .offset-value {
      font-size: 22px;
    }

    .setpoints {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      align-items: stretch;
    }

    .sp-card {
      width: 100%;
      min-width: 0;
      padding: 8px 7px;
      overflow: hidden;
    }

    .sp-head .t {
      letter-spacing: 0.6px;
      font-size: 11px;
    }

    .sp-val {
      font-size: clamp(20px, 6vw, 28px);
      white-space: nowrap;
    }

    .step-btn {
      width: 42px;
      height: 36px;
      font-size: 18px;
      flex-shrink: 0;
    }
  }

  @container boiler-card (max-width: 420px) {
    .title-text {
      font-size: 12px;
      letter-spacing: 0.7px;
    }

    .status-badge {
      font-size: 10px;
      padding: 3px 8px;
    }

    .badge .lbl {
      font-size: 9px;
    }

    .header {
      gap: 8px;
    }

    .unit {
      padding: 6px 4px;
    }

    .pipe {
      padding: 7px 5px;
    }

    .sensor-tile .tile-value {
      font-size: clamp(16px, 4.5vw, 20px);
    }

    .setpoints {
      gap: 7px;
    }
  }

  @media (max-width: 760px) {
    .header {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .title-wrap {
      grid-column: 1;
      width: 100%;
      min-width: 0;
      flex: none;
      box-sizing: border-box;
    }

    .header-controls {
      display: grid;
      grid-column: 1;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .header-controls .badge {
      width: 100%;
      min-width: 0;
      flex: none;
      gap: 5px;
      padding: 6px 4px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .header-controls .lbl {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: clamp(8px, 2.4vw, 10px);
    }
  }

  @media (min-width: 761px) {
    .flow-row {
      grid-template-rows: repeat(2, 72px);
      gap: 6px;
      margin-bottom: 8px;
    }

    .flow-row > .unit {
      padding: 6px;
      gap: 3px;
    }

    .unit-icons {
      width: 38px;
      height: 38px;
    }

    .unit-icons .boiler {
      --mdc-icon-size: 30px;
    }

    .unit-icons .flame {
      --mdc-icon-size: 17px;
    }

    .sensor-tile {
      padding: 6px 8px;
    }

    .sensor-tile .tile-label {
      font-size: 10px;
    }

    .sensor-tile .tile-value {
      font-size: 20px;
    }

    ha-card > .offset-box {
      padding: 6px 10px;
      gap: 3px;
      margin-bottom: 8px;
    }

    .offset-title {
      font-size: 10px;
    }

    .offset-title .sp {
      font-size: 15px;
    }

    .offset-value {
      font-size: 20px;
    }
  }

  .clickable { cursor: pointer; }
  .clickable:focus-visible,
  .badge:focus-visible,
  .step-btn:focus-visible {
    outline: 2px solid var(--bc-accent);
    outline-offset: 2px;
  }
`;console.info("%c EBUSD-CLASONE-CARD %c v0.3.0 ","color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards||[],window.customCards.push({type:"ebusd-clasone-card",name:"EBusD Clas One Card",description:"Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",preview:!0,documentationURL:"https://github.com/phateks/EBusD-ClasONE-card"});const Ut={idle:"#8aa0bd",ch:"#ff8a5c",dhw:"#4ecdc4",other:"#8aa0bd",offline:"#ff5c5c"},Rt=new Set(["unavailable","unknown"]),Mt=new Set(["off","false","0","no","disconnected","offline","unavailable","unknown"]);let jt=class extends rt{constructor(){super(...arguments),this.pending={}}static async getConfigElement(){return await Promise.resolve().then(function(){return Vt}),document.createElement("ebusd-clasone-card-editor")}static getStubConfig(){return{type:"custom:ebusd-clasone-card",title:ft,status_entity:"sensor.ebusd_boiler_boiler_status",ch_switch_entity:"switch.ebusd_boiler_heating_status",thermoreg_entity:"switch.ebusd_boiler_thermoregulation_switch",flame_power_entity:"sensor.ebusd_boiler_flame_power_kw",flow_temp_entity:"sensor.ebusd_boiler_lwt_temp",return_temp_entity:"sensor.ebusd_boiler_ewt_temp",outdoor_temp_entity:"sensor.ebusd_boiler_ext_temp",pressure_entity:"sensor.ebusd_boiler_boiler_pressure",offset_entity:"number.ebusd_boiler_z1_heat_offset_set",computed_setpoint_entity:"sensor.ebusd_boiler_ch_flow_setpoint",dhw_setpoint_entity:"number.ebusd_boiler_dhw_comfort_temp_set",dhw_setpoint_display_entity:"sensor.ebusd_boiler_dhw_current_target_temp",ch_setpoint_entity:"number.ebusd_boiler_z1_heat_setpoint_set"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config={...t}}getCardSize(){return 6}getGridOptions(){return{columns:12,min_columns:6}}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this.pending))t.timer&&clearTimeout(t.timer);this.pending={}}trackedEntities(){const t=this.config;return[t.status_entity,t.connection_entity,t.ch_switch_entity,t.thermoreg_entity,t.flame_power_entity,t.flow_temp_entity,t.return_temp_entity,t.outdoor_temp_entity,t.pressure_entity,t.offset_entity,t.computed_setpoint_entity,t.dhw_consumption_entity,t.ch_consumption_entity,t.dhw_setpoint_entity,t.dhw_setpoint_display_entity,t.ch_setpoint_entity,t.ch_setpoint_display_entity].filter(t=>!!t)}shouldUpdate(t){if(!this.config)return!1;if(t.size>1||!t.has("hass"))return!0;const e=t.get("hass");return!e||!this.hass||(this.darkMode(e)!==this.darkMode(this.hass)||this.trackedEntities().some(t=>e.states[t]!==this.hass.states[t]))}willUpdate(t){if(!t.has("hass")||!this.hass)return;let e;for(const[t,i]of Object.entries(this.pending))i.sent&&this.num(t)===i.value&&(e=e??{...this.pending},delete e[t]);e&&(this.pending=e)}updated(t){t.has("hass")&&this.hass&&this.toggleAttribute("light",!1===this.darkMode(this.hass))}darkMode(t){return t.themes?.darkMode}st(t){return t?this.hass?.states?.[t]:void 0}available(t){const e=this.st(t);return!!e&&!Rt.has(e.state)}num(t){const e=this.st(t);if(!e)return;const i=parseFloat(e.state);return isNaN(i)?void 0:i}isOn(t){return"on"===this.st(t)?.state}fmt(t,e=0,i="°"){return void 0===t?"—":`${t.toFixed(e)}${i}`}decimals(t){const e=String(t);return e.includes(".")?e.split(".")[1].length:0}limits(t,e,i,s,n){const o=this.st(t)?.attributes??{},r=(t,e,i)=>{if("number"==typeof t&&!isNaN(t))return t;const s="number"==typeof e?e:parseFloat(String(e));return isNaN(s)?i:s};return{min:r(e,o.min,n.min),max:r(i,o.max,n.max),step:r(s,o.step,n.step)||n.step}}isOffline(){const t=this.config;if(t.connection_entity){const e=this.st(t.connection_entity);if(!e||Mt.has(e.state.toLowerCase()))return!0}return!(!t.status_entity||this.available(t.status_entity))}onKey(t){return e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t())}}toggle(t){t&&this.available(t)&&this.hass.callService("homeassistant","toggle",{entity_id:t})}moreInfo(t){t&&bt(this,"hass-more-info",{entityId:t})}setNumber(t,e){const i="input_number"===t.split(".")[0]?"input_number":"number";this.hass.callService(i,"set_value",{entity_id:t,value:e})}queueNumber(t,e,i){const s=this.pending[t];s?.timer&&clearTimeout(s.timer);const n=()=>{const i=this.pending[t];i&&i.value===e&&(this.setNumber(t,e),this.pending={...this.pending,[t]:{value:e,sent:!0}},window.setTimeout(()=>{const i=this.pending[t];if(i?.sent&&i.value===e){const e={...this.pending};delete e[t],this.pending=e}},15e3))},o={value:e,sent:!1};i>0&&(o.timer=window.setTimeout(n,i)),this.pending={...this.pending,[t]:o},i<=0&&n()}render(){if(!this.config||!this.hass)return B;const t=this.isOffline();return W`
      <ha-card>
        ${this.renderHeader(t)} ${this.renderFlowRow()} ${this.renderMiddle(t)}
        ${this.renderSetpoints(t)}
      </ha-card>
    `}renderHeader(t){const e=this.config,{label:i,kind:s}=t?{label:"EBUS OFFLINE",kind:"offline"}:function(t){if(!t)return{label:"—",kind:"other"};const e=t.toLowerCase();return"standby"===e?{label:"IDLE",kind:"idle"}:"heating"===e?{label:"CH HEATING",kind:"ch"}:"heating hot water"===e||"water tank"===e||"comfort"===e?{label:"DHW HEATING",kind:"dhw"}:{label:t.toUpperCase(),kind:"other"}}(this.st(e.status_entity)?.state),n=Ut[s],o=t&&e.connection_entity?e.connection_entity:e.status_entity??e.connection_entity,r=()=>this.moreInfo(o);return W`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${e.title??ft}</div>
          ${o?W`<div
                class="status-badge clickable ${s}"
                style="color:${n};border:1px solid ${n}44;background:${n}14;"
                role="button"
                tabindex="0"
                title=${t?"ebusd / eBUS nu răspunde":i}
                @click=${r}
                @keydown=${this.onKey(r)}
              >
                ${t?W`<ha-icon icon="mdi:lan-disconnect"></ha-icon>`:B}${i}
              </div>`:B}
        </div>

        <div class="header-controls">
          ${e.ch_switch_entity?this.renderToggle(e.ch_switch_entity,e.ch_switch_label??_t,"ch","mdi:radiator"):B}
          ${e.thermoreg_entity?this.renderToggle(e.thermoreg_entity,e.thermoreg_label??gt,"tr"):B}
        </div>
      </div>
    `}renderToggle(t,e,i,s){const n=this.isOn(t),o=this.available(t),r=()=>this.toggle(t);return W`
      <div
        class="badge ${i} ${n?"on":""} ${o?"":"unavailable"}"
        role="switch"
        aria-checked=${n?"true":"false"}
        aria-disabled=${o?"false":"true"}
        tabindex=${o?"0":"-1"}
        title=${o?e:`${e}: indisponibil`}
        @click=${r}
        @keydown=${this.onKey(r)}
      >
        ${"tr"===i?W`<span class="dot"></span>`:B}
        ${s?W`<ha-icon icon=${s}></ha-icon>`:B}
        <span class="lbl">${e}</span>
        ${"ch"===i?W`<span class="dot"></span>`:B}
      </div>
    `}renderFlowRow(){const t=this.config,e=this.num(t.flame_power_entity),i=(e??0)>.1,s=()=>this.moreInfo(t.flame_power_entity);return W`
      <div class="flow-row">
        <div
          class="unit clickable"
          role="button"
          tabindex="0"
          @click=${s}
          @keydown=${this.onKey(s)}
        >
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${i?"burning":""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">${t.flame_label??xt}</div>
          <div class="val">${this.fmt(e,1," kW")}</div>
        </div>

        <div class="pipes">
          ${this.renderTemperatureTile(t.flow_temp_entity,t.flow_temp_label??wt,this.fmt(this.num(t.flow_temp_entity)),"tur")}
          ${this.renderTemperatureTile(t.return_temp_entity,t.return_temp_label??yt,this.fmt(this.num(t.return_temp_entity)),"retur")}
        </div>

        ${t.outdoor_temp_entity?this.renderTemperatureTile(t.outdoor_temp_entity,t.outdoor_temp_label??vt,this.fmt(this.num(t.outdoor_temp_entity),1,"°C"),"outdoor-temp",!t.pressure_entity):B}
        ${t.pressure_entity?this.renderPressure(t.pressure_entity,!t.outdoor_temp_entity):B}
      </div>
    `}renderTemperatureTile(t,e,i,s,n=!1){const o=()=>this.moreInfo(t);return W`
      <div
        class="pipe sensor-tile ${s} clickable ${n?"tile-wide":""}"
        role="button"
        tabindex="0"
        @click=${o}
        @keydown=${this.onKey(o)}
      >
        <span class="tile-label">${e}</span>
        <span class="tile-value">${i}</span>
      </div>
    `}renderPressure(t,e){const i=this.config,s=this.num(t),n=i.pressure_min??Ht,o=i.pressure_max??Pt,r=void 0!==s&&s<n,a=void 0!==s&&s>o,l=r||a,c=i.pressure_label??$t,d=()=>this.moreInfo(t);return W`
      <div
        class="pipe sensor-tile pressure-card clickable ${l?"alarm":""} ${e?"tile-wide":""}"
        role="button"
        tabindex="0"
        title=${r?`Presiune sub ${n} bar`:a?`Presiune peste ${o} bar`:c}
        @click=${d}
        @keydown=${this.onKey(d)}
      >
        <span class="tile-label"
          >${l?W`<ha-icon icon="mdi:alert-circle"></ha-icon>`:B}${c}</span
        >
        <span class="tile-value pressure-value">
          ${void 0===s?"—":s.toFixed(1)}<span> bar</span>
        </span>
      </div>
    `}renderMiddle(t){const e=this.config,i=!(!e.dhw_consumption_entity&&!e.ch_consumption_entity),s=this.renderOffset(t);return i?W`
      <div class="mid-row ${s===B?"single":""}">
        ${s} ${this.renderConsumption()}
      </div>
    `:s}renderOffset(t){const e=this.config;if(!e.offset_entity)return B;const i=e.offset_entity,s=this.isOn(e.thermoreg_entity),n=e.offset_min??zt.min,o=e.offset_max??zt.max,r=e.offset_step||zt.step,a=this.pending[i],l=this.num(i),c=a?.value??l,d=t||!s||!this.available(i)||void 0===l,p=this.decimals(r),h=void 0===c?"--":`${c>0?"+":""}${c.toFixed(p)}`,u=s?this.num(e.computed_setpoint_entity):void 0,m=e.offset_label??At,b=t=>{if(d||void 0===c)return;const e=Math.min(o,Math.max(n,c+t)),s=parseFloat(e.toFixed(p));s!==c&&this.queueNumber(i,s,700)};return W`
      <div class="offset-box ${d?"disabled":""}">
        <div class="offset-title">
          ${m}${void 0!==u?W` <span class="sp">| ${u.toFixed(0)}°</span>`:B}
        </div>
        <div class="sp-control">
          <button
            class="step-btn"
            aria-label="${m} −"
            ?disabled=${d||void 0!==c&&c<=n}
            @click=${()=>b(-r)}
          >
            −
          </button>
          <span class="offset-value ${a?"pending":""}">${h}</span>
          <button
            class="step-btn"
            aria-label="${m} +"
            ?disabled=${d||void 0!==c&&c>=o}
            @click=${()=>b(r)}
          >
            +
          </button>
        </div>
      </div>
    `}renderConsumption(){const t=this.config,e=t.consumption_decimals??Ct,i=(t=>this.st(t)?.attributes?.unit_of_measurement??"kW")(t.dhw_consumption_entity??t.ch_consumption_entity),s=this.num(t.dhw_consumption_entity),n=this.num(t.ch_consumption_entity),o=void 0===s&&void 0===n?void 0:(s??0)+(n??0),r=t=>this.fmt(t,e,` ${i}`),a=(t,e,i,s,n)=>s?W`
            <div
              class="cons-row clickable"
              role="button"
              tabindex="0"
              @click=${()=>this.moreInfo(s)}
              @keydown=${this.onKey(()=>this.moreInfo(s))}
            >
              <span class="cons-name ${e}"><ha-icon icon=${t}></ha-icon>${i}</span>
              <span class="cons-val">${r(n)}</span>
            </div>
          `:B;return W`
      <div class="cons-box">
        <div class="offset-title">${t.consumption_label??kt}</div>
        ${a("mdi:shower-head","dhw","DHW",t.dhw_consumption_entity,s)}
        ${a("mdi:radiator","ch","CH",t.ch_consumption_entity,n)}
        <div class="cons-total">
          <span class="cons-name">TOTAL</span>
          <span class="cons-total-val">${r(o)}</span>
        </div>
      </div>
    `}renderSetpoints(t){const e=this.config,i=this.isOn(e.thermoreg_entity);return W`
      <div class="setpoints">
        ${this.renderSetpointCard("mdi:shower-head","#4ecdc4",e.dhw_setpoint_label??Et,e.dhw_setpoint_entity,e.dhw_setpoint_display_entity??e.dhw_setpoint_entity,this.limits(e.dhw_setpoint_entity,e.dhw_min,e.dhw_max,e.dhw_step,Tt),t)}
        ${this.renderSetpointCard("mdi:radiator","#ff8a5c",e.ch_setpoint_label??St,e.ch_setpoint_entity,e.ch_setpoint_display_entity??e.ch_setpoint_entity,this.limits(e.ch_setpoint_entity,e.ch_min,e.ch_max,e.ch_step,Ot),t||i)}
      </div>
    `}renderSetpointCard(t,e,i,s,n,{min:o,max:r,step:a},l){if(!s)return B;const c=this.pending[s],d=this.num(s)??this.num(n),p=c?.value??d,h=l||!this.available(s)||void 0===d,u=this.decimals(a),m=t=>{if(h||void 0===p)return;const e=Math.min(r,Math.max(o,p+t)),i=parseFloat(e.toFixed(u));i!==p&&this.queueNumber(s,i,700)};return W`
      <div class="sp-card ${h?"disabled":""}">
        <div class="sp-head">
          <ha-icon icon=${t} style="color:${e};"></ha-icon>
          <span class="t">${i}</span>
        </div>
        <div class="sp-control">
          <button
            class="step-btn"
            aria-label="${i} −"
            ?disabled=${h||void 0!==p&&p<=o}
            @click=${()=>m(-a)}
          >
            −
          </button>
          <span class="sp-val ${c?"pending":""}" style="color:${e};"
            >${this.fmt(p,u)}</span
          >
          <button
            class="step-btn"
            aria-label="${i} +"
            ?disabled=${h||void 0!==p&&p>=r}
            @click=${()=>m(a)}
          >
            +
          </button>
        </div>
      </div>
    `}};jt.styles=Nt,t([pt({attribute:!1})],jt.prototype,"hass",void 0),t([ht()],jt.prototype,"config",void 0),t([ht()],jt.prototype,"pending",void 0),jt=t([lt("ebusd-clasone-card")],jt);const Dt=(t,e)=>({name:t,selector:{entity:{domain:e}}}),It=t=>({name:t,selector:{text:{}}}),Lt=(t,e=1)=>({name:t,selector:{number:{mode:"box",step:e}}}),Wt=t=>({type:"grid",name:"",schema:t}),Ft=(t,e,i=!1)=>({type:"expandable",name:"",title:t,expanded:i,schema:e}),Bt=[It("title"),Ft("Status și conexiune",[Dt("status_entity",["sensor"]),Dt("connection_entity",["binary_sensor","sensor"]),Dt("ch_switch_entity",["switch","input_boolean"]),Dt("thermoreg_entity",["switch","input_boolean"]),Wt([It("ch_switch_label"),It("thermoreg_label")])],!0),Ft("Temperaturi, flacără și presiune",[Dt("flame_power_entity",["sensor"]),It("flame_label"),Dt("flow_temp_entity",["sensor"]),It("flow_temp_label"),Dt("return_temp_entity",["sensor"]),It("return_temp_label"),Dt("outdoor_temp_entity",["sensor"]),It("outdoor_temp_label"),Dt("pressure_entity",["sensor"]),It("pressure_label"),Wt([Lt("pressure_min",.1),Lt("pressure_max",.1)])]),Ft("Termoreglare",[Dt("offset_entity",["number","input_number"]),It("offset_label"),Dt("computed_setpoint_entity",["sensor"]),Wt([Lt("offset_min"),Lt("offset_max"),Lt("offset_step")])]),Ft("Consum (opțional)",[Dt("dhw_consumption_entity",["sensor"]),Dt("ch_consumption_entity",["sensor"]),Wt([It("consumption_label"),Lt("consumption_decimals")])]),Ft("Setpoint-uri DHW / CH",[Dt("dhw_setpoint_entity",["number","input_number"]),Dt("dhw_setpoint_display_entity",["sensor","number"]),It("dhw_setpoint_label"),Wt([Lt("dhw_min"),Lt("dhw_max"),Lt("dhw_step")]),Dt("ch_setpoint_entity",["number","input_number"]),Dt("ch_setpoint_display_entity",["sensor","number"]),It("ch_setpoint_label"),Wt([Lt("ch_min"),Lt("ch_max"),Lt("ch_step")])])],qt={title:"Titlu card",status_entity:"Status boiler (sensor)",connection_entity:"Conexiune eBUS (opțional, on = conectat)",ch_switch_entity:"Switch CH / încălzire",thermoreg_entity:"Switch termoreglare",ch_switch_label:"Nume buton CH",thermoreg_label:"Nume buton termoreglare",flame_power_entity:"Putere flacără (kW)",flame_label:"Nume casetă flacără",flow_temp_entity:"Temperatură TUR",flow_temp_label:"Nume casetă TUR",return_temp_entity:"Temperatură RETUR",return_temp_label:"Nume casetă RETUR",outdoor_temp_entity:"Temperatură exterioară",outdoor_temp_label:"Nume casetă exterioară",pressure_entity:"Presiune (sensor)",pressure_label:"Nume casetă presiune",pressure_min:`Alarmă sub (bar, implicit ${Ht})`,pressure_max:`Alarmă peste (bar, implicit ${Pt})`,offset_entity:"Offset termoreglare (number)",offset_label:"Titlu offset",computed_setpoint_entity:"Setpoint TUR calculat (sensor)",offset_min:"Offset min",offset_max:"Offset max",offset_step:"Offset pas",dhw_consumption_entity:"Consum DHW (sensor)",ch_consumption_entity:"Consum CH (sensor)",consumption_label:"Titlu casetă consum",consumption_decimals:"Zecimale consum",dhw_setpoint_entity:"DHW setpoint (number, control)",dhw_setpoint_display_entity:"DHW setpoint (afișaj)",dhw_setpoint_label:"Titlu DHW",dhw_min:"DHW min",dhw_max:"DHW max",dhw_step:"DHW pas",ch_setpoint_entity:"CH setpoint (number, control)",ch_setpoint_display_entity:"CH setpoint (afișaj)",ch_setpoint_label:"Titlu CH",ch_min:"CH min",ch_max:"CH max",ch_step:"CH pas"},Kt={connection_entity:"Când e off/indisponibil, badge-ul de status arată EBUS OFFLINE. Fără ea, cardul se bazează doar pe senzorul de status.",offset_min:`Gol = implicit ${zt.min} / ${zt.max}, pas ${zt.step}.`,dhw_consumption_entity:"Dacă nu setezi niciun senzor de consum, caseta nu apare și offset-ul ocupă tot rândul. Totalul = DHW + CH.",dhw_min:"Gol = valoarea din entitate.",ch_min:"Gol = valoarea din entitate."};let Gt=class extends rt{constructor(){super(...arguments),this._computeLabel=t=>qt[t.name]??t.name,this._computeHelper=t=>Kt[t.name]}setConfig(t){this._config=t}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Bt}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:B}_valueChanged(t){const e={...t.detail.value};for(const t of Object.keys(e)){const i=e[t];""!==i&&null!=i||delete e[t]}bt(this,"config-changed",{config:e})}};t([pt({attribute:!1})],Gt.prototype,"hass",void 0),t([ht()],Gt.prototype,"_config",void 0),Gt=t([lt("ebusd-clasone-card-editor")],Gt);var Vt=Object.freeze({__proto__:null,get EbusdClasOneCardEditor(){return Gt}});export{jt as EbusdClasOneCard};
