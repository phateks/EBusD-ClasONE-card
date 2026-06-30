function t(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,_=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);n?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i;const o=n.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const o=this.constructor;if(!1===i&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??y)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[b("elementProperties")]=new Map,v[b("finalized")]=new Map,m?.({ReactiveElement:v}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,w=t=>t,A=x.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,k=`<${O}>`,P=document,H=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=P.createTreeWalker(P,129);function G(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,d=0;for(;d<s.length&&(r.lastIndex=d,c=r.exec(s),null!==c);)d=r.lastIndex,r===N?"!--"===c[1]?r=M:void 0!==c[1]?r=z:void 0!==c[2]?(L.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=j):void 0!==c[3]&&(r=j):r===j?">"===c[0]?(r=n??N,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?j:'"'===c[3]?I:D):r===I||r===D?r=j:r===M||r===z?r=N:(r=j,n=void 0);const h=r===j&&t[e+1].startsWith("/>")?" ":"";o+=r===N?s+k:l>=0?(i.push(a),s.slice(0,l)+S+s.slice(l)+C+h):s+C+(-2===l?e:h)}return[G(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,s),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=l[o++],s=i.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],H()),V.nextNode(),a.push({type:2,index:++n});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===B)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);V.currentNode=i;let n=V.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=V.nextNode(),o++)}return V.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new X(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,i[s+r],e,r),a===B&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class st extends Y{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??F)===B)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(K,X),(x.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;class rt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new X(e.insertBefore(H(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:y},dt=(t=lt,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return ht({...t,state:!0,attribute:!1})}var ut,ft;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ft||(ft={}));var _t=function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,t.dispatchEvent(n),n};const mt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)})`
  :host {
    --bc-accent: #4ecdc4;
    --bc-ch: #ff8a5c;
    --bc-dhw: #4ecdc4;
    --bc-green: #5dcaa5;
    --bc-txt: #e8eef6;
    --bc-sub: #8aa0bd;
    --bc-box-bg: #0f1d30;
    --bc-border: #26425f;
    --bc-radius: 18px;
  }

  ha-card {
    /* No hardcoded background: inherit the theme's default so transparency
       (e.g. via card_mod or a transparent theme) can be applied if needed. */
    background: var(--ha-card-background, var(--card-background-color, none));
    border: 1px solid var(--bc-border);
    border-radius: var(--bc-radius);
    box-shadow: 0 0 0 1px rgba(63, 208, 255, 0.06), 0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 16px;
    color: var(--bc-txt);
    overflow: hidden;
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
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
    color: #cbd9ea;
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
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4a5a70;
  }

  /* ---------- Flow row ---------- */
  .flow-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .unit {
    flex: 0 0 124px;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .unit-icons {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .unit-icons .boiler {
    --mdc-icon-size: 40px;
    color: #8aa0bd;
  }
  .unit-icons .flame {
    position: absolute;
    bottom: -2px;
    right: -2px;
    --mdc-icon-size: 22px;
    color: #3a4a60;
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

  .pipes {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .pipe {
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    flex: 1;
  }
  .pipe.tur { border-left: 3px solid var(--bc-ch); }
  .pipe.retur { border-left: 3px solid #4ecdc4; }
  .pipe .plabel { font-size: 13px; font-weight: 700; color: var(--bc-sub); letter-spacing: 1px; }
  .pipe .pval { font-size: 24px; font-weight: 700; }
  .pipe.tur .pval { color: var(--bc-ch); }
  .pipe.retur .pval { color: #4ecdc4; }

  .offset-box {
    flex: 0 0 260px;
    background: var(--bc-box-bg);
    border: 1px solid #5dcaa533;
    border-radius: 14px;
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
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
  .slider {
    width: 100%;
    accent-color: var(--bc-green);
    cursor: pointer;
  }
  .ticks {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #5a6f88;
    padding: 0 2px;
  }

  /* ---------- Setpoints row ---------- */
  .setpoints {
    display: flex;
    gap: 12px;
  }
  .sp-card {
    flex: 1;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
    height: 40px;
    border-radius: 11px;
    background: #1d314f;
    border: none;
    color: var(--bc-txt);
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .step-btn:hover { background: #25425f; }
  .step-btn:active { transform: scale(0.95); }
  .sp-val { font-size: 28px; font-weight: 700; }
  .sp-val.display-only { padding: 4px 0; }

  ha-icon.clickable { cursor: pointer; }
`;console.info("%c EBUSD-CLASONE-CARD %c v1.0.1 ","color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards||[],window.customCards.push({type:"ebusd-clasone-card",name:"EBusD Clas One Card",description:"Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",preview:!0,documentationURL:"https://github.com/phateks/EBusD-ClasONE-card"});const bt={idle:"#8aa0bd",ch:"#ff8a5c",dhw:"#4ecdc4",other:"#8aa0bd"};let gt=class extends rt{static async getConfigElement(){return await Promise.resolve().then(function(){return xt}),document.createElement("ebusd-clasone-card-editor")}static getStubConfig(){return{type:"custom:ebusd-clasone-card",title:"ARISTON CLAS ONE",status_entity:"sensor.ebusd_boiler_boiler_status",ch_switch_entity:"switch.ebusd_boiler_heating_status",thermoreg_entity:"switch.heating_ebusd_boiler_thermoregulation_switch",flame_power_entity:"sensor.ebusd_boiler_flame_power_kw",flow_temp_entity:"sensor.ebusd_boiler_lwt_temp",return_temp_entity:"sensor.ebusd_boiler_ewt_temp",offset_entity:"number.ariston_heating_flow_offset_1",offset_min:-14,offset_max:14,offset_step:2,computed_setpoint_entity:"sensor.ebusd_boiler_ch_flow_setpoint",dhw_setpoint_entity:"number.ebusd_boiler_dhw_comfort_temp_set",dhw_setpoint_display_entity:"sensor.ebusd_boiler_dhw_current_target_temp",dhw_min:36,dhw_max:60,dhw_step:1,ch_setpoint_entity:"number.ebusd_boiler_z1_heat_setpoint_set",ch_min:30,ch_max:80,ch_step:1,pressure_entity:"sensor.ebusd_boiler_boiler_pressure"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config={offset_min:-14,offset_max:14,offset_step:2,dhw_min:36,dhw_max:60,dhw_step:1,ch_min:30,ch_max:80,ch_step:1,title:"ARISTON CLAS ONE",...t}}getCardSize(){return 4}shouldUpdate(t){return!!this.config&&(t.has("config")||t.has("hass"))}st(t){return t?this.hass?.states?.[t]:void 0}num(t){const e=this.st(t);if(!e)return;const s=parseFloat(e.state);return isNaN(s)?void 0:s}isOn(t){return"on"===this.st(t)?.state}fmt(t,e=0,s="°"){return void 0===t?"—":`${t.toFixed(e)}${s}`}toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}moreInfo(t){t&&_t(this,"hass-more-info",{entityId:t})}setNumber(t,e){t&&this.hass.callService("number","set_value",{entity_id:t,value:e})}render(){return this.config&&this.hass?W`
      <ha-card>
        ${this.renderHeader()} ${this.renderFlowRow()} ${this.renderSetpoints()}
      </ha-card>
    `:F}renderHeader(){const t=this.config,e=this.st(t.status_entity)?.state,{label:s,kind:i}=function(t){if(!t)return{label:"—",kind:"other"};const e=t.toLowerCase();return"standby"===e?{label:"IDLE",kind:"idle"}:"heating"===e?{label:"CH HEATING",kind:"ch"}:"heating hot water"===e||"water tank"===e||"comfort"===e?{label:"DHW HEATING",kind:"dhw"}:{label:t.toUpperCase(),kind:"other"}}(e),n=bt[i],o=this.isOn(t.ch_switch_entity),r=this.isOn(t.thermoreg_entity);return W`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${t.title}</div>
          ${t.status_entity?W`<div
                class="status-badge"
                style="color:${n};border:1px solid ${n}44;background:${n}14;"
              >
                ${s}
              </div>`:F}
        </div>

        ${t.ch_switch_entity?W`<div
              class="badge"
              style="background:${o?"#3a2410":"var(--bc-box-bg)"};border-color:${o?"#ff8a5c55":"var(--bc-border)"};"
              @click=${()=>this.toggle(t.ch_switch_entity)}
            >
              <ha-icon icon="mdi:radiator" style="color:${o?"#ff8a5c":"#8aa0bd"};"></ha-icon>
              <span class="lbl" style="color:${o?"#ff8a5c":"#8aa0bd"};">CH</span>
              <span class="dot" style="background:${o?"#ff8a5c":"#4a5a70"};box-shadow:${o?"0 0 8px #ff8a5c":"none"};"></span>
            </div>`:F}

        ${t.thermoreg_entity?W`<div
              class="badge"
              style="background:${r?"#163a2a":"var(--bc-box-bg)"};border-color:${r?"#5dcaa555":"var(--bc-border)"};"
              @click=${()=>this.toggle(t.thermoreg_entity)}
            >
              <span class="dot" style="background:${r?"#5dcaa5":"#4a5a70"};box-shadow:${r?"0 0 8px #5dcaa5":"none"};"></span>
              <span class="lbl" style="color:${r?"#5dcaa5":"#8aa0bd"};">TERMOREGLARE</span>
            </div>`:F}
      </div>
    `}renderFlowRow(){const t=this.config,e=this.num(t.flame_power_entity)??0,s=e>.1,i=this.num(t.flow_temp_entity),n=this.num(t.return_temp_entity);return W`
      <div class="flow-row">
        <div class="unit">
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${s?"burning":""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">FLAME</div>
          <div class="val">${this.fmt(e,1," kW")}</div>
        </div>

        <div class="pipes">
          <div class="pipe tur" @click=${()=>this.moreInfo(t.flow_temp_entity)}>
            <span class="plabel">TUR</span>
            <span class="pval">${this.fmt(i)}</span>
          </div>
          <div class="pipe retur" @click=${()=>this.moreInfo(t.return_temp_entity)}>
            <span class="plabel">RETUR</span>
            <span class="pval">${this.fmt(n)}</span>
          </div>
        </div>

        ${this.renderOffset()}
      </div>
    `}renderOffset(){const t=this.config;if(!t.offset_entity)return F;const e=this.isOn(t.thermoreg_entity),s=this.num(t.offset_entity),i=void 0===s?"--":`${s>0?"+":""}${s.toFixed(0)}`,n=e?this.num(t.computed_setpoint_entity):void 0,o=t.offset_min??-14,r=t.offset_max??14,a=t.offset_step??2;return W`
      <div class="offset-box ${e?"":"disabled"}">
        <div class="offset-title">
          OFFSET TERMOREGLARE${void 0!==n?W` <span class="sp">| ${n.toFixed(0)}°</span>`:F}
        </div>
        <div class="offset-value">${i}</div>
        <input
          class="slider"
          type="range"
          min=${o}
          max=${r}
          step=${a}
          .value=${String(s??0)}
          ?disabled=${!e}
          @change=${e=>this.setNumber(t.offset_entity,parseFloat(e.target.value))}
        />
        <div class="ticks">
          <span>${o}</span><span>0</span><span>${r}</span>
        </div>
      </div>
    `}renderSetpoints(){const t=this.config;return W`
      <div class="setpoints">
        ${this.renderSetpointCard("mdi:shower-head","#4ecdc4","DHW SETPOINT",t.dhw_setpoint_entity,t.dhw_setpoint_display_entity??t.dhw_setpoint_entity,t.dhw_min??36,t.dhw_max??60,t.dhw_step??1)}
        ${this.renderSetpointCard("mdi:radiator","#ff8a5c","CH SETPOINT",t.ch_setpoint_entity,t.ch_setpoint_display_entity??t.ch_setpoint_entity,t.ch_min??30,t.ch_max??80,t.ch_step??1)}
        ${t.pressure_entity?this.renderPressure(t.pressure_entity):F}
      </div>
    `}renderSetpointCard(t,e,s,i,n,o,r,a){if(!i)return F;const c=this.num(n),l=this.num(i)??c??o,d=t=>{const e=Math.min(r,Math.max(o,l+t));this.setNumber(i,e)};return W`
      <div class="sp-card">
        <div class="sp-head">
          <ha-icon icon=${t} style="color:${e};"></ha-icon>
          <span class="t">${s}</span>
        </div>
        <div class="sp-control">
          <button class="step-btn" @click=${()=>d(-a)}>−</button>
          <span class="sp-val" style="color:${e};">${this.fmt(c??l)}</span>
          <button class="step-btn" @click=${()=>d(a)}>+</button>
        </div>
      </div>
    `}renderPressure(t){const e=this.num(t);return W`
      <div class="sp-card">
        <div class="sp-head">
          <ha-icon icon="mdi:gauge" style="color:#5dcaa5;"></ha-icon>
          <span class="t">PRESIUNE</span>
        </div>
        <div
          class="sp-val display-only clickable"
          style="color:#5dcaa5;"
          @click=${()=>this.moreInfo(t)}
        >
          ${void 0===e?"—":e.toFixed(1)}<span
            style="font-size:14px;color:#8aa0bd;font-weight:600;"
          >
            bar</span
          >
        </div>
      </div>
    `}};gt.styles=mt,t([ht({attribute:!1})],gt.prototype,"hass",void 0),t([pt()],gt.prototype,"config",void 0),gt=t([ct("ebusd-clasone-card")],gt);const yt=[{name:"title",selector:{text:{}}},{name:"status_entity",selector:{entity:{domain:["sensor"]}}},{name:"ch_switch_entity",selector:{entity:{domain:["switch"]}}},{name:"thermoreg_entity",selector:{entity:{domain:["switch"]}}},{name:"flame_power_entity",selector:{entity:{domain:["sensor"]}}},{name:"flow_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"return_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"offset_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"computed_setpoint_entity",selector:{entity:{domain:["sensor"]}}},{type:"grid",name:"",schema:[{name:"offset_min",selector:{number:{mode:"box",step:1}}},{name:"offset_max",selector:{number:{mode:"box",step:1}}},{name:"offset_step",selector:{number:{mode:"box",step:1}}}]},{name:"dhw_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"dhw_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"dhw_min",selector:{number:{mode:"box",step:1}}},{name:"dhw_max",selector:{number:{mode:"box",step:1}}},{name:"dhw_step",selector:{number:{mode:"box",step:1}}}]},{name:"ch_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"ch_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"ch_min",selector:{number:{mode:"box",step:1}}},{name:"ch_max",selector:{number:{mode:"box",step:1}}},{name:"ch_step",selector:{number:{mode:"box",step:1}}}]},{name:"pressure_entity",selector:{entity:{domain:["sensor"]}}}],$t={title:"Titlu card",status_entity:"Status boiler (sensor)",ch_switch_entity:"Switch CH / încălzire",thermoreg_entity:"Switch termoreglare",flame_power_entity:"Putere flacără (kW)",flow_temp_entity:"Temperatură TUR",return_temp_entity:"Temperatură RETUR",offset_entity:"Offset termoreglare (number, -14..+14)",computed_setpoint_entity:"Setpoint TUR calculat (sensor)",offset_min:"Offset min",offset_max:"Offset max",offset_step:"Offset pas",dhw_setpoint_entity:"DHW setpoint (number, control)",dhw_setpoint_display_entity:"DHW setpoint (afișaj)",dhw_min:"DHW min",dhw_max:"DHW max",dhw_step:"DHW pas",ch_setpoint_entity:"CH setpoint (number, control)",ch_setpoint_display_entity:"CH setpoint (afișaj)",ch_min:"CH min",ch_max:"CH max",ch_step:"CH pas",pressure_entity:"Presiune (sensor)"};let vt=class extends rt{constructor(){super(...arguments),this._computeLabel=t=>$t[t.name]??t.name}setConfig(t){this._config=t}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${yt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F}_valueChanged(t){const e=t.detail.value;_t(this,"config-changed",{config:e})}};t([ht({attribute:!1})],vt.prototype,"hass",void 0),t([pt()],vt.prototype,"_config",void 0),vt=t([ct("ebusd-clasone-card-editor")],vt);var xt=Object.freeze({__proto__:null,get EbusdClasOneCardEditor(){return vt}});export{gt as EbusdClasOneCard};
