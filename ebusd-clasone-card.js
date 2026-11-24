function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,b=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,g=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??x)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,f?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");const y=globalThis,$=t=>t,k=y.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,T=`<${C}>`,O=document,H=()=>O.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,U="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,q=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,G=O.createTreeWalker(O,129);function K(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=M;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===M?"!--"===c[1]?r=N:void 0!==c[1]?r=R:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=q):void 0!==c[3]&&(r=q):r===q?">"===c[0]?(r=n??M,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?q:'"'===c[3]?j:D):r===j||r===D?r=q:r===N||r===R?r=M:(r=q,n=void 0);const p=r===q&&t[e+1].startsWith("/>")?" ":"";o+=r===M?i+T:l>=0?(s.push(a),i.slice(0,l)+E+i.slice(l)+S+p):i+S+(-2===l?e:p)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[c,l]=V(t,e);if(this.el=X.createElement(c,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[o++],i=s.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),G.nextNode(),a.push({type:2,index:++n});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===F)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=z(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);G.currentNode=s;let n=G.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=G.nextNode(),o++)}return G.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new X(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!z(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,s[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!z(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=y.litHtmlPolyfillSupport;nt?.(X,Q),(y.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class rt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(H(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x},dt=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return pt({...t,state:!0,attribute:!1})}var ut,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));var bt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};const ft="ARISTON CLAS ONE",gt="CH",_t="TERMOREGLARE",xt="FLAME",vt=24,wt="TUR",yt="RETUR",$t="EXT",kt="PRESIUNE",At="OFFSET TERMOREGLARE",Et="DHW SETPOINT",St="CH SETPOINT",Ct="CONSUM",Tt=1,Ot={min:-14,max:14,step:2},Ht={min:36,max:60,step:1},zt={min:30,max:80,step:1},Pt=1,Ut=2.5;const Mt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)})`
  :host {
    /* Fill the height the dashboard gives us (Sections rows); with no height
       from outside this resolves to auto and the card keeps its natural size. */
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 0;
    container-name: boiler-card;
    container-type: inline-size;
    --bc-accent: #4ecdc4;
    --bc-ch: #ff8a5c;
    --bc-dhw: #4ecdc4;
    --bc-green: #5dcaa5;
    --bc-txt: #e8eef6;
    --bc-sub: #8aa0bd;
    --bc-title: #dbe6f3;
    --bc-muted: #3a4a60;
    --bc-alarm: #ff5c5c;
    /* Inner surfaces are translucent tints (not opaque fills) so the card still
       follows the dashboard background / card_mod transparency. */
    --bc-surface: color-mix(in srgb, #9fb6d6 6%, transparent);
    --bc-surface-hi: color-mix(in srgb, #9fb6d6 10%, transparent);
    --bc-line: color-mix(in srgb, #9fb6d6 14%, transparent);
    --bc-border: #26425f;
    --bc-radius: 18px;
    --bc-tile-radius: 13px;
    --bc-btn-bg: color-mix(in srgb, #9fb6d6 12%, transparent);
    --bc-btn-hover: color-mix(in srgb, #9fb6d6 20%, transparent);
    --bc-gap: 7px;
    --st: #8aa0bd;
  }

  /* Light HA theme: keep the accents, switch text/surfaces to theme colours. */
  :host([light]) {
    --bc-txt: var(--primary-text-color, #1c2733);
    --bc-sub: var(--secondary-text-color, #5b6b7d);
    --bc-title: var(--primary-text-color, #1c2733);
    --bc-border: var(--divider-color, #d5dee8);
    --bc-muted: #c3ced9;
    --bc-alarm: #d93838;
    --bc-surface: color-mix(in srgb, #3c5a80 5%, transparent);
    --bc-surface-hi: color-mix(in srgb, #3c5a80 8%, transparent);
    --bc-line: color-mix(in srgb, #3c5a80 12%, transparent);
    --bc-btn-bg: color-mix(in srgb, #3c5a80 9%, transparent);
    --bc-btn-hover: color-mix(in srgb, #3c5a80 15%, transparent);
    --bc-ch: #f0703c;
    --bc-dhw: #1fa99f;
    --bc-green: #2fa57e;
  }

  ha-card {
    background: var(--ha-card-background, var(--card-background-color, none));
    border: 1px solid var(--bc-border);
    border-radius: var(--bc-radius);
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
    padding: 12px;
    color: var(--bc-txt);
    overflow: hidden;
    position: relative;
    font-variant-numeric: tabular-nums;
    /* Grows to the host height but never shrinks below its content. */
    flex: 1 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  /* Soft status glow in the top-left corner (CH = orange, DHW = teal). */
  ha-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      120% 60% at 0% 0%,
      color-mix(in srgb, var(--st) 12%, transparent),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.6s;
  }
  ha-card.st-ch::before,
  ha-card.st-dhw::before,
  ha-card.st-offline::before { opacity: 1; }
  ha-card > * { position: relative; }

  .u {
    font-size: 0.5em;
    font-weight: 600;
    color: var(--bc-sub);
    margin-left: 2px;
    letter-spacing: 0;
  }

  /* ---------- Header ---------- */
  .header {
    flex: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    margin-bottom: 10px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .header-controls {
    display: flex;
    gap: var(--bc-gap);
  }
  .title-icon {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    background: color-mix(in srgb, var(--st) 16%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .title-icon ha-icon { --mdc-icon-size: 20px; color: var(--st); transition: color 0.4s; }
  .title-icon.active { box-shadow: 0 0 16px -4px var(--st); }
  .title-text {
    font-size: 15px;
    font-weight: 600;
    color: var(--bc-title);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
  .status-badge {
    flex-shrink: 0;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: var(--st);
    background: color-mix(in srgb, var(--st) 12%, transparent);
    border-radius: 999px;
    padding: 3px 9px 3px 8px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .status-badge ha-icon { --mdc-icon-size: 13px; }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--st);
  }
  .status-dot.live { animation: ping 1.8s ease-out infinite; }
  @keyframes ping {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--st) 60%, transparent); }
    100% { box-shadow: 0 0 0 6px transparent; }
  }
  .status-badge.offline { animation: pulse 1.6s ease-in-out infinite; }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.55; }
  }

  /* Toggle pills with a mini switch */
  .badge {
    --tg: var(--bc-sub);
    display: flex;
    align-items: center;
    gap: 7px;
    background: var(--bc-surface);
    border: 1px solid transparent;
    border-radius: 11px;
    padding: 5px 8px 5px 10px;
    cursor: pointer;
    user-select: none;
    transition: background 0.25s, border-color 0.25s;
    min-width: 0;
  }
  .badge.ch { --tg-on: var(--bc-ch); }
  .badge.tr { --tg-on: var(--bc-green); }
  .badge.on {
    --tg: var(--tg-on);
    background: color-mix(in srgb, var(--tg-on) 14%, transparent);
    border-color: color-mix(in srgb, var(--tg-on) 30%, transparent);
  }
  .badge ha-icon { --mdc-icon-size: 16px; color: var(--tg); flex-shrink: 0; }
  .badge .lbl {
    flex: 1 1 auto;
    font-size: 10.5px;
    letter-spacing: 0.6px;
    font-weight: 700;
    color: var(--tg);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .track {
    width: 26px;
    height: 15px;
    border-radius: 8px;
    background: var(--bc-muted);
    position: relative;
    flex-shrink: 0;
    transition: background 0.25s;
  }
  .knob {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.25s;
  }
  .badge.on .track { background: var(--tg-on); }
  .badge.on .knob { transform: translateX(11px); }
  .badge.unavailable { opacity: 0.45; cursor: not-allowed; }

  /* ---------- Shared surfaces ---------- */
  .unit,
  .pipe,
  .box {
    background: var(--bc-surface);
    border-radius: var(--bc-tile-radius);
    box-sizing: border-box;
    min-width: 0;
    position: relative;
    transition: background 0.2s, opacity 0.2s;
  }
  .clickable { cursor: pointer; }
  .pipe.clickable:hover,
  .unit.clickable:hover,
  .cons-row.clickable:hover { background: var(--bc-surface-hi); }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 1px 7px;
    border-radius: 999px;
    background: var(--bc-btn-bg);
    color: var(--bc-sub);
    white-space: nowrap;
    line-height: 18px;
  }
  .chip ha-icon { --mdc-icon-size: 13px; }
  .chip.accent {
    background: color-mix(in srgb, var(--bc-accent) 16%, transparent);
    color: var(--bc-accent);
    font-size: 11.5px;
  }

  /* Thin progress line glued to the bottom edge of a tile: carries
     information without adding height. */
  .edge-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: var(--bc-line);
    overflow: hidden;
  }
  .edge-bar > span { position: absolute; top: 0; bottom: 0; transition: left 0.3s, width 0.3s; }
  .edge-bar .fill { left: 0; }
  .edge-bar .zero { width: 2px; margin-left: -1px; background: var(--bc-sub); opacity: 0.7; z-index: 1; }

  /* ---------- Flow row ---------- */
  .flow-row {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) repeat(2, minmax(0, 1fr));
    grid-auto-rows: minmax(min-content, 1fr);
    gap: var(--bc-gap);
    flex: 1 1 auto;
    margin-bottom: var(--bc-gap);
  }
  .flow-row > .unit { grid-column: 1; grid-row: 1 / span 2; }
  .flow-row > .tur { grid-column: 2; grid-row: 1; }
  .flow-row > .retur { grid-column: 3; grid-row: 1; }
  .flow-row > .outdoor-temp { grid-column: 2; grid-row: 2; }
  .flow-row > .pressure-card { grid-column: 3; grid-row: 2; }
  .flow-row > .tile-wide { grid-column: 2 / span 2; }

  .unit {
    /* Size container: the ring and value scale with the tile height. */
    container-type: size;
    --ring: clamp(54px, min(52cqh, 75cqw), 130px);
    padding: 8px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
  .unit-text { display: flex; flex-direction: column; align-items: center; }
  .ring {
    position: relative;
    width: var(--ring);
    height: var(--ring);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ring svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .ring circle { fill: none; stroke-width: 6; stroke-linecap: round; }
  .ring-bg { stroke: var(--bc-line); }
  .ring-fg {
    stroke: var(--bc-ch);
    transition: stroke-dasharray 0.8s ease;
  }
  .ring .flame { --mdc-icon-size: calc(var(--ring) * 0.38); color: var(--bc-muted); transition: color 0.3s; }
  .unit.burning .flame {
    color: var(--bc-ch);
    animation: flicker 1.2s ease-in-out infinite;
  }
  @keyframes flicker {
    0%, 100% { transform: scale(1) rotate(0); }
    30% { transform: scale(1.07) rotate(-3deg); }
    60% { transform: scale(0.96) rotate(2deg); }
  }
  .unit .val {
    font-size: clamp(17px, 16cqh, 34px);
    font-weight: 700;
    color: var(--bc-txt);
    line-height: 1.1;
    margin-top: -4px;
  }
  .unit.burning .val { color: var(--bc-ch); }
  .unit .lbl {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--bc-sub);
    font-weight: 700;
  }

  /* ----- Soft glow on the flame tile (heat demand) ----- */
  .unit.glow {
    background: radial-gradient(
        90% 70% at 50% 40%,
        color-mix(in srgb, var(--bc-ch) 9%, transparent),
        transparent 75%
      ),
      var(--bc-surface);
    box-shadow: 0 0 10px -4px color-mix(in srgb, var(--bc-ch) 35%, transparent),
      inset 0 0 0 1px color-mix(in srgb, var(--bc-ch) 22%, transparent);
  }
  .unit.glow .ring-fg {
    filter: drop-shadow(0 0 2px color-mix(in srgb, var(--bc-ch) 40%, transparent));
  }
  .unit.glow.burning .flame {
    filter: drop-shadow(0 0 3px color-mix(in srgb, var(--bc-ch) 45%, transparent));
  }

  /* ----- Sensor tiles ----- */
  .sensor-tile {
    --tile: var(--bc-sub);
    container-type: size;
    min-height: 56px;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
    overflow: hidden;
  }
  .sensor-tile.tur { --tile: var(--bc-ch); }
  .sensor-tile.retur { --tile: var(--bc-dhw); }
  .sensor-tile.outdoor-temp { --tile: #8fb3ff; }
  .sensor-tile.pressure-card { --tile: var(--bc-green); }
  .tile-label {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--bc-sub);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
  .tile-label ha-icon { --mdc-icon-size: 15px; color: var(--tile); flex-shrink: 0; }
  .tile-value {
    align-self: flex-end;
    text-align: right;
    font-size: clamp(20px, min(40cqh, 24cqw), 40px);
    font-weight: 600;
    line-height: 1;
    color: var(--bc-txt);
    white-space: nowrap;
  }
  .sensor-tile.tur .tile-value { color: var(--bc-ch); }
  .sensor-tile.retur .tile-value { color: var(--bc-dhw); }
  .pressure-value { color: var(--bc-green); }

  .p-scale {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: var(--bc-line);
  }
  .p-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bc-green) 55%, transparent);
  }
  .p-mark {
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 7px;
    border-radius: 2px 2px 0 0;
    background: var(--bc-txt);
    transform: translateX(-50%);
  }
  .pressure-card.alarm {
    --tile: var(--bc-alarm);
    background: color-mix(in srgb, var(--bc-alarm) 14%, transparent);
    animation: alarm-glow 1.6s ease-in-out infinite;
  }
  .pressure-card.alarm .tile-label,
  .pressure-card.alarm .pressure-value { color: var(--bc-alarm); }
  .pressure-card.alarm .p-mark { background: var(--bc-alarm); }
  @keyframes alarm-glow {
    0%, 100% { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bc-alarm) 30%, transparent); }
    50% { box-shadow: inset 0 0 0 1px var(--bc-alarm), 0 0 12px color-mix(in srgb, var(--bc-alarm) 40%, transparent); }
  }

  /* ---------- Controls: offset, consumption, setpoints ---------- */
  .controls {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: minmax(min-content, 1fr);
    gap: var(--bc-gap);
    flex: 1 1 auto;
  }
  .controls.odd > :first-child { grid-column: 1 / -1; }

  .box {
    --bx: var(--bc-accent);
    container-type: size;
    min-height: 86px;
    padding: 8px 10px 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    overflow: hidden;
  }
  .box .edge-bar .fill { background: var(--bx); }
  .box-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 20px;
  }
  .box-title {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 10.5px;
    color: var(--bc-sub);
    letter-spacing: 0.7px;
    font-weight: 700;
    min-width: 0;
  }
  .box-title > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .box-title ha-icon { --mdc-icon-size: 15px; color: var(--bx); flex-shrink: 0; }

  .offset-box { --bx: var(--bc-green); }
  .offset-box.disabled .sp-control,
  .offset-box.disabled .edge-bar { opacity: 0.4; }
  .offset-value {
    font-size: clamp(22px, min(32cqh, 18cqw), 46px);
    font-weight: 700;
    color: var(--bc-green);
    line-height: 1;
    text-align: center;
    min-width: 2.1em;
  }

  .cons-box { --bx: var(--bc-accent); justify-content: flex-start; }
  .cons-total-val {
    font-size: clamp(18px, min(22cqh, 11cqw), 36px);
    font-weight: 700;
    line-height: 1;
    color: var(--bc-txt);
    white-space: nowrap;
  }
  .cons-rows {
    display: flex;
    flex-direction: column;
    gap: clamp(1px, 3cqh, 10px);
    margin: auto 0;
  }
  .split { display: flex; gap: 2px; }
  .split > span { position: static; display: block; height: 100%; transition: width 0.5s; }
  .split .dhw { background: var(--bc-dhw); }
  .split .ch { background: var(--bc-ch); }
  .cons-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    font-size: clamp(13px, min(15cqh, 7.5cqw), 26px);
    border-radius: 7px;
    padding: 1px 4px;
    margin: 0 -4px;
  }
  .cons-name {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--bc-sub);
    font-weight: 700;
    font-size: clamp(10.5px, min(12cqh, 6cqw), 19px);
    letter-spacing: 0.5px;
  }
  .cons-name ha-icon { --mdc-icon-size: clamp(15px, min(17cqh, 8.5cqw), 28px); }
  .cons-name.dhw ha-icon { color: var(--bc-dhw); }
  .cons-name.ch ha-icon { color: var(--bc-ch); }
  .cons-val { font-weight: 600; color: var(--bc-txt); white-space: nowrap; }
  .cons-val .u { font-size: 0.8em; }

  .sp-card.dhw { --bx: var(--bc-dhw); }
  .sp-card.ch { --bx: var(--bc-ch); }
  .sp-card {
    background: linear-gradient(
        160deg,
        color-mix(in srgb, var(--bx) 13%, transparent),
        color-mix(in srgb, var(--bx) 3%, transparent) 70%
      ),
      var(--bc-surface);
  }
  .sp-val {
    font-size: clamp(24px, min(36cqh, 19cqw), 52px);
    font-weight: 700;
    line-height: 1;
    color: var(--bx);
    white-space: nowrap;
    transition: opacity 0.2s;
  }
  .sp-val .u { font-size: 1em; font-weight: 400; color: var(--bx); opacity: 0.6; margin-left: 0; }
  .sp-card.disabled { background: var(--bc-surface); }
  .sp-card.disabled .sp-val,
  .sp-card.disabled .step-btn,
  .sp-card.disabled .edge-bar { opacity: 0.45; }

  .sp-control {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }
  .step-btn {
    width: clamp(32px, min(45cqh, 21cqw), 56px);
    height: clamp(32px, min(45cqh, 21cqw), 56px);
    border-radius: 50%;
    background: var(--bc-btn-bg);
    border: none;
    color: var(--bc-txt);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0;
    transition: background 0.15s, transform 0.1s;
  }
  .step-btn ha-icon { --mdc-icon-size: clamp(18px, min(22cqh, 10cqw), 28px); }
  .step-btn:hover:not(:disabled) { background: var(--bc-btn-hover); }
  .step-btn:active:not(:disabled) { transform: scale(0.92); }
  .step-btn:disabled { opacity: 0.35; cursor: default; }
  /* Value clicked but not yet confirmed by the boiler. */
  .sp-val.pending,
  .offset-value.pending { opacity: 0.55; }

  .clickable:focus-visible,
  .badge:focus-visible,
  .step-btn:focus-visible {
    outline: 2px solid var(--bc-accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .pressure-card.alarm,
    .status-badge.offline,
    .status-dot.live,
    .unit.burning .flame { animation: none; }
  }

  /* ================= Responsive =================
     Phone (default): toggles on a second header row, 2-row sensor block,
     controls in 2 columns.
     Tablet (≥ 600px): header on one row, sensors on one row.
     Desktop (≥ 780px): controls on one row as well. */

  @container boiler-card (max-width: 599px) {
    .header-controls {
      flex: 1 1 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @container boiler-card (max-width: 400px) {
    ha-card { padding: 10px; }
    :host { --bc-gap: 6px; }
    .unit { --ring: clamp(48px, min(46cqh, 70cqw), 110px); }
    .unit .val { font-size: clamp(15px, 14cqh, 30px); }
    .sensor-tile { padding: 7px 8px; }
    .tile-value { font-size: clamp(18px, min(36cqh, 22cqw), 34px); }
    .tile-label { font-size: 10px; letter-spacing: 0.4px; }
    .sp-val { font-size: clamp(22px, min(32cqh, 18cqw), 46px); }
    .offset-value { font-size: clamp(20px, min(28cqh, 16cqw), 40px); }
    .step-btn { width: clamp(30px, min(40cqh, 20cqw), 50px); height: clamp(30px, min(40cqh, 20cqw), 50px); }
    .box { padding: 7px 8px 10px; }
    .box-title { font-size: 10px; letter-spacing: 0.4px; }
    .title-text { font-size: 14px; }
    .status-badge { font-size: 10px; }
  }
  @container boiler-card (max-width: 330px) {
    .controls { grid-template-columns: minmax(0, 1fr); }
    .controls.odd > :first-child { grid-column: auto; }
  }

  @container boiler-card (min-width: 600px) {
    .flow-row {
      grid-template-columns: minmax(0, 1.25fr) repeat(4, minmax(0, 1fr));
      grid-auto-rows: minmax(min-content, 1fr);
    }
    .sensor-tile { min-height: 68px; }
    .flow-row > * { grid-row: 1 !important; grid-column: auto !important; }
    .flow-row > .tile-wide { grid-column: span 2 !important; }
    .unit {
      --ring: clamp(46px, min(74cqh, 40cqw), 120px);
      flex-direction: row;
      gap: 8px;
      padding: 6px 10px;
    }
    .unit-text { align-items: flex-start; }
    .unit .val { margin-top: 0; font-size: clamp(17px, 30cqh, 36px); }
  }

  @container boiler-card (min-width: 780px) {
    .controls { grid-template-columns: repeat(var(--n), minmax(0, 1fr)); }
    .controls.odd > :first-child { grid-column: auto; }
  }

  @container boiler-card (min-width: 1000px) {
    :host { --bc-gap: 9px; }
    ha-card { padding: 14px; }
  }
`;console.info("%c EBUSD-CLASONE-CARD %c v1.1.0 ","color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards||[],window.customCards.push({type:"ebusd-clasone-card",name:"EBusD Clas One Card",description:"Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",preview:!0,documentationURL:"https://github.com/phateks/EBusD-ClasONE-card"});const Nt={idle:"#8aa0bd",ch:"#ff8a5c",dhw:"#4ecdc4",other:"#8aa0bd",offline:"#ff5c5c"},Rt=new Set(["unavailable","unknown"]),qt=new Set(["off","false","0","no","disconnected","offline","unavailable","unknown"]);let Dt=class extends rt{constructor(){super(...arguments),this.pending={}}static async getConfigElement(){return await Promise.resolve().then(function(){return Xt}),document.createElement("ebusd-clasone-card-editor")}static getStubConfig(){return{type:"custom:ebusd-clasone-card",title:ft,status_entity:"sensor.ebusd_boiler_boiler_status",ch_switch_entity:"switch.ebusd_boiler_heating_status",thermoreg_entity:"switch.ebusd_boiler_thermoregulation_switch",flame_power_entity:"sensor.ebusd_boiler_flame_power_kw",flow_temp_entity:"sensor.ebusd_boiler_lwt_temp",return_temp_entity:"sensor.ebusd_boiler_ewt_temp",outdoor_temp_entity:"sensor.ebusd_boiler_ext_temp",pressure_entity:"sensor.ebusd_boiler_boiler_pressure",offset_entity:"number.ebusd_boiler_z1_heat_offset_set",computed_setpoint_entity:"sensor.ebusd_boiler_ch_flow_setpoint",dhw_setpoint_entity:"number.ebusd_boiler_dhw_comfort_temp_set",dhw_setpoint_display_entity:"sensor.ebusd_boiler_dhw_current_target_temp",ch_setpoint_entity:"number.ebusd_boiler_z1_heat_setpoint_set"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config={...t}}getCardSize(){return 6}getGridOptions(){return{columns:12,min_columns:6,min_rows:4}}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this.pending))t.timer&&clearTimeout(t.timer);this.pending={}}trackedEntities(){const t=this.config;return[t.status_entity,t.connection_entity,t.ch_switch_entity,t.thermoreg_entity,t.flame_power_entity,t.flow_temp_entity,t.return_temp_entity,t.outdoor_temp_entity,t.pressure_entity,t.offset_entity,t.computed_setpoint_entity,t.dhw_consumption_entity,t.ch_consumption_entity,t.dhw_setpoint_entity,t.dhw_setpoint_display_entity,t.ch_setpoint_entity,t.ch_setpoint_display_entity].filter(t=>!!t)}shouldUpdate(t){if(!this.config)return!1;if(t.size>1||!t.has("hass"))return!0;const e=t.get("hass");return!e||!this.hass||(this.darkMode(e)!==this.darkMode(this.hass)||this.trackedEntities().some(t=>e.states[t]!==this.hass.states[t]))}willUpdate(t){if(!t.has("hass")||!this.hass)return;let e;for(const[t,i]of Object.entries(this.pending))i.sent&&this.num(t)===i.value&&(e=e??{...this.pending},delete e[t]);e&&(this.pending=e)}updated(t){t.has("hass")&&this.hass&&this.toggleAttribute("light",!1===this.darkMode(this.hass))}darkMode(t){return t.themes?.darkMode}st(t){return t?this.hass?.states?.[t]:void 0}available(t){const e=this.st(t);return!!e&&!Rt.has(e.state)}num(t){const e=this.st(t);if(!e)return;const i=parseFloat(e.state);return isNaN(i)?void 0:i}isOn(t){return"on"===this.st(t)?.state}fmt(t,e=0,i="°"){return void 0===t?"—":`${t.toFixed(e)}${i}`}decimals(t){const e=String(t);return e.includes(".")?e.split(".")[1].length:0}limits(t,e,i,s,n){const o=this.st(t)?.attributes??{},r=(t,e,i)=>{if("number"==typeof t&&!isNaN(t))return t;const s="number"==typeof e?e:parseFloat(String(e));return isNaN(s)?i:s};return{min:r(e,o.min,n.min),max:r(i,o.max,n.max),step:r(s,o.step,n.step)||n.step}}isOffline(){const t=this.config;if(t.connection_entity){const e=this.st(t.connection_entity);if(!e||qt.has(e.state.toLowerCase()))return!0}return!(!t.status_entity||this.available(t.status_entity))}onKey(t){return e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t())}}toggle(t){t&&this.available(t)&&this.hass.callService("homeassistant","toggle",{entity_id:t})}moreInfo(t){t&&bt(this,"hass-more-info",{entityId:t})}setNumber(t,e){const i="input_number"===t.split(".")[0]?"input_number":"number";this.hass.callService(i,"set_value",{entity_id:t,value:e})}queueNumber(t,e,i){const s=this.pending[t];s?.timer&&clearTimeout(s.timer);const n=()=>{const i=this.pending[t];i&&i.value===e&&(this.setNumber(t,e),this.pending={...this.pending,[t]:{value:e,sent:!0}},window.setTimeout(()=>{const i=this.pending[t];if(i?.sent&&i.value===e){const e={...this.pending};delete e[t],this.pending=e}},15e3))},o={value:e,sent:!1};i>0&&(o.timer=window.setTimeout(n,i)),this.pending={...this.pending,[t]:o},i<=0&&n()}render(){if(!this.config||!this.hass)return W;const t=this.isOffline(),{kind:e}=this.statusInfo(t),i=this.config.height,s=void 0===i||""===i?"":`height:${"number"==typeof i||/^\d+(\.\d+)?$/.test(String(i))?`${i}px`:i};`;return L`
      <ha-card class="st-${e}" style="--st:${Nt[e]};${s}">
        ${this.renderHeader(t)} ${this.renderFlowRow(e)} ${this.renderControls(t)}
      </ha-card>
    `}statusInfo(t){return t?{label:"EBUS OFFLINE",kind:"offline"}:function(t){if(!t)return{label:"—",kind:"other"};const e=t.toLowerCase();return"standby"===e?{label:"IDLE",kind:"idle"}:"heating"===e?{label:"CH HEATING",kind:"ch"}:"heating hot water"===e||"water tank"===e||"comfort"===e?{label:"DHW HEATING",kind:"dhw"}:{label:t.toUpperCase(),kind:"other"}}(this.st(this.config.status_entity)?.state)}renderHeader(t){const e=this.config,{label:i,kind:s}=this.statusInfo(t),n=t&&e.connection_entity?e.connection_entity:e.status_entity??e.connection_entity,o=()=>this.moreInfo(n),r="ch"===s||"dhw"===s;return L`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon ${r?"active":""}">
            <ha-icon icon="mdi:water-boiler"></ha-icon>
          </div>
          <div class="title-text">${e.title??ft}</div>
          ${n?L`<div
                class="status-badge clickable ${s}"
                role="button"
                tabindex="0"
                title=${t?"ebusd / eBUS nu răspunde":i}
                @click=${o}
                @keydown=${this.onKey(o)}
              >
                ${t?L`<ha-icon icon="mdi:lan-disconnect"></ha-icon>`:L`<span class="status-dot ${r?"live":""}"></span>`}${i}
              </div>`:W}
        </div>

        <div class="header-controls">
          ${e.ch_switch_entity?this.renderToggle(e.ch_switch_entity,e.ch_switch_label??gt,"ch","mdi:radiator"):W}
          ${e.thermoreg_entity?this.renderToggle(e.thermoreg_entity,e.thermoreg_label??_t,"tr","mdi:home-thermometer-outline"):W}
        </div>
      </div>
    `}renderToggle(t,e,i,s){const n=this.isOn(t),o=this.available(t),r=()=>this.toggle(t);return L`
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
        ${s?L`<ha-icon icon=${s}></ha-icon>`:W}
        <span class="lbl">${e}</span>
        <span class="track"><span class="knob"></span></span>
      </div>
    `}renderFlowRow(t){const e=this.config,i=this.num(e.flame_power_entity),s=(i??0)>.1,n=(s||"ch"===t||"dhw"===t)&&!1!==e.flame_glow&&!1!==e.electric_border,o=()=>this.moreInfo(e.flame_power_entity),r=e.flame_max??vt,a=Math.max(0,Math.min(1,(i??0)/(r||1))),c=2*Math.PI*34,l=.75*c;return L`
      <div class="flow-row">
        <div
          class="unit clickable ${s?"burning":""} ${n?"glow":""}"
          role="button"
          tabindex="0"
          title="${e.flame_label??xt}: ${this.fmt(i,1," kW")}"
          @click=${o}
          @keydown=${this.onKey(o)}
        >
          <div class="ring">
            <svg viewBox="0 0 80 80" aria-hidden="true">
              <circle class="ring-bg" cx="40" cy="40" r="34"
                stroke-dasharray="${l} ${c}" transform="rotate(135 40 40)"></circle>
              <circle class="ring-fg" cx="40" cy="40" r="34" opacity=${a>0?1:0}
                stroke-dasharray="${l*a} ${c}" transform="rotate(135 40 40)"></circle>
            </svg>
            <ha-icon class="flame" icon="mdi:fire"></ha-icon>
          </div>
          <div class="unit-text">
            <div class="val">
              ${void 0===i?"—":i.toFixed(1)}<span class="u">kW</span>
            </div>
            <div class="lbl">${e.flame_label??xt}</div>
          </div>
        </div>

        ${this.renderTemperatureTile(e.flow_temp_entity,e.flow_temp_label??wt,this.num(e.flow_temp_entity),0,"tur","mdi:thermometer-chevron-up")}
        ${this.renderTemperatureTile(e.return_temp_entity,e.return_temp_label??yt,this.num(e.return_temp_entity),0,"retur","mdi:thermometer-chevron-down")}
        ${e.outdoor_temp_entity?this.renderTemperatureTile(e.outdoor_temp_entity,e.outdoor_temp_label??$t,this.num(e.outdoor_temp_entity),1,"outdoor-temp","mdi:home-export-outline",!e.pressure_entity):W}
        ${e.pressure_entity?this.renderPressure(e.pressure_entity,!e.outdoor_temp_entity):W}
      </div>
    `}renderTemperatureTile(t,e,i,s,n,o,r=!1){const a=()=>this.moreInfo(t);return L`
      <div
        class="pipe sensor-tile ${n} clickable ${r?"tile-wide":""}"
        role="button"
        tabindex="0"
        @click=${a}
        @keydown=${this.onKey(a)}
      >
        <span class="tile-label"><ha-icon icon=${o}></ha-icon>${e}</span>
        <span class="tile-value"
          >${void 0===i?"—":i.toFixed(s)}<span class="u">°C</span></span
        >
      </div>
    `}renderPressure(t,e){const i=this.config,s=this.num(t),n=i.pressure_min??Pt,o=i.pressure_max??Ut,r=void 0!==s&&s<n,a=void 0!==s&&s>o,c=r||a,l=i.pressure_label??kt,d=r?`Presiune sub ${n} bar`:a?`Presiune peste ${o} bar`:l,p=()=>this.moreInfo(t),h=Math.max(3,o+.5),u=t=>`${Math.max(0,Math.min(100,t/h*100))}%`;return L`
      <div
        class="pipe sensor-tile pressure-card clickable ${c?"alarm":""} ${e?"tile-wide":""}"
        role="button"
        tabindex="0"
        title=${d}
        @click=${p}
        @keydown=${this.onKey(p)}
      >
        <span class="tile-label"
          ><ha-icon icon=${c?"mdi:alert-circle":"mdi:gauge"}></ha-icon>${l}</span
        >
        <span class="tile-value pressure-value"
          >${void 0===s?"—":s.toFixed(1)}<span class="u">bar</span></span
        >
        <div class="p-scale" aria-hidden="true">
          <span class="p-band" style="left:${u(n)};right:calc(100% - ${u(o)});"></span>
          ${void 0!==s?L`<span class="p-mark" style="left:${u(s)};"></span>`:W}
        </div>
      </div>
    `}renderControls(t){const e=this.config,i=this.isOn(e.thermoreg_entity),s=[this.renderOffset(t),e.dhw_consumption_entity||e.ch_consumption_entity?this.renderConsumption():W,this.renderSetpointCard("dhw","mdi:shower-head",e.dhw_setpoint_label??Et,e.dhw_setpoint_entity,e.dhw_setpoint_display_entity??e.dhw_setpoint_entity,this.limits(e.dhw_setpoint_entity,e.dhw_min,e.dhw_max,e.dhw_step,Ht),t),this.renderSetpointCard("ch","mdi:radiator",e.ch_setpoint_label??St,e.ch_setpoint_entity,e.ch_setpoint_display_entity??e.ch_setpoint_entity,this.limits(e.ch_setpoint_entity,e.ch_min,e.ch_max,e.ch_step,zt),t||i,!t&&i)].filter(t=>t!==W);return s.length?L`<div class="controls ${s.length%2?"odd":""}" style="--n:${s.length};">
      ${s}
    </div>`:L``}stepBtn(t,e,i,s){return L`<button
      class="step-btn"
      aria-label="${t} ${e<0?"−":"+"}"
      ?disabled=${i}
      @click=${s}
    >
      <ha-icon icon=${e<0?"mdi:minus":"mdi:plus"}></ha-icon>
    </button>`}renderOffset(t){const e=this.config;if(!e.offset_entity)return W;const i=e.offset_entity,s=this.isOn(e.thermoreg_entity),n=e.offset_min??Ot.min,o=e.offset_max??Ot.max,r=e.offset_step||Ot.step,a=this.pending[i],c=this.num(i),l=a?.value??c,d=t||!s||!this.available(i)||void 0===c,p=this.decimals(r),h=void 0===l?"--":`${l>0?"+":""}${l.toFixed(p)}`,u=s?this.num(e.computed_setpoint_entity):void 0,m=e.offset_label??At,b=t=>{if(d||void 0===l)return;const e=Math.min(o,Math.max(n,l+t)),s=parseFloat(e.toFixed(p));s!==l&&this.queueNumber(i,s,700)},f=o-n||1,g=Math.max(0,Math.min(100,(0-n)/f*100)),_=void 0===l?g:(l-n)/f*100;return L`
      <div class="box offset-box ${d?"disabled":""}">
        <div class="box-head">
          <span class="box-title" title=${m}
            ><ha-icon icon="mdi:tune-vertical-variant"></ha-icon><span>${m}</span></span
          >
          ${void 0!==u?L`<span class="chip accent" title="Tur calculat de termoreglare"
                ><ha-icon icon="mdi:arrow-right-thin"></ha-icon>${u.toFixed(0)}°</span
              >`:s?W:L`<span class="chip">OFF</span>`}
        </div>
        <div class="sp-control">
          ${this.stepBtn(m,-1,d||void 0!==l&&l<=n,()=>b(-r))}
          <span class="offset-value ${a?"pending":""}">${h}</span>
          ${this.stepBtn(m,1,d||void 0!==l&&l>=o,()=>b(r))}
        </div>
        <div class="edge-bar" aria-hidden="true">
          <span class="zero" style="left:${g}%;"></span>
          <span class="fill" style="left:${Math.min(_,g)}%;width:${Math.abs(_-g)}%;"></span>
        </div>
      </div>
    `}renderConsumption(){const t=this.config,e=t.consumption_decimals??Tt,i=(t=>this.st(t)?.attributes?.unit_of_measurement??"kW")(t.dhw_consumption_entity??t.ch_consumption_entity),s=this.num(t.dhw_consumption_entity),n=this.num(t.ch_consumption_entity),o=void 0===s&&void 0===n?void 0:(s??0)+(n??0),r=t=>o&&t?Math.max(0,t/o*100):0,a=t=>void 0===t?"—":L`${t.toFixed(e)}<span class="u">${i}</span>`,c=(t,e,i,s,n)=>s?L`
            <div
              class="cons-row clickable"
              role="button"
              tabindex="0"
              @click=${()=>this.moreInfo(s)}
              @keydown=${this.onKey(()=>this.moreInfo(s))}
            >
              <span class="cons-name ${e}"><ha-icon icon=${t}></ha-icon>${i}</span>
              <span class="cons-val">${a(n)}</span>
            </div>
          `:W;return L`
      <div class="box cons-box">
        <div class="box-head">
          <span class="box-title"
            ><ha-icon icon="mdi:lightning-bolt-outline"></ha-icon><span
              >${t.consumption_label??Ct}</span
            ></span
          >
          <span class="cons-total-val">${a(o)}</span>
        </div>
        <div class="cons-rows">
          ${c("mdi:shower-head","dhw","DHW",t.dhw_consumption_entity,s)}
          ${c("mdi:radiator","ch","CH",t.ch_consumption_entity,n)}
        </div>
        <div class="edge-bar split" aria-hidden="true">
          <span class="dhw" style="width:${r(s)}%;"></span>
          <span class="ch" style="width:${r(n)}%;"></span>
        </div>
      </div>
    `}renderSetpointCard(t,e,i,s,n,{min:o,max:r,step:a},c,l=!1){if(!s)return W;const d=this.pending[s],p=this.num(s)??this.num(n),h=d?.value??p,u=c||!this.available(s)||void 0===p,m=this.decimals(a),b=t=>{if(u||void 0===h)return;const e=Math.min(r,Math.max(o,h+t)),i=parseFloat(e.toFixed(m));i!==h&&this.queueNumber(s,i,700)},f=void 0===h?0:Math.max(0,Math.min(100,(h-o)/(r-o||1)*100));return L`
      <div class="box sp-card ${t} ${u?"disabled":""}">
        <div class="box-head">
          <span class="box-title" title=${i}
            ><ha-icon icon=${e}></ha-icon><span>${i}</span></span
          >
          ${l?L`<span class="chip" title="Setat automat de termoreglare"
                ><ha-icon icon="mdi:lock-outline"></ha-icon>AUTO</span
              >`:W}
        </div>
        <div class="sp-control">
          ${this.stepBtn(i,-1,u||void 0!==h&&h<=o,()=>b(-a))}
          <span class="sp-val ${d?"pending":""}"
            >${void 0===h?"—":h.toFixed(m)}<span class="u">°</span></span
          >
          ${this.stepBtn(i,1,u||void 0!==h&&h>=r,()=>b(a))}
        </div>
        <div class="edge-bar" aria-hidden="true"><span class="fill" style="width:${f}%;"></span></div>
      </div>
    `}};Dt.styles=Mt,t([pt({attribute:!1})],Dt.prototype,"hass",void 0),t([ht()],Dt.prototype,"config",void 0),t([ht()],Dt.prototype,"pending",void 0),Dt=t([ct("ebusd-clasone-card")],Dt);const jt=(t,e)=>({name:t,selector:{entity:{domain:e}}}),It=t=>({name:t,selector:{text:{}}}),Lt=(t,e=1)=>({name:t,selector:{number:{mode:"box",step:e}}}),Ft=t=>({type:"grid",name:"",schema:t}),Wt=(t,e,i=!1)=>({type:"expandable",name:"",title:t,expanded:i,schema:e}),Bt=[Ft([It("title"),It("height")]),Wt("Status și conexiune",[jt("status_entity",["sensor"]),jt("connection_entity",["binary_sensor","sensor"]),jt("ch_switch_entity",["switch","input_boolean"]),jt("thermoreg_entity",["switch","input_boolean"]),Ft([It("ch_switch_label"),It("thermoreg_label")])],!0),Wt("Temperaturi, flacără și presiune",[jt("flame_power_entity",["sensor"]),Ft([It("flame_label"),Lt("flame_max",.5)]),{name:"flame_glow",selector:{boolean:{}}},jt("flow_temp_entity",["sensor"]),It("flow_temp_label"),jt("return_temp_entity",["sensor"]),It("return_temp_label"),jt("outdoor_temp_entity",["sensor"]),It("outdoor_temp_label"),jt("pressure_entity",["sensor"]),It("pressure_label"),Ft([Lt("pressure_min",.1),Lt("pressure_max",.1)])]),Wt("Termoreglare",[jt("offset_entity",["number","input_number"]),It("offset_label"),jt("computed_setpoint_entity",["sensor"]),Ft([Lt("offset_min"),Lt("offset_max"),Lt("offset_step")])]),Wt("Consum (opțional)",[jt("dhw_consumption_entity",["sensor"]),jt("ch_consumption_entity",["sensor"]),Ft([It("consumption_label"),Lt("consumption_decimals")])]),Wt("Setpoint-uri DHW / CH",[jt("dhw_setpoint_entity",["number","input_number"]),jt("dhw_setpoint_display_entity",["sensor","number"]),It("dhw_setpoint_label"),Ft([Lt("dhw_min"),Lt("dhw_max"),Lt("dhw_step")]),jt("ch_setpoint_entity",["number","input_number"]),jt("ch_setpoint_display_entity",["sensor","number"]),It("ch_setpoint_label"),Ft([Lt("ch_min"),Lt("ch_max"),Lt("ch_step")])])],Gt={title:"Titlu card",status_entity:"Status boiler (sensor)",connection_entity:"Conexiune eBUS (opțional, on = conectat)",ch_switch_entity:"Switch CH / încălzire",thermoreg_entity:"Switch termoreglare",ch_switch_label:"Nume buton CH",thermoreg_label:"Nume buton termoreglare",flame_power_entity:"Putere flacără (kW)",flame_label:"Nume casetă flacără",flame_max:"Putere maximă inel flacără (kW)",flame_glow:"Glow pe flacără când centrala cere căldură",height:"Înălțime card (ex. 360px; gol = automat)",flow_temp_entity:"Temperatură TUR",flow_temp_label:"Nume casetă TUR",return_temp_entity:"Temperatură RETUR",return_temp_label:"Nume casetă RETUR",outdoor_temp_entity:"Temperatură exterioară",outdoor_temp_label:"Nume casetă exterioară",pressure_entity:"Presiune (sensor)",pressure_label:"Nume casetă presiune",pressure_min:`Alarmă sub (bar, implicit ${Pt})`,pressure_max:`Alarmă peste (bar, implicit ${Ut})`,offset_entity:"Offset termoreglare (number)",offset_label:"Titlu offset",computed_setpoint_entity:"Setpoint TUR calculat (sensor)",offset_min:"Offset min",offset_max:"Offset max",offset_step:"Offset pas",dhw_consumption_entity:"Consum DHW (sensor)",ch_consumption_entity:"Consum CH (sensor)",consumption_label:"Titlu casetă consum",consumption_decimals:"Zecimale consum",dhw_setpoint_entity:"DHW setpoint (number, control)",dhw_setpoint_display_entity:"DHW setpoint (afișaj)",dhw_setpoint_label:"Titlu DHW",dhw_min:"DHW min",dhw_max:"DHW max",dhw_step:"DHW pas",ch_setpoint_entity:"CH setpoint (number, control)",ch_setpoint_display_entity:"CH setpoint (afișaj)",ch_setpoint_label:"Titlu CH",ch_min:"CH min",ch_max:"CH max",ch_step:"CH pas"},Kt={connection_entity:"Când e off/indisponibil, badge-ul de status arată EBUS OFFLINE. Fără ea, cardul se bazează doar pe senzorul de status.",offset_min:`Gol = implicit ${Ot.min} / ${Ot.max}, pas ${Ot.step}.`,dhw_consumption_entity:"Dacă nu setezi niciun senzor de consum, caseta nu apare și offset-ul ocupă tot rândul. Totalul = DHW + CH.",dhw_min:"Gol = valoarea din entitate.",ch_min:"Gol = valoarea din entitate."};let Vt=class extends rt{constructor(){super(...arguments),this._computeLabel=t=>Gt[t.name]??t.name,this._computeHelper=t=>Kt[t.name]}setConfig(t){this._config=t}render(){return this.hass&&this._config?L`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${Bt}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:W}_valueChanged(t){const e={...t.detail.value};for(const t of Object.keys(e)){const i=e[t];""!==i&&null!=i||delete e[t]}bt(this,"config-changed",{config:e})}};t([pt({attribute:!1})],Vt.prototype,"hass",void 0),t([ht()],Vt.prototype,"_config",void 0),Vt=t([ct("ebusd-clasone-card-editor")],Vt);var Xt=Object.freeze({__proto__:null,get EbusdClasOneCardEditor(){return Vt}});export{Dt as EbusdClasOneCard};
