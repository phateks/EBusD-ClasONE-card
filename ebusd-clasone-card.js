function e(e,t,i,s){var o,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(r<3?o(n):r>3?o(t,i,n):o(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",_=u.reactiveElementPolyfillSupport,b=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!a(e,t),w={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&l(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const r=s?.call(this);o?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:g;this._$Em=s;const r=o.fromAttribute(t,e.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(void 0!==e){const r=this.constructor;if(!1===s&&(o=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??x)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,_?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,v=e=>e,A=$.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,T=`<${k}>`,z=document,O=()=>z.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,U="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=z.createTreeWalker(z,129);function G(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,s=[];let o,r=2===t?"<svg>":3===t?"<math>":"",n=H;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=M:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?I:D):n===I||n===D?n=j:n===N||n===M?n=H:(n=j,o=void 0);const p=n===j&&e[t+1].startsWith("/>")?" ":"";r+=n===H?i+T:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+p):i+C+(-2===c?t:p)}return[G(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class J{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const n=e.length-1,a=this.parts,[l,c]=X(e,t);if(this.el=J.createElement(l,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=c[r++],i=s.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?ee:"?"===n[1]?te:"@"===n[1]?ie:Y}),s.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(e));if(L.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],O()),V.nextNode(),a.push({type:2,index:++o});s.append(e[t],O())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)a.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=z.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,s){if(t===B)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=P(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=K(e,o._$AS(e,t.values),o,s)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??z).importNode(t,!0);V.currentNode=s;let o=V.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Q(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new se(o,this,e)),this._$AV.push(t),a=i[++n]}r!==a?.index&&(o=V.nextNode(),r++)}return V.currentNode=z,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),P(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Z(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new J(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=v(e).nextSibling;v(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(void 0===o)e=K(this,e,t,0),r=!P(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const s=e;let n,a;for(e=o[0],n=0;n<o.length-1;n++)a=K(this,s[i+n],t,n),a===B&&(a=this._$AH[n]),r||=!P(a)||a!==this._$AH[n],a===F?e=F:e!==F&&(e+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends Y{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??F)===B)return;const i=this._$AH,s=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const oe=$.litHtmlPolyfillSupport;oe?.(J,Q),($.litHtmlVersions??=[]).push("3.3.3");const re=globalThis;class ne extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new Q(t.insertBefore(O(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ne._$litElement$=!0,ne.finalized=!0,re.litElementHydrateSupport?.({LitElement:ne});const ae=re.litElementPolyfillSupport;ae?.({LitElement:ne}),(re.litElementVersions??=[]).push("4.2.2");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:x},de=(e=ce,t,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pe(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function he(e){return pe({...e,state:!0,attribute:!1})}var ue,me;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ue||(ue={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(me||(me={}));var fe=function(e,t,i,s){s=s||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,e.dispatchEvent(o),o};const _e=((e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,s)})`
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
    color: #8aa0bd;
  }
  .unit-icons .flame {
    position: absolute;
    bottom: -2px;
    right: -2px;
    --mdc-icon-size: 18px;
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
  .pipe .plabel { font-size: 13px; font-weight: 700; color: var(--bc-sub); letter-spacing: 1px; }
  .pipe .pval { font-size: 24px; font-weight: 700; }
  .pipe.tur .pval { color: var(--bc-ch); }
  .pipe.retur .pval { color: #4ecdc4; }

  .offset-box {
    flex: 0 0 260px;
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

    .offset-box .slider {
      margin: 0;
    }
  }

  ha-icon.clickable { cursor: pointer; }
  .unit.clickable { cursor: pointer; }
`;console.info("%c EBUSD-CLASONE-CARD %c v1.0.2 ","color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards||[],window.customCards.push({type:"ebusd-clasone-card",name:"EBusD Clas One Card",description:"Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",preview:!0,documentationURL:"https://github.com/phateks/EBusD-ClasONE-card"});const be={idle:"#8aa0bd",ch:"#ff8a5c",dhw:"#4ecdc4",other:"#8aa0bd"};let ge=class extends ne{static async getConfigElement(){return await Promise.resolve().then(function(){return $e}),document.createElement("ebusd-clasone-card-editor")}static getStubConfig(){return{type:"custom:ebusd-clasone-card",title:"ARISTON CLAS ONE",status_entity:"sensor.ebusd_boiler_boiler_status",ch_switch_entity:"switch.ebusd_boiler_heating_status",thermoreg_entity:"switch.heating_ebusd_boiler_thermoregulation_switch",flame_power_entity:"sensor.ebusd_boiler_flame_power_kw",flow_temp_entity:"sensor.ebusd_boiler_lwt_temp",flow_temp_label:"TUR",return_temp_entity:"sensor.ebusd_boiler_ewt_temp",return_temp_label:"RETUR",outdoor_temp_label:"EXT",pressure_label:"PRESIUNE",offset_entity:"number.ariston_heating_flow_offset_1",offset_min:-14,offset_max:14,offset_step:2,computed_setpoint_entity:"sensor.ebusd_boiler_ch_flow_setpoint",dhw_setpoint_entity:"number.ebusd_boiler_dhw_comfort_temp_set",dhw_setpoint_display_entity:"sensor.ebusd_boiler_dhw_current_target_temp",dhw_min:36,dhw_max:60,dhw_step:1,ch_setpoint_entity:"number.ebusd_boiler_z1_heat_setpoint_set",ch_min:30,ch_max:80,ch_step:1,pressure_entity:"sensor.ebusd_boiler_boiler_pressure"}}setConfig(e){if(!e)throw new Error("Invalid configuration");this.config={offset_min:-14,offset_max:14,offset_step:2,dhw_min:36,dhw_max:60,dhw_step:1,ch_min:30,ch_max:80,ch_step:1,title:"ARISTON CLAS ONE",...e,flow_temp_label:e.flow_temp_label??"TUR",return_temp_label:e.return_temp_label??"RETUR",outdoor_temp_label:e.outdoor_temp_label??"EXT",pressure_label:e.pressure_label??"PRESIUNE"}}getCardSize(){return 4}shouldUpdate(e){return!!this.config&&(e.has("config")||e.has("hass"))}st(e){return e?this.hass?.states?.[e]:void 0}num(e){const t=this.st(e);if(!t)return;const i=parseFloat(t.state);return isNaN(i)?void 0:i}isOn(e){return"on"===this.st(e)?.state}fmt(e,t=0,i="°"){return void 0===e?"—":`${e.toFixed(t)}${i}`}toggle(e){e&&this.hass.callService("homeassistant","toggle",{entity_id:e})}moreInfo(e){e&&fe(this,"hass-more-info",{entityId:e})}setNumber(e,t){e&&this.hass.callService("number","set_value",{entity_id:e,value:t})}render(){return this.config&&this.hass?W`
      <ha-card>
        ${this.renderHeader()}
        ${this.renderFlowRow()}
        ${this.renderOffset()}
        ${this.renderSetpoints()}
      </ha-card>
    `:F}renderHeader(){const e=this.config,t=this.st(e.status_entity)?.state,{label:i,kind:s}=function(e){if(!e)return{label:"—",kind:"other"};const t=e.toLowerCase();return"standby"===t?{label:"IDLE",kind:"idle"}:"heating"===t?{label:"CH HEATING",kind:"ch"}:"heating hot water"===t||"water tank"===t||"comfort"===t?{label:"DHW HEATING",kind:"dhw"}:{label:e.toUpperCase(),kind:"other"}}(t),o=be[s],r=this.isOn(e.ch_switch_entity),n=this.isOn(e.thermoreg_entity);return W`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${e.title}</div>
          ${e.status_entity?W`<div
                class="status-badge"
                style="color:${o};border:1px solid ${o}44;background:${o}14;"
              >
                ${i}
              </div>`:F}
        </div>

        <div class="header-controls">
          ${e.ch_switch_entity?W`<div
                class="badge"
                style="background:${r?"#3a2410":"var(--bc-box-bg)"};border-color:${r?"#ff8a5c55":"var(--bc-border)"};"
                @click=${()=>this.toggle(e.ch_switch_entity)}
              >
                <ha-icon icon="mdi:radiator" style="color:${r?"#ff8a5c":"#8aa0bd"};"></ha-icon>
                <span class="lbl" style="color:${r?"#ff8a5c":"#8aa0bd"};">CH</span>
                <span class="dot" style="background:${r?"#ff8a5c":"#4a5a70"};box-shadow:${r?"0 0 8px #ff8a5c":"none"};"></span>
              </div>`:F}

          ${e.thermoreg_entity?W`<div
                class="badge"
                style="background:${n?"#163a2a":"var(--bc-box-bg)"};border-color:${n?"#5dcaa555":"var(--bc-border)"};"
                @click=${()=>this.toggle(e.thermoreg_entity)}
              >
                <span class="dot" style="background:${n?"#5dcaa5":"#4a5a70"};box-shadow:${n?"0 0 8px #5dcaa5":"none"};"></span>
                <span class="lbl" style="color:${n?"#5dcaa5":"#8aa0bd"};">TERMOREGLARE</span>
              </div>`:F}
        </div>
      </div>
    `}renderFlowRow(){const e=this.config,t=this.num(e.flame_power_entity)??0,i=t>.1,s=this.num(e.flow_temp_entity),o=this.num(e.return_temp_entity);return W`
      <div class="flow-row">
        <div class="unit clickable" @click=${()=>this.moreInfo(e.flame_power_entity)}>
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${i?"burning":""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">FLAME</div>
          <div class="val">${this.fmt(t,1," kW")}</div>
        </div>

        <div class="pipes">
          ${this.renderTemperatureTile(e.flow_temp_entity,e.flow_temp_label??"TUR",s,"tur")}
          ${this.renderTemperatureTile(e.return_temp_entity,e.return_temp_label??"RETUR",o,"retur")}
        </div>

        ${e.outdoor_temp_entity?this.renderTemperatureTile(e.outdoor_temp_entity,e.outdoor_temp_label??"EXT",this.num(e.outdoor_temp_entity),"outdoor-temp",!e.pressure_entity):F}
        ${e.pressure_entity?this.renderPressure(e.pressure_entity,e.pressure_label??"PRESIUNE",!e.outdoor_temp_entity):F}
      </div>
    `}renderTemperatureTile(e,t,i,s,o=!1){return W`
      <div
        class="pipe sensor-tile ${s} clickable ${o?"tile-wide":""}"
        @click=${()=>this.moreInfo(e)}
      >
        <span class="tile-label">${t}</span>
        <span class="tile-value">${this.fmt(i)}</span>
      </div>
    `}renderOffset(){const e=this.config;if(!e.offset_entity)return F;const t=this.isOn(e.thermoreg_entity),i=this.num(e.offset_entity),s=void 0===i?"--":`${i>0?"+":""}${i.toFixed(0)}`,o=t?this.num(e.computed_setpoint_entity):void 0,r=e.offset_min??-14,n=e.offset_max??14,a=e.offset_step??2;return W`
      <div class="offset-box ${t?"":"disabled"}">
        <div class="offset-title">
          OFFSET TERMOREGLARE${void 0!==o?W` <span class="sp">| ${o.toFixed(0)}°</span>`:F}
        </div>
        <div class="offset-value">${s}</div>
        <input
          class="slider"
          type="range"
          min=${r}
          max=${n}
          step=${a}
          .value=${String(i??0)}
          ?disabled=${!t}
          @change=${t=>this.setNumber(e.offset_entity,parseFloat(t.target.value))}
        />
        <div class="ticks">
          <span>${r}</span><span>0</span><span>${n}</span>
        </div>
      </div>
    `}renderSetpoints(){const e=this.config,t=this.isOn(e.thermoreg_entity);return W`
      <div class="setpoints">
        ${this.renderSetpointCard("mdi:shower-head","#4ecdc4","DHW SETPOINT",e.dhw_setpoint_entity,e.dhw_setpoint_display_entity??e.dhw_setpoint_entity,e.dhw_min??36,e.dhw_max??60,e.dhw_step??1)}
        ${this.renderSetpointCard("mdi:radiator","#ff8a5c","CH SETPOINT",e.ch_setpoint_entity,e.ch_setpoint_display_entity??e.ch_setpoint_entity,e.ch_min??30,e.ch_max??80,e.ch_step??1,t)}
      </div>
    `}renderSetpointCard(e,t,i,s,o,r,n,a,l=!1){if(!s)return F;const c=this.num(s)??this.num(o)??r,d=e=>{if(l)return;const t=Math.min(n,Math.max(r,c+e));this.setNumber(s,t)};return W`
      <div class="sp-card ${l?"disabled":""}">
        <div class="sp-head">
          <ha-icon icon=${e} style="color:${t};"></ha-icon>
          <span class="t">${i}</span>
        </div>
        <div class="sp-control">
          <button class="step-btn" ?disabled=${l} @click=${()=>d(-a)}>−</button>
          <span class="sp-val" style="color:${t};">${this.fmt(c)}</span>
          <button class="step-btn" ?disabled=${l} @click=${()=>d(a)}>+</button>
        </div>
      </div>
    `}renderPressure(e,t,i){const s=this.num(e);return W`
      <div
        class="pipe sensor-tile pressure-card ${i?"tile-wide":""} clickable"
        @click=${()=>this.moreInfo(e)}
      >
        <span class="tile-label">${t}</span>
        <span class="tile-value pressure-value">
          ${void 0===s?"—":s.toFixed(1)}<span> bar</span>
        </span>
      </div>
    `}};ge.styles=_e,e([pe({attribute:!1})],ge.prototype,"hass",void 0),e([he()],ge.prototype,"config",void 0),ge=e([le("ebusd-clasone-card")],ge);const xe=[{name:"title",selector:{text:{}}},{name:"status_entity",selector:{entity:{domain:["sensor"]}}},{name:"ch_switch_entity",selector:{entity:{domain:["switch"]}}},{name:"thermoreg_entity",selector:{entity:{domain:["switch"]}}},{name:"flame_power_entity",selector:{entity:{domain:["sensor"]}}},{name:"flow_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"flow_temp_label",selector:{text:{}}},{name:"return_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"return_temp_label",selector:{text:{}}},{name:"outdoor_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"outdoor_temp_label",selector:{text:{}}},{name:"pressure_label",selector:{text:{}}},{name:"offset_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"computed_setpoint_entity",selector:{entity:{domain:["sensor"]}}},{type:"grid",name:"",schema:[{name:"offset_min",selector:{number:{mode:"box",step:1}}},{name:"offset_max",selector:{number:{mode:"box",step:1}}},{name:"offset_step",selector:{number:{mode:"box",step:1}}}]},{name:"dhw_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"dhw_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"dhw_min",selector:{number:{mode:"box",step:1}}},{name:"dhw_max",selector:{number:{mode:"box",step:1}}},{name:"dhw_step",selector:{number:{mode:"box",step:1}}}]},{name:"ch_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"ch_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"ch_min",selector:{number:{mode:"box",step:1}}},{name:"ch_max",selector:{number:{mode:"box",step:1}}},{name:"ch_step",selector:{number:{mode:"box",step:1}}}]},{name:"pressure_entity",selector:{entity:{domain:["sensor"]}}}],we={title:"Titlu card",status_entity:"Status boiler (sensor)",ch_switch_entity:"Switch CH / încălzire",thermoreg_entity:"Switch termoreglare",flame_power_entity:"Putere flacără (kW)",flow_temp_entity:"Temperatură TUR",flow_temp_label:"Nume casetă TUR",return_temp_entity:"Temperatură RETUR",return_temp_label:"Nume casetă RETUR",outdoor_temp_entity:"Temperatură exterioară",outdoor_temp_label:"Nume casetă exterioară",pressure_label:"Nume casetă presiune",offset_entity:"Offset termoreglare (number, -14..+14)",computed_setpoint_entity:"Setpoint TUR calculat (sensor)",offset_min:"Offset min",offset_max:"Offset max",offset_step:"Offset pas",dhw_setpoint_entity:"DHW setpoint (number, control)",dhw_setpoint_display_entity:"DHW setpoint (afișaj)",dhw_min:"DHW min",dhw_max:"DHW max",dhw_step:"DHW pas",ch_setpoint_entity:"CH setpoint (number, control)",ch_setpoint_display_entity:"CH setpoint (afișaj)",ch_min:"CH min",ch_max:"CH max",ch_step:"CH pas",pressure_entity:"Presiune (sensor)"};let ye=class extends ne{constructor(){super(...arguments),this._computeLabel=e=>we[e.name]??e.name}setConfig(e){this._config=e}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${xe}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F}_valueChanged(e){const t=e.detail.value;fe(this,"config-changed",{config:t})}};e([pe({attribute:!1})],ye.prototype,"hass",void 0),e([he()],ye.prototype,"_config",void 0),ye=e([le("ebusd-clasone-card-editor")],ye);var $e=Object.freeze({__proto__:null,get EbusdClasOneCardEditor(){return ye}});export{ge as EbusdClasOneCard};
