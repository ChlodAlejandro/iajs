var _excluded = ["q", "page", "fields"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) : typeof define === 'function' && define.amd ? define(['axios'], factory) : (global = global || self, global.ia = factory(global.axios));
})(this, function (axios) {
  'use strict';

  axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;
  /**
   * "Shallow freezes" an object to render it immutable.
   * Uses `Object.freeze` if available,
   * otherwise the immutability is only in the type.
   *
   * Is used to create "enum like" objects.
   *
   * @template T
   * @param {T} object the object to freeze
   * @param {Pick<ObjectConstructor, 'freeze'> = Object} oc `Object` by default,
   * 				allows to inject custom object constructor for tests
   * @returns {Readonly<T>}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
   */

  function freeze(object, oc) {
    if (oc === undefined) {
      oc = Object;
    }

    return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
  }
  /**
   * All mime types that are allowed as input to `DOMParser.parseFromString`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02 MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype WHATWG HTML Spec
   * @see DOMParser.prototype.parseFromString
   */


  var MIME_TYPE = freeze({
    /**
     * `text/html`, the only mime type that triggers treating an XML document as HTML.
     *
     * @see DOMParser.SupportedType.isHTML
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
     */
    HTML: 'text/html',

    /**
     * Helper method to check a mime type if it indicates an HTML document
     *
     * @param {string} [value]
     * @returns {boolean}
     *
     * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/HTML Wikipedia
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
     * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
    isHTML: function isHTML(value) {
      return value === MIME_TYPE.HTML;
    },

    /**
     * `application/xml`, the standard mime type for XML documents.
     *
     * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
     * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_APPLICATION: 'application/xml',

    /**
     * `text/html`, an alias for `application/xml`.
     *
     * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
     * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
     * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
     */
    XML_TEXT: 'text/xml',

    /**
     * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
     * but is parsed as an XML document.
     *
     * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
     * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
     */
    XML_XHTML_APPLICATION: 'application/xhtml+xml',

    /**
     * `image/svg+xml`,
     *
     * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
     * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
     * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
     */
    XML_SVG_IMAGE: 'image/svg+xml'
  });
  /**
   * Namespaces that are used in this code base.
   *
   * @see http://www.w3.org/TR/REC-xml-names
   */

  var NAMESPACE = freeze({
    /**
     * The XHTML namespace.
     *
     * @see http://www.w3.org/1999/xhtml
     */
    HTML: 'http://www.w3.org/1999/xhtml',

    /**
     * Checks if `uri` equals `NAMESPACE.HTML`.
     *
     * @param {string} [uri]
     *
     * @see NAMESPACE.HTML
     */
    isHTML: function isHTML(uri) {
      return uri === NAMESPACE.HTML;
    },

    /**
     * The SVG namespace.
     *
     * @see http://www.w3.org/2000/svg
     */
    SVG: 'http://www.w3.org/2000/svg',

    /**
     * The `xml:` namespace.
     *
     * @see http://www.w3.org/XML/1998/namespace
     */
    XML: 'http://www.w3.org/XML/1998/namespace',

    /**
     * The `xmlns:` namespace
     *
     * @see https://www.w3.org/2000/xmlns/
     */
    XMLNS: 'http://www.w3.org/2000/xmlns/'
  });
  var freeze_1 = freeze;
  var MIME_TYPE_1 = MIME_TYPE;
  var NAMESPACE_1 = NAMESPACE;
  var conventions = {
    freeze: freeze_1,
    MIME_TYPE: MIME_TYPE_1,
    NAMESPACE: NAMESPACE_1
  };
  var NAMESPACE$1 = conventions.NAMESPACE;
  /**
   * A prerequisite for `[].filter`, to drop elements that are empty
   * @param {string} input
   * @returns {boolean}
   */

  function notEmptyString(input) {
    return input !== '';
  }
  /**
   * @see https://infra.spec.whatwg.org/#split-on-ascii-whitespace
   * @see https://infra.spec.whatwg.org/#ascii-whitespace
   *
   * @param {string} input
   * @returns {string[]} (can be empty)
   */


  function splitOnASCIIWhitespace(input) {
    // U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
    return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
  }
  /**
   * Adds element as a key to current if it is not already present.
   *
   * @param {Record<string, boolean | undefined>} current
   * @param {string} element
   * @returns {Record<string, boolean | undefined>}
   */


  function orderedSetReducer(current, element) {
    if (!current.hasOwnProperty(element)) {
      current[element] = true;
    }

    return current;
  }
  /**
   * @see https://infra.spec.whatwg.org/#ordered-set
   * @param {string} input
   * @returns {string[]}
   */


  function toOrderedSet(input) {
    if (!input) return [];
    var list = splitOnASCIIWhitespace(input);
    return Object.keys(list.reduce(orderedSetReducer, {}));
  }
  /**
   * Uses `list.indexOf` to implement something like `Array.prototype.includes`,
   * which we can not rely on being available.
   *
   * @param {any[]} list
   * @returns {function(any): boolean}
   */


  function arrayIncludes(list) {
    return function (element) {
      return list && list.indexOf(element) !== -1;
    };
  }

  function copy(src, dest) {
    for (var p in src) {
      dest[p] = src[p];
    }
  }
  /**
  ^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
  ^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
   */


  function _extends(Class, Super) {
    var pt = Class.prototype;

    if (!(pt instanceof Super)) {
      var t = function t() {};

      t.prototype = Super.prototype;
      t = new t();
      copy(pt, t);
      Class.prototype = pt = t;
    }

    if (pt.constructor != Class) {
      if (typeof Class != 'function') {
        console.error("unknown Class:" + Class);
      }

      pt.constructor = Class;
    }
  } // Node Types


  var NodeType = {};
  var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
  var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
  var TEXT_NODE = NodeType.TEXT_NODE = 3;
  var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
  var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
  var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
  var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
  var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
  var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
  var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
  var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
  var NOTATION_NODE = NodeType.NOTATION_NODE = 12; // ExceptionCode

  var ExceptionCode = {};
  var ExceptionMessage = {};
  var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
  var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
  var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
  var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
  var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
  var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
  var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
  var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
  var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
  var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10); //level2

  var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
  var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
  var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
  var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
  var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
  /**
   * DOM Level 2
   * Object DOMException
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
   * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
   */

  function DOMException(code, message) {
    if (message instanceof Error) {
      var error = message;
    } else {
      error = this;
      Error.call(this, ExceptionMessage[code]);
      this.message = ExceptionMessage[code];
      if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
    }

    error.code = code;
    if (message) this.message = this.message + ": " + message;
    return error;
  }

  DOMException.prototype = Error.prototype;
  copy(ExceptionCode, DOMException);
  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
   * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
   * The items in the NodeList are accessible via an integral index, starting from 0.
   */

  function NodeList() {}

  NodeList.prototype = {
    /**
     * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
     * @standard level1
     */
    length: 0,

    /**
     * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
     * @standard level1
     * @param index  unsigned long 
     *   Index into the collection.
     * @return Node
     * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
     */
    item: function item(index) {
      return this[index] || null;
    },
    toString: function toString(isHTML, nodeFilter) {
      for (var buf = [], i = 0; i < this.length; i++) {
        serializeToString(this[i], buf, isHTML, nodeFilter);
      }

      return buf.join('');
    }
  };

  function LiveNodeList(node, refresh) {
    this._node = node;
    this._refresh = refresh;

    _updateLiveList(this);
  }

  function _updateLiveList(list) {
    var inc = list._node._inc || list._node.ownerDocument._inc;

    if (list._inc != inc) {
      var ls = list._refresh(list._node); //console.log(ls.length)


      __set__(list, 'length', ls.length);

      copy(ls, list);
      list._inc = inc;
    }
  }

  LiveNodeList.prototype.item = function (i) {
    _updateLiveList(this);

    return this[i];
  };

  _extends(LiveNodeList, NodeList);
  /**
   * Objects implementing the NamedNodeMap interface are used
   * to represent collections of nodes that can be accessed by name.
   * Note that NamedNodeMap does not inherit from NodeList;
   * NamedNodeMaps are not maintained in any particular order.
   * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index,
   * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
   * and does not imply that the DOM specifies an order to these Nodes.
   * NamedNodeMap objects in the DOM are live.
   * used for attributes or DocumentType entities 
   */


  function NamedNodeMap() {}

  function _findNodeIndex(list, node) {
    var i = list.length;

    while (i--) {
      if (list[i] === node) {
        return i;
      }
    }
  }

  function _addNamedNode(el, list, newAttr, oldAttr) {
    if (oldAttr) {
      list[_findNodeIndex(list, oldAttr)] = newAttr;
    } else {
      list[list.length++] = newAttr;
    }

    if (el) {
      newAttr.ownerElement = el;
      var doc = el.ownerDocument;

      if (doc) {
        oldAttr && _onRemoveAttribute(doc, el, oldAttr);

        _onAddAttribute(doc, el, newAttr);
      }
    }
  }

  function _removeNamedNode(el, list, attr) {
    //console.log('remove attr:'+attr)
    var i = _findNodeIndex(list, attr);

    if (i >= 0) {
      var lastIndex = list.length - 1;

      while (i < lastIndex) {
        list[i] = list[++i];
      }

      list.length = lastIndex;

      if (el) {
        var doc = el.ownerDocument;

        if (doc) {
          _onRemoveAttribute(doc, el, attr);

          attr.ownerElement = null;
        }
      }
    } else {
      throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
    }
  }

  NamedNodeMap.prototype = {
    length: 0,
    item: NodeList.prototype.item,
    getNamedItem: function getNamedItem(key) {
      //		if(key.indexOf(':')>0 || key == 'xmlns'){
      //			return null;
      //		}
      //console.log()
      var i = this.length;

      while (i--) {
        var attr = this[i]; //console.log(attr.nodeName,key)

        if (attr.nodeName == key) {
          return attr;
        }
      }
    },
    setNamedItem: function setNamedItem(attr) {
      var el = attr.ownerElement;

      if (el && el != this._ownerElement) {
        throw new DOMException(INUSE_ATTRIBUTE_ERR);
      }

      var oldAttr = this.getNamedItem(attr.nodeName);

      _addNamedNode(this._ownerElement, this, attr, oldAttr);

      return oldAttr;
    },

    /* returns Node */
    setNamedItemNS: function setNamedItemNS(attr) {
      // raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
      var el = attr.ownerElement,
          oldAttr;

      if (el && el != this._ownerElement) {
        throw new DOMException(INUSE_ATTRIBUTE_ERR);
      }

      oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);

      _addNamedNode(this._ownerElement, this, attr, oldAttr);

      return oldAttr;
    },

    /* returns Node */
    removeNamedItem: function removeNamedItem(key) {
      var attr = this.getNamedItem(key);

      _removeNamedNode(this._ownerElement, this, attr);

      return attr;
    },
    // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
    //for level2
    removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
      var attr = this.getNamedItemNS(namespaceURI, localName);

      _removeNamedNode(this._ownerElement, this, attr);

      return attr;
    },
    getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
      var i = this.length;

      while (i--) {
        var node = this[i];

        if (node.localName == localName && node.namespaceURI == namespaceURI) {
          return node;
        }
      }

      return null;
    }
  };
  /**
   * The DOMImplementation interface represents an object providing methods
   * which are not dependent on any particular document.
   * Such an object is returned by the `Document.implementation` property.
   *
   * __The individual methods describe the differences compared to the specs.__
   *
   * @constructor
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core (Initial)
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
   * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
   */

  function DOMImplementation() {}

  DOMImplementation.prototype = {
    /**
     * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
     * The different implementations fairly diverged in what kind of features were reported.
     * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
     *
     * @deprecated It is deprecated and modern browsers return true in all cases.
     *
     * @param {string} feature
     * @param {string} [version]
     * @returns {boolean} always true
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
     * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
     */
    hasFeature: function hasFeature(feature, version) {
      return true;
    },

    /**
     * Creates an XML Document object of the specified type with its document element.
     *
     * __It behaves slightly different from the description in the living standard__:
     * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
     * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string|null} namespaceURI
     * @param {string} qualifiedName
     * @param {DocumentType=null} doctype
     * @returns {Document}
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
      var doc = new Document();
      doc.implementation = this;
      doc.childNodes = new NodeList();
      doc.doctype = doctype || null;

      if (doctype) {
        doc.appendChild(doctype);
      }

      if (qualifiedName) {
        var root = doc.createElementNS(namespaceURI, qualifiedName);
        doc.appendChild(root);
      }

      return doc;
    },

    /**
     * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
     *
     * __This behavior is slightly different from the in the specs__:
     * - this implementation is not validating names or qualified names
     *   (when parsing XML strings, the SAX parser takes care of that)
     *
     * @param {string} qualifiedName
     * @param {string} [publicId]
     * @param {string} [systemId]
     * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
     * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
     * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
     * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
     *
     * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
     * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
     * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
     */
    createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
      var node = new DocumentType();
      node.name = qualifiedName;
      node.nodeName = qualifiedName;
      node.publicId = publicId || '';
      node.systemId = systemId || '';
      return node;
    }
  };
  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
   */

  function Node() {}

  Node.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    // Modified in DOM Level 2:
    insertBefore: function insertBefore(newChild, refChild) {
      //raises 
      return _insertBefore(this, newChild, refChild);
    },
    replaceChild: function replaceChild(newChild, oldChild) {
      //raises 
      this.insertBefore(newChild, oldChild);

      if (oldChild) {
        this.removeChild(oldChild);
      }
    },
    removeChild: function removeChild(oldChild) {
      return _removeChild(this, oldChild);
    },
    appendChild: function appendChild(newChild) {
      return this.insertBefore(newChild, null);
    },
    hasChildNodes: function hasChildNodes() {
      return this.firstChild != null;
    },
    cloneNode: function cloneNode(deep) {
      return _cloneNode(this.ownerDocument || this, this, deep);
    },
    // Modified in DOM Level 2:
    normalize: function normalize() {
      var child = this.firstChild;

      while (child) {
        var next = child.nextSibling;

        if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
          this.removeChild(next);
          child.appendData(next.data);
        } else {
          child.normalize();
          child = next;
        }
      }
    },
    // Introduced in DOM Level 2:
    isSupported: function isSupported(feature, version) {
      return this.ownerDocument.implementation.hasFeature(feature, version);
    },
    // Introduced in DOM Level 2:
    hasAttributes: function hasAttributes() {
      return this.attributes.length > 0;
    },

    /**
     * Look up the prefix associated to the given namespace URI, starting from this node.
     * **The default namespace declarations are ignored by this method.**
     * See Namespace Prefix Lookup for details on the algorithm used by this method.
     *
     * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
     *
     * @param {string | null} namespaceURI
     * @returns {string | null}
     * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
     * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
     * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
     * @see https://github.com/xmldom/xmldom/issues/322
     */
    lookupPrefix: function lookupPrefix(namespaceURI) {
      var el = this;

      while (el) {
        var map = el._nsMap; //console.dir(map)

        if (map) {
          for (var n in map) {
            if (map[n] == namespaceURI) {
              return n;
            }
          }
        }

        el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
      }

      return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI: function lookupNamespaceURI(prefix) {
      var el = this;

      while (el) {
        var map = el._nsMap; //console.dir(map)

        if (map) {
          if (prefix in map) {
            return map[prefix];
          }
        }

        el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
      }

      return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
      var prefix = this.lookupPrefix(namespaceURI);
      return prefix == null;
    }
  };

  function _xmlEncoder(c) {
    return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
  }

  copy(NodeType, Node);
  copy(NodeType, Node.prototype);
  /**
   * @param callback return true for continue,false for break
   * @return boolean true: break visit;
   */

  function _visitNode(node, callback) {
    if (callback(node)) {
      return true;
    }

    if (node = node.firstChild) {
      do {
        if (_visitNode(node, callback)) {
          return true;
        }
      } while (node = node.nextSibling);
    }
  }

  function Document() {}

  function _onAddAttribute(doc, el, newAttr) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;

    if (ns === NAMESPACE$1.XMLNS) {
      //update namespace
      el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
    }
  }

  function _onRemoveAttribute(doc, el, newAttr, remove) {
    doc && doc._inc++;
    var ns = newAttr.namespaceURI;

    if (ns === NAMESPACE$1.XMLNS) {
      //update namespace
      delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
    }
  }

  function _onUpdateChild(doc, el, newChild) {
    if (doc && doc._inc) {
      doc._inc++; //update childNodes

      var cs = el.childNodes;

      if (newChild) {
        cs[cs.length++] = newChild;
      } else {
        //console.log(1)
        var child = el.firstChild;
        var i = 0;

        while (child) {
          cs[i++] = child;
          child = child.nextSibling;
        }

        cs.length = i;
      }
    }
  }
  /**
   * attributes;
   * children;
   * 
   * writeable properties:
   * nodeValue,Attr:value,CharacterData:data
   * prefix
   */


  function _removeChild(parentNode, child) {
    var previous = child.previousSibling;
    var next = child.nextSibling;

    if (previous) {
      previous.nextSibling = next;
    } else {
      parentNode.firstChild = next;
    }

    if (next) {
      next.previousSibling = previous;
    } else {
      parentNode.lastChild = previous;
    }

    _onUpdateChild(parentNode.ownerDocument, parentNode);

    return child;
  }
  /**
   * preformance key(refChild == null)
   */


  function _insertBefore(parentNode, newChild, nextChild) {
    var cp = newChild.parentNode;

    if (cp) {
      cp.removeChild(newChild); //remove and update
    }

    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      var newFirst = newChild.firstChild;

      if (newFirst == null) {
        return newChild;
      }

      var newLast = newChild.lastChild;
    } else {
      newFirst = newLast = newChild;
    }

    var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
    newFirst.previousSibling = pre;
    newLast.nextSibling = nextChild;

    if (pre) {
      pre.nextSibling = newFirst;
    } else {
      parentNode.firstChild = newFirst;
    }

    if (nextChild == null) {
      parentNode.lastChild = newLast;
    } else {
      nextChild.previousSibling = newLast;
    }

    do {
      newFirst.parentNode = parentNode;
    } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));

    _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode); //console.log(parentNode.lastChild.nextSibling == null)


    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      newChild.firstChild = newChild.lastChild = null;
    }

    return newChild;
  }

  function _appendSingleChild(parentNode, newChild) {
    var cp = newChild.parentNode;

    if (cp) {
      var pre = parentNode.lastChild;
      cp.removeChild(newChild); //remove and update

      var pre = parentNode.lastChild;
    }

    var pre = parentNode.lastChild;
    newChild.parentNode = parentNode;
    newChild.previousSibling = pre;
    newChild.nextSibling = null;

    if (pre) {
      pre.nextSibling = newChild;
    } else {
      parentNode.firstChild = newChild;
    }

    parentNode.lastChild = newChild;

    _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);

    return newChild; //console.log("__aa",parentNode.lastChild.nextSibling == null)
  }

  Document.prototype = {
    //implementation : null,
    nodeName: '#document',
    nodeType: DOCUMENT_NODE,

    /**
     * The DocumentType node of the document.
     *
     * @readonly
     * @type DocumentType
     */
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function insertBefore(newChild, refChild) {
      //raises
      if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
        var child = newChild.firstChild;

        while (child) {
          var next = child.nextSibling;
          this.insertBefore(child, refChild);
          child = next;
        }

        return newChild;
      }

      if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
        this.documentElement = newChild;
      }

      return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
    },
    removeChild: function removeChild(oldChild) {
      if (this.documentElement == oldChild) {
        this.documentElement = null;
      }

      return _removeChild(this, oldChild);
    },
    // Introduced in DOM Level 2:
    importNode: function importNode(importedNode, deep) {
      return _importNode(this, importedNode, deep);
    },
    // Introduced in DOM Level 2:
    getElementById: function getElementById(id) {
      var rtv = null;

      _visitNode(this.documentElement, function (node) {
        if (node.nodeType == ELEMENT_NODE) {
          if (node.getAttribute('id') == id) {
            rtv = node;
            return true;
          }
        }
      });

      return rtv;
    },

    /**
     * The `getElementsByClassName` method of `Document` interface returns an array-like object
     * of all child elements which have **all** of the given class name(s).
     *
     * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
     *
     *
     * Warning: This is a live LiveNodeList.
     * Changes in the DOM will reflect in the array as the changes occur.
     * If an element selected by this array no longer qualifies for the selector,
     * it will automatically be removed. Be aware of this for iteration purposes.
     *
     * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
     * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
     */
    getElementsByClassName: function getElementsByClassName(classNames) {
      var classNamesSet = toOrderedSet(classNames);
      return new LiveNodeList(this, function (base) {
        var ls = [];

        if (classNamesSet.length > 0) {
          _visitNode(base.documentElement, function (node) {
            if (node !== base && node.nodeType === ELEMENT_NODE) {
              var nodeClassNames = node.getAttribute('class'); // can be null if the attribute does not exist

              if (nodeClassNames) {
                // before splitting and iterating just compare them for the most common case
                var matches = classNames === nodeClassNames;

                if (!matches) {
                  var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                  matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                }

                if (matches) {
                  ls.push(node);
                }
              }
            }
          });
        }

        return ls;
      });
    },
    //document factory method:
    createElement: function createElement(tagName) {
      var node = new Element();
      node.ownerDocument = this;
      node.nodeName = tagName;
      node.tagName = tagName;
      node.localName = tagName;
      node.childNodes = new NodeList();
      var attrs = node.attributes = new NamedNodeMap();
      attrs._ownerElement = node;
      return node;
    },
    createDocumentFragment: function createDocumentFragment() {
      var node = new DocumentFragment();
      node.ownerDocument = this;
      node.childNodes = new NodeList();
      return node;
    },
    createTextNode: function createTextNode(data) {
      var node = new Text();
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createComment: function createComment(data) {
      var node = new Comment();
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createCDATASection: function createCDATASection(data) {
      var node = new CDATASection();
      node.ownerDocument = this;
      node.appendData(data);
      return node;
    },
    createProcessingInstruction: function createProcessingInstruction(target, data) {
      var node = new ProcessingInstruction();
      node.ownerDocument = this;
      node.tagName = node.target = target;
      node.nodeValue = node.data = data;
      return node;
    },
    createAttribute: function createAttribute(name) {
      var node = new Attr();
      node.ownerDocument = this;
      node.name = name;
      node.nodeName = name;
      node.localName = name;
      node.specified = true;
      return node;
    },
    createEntityReference: function createEntityReference(name) {
      var node = new EntityReference();
      node.ownerDocument = this;
      node.nodeName = name;
      return node;
    },
    // Introduced in DOM Level 2:
    createElementNS: function createElementNS(namespaceURI, qualifiedName) {
      var node = new Element();
      var pl = qualifiedName.split(':');
      var attrs = node.attributes = new NamedNodeMap();
      node.childNodes = new NodeList();
      node.ownerDocument = this;
      node.nodeName = qualifiedName;
      node.tagName = qualifiedName;
      node.namespaceURI = namespaceURI;

      if (pl.length == 2) {
        node.prefix = pl[0];
        node.localName = pl[1];
      } else {
        //el.prefix = null;
        node.localName = qualifiedName;
      }

      attrs._ownerElement = node;
      return node;
    },
    // Introduced in DOM Level 2:
    createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
      var node = new Attr();
      var pl = qualifiedName.split(':');
      node.ownerDocument = this;
      node.nodeName = qualifiedName;
      node.name = qualifiedName;
      node.namespaceURI = namespaceURI;
      node.specified = true;

      if (pl.length == 2) {
        node.prefix = pl[0];
        node.localName = pl[1];
      } else {
        //el.prefix = null;
        node.localName = qualifiedName;
      }

      return node;
    }
  };

  _extends(Document, Node);

  function Element() {
    this._nsMap = {};
  }

  Element.prototype = {
    nodeType: ELEMENT_NODE,
    hasAttribute: function hasAttribute(name) {
      return this.getAttributeNode(name) != null;
    },
    getAttribute: function getAttribute(name) {
      var attr = this.getAttributeNode(name);
      return attr && attr.value || '';
    },
    getAttributeNode: function getAttributeNode(name) {
      return this.attributes.getNamedItem(name);
    },
    setAttribute: function setAttribute(name, value) {
      var attr = this.ownerDocument.createAttribute(name);
      attr.value = attr.nodeValue = "" + value;
      this.setAttributeNode(attr);
    },
    removeAttribute: function removeAttribute(name) {
      var attr = this.getAttributeNode(name);
      attr && this.removeAttributeNode(attr);
    },
    //four real opeartion method
    appendChild: function appendChild(newChild) {
      if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
        return this.insertBefore(newChild, null);
      } else {
        return _appendSingleChild(this, newChild);
      }
    },
    setAttributeNode: function setAttributeNode(newAttr) {
      return this.attributes.setNamedItem(newAttr);
    },
    setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
      return this.attributes.setNamedItemNS(newAttr);
    },
    removeAttributeNode: function removeAttributeNode(oldAttr) {
      //console.log(this == oldAttr.ownerElement)
      return this.attributes.removeNamedItem(oldAttr.nodeName);
    },
    //get real attribute name,and remove it by removeAttributeNode
    removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
      var old = this.getAttributeNodeNS(namespaceURI, localName);
      old && this.removeAttributeNode(old);
    },
    hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
      return this.getAttributeNodeNS(namespaceURI, localName) != null;
    },
    getAttributeNS: function getAttributeNS(namespaceURI, localName) {
      var attr = this.getAttributeNodeNS(namespaceURI, localName);
      return attr && attr.value || '';
    },
    setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
      var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
      attr.value = attr.nodeValue = "" + value;
      this.setAttributeNode(attr);
    },
    getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
      return this.attributes.getNamedItemNS(namespaceURI, localName);
    },
    getElementsByTagName: function getElementsByTagName(tagName) {
      return new LiveNodeList(this, function (base) {
        var ls = [];

        _visitNode(base, function (node) {
          if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
            ls.push(node);
          }
        });

        return ls;
      });
    },
    getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
      return new LiveNodeList(this, function (base) {
        var ls = [];

        _visitNode(base, function (node) {
          if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
            ls.push(node);
          }
        });

        return ls;
      });
    }
  };
  Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
  Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

  _extends(Element, Node);

  function Attr() {}

  Attr.prototype.nodeType = ATTRIBUTE_NODE;

  _extends(Attr, Node);

  function CharacterData() {}

  CharacterData.prototype = {
    data: '',
    substringData: function substringData(offset, count) {
      return this.data.substring(offset, offset + count);
    },
    appendData: function appendData(text) {
      text = this.data + text;
      this.nodeValue = this.data = text;
      this.length = text.length;
    },
    insertData: function insertData(offset, text) {
      this.replaceData(offset, 0, text);
    },
    appendChild: function appendChild(newChild) {
      throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
    },
    deleteData: function deleteData(offset, count) {
      this.replaceData(offset, count, "");
    },
    replaceData: function replaceData(offset, count, text) {
      var start = this.data.substring(0, offset);
      var end = this.data.substring(offset + count);
      text = start + text + end;
      this.nodeValue = this.data = text;
      this.length = text.length;
    }
  };

  _extends(CharacterData, Node);

  function Text() {}

  Text.prototype = {
    nodeName: "#text",
    nodeType: TEXT_NODE,
    splitText: function splitText(offset) {
      var text = this.data;
      var newText = text.substring(offset);
      text = text.substring(0, offset);
      this.data = this.nodeValue = text;
      this.length = text.length;
      var newNode = this.ownerDocument.createTextNode(newText);

      if (this.parentNode) {
        this.parentNode.insertBefore(newNode, this.nextSibling);
      }

      return newNode;
    }
  };

  _extends(Text, CharacterData);

  function Comment() {}

  Comment.prototype = {
    nodeName: "#comment",
    nodeType: COMMENT_NODE
  };

  _extends(Comment, CharacterData);

  function CDATASection() {}

  CDATASection.prototype = {
    nodeName: "#cdata-section",
    nodeType: CDATA_SECTION_NODE
  };

  _extends(CDATASection, CharacterData);

  function DocumentType() {}

  DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;

  _extends(DocumentType, Node);

  function Notation() {}

  Notation.prototype.nodeType = NOTATION_NODE;

  _extends(Notation, Node);

  function Entity() {}

  Entity.prototype.nodeType = ENTITY_NODE;

  _extends(Entity, Node);

  function EntityReference() {}

  EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;

  _extends(EntityReference, Node);

  function DocumentFragment() {}

  DocumentFragment.prototype.nodeName = "#document-fragment";
  DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;

  _extends(DocumentFragment, Node);

  function ProcessingInstruction() {}

  ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;

  _extends(ProcessingInstruction, Node);

  function XMLSerializer() {}

  XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
    return nodeSerializeToString.call(node, isHtml, nodeFilter);
  };

  Node.prototype.toString = nodeSerializeToString;

  function nodeSerializeToString(isHtml, nodeFilter) {
    var buf = [];
    var refNode = this.nodeType == 9 && this.documentElement || this;
    var prefix = refNode.prefix;
    var uri = refNode.namespaceURI;

    if (uri && prefix == null) {
      //console.log(prefix)
      var prefix = refNode.lookupPrefix(uri);

      if (prefix == null) {
        //isHTML = true;
        var visibleNamespaces = [{
          namespace: uri,
          prefix: null
        } //{namespace:uri,prefix:''}
        ];
      }
    }

    serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces); //console.log('###',this.nodeType,uri,prefix,buf.join(''))

    return buf.join('');
  }

  function needNamespaceDefine(node, isHTML, visibleNamespaces) {
    var prefix = node.prefix || '';
    var uri = node.namespaceURI; // According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
    // and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
    // > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
    // in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
    // and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
    // > [...] Furthermore, the attribute value [...] must not be an empty string.
    // so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.

    if (!uri) {
      return false;
    }

    if (prefix === "xml" && uri === NAMESPACE$1.XML || uri === NAMESPACE$1.XMLNS) {
      return false;
    }

    var i = visibleNamespaces.length;

    while (i--) {
      var ns = visibleNamespaces[i]; // get namespace prefix

      if (ns.prefix === prefix) {
        return ns.namespace !== uri;
      }
    }

    return true;
  }
  /**
   * Well-formed constraint: No < in Attribute Values
   * The replacement text of any entity referred to directly or indirectly in an attribute value must not contain a <.
   * @see https://www.w3.org/TR/xml/#CleanAttrVals
   * @see https://www.w3.org/TR/xml/#NT-AttValue
   */


  function addSerializedAttribute(buf, qualifiedName, value) {
    buf.push(' ', qualifiedName, '="', value.replace(/[<&"]/g, _xmlEncoder), '"');
  }

  function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
    if (!visibleNamespaces) {
      visibleNamespaces = [];
    }

    if (nodeFilter) {
      node = nodeFilter(node);

      if (node) {
        if (typeof node == 'string') {
          buf.push(node);
          return;
        }
      } else {
        return;
      } //buf.sort.apply(attrs, attributeSorter);

    }

    switch (node.nodeType) {
      case ELEMENT_NODE:
        var attrs = node.attributes;
        var len = attrs.length;
        var child = node.firstChild;
        var nodeName = node.tagName;
        isHTML = NAMESPACE$1.isHTML(node.namespaceURI) || isHTML;
        var prefixedNodeName = nodeName;

        if (!isHTML && !node.prefix && node.namespaceURI) {
          var defaultNS; // lookup current default ns from `xmlns` attribute

          for (var ai = 0; ai < attrs.length; ai++) {
            if (attrs.item(ai).name === 'xmlns') {
              defaultNS = attrs.item(ai).value;
              break;
            }
          }

          if (!defaultNS) {
            // lookup current default ns in visibleNamespaces
            for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
              var namespace = visibleNamespaces[nsi];

              if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
                defaultNS = namespace.namespace;
                break;
              }
            }
          }

          if (defaultNS !== node.namespaceURI) {
            for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
              var namespace = visibleNamespaces[nsi];

              if (namespace.namespace === node.namespaceURI) {
                if (namespace.prefix) {
                  prefixedNodeName = namespace.prefix + ':' + nodeName;
                }

                break;
              }
            }
          }
        }

        buf.push('<', prefixedNodeName);

        for (var i = 0; i < len; i++) {
          // add namespaces for attributes
          var attr = attrs.item(i);

          if (attr.prefix == 'xmlns') {
            visibleNamespaces.push({
              prefix: attr.localName,
              namespace: attr.value
            });
          } else if (attr.nodeName == 'xmlns') {
            visibleNamespaces.push({
              prefix: '',
              namespace: attr.value
            });
          }
        }

        for (var i = 0; i < len; i++) {
          var attr = attrs.item(i);

          if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
            var prefix = attr.prefix || '';
            var uri = attr.namespaceURI;
            addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
            visibleNamespaces.push({
              prefix: prefix,
              namespace: uri
            });
          }

          serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
        } // add namespace for current node		


        if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
          var prefix = node.prefix || '';
          var uri = node.namespaceURI;
          addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : "xmlns", uri);
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }

        if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
          buf.push('>'); //if is cdata child node

          if (isHTML && /^script$/i.test(nodeName)) {
            while (child) {
              if (child.data) {
                buf.push(child.data);
              } else {
                serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
              }

              child = child.nextSibling;
            }
          } else {
            while (child) {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
              child = child.nextSibling;
            }
          }

          buf.push('</', prefixedNodeName, '>');
        } else {
          buf.push('/>');
        } // remove added visible namespaces
        //visibleNamespaces.length = startVisibleNamespaces;


        return;

      case DOCUMENT_NODE:
      case DOCUMENT_FRAGMENT_NODE:
        var child = node.firstChild;

        while (child) {
          serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
          child = child.nextSibling;
        }

        return;

      case ATTRIBUTE_NODE:
        return addSerializedAttribute(buf, node.name, node.value);

      case TEXT_NODE:
        /**
         * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
         * except when used as markup delimiters, or within a comment, a processing instruction, or a CDATA section.
         * If they are needed elsewhere, they must be escaped using either numeric character references or the strings
         * `&amp;` and `&lt;` respectively.
         * The right angle bracket (>) may be represented using the string " &gt; ", and must, for compatibility,
         * be escaped using either `&gt;` or a character reference when it appears in the string `]]>` in content,
         * when that string is not marking the end of a CDATA section.
         *
         * In the content of elements, character data is any string of characters
         * which does not contain the start-delimiter of any markup
         * and does not include the CDATA-section-close delimiter, `]]>`.
         *
         * @see https://www.w3.org/TR/xml/#NT-CharData
         */
        return buf.push(node.data.replace(/[<&]/g, _xmlEncoder).replace(/]]>/g, ']]&gt;'));

      case CDATA_SECTION_NODE:
        return buf.push('<![CDATA[', node.data, ']]>');

      case COMMENT_NODE:
        return buf.push("<!--", node.data, "-->");

      case DOCUMENT_TYPE_NODE:
        var pubid = node.publicId;
        var sysid = node.systemId;
        buf.push('<!DOCTYPE ', node.name);

        if (pubid) {
          buf.push(' PUBLIC ', pubid);

          if (sysid && sysid != '.') {
            buf.push(' ', sysid);
          }

          buf.push('>');
        } else if (sysid && sysid != '.') {
          buf.push(' SYSTEM ', sysid, '>');
        } else {
          var sub = node.internalSubset;

          if (sub) {
            buf.push(" [", sub, "]");
          }

          buf.push(">");
        }

        return;

      case PROCESSING_INSTRUCTION_NODE:
        return buf.push("<?", node.target, " ", node.data, "?>");

      case ENTITY_REFERENCE_NODE:
        return buf.push('&', node.nodeName, ';');
      //case ENTITY_NODE:
      //case NOTATION_NODE:

      default:
        buf.push('??', node.nodeName);
    }
  }

  function _importNode(doc, node, deep) {
    var node2;

    switch (node.nodeType) {
      case ELEMENT_NODE:
        node2 = node.cloneNode(false);
        node2.ownerDocument = doc;
      //var attrs = node2.attributes;
      //var len = attrs.length;
      //for(var i=0;i<len;i++){
      //node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
      //}

      case DOCUMENT_FRAGMENT_NODE:
        break;

      case ATTRIBUTE_NODE:
        deep = true;
        break;
      //case ENTITY_REFERENCE_NODE:
      //case PROCESSING_INSTRUCTION_NODE:
      ////case TEXT_NODE:
      //case CDATA_SECTION_NODE:
      //case COMMENT_NODE:
      //	deep = false;
      //	break;
      //case DOCUMENT_NODE:
      //case DOCUMENT_TYPE_NODE:
      //cannot be imported.
      //case ENTITY_NODE:
      //case NOTATION_NODE：
      //can not hit in level3
      //default:throw e;
    }

    if (!node2) {
      node2 = node.cloneNode(false); //false
    }

    node2.ownerDocument = doc;
    node2.parentNode = null;

    if (deep) {
      var child = node.firstChild;

      while (child) {
        node2.appendChild(_importNode(doc, child, deep));
        child = child.nextSibling;
      }
    }

    return node2;
  } //
  //var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
  //					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};


  function _cloneNode(doc, node, deep) {
    var node2 = new node.constructor();

    for (var n in node) {
      var v = node[n];

      if (_typeof(v) != 'object') {
        if (v != node2[n]) {
          node2[n] = v;
        }
      }
    }

    if (node.childNodes) {
      node2.childNodes = new NodeList();
    }

    node2.ownerDocument = doc;

    switch (node2.nodeType) {
      case ELEMENT_NODE:
        var attrs = node.attributes;
        var attrs2 = node2.attributes = new NamedNodeMap();
        var len = attrs.length;
        attrs2._ownerElement = node2;

        for (var i = 0; i < len; i++) {
          node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
        }

        break;

      case ATTRIBUTE_NODE:
        deep = true;
    }

    if (deep) {
      var child = node.firstChild;

      while (child) {
        node2.appendChild(_cloneNode(doc, child, deep));
        child = child.nextSibling;
      }
    }

    return node2;
  }

  function __set__(object, key, value) {
    object[key] = value;
  } //do dynamic


  try {
    if (Object.defineProperty) {
      var getTextContent = function getTextContent(node) {
        switch (node.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            var buf = [];
            node = node.firstChild;

            while (node) {
              if (node.nodeType !== 7 && node.nodeType !== 8) {
                buf.push(getTextContent(node));
              }

              node = node.nextSibling;
            }

            return buf.join('');

          default:
            return node.nodeValue;
        }
      };

      Object.defineProperty(LiveNodeList.prototype, 'length', {
        get: function get() {
          _updateLiveList(this);

          return this.$$length;
        }
      });
      Object.defineProperty(Node.prototype, 'textContent', {
        get: function get() {
          return getTextContent(this);
        },
        set: function set(data) {
          switch (this.nodeType) {
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              while (this.firstChild) {
                this.removeChild(this.firstChild);
              }

              if (data || String(data)) {
                this.appendChild(this.ownerDocument.createTextNode(data));
              }

              break;

            default:
              this.data = data;
              this.value = data;
              this.nodeValue = data;
          }
        }
      });

      __set__ = function __set__(object, key, value) {
        //console.log(value)
        object['$$' + key] = value;
      };
    }
  } catch (e) {//ie8
  } //if(typeof require == 'function'){


  var DocumentType_1 = DocumentType;
  var DOMException_1 = DOMException;
  var DOMImplementation_1 = DOMImplementation;
  var Element_1 = Element;
  var Node_1 = Node;
  var NodeList_1 = NodeList;
  var XMLSerializer_1 = XMLSerializer; //}

  var dom = {
    DocumentType: DocumentType_1,
    DOMException: DOMException_1,
    DOMImplementation: DOMImplementation_1,
    Element: Element_1,
    Node: Node_1,
    NodeList: NodeList_1,
    XMLSerializer: XMLSerializer_1
  };

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var entities = createCommonjsModule(function (module, exports) {
    var freeze = conventions.freeze;
    /**
     * The entities that are predefined in every XML document.
     *
     * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
     * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
     * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML Wikipedia
     */

    exports.XML_ENTITIES = freeze({
      amp: '&',
      apos: "'",
      gt: '>',
      lt: '<',
      quot: '"'
    });
    /**
     * A map of currently 241 entities that are detected in an HTML document.
     * They contain all entries from `XML_ENTITIES`.
     *
     * @see XML_ENTITIES
     * @see DOMParser.parseFromString
     * @see DOMImplementation.prototype.createHTMLDocument
     * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5) Spec
     * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
     * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
     * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML Wikipedia (HTML)
     * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML Wikpedia (XHTML)
     */

    exports.HTML_ENTITIES = freeze({
      lt: '<',
      gt: '>',
      amp: '&',
      quot: '"',
      apos: "'",
      Agrave: "À",
      Aacute: "Á",
      Acirc: "Â",
      Atilde: "Ã",
      Auml: "Ä",
      Aring: "Å",
      AElig: "Æ",
      Ccedil: "Ç",
      Egrave: "È",
      Eacute: "É",
      Ecirc: "Ê",
      Euml: "Ë",
      Igrave: "Ì",
      Iacute: "Í",
      Icirc: "Î",
      Iuml: "Ï",
      ETH: "Ð",
      Ntilde: "Ñ",
      Ograve: "Ò",
      Oacute: "Ó",
      Ocirc: "Ô",
      Otilde: "Õ",
      Ouml: "Ö",
      Oslash: "Ø",
      Ugrave: "Ù",
      Uacute: "Ú",
      Ucirc: "Û",
      Uuml: "Ü",
      Yacute: "Ý",
      THORN: "Þ",
      szlig: "ß",
      agrave: "à",
      aacute: "á",
      acirc: "â",
      atilde: "ã",
      auml: "ä",
      aring: "å",
      aelig: "æ",
      ccedil: "ç",
      egrave: "è",
      eacute: "é",
      ecirc: "ê",
      euml: "ë",
      igrave: "ì",
      iacute: "í",
      icirc: "î",
      iuml: "ï",
      eth: "ð",
      ntilde: "ñ",
      ograve: "ò",
      oacute: "ó",
      ocirc: "ô",
      otilde: "õ",
      ouml: "ö",
      oslash: "ø",
      ugrave: "ù",
      uacute: "ú",
      ucirc: "û",
      uuml: "ü",
      yacute: "ý",
      thorn: "þ",
      yuml: "ÿ",
      nbsp: "\xA0",
      iexcl: "¡",
      cent: "¢",
      pound: "£",
      curren: "¤",
      yen: "¥",
      brvbar: "¦",
      sect: "§",
      uml: "¨",
      copy: "©",
      ordf: "ª",
      laquo: "«",
      not: "¬",
      shy: "­­",
      reg: "®",
      macr: "¯",
      deg: "°",
      plusmn: "±",
      sup2: "²",
      sup3: "³",
      acute: "´",
      micro: "µ",
      para: "¶",
      middot: "·",
      cedil: "¸",
      sup1: "¹",
      ordm: "º",
      raquo: "»",
      frac14: "¼",
      frac12: "½",
      frac34: "¾",
      iquest: "¿",
      times: "×",
      divide: "÷",
      forall: "∀",
      part: "∂",
      exist: "∃",
      empty: "∅",
      nabla: "∇",
      isin: "∈",
      notin: "∉",
      ni: "∋",
      prod: "∏",
      sum: "∑",
      minus: "−",
      lowast: "∗",
      radic: "√",
      prop: "∝",
      infin: "∞",
      ang: "∠",
      and: "∧",
      or: "∨",
      cap: "∩",
      cup: "∪",
      'int': "∫",
      there4: "∴",
      sim: "∼",
      cong: "≅",
      asymp: "≈",
      ne: "≠",
      equiv: "≡",
      le: "≤",
      ge: "≥",
      sub: "⊂",
      sup: "⊃",
      nsub: "⊄",
      sube: "⊆",
      supe: "⊇",
      oplus: "⊕",
      otimes: "⊗",
      perp: "⊥",
      sdot: "⋅",
      Alpha: "Α",
      Beta: "Β",
      Gamma: "Γ",
      Delta: "Δ",
      Epsilon: "Ε",
      Zeta: "Ζ",
      Eta: "Η",
      Theta: "Θ",
      Iota: "Ι",
      Kappa: "Κ",
      Lambda: "Λ",
      Mu: "Μ",
      Nu: "Ν",
      Xi: "Ξ",
      Omicron: "Ο",
      Pi: "Π",
      Rho: "Ρ",
      Sigma: "Σ",
      Tau: "Τ",
      Upsilon: "Υ",
      Phi: "Φ",
      Chi: "Χ",
      Psi: "Ψ",
      Omega: "Ω",
      alpha: "α",
      beta: "β",
      gamma: "γ",
      delta: "δ",
      epsilon: "ε",
      zeta: "ζ",
      eta: "η",
      theta: "θ",
      iota: "ι",
      kappa: "κ",
      lambda: "λ",
      mu: "μ",
      nu: "ν",
      xi: "ξ",
      omicron: "ο",
      pi: "π",
      rho: "ρ",
      sigmaf: "ς",
      sigma: "σ",
      tau: "τ",
      upsilon: "υ",
      phi: "φ",
      chi: "χ",
      psi: "ψ",
      omega: "ω",
      thetasym: "ϑ",
      upsih: "ϒ",
      piv: "ϖ",
      OElig: "Œ",
      oelig: "œ",
      Scaron: "Š",
      scaron: "š",
      Yuml: "Ÿ",
      fnof: "ƒ",
      circ: "ˆ",
      tilde: "˜",
      ensp: " ",
      emsp: " ",
      thinsp: " ",
      zwnj: "‌",
      zwj: "‍",
      lrm: "‎",
      rlm: "‏",
      ndash: "–",
      mdash: "—",
      lsquo: "‘",
      rsquo: "’",
      sbquo: "‚",
      ldquo: "“",
      rdquo: "”",
      bdquo: "„",
      dagger: "†",
      Dagger: "‡",
      bull: "•",
      hellip: "…",
      permil: "‰",
      prime: "′",
      Prime: "″",
      lsaquo: "‹",
      rsaquo: "›",
      oline: "‾",
      euro: "€",
      trade: "™",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓",
      harr: "↔",
      crarr: "↵",
      lceil: "⌈",
      rceil: "⌉",
      lfloor: "⌊",
      rfloor: "⌋",
      loz: "◊",
      spades: "♠",
      clubs: "♣",
      hearts: "♥",
      diams: "♦"
    });
    /**
     * @deprecated use `HTML_ENTITIES` instead
     * @see HTML_ENTITIES
     */

    exports.entityMap = exports.HTML_ENTITIES;
  });
  var entities_1 = entities.XML_ENTITIES;
  var entities_2 = entities.HTML_ENTITIES;
  var entities_3 = entities.entityMap;
  var NAMESPACE$2 = conventions.NAMESPACE; //[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
  //[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
  //[5]   	Name	   ::=   	NameStartChar (NameChar)*

  var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; //\u10000-\uEFFFF

  var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
  var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$'); //var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
  //var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')
  //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
  //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE

  var S_TAG = 0; //tag name offerring

  var S_ATTR = 1; //attr name offerring 

  var S_ATTR_SPACE = 2; //attr name end and space offer

  var S_EQ = 3; //=space?

  var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)

  var S_ATTR_END = 5; //attr value end and no space(quot end)

  var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)

  var S_TAG_CLOSE = 7; //closed el<el />

  /**
   * Creates an error that will not be caught by XMLReader aka the SAX parser.
   *
   * @param {string} message
   * @param {any?} locator Optional, can provide details about the location in the source
   * @constructor
   */

  function ParseError(message, locator) {
    this.message = message;
    this.locator = locator;
    if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
  }

  ParseError.prototype = new Error();
  ParseError.prototype.name = ParseError.name;

  function XMLReader() {}

  XMLReader.prototype = {
    parse: function parse(source, defaultNSMap, entityMap) {
      var domBuilder = this.domBuilder;
      domBuilder.startDocument();

      _copy(defaultNSMap, defaultNSMap = {});

      _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);

      domBuilder.endDocument();
    }
  };

  function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
    function fixedFromCharCode(code) {
      // String.prototype.fromCharCode does not supports
      // > 2 bytes unicode chars directly
      if (code > 0xffff) {
        code -= 0x10000;
        var surrogate1 = 0xd800 + (code >> 10),
            surrogate2 = 0xdc00 + (code & 0x3ff);
        return String.fromCharCode(surrogate1, surrogate2);
      } else {
        return String.fromCharCode(code);
      }
    }

    function entityReplacer(a) {
      var k = a.slice(1, -1);

      if (k in entityMap) {
        return entityMap[k];
      } else if (k.charAt(0) === '#') {
        return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
      } else {
        errorHandler.error('entity not found:' + a);
        return a;
      }
    }

    function appendText(end) {
      //has some bugs
      if (end > start) {
        var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
        locator && position(start);
        domBuilder.characters(xt, 0, end - start);
        start = end;
      }
    }

    function position(p, m) {
      while (p >= lineEnd && (m = linePattern.exec(source))) {
        lineStart = m.index;
        lineEnd = lineStart + m[0].length;
        locator.lineNumber++; //console.log('line++:',locator,startPos,endPos)
      }

      locator.columnNumber = p - lineStart + 1;
    }

    var lineStart = 0;
    var lineEnd = 0;
    var linePattern = /.*(?:\r\n?|\n)|.*$/g;
    var locator = domBuilder.locator;
    var parseStack = [{
      currentNSMap: defaultNSMapCopy
    }];
    var closeMap = {};
    var start = 0;

    while (true) {
      try {
        var tagStart = source.indexOf('<', start);

        if (tagStart < 0) {
          if (!source.substr(start).match(/^\s*$/)) {
            var doc = domBuilder.doc;
            var text = doc.createTextNode(source.substr(start));
            doc.appendChild(text);
            domBuilder.currentElement = text;
          }

          return;
        }

        if (tagStart > start) {
          appendText(tagStart);
        }

        switch (source.charAt(tagStart + 1)) {
          case '/':
            var end = source.indexOf('>', tagStart + 3);
            var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, '');
            var config = parseStack.pop();

            if (end < 0) {
              tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
              errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
              end = tagStart + 1 + tagName.length;
            } else if (tagName.match(/\s</)) {
              tagName = tagName.replace(/[\s<].*/, '');
              errorHandler.error("end tag name: " + tagName + ' maybe not complete');
              end = tagStart + 1 + tagName.length;
            }

            var localNSMap = config.localNSMap;
            var endMatch = config.tagName == tagName;
            var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();

            if (endIgnoreCaseMach) {
              domBuilder.endElement(config.uri, config.localName, tagName);

              if (localNSMap) {
                for (var prefix in localNSMap) {
                  domBuilder.endPrefixMapping(prefix);
                }
              }

              if (!endMatch) {
                errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName); // No known test case
              }
            } else {
              parseStack.push(config);
            }

            end++;
            break;
          // end elment

          case '?':
            // <?...?>
            locator && position(tagStart);
            end = parseInstruction(source, tagStart, domBuilder);
            break;

          case '!':
            // <!doctype,<![CDATA,<!--
            locator && position(tagStart);
            end = parseDCC(source, tagStart, domBuilder, errorHandler);
            break;

          default:
            locator && position(tagStart);
            var el = new ElementAttributes();
            var currentNSMap = parseStack[parseStack.length - 1].currentNSMap; //elStartEnd

            var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
            var len = el.length;

            if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
              el.closed = true;

              if (!entityMap.nbsp) {
                errorHandler.warning('unclosed xml attribute');
              }
            }

            if (locator && len) {
              var locator2 = copyLocator(locator, {}); //try{//attribute position fixed

              for (var i = 0; i < len; i++) {
                var a = el[i];
                position(a.offset);
                a.locator = copyLocator(locator, {});
              }

              domBuilder.locator = locator2;

              if (appendElement(el, domBuilder, currentNSMap)) {
                parseStack.push(el);
              }

              domBuilder.locator = locator;
            } else {
              if (appendElement(el, domBuilder, currentNSMap)) {
                parseStack.push(el);
              }
            }

            if (NAMESPACE$2.isHTML(el.uri) && !el.closed) {
              end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
            } else {
              end++;
            }

        }
      } catch (e) {
        if (e instanceof ParseError) {
          throw e;
        }

        errorHandler.error('element parse error: ' + e);
        end = -1;
      }

      if (end > start) {
        start = end;
      } else {
        //TODO: 这里有可能sax回退，有位置错误风险
        appendText(Math.max(tagStart, start) + 1);
      }
    }
  }

  function copyLocator(f, t) {
    t.lineNumber = f.lineNumber;
    t.columnNumber = f.columnNumber;
    return t;
  }
  /**
   * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
   * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
   */


  function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
    /**
     * @param {string} qname
     * @param {string} value
     * @param {number} startIndex
     */
    function addAttribute(qname, value, startIndex) {
      if (el.attributeNames.hasOwnProperty(qname)) {
        errorHandler.fatalError('Attribute ' + qname + ' redefined');
      }

      el.addValue(qname, value, startIndex);
    }

    var attrName;
    var value;
    var p = ++start;
    var s = S_TAG; //status

    while (true) {
      var c = source.charAt(p);

      switch (c) {
        case '=':
          if (s === S_ATTR) {
            //attrName
            attrName = source.slice(start, p);
            s = S_EQ;
          } else if (s === S_ATTR_SPACE) {
            s = S_EQ;
          } else {
            //fatalError: equal must after attrName or space after attrName
            throw new Error('attribute equal must after attrName'); // No known test case
          }

          break;

        case '\'':
        case '"':
          if (s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
          ) {
            //equal
            if (s === S_ATTR) {
              errorHandler.warning('attribute value must after "="');
              attrName = source.slice(start, p);
            }

            start = p + 1;
            p = source.indexOf(c, start);

            if (p > 0) {
              value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              addAttribute(attrName, value, start - 1);
              s = S_ATTR_END;
            } else {
              //fatalError: no end quot match
              throw new Error('attribute value no end \'' + c + '\' match');
            }
          } else if (s == S_ATTR_NOQUOT_VALUE) {
            value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer); //console.log(attrName,value,start,p)

            addAttribute(attrName, value, start); //console.dir(el)

            errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
            start = p + 1;
            s = S_ATTR_END;
          } else {
            //fatalError: no equal before
            throw new Error('attribute value must after "="'); // No known test case
          }

          break;

        case '/':
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));

            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
              s = S_TAG_CLOSE;
              el.closed = true;

            case S_ATTR_NOQUOT_VALUE:
            case S_ATTR:
            case S_ATTR_SPACE:
              break;
            //case S_EQ:

            default:
              throw new Error("attribute invalid close char('/')");
            // No known test case
          }

          break;

        case '':
          //end document
          errorHandler.error('unexpected end of input');

          if (s == S_TAG) {
            el.setTagName(source.slice(start, p));
          }

          return p;

        case '>':
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));

            case S_ATTR_END:
            case S_TAG_SPACE:
            case S_TAG_CLOSE:
              break;
            //normal

            case S_ATTR_NOQUOT_VALUE: //Compatible state

            case S_ATTR:
              value = source.slice(start, p);

              if (value.slice(-1) === '/') {
                el.closed = true;
                value = value.slice(0, -1);
              }

            case S_ATTR_SPACE:
              if (s === S_ATTR_SPACE) {
                value = attrName;
              }

              if (s == S_ATTR_NOQUOT_VALUE) {
                errorHandler.warning('attribute "' + value + '" missed quot(")!');
                addAttribute(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
              } else {
                if (!NAMESPACE$2.isHTML(currentNSMap['']) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                  errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                }

                addAttribute(value, value, start);
              }

              break;

            case S_EQ:
              throw new Error('attribute value missed!!');
          } //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))


          return p;

        /*xml space '\x20' | #x9 | #xD | #xA; */

        case "\x80":
          c = ' ';

        default:
          if (c <= ' ') {
            //space
            switch (s) {
              case S_TAG:
                el.setTagName(source.slice(start, p)); //tagName

                s = S_TAG_SPACE;
                break;

              case S_ATTR:
                attrName = source.slice(start, p);
                s = S_ATTR_SPACE;
                break;

              case S_ATTR_NOQUOT_VALUE:
                var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
                errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                addAttribute(attrName, value, start);

              case S_ATTR_END:
                s = S_TAG_SPACE;
                break;
              //case S_TAG_SPACE:
              //case S_EQ:
              //case S_ATTR_SPACE:
              //	void();break;
              //case S_TAG_CLOSE:
              //ignore warning
            }
          } else {
            //not space
            //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
            //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
            switch (s) {
              //case S_TAG:void();break;
              //case S_ATTR:void();break;
              //case S_ATTR_NOQUOT_VALUE:void();break;
              case S_ATTR_SPACE:
                var tagName = el.tagName;

                if (!NAMESPACE$2.isHTML(currentNSMap['']) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                  errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                }

                addAttribute(attrName, attrName, start);
                start = p;
                s = S_ATTR;
                break;

              case S_ATTR_END:
                errorHandler.warning('attribute space is required"' + attrName + '"!!');

              case S_TAG_SPACE:
                s = S_ATTR;
                start = p;
                break;

              case S_EQ:
                s = S_ATTR_NOQUOT_VALUE;
                start = p;
                break;

              case S_TAG_CLOSE:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
          }

      } //end outer switch
      //console.log('p++',p)


      p++;
    }
  }
  /**
   * @return true if has new namespace define
   */


  function appendElement(el, domBuilder, currentNSMap) {
    var tagName = el.tagName;
    var localNSMap = null; //var currentNSMap = parseStack[parseStack.length-1].currentNSMap;

    var i = el.length;

    while (i--) {
      var a = el[i];
      var qName = a.qName;
      var value = a.value;
      var nsp = qName.indexOf(':');

      if (nsp > 0) {
        var prefix = a.prefix = qName.slice(0, nsp);
        var localName = qName.slice(nsp + 1);
        var nsPrefix = prefix === 'xmlns' && localName;
      } else {
        localName = qName;
        prefix = null;
        nsPrefix = qName === 'xmlns' && '';
      } //can not set prefix,because prefix !== ''


      a.localName = localName; //prefix == null for no ns prefix attribute 

      if (nsPrefix !== false) {
        //hack!!
        if (localNSMap == null) {
          localNSMap = {}; //console.log(currentNSMap,0)

          _copy(currentNSMap, currentNSMap = {}); //console.log(currentNSMap,1)

        }

        currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
        a.uri = NAMESPACE$2.XMLNS;
        domBuilder.startPrefixMapping(nsPrefix, value);
      }
    }

    var i = el.length;

    while (i--) {
      a = el[i];
      var prefix = a.prefix;

      if (prefix) {
        //no prefix attribute has no namespace
        if (prefix === 'xml') {
          a.uri = NAMESPACE$2.XML;
        }

        if (prefix !== 'xmlns') {
          a.uri = currentNSMap[prefix || '']; //{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
        }
      }
    }

    var nsp = tagName.indexOf(':');

    if (nsp > 0) {
      prefix = el.prefix = tagName.slice(0, nsp);
      localName = el.localName = tagName.slice(nsp + 1);
    } else {
      prefix = null; //important!!

      localName = el.localName = tagName;
    } //no prefix element has default namespace


    var ns = el.uri = currentNSMap[prefix || ''];
    domBuilder.startElement(ns, localName, tagName, el); //endPrefixMapping and startPrefixMapping have not any help for dom builder
    //localNSMap = null

    if (el.closed) {
      domBuilder.endElement(ns, localName, tagName);

      if (localNSMap) {
        for (prefix in localNSMap) {
          domBuilder.endPrefixMapping(prefix);
        }
      }
    } else {
      el.currentNSMap = currentNSMap;
      el.localNSMap = localNSMap; //parseStack.push(el);

      return true;
    }
  }

  function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
    if (/^(?:script|textarea)$/i.test(tagName)) {
      var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
      var text = source.substring(elStartEnd + 1, elEndStart);

      if (/[&<]/.test(text)) {
        if (/^script$/i.test(tagName)) {
          //if(!/\]\]>/.test(text)){
          //lexHandler.startCDATA();
          domBuilder.characters(text, 0, text.length); //lexHandler.endCDATA();

          return elEndStart; //}
        } //}else{//text area


        text = text.replace(/&#?\w+;/g, entityReplacer);
        domBuilder.characters(text, 0, text.length);
        return elEndStart; //}
      }
    }

    return elStartEnd + 1;
  }

  function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
    //if(tagName in closeMap){
    var pos = closeMap[tagName];

    if (pos == null) {
      //console.log(tagName)
      pos = source.lastIndexOf('</' + tagName + '>');

      if (pos < elStartEnd) {
        //忘记闭合
        pos = source.lastIndexOf('</' + tagName);
      }

      closeMap[tagName] = pos;
    }

    return pos < elStartEnd; //} 
  }

  function _copy(source, target) {
    for (var n in source) {
      target[n] = source[n];
    }
  }

  function parseDCC(source, start, domBuilder, errorHandler) {
    //sure start with '<!'
    var next = source.charAt(start + 2);

    switch (next) {
      case '-':
        if (source.charAt(start + 3) === '-') {
          var end = source.indexOf('-->', start + 4); //append comment source.substring(4,end)//<!--

          if (end > start) {
            domBuilder.comment(source, start + 4, end - start - 4);
            return end + 3;
          } else {
            errorHandler.error("Unclosed comment");
            return -1;
          }
        } else {
          //error
          return -1;
        }

      default:
        if (source.substr(start + 3, 6) == 'CDATA[') {
          var end = source.indexOf(']]>', start + 9);
          domBuilder.startCDATA();
          domBuilder.characters(source, start + 9, end - start - 9);
          domBuilder.endCDATA();
          return end + 3;
        } //<!DOCTYPE
        //startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 


        var matchs = split(source, start);
        var len = matchs.length;

        if (len > 1 && /!doctype/i.test(matchs[0][0])) {
          var name = matchs[1][0];
          var pubid = false;
          var sysid = false;

          if (len > 3) {
            if (/^public$/i.test(matchs[2][0])) {
              pubid = matchs[3][0];
              sysid = len > 4 && matchs[4][0];
            } else if (/^system$/i.test(matchs[2][0])) {
              sysid = matchs[3][0];
            }
          }

          var lastMatch = matchs[len - 1];
          domBuilder.startDTD(name, pubid, sysid);
          domBuilder.endDTD();
          return lastMatch.index + lastMatch[0].length;
        }

    }

    return -1;
  }

  function parseInstruction(source, start, domBuilder) {
    var end = source.indexOf('?>', start);

    if (end) {
      var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);

      if (match) {
        var len = match[0].length;
        domBuilder.processingInstruction(match[1], match[2]);
        return end + 2;
      } else {
        //error
        return -1;
      }
    }

    return -1;
  }

  function ElementAttributes() {
    this.attributeNames = {};
  }

  ElementAttributes.prototype = {
    setTagName: function setTagName(tagName) {
      if (!tagNamePattern.test(tagName)) {
        throw new Error('invalid tagName:' + tagName);
      }

      this.tagName = tagName;
    },
    addValue: function addValue(qName, value, offset) {
      if (!tagNamePattern.test(qName)) {
        throw new Error('invalid attribute:' + qName);
      }

      this.attributeNames[qName] = this.length;
      this[this.length++] = {
        qName: qName,
        value: value,
        offset: offset
      };
    },
    length: 0,
    getLocalName: function getLocalName(i) {
      return this[i].localName;
    },
    getLocator: function getLocator(i) {
      return this[i].locator;
    },
    getQName: function getQName(i) {
      return this[i].qName;
    },
    getURI: function getURI(i) {
      return this[i].uri;
    },
    getValue: function getValue(i) {
      return this[i].value;
    } //	,getIndex:function(uri, localName)){
    //		if(localName){
    //			
    //		}else{
    //			var qName = uri
    //		}
    //	},
    //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
    //	getType:function(uri,localName){}
    //	getType:function(i){},

  };

  function split(source, start) {
    var match;
    var buf = [];
    var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    reg.lastIndex = start;
    reg.exec(source); //skip <

    while (match = reg.exec(source)) {
      buf.push(match);
      if (match[1]) return buf;
    }
  }

  var XMLReader_1 = XMLReader;
  var ParseError_1 = ParseError;
  var sax = {
    XMLReader: XMLReader_1,
    ParseError: ParseError_1
  };
  var DOMImplementation$1 = dom.DOMImplementation;
  var NAMESPACE$3 = conventions.NAMESPACE;
  var ParseError$1 = sax.ParseError;
  var XMLReader$1 = sax.XMLReader;

  function DOMParser(options) {
    this.options = options || {
      locator: {}
    };
  }

  DOMParser.prototype.parseFromString = function (source, mimeType) {
    var options = this.options;
    var sax = new XMLReader$1();
    var domBuilder = options.domBuilder || new DOMHandler(); //contentHandler and LexicalHandler

    var errorHandler = options.errorHandler;
    var locator = options.locator;
    var defaultNSMap = options.xmlns || {};
    var isHTML = /\/x?html?$/.test(mimeType); //mimeType.toLowerCase().indexOf('html') > -1;

    var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;

    if (locator) {
      domBuilder.setDocumentLocator(locator);
    }

    sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
    sax.domBuilder = options.domBuilder || domBuilder;

    if (isHTML) {
      defaultNSMap[''] = NAMESPACE$3.HTML;
    }

    defaultNSMap.xml = defaultNSMap.xml || NAMESPACE$3.XML;

    if (source && typeof source === 'string') {
      sax.parse(source, defaultNSMap, entityMap);
    } else {
      sax.errorHandler.error("invalid doc source");
    }

    return domBuilder.doc;
  };

  function buildErrorHandler(errorImpl, domBuilder, locator) {
    if (!errorImpl) {
      if (domBuilder instanceof DOMHandler) {
        return domBuilder;
      }

      errorImpl = domBuilder;
    }

    var errorHandler = {};
    var isCallback = errorImpl instanceof Function;
    locator = locator || {};

    function build(key) {
      var fn = errorImpl[key];

      if (!fn && isCallback) {
        fn = errorImpl.length == 2 ? function (msg) {
          errorImpl(key, msg);
        } : errorImpl;
      }

      errorHandler[key] = fn && function (msg) {
        fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
      } || function () {};
    }

    build('warning');
    build('error');
    build('fatalError');
    return errorHandler;
  } //console.log('#\n\n\n\n\n\n\n####')

  /**
   * +ContentHandler+ErrorHandler
   * +LexicalHandler+EntityResolver2
   * -DeclHandler-DTDHandler
   *
   * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
   * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
   * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
   */


  function DOMHandler() {
    this.cdata = false;
  }

  function position(locator, node) {
    node.lineNumber = locator.lineNumber;
    node.columnNumber = locator.columnNumber;
  }
  /**
   * @see org.xml.sax.ContentHandler#startDocument
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
   */


  DOMHandler.prototype = {
    startDocument: function startDocument() {
      this.doc = new DOMImplementation$1().createDocument(null, null, null);

      if (this.locator) {
        this.doc.documentURI = this.locator.systemId;
      }
    },
    startElement: function startElement(namespaceURI, localName, qName, attrs) {
      var doc = this.doc;
      var el = doc.createElementNS(namespaceURI, qName || localName);
      var len = attrs.length;
      appendElement$1(this, el);
      this.currentElement = el;
      this.locator && position(this.locator, el);

      for (var i = 0; i < len; i++) {
        var namespaceURI = attrs.getURI(i);
        var value = attrs.getValue(i);
        var qName = attrs.getQName(i);
        var attr = doc.createAttributeNS(namespaceURI, qName);
        this.locator && position(attrs.getLocator(i), attr);
        attr.value = attr.nodeValue = value;
        el.setAttributeNode(attr);
      }
    },
    endElement: function endElement(namespaceURI, localName, qName) {
      var current = this.currentElement;
      var tagName = current.tagName;
      this.currentElement = current.parentNode;
    },
    startPrefixMapping: function startPrefixMapping(prefix, uri) {},
    endPrefixMapping: function endPrefixMapping(prefix) {},
    processingInstruction: function processingInstruction(target, data) {
      var ins = this.doc.createProcessingInstruction(target, data);
      this.locator && position(this.locator, ins);
      appendElement$1(this, ins);
    },
    ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
    characters: function characters(chars, start, length) {
      chars = _toString.apply(this, arguments); //console.log(chars)

      if (chars) {
        if (this.cdata) {
          var charNode = this.doc.createCDATASection(chars);
        } else {
          var charNode = this.doc.createTextNode(chars);
        }

        if (this.currentElement) {
          this.currentElement.appendChild(charNode);
        } else if (/^\s*$/.test(chars)) {
          this.doc.appendChild(charNode); //process xml
        }

        this.locator && position(this.locator, charNode);
      }
    },
    skippedEntity: function skippedEntity(name) {},
    endDocument: function endDocument() {
      this.doc.normalize();
    },
    setDocumentLocator: function setDocumentLocator(locator) {
      if (this.locator = locator) {
        // && !('lineNumber' in locator)){
        locator.lineNumber = 0;
      }
    },
    //LexicalHandler
    comment: function comment(chars, start, length) {
      chars = _toString.apply(this, arguments);
      var comm = this.doc.createComment(chars);
      this.locator && position(this.locator, comm);
      appendElement$1(this, comm);
    },
    startCDATA: function startCDATA() {
      //used in characters() methods
      this.cdata = true;
    },
    endCDATA: function endCDATA() {
      this.cdata = false;
    },
    startDTD: function startDTD(name, publicId, systemId) {
      var impl = this.doc.implementation;

      if (impl && impl.createDocumentType) {
        var dt = impl.createDocumentType(name, publicId, systemId);
        this.locator && position(this.locator, dt);
        appendElement$1(this, dt);
        this.doc.doctype = dt;
      }
    },

    /**
     * @see org.xml.sax.ErrorHandler
     * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
     */
    warning: function warning(error) {
      console.warn('[xmldom warning]\t' + error, _locator(this.locator));
    },
    error: function error(_error) {
      console.error('[xmldom error]\t' + _error, _locator(this.locator));
    },
    fatalError: function fatalError(error) {
      throw new ParseError$1(error, this.locator);
    }
  };

  function _locator(l) {
    if (l) {
      return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
    }
  }

  function _toString(chars, start, length) {
    if (typeof chars == 'string') {
      return chars.substr(start, length);
    } else {
      //java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
      if (chars.length >= start + length || start) {
        return new java.lang.String(chars, start, length) + '';
      }

      return chars;
    }
  }
  /*
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
   * used method of org.xml.sax.ext.LexicalHandler:
   *  #comment(chars, start, length)
   *  #startCDATA()
   *  #endCDATA()
   *  #startDTD(name, publicId, systemId)
   *
   *
   * IGNORED method of org.xml.sax.ext.LexicalHandler:
   *  #endDTD()
   *  #startEntity(name)
   *  #endEntity(name)
   *
   *
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
   * IGNORED method of org.xml.sax.ext.DeclHandler
   * 	#attributeDecl(eName, aName, type, mode, value)
   *  #elementDecl(name, model)
   *  #externalEntityDecl(name, publicId, systemId)
   *  #internalEntityDecl(name, value)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
   * IGNORED method of org.xml.sax.EntityResolver2
   *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
   *  #resolveEntity(publicId, systemId)
   *  #getExternalSubset(name, baseURI)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
   * IGNORED method of org.xml.sax.DTDHandler
   *  #notationDecl(name, publicId, systemId) {};
   *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
   */


  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
    DOMHandler.prototype[key] = function () {
      return null;
    };
  });
  /* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */

  function appendElement$1(hander, node) {
    if (!hander.currentElement) {
      hander.doc.appendChild(node);
    } else {
      hander.currentElement.appendChild(node);
    }
  } //appendChild and setAttributeNS are preformance key


  var __DOMHandler = DOMHandler;
  var DOMParser_1 = DOMParser;
  /**
   * @deprecated Import/require from main entry point instead
   */

  var DOMImplementation_1$1 = dom.DOMImplementation;
  /**
   * @deprecated Import/require from main entry point instead
   */

  var XMLSerializer$1 = dom.XMLSerializer;
  var domParser = {
    __DOMHandler: __DOMHandler,
    DOMParser: DOMParser_1,
    DOMImplementation: DOMImplementation_1$1,
    XMLSerializer: XMLSerializer$1
  };
  var DOMImplementation$2 = dom.DOMImplementation;
  var XMLSerializer$2 = dom.XMLSerializer;
  var DOMParser$1 = domParser.DOMParser;
  var lib = {
    DOMImplementation: DOMImplementation$2,
    XMLSerializer: XMLSerializer$2,
    DOMParser: DOMParser$1
  };

  function _await(value, then, direct) {
    if (direct) {
      return then ? then(value) : value;
    }

    if (!value || !value.then) {
      value = Promise.resolve(value);
    }

    return then ? value.then(then) : value;
  }

  var DOMParser$2 = lib.DOMParser;

  function _async(f) {
    return function () {
      for (var args = [], i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      try {
        return Promise.resolve(f.apply(this, args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  var CORS_PROXY = "https://iajs-cors.rchrd2.workers.dev";

  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  }

  var enc = encodeURIComponent;

  function _call(body, then, direct) {
    if (direct) {
      return then ? then(body()) : body();
    }

    try {
      var result = Promise.resolve(body());
      return then ? result.then(then) : result;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  var paramify = function paramify(obj) {
    return new URLSearchParams(obj).toString();
  };

  function _continue(value, then) {
    return value && value.then ? value.then(then) : then(value);
  }

  var str2arr = function str2arr(v) {
    return Array.isArray(v) ? v : [v];
  };

  var isInBrowser = function isInBrowser() {
    return !(typeof window === "undefined");
  };

  var corsWorkAround = function corsWorkAround(url) {
    if (isInBrowser()) {
      return "".concat(CORS_PROXY, "/").concat(url);
    } else {
      return url;
    }
  };

  var fetchJson = _async(function (url, options) {
    return _await(axios(url, _objectSpread({
      responseType: "json"
    }, options)), function (res) {
      return _await(res.data);
    });
  });

  var authToHeaderS3 = function authToHeaderS3(auth) {
    return auth.values.s3.access && auth.values.s3.secret ? {
      Authorization: "LOW ".concat(auth.values.s3.access, ":").concat(auth.values.s3.secret)
    } : {};
  };

  var authToHeaderCookies = function authToHeaderCookies(auth) {
    if (auth.values.cookies["logged-in-sig"] && auth.values.cookies["logged-in-user"]) {
      var cookieStr = "logged-in-sig=".concat(auth.values.cookies["logged-in-sig"], ";");
      cookieStr += " logged-in-user=".concat(auth.values.cookies["logged-in-user"]);
      var headers = {
        Cookie: cookieStr
      };

      if (isInBrowser()) {
        headers["X-Cookie-Cors"] = cookieStr;
      }

      return headers;
    } else {
      return {};
    }
  };

  var newEmptyAuth = function newEmptyAuth() {
    return JSON.parse(JSON.stringify({
      success: false,
      values: {
        cookies: {
          "logged-in-sig": null,
          "logged-in-user": null
        },
        email: null,
        itemname: null,
        s3: {
          access: null,
          secret: null
        },
        screenname: null
      },
      version: 1
    }));
  };

  var Auth = /*#__PURE__*/function () {
    function Auth() {
      _classCallCheck(this, Auth);

      this.XAUTH_BASE = corsWorkAround("https://archive.org/services/xauthn/");
    }

    _createClass(Auth, [{
      key: "login",
      value: function login(email, password) {
        var _this = this;

        return _call(function () {
          return _await(_catch(function () {
            var fetchOptions = {
              method: "POST",
              body: "email=".concat(enc(email), "&password=").concat(enc(password)),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            };
            return _await(fetchJson("".concat(_this.XAUTH_BASE, "?op=login"), fetchOptions), function (data) {
              if (!data.success) {
                data.values = _objectSpread(_objectSpread({}, data.values), newEmptyAuth().values);
              }

              return data;
            });
          }, function () {
            // TODO figure out syntax for catching error reponse
            return newEmptyAuth();
          }));
        });
      }
    }, {
      key: "fromS3",
      value: function fromS3(access, secret, newAuth) {
        return _call(function () {
          if (newAuth === undefined) newAuth = newEmptyAuth();
          newAuth.success = 1;
          newAuth.values.s3.access = access;
          newAuth.values.s3.secret = secret;
          return _await(fetchJson("https://s3.us.archive.org?check_auth=1", {
            headers: authToHeaderS3(newAuth)
          }), function (info) {
            newAuth.values.email = info.username;
            newAuth.values.itemname = info.itemname;
            newAuth.values.screenname = info.screenname; // Note the auth object is missing cookie fields.
            // It is still TBD if those are needed

            return newAuth;
          });
        });
      }
    }, {
      key: "fromCookies",
      value: function fromCookies(loggedInSig, loggedInUser, newAuth) {
        var _this2 = this;

        return _call(function () {
          if (newAuth === undefined) newAuth = newEmptyAuth();
          newAuth.values.cookies["logged-in-sig"] = loggedInSig;
          newAuth.values.cookies["logged-in-user"] = loggedInUser;
          return _await(axios(corsWorkAround("https://archive.org/account/s3.php?output_json=1"), {
            headers: authToHeaderCookies(newAuth),
            responseType: "json"
          }), function (s3response) {
            return _await(s3response.data, function (s3) {
              if (!s3.success) {
                throw new Error();
              }

              return _await(_this2.fromS3(s3.key.s3accesskey, s3.key.s3secretkey, newAuth));
            });
          });
        });
      }
    }]);

    return Auth;
  }();

  var BookReaderAPI = /*#__PURE__*/_createClass(function BookReaderAPI() {
    _classCallCheck(this, BookReaderAPI);
  });

  var FavoritesAPI = /*#__PURE__*/function () {
    function FavoritesAPI() {
      _classCallCheck(this, FavoritesAPI);

      this.API_BASE = corsWorkAround("https://archive.org/bookmarks.php"); // TODO support this non-json explore endpoint

      this.EXPLORE_API_BASE = "https://archive.org/bookmarks-explore.php";
    }

    _createClass(FavoritesAPI, [{
      key: "get",
      value: function get(_ref) {
        var _ref$screenname = _ref.screenname,
            screenname = _ref$screenname === void 0 ? null : _ref$screenname,
            _ref$auth = _ref.auth,
            auth = _ref$auth === void 0 ? newEmptyAuth() : _ref$auth;

        var _this3 = this;

        return _call(function () {
          if (!screenname && auth.values.screenname) {
            screenname = auth.values.screenname;
          }

          if (screenname) {
            var params = {
              output: "json",
              screenname: screenname
            };
            return _await(fetchJson("".concat(_this3.API_BASE, "?").concat(paramify(params))));
          } else {
            throw new Error("Neither screenname or auth provided for bookmarks lookup");
          }

          return _await();
        });
      }
    }, {
      key: "add",
      value: function add() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$identifier = _ref2.identifier,
            identifier = _ref2$identifier === void 0 ? null : _ref2$identifier,
            _ref2$comments = _ref2.comments,
            comments = _ref2$comments === void 0 ? "" : _ref2$comments,
            _ref2$auth = _ref2.auth,
            auth = _ref2$auth === void 0 ? newEmptyAuth() : _ref2$auth;

        var _this4 = this;

        return _call(function () {
          return _await(_this4.modify({
            identifier: identifier,
            add_bookmark: 1
          }, auth));
        });
      }
    }, {
      key: "remove",
      value: function remove() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$identifier = _ref3.identifier,
            identifier = _ref3$identifier === void 0 ? null : _ref3$identifier,
            _ref3$auth = _ref3.auth,
            auth = _ref3$auth === void 0 ? null : _ref3$auth;

        var _this5 = this;

        return _call(function () {
          return _await(_this5.modify({
            identifier: identifier,
            del_bookmark: identifier
          }, auth));
        });
      }
    }, {
      key: "modify",
      value: function modify(params, auth) {
        var _this6 = this;

        return _call(function () {
          var _exit = false;
          return _await(_continue(_catch(function () {
            return _await(iajs.MetadataAPI.get({
              identifier: params.identifier,
              path: "/metadata"
            }), function (mdResponse) {
              params.title = str2arr(mdResponse.result.title).join(", ");
              params.mediatype = mdResponse.result.mediatype;
            });
          }, function () {
            throw new Error("Metadata lookup failed for: ".concat(params.identifier));
          }), function (_result) {
            if (_exit) return _result;
            params.output = "json";
            return _await(axios("".concat(_this6.API_BASE, "?").concat(paramify(params)), {
              method: "POST",
              headers: authToHeaderCookies(auth),
              responseType: "json"
            }), function (response) {
              return _await(response, function (_response) {
                return _response.data["catch"](function (e) {
                  return {
                    error: e
                  };
                });
              });
            });
          }));
        });
      }
    }]);

    return FavoritesAPI;
  }();

  var GifcitiesAPI = /*#__PURE__*/function () {
    function GifcitiesAPI() {
      _classCallCheck(this, GifcitiesAPI);

      this.API_BASE = "https://gifcities.archive.org/api/v1/gifsearch";
    }

    _createClass(GifcitiesAPI, [{
      key: "get",
      value: function get() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref4$q = _ref4.q,
            q = _ref4$q === void 0 ? null : _ref4$q;

        var _this7 = this;

        return _call(function () {
          return q === null ? _await([]) : fetchJson("".concat(_this7.API_BASE, "?q=").concat(enc(q)));
        });
      }
    }, {
      key: "search",
      value: function search(q) {
        var _this8 = this;

        return _call(function () {
          return _await(_this8.get({
            q: q
          }));
        });
      }
    }]);

    return GifcitiesAPI;
  }();

  var MetadataAPI = /*#__PURE__*/function () {
    function MetadataAPI() {
      _classCallCheck(this, MetadataAPI);

      this.READ_API_BASE = "https://archive.org/metadata";
      this.WRITE_API_BASE = corsWorkAround("https://archive.org/metadata");
    }

    _createClass(MetadataAPI, [{
      key: "get",
      value: function get() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref5$identifier = _ref5.identifier,
            identifier = _ref5$identifier === void 0 ? null : _ref5$identifier,
            _ref5$path = _ref5.path,
            path = _ref5$path === void 0 ? "" : _ref5$path,
            _ref5$auth = _ref5.auth,
            auth = _ref5$auth === void 0 ? newEmptyAuth() : _ref5$auth;

        var _this9 = this;

        return _call(function () {
          var options = {};
          options.headers = authToHeaderS3(auth);
          return fetchJson("".concat(_this9.READ_API_BASE, "/").concat(identifier, "/").concat(path), options);
        });
      }
    }, {
      key: "patch",
      value: function patch() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref6$identifier = _ref6.identifier,
            identifier = _ref6$identifier === void 0 ? null : _ref6$identifier,
            _ref6$target = _ref6.target,
            target = _ref6$target === void 0 ? "metadata" : _ref6$target,
            _ref6$priority = _ref6.priority,
            priority = _ref6$priority === void 0 ? -5 : _ref6$priority,
            _ref6$patch = _ref6.patch,
            _patch = _ref6$patch === void 0 ? {} : _ref6$patch,
            _ref6$auth = _ref6.auth,
            auth = _ref6$auth === void 0 ? newEmptyAuth() : _ref6$auth;

        var _this10 = this;

        return _call(function () {
          // https://archive.org/services/docs/api/metadata.html#targets
          var reqParams = {
            "-target": target,
            "-patch": JSON.stringify(_patch),
            priority: priority,
            secret: auth.values.s3.secret,
            access: auth.values.s3.access
          };
          var url = "".concat(_this10.WRITE_API_BASE, "/").concat(identifier);
          var body = paramify(reqParams);
          return _await(axios(url, {
            method: "POST",
            body: body,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            responseType: "json"
          }), function (response) {
            return _await(response, function (_response2) {
              return _response2.data;
            });
          });
        });
      }
    }]);

    return MetadataAPI;
  }();

  var RelatedAPI = /*#__PURE__*/function () {
    function RelatedAPI() {
      _classCallCheck(this, RelatedAPI);

      this.API_BASE = "https://be-api.us.archive.org/mds/v1";
    }

    _createClass(RelatedAPI, [{
      key: "get",
      value: function get() {
        var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref7$identifier = _ref7.identifier,
            identifier = _ref7$identifier === void 0 ? null : _ref7$identifier;

        var _this11 = this;

        return _call(function () {
          return fetchJson("".concat(_this11.API_BASE, "/get_related/all/").concat(identifier));
        });
      }
    }]);

    return RelatedAPI;
  }();

  var ReviewsAPI = /*#__PURE__*/function () {
    function ReviewsAPI() {
      _classCallCheck(this, ReviewsAPI);

      this.WRITE_API_BASE = corsWorkAround("https://archive.org/services/reviews.php?identifier=");
      this.READ_API_BASE = "https://archive.org/metadata";
    }

    _createClass(ReviewsAPI, [{
      key: "get",
      value: function get() {
        var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref8$identifier = _ref8.identifier,
            identifier = _ref8$identifier === void 0 ? null : _ref8$identifier;

        var _this12 = this;

        return _call(function () {
          return fetchJson("".concat(_this12.READ_API_BASE, "/").concat(identifier, "/reviews"));
        });
      }
    }, {
      key: "add",
      value: function add() {
        var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref9$identifier = _ref9.identifier,
            identifier = _ref9$identifier === void 0 ? null : _ref9$identifier,
            _ref9$title = _ref9.title,
            title = _ref9$title === void 0 ? null : _ref9$title,
            _ref9$body = _ref9.body,
            body = _ref9$body === void 0 ? null : _ref9$body,
            _ref9$stars = _ref9.stars,
            stars = _ref9$stars === void 0 ? null : _ref9$stars,
            _ref9$auth = _ref9.auth,
            auth = _ref9$auth === void 0 ? newEmptyAuth() : _ref9$auth;

        var _this13 = this;

        return _call(function () {
          var url = "".concat(_this13.WRITE_API_BASE).concat(identifier);
          return _await(axios(url, {
            method: "POST",
            body: JSON.stringify({
              title: title,
              body: body,
              stars: stars
            }),
            headers: _objectSpread({
              "Content-Type": "application/json"
            }, authToHeaderS3(auth)),
            responseType: "json"
          }), function (response) {
            return _await(response, function (_response3) {
              return _response3.data;
            });
          });
        });
      }
    }]);

    return ReviewsAPI;
  }();

  var S3API = /*#__PURE__*/function () {
    function S3API() {
      _classCallCheck(this, S3API);

      this.API_BASE = "https://s3.us.archive.org";
    }

    _createClass(S3API, [{
      key: "ls",
      value: function ls() {
        var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref10$identifier = _ref10.identifier,
            identifier = _ref10$identifier === void 0 ? null : _ref10$identifier,
            _ref10$auth = _ref10.auth,
            auth = _ref10$auth === void 0 ? newEmptyAuth() : _ref10$auth;

        var _this14 = this;

        return _call(function () {
          // throw new Error("TODO parse that XML");
          if (!identifier) {
            throw new Error("Missing required args");
          }

          return _await(axios("".concat(_this14.API_BASE, "/").concat(identifier)), function (_axios) {
            return _await(_axios.text());
          });
        });
      }
    }, {
      key: "createEmptyItem",
      value: function createEmptyItem() {
        var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref11$identifier = _ref11.identifier,
            identifier = _ref11$identifier === void 0 ? null : _ref11$identifier,
            _ref11$testItem = _ref11.testItem,
            testItem = _ref11$testItem === void 0 ? false : _ref11$testItem,
            _ref11$metadata = _ref11.metadata,
            metadata = _ref11$metadata === void 0 ? {} : _ref11$metadata,
            _ref11$headers = _ref11.headers,
            headers = _ref11$headers === void 0 ? {} : _ref11$headers,
            _ref11$wait = _ref11.wait,
            wait = _ref11$wait === void 0 ? true : _ref11$wait,
            _ref11$auth = _ref11.auth,
            auth = _ref11$auth === void 0 ? newEmptyAuth() : _ref11$auth;

        var _this15 = this;

        return _call(function () {
          return _await(_this15.upload({
            identifier: identifier,
            testItem: testItem,
            metadata: metadata,
            headers: headers,
            wait: wait,
            auth: auth,
            autocreate: true
          }));
        });
      }
    }, {
      key: "upload",
      value: function upload(_ref12) {
        var _ref12$identifier = _ref12.identifier,
            identifier = _ref12$identifier === void 0 ? null : _ref12$identifier,
            _ref12$key = _ref12.key,
            key = _ref12$key === void 0 ? null : _ref12$key,
            _ref12$body = _ref12.body,
            body = _ref12$body === void 0 ? "" : _ref12$body,
            _ref12$autocreate = _ref12.autocreate,
            autocreate = _ref12$autocreate === void 0 ? false : _ref12$autocreate,
            _ref12$skipDerive = _ref12.skipDerive,
            skipDerive = _ref12$skipDerive === void 0 ? false : _ref12$skipDerive,
            _ref12$testItem = _ref12.testItem,
            testItem = _ref12$testItem === void 0 ? false : _ref12$testItem,
            _ref12$keepOldVersion = _ref12.keepOldVersions,
            keepOldVersions = _ref12$keepOldVersion === void 0 ? true : _ref12$keepOldVersion,
            _ref12$metadata = _ref12.metadata,
            metadata = _ref12$metadata === void 0 ? {} : _ref12$metadata,
            _ref12$headers = _ref12.headers,
            headers = _ref12$headers === void 0 ? {} : _ref12$headers,
            _ref12$wait = _ref12.wait,
            wait = _ref12$wait === void 0 ? true : _ref12$wait,
            _ref12$auth = _ref12.auth,
            auth = _ref12$auth === void 0 ? newEmptyAuth() : _ref12$auth;

        var _this16 = this;

        return _call(function () {
          if (!identifier) {
            throw new Error("Missing required args");
          }

          if (testItem) {
            metadata["collection"] = "test_collection";
          }

          var requestHeaders = {};
          Object.keys(metadata).forEach(function (k) {
            str2arr(metadata[k]).forEach(function (v, idx) {
              k = k.replace(/_/g, "--");
              var headerKey = "x-archive-meta".concat(idx, "-").concat(k);
              requestHeaders[headerKey] = v;
            });
          });
          Object.assign(requestHeaders, headers, authToHeaderS3(auth));

          if (autocreate) {
            requestHeaders["x-archive-auto-make-bucket"] = 1;
          }

          if (skipDerive) {
            requestHeaders["x-archive-queue-derive"] = 0;
          }

          requestHeaders["x-archive-keep-old-version"] = keepOldVersions ? 1 : 0;
          var requestUrl = key ? "".concat(_this16.API_BASE, "/").concat(identifier, "/").concat(key) : "".concat(_this16.API_BASE, "/").concat(identifier);
          return _await(axios(requestUrl, {
            method: "PUT",
            headers: requestHeaders,
            body: body
          }), function (response) {
            if (response.status !== 200) {
              // NOTE this may not be the right thing to check.
              // Maybe different codes are okay
              throw new Error("Response: ".concat(response.status));
            }

            return wait ? _await(response.text()) : response;
          });
        });
      }
    }]);

    return S3API;
  }();

  var SearchAPI = /*#__PURE__*/function () {
    function SearchAPI() {
      _classCallCheck(this, SearchAPI);

      this.API_BASE = "https://archive.org/advancedsearch.php";
    }

    _createClass(SearchAPI, [{
      key: "get",
      value: function get() {
        var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref13$q = _ref13.q,
            q = _ref13$q === void 0 ? null : _ref13$q,
            _ref13$page = _ref13.page,
            page = _ref13$page === void 0 ? 1 : _ref13$page,
            _ref13$fields = _ref13.fields,
            fields = _ref13$fields === void 0 ? ["identifier"] : _ref13$fields,
            options = _objectWithoutProperties(_ref13, _excluded);

        var _this17 = this;

        return _call(function () {
          if (!q) {
            throw new Error("Missing required arg 'q'");
          }

          if (_typeof(q) == "object") {
            q = _this17.buildQueryFromObject(q);
          }

          var reqParams = _objectSpread(_objectSpread({
            q: q,
            page: page,
            fl: fields
          }, options), {}, {
            output: "json"
          });

          var encodedParams = paramify(reqParams);
          var url = "".concat(_this17.API_BASE, "?").concat(encodedParams);
          return fetchJson(url);
        });
      }
    }, {
      key: "search",
      value: function search(q) {
        var _this18 = this;

        return _call(function () {
          return _await(_this18.get({
            q: q
          }));
        });
      }
    }, {
      key: "buildQueryFromObject",
      value: function buildQueryFromObject(qObject) {
        // Map dictionary to a key=val search query
        return Object.keys(qObject).map(function (key) {
          if (Array.isArray(qObject[key])) {
            return "".concat(key, ":( ").concat(qObject[key].map(function (v) {
              return "\"".concat(v, "\"");
            }).join(" OR "), " )");
          } else {
            return "".concat(key, ":\"").concat(qObject[key], "\"");
          }
        }).join(" AND ");
      }
    }]);

    return SearchAPI;
  }();

  var SearchTextAPI = /*#__PURE__*/_createClass(function SearchTextAPI() {
    _classCallCheck(this, SearchTextAPI);
  });

  var ViewsAPI = /*#__PURE__*/function () {
    function ViewsAPI() {
      _classCallCheck(this, ViewsAPI);

      // https://be-api.us.archive.org/views/v1/short/<identifier>[,<identifier>,...]
      this.API_BASE = "https://be-api.us.archive.org/views/v1/short";
    }

    _createClass(ViewsAPI, [{
      key: "get",
      value: function get() {
        var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref14$identifier = _ref14.identifier,
            identifier = _ref14$identifier === void 0 ? null : _ref14$identifier;

        var _this19 = this;

        return _call(function () {
          identifier = Array.isArray(identifier) ? identifier.join(",") : identifier;
          return fetchJson("".concat(_this19.API_BASE, "/").concat(identifier));
        });
      }
    }]);

    return ViewsAPI;
  }();

  var WaybackAPI = /*#__PURE__*/function () {
    function WaybackAPI() {
      _classCallCheck(this, WaybackAPI);

      this.AVAILABLE_API_BASE = "https://archive.org/wayback/available";
      this.CDX_API_BASE = corsWorkAround("https://web.archive.org/cdx/search/");
      this.SAVE_API_BASE = corsWorkAround("https://web.archive.org/save/");
    }
    /**
     * @see https://archive.org/help/wayback_api.php
     */


    _createClass(WaybackAPI, [{
      key: "available",
      value: function available() {
        var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref15$url = _ref15.url,
            url = _ref15$url === void 0 ? null : _ref15$url,
            _ref15$timestamp = _ref15.timestamp,
            timestamp = _ref15$timestamp === void 0 ? null : _ref15$timestamp;

        var _this20 = this;

        return _call(function () {
          var params = {
            url: url
          };

          if (timestamp !== null) {
            params.timestamp = timestamp;
          }

          var searchParams = paramify(params);
          return _await(axios("".concat(_this20.AVAILABLE_API_BASE, "?").concat(searchParams), {
            responseType: "json"
          }), function (response) {
            return _await(response, function (_response4) {
              return _response4.data;
            });
          });
        });
      }
      /**
       * @see https://github.com/internetarchive/wayback/tree/master/wayback-cdx-server
       */

    }, {
      key: "cdx",
      value: function cdx() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this21 = this;

        return _call(function () {
          options.output = "json";
          var searchParams = paramify(options);
          return _await(axios("".concat(_this21.CDX_API_BASE, "?").concat(searchParams)), function (response) {
            return _await(response.text(), function (raw) {
              var json;

              try {
                json = JSON.parse(raw);
              } catch (e) {
                json = {
                  error: raw.trim()
                };
              }

              return json;
            });
          });
        });
      }
      /**
       * @see https://docs.google.com/document/d/1Nsv52MvSjbLb2PCpHlat0gkzw0EvtSgpKHu4mk0MnrA/edit
       */

    }, {
      key: "savePageNow",
      value: function savePageNow() {
        var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref16$url = _ref16.url,
            url = _ref16$url === void 0 ? null : _ref16$url,
            _ref16$captureOutlink = _ref16.captureOutlinks,
            captureOutlinks = _ref16$captureOutlink === void 0 ? 0 : _ref16$captureOutlink,
            _ref16$captureAll = _ref16.captureAll,
            captureAll = _ref16$captureAll === void 0 ? true : _ref16$captureAll,
            _ref16$captureScreens = _ref16.captureScreenshot,
            captureScreenshot = _ref16$captureScreens === void 0 ? false : _ref16$captureScreens,
            _ref16$skipFirstArchi = _ref16.skipFirstArchive,
            skipFirstArchive = _ref16$skipFirstArchi === void 0 ? true : _ref16$skipFirstArchi,
            _ref16$ifNotArchivedW = _ref16.ifNotArchivedWithin,
            ifNotArchivedWithin = _ref16$ifNotArchivedW === void 0 ? null : _ref16$ifNotArchivedW,
            _ref16$auth = _ref16.auth,
            auth = _ref16$auth === void 0 ? newEmptyAuth() : _ref16$auth;

        var _this22 = this;

        return _call(function () {
          url = url.replace(/^https?\:\/\//, "");
          var params = {
            url: url,
            capture_outlinks: captureOutlinks,
            capture_all: captureAll ? "1" : "0",
            capture_screenshot: captureScreenshot ? "1" : "0",
            skip_first_archive: skipFirstArchive ? "1" : "0"
          };

          if (ifNotArchivedWithin) {
            params.if_not_archived_within = ifNotArchivedWithin;
          }

          return _await(axios(_this22.SAVE_API_BASE, {
            credentials: "omit",
            method: "POST",
            body: paramify(params),
            headers: _objectSpread({
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            }, authToHeaderS3(auth)),
            responseType: "json"
          }), function (response) {
            return _await(response, function (_response5) {
              return _response5.data;
            });
          });
        });
      }
    }]);

    return WaybackAPI;
  }();

  var ZipFileAPI = /*#__PURE__*/function () {
    function ZipFileAPI() {
      _classCallCheck(this, ZipFileAPI);
    }

    _createClass(ZipFileAPI, [{
      key: "ls",
      value:
      /**
       * List the contents of a zip file in an item
       * Eg: https://archive.org/download/goodytwoshoes00newyiala/goodytwoshoes00newyiala_jp2.zip/
       */
      function ls(identifier, zipPath, auth) {
        return _call(function () {
          if (auth === undefined) auth = newEmptyAuth();

          if (!zipPath.match(/\.(7z|cbr|cbz|cdr|iso|rar|tar|zip)$/)) {
            throw new Error("Invalid zip type");
          }

          var requestUrl = corsWorkAround("https://archive.org/download/".concat(identifier, "/").concat(enc(zipPath), "/"));
          return _await(axios(requestUrl, {
            headers: authToHeaderCookies(auth)
          }), function (response) {
            if (response.status != 200) {
              throw Error({
                error: "not found"
              });
            }

            return _await(response.text(), function (html) {
              // This page has <td>'s without closing el tags (took a while to
              // figure this out). This breaks the DOMparser, so I added a workaround
              // to add closing tags
              var tableHtml = html.match(/(<table class="archext">[\w\W]*<\/table>)/g)[0];
              tableHtml = tableHtml.replace(/(<td[^>]*>[\w\W]*?)(?=<(?:td|\/tr))/g, "$1</td>");
              var table = new DOMParser$2().parseFromString(tableHtml);
              var rows = table.getElementsByTagName("tr");
              var results = [];

              var _loop = function _loop(i) {
                var cells = rows.item(i).getElementsByTagName("td");
                if (cells.length != 4) return "continue";

                try {
                  var a = cells.item(0).getElementsByTagName("a").item(0);
                  results.push({
                    key: a.textContent,
                    href: "https:" + a.getAttribute("href"),
                    jpegUrl: function () {
                      try {
                        return "https:" + cells.item(1).getElementsByTagName("a").item(0).getAttribute("href");
                      } catch (e) {
                        return null;
                      }
                    }(),
                    timestamp: cells.item(2).textContent,
                    size: cells.item(3).textContent
                  });
                } catch (e) {}
              };

              for (var i = 0; i < rows.length; i++) {
                var _ret = _loop(i);

                if (_ret === "continue") continue;
              }

              return results;
            });
          });
        });
      }
    }]);

    return ZipFileAPI;
  }();

  var iajs = {
    Auth: new Auth(),
    BookReaderAPI: new BookReaderAPI(),
    GifcitiesAPI: new GifcitiesAPI(),
    FavoritesAPI: new FavoritesAPI(),
    MetadataAPI: new MetadataAPI(),
    RelatedAPI: new RelatedAPI(),
    ReviewsAPI: new ReviewsAPI(),
    SearchAPI: new SearchAPI(),
    SearchTextAPI: new SearchTextAPI(),
    S3API: new S3API(),
    ViewsAPI: new ViewsAPI(),
    WaybackAPI: new WaybackAPI(),
    ZipFileAPI: new ZipFileAPI()
  };
  return iajs;
});
