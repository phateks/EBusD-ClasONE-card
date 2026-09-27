function t(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",_=u.reactiveElementPolyfillSupport,b=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,_?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,v=t=>t,A=$.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,T=`<${k}>`,z=document,O=()=>z.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,U="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=z.createTreeWalker(z,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=M:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?I:D):n===I||n===D?n=j:n===N||n===M?n=H:(n=j,o=void 0);const p=n===j&&t[e+1].startsWith("/>")?" ":"";r+=n===H?i+T:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+p):i+C+(-2===c?e:p)}return[G(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=X(t,e);if(this.el=J.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[r++],i=s.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),V.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=K(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??z).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=V.nextNode(),r++)}return V.currentNode=z,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=v(t).nextSibling;v(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=K(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=K(this,s[i+n],e,n),a===B&&(a=this._$AH[n]),r||=!P(a)||a!==this._$AH[n],a===F?t=F:t!==F&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===B)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const ot=$.litHtmlPolyfillSupport;ot?.(J,Q),($.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;class nt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ct={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:x},dt=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ht(t){return pt({...t,state:!0,attribute:!1})}var ut,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));var ft=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};const _t=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)})`
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
`;console.info("%c EBUSD-CLASONE-CARD %c v0.1.0 ","color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;","color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"),window.customCards=window.customCards||[],window.customCards.push({type:"ebusd-clasone-card",name:"EBusD Clas One Card",description:"Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",preview:!0,documentationURL:"https://github.com/phateks/EBusD-ClasONE-card"});const bt={idle:"#8aa0bd",ch:"#ff8a5c",dhw:"#4ecdc4",other:"#8aa0bd"};let gt=class extends nt{static async getConfigElement(){return await Promise.resolve().then(function(){return $t}),document.createElement("ebusd-clasone-card-editor")}static getStubConfig(){return{type:"custom:ebusd-clasone-card",title:"ARISTON CLAS ONE",status_entity:"sensor.ebusd_boiler_boiler_status",ch_switch_entity:"switch.ebusd_boiler_heating_status",thermoreg_entity:"switch.heating_ebusd_boiler_thermoregulation_switch",flame_power_entity:"sensor.ebusd_boiler_flame_power_kw",flow_temp_entity:"sensor.ebusd_boiler_lwt_temp",flow_temp_label:"TUR",return_temp_entity:"sensor.ebusd_boiler_ewt_temp",return_temp_label:"RETUR",outdoor_temp_label:"EXT",pressure_label:"PRESIUNE",offset_entity:"number.ariston_heating_flow_offset_1",offset_min:-14,offset_max:14,offset_step:2,computed_setpoint_entity:"sensor.ebusd_boiler_ch_flow_setpoint",dhw_setpoint_entity:"number.ebusd_boiler_dhw_comfort_temp_set",dhw_setpoint_display_entity:"sensor.ebusd_boiler_dhw_current_target_temp",dhw_min:36,dhw_max:60,dhw_step:1,ch_setpoint_entity:"number.ebusd_boiler_z1_heat_setpoint_set",ch_min:30,ch_max:80,ch_step:1,pressure_entity:"sensor.ebusd_boiler_boiler_pressure"}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config={offset_min:-14,offset_max:14,offset_step:2,dhw_min:36,dhw_max:60,dhw_step:1,ch_min:30,ch_max:80,ch_step:1,title:"ARISTON CLAS ONE",...t,flow_temp_label:t.flow_temp_label??"TUR",return_temp_label:t.return_temp_label??"RETUR",outdoor_temp_label:t.outdoor_temp_label??"EXT",pressure_label:t.pressure_label??"PRESIUNE"}}getCardSize(){return 4}shouldUpdate(t){return!!this.config&&(t.has("config")||t.has("hass"))}st(t){return t?this.hass?.states?.[t]:void 0}num(t){const e=this.st(t);if(!e)return;const i=parseFloat(e.state);return isNaN(i)?void 0:i}isOn(t){return"on"===this.st(t)?.state}fmt(t,e=0,i="°"){return void 0===t?"—":`${t.toFixed(e)}${i}`}toggle(t){t&&this.hass.callService("homeassistant","toggle",{entity_id:t})}moreInfo(t){t&&ft(this,"hass-more-info",{entityId:t})}setNumber(t,e){t&&this.hass.callService("number","set_value",{entity_id:t,value:e})}render(){return this.config&&this.hass?W`
      <ha-card>
        ${this.renderHeader()}
        ${this.renderFlowRow()}
        ${this.renderOffset()}
        ${this.renderSetpoints()}
      </ha-card>
    `:F}renderHeader(){const t=this.config,e=this.st(t.status_entity)?.state,{label:i,kind:s}=function(t){if(!t)return{label:"—",kind:"other"};const e=t.toLowerCase();return"standby"===e?{label:"IDLE",kind:"idle"}:"heating"===e?{label:"CH HEATING",kind:"ch"}:"heating hot water"===e||"water tank"===e||"comfort"===e?{label:"DHW HEATING",kind:"dhw"}:{label:t.toUpperCase(),kind:"other"}}(e),o=bt[s],r=this.isOn(t.ch_switch_entity),n=this.isOn(t.thermoreg_entity);return W`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${t.title}</div>
          ${t.status_entity?W`<div
                class="status-badge"
                style="color:${o};border:1px solid ${o}44;background:${o}14;"
              >
                ${i}
              </div>`:F}
        </div>

        <div class="header-controls">
          ${t.ch_switch_entity?W`<div
                class="badge"
                style="background:${r?"#3a2410":"var(--bc-box-bg)"};border-color:${r?"#ff8a5c55":"var(--bc-border)"};"
                @click=${()=>this.toggle(t.ch_switch_entity)}
              >
                <ha-icon icon="mdi:radiator" style="color:${r?"#ff8a5c":"#8aa0bd"};"></ha-icon>
                <span class="lbl" style="color:${r?"#ff8a5c":"#8aa0bd"};">CH</span>
                <span class="dot" style="background:${r?"#ff8a5c":"#4a5a70"};box-shadow:${r?"0 0 8px #ff8a5c":"none"};"></span>
              </div>`:F}

          ${t.thermoreg_entity?W`<div
                class="badge"
                style="background:${n?"#163a2a":"var(--bc-box-bg)"};border-color:${n?"#5dcaa555":"var(--bc-border)"};"
                @click=${()=>this.toggle(t.thermoreg_entity)}
              >
                <span class="dot" style="background:${n?"#5dcaa5":"#4a5a70"};box-shadow:${n?"0 0 8px #5dcaa5":"none"};"></span>
                <span class="lbl" style="color:${n?"#5dcaa5":"#8aa0bd"};">TERMOREGLARE</span>
              </div>`:F}
        </div>
      </div>
    `}renderFlowRow(){const t=this.config,e=this.num(t.flame_power_entity)??0,i=e>.1,s=this.num(t.flow_temp_entity),o=this.num(t.return_temp_entity);return W`
      <div class="flow-row">
        <div class="unit clickable" @click=${()=>this.moreInfo(t.flame_power_entity)}>
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${i?"burning":""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">FLAME</div>
          <div class="val">${this.fmt(e,1," kW")}</div>
        </div>

        <div class="pipes">
          ${this.renderTemperatureTile(t.flow_temp_entity,t.flow_temp_label??"TUR",s,"tur")}
          ${this.renderTemperatureTile(t.return_temp_entity,t.return_temp_label??"RETUR",o,"retur")}
        </div>

        ${t.outdoor_temp_entity?this.renderTemperatureTile(t.outdoor_temp_entity,t.outdoor_temp_label??"EXT",this.num(t.outdoor_temp_entity),"outdoor-temp",!t.pressure_entity):F}
        ${t.pressure_entity?this.renderPressure(t.pressure_entity,t.pressure_label??"PRESIUNE",!t.outdoor_temp_entity):F}
      </div>
    `}renderTemperatureTile(t,e,i,s,o=!1){return W`
      <div
        class="pipe sensor-tile ${s} clickable ${o?"tile-wide":""}"
        @click=${()=>this.moreInfo(t)}
      >
        <span class="tile-label">${e}</span>
        <span class="tile-value">
          ${"outdoor-temp"===s?this.fmt(i,1,"°C"):this.fmt(i)}
        </span>
      </div>
    `}renderOffset(){const t=this.config;if(!t.offset_entity)return F;const e=this.isOn(t.thermoreg_entity),i=this.num(t.offset_entity),s=void 0===i?"--":`${i>0?"+":""}${i.toFixed(0)}`,o=e?this.num(t.computed_setpoint_entity):void 0,r=t.offset_min??-14,n=t.offset_max??14,a=t.offset_step??2;return W`
      <div class="offset-box ${e?"":"disabled"}">
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
          ?disabled=${!e}
          @change=${e=>this.setNumber(t.offset_entity,parseFloat(e.target.value))}
        />
        <div class="ticks">
          <span>${r}</span><span>0</span><span>${n}</span>
        </div>
      </div>
    `}renderSetpoints(){const t=this.config,e=this.isOn(t.thermoreg_entity);return W`
      <div class="setpoints">
        ${this.renderSetpointCard("mdi:shower-head","#4ecdc4","DHW SETPOINT",t.dhw_setpoint_entity,t.dhw_setpoint_display_entity??t.dhw_setpoint_entity,t.dhw_min??36,t.dhw_max??60,t.dhw_step??1)}
        ${this.renderSetpointCard("mdi:radiator","#ff8a5c","CH SETPOINT",t.ch_setpoint_entity,t.ch_setpoint_display_entity??t.ch_setpoint_entity,t.ch_min??30,t.ch_max??80,t.ch_step??1,e)}
      </div>
    `}renderSetpointCard(t,e,i,s,o,r,n,a,l=!1){if(!s)return F;const c=this.num(s)??this.num(o)??r,d=t=>{if(l)return;const e=Math.min(n,Math.max(r,c+t));this.setNumber(s,e)};return W`
      <div class="sp-card ${l?"disabled":""}">
        <div class="sp-head">
          <ha-icon icon=${t} style="color:${e};"></ha-icon>
          <span class="t">${i}</span>
        </div>
        <div class="sp-control">
          <button class="step-btn" ?disabled=${l} @click=${()=>d(-a)}>−</button>
          <span class="sp-val" style="color:${e};">${this.fmt(c)}</span>
          <button class="step-btn" ?disabled=${l} @click=${()=>d(a)}>+</button>
        </div>
      </div>
    `}renderPressure(t,e,i){const s=this.num(t);return W`
      <div
        class="pipe sensor-tile pressure-card ${i?"tile-wide":""} clickable"
        @click=${()=>this.moreInfo(t)}
      >
        <span class="tile-label">${e}</span>
        <span class="tile-value pressure-value">
          ${void 0===s?"—":s.toFixed(1)}<span> bar</span>
        </span>
      </div>
    `}};gt.styles=_t,t([pt({attribute:!1})],gt.prototype,"hass",void 0),t([ht()],gt.prototype,"config",void 0),gt=t([lt("ebusd-clasone-card")],gt);const xt=[{name:"title",selector:{text:{}}},{name:"status_entity",selector:{entity:{domain:["sensor"]}}},{name:"ch_switch_entity",selector:{entity:{domain:["switch"]}}},{name:"thermoreg_entity",selector:{entity:{domain:["switch"]}}},{name:"flame_power_entity",selector:{entity:{domain:["sensor"]}}},{name:"flow_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"flow_temp_label",selector:{text:{}}},{name:"return_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"return_temp_label",selector:{text:{}}},{name:"outdoor_temp_entity",selector:{entity:{domain:["sensor"]}}},{name:"outdoor_temp_label",selector:{text:{}}},{name:"pressure_label",selector:{text:{}}},{name:"offset_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"computed_setpoint_entity",selector:{entity:{domain:["sensor"]}}},{type:"grid",name:"",schema:[{name:"offset_min",selector:{number:{mode:"box",step:1}}},{name:"offset_max",selector:{number:{mode:"box",step:1}}},{name:"offset_step",selector:{number:{mode:"box",step:1}}}]},{name:"dhw_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"dhw_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"dhw_min",selector:{number:{mode:"box",step:1}}},{name:"dhw_max",selector:{number:{mode:"box",step:1}}},{name:"dhw_step",selector:{number:{mode:"box",step:1}}}]},{name:"ch_setpoint_entity",selector:{entity:{domain:["number","input_number"]}}},{name:"ch_setpoint_display_entity",selector:{entity:{domain:["sensor","number"]}}},{type:"grid",name:"",schema:[{name:"ch_min",selector:{number:{mode:"box",step:1}}},{name:"ch_max",selector:{number:{mode:"box",step:1}}},{name:"ch_step",selector:{number:{mode:"box",step:1}}}]},{name:"pressure_entity",selector:{entity:{domain:["sensor"]}}}],wt={title:"Titlu card",status_entity:"Status boiler (sensor)",ch_switch_entity:"Switch CH / încălzire",thermoreg_entity:"Switch termoreglare",flame_power_entity:"Putere flacără (kW)",flow_temp_entity:"Temperatură TUR",flow_temp_label:"Nume casetă TUR",return_temp_entity:"Temperatură RETUR",return_temp_label:"Nume casetă RETUR",outdoor_temp_entity:"Temperatură exterioară",outdoor_temp_label:"Nume casetă exterioară",pressure_label:"Nume casetă presiune",offset_entity:"Offset termoreglare (number, -14..+14)",computed_setpoint_entity:"Setpoint TUR calculat (sensor)",offset_min:"Offset min",offset_max:"Offset max",offset_step:"Offset pas",dhw_setpoint_entity:"DHW setpoint (number, control)",dhw_setpoint_display_entity:"DHW setpoint (afișaj)",dhw_min:"DHW min",dhw_max:"DHW max",dhw_step:"DHW pas",ch_setpoint_entity:"CH setpoint (number, control)",ch_setpoint_display_entity:"CH setpoint (afișaj)",ch_min:"CH min",ch_max:"CH max",ch_step:"CH pas",pressure_entity:"Presiune (sensor)"};let yt=class extends nt{constructor(){super(...arguments),this._computeLabel=t=>wt[t.name]??t.name}setConfig(t){this._config=t}render(){return this.hass&&this._config?W`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${xt}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F}_valueChanged(t){const e=t.detail.value;ft(this,"config-changed",{config:e})}};t([pt({attribute:!1})],yt.prototype,"hass",void 0),t([ht()],yt.prototype,"_config",void 0),yt=t([lt("ebusd-clasone-card-editor")],yt);var $t=Object.freeze({__proto__:null,get EbusdClasOneCardEditor(){return yt}});export{gt as EbusdClasOneCard};
