(function () {
  'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.11'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function _isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function _anObject(it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var id = 0;
  var px = Math.random();

  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode:  'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');
    var TO_STRING = 'toString';
    var TPL = ('' + _functionToString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return _functionToString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];
        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || _functionToString.call(this);
    });
  });

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');
    var setDesc = _objectDp.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');
    var Symbol = _global.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def = _objectDp.f;
  var TAG = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };

  var f$1 = _wks;
  var _wksExt = {
    f: f$1
  };

  var defineProperty = _objectDp.f;

  var _wksDefine = function _wksDefine(name) {
    var $Symbol = _core.Symbol || (_core.Symbol =  _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
      value: _wksExt.f(name)
    });
  };

  var toString = {}.toString;

  var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
  };

  // eslint-disable-next-line no-prototype-builtins

  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var min = Math.min;

  var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // true  -> Array#includes

  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      if (key != IE_PROTO) _has(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$2 = Object.getOwnPropertySymbols;
  var _objectGops = {
    f: f$2
  };

  var f$3 = {}.propertyIsEnumerable;
  var _objectPie = {
    f: f$3
  };

  var _enumKeys = function _enumKeys(it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;

      while (symbols.length > i) {
        if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
    }

    return result;
  };

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var _toObject = function _toObject(it) {
    return Object(_defined(it));
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) {
      _objectDp.f(O, P = keys[i++], Properties[P]);
    }

    return O;
  };

  var document$2 = _global.document;

  var _html = document$2 && document$2.documentElement;

  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var Empty = function Empty() {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;

    while (i--) {
      delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }

    return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _createDict();

    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
    f: f$4
  };

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
    f: f$5
  };

  var gOPD = Object.getOwnPropertyDescriptor;
  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };
  var _objectGopd = {
    f: f$6
  };

  var META = _meta.KEY;
  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;

  var _stringify = $JSON && $JSON.stringify;

  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
  var QObject = _global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function get() {
        return dP$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
  } : dP$1;

  var wrap = function wrap(tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);

    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);

    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, {
          enumerable: _propertyDesc(0, false)
        });
      }

      return setSymbolDesc(it, key, D);
    }

    return dP$1(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) {
      $defineProperty(it, key = keys[i++], P[key]);
    }

    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function $set(value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };

      if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };

    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });
    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Symbol: $Symbol
  });

  for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
    _wks(es6Symbols[j++]);
  }

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
    _wksDefine(wellKnownSymbols[k++]);
  }

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
      return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry) {
        if (SymbolRegistry[key] === sym) return key;
      }
    },
    useSetter: function useSetter() {
      setter = true;
    },
    useSimple: function useSimple() {
      setter = false;
    }
  });
  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  var FAILS_ON_PRIMITIVES = _fails(function () {
    _objectGops.f(1);
  });
  _export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops.f(_toObject(it));
    }
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify([S]) != '[null]' || _stringify({
      a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!_isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  _setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  _setToStringTag(_global.JSON, 'JSON', true);

  _export(_export.S, 'Object', {
    create: _objectCreate
  });

  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperty: _objectDp.f
  });

  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperties: _objectDps
  });

  var _objectSap = function _objectSap(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () {
      fn(1);
    }), 'Object', exp);
  };

  var $getOwnPropertyDescriptor$1 = _objectGopd.f;
  _objectSap('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor$1(_toIobject(it), key);
    };
  });

  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto$1 = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto$1 : null;
  };

  _objectSap('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo(_toObject(it));
    };
  });

  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  _objectSap('getOwnPropertyNames', function () {
    return _objectGopnExt.f;
  });

  var meta = _meta.onFreeze;
  _objectSap('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
    };
  });

  var meta$1 = _meta.onFreeze;
  _objectSap('seal', function ($seal) {
    return function seal(it) {
      return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
    };
  });

  var meta$2 = _meta.onFreeze;
  _objectSap('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
    };
  });

  _objectSap('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });

  _objectSap('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });

  _objectSap('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  });

  // 7.2.9 SameValue(x, y)
  var _sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  _export(_export.S, 'Object', {
    is: _sameValue
  });

  /* eslint-disable no-proto */

  var check = function check(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };

  _export(_export.S, 'Object', {
    setPrototypeOf: _setProto.set
  });

  var TAG$1 = _wks('toStringTag'); // ES3 wrong here

  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O) // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var test = {};
  test[_wks('toStringTag')] = 'z';

  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var arraySlice = [].slice;
  var factories = {};

  var construct = function construct(F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) {
        n[i] = 'a[' + i + ']';
      } // eslint-disable-next-line no-new-func


      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }

    return factories[len](F, args);
  };

  var _bind = Function.bind || function bind(that
  /* , ...args */
  ) {
    var fn = _aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);

    var bound = function bound()
    /* args... */
    {
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
    };

    if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };

  _export(_export.P, 'Function', {
    bind: _bind
  });

  var dP$2 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // 19.2.4.2 name

  NAME in FProto || _descriptors && dP$2(FProto, NAME, {
    configurable: true,
    get: function get() {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  var HAS_INSTANCE = _wks('hasInstance');
  var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

  if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, {
    value: function value(O) {
      if (typeof this != 'function' || !_isObject(O)) return false;
      if (!_isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

      while (O = _objectGpo(O)) {
        if (this.prototype === O) return true;
      }

      return false;
    }
  });

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function exporter(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var $parseInt = _global.parseInt;
  var $trim = _stringTrim.trim;
  var hex = /^[-+]?0[xX]/;

  var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;

  _export(_export.G + _export.F * (parseInt != _parseInt), {
    parseInt: _parseInt
  });

  var $parseFloat = _global.parseFloat;
  var $trim$1 = _stringTrim.trim;

  var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim$1(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;

  _export(_export.G + _export.F * (parseFloat != _parseFloat), {
    parseFloat: _parseFloat
  });

  var setPrototypeOf = _setProto.set;

  var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var gOPN$2 = _objectGopn.f;
  var gOPD$2 = _objectGopd.f;
  var dP$3 = _objectDp.f;
  var $trim$2 = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
  var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

  var toNumber = function toNumber(argument) {
    var it = _toPrimitive(argument, false);

    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim$2(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal /^0o[0-7]+$/i

          default:
            return +it;
        }

        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function () {
        proto.valueOf.call(that);
      }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };

    for (var keys = _descriptors ? gOPN$2(Base) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
      if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
        dP$3($Number, key, gOPD$2(Base, key));
      }
    }

    $Number.prototype = proto;
    proto.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
  }

  var _aNumberValue = function _aNumberValue(it, msg) {
    if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) res += str;
    }

    return res;
  };

  var $toFixed = 1.0.toFixed;
  var floor$1 = Math.floor;
  var data = [0, 0, 0, 0, 0, 0];
  var ERROR = 'Number.toFixed: incorrect invocation!';
  var ZERO = '0';

  var multiply = function multiply(n, c) {
    var i = -1;
    var c2 = c;

    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor$1(c2 / 1e7);
    }
  };

  var divide = function divide(n) {
    var i = 6;
    var c = 0;

    while (--i >= 0) {
      c += data[i];
      data[i] = floor$1(c / n);
      c = c % n * 1e7;
    }
  };

  var numToString = function numToString() {
    var i = 6;
    var s = '';

    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
      }
    }

    return s;
  };

  var pow = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  _export(_export.P + _export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function () {
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits) {
      var x = _aNumberValue(this, ERROR);
      var f = _toInteger(fractionDigits);
      var s = '';
      var m = ZERO;
      var e, z, j, k;
      if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);

      if (x < 0) {
        s = '-';
        x = -x;
      }

      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(0, z);
          j = f;

          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }

          multiply(pow(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }

          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + _stringRepeat.call(ZERO, f);
        }
      }

      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }

      return m;
    }
  });

  var $toPrecision = 1.0.toPrecision;
  _export(_export.P + _export.F * (_fails(function () {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !_fails(function () {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision) {
      var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
  });

  _export(_export.S, 'Number', {
    EPSILON: Math.pow(2, -52)
  });

  var _isFinite = _global.isFinite;
  _export(_export.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  });

  var floor$2 = Math.floor;

  var _isInteger = function isInteger(it) {
    return !_isObject(it) && isFinite(it) && floor$2(it) === it;
  };

  _export(_export.S, 'Number', {
    isInteger: _isInteger
  });

  _export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  });

  var abs = Math.abs;
  _export(_export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });

  _export(_export.S, 'Number', {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
  });

  _export(_export.S, 'Number', {
    MIN_SAFE_INTEGER: -0x1fffffffffffff
  });

  _export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', {
    parseFloat: _parseFloat
  });

  _export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', {
    parseInt: _parseInt
  });

  // 20.2.2.20 Math.log1p(x)
  var _mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };

  var sqrt = Math.sqrt;
  var $acosh = Math.acosh;
  _export(_export.S + _export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });

  var $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  } // Tor Browser bug: Math.asinh(0) -> -0


  _export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
    asinh: asinh
  });

  var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

  _export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });

  // 20.2.2.28 Math.sign(x)
  var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  _export(_export.S, 'Math', {
    cbrt: function cbrt(x) {
      return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });

  _export(_export.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });

  var exp = Math.exp;
  _export(_export.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });

  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;

  var _mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;

  _export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', {
    expm1: _mathExpm1
  });

  var pow$1 = Math.pow;
  var EPSILON = pow$1(2, -52);
  var EPSILON32 = pow$1(2, -23);
  var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$1(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  var _mathFround = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = _mathSign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  _export(_export.S, 'Math', {
    fround: _mathFround
  });

  var abs$1 = Math.abs;
  _export(_export.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$1(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });

  var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

  _export(_export.S + _export.F * _fails(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  _export(_export.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  });

  _export(_export.S, 'Math', {
    log1p: _mathLog1p
  });

  _export(_export.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  });

  _export(_export.S, 'Math', {
    sign: _mathSign
  });

  var exp$1 = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

  _export(_export.S + _export.F * _fails(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (_mathExpm1(x) - _mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
    }
  });

  var exp$2 = Math.exp;
  _export(_export.S, 'Math', {
    tanh: function tanh(x) {
      var a = _mathExpm1(x = +x);
      var b = _mathExpm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
  });

  _export(_export.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

  var fromCharCode = String.fromCharCode;
  var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

  _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [];
      var aLen = arguments.length;
      var i = 0;
      var code;

      while (aLen > i) {
        code = +arguments[i++];
        if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }

      return res.join('');
    }
  });

  _export(_export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = _toIobject(callSite.raw);
      var len = _toLength(tpl.length);
      var aLen = arguments.length;
      var res = [];
      var i = 0;

      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }

      return res.join('');
    }
  });

  _stringTrim('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });

  // false -> String#codePointAt

  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _iterators = {};

  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
      next: _propertyDesc(1, next)
    });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);

    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

        if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    } // Plug for library


    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()

  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var $at$1 = _stringAt(false);
  _export(_export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at$1(this, pos);
    }
  });

  var MATCH = _wks('match');

  var _isRegexp = function _isRegexp(it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _stringContext = function _stringContext(that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');

  var _failsIsRegexp = function _failsIsRegexp(KEY) {
    var re = /./;

    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) {
        /* empty */
      }
    }

    return true;
  };

  var ENDS_WITH = 'endsWith';
  var $endsWith = ''[ENDS_WITH];
  _export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = _stringContext(this, searchString, ENDS_WITH);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = _toLength(that.length);
      var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
      var search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });

  var INCLUDES = 'includes';
  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];
  _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = _stringContext(this, searchString, STARTS_WITH);
      var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });

  var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

  var createHTML = function createHTML(string, tag, attribute, value) {
    var S = String(_defined(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var _stringHtml = function _stringHtml(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    _export(_export.P + _export.F * _fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };

  _stringHtml('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });

  _stringHtml('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });

  _stringHtml('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });

  _stringHtml('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });

  _stringHtml('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });

  _stringHtml('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });

  _stringHtml('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });

  _stringHtml('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });

  _stringHtml('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });

  _stringHtml('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });

  _stringHtml('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });

  _stringHtml('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });

  _stringHtml('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });

  _export(_export.S, 'Date', {
    now: function now() {
      return new Date().getTime();
    }
  });

  _export(_export.P + _export.F * _fails(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
      var O = _toObject(this);
      var pv = _toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var getTime = Date.prototype.getTime;
  var $toISOString = Date.prototype.toISOString;

  var lz = function lz(num) {
    return num > 9 ? num : '0' + num;
  }; // PhantomJS / old WebKit has a broken implementations


  var _dateToIsoString = _fails(function () {
    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !_fails(function () {
    $toISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  } : $toISOString;

  // PhantomJS / old WebKit has a broken implementations

  _export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
    toISOString: _dateToIsoString
  });

  var DateProto = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var $toString = DateProto[TO_STRING];
  var getTime$1 = DateProto.getTime;

  if (new Date(NaN) + '' != INVALID_DATE) {
    _redefine(DateProto, TO_STRING, function toString() {
      var value = getTime$1.call(this); // eslint-disable-next-line no-self-compare

      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }

  var NUMBER$1 = 'number';

  var _dateToPrimitive = function _dateToPrimitive(hint) {
    if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
    return _toPrimitive(_anObject(this), hint != NUMBER$1);
  };

  var TO_PRIMITIVE$1 = _wks('toPrimitive');
  var proto$1 = Date.prototype;
  if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

  _export(_export.S, 'Array', {
    isArray: _isArray
  });

  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function _createProperty(object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$3] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {
    Array.from(iter);
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);

        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }

      result.length = index;
      return result;
    }
  });

  _export(_export.S + _export.F * _fails(function () {
    function F() {
      /* empty */
    }

    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of()
    /* ...args */
    {
      var index = 0;
      var aLen = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(aLen);

      while (aLen > index) {
        _createProperty(result, index, arguments[index++]);
      }

      result.length = aLen;
      return result;
    }
  });

  var _strictMethod = function _strictMethod(method, arg) {
    return !!method && _fails(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () {
        /* empty */
      }, 1) : method.call(null);
    });
  };

  var arrayJoin = [].join; // fallback for not array-like strings

  _export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
    join: function join(separator) {
      return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
    }
  });

  var arraySlice$1 = [].slice; // fallback for not array-like ES3 strings and DOM objects

  _export(_export.P + _export.F * _fails(function () {
    if (_html) arraySlice$1.call(_html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = _toLength(this.length);
      var klass = _cof(this);
      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice$1.call(this, begin, end);
      var start = _toAbsoluteIndex(begin, len);
      var upTo = _toAbsoluteIndex(end, len);
      var size = _toLength(upTo - start);
      var cloned = new Array(size);
      var i = 0;

      for (; i < size; i++) {
        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      }

      return cloned;
    }
  });

  var $sort = [].sort;
  var test$1 = [1, 2, 3];
  _export(_export.P + _export.F * (_fails(function () {
    // IE8-
    test$1.sort(undefined);
  }) || !_fails(function () {
    // V8 bug
    test$1.sort(null); // Old WebKit
  }) || !_strictMethod($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
    }
  });

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
    var C;

    if (_isArray(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex

  var _arrayMethods = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);

          if (TYPE) {
            if (IS_MAP) result[index] = res; // map
            else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var $forEach = _arrayMethods(0);
  var STRICT = _strictMethod([].forEach, true);
  _export(_export.P + _export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

  var $map = _arrayMethods(1);
  _export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments[1]);
    }
  });

  var $filter = _arrayMethods(2);
  _export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });

  var $some = _arrayMethods(3);
  _export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some(this, callbackfn, arguments[1]);
    }
  });

  var $every = _arrayMethods(4);
  _export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return $every(this, callbackfn, arguments[1]);
    }
  });

  var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
    _aFunction(callbackfn);
    var O = _toObject(that);
    var self = _iobject(O);
    var length = _toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; isRight ? index >= 0 : length > index; index += i) {
      if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
    }

    return memo;
  };

  _export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

  _export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });

  var $indexOf = _arrayIncludes(false);
  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
  _export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });

  var $native$1 = [].lastIndexOf;
  var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  _export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex = @[*-1] */
    ) {
      // convert -0 to +0
      if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;
      var O = _toIobject(this);
      var length = _toLength(O.length);
      var index = length - 1;
      if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
      if (index < 0) index = length + index;

      for (; index >= 0; index--) {
        if (index in O) if (O[index] === searchElement) return index || 0;
      }

      return -1;
    }
  });

  var _arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = _toObject(this);
    var len = _toLength(O.length);
    var to = _toAbsoluteIndex(target, len);
    var from = _toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});

  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  _export(_export.P, 'Array', {
    copyWithin: _arrayCopyWithin
  });
  _addToUnscopables('copyWithin');

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  _export(_export.P, 'Array', {
    fill: _arrayFill
  });
  _addToUnscopables('fill');

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true; // Shouldn't skip holes

  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  var $find$1 = _arrayMethods(6);
  var KEY$1 = 'findIndex';
  var forced$1 = true; // Shouldn't skip holes

  if (KEY$1 in []) Array(1)[KEY$1](function () {
    forced$1 = false;
  });
  _export(_export.P + _export.F * forced$1, 'Array', {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY$1);

  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  _setSpecies('Array');

  var _iterStep = function _iterStep(done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }

    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators.Arguments = _iterators.Array;
  _addToUnscopables('keys');
  _addToUnscopables('values');
  _addToUnscopables('entries');

  var _flags = function _flags() {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var dP$4 = _objectDp.f;
  var gOPN$3 = _objectGopn.f;
  var $RegExp = _global.RegExp;
  var Base$1 = $RegExp;
  var proto$2 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" creates a new object, old webkit buggy here

  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (_descriptors && (!CORRECT_NEW || _fails(function () {
    re2[_wks('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;
      var piRE = _isRegexp(p);
      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
    };

    var proxy = function proxy(key) {
      key in $RegExp || dP$4($RegExp, key, {
        configurable: true,
        get: function get() {
          return Base$1[key];
        },
        set: function set(it) {
          Base$1[key] = it;
        }
      });
    };

    for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) {
      proxy(keys$1[i++]);
    }

    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;
    _redefine(_global, 'RegExp', $RegExp);
  }

  _setSpecies('RegExp');

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING$1 = 'toString';
  var $toString$1 = /./[TO_STRING$1];

  var define = function define(fn) {
    _redefine(RegExp.prototype, TO_STRING$1, fn, true);
  }; // 21.2.5.14 RegExp.prototype.toString()


  if (_fails(function () {
    return $toString$1.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    }); // FF44- RegExp#toString has a wrong name
  } else if ($toString$1.name != TO_STRING$1) {
    define(function toString() {
      return $toString$1.call(this);
    });
  }

  var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex

  var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec

  var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }

    return builtinExec.call(R, S);
  };

  var SPECIES$2 = _wks('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  }();

  var _fixReWks = function _fixReWks(KEY, length, exec) {
    var SYMBOL = _wks(KEY);
    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      re.exec = function () {
        execCalled = true;
        return null;
      };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};

        re.constructor[SPECIES$2] = function () {
          return re;
        };
      }

      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === _regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      var strfn = fns[0];
      var rxfn = fns[1];
      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };

  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$3 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = _regexpExecAbstract(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$2(_toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor$3(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  _fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = _regexpExecAbstract(rx, S);
      if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var SPECIES$3 = _wks('species');

  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !_fails(function () {
    RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;
      var rx = _anObject(regexp);
      var S = String(this);
      var C = _speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  });

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);
      var f = _ctx(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function run() {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var listener = function listener(event) {
    run.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer(counter);
      return counter;
    };

    clearTask = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (_cof(process) == 'process') {
      defer = function defer(id) {
        process.nextTick(_ctx(run, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(_ctx(run, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function defer(id) {
        _global.postMessage(id + '', '*');
      };

      _global.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function defer(id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);
          run.call(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }

  var _task = {
    set: setTask,
    clear: clearTask
  };

  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode) {
      notify = function notify() {
        process$1.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);

      notify = function notify() {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$7 = function f(C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$7
  };

  var _perform = function _perform(exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator$1 = _global.navigator;

  var _userAgent = navigator$1 && navigator$1.userAgent || '';

  var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      _redefine(target, key, src[key], safe);
    }

    return target;
  };

  var task = _task.set;
  var microtask = _microtask();
  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';

  var empty = function empty() {
    /* empty */
  };

  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
  var USE_NATIVE$1 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };

  var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function () {
      var handler;

      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };

  var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");

      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$1) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');
      _aFunction(executor);
      Internal.call(this);

      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };

    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {
    Promise: $Promise
  });
  _setToStringTag($Promise, PROMISE);
  _setSpecies(PROMISE);
  Wrapper = _core[PROMISE]; // statics

  _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export(_export.S + _export.F * ( !USE_NATIVE$1), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve( this, x);
    }
  });
  _export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  var _validateCollection = function _validateCollection(it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$5 = _objectDp.f;
  var fastKey = _meta.fastKey;
  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function getEntry(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = _validateCollection(this, NAME);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection(this, NAME);
          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });
      if (_descriptors) dP$5(C.prototype, 'size', {
        get: function get() {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function setStrong(C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) {
          entry = entry.p;
        } // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies(NAME);
    }
  };

  var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function fixMethod(KEY) {
      var fn = proto[KEY];
      _redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll(C.prototype, methods);
      _meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = _fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly

      var ACCEPT_ITERABLES = _iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);
          var that = _inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);
    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var MAP = 'Map'; // 23.1 Map Objects

  var es6_map = _collection(MAP, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
    }
  }, _collectionStrong, true);

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = _collection(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  var getWeak = _meta.getWeak;
  var arrayFind = _arrayMethods(5);
  var arrayFindIndex = _arrayMethods(6);
  var id$1 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.a = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  var _collectionWeak = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = id$1++; // collection id

        that._l = undefined; // leak store for uncaught frozen objects

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function _delete(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
          return data && _has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
          return data && _has(data, this._i);
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var data = getWeak(_anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };

  var es6_weakMap = createCommonjsModule(function (module) {

    var each = _arrayMethods(0);
    var NATIVE_WEAK_MAP = _validateCollection;
    var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = _meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = _collectionWeak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (_isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true); // IE11 WeakMap frozen keys fix

    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
      _objectAssign(InternalMap.prototype, methods);
      _meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];
        _redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (_isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
  });

  var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

  _collection(WEAK_SET, function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
    }
  }, _collectionWeak, false, true);

  var TYPED = _uid('typed_array');
  var VIEW = _uid('view');
  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i$1 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$1 < l) {
    if (Typed = _global[TypedArrayConstructors[i$1++]]) {
      _hide(Typed.prototype, TYPED, true);
      _hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };

  var _toIndex = function _toIndex(it) {
    if (it === undefined) return 0;
    var number = _toInteger(it);
    var length = _toLength(number);
    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };

  var _typedBuffer = createCommonjsModule(function (module, exports) {

    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = _descriptors ? '_b' : BUFFER;
    var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
    var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value); // eslint-disable-next-line no-self-compare

      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);

        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
      }

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
      }

      buffer[--i] |= s * 128;
      return buffer;
    }

    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;

      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
      }

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
      }

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }

    function packI8(it) {
      return [it & 0xff];
    }

    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }

    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }

    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }

    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function get() {
          return this[internal];
        }
      });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }

    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;
      var intIndex = _toIndex(numIndex);
      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);

      for (var i = 0; i < bytes; i++) {
        store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
    }

    if (!_typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
        var byteLength = _toIndex(length);
        this._b = _arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        _anInstance(this, $DataView, DATA_VIEW);
        _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
        var bufferLength = buffer[$LENGTH];
        var offset = _toInteger(byteOffset);
        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (_descriptors) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      _redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!_fails(function () {
        $ArrayBuffer(1);
      }) || !_fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || _fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new

        new $ArrayBuffer(1.5); // eslint-disable-line no-new

        new $ArrayBuffer(NaN); // eslint-disable-line no-new

        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          _anInstance(this, $ArrayBuffer);
          return new BaseBuffer(_toIndex(length));
        };

        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
        }

        ArrayBufferProto.constructor = $ArrayBuffer;
      } // iOS Safari 7.x bug


      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }

    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    _setToStringTag($DataView, DATA_VIEW);
    _hide($DataView[PROTOTYPE], _typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });

  var ArrayBuffer$1 = _global.ArrayBuffer;
  var $ArrayBuffer = _typedBuffer.ArrayBuffer;
  var $DataView = _typedBuffer.DataView;
  var $isView = _typed.ABV && ArrayBuffer$1.isView;
  var $slice = $ArrayBuffer.prototype.slice;
  var VIEW$1 = _typed.VIEW;
  var ARRAY_BUFFER = 'ArrayBuffer';
  _export(_export.G + _export.W + _export.F * (ArrayBuffer$1 !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
  });
  _export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
    }
  });
  _export(_export.P + _export.U + _export.F * _fails(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix

      var len = _anObject(this).byteLength;
      var first = _toAbsoluteIndex(start, len);
      var fin = _toAbsoluteIndex(end === undefined ? len : end, len);
      var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
      var viewS = new $DataView(this);
      var viewT = new $DataView(result);
      var index = 0;

      while (first < fin) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }

      return result;
    }
  });
  _setSpecies(ARRAY_BUFFER);

  _export(_export.G + _export.W + _export.F * !_typed.ABV, {
    DataView: _typedBuffer.DataView
  });

  var _typedArray = createCommonjsModule(function (module) {

    if (_descriptors) {
      var LIBRARY = _library;
      var global = _global;
      var fails = _fails;
      var $export = _export;
      var $typed = _typed;
      var $buffer = _typedBuffer;
      var ctx = _ctx;
      var anInstance = _anInstance;
      var propertyDesc = _propertyDesc;
      var hide = _hide;
      var redefineAll = _redefineAll;
      var toInteger = _toInteger;
      var toLength = _toLength;
      var toIndex = _toIndex;
      var toAbsoluteIndex = _toAbsoluteIndex;
      var toPrimitive = _toPrimitive;
      var has = _has;
      var classof = _classof;
      var isObject = _isObject;
      var toObject = _toObject;
      var isArrayIter = _isArrayIter;
      var create = _objectCreate;
      var getPrototypeOf = _objectGpo;
      var gOPN = _objectGopn.f;
      var getIterFn = core_getIteratorMethod;
      var uid = _uid;
      var wks = _wks;
      var createArrayMethod = _arrayMethods;
      var createArrayIncludes = _arrayIncludes;
      var speciesConstructor = _speciesConstructor;
      var ArrayIterators = es6_array_iterator;
      var Iterators = _iterators;
      var $iterDetect = _iterDetect;
      var setSpecies = _setSpecies;
      var arrayFill = _arrayFill;
      var arrayCopyWithin = _arrayCopyWithin;
      var $DP = _objectDp;
      var $GOPD = _objectGopd;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';
      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function validate(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function allocate(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }

        return new C(length);
      };

      var speciesFromList = function speciesFromList(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function fromList(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      };

      var addGetter = function addGetter(it, key, internal) {
        dP(it, key, {
          get: function get() {
            return this._d[internal];
          }
        });
      };

      var $from = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;

        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }

          O = values;
        }

        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var $of = function of()
      /* ...items */
      {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);

        while (length > index) {
          result[index] = arguments[index++];
        }

        return result;
      }; // iOS Safari 6.x fails here


      var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start
        /* , end */
        ) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value
        /* , start, end */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate
        /* , thisArg */
        ) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate
        /* , thisArg */
        ) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn
        /* , thisArg */
        ) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement
        /* , fromIndex */
        ) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement
        /* , fromIndex */
        ) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement
        /* , fromIndex */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn
        /* , thisArg */
        ) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;

          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }

          return that;
        },
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike
      /* , offset */
      ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);

        while (index < len) {
          this[offset + index] = src[index++];
        }
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function isTAIndex(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
      };

      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };

      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }

        return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function constructor() {
          /* noop */
        },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function get() {
          return this[TYPED_ARRAY];
        }
      }); // eslint-disable-next-line max-statements

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

        var getter = function getter(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };

        var setter = function setter(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };

        var addElement = function addElement(that, index) {
          dP(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;

            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }

            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });

            while (index < length) {
              addElement(that, index++);
            }
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new

          new TypedArray(null); // eslint-disable-line no-new

          new TypedArray(1.5); // eslint-disable-line no-new

          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645

            if (!isObject(data)) return new Base(toIndex(data));

            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }

            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }

        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function get() {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function () {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {
      /* empty */
    };
  });

  _typedArray('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  _typedArray('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var rApply = (_global.Reflect || {}).apply;
  var fApply = Function.apply; // MS Edge argumentsList argument is optional

  _export(_export.S + _export.F * !_fails(function () {
    rApply(function () {
      /* empty */
    });
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      var T = _aFunction(target);
      var L = _anObject(argumentsList);
      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  });

  var rConstruct = (_global.Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = _fails(function () {
    function F() {
      /* empty */
    }

    return !(rConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !_fails(function () {
    rConstruct(function () {
      /* empty */
    });
  });
  _export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      _aFunction(Target);
      _anObject(args);
      var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        $args.push.apply($args, args);
        return new (_bind.apply(Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
      var result = Function.apply.call(Target, instance, args);
      return _isObject(result) ? result : instance;
    }
  });

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

  _export(_export.S + _export.F * _fails(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(_objectDp.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      _anObject(target);
      propertyKey = _toPrimitive(propertyKey, true);
      _anObject(attributes);

      try {
        _objectDp.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var gOPD$3 = _objectGopd.f;
  _export(_export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD$3(_anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });

  var Enumerate = function Enumerate(iterated) {
    this._t = _anObject(iterated); // target

    this._i = 0; // next index

    var keys = this._k = []; // keys

    var key;

    for (key in iterated) {
      keys.push(key);
    }
  };

  _iterCreate(Enumerate, 'Object', function () {
    var that = this;
    var keys = that._k;
    var key;

    do {
      if (that._i >= keys.length) return {
        value: undefined,
        done: true
      };
    } while (!((key = keys[that._i++]) in that._t));

    return {
      value: key,
      done: false
    };
  });
  _export(_export.S, 'Reflect', {
    enumerate: function enumerate(target) {
      return new Enumerate(target);
    }
  });

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (_anObject(target) === receiver) return target[propertyKey];
    if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (_isObject(proto = _objectGpo(target))) return get(proto, propertyKey, receiver);
  }

  _export(_export.S, 'Reflect', {
    get: get
  });

  _export(_export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return _objectGopd.f(_anObject(target), propertyKey);
    }
  });

  _export(_export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return _objectGpo(_anObject(target));
    }
  });

  _export(_export.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  var $isExtensible = Object.isExtensible;
  _export(_export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      _anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });

  var Reflect$1 = _global.Reflect;

  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));
    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  _export(_export.S, 'Reflect', {
    ownKeys: _ownKeys
  });

  var $preventExtensions = Object.preventExtensions;
  _export(_export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      _anObject(target);

      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
    var existingDescriptor, proto;

    if (!ownDesc) {
      if (_isObject(proto = _objectGpo(target))) {
        return set(proto, propertyKey, V, receiver);
      }

      ownDesc = _propertyDesc(0);
    }

    if (_has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !_isObject(receiver)) return false;

      if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        _objectDp.f(receiver, propertyKey, existingDescriptor);
      } else _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));

      return true;
    }

    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  _export(_export.S, 'Reflect', {
    set: set
  });

  if (_setProto) _export(_export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      _setProto.check(target, proto);

      try {
        _setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });

  var $includes = _arrayIncludes(true);
  _export(_export.P, 'Array', {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables('includes');

  var includes = _core.Array.includes;

  var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

  function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
    var element, spreadable;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
        spreadable = false;

        if (_isObject(element)) {
          spreadable = element[IS_CONCAT_SPREADABLE];
          spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
        }

        if (spreadable && depth > 0) {
          targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1fffffffffffff) throw TypeError();
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  }

  var _flattenIntoArray = flattenIntoArray;

  _export(_export.P, 'Array', {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = _toObject(this);
      var sourceLen, A;
      _aFunction(callbackfn);
      sourceLen = _toLength(O.length);
      A = _arraySpeciesCreate(O, 0);
      _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
      return A;
    }
  });
  _addToUnscopables('flatMap');

  var flatMap = _core.Array.flatMap;

  var _stringPad = function _stringPad(that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);
  _export(_export.P + _export.F * WEBKIT_BUG, 'String', {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  var padStart = _core.String.padStart;

  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);
  _export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  var padEnd = _core.String.padEnd;

  _stringTrim('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart');

  var trimStart = _core.String.trimLeft;

  _stringTrim('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd');

  var trimEnd = _core.String.trimRight;

  _wksDefine('asyncIterator');

  var asyncIterator = _wksExt.f('asyncIterator');

  _export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = _toIobject(object);
      var getDesc = _objectGopd.f;
      var keys = _ownKeys(O);
      var result = {};
      var i = 0;
      var key, desc;

      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) _createProperty(result, key, desc);
      }

      return result;
    }
  });

  var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

  var isEnum$1 = _objectPie.f;

  var _objectToArray = function _objectToArray(isEntries) {
    return function (it) {
      var O = _toIobject(it);
      var keys = _objectKeys(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!_descriptors || isEnum$1.call(O, key)) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var $values = _objectToArray(false);
  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });

  var values = _core.Object.values;

  var $entries = _objectToArray(true);
  _export(_export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });

  var entries = _core.Object.entries;

  _export(_export.P + _export.R, 'Promise', {
    'finally': function _finally(onFinally) {
      var C = _speciesConstructor(this, _core.Promise || _global.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return _promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return _promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  var _finally = _core.Promise['finally'];

  var slice = [].slice;
  var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check

  var wrap$1 = function wrap(set) {
    return function (fn, time
    /* , ...args */
    ) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : false;
      return set(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
      } : fn, time);
    };
  };

  _export(_export.G + _export.B + _export.F * MSIE, {
    setTimeout: wrap$1(_global.setTimeout),
    setInterval: wrap$1(_global.setInterval)
  });

  _export(_export.G + _export.B, {
    setImmediate: _task.set,
    clearImmediate: _task.clear
  });

  var ITERATOR$4 = _wks('iterator');
  var TO_STRING_TAG = _wks('toStringTag');
  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
    var NAME$1 = collections[i$2];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto$3 = Collection && Collection.prototype;
    var key$1;

    if (proto$3) {
      if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
      if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) {
        if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
      }
    }
  }

  var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;

          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return Promise.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
     module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

  var _global$1 = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core$1 = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.11'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1$1 = _core$1.version;

  var _aFunction$1 = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _ctx$1 = function _ctx(fn, that, length) {
    _aFunction$1(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var _isObject$1 = function _isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject$1 = function _anObject(it) {
    if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails$1 = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _descriptors$1 = !_fails$1(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var document$3 = _global$1.document; // typeof document.createElement is 'object' in old IE

  var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);

  var _domCreate$1 = function _domCreate(it) {
    return is$1 ? document$3.createElement(it) : {};
  };

  var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
    return Object.defineProperty(_domCreate$1('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string

  var _toPrimitive$1 = function _toPrimitive(it, S) {
    if (!_isObject$1(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP$6 = Object.defineProperty;
  var f$8 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject$1(O);
    P = _toPrimitive$1(P, true);
    _anObject$1(Attributes);
    if (_ie8DomDefine$1) try {
      return dP$6(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp$1 = {
    f: f$8
  };

  var _propertyDesc$1 = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide$1 = _descriptors$1 ? function (object, key, value) {
    return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;

  var _has$1 = function _has(it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var PROTOTYPE$3 = 'prototype';

  var $export$1 = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
    var expProto = exports[PROTOTYPE$3];
    var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$3];
    var key, own, out;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has$1(exports, key)) continue; // export native or passed

      out = own ? target[key] : source[key]; // prevent global pollution for namespaces

      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
      : IS_BIND && own ? _ctx$1(out, _global$1) // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? function (C) {
        var F = function F(a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0:
                return new C();

              case 1:
                return new C(a);

              case 2:
                return new C(a, b);
            }

            return new C(a, b, c);
          }

          return C.apply(this, arguments);
        };

        F[PROTOTYPE$3] = C[PROTOTYPE$3];
        return F; // make static versions for prototype methods
      }(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

        if (type & $export.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
      }
    }
  }; // type bitmap


  $export$1.F = 1; // forced

  $export$1.G = 2; // global

  $export$1.S = 4; // static

  $export$1.P = 8; // proto

  $export$1.B = 16; // bind

  $export$1.W = 32; // wrap

  $export$1.U = 64; // safe

  $export$1.R = 128; // real proto method for `library`

  var _export$1 = $export$1;

  _export$1(_export$1.G, {
    global: _global$1
  });

  var global$1 = _core$1.global;

  var lib = createCommonjsModule(function (module) {

    var _global = _interopRequireDefault(global$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
      console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
    }

    _global["default"]._babelPolyfill = true;
  });
  unwrapExports(lib);

  // 7.1.4 ToInteger
  var ceil$1 = Math.ceil;
  var floor$4 = Math.floor;

  var _toInteger$1 = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor$4 : ceil$1)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined$1 = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // false -> String#codePointAt

  var _stringAt$1 = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined$1(that));
      var i = _toInteger$1(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _library$1 = true;

  var _redefine$1 = _hide$1;

  var _iterators$1 = {};

  var toString$2 = {}.toString;

  var _cof$1 = function _cof(it) {
    return toString$2.call(it).slice(8, -1);
  };

  // eslint-disable-next-line no-prototype-builtins

  var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof$1(it) == 'String' ? it.split('') : Object(it);
  };

  var _toIobject$1 = function _toIobject(it) {
    return _iobject$1(_defined$1(it));
  };

  var min$3 = Math.min;

  var _toLength$1 = function _toLength(it) {
    return it > 0 ? min$3(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max$2 = Math.max;
  var min$4 = Math.min;

  var _toAbsoluteIndex$1 = function _toAbsoluteIndex(index, length) {
    index = _toInteger$1(index);
    return index < 0 ? max$2(index + length, 0) : min$4(index, length);
  };

  // true  -> Array#includes

  var _arrayIncludes$1 = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject$1($this);
      var length = _toLength$1(O.length);
      var index = _toAbsoluteIndex$1(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }
      return !IS_INCLUDES && -1;
    };
  };

  var _shared$1 = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global$1[SHARED] || (_global$1[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core$1.version,
      mode:  'pure' ,
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
  });

  var id$2 = 0;
  var px$1 = Math.random();

  var _uid$1 = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px$1).toString(36));
  };

  var shared$1 = _shared$1('keys');

  var _sharedKey$1 = function _sharedKey(key) {
    return shared$1[key] || (shared$1[key] = _uid$1(key));
  };

  var arrayIndexOf$1 = _arrayIncludes$1(false);
  var IE_PROTO$3 = _sharedKey$1('IE_PROTO');

  var _objectKeysInternal$1 = function _objectKeysInternal(object, names) {
    var O = _toIobject$1(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      if (key != IE_PROTO$3) _has$1(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (_has$1(O, key = names[i++])) {
        ~arrayIndexOf$1(result, key) || result.push(key);
      }
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys$1 = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  var _objectKeys$1 = Object.keys || function keys(O) {
    return _objectKeysInternal$1(O, _enumBugKeys$1);
  };

  var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject$1(O);
    var keys = _objectKeys$1(Properties);
    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) {
      _objectDp$1.f(O, P = keys[i++], Properties[P]);
    }

    return O;
  };

  var document$4 = _global$1.document;

  var _html$1 = document$4 && document$4.documentElement;

  var IE_PROTO$4 = _sharedKey$1('IE_PROTO');

  var Empty$1 = function Empty() {
    /* empty */
  };

  var PROTOTYPE$4 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var _createDict$1 = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate$1('iframe');
    var i = _enumBugKeys$1.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html$1.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict$1 = iframeDocument.F;

    while (i--) {
      delete _createDict$1[PROTOTYPE$4][_enumBugKeys$1[i]];
    }

    return _createDict$1();
  };

  var _objectCreate$1 = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty$1[PROTOTYPE$4] = _anObject$1(O);
      result = new Empty$1();
      Empty$1[PROTOTYPE$4] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$4] = O;
    } else result = _createDict$1();

    return Properties === undefined ? result : _objectDps$1(result, Properties);
  };

  var _wks$1 = createCommonjsModule(function (module) {
    var store = _shared$1('wks');
    var Symbol = _global$1.Symbol;
    var USE_SYMBOL = typeof Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def$1 = _objectDp$1.f;
  var TAG$2 = _wks$1('toStringTag');

  var _setToStringTag$1 = function _setToStringTag(it, tag, stat) {
    if (it && !_has$1(it = stat ? it : it.prototype, TAG$2)) def$1(it, TAG$2, {
      configurable: true,
      value: tag
    });
  };

  var IteratorPrototype$1 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide$1(IteratorPrototype$1, _wks$1('iterator'), function () {
    return this;
  });

  var _iterCreate$1 = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate$1(IteratorPrototype$1, {
      next: _propertyDesc$1(1, next)
    });
    _setToStringTag$1(Constructor, NAME + ' Iterator');
  };

  var _toObject$1 = function _toObject(it) {
    return Object(_defined$1(it));
  };

  var IE_PROTO$5 = _sharedKey$1('IE_PROTO');
  var ObjectProto$2 = Object.prototype;

  var _objectGpo$1 = Object.getPrototypeOf || function (O) {
    O = _toObject$1(O);
    if (_has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto$2 : null;
  };

  var ITERATOR$5 = _wks$1('iterator');
  var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR$1 = '@@iterator';
  var KEYS$1 = 'keys';
  var VALUES$1 = 'values';

  var returnThis$1 = function returnThis() {
    return this;
  };

  var _iterDefine$1 = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate$1(Constructor, NAME, next);

    var getMethod = function getMethod(kind) {
      if (!BUGGY$1 && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS$1:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES$1:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES$1;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$5] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag$1(IteratorPrototype, TAG, true); // fix for some old engines
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES$1) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if (( FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$5])) {
      _hide$1(proto, ITERATOR$5, $default);
    } // Plug for library


    _iterators$1[NAME] = $default;
    _iterators$1[TAG] = returnThis$1;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES$1),
        keys: IS_SET ? $default : getMethod(KEYS$1),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine$1(proto, key, methods[key]);
      } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var $at$2 = _stringAt$1(true); // 21.1.3.27 String.prototype[@@iterator]()

  _iterDefine$1(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at$2(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var _iterStep$1 = function _iterStep(done, value) {
    return {
      value: value,
      done: !!done
    };
  };

  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject$1(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep$1(1);
    }

    if (kind == 'keys') return _iterStep$1(0, index);
    if (kind == 'values') return _iterStep$1(0, O[index]);
    return _iterStep$1(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

  _iterators$1.Arguments = _iterators$1.Array;

  var TO_STRING_TAG$1 = _wks$1('toStringTag');
  var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

  for (var i$3 = 0; i$3 < DOMIterables$1.length; i$3++) {
    var NAME$2 = DOMIterables$1[i$3];
    var Collection$1 = _global$1[NAME$2];
    var proto$4 = Collection$1 && Collection$1.prototype;
    if (proto$4 && !proto$4[TO_STRING_TAG$1]) _hide$1(proto$4, TO_STRING_TAG$1, NAME$2);
    _iterators$1[NAME$2] = _iterators$1.Array;
  }

  var TAG$3 = _wks$1('toStringTag'); // ES3 wrong here

  var ARG$1 = _cof$1(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet$1 = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof$1 = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet$1(O = Object(it), TAG$3)) == 'string' ? T // builtinTag case
    : ARG$1 ? _cof$1(O) // ES3 arguments fallback
    : (B = _cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _anInstance$1 = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _iterCall$1 = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject$1(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject$1(ret.call(iterator));
      throw e;
    }
  };

  var ITERATOR$6 = _wks$1('iterator');
  var ArrayProto$2 = Array.prototype;

  var _isArrayIter$1 = function _isArrayIter(it) {
    return it !== undefined && (_iterators$1.Array === it || ArrayProto$2[ITERATOR$6] === it);
  };

  var ITERATOR$7 = _wks$1('iterator');

  var core_getIteratorMethod$1 = _core$1.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$7] || it['@@iterator'] || _iterators$1[_classof$1(it)];
  };

  var _forOf$1 = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod$1(iterable);
      var f = _ctx$1(fn, that, entries ? 2 : 1);
      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter$1(iterFn)) for (length = _toLength$1(iterable.length); length > index; index++) {
        result = entries ? f(_anObject$1(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall$1(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var SPECIES$4 = _wks$1('species');

  var _speciesConstructor$1 = function _speciesConstructor(O, D) {
    var C = _anObject$1(O).constructor;
    var S;
    return C === undefined || (S = _anObject$1(C)[SPECIES$4]) == undefined ? D : _aFunction$1(S);
  };

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke$1 = function _invoke(fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var process$3 = _global$1.process;
  var setTask$1 = _global$1.setImmediate;
  var clearTask$1 = _global$1.clearImmediate;
  var MessageChannel$1 = _global$1.MessageChannel;
  var Dispatch$1 = _global$1.Dispatch;
  var counter$1 = 0;
  var queue$1 = {};
  var ONREADYSTATECHANGE$1 = 'onreadystatechange';
  var defer$1, channel$1, port$1;

  var run$1 = function run() {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue$1.hasOwnProperty(id)) {
      var fn = queue$1[id];
      delete queue$1[id];
      fn();
    }
  };

  var listener$1 = function listener(event) {
    run$1.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask$1 || !clearTask$1) {
    setTask$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue$1[++counter$1] = function () {
        // eslint-disable-next-line no-new-func
        _invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer$1(counter$1);
      return counter$1;
    };

    clearTask$1 = function clearImmediate(id) {
      delete queue$1[id];
    }; // Node.js 0.8-


    if (_cof$1(process$3) == 'process') {
      defer$1 = function defer(id) {
        process$3.nextTick(_ctx$1(run$1, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch$1 && Dispatch$1.now) {
      defer$1 = function defer(id) {
        Dispatch$1.now(_ctx$1(run$1, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel$1) {
      channel$1 = new MessageChannel$1();
      port$1 = channel$1.port2;
      channel$1.port1.onmessage = listener$1;
      defer$1 = _ctx$1(port$1.postMessage, port$1, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global$1.addEventListener && typeof postMessage == 'function' && !_global$1.importScripts) {
      defer$1 = function defer(id) {
        _global$1.postMessage(id + '', '*');
      };

      _global$1.addEventListener('message', listener$1, false); // IE8-
    } else if (ONREADYSTATECHANGE$1 in _domCreate$1('script')) {
      defer$1 = function defer(id) {
        _html$1.appendChild(_domCreate$1('script'))[ONREADYSTATECHANGE$1] = function () {
          _html$1.removeChild(this);
          run$1.call(id);
        };
      }; // Rest old browsers

    } else {
      defer$1 = function defer(id) {
        setTimeout(_ctx$1(run$1, id, 1), 0);
      };
    }
  }

  var _task$1 = {
    set: setTask$1,
    clear: clearTask$1
  };

  var macrotask$1 = _task$1.set;
  var Observer$1 = _global$1.MutationObserver || _global$1.WebKitMutationObserver;
  var process$4 = _global$1.process;
  var Promise$2 = _global$1.Promise;
  var isNode$2 = _cof$1(process$4) == 'process';

  var _microtask$1 = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode$2 && (parent = process$4.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode$2) {
      notify = function notify() {
        process$4.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer$1 && !(_global$1.navigator && _global$1.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer$1(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$2 && Promise$2.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$2.resolve(undefined);

      notify = function notify() {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask$1.call(_global$1, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  };

  function PromiseCapability$1(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction$1(resolve);
    this.reject = _aFunction$1(reject);
  }

  var f$9 = function f(C) {
    return new PromiseCapability$1(C);
  };

  var _newPromiseCapability$1 = {
    f: f$9
  };

  var _perform$1 = function _perform(exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator$2 = _global$1.navigator;

  var _userAgent$1 = navigator$2 && navigator$2.userAgent || '';

  var _promiseResolve$1 = function _promiseResolve(C, x) {
    _anObject$1(C);
    if (_isObject$1(x) && x.constructor === C) return x;
    var promiseCapability = _newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll$1 = function _redefineAll(target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];else _hide$1(target, key, src[key]);
    }

    return target;
  };

  var SPECIES$5 = _wks$1('species');

  var _setSpecies$1 = function _setSpecies(KEY) {
    var C = typeof _core$1[KEY] == 'function' ? _core$1[KEY] : _global$1[KEY];
    if (_descriptors$1 && C && !C[SPECIES$5]) _objectDp$1.f(C, SPECIES$5, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  var ITERATOR$8 = _wks$1('iterator');
  var SAFE_CLOSING$1 = false;

  try {
    var riter$1 = [7][ITERATOR$8]();

    riter$1['return'] = function () {
      SAFE_CLOSING$1 = true;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(riter$1, function () {
      throw 2;
    });
  } catch (e) {
    /* empty */
  }

  var _iterDetect$1 = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING$1) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$8]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$8] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  var task$1 = _task$1.set;
  var microtask$1 = _microtask$1();
  var PROMISE$1 = 'Promise';
  var TypeError$2 = _global$1.TypeError;
  var process$5 = _global$1.process;
  var versions$1 = process$5 && process$5.versions;
  var v8$1 = versions$1 && versions$1.v8 || '';
  var $Promise$1 = _global$1[PROMISE$1];
  var isNode$3 = _classof$1(process$5) == 'process';

  var empty$1 = function empty() {
    /* empty */
  };

  var Internal$1, newGenericPromiseCapability$1, OwnPromiseCapability$1, Wrapper$1;
  var newPromiseCapability$1 = newGenericPromiseCapability$1 = _newPromiseCapability$1.f;
  var USE_NATIVE$2 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise$1.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks$1('species')] = function (exec) {
        exec(empty$1, empty$1);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$3 || typeof PromiseRejectionEvent == 'function') && promise.then(empty$1) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8$1.indexOf('6.6') !== 0 && _userAgent$1.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable$1 = function isThenable(it) {
    var then;
    return _isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify$1 = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask$1(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled$1(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$2('Promise-chain cycle'));
            } else if (then = isThenable$1(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled$1(promise);
    });
  };

  var onUnhandled$1 = function onUnhandled(promise) {
    task$1.call(_global$1, function () {
      var value = promise._v;
      var unhandled = isUnhandled$1(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform$1(function () {
          if (isNode$3) {
            process$5.emit('unhandledRejection', value, promise);
          } else if (handler = _global$1.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global$1.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$3 || isUnhandled$1(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled$1 = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled$1 = function onHandleUnhandled(promise) {
    task$1.call(_global$1, function () {
      var handler;

      if (isNode$3) {
        process$5.emit('rejectionHandled', promise);
      } else if (handler = _global$1.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject$1 = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify$1(promise, true);
  };

  var $resolve$1 = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$2("Promise can't be resolved itself");

      if (then = isThenable$1(value)) {
        microtask$1(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx$1($resolve, wrapper, 1), _ctx$1($reject$1, wrapper, 1));
          } catch (e) {
            $reject$1.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify$1(promise, false);
      }
    } catch (e) {
      $reject$1.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$2) {
    // 25.4.3.1 Promise(executor)
    $Promise$1 = function Promise(executor) {
      _anInstance$1(this, $Promise$1, PROMISE$1, '_h');
      _aFunction$1(executor);
      Internal$1.call(this);

      try {
        executor(_ctx$1($resolve$1, this, 1), _ctx$1($reject$1, this, 1));
      } catch (err) {
        $reject$1.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal$1 = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal$1.prototype = _redefineAll$1($Promise$1.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability$1(_speciesConstructor$1(this, $Promise$1));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$3 ? process$5.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify$1(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability$1 = function OwnPromiseCapability() {
      var promise = new Internal$1();
      this.promise = promise;
      this.resolve = _ctx$1($resolve$1, promise, 1);
      this.reject = _ctx$1($reject$1, promise, 1);
    };

    _newPromiseCapability$1.f = newPromiseCapability$1 = function newPromiseCapability(C) {
      return C === $Promise$1 || C === Wrapper$1 ? new OwnPromiseCapability$1(C) : newGenericPromiseCapability$1(C);
    };
  }

  _export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$2, {
    Promise: $Promise$1
  });
  _setToStringTag$1($Promise$1, PROMISE$1);
  _setSpecies$1(PROMISE$1);
  Wrapper$1 = _core$1[PROMISE$1]; // statics

  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$2, PROMISE$1, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability$1(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  _export$1(_export$1.S + _export$1.F * (_library$1 ), PROMISE$1, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve$1( this === Wrapper$1 ? $Promise$1 : this, x);
    }
  });
  _export$1(_export$1.S + _export$1.F * !(USE_NATIVE$2 && _iterDetect$1(function (iter) {
    $Promise$1.all(iter)['catch'](empty$1);
  })), PROMISE$1, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = _perform$1(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        _forOf$1(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability$1(C);
      var reject = capability.reject;
      var result = _perform$1(function () {
        _forOf$1(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  _export$1(_export$1.P + _export$1.R, 'Promise', {
    'finally': function _finally(onFinally) {
      var C = _speciesConstructor$1(this, _core$1.Promise || _global$1.Promise);
      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return _promiseResolve$1(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return _promiseResolve$1(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  });

  _export$1(_export$1.S, 'Promise', {
    'try': function _try(callbackfn) {
      var promiseCapability = _newPromiseCapability$1.f(this);
      var result = _perform$1(callbackfn);
      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    }
  });

  var promise = _core$1.Promise;

  var promise$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": promise,
      __esModule: true
    };
  });
  unwrapExports(promise$1);

  var classCallCheck = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    exports.default = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  });
  unwrapExports(classCallCheck);

  _export$1(_export$1.S + _export$1.F * !_descriptors$1, 'Object', {
    defineProperty: _objectDp$1.f
  });

  var $Object = _core$1.Object;

  var defineProperty$1 = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };

  var defineProperty$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": defineProperty$1,
      __esModule: true
    };
  });
  unwrapExports(defineProperty$2);

  var createClass = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _defineProperty2 = _interopRequireDefault(defineProperty$2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  });
  unwrapExports(createClass);

  var loader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _promise2 = _interopRequireDefault(promise$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Promise based implementation of XMLHttpRequest Level 2 for GET method.
     */


    var Loader = function () {
      /**
       * @constructs
       * @param {string} [responseType=""] - responseType's value, "text" (equal to ""), "arraybuffer", "blob", "document" or "json"
       */
      function Loader() {
        var responseType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        (0, _classCallCheck3.default)(this, Loader);
        /**
         * @type {string}
         * @private
         */

        this.responseType = responseType;
        /**
         * @type {function}
         * @private
         */

        this.progressCb = undefined;
      }
      /**
       * Method for a promise based file loading.
       * Internally switch between loadOne and loadAll.
       * @public
       * @param {(string|string[])} fileURLs - The URL(s) of the files to load. Accepts a URL pointing to the file location or an array of URLs.
       * @returns {Promise}
       */


      (0, _createClass3.default)(Loader, [{
        key: 'load',
        value: function load(fileURLs) {
          if (fileURLs === undefined) throw new Error('Invalid fileURLs parameter: load method needs at least a url to load');
          if (Array.isArray(fileURLs)) return this.loadAll(fileURLs);else return this.loadOne(fileURLs);
        }
        /**
         * Load a single file
         * @private
         * @param {string} fileURL - The URL of the file to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadOne',
        value: function loadOne(fileURL) {
          return this.fileLoadingRequest(fileURL);
        }
        /**
         * Load all files at once in a single array and return a Promise
         * @private
         * @param {string[]} fileURLs - The URLs array of the files to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadAll',
        value: function loadAll(fileURLs) {
          var _this = this;

          var promises = fileURLs.map(function (fileURL, index) {
            return _this.fileLoadingRequest(fileURL, index);
          });
          return _promise2.default.all(promises);
        }
        /**
         * Load a file asynchronously, return a Promise.
         * @private
         * @param {string} url - The URL of the file to load
         * @param {string} [index] - The index of the file in the array of files to load
         * @returns {Promise}
         */

      }, {
        key: 'fileLoadingRequest',
        value: function fileLoadingRequest(url, index) {
          var _this2 = this;

          var promise = new _promise2.default(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.index = index;

            if (_this2.responseType) {
              request.responseType = _this2.responseType;
            } else {
              var suffix = '.json';

              if (url.indexOf(suffix, _this2.length - suffix.length) !== -1) {
                request.responseType = 'json';
              } else {
                request.responseType = 'arraybuffer';
              }
            }

            request.addEventListener('load', function () {
              // Test request.status value, as 404 will also get there
              // Test request.status === 0 for cordova internal ajax calls
              if (request.status === 200 || request.status === 304 || request.status === 0) {
                // Hack for iOS 7, to remove as soon as possible
                if (this.responseType === 'json' && typeof request.response === 'string') request.response = JSON.parse(request.response);
                resolve(request.response);
              } else {
                reject(new Error(request.statusText));
              }
            });
            request.addEventListener('progress', function (evt) {
              if (_this2.progressCallback) {
                var event = {
                  value: evt.loaded / evt.total,
                  loaded: evt.loaded,
                  total: evt.total
                };
                if (index !== undefined) event.index = index;

                _this2.progressCallback(event);
              }
            }); // Manage network errors

            request.addEventListener('error', function () {
              reject(new Error('Network Error'));
            });
            request.send();
          });
          return promise;
        }
        /**
         * Alternative API to set the progress callback.
         * @type {function} callback - The callback that handles the response.
         */

      }, {
        key: 'onProgress',
        value: function onProgress(callback) {
          this.progressCb = callback;
        }
        /**
         * Get the callback function to get the progress of file loading process.
         * This is only for the file loading progress as decodeAudioData doesn't
         * expose a decode progress value.
         * @type {function}
         */

      }, {
        key: 'progressCallback',
        get: function get() {
          return this.progressCb;
        }
        /**
         * Set the callback function to get the progress of file loading process.
         * This is only for the file loading progress as decodeAudioData doesn't
         * expose a decode progress value.
         * @type {function} callback - The callback that handles the response.
         */
        ,
        set: function set(callback) {
          this.progressCb = callback;
        }
      }]);
      return Loader;
    }();

    exports.default = Loader;
  });
  unwrapExports(loader);

  var _objectSap$1 = function _objectSap(KEY, exec) {
    var fn = (_core$1.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export$1(_export$1.S + _export$1.F * _fails$1(function () {
      fn(1);
    }), 'Object', exp);
  };

  _objectSap$1('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo$1(_toObject$1(it));
    };
  });

  var getPrototypeOf = _core$1.Object.getPrototypeOf;

  var getPrototypeOf$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getPrototypeOf,
      __esModule: true
    };
  });
  unwrapExports(getPrototypeOf$1);

  var f$a = _wks$1;
  var _wksExt$1 = {
    f: f$a
  };

  var iterator = _wksExt$1.f('iterator');

  var iterator$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": iterator,
      __esModule: true
    };
  });
  unwrapExports(iterator$1);

  var _meta$1 = createCommonjsModule(function (module) {
    var META = _uid$1('meta');
    var setDesc = _objectDp$1.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails$1(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!_isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has$1(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!_has$1(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has$1(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });
  var _meta_1$1 = _meta$1.KEY;
  var _meta_2$1 = _meta$1.NEED;
  var _meta_3$1 = _meta$1.fastKey;
  var _meta_4$1 = _meta$1.getWeak;
  var _meta_5$1 = _meta$1.onFreeze;

  var defineProperty$3 = _objectDp$1.f;

  var _wksDefine$1 = function _wksDefine(name) {
    var $Symbol = _core$1.Symbol || (_core$1.Symbol =  {} );
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$3($Symbol, name, {
      value: _wksExt$1.f(name)
    });
  };

  var f$b = Object.getOwnPropertySymbols;
  var _objectGops$1 = {
    f: f$b
  };

  var f$c = {}.propertyIsEnumerable;
  var _objectPie$1 = {
    f: f$c
  };

  var _enumKeys$1 = function _enumKeys(it) {
    var result = _objectKeys$1(it);
    var getSymbols = _objectGops$1.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie$1.f;
      var i = 0;
      var key;

      while (symbols.length > i) {
        if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
    }

    return result;
  };

  var _isArray$1 = Array.isArray || function isArray(arg) {
    return _cof$1(arg) == 'Array';
  };

  var hiddenKeys$1 = _enumBugKeys$1.concat('length', 'prototype');

  var f$d = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal$1(O, hiddenKeys$1);
  };

  var _objectGopn$1 = {
    f: f$d
  };

  var gOPN$4 = _objectGopn$1.f;
  var toString$3 = {}.toString;
  var windowNames$1 = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames$1 = function getWindowNames(it) {
    try {
      return gOPN$4(it);
    } catch (e) {
      return windowNames$1.slice();
    }
  };

  var f$e = function getOwnPropertyNames(it) {
    return windowNames$1 && toString$3.call(it) == '[object Window]' ? getWindowNames$1(it) : gOPN$4(_toIobject$1(it));
  };

  var _objectGopnExt$1 = {
    f: f$e
  };

  var gOPD$4 = Object.getOwnPropertyDescriptor;
  var f$f = _descriptors$1 ? gOPD$4 : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject$1(O);
    P = _toPrimitive$1(P, true);
    if (_ie8DomDefine$1) try {
      return gOPD$4(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has$1(O, P)) return _propertyDesc$1(!_objectPie$1.f.call(O, P), O[P]);
  };
  var _objectGopd$1 = {
    f: f$f
  };

  var META$1 = _meta$1.KEY;
  var gOPD$5 = _objectGopd$1.f;
  var dP$7 = _objectDp$1.f;
  var gOPN$5 = _objectGopnExt$1.f;
  var $Symbol$1 = _global$1.Symbol;
  var $JSON$1 = _global$1.JSON;

  var _stringify$1 = $JSON$1 && $JSON$1.stringify;

  var PROTOTYPE$5 = 'prototype';
  var HIDDEN$1 = _wks$1('_hidden');
  var TO_PRIMITIVE$2 = _wks$1('toPrimitive');
  var isEnum$2 = {}.propertyIsEnumerable;
  var SymbolRegistry$1 = _shared$1('symbol-registry');
  var AllSymbols$1 = _shared$1('symbols');
  var OPSymbols$1 = _shared$1('op-symbols');
  var ObjectProto$3 = Object[PROTOTYPE$5];
  var USE_NATIVE$3 = typeof $Symbol$1 == 'function' && !!_objectGops$1.f;
  var QObject$1 = _global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter$1 = !QObject$1 || !QObject$1[PROTOTYPE$5] || !QObject$1[PROTOTYPE$5].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc$1 = _descriptors$1 && _fails$1(function () {
    return _objectCreate$1(dP$7({}, 'a', {
      get: function get() {
        return dP$7(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$5(ObjectProto$3, key);
    if (protoDesc) delete ObjectProto$3[key];
    dP$7(it, key, D);
    if (protoDesc && it !== ObjectProto$3) dP$7(ObjectProto$3, key, protoDesc);
  } : dP$7;

  var wrap$2 = function wrap(tag) {
    var sym = AllSymbols$1[tag] = _objectCreate$1($Symbol$1[PROTOTYPE$5]);

    sym._k = tag;
    return sym;
  };

  var isSymbol$1 = USE_NATIVE$3 && typeof $Symbol$1.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol$1;
  };

  var $defineProperty$1 = function defineProperty(it, key, D) {
    if (it === ObjectProto$3) $defineProperty$1(OPSymbols$1, key, D);
    _anObject$1(it);
    key = _toPrimitive$1(key, true);
    _anObject$1(D);

    if (_has$1(AllSymbols$1, key)) {
      if (!D.enumerable) {
        if (!_has$1(it, HIDDEN$1)) dP$7(it, HIDDEN$1, _propertyDesc$1(1, {}));
        it[HIDDEN$1][key] = true;
      } else {
        if (_has$1(it, HIDDEN$1) && it[HIDDEN$1][key]) it[HIDDEN$1][key] = false;
        D = _objectCreate$1(D, {
          enumerable: _propertyDesc$1(0, false)
        });
      }

      return setSymbolDesc$1(it, key, D);
    }

    return dP$7(it, key, D);
  };

  var $defineProperties$1 = function defineProperties(it, P) {
    _anObject$1(it);
    var keys = _enumKeys$1(P = _toIobject$1(P));
    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) {
      $defineProperty$1(it, key = keys[i++], P[key]);
    }

    return it;
  };

  var $create$1 = function create(it, P) {
    return P === undefined ? _objectCreate$1(it) : $defineProperties$1(_objectCreate$1(it), P);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(key) {
    var E = isEnum$2.call(this, key = _toPrimitive$1(key, true));
    if (this === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return false;
    return E || !_has$1(this, key) || !_has$1(AllSymbols$1, key) || _has$1(this, HIDDEN$1) && this[HIDDEN$1][key] ? E : true;
  };

  var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject$1(it);
    key = _toPrimitive$1(key, true);
    if (it === ObjectProto$3 && _has$1(AllSymbols$1, key) && !_has$1(OPSymbols$1, key)) return;
    var D = gOPD$5(it, key);
    if (D && _has$1(AllSymbols$1, key) && !(_has$1(it, HIDDEN$1) && it[HIDDEN$1][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames$1 = function getOwnPropertyNames(it) {
    var names = gOPN$5(_toIobject$1(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has$1(AllSymbols$1, key = names[i++]) && key != HIDDEN$1 && key != META$1) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols$1 = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$3;
    var names = gOPN$5(IS_OP ? OPSymbols$1 : _toIobject$1(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has$1(AllSymbols$1, key = names[i++]) && (IS_OP ? _has$1(ObjectProto$3, key) : true)) result.push(AllSymbols$1[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE$3) {
    $Symbol$1 = function Symbol() {
      if (this instanceof $Symbol$1) throw TypeError('Symbol is not a constructor!');
      var tag = _uid$1(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function $set(value) {
        if (this === ObjectProto$3) $set.call(OPSymbols$1, value);
        if (_has$1(this, HIDDEN$1) && _has$1(this[HIDDEN$1], tag)) this[HIDDEN$1][tag] = false;
        setSymbolDesc$1(this, tag, _propertyDesc$1(1, value));
      };

      if (_descriptors$1 && setter$1) setSymbolDesc$1(ObjectProto$3, tag, {
        configurable: true,
        set: $set
      });
      return wrap$2(tag);
    };

    _redefine$1($Symbol$1[PROTOTYPE$5], 'toString', function toString() {
      return this._k;
    });
    _objectGopd$1.f = $getOwnPropertyDescriptor$2;
    _objectDp$1.f = $defineProperty$1;
    _objectGopn$1.f = _objectGopnExt$1.f = $getOwnPropertyNames$1;
    _objectPie$1.f = $propertyIsEnumerable$1;
    _objectGops$1.f = $getOwnPropertySymbols$1;

    if (_descriptors$1 && !_library$1) {
      _redefine$1(ObjectProto$3, 'propertyIsEnumerable', $propertyIsEnumerable$1, true);
    }

    _wksExt$1.f = function (name) {
      return wrap$2(_wks$1(name));
    };
  }

  _export$1(_export$1.G + _export$1.W + _export$1.F * !USE_NATIVE$3, {
    Symbol: $Symbol$1
  });

  for (var es6Symbols$1 = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j$2 = 0; es6Symbols$1.length > j$2;) {
    _wks$1(es6Symbols$1[j$2++]);
  }

  for (var wellKnownSymbols$1 = _objectKeys$1(_wks$1.store), k$1 = 0; wellKnownSymbols$1.length > k$1;) {
    _wksDefine$1(wellKnownSymbols$1[k$1++]);
  }

  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$3, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
      return _has$1(SymbolRegistry$1, key += '') ? SymbolRegistry$1[key] : SymbolRegistry$1[key] = $Symbol$1(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol$1(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry$1) {
        if (SymbolRegistry$1[key] === sym) return key;
      }
    },
    useSetter: function useSetter() {
      setter$1 = true;
    },
    useSimple: function useSimple() {
      setter$1 = false;
    }
  });
  _export$1(_export$1.S + _export$1.F * !USE_NATIVE$3, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create$1,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty$1,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties$1,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames$1,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols$1
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  var FAILS_ON_PRIMITIVES$1 = _fails$1(function () {
    _objectGops$1.f(1);
  });
  _export$1(_export$1.S + _export$1.F * FAILS_ON_PRIMITIVES$1, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops$1.f(_toObject$1(it));
    }
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])

  $JSON$1 && _export$1(_export$1.S + _export$1.F * (!USE_NATIVE$3 || _fails$1(function () {
    var S = $Symbol$1(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify$1([S]) != '[null]' || _stringify$1({
      a: S
    }) != '{}' || _stringify$1(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      $replacer = replacer = args[1];
      if (!_isObject$1(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined

      if (!_isArray$1(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol$1(value)) return value;
      };
      args[1] = replacer;
      return _stringify$1.apply($JSON$1, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol$1[PROTOTYPE$5][TO_PRIMITIVE$2] || _hide$1($Symbol$1[PROTOTYPE$5], TO_PRIMITIVE$2, $Symbol$1[PROTOTYPE$5].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag$1($Symbol$1, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

  _setToStringTag$1(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

  _setToStringTag$1(_global$1.JSON, 'JSON', true);

  _wksDefine$1('asyncIterator');

  _wksDefine$1('observable');

  var symbol = _core$1.Symbol;

  var symbol$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": symbol,
      __esModule: true
    };
  });
  unwrapExports(symbol$1);

  var _typeof_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _iterator2 = _interopRequireDefault(iterator$1);

    var _symbol2 = _interopRequireDefault(symbol$1);

    var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof(obj);
    } : function (obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    };
  });

  unwrapExports(_typeof_1);

  var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
    };
  });
  unwrapExports(possibleConstructorReturn);

  var $getOwnPropertyDescriptor$3 = _objectGopd$1.f;
  _objectSap$1('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor$3(_toIobject$1(it), key);
    };
  });

  var $Object$1 = _core$1.Object;

  var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    return $Object$1.getOwnPropertyDescriptor(it, key);
  };

  var getOwnPropertyDescriptor$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getOwnPropertyDescriptor,
      __esModule: true
    };
  });
  unwrapExports(getOwnPropertyDescriptor$1);

  var get$1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _getOwnPropertyDescriptor2 = _interopRequireDefault(getOwnPropertyDescriptor$1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

      if (desc === undefined) {
        var parent = (0, _getPrototypeOf2.default)(object);

        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;

        if (getter === undefined) {
          return undefined;
        }

        return getter.call(receiver);
      }
    };
  });
  unwrapExports(get$1);

  /* eslint-disable no-proto */

  var check$1 = function check(O, proto) {
    _anObject$1(O);
    if (!_isObject$1(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto$1 = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx$1(Function.call, _objectGopd$1.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check$1(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check$1
  };

  _export$1(_export$1.S, 'Object', {
    setPrototypeOf: _setProto$1.set
  });

  var setPrototypeOf$1 = _core$1.Object.setPrototypeOf;

  var setPrototypeOf$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": setPrototypeOf$1,
      __esModule: true
    };
  });
  unwrapExports(setPrototypeOf$2);

  _export$1(_export$1.S, 'Object', {
    create: _objectCreate$1
  });

  var $Object$2 = _core$1.Object;

  var create = function create(P, D) {
    return $Object$2.create(P, D);
  };

  var create$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": create,
      __esModule: true
    };
  });
  unwrapExports(create$1);

  var inherits = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;

    var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$2);

    var _create2 = _interopRequireDefault(create$1);

    var _typeof3 = _interopRequireDefault(_typeof_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    exports.default = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }

      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
  });
  unwrapExports(inherits);

  var audioBufferLoader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _get3 = _interopRequireDefault(get$1);

    var _inherits3 = _interopRequireDefault(inherits);

    var _promise3 = _interopRequireDefault(promise$1);

    var _loader2 = _interopRequireDefault(loader);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error('WebAudio API not supported');
    var audioContext = new AudioContext();
    var silentBuffer = new Uint32Array([0x46464952, 0x00000038, 0x45564157, 0x20746d66, 0x00000010, 0x00010001, 0x0000ac44, 0x00015888, 0x00100002, 0x61746164, 0x00000014, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000, 0x00000000]).buffer;

    var noop = function noop() {}; // @todo - review to allow to use external audioContext


    var _decodeAudioData = audioContext.decodeAudioData;
    var promise = audioContext.decodeAudioData(silentBuffer, noop, noop); // implement non promised base decode audio data

    if (!promise) {
      _decodeAudioData = function decodeAudioData(arraybuffer) {
        return new _promise3.default(function (resolve, reject) {
          audioContext.decodeAudioData(arraybuffer, function (buffer) {
            resolve(buffer);
          }, function (err) {
            reject(new Error('Unable to decode audio data'));
          });
        });
      };
    }
    /**
     * AudioBufferLoader
     * Promise based implementation of XMLHttpRequest Level 2 for GET method and
     * decode audio data for arraybuffer.
     */


    var AudioBufferLoader = function (_Loader) {
      (0, _inherits3.default)(AudioBufferLoader, _Loader);
      /**
       * Set the responseType to 'arraybuffer' and initialize options.
       * @param {string} [responseType="arraybuffer"]
       */

      function AudioBufferLoader() {
        var responseType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arraybuffer';
        (0, _classCallCheck3.default)(this, AudioBufferLoader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AudioBufferLoader.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader)).call(this, responseType));

        _this.options = {
          wrapAroundExtension: 0
        };
        _this.responseType = responseType;
        _this.audioContext = audioContext;
        _this.decodeAudioData = _this.decodeAudioData.bind(_this);
        return _this;
      }
      /**
       * Allow to set the audio context that should be used in order to decode
       * the file and create the AudioBuffer.
       * @param {AudioContext} audioContext
       */


      (0, _createClass3.default)(AudioBufferLoader, [{
        key: 'setAudioContext',
        value: function setAudioContext(audioContext) {
          this.audioContext = audioContext;
        }
        /**
         * Method for promise audio file loading and decoding.
         * @param {(string|string[])} fileURLs - The URL(s) of the audio files to load.
         *  Accepts a URL pointing to the file location or an array of URLs.
         * @param {{wrapAroundExtension: number}} [options] - Object with a
         *  wrapAroundExtension key which set the length, in seconds to be copied from
         *  the begining at the end of the returned AudioBuffer
         * @returns {Promise}
         */

      }, {
        key: 'load',
        value: function load(fileURLs) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.options = options;
          this.options.wrapAroundExtension = this.options.wrapAroundExtension || 0;
          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'load', this).call(this, fileURLs);
        }
        /**
         * Load a single audio file, decode it in an AudioBuffer, return a Promise
         * @private
         * @param {string} fileURL - The URL of the audio file location to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadOne',
        value: function loadOne(fileURL) {
          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'loadOne', this).call(this, fileURL).then(this.decodeAudioData).catch(function (err) {
            throw err;
          });
        }
        /**
         * Load all audio files at once in a single array, decode them in an array of
         * AudioBuffers, and return a Promise.
         * @private
         * @param {string[]} fileURLs - The URLs array of the audio files to load.
         * @returns {Promise}
         */

      }, {
        key: 'loadAll',
        value: function loadAll(fileURLs) {
          var _this2 = this;

          return (0, _get3.default)(AudioBufferLoader.prototype.__proto__ || (0, _getPrototypeOf2.default)(AudioBufferLoader.prototype), 'loadAll', this).call(this, fileURLs).then(function (arraybuffers) {
            var promises = arraybuffers.map(function (arraybuffer) {
              return _this2.decodeAudioData(arraybuffer);
            });
            return _promise3.default.all(promises);
          }).catch(function (err) {
            throw err;
          });
        }
        /**
         * Decode Audio Data, return a Promise
         * @private
         * @param {arraybuffer} - The arraybuffer of the loaded audio file to be decoded.
         * @returns {Promise}
         */

      }, {
        key: 'decodeAudioData',
        value: function decodeAudioData(arraybuffer) {
          var _this3 = this;

          if (arraybuffer instanceof ArrayBuffer) {
            var _promise = _decodeAudioData.call(audioContext, arraybuffer);

            _promise.then(function (buffer) {
              if (_this3.options.wrapAroundExtension !== 0) buffer = _this3.__wrapAround(buffer);
              return _promise3.default.resolve(buffer);
            }).catch(function (err) {
              throw new Error('Unable to decode audio data');
            });

            return _promise;
          } else {
            return _promise3.default.resolve(arraybuffer);
          }
        }
        /**
         * WrapAround, copy the begining input buffer to the end of an output buffer
         * @private
         * @param {arraybuffer} inBuffer {arraybuffer} - The input buffer
         * @returns {arraybuffer} - The processed buffer (with frame copied from the begining to the end)
         */

      }, {
        key: '__wrapAround',
        value: function __wrapAround(inBuffer) {
          var numberOfChannels = inBuffer.numberOfChannels,
              sampleRate = inBuffer.sampleRate,
              length = inBuffer.length;
          var outLength = length + this.options.wrapAroundExtension * sampleRate;
          var outBuffer = this.audioContext.createBuffer(numberOfChannels, outLength, sampleRate);

          for (var channel = 0; channel < numberOfChannels; channel++) {
            var channelData = inBuffer.getChannelData(channel);
            var outData = outBuffer.getChannelData(channel);
            var inLength = inBuffer.length;

            for (var i = 0; i < outLength; i++) {
              if (i < inLength) outData[i] = channelData[i];else outData[i] = channelData[i - inLength];
            }
          }

          return outBuffer;
        }
      }]);
      return AudioBufferLoader;
    }(_loader2.default);

    exports.default = AudioBufferLoader;
  });
  unwrapExports(audioBufferLoader);

  var superLoader = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _audioBufferLoader2 = _interopRequireDefault(audioBufferLoader);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * SuperLoader
     * Helper to load multiple type of files, and get them in their useful type, json for json files, AudioBuffer for audio files.
     */


    var SuperLoader = function (_AudioBufferLoader) {
      (0, _inherits3.default)(SuperLoader, _AudioBufferLoader);
      /**
       * Use composition to setup appropriate file loaders
       */

      function SuperLoader() {
        (0, _classCallCheck3.default)(this, SuperLoader);
        return (0, _possibleConstructorReturn3.default)(this, (SuperLoader.__proto__ || (0, _getPrototypeOf2.default)(SuperLoader)).call(this, null)); // bypass AudioBufferLoader constructor. This is bad but it works.
      }

      return SuperLoader;
    }(_audioBufferLoader2.default);

    exports.default = SuperLoader;
  });
  unwrapExports(superLoader);

  var dist = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'Loader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(loader).default;
      }
    });
    Object.defineProperty(exports, 'AudioBufferLoader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(audioBufferLoader).default;
      }
    });
    Object.defineProperty(exports, 'SuperLoader', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(superLoader).default;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });
  var loaders = unwrapExports(dist);

  var TimeEngine_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * Base class for time engines
     *
     * A time engine generates more or less regular events and/or plays back a
     * media stream. It implements one or multiple interfaces to be driven by a
     * master (i.e. a Scheduler, a Transport or a PlayControl) in synchronization
     * with other engines. The provided interfaces are scheduled, transported,
     * and play-controlled.
     *
     *
     * #### The `scheduled` interface
     *
     * The scheduled interface allows for synchronizing an engine to a monotonous time
     * as it is provided by the Scheduler master.
     *
     * ###### `advanceTime(time :Number) -> {Number}`
     *
     * The `advanceTime` method has to be implemented by an `TimeEngine` as part of the
     * scheduled interface. The method is called by the master (e.g. the scheduler).
     * It generates an event and to returns the time of the next event (i.e. the next
     * call of advanceTime). The returned time has to be greater than the time
     * received as argument of the method. In case that a TimeEngine has to generate
     * multiple events at the same time, the engine has to implement its own loop
     * while(event.time <= time) and return the time of the next event (if any).
     *
     * ###### `resetTime(time=undefined :Number)`
     *
     * The `resetTime` method is provided by the `TimeEngine` base class. An engine may
     * call this method to reset its next event time (e.g. when a parameter is
     * changed that influences the engine's temporal behavior). When no argument
     * is given, the time is reset to the current master time. When calling the
     * method with Infinity the engine is suspended without being removed from the
     * master.
     *
     *
     * #### The `transported` interface
     *
     * The transported interface allows for synchronizing an engine to a position
     * (i.e. media playback time) that can run forward and backward and jump as it
     * is provided by the Transport master.
     *
     * ###### `syncPosition(time :Number, position :Number, speed :Number) -> {Number}`
     *
     * The `syncPositon` method has to be implemented by a `TimeEngine` as part of the
     * transported interface. The method syncPositon is called whenever the master
     * of a transported engine has to (re-)synchronize the engine's position. This
     * is for example required when the master (re-)starts playback, jumps to an
     * arbitrary position, and when reversing playback direction. The method returns
     * the next position of the engine in the given playback direction
     * (i.e. `speed < 0` or `speed > 0`).
     *
     * ###### `advancePosition(time :Number, position :Number, speed :Number) -> {Number}`
     *
     * The `advancePosition` method has to be implemented by a `TimeEngine` as part
     * of the transported interface. The master calls the advancePositon method when
     * the engine's event position is reached. The method generates an event and
     * returns the next position in the given playback direction (i.e. speed < 0 or
     * speed > 0). The returned position has to be greater (i.e. when speed > 0)
     * or less (i.e. when speed < 0) than the position received as argument of the
     * method.
     *
     * ###### `resetPosition(position=undefined :Number)`
     *
     * The resetPosition method is provided by the TimeEngine base class. An engine
     * may call this method to reset its next event position. When no argument
     * is given, the time is reset to the current master time. When calling the
     * method with Infinity the engine is suspended without being removed from
     * the master.
     *
     *
     * #### The speed-controlled interface
     *
     * The "speed-controlled" interface allows for syncronizing an engine that is
     * neither driven through the scheduled nor the transported interface. The
     * interface allows in particular to synchronize engines that assure their own
     * scheduling (i.e. audio player or an oscillator) to the event-based scheduled
     * and transported engines.
     *
     * ###### `syncSpeed(time :Number, position :Number, speed :Number, seek=false :Boolean)`
     *
     * The syncSpeed method has to be implemented by a TimeEngine as part of the
     * speed-controlled interface. The method is called by the master whenever the
     * playback speed changes or the position jumps arbitarily (i.e. on a seek).
     *
     *
     * <hr />
     *
     * Example that shows a `TimeEngine` running in a `Scheduler` that counts up
     * at a given frequency:
     * {@link https://rawgit.com/wavesjs/waves-audio/master/examples/time-engine.html}
     *
     * @example
     * import * as audio from 'waves-audio';
     *
     * class MyEngine extends audio.TimeEngine {
     *   constructor() {
     *     super();
     *     // ...
     *   }
     * }
     *
     */


    var TimeEngine = function () {
      function TimeEngine() {
        (0, _classCallCheck3.default)(this, TimeEngine);
        /**
         * The engine's master.
         *
         * @type {Mixed}
         * @name master
         * @memberof TimeEngine
         */

        this.master = null;
      }
      /**
       * The time engine's current (master) time.
       *
       * @type {Number}
       * @memberof TimeEngine
       * @readonly
       */


      (0, _createClass3.default)(TimeEngine, [{
        key: "resetTime",
        value: function resetTime() {
          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.master) this.master.resetEngineTime(this, time);
        }
        /**
         * Transported interface
         *   - syncPosition(time, position, speed), called to reposition TimeEngine, returns next position
         *   - advancePosition(time, position, speed), called to generate next event at given time and position, returns next position
         *
         * @static
         * @memberof TimeEngine
         */

      }, {
        key: "resetPosition",
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.master) this.master.resetEnginePosition(this, position);
        }
        /**
         * Speed-controlled interface
         *   - syncSpeed(time, position, speed, ), called to
         *
         * @static
         * @memberof TimeEngine
         */

      }, {
        key: "currentTime",
        get: function get() {
          if (this.master) return this.master.currentTime;
          return undefined;
        }
        /**
         * The time engine's current (master) audio time.
         *
         * @type {Number}
         * @memberof TimeEngine
         * @readonly
         */

      }, {
        key: "audioTime",
        get: function get() {
          if (this.master) return this.master.audioTime;
          return undefined;
        }
        /**
         * The time engine's current (master) position.
         *
         * @type {Number}
         * @memberof TimeEngine
         * @readonly
         */

      }, {
        key: "currentPosition",
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return undefined;
        }
        /**
         * Scheduled interface
         *   - advanceTime(time), called to generate next event at given time, returns next time
         *
         * @static
         * @memberof TimeEngine
         */

      }], [{
        key: "implementsScheduled",
        value: function implementsScheduled(engine) {
          return engine.advanceTime && engine.advanceTime instanceof Function;
        }
      }, {
        key: "implementsTransported",
        value: function implementsTransported(engine) {
          return engine.syncPosition && engine.syncPosition instanceof Function && engine.advancePosition && engine.advancePosition instanceof Function;
        }
      }, {
        key: "implementsSpeedControlled",
        value: function implementsSpeedControlled(engine) {
          return engine.syncSpeed && engine.syncSpeed instanceof Function;
        }
      }]);
      return TimeEngine;
    }();

    exports.default = TimeEngine;
  });
  unwrapExports(TimeEngine_1);

  var PriorityQueue_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    } // works by reference


    function swap(arr, i1, i2) {
      var tmp = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = tmp;
    } // https://jsperf.com/js-for-loop-vs-array-indexof/346


    function indexOf(arr, el) {
      var l = arr.length; // ignore first element as it can't be a entry

      for (var i = 1; i < l; i++) {
        if (arr[i] === el) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Define if `time1` should be lower in the topography than `time2`.
     * Is dynamically affected to the priority queue according to handle `min` and `max` heap.
     *
     * @private
     * @param {Number} time1
     * @param {Number} time2
     * @return {Boolean}
     */


    var _isLowerMaxHeap = function _isLowerMaxHeap(time1, time2) {
      return time1 < time2;
    };

    var _isLowerMinHeap = function _isLowerMinHeap(time1, time2) {
      return time1 > time2;
    };
    /**
     * Define if `time1` should be higher in the topography than `time2`.
     * Is dynamically affected to the priority queue according to handle `min` and `max` heap.
     *
     * @private
     * @param {Number} time1
     * @param {Number} time2
     * @return {Boolean}
     */


    var _isHigherMaxHeap = function _isHigherMaxHeap(time1, time2) {
      return time1 > time2;
    };

    var _isHigherMinHeap = function _isHigherMinHeap(time1, time2) {
      return time1 < time2;
    };

    var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    /**
     * Priority queue implementing a binary heap.
     * Acts as a min heap by default, can be dynamically changed to a max heap
     * by setting `reverse` to true.
     *
     * _note_: the queue creates and maintains a new property (i.e. `queueTime`)
     * to each object added.
     *
     * @param {Number} [heapLength=100] - Default size of the array used to create the heap.
     */

    var PriorityQueue = function () {
      function PriorityQueue() {
        var heapLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
        (0, _classCallCheck3.default)(this, PriorityQueue);
        /**
         * Pointer to the first empty index of the heap.
         * @type {Number}
         * @memberof PriorityQueue
         * @name _currentLength
         * @private
         */

        this._currentLength = 1;
        /**
         * Array of the sorted indexes of the entries, the actual heap. Ignore the index 0.
         * @type {Array}
         * @memberof PriorityQueue
         * @name _heap
         * @private
         */

        this._heap = new Array(heapLength + 1);
        /**
         * Type of the queue: `min` heap if `false`, `max` heap if `true`
         * @type {Boolean}
         * @memberof PriorityQueue
         * @name _reverse
         * @private
         */

        this._reverse = null; // initialize compare functions

        this.reverse = false;
      }
      /**
       * Time of the first element in the binary heap.
       * @returns {Number}
       */


      (0, _createClass3.default)(PriorityQueue, [{
        key: "_bubbleUp",

        /**
         * Fix the heap by moving an entry to a new upper position.
         *
         * @private
         * @param {Number} startIndex - The index of the entry to move.
         */
        value: function _bubbleUp(startIndex) {
          var entry = this._heap[startIndex];
          var index = startIndex;
          var parentIndex = Math.floor(index / 2);
          var parent = this._heap[parentIndex];

          while (parent && this._isHigher(entry.queueTime, parent.queueTime)) {
            swap(this._heap, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor(index / 2);
            parent = this._heap[parentIndex];
          }
        }
        /**
         * Fix the heap by moving an entry to a new lower position.
         *
         * @private
         * @param {Number} startIndex - The index of the entry to move.
         */

      }, {
        key: "_bubbleDown",
        value: function _bubbleDown(startIndex) {
          var entry = this._heap[startIndex];
          var index = startIndex;
          var c1index = index * 2;
          var c2index = c1index + 1;
          var child1 = this._heap[c1index];
          var child2 = this._heap[c2index];

          while (child1 && this._isLower(entry.queueTime, child1.queueTime) || child2 && this._isLower(entry.queueTime, child2.queueTime)) {
            // swap with the minimum child
            var targetIndex = void 0;
            if (child2) targetIndex = this._isHigher(child1.queueTime, child2.queueTime) ? c1index : c2index;else targetIndex = c1index;
            swap(this._heap, index, targetIndex); // update to find next children

            index = targetIndex;
            c1index = index * 2;
            c2index = c1index + 1;
            child1 = this._heap[c1index];
            child2 = this._heap[c2index];
          }
        }
        /**
         * Build the heap (from bottom up).
         */

      }, {
        key: "buildHeap",
        value: function buildHeap() {
          // find the index of the last internal node
          // @todo - make sure that's the right way to do.
          var maxIndex = Math.floor((this._currentLength - 1) / 2);

          for (var i = maxIndex; i > 0; i--) {
            this._bubbleDown(i);
          }
        }
        /**
         * Insert a new object in the binary heap and sort it.
         *
         * @param {Object} entry - Entry to insert.
         * @param {Number} time - Time at which the entry should be orderer.
         * @returns {Number} - Time of the first entry in the heap.
         */

      }, {
        key: "insert",
        value: function insert(entry, time) {
          if (Math.abs(time) !== POSITIVE_INFINITY) {
            entry.queueTime = time; // add the new entry at the end of the heap

            this._heap[this._currentLength] = entry; // bubble it up

            this._bubbleUp(this._currentLength);

            this._currentLength += 1;
            return this.time;
          }

          entry.queueTime = undefined;
          return this.remove(entry);
        }
        /**
         * Move a given entry to a new position.
         *
         * @param {Object} entry - Entry to move.
         * @param {Number} time - Time at which the entry should be orderer.
         * @return {Number} - Time of first entry in the heap.
         */

      }, {
        key: "move",
        value: function move(entry, time) {
          if (Math.abs(time) !== POSITIVE_INFINITY) {
            var index = indexOf(this._heap, entry);

            if (index !== -1) {
              entry.queueTime = time; // define if the entry should be bubbled up or down

              var parent = this._heap[Math.floor(index / 2)];

              if (parent && this._isHigher(time, parent.queueTime)) this._bubbleUp(index);else this._bubbleDown(index);
            }

            return this.time;
          }

          entry.queueTime = undefined;
          return this.remove(entry);
        }
        /**
         * Remove an entry from the heap and fix the heap.
         *
         * @param {Object} entry - Entry to remove.
         * @return {Number} - Time of first entry in the heap.
         */

      }, {
        key: "remove",
        value: function remove(entry) {
          // find the index of the entry
          var index = indexOf(this._heap, entry);

          if (index !== -1) {
            var lastIndex = this._currentLength - 1; // if the entry is the last one

            if (index === lastIndex) {
              // remove the element from heap
              this._heap[lastIndex] = undefined; // update current length

              this._currentLength = lastIndex;
              return this.time;
            } else {
              // swap with the last element of the heap
              swap(this._heap, index, lastIndex); // remove the element from heap

              this._heap[lastIndex] = undefined;

              if (index === 1) {
                this._bubbleDown(1);
              } else {
                // bubble the (ex last) element up or down according to its new context
                var _entry = this._heap[index];

                var parent = this._heap[Math.floor(index / 2)];

                if (parent && this._isHigher(_entry.queueTime, parent.queueTime)) this._bubbleUp(index);else this._bubbleDown(index);
              }
            } // update current length


            this._currentLength = lastIndex;
          }

          return this.time;
        }
        /**
         * Clear the queue.
         */

      }, {
        key: "clear",
        value: function clear() {
          this._currentLength = 1;
          this._heap = new Array(this._heap.length);
        }
        /**
         * Defines if the queue contains the given `entry`.
         *
         * @param {Object} entry - Entry to be checked
         * @return {Boolean}
         */

      }, {
        key: "has",
        value: function has(entry) {
          return this._heap.indexOf(entry) !== -1;
        }
      }, {
        key: "time",
        get: function get() {
          if (this._currentLength > 1) return this._heap[1].queueTime;
          return Infinity;
        }
        /**
         * First element in the binary heap.
         * @returns {Number}
         * @readonly
         */

      }, {
        key: "head",
        get: function get() {
          return this._heap[1];
        }
        /**
         * Change the order of the queue (max heap if true, min heap if false),
         * rebuild the heap with the existing entries.
         *
         * @type {Boolean}
         */

      }, {
        key: "reverse",
        set: function set(value) {
          if (value !== this._reverse) {
            this._reverse = value;

            if (this._reverse === true) {
              this._isLower = _isLowerMaxHeap;
              this._isHigher = _isHigherMaxHeap;
            } else {
              this._isLower = _isLowerMinHeap;
              this._isHigher = _isHigherMinHeap;
            }

            this.buildHeap();
          }
        },
        get: function get() {
          return this._reverse;
        }
      }]);
      return PriorityQueue;
    }();

    exports.default = PriorityQueue;
  });
  unwrapExports(PriorityQueue_1);

  var core_getIterator = _core$1.getIterator = function (it) {
    var iterFn = core_getIteratorMethod$1(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return _anObject$1(iterFn.call(it));
  };

  var getIterator = core_getIterator;

  var getIterator$1 = createCommonjsModule(function (module) {
    module.exports = {
      "default": getIterator,
      __esModule: true
    };
  });
  unwrapExports(getIterator$1);

  var _validateCollection$1 = function _validateCollection(it, TYPE) {
    if (!_isObject$1(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$8 = _objectDp$1.f;
  var fastKey$1 = _meta$1.fastKey;
  var SIZE$1 = _descriptors$1 ? '_s' : 'size';

  var getEntry$1 = function getEntry(that, key) {
    // fast case
    var index = fastKey$1(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong$1 = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance$1(that, C, NAME, '_i');
        that._t = NAME; // collection type

        that._i = _objectCreate$1(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE$1] = 0; // size

        if (iterable != undefined) _forOf$1(iterable, IS_MAP, that[ADDER], that);
      });
      _redefineAll$1(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection$1(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE$1] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = _validateCollection$1(this, NAME);
          var entry = getEntry$1(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE$1]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection$1(this, NAME);
          var f = _ctx$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry$1(_validateCollection$1(this, NAME), key);
        }
      });
      if (_descriptors$1) dP$8(C.prototype, 'size', {
        get: function get() {
          return _validateCollection$1(this, NAME)[SIZE$1];
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var entry = getEntry$1(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey$1(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE$1]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry$1,
    setStrong: function setStrong(C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine$1(C, NAME, function (iterated, kind) {
        this._t = _validateCollection$1(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) {
          entry = entry.p;
        } // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep$1(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep$1(0, entry.k);
        if (kind == 'values') return _iterStep$1(0, entry.v);
        return _iterStep$1(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      _setSpecies$1(NAME);
    }
  };

  var SPECIES$6 = _wks$1('species');

  var _arraySpeciesConstructor$1 = function _arraySpeciesConstructor(original) {
    var C;

    if (_isArray$1(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray$1(C.prototype))) C = undefined;

      if (_isObject$1(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  };

  var _arraySpeciesCreate$1 = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor$1(original))(length);
  };

  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex

  var _arrayMethods$1 = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate$1;
    return function ($this, callbackfn, that) {
      var O = _toObject$1($this);
      var self = _iobject$1(O);
      var f = _ctx$1(callbackfn, that, 3);
      var length = _toLength$1(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);

          if (TYPE) {
            if (IS_MAP) result[index] = res; // map
            else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var dP$9 = _objectDp$1.f;
  var each = _arrayMethods$1(0);

  var _collection$1 = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global$1[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    if (!_descriptors$1 || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails$1(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      _redefineAll$1(C.prototype, methods);
      _meta$1.NEED = true;
    } else {
      C = wrapper(function (target, iterable) {
        _anInstance$1(target, C, NAME, '_c');
        target._c = new Base();
        if (iterable != undefined) _forOf$1(iterable, IS_MAP, target[ADDER], target);
      });
      each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide$1(C.prototype, KEY, function (a, b) {
          _anInstance$1(this, C, KEY);
          if (!IS_ADDER && IS_WEAK && !_isObject$1(a)) return KEY == 'get' ? undefined : false;

          var result = this._c[KEY](a === 0 ? 0 : a, b);

          return IS_ADDER ? this : result;
        });
      });
      IS_WEAK || dP$9(C.prototype, 'size', {
        get: function get() {
          return this._c.size;
        }
      });
    }

    _setToStringTag$1(C, NAME);
    O[NAME] = C;
    _export$1(_export$1.G + _export$1.W + _export$1.F, O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var SET$1 = 'Set'; // 23.2 Set Objects

  var es6_set$1 = _collection$1(SET$1, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong$1.def(_validateCollection$1(this, SET$1), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong$1);

  var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
    var result = [];
    _forOf$1(iter, false, result.push, result, ITERATOR);
    return result;
  };

  var _collectionToJson = function _collectionToJson(NAME) {
    return function toJSON() {
      if (_classof$1(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return _arrayFromIterable(this);
    };
  };

  _export$1(_export$1.P + _export$1.R, 'Set', {
    toJSON: _collectionToJson('Set')
  });

  var _setCollectionOf = function _setCollectionOf(COLLECTION) {
    _export$1(_export$1.S, COLLECTION, {
      of: function of() {
        var length = arguments.length;
        var A = new Array(length);

        while (length--) {
          A[length] = arguments[length];
        }

        return new this(A);
      }
    });
  };

  _setCollectionOf('Set');

  var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
    _export$1(_export$1.S, COLLECTION, {
      from: function from(source
      /* , mapFn, thisArg */
      ) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;
        _aFunction$1(this);
        mapping = mapFn !== undefined;
        if (mapping) _aFunction$1(mapFn);
        if (source == undefined) return new this();
        A = [];

        if (mapping) {
          n = 0;
          cb = _ctx$1(mapFn, arguments[2], 2);
          _forOf$1(source, false, function (nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          _forOf$1(source, false, A.push, A);
        }

        return new this(A);
      }
    });
  };

  _setCollectionFrom('Set');

  var set$1 = _core$1.Set;

  var set$2 = createCommonjsModule(function (module) {
    module.exports = {
      "default": set$1,
      __esModule: true
    };
  });
  unwrapExports(set$2);

  var SchedulingQueue_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getIterator3 = _interopRequireDefault(getIterator$1);

    var _set2 = _interopRequireDefault(set$2);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _PriorityQueue2 = _interopRequireDefault(PriorityQueue_1);

    var _TimeEngine3 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    /**
     * @class SchedulingQueue
     * @extends TimeEngine
     */

    /**
     * SchedulingQueue base class
     * http://wavesjs.github.io/audio/#audio-scheduling-queue
     *
     * Norbert.Schnell@ircam.fr
     * Copyright 2014, 2015 IRCAM – Centre Pompidou
     */


    var SchedulingQueue = function (_TimeEngine) {
      (0, _inherits3.default)(SchedulingQueue, _TimeEngine);

      function SchedulingQueue() {
        (0, _classCallCheck3.default)(this, SchedulingQueue);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(SchedulingQueue)).call(this));

        _this.__queue = new _PriorityQueue2.default();
        _this.__engines = new _set2.default();
        return _this;
      } // TimeEngine 'scheduled' interface


      (0, _createClass3.default)(SchedulingQueue, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var engine = this.__queue.head;
          var nextEngineTime = engine.advanceTime(time);

          if (!nextEngineTime) {
            engine.master = null;

            this.__engines.delete(engine);

            this.__queue.remove(engine);
          } else {
            this.__queue.move(engine, nextEngineTime);
          }

          return this.__queue.time;
        } // TimeEngine master method to be implemented by derived class

      }, {
        key: 'defer',
        // call a function at a given time
        value: function defer(fun) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!(fun instanceof Function)) throw new Error("object cannot be defered by scheduler");
          this.add({
            advanceTime: function advanceTime(time) {
              fun(time);
            } // make sure that the advanceTime method does not returm anything

          }, time);
        } // add a time engine to the scheduler

      }, {
        key: 'add',
        value: function add(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!_TimeEngine3.default.implementsScheduled(engine)) throw new Error("object cannot be added to scheduler");
          if (engine.master) throw new Error("object has already been added to a master");
          engine.master = this; // add to engines and queue

          this.__engines.add(engine);

          var nextTime = this.__queue.insert(engine, time); // reschedule queue


          this.resetTime(nextTime);
        } // remove a time engine from the queue

      }, {
        key: 'remove',
        value: function remove(engine) {
          if (engine.master !== this) throw new Error("object has not been added to this scheduler");
          engine.master = null; // remove from array and queue

          this.__engines.delete(engine);

          var nextTime = this.__queue.remove(engine); // reschedule queue


          this.resetTime(nextTime);
        } // reset next engine time

      }, {
        key: 'resetEngineTime',
        value: function resetEngineTime(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (engine.master !== this) throw new Error("object has not been added to this scheduler");
          var nextTime = void 0;
          if (this.__queue.has(engine)) nextTime = this.__queue.move(engine, time);else nextTime = this.__queue.insert(engine, time);
          this.resetTime(nextTime);
        } // check whether a given engine is scheduled

      }, {
        key: 'has',
        value: function has(engine) {
          return this.__engines.has(engine);
        } // clear queue

      }, {
        key: 'clear',
        value: function clear() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.__engines), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var engine = _step.value;
              engine.master = null;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.__queue.clear();

          this.__engines.clear();

          this.resetTime(Infinity);
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return 0;
        }
      }]);
      return SchedulingQueue;
    }(_TimeEngine3.default);

    exports.default = SchedulingQueue;
  });
  unwrapExports(SchedulingQueue_1);

  var PlayControl_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _get3 = _interopRequireDefault(get$1);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    var _TimeEngine5 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var EPSILON = 1e-8;

    var LoopControl = function (_TimeEngine) {
      (0, _inherits3.default)(LoopControl, _TimeEngine);

      function LoopControl(playControl) {
        (0, _classCallCheck3.default)(this, LoopControl);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LoopControl.__proto__ || (0, _getPrototypeOf2.default)(LoopControl)).call(this));

        _this.__playControl = playControl;
        _this.speed = 1;
        _this.lower = -Infinity;
        _this.upper = Infinity;
        return _this;
      } // TimeEngine method (scheduled interface)


      (0, _createClass3.default)(LoopControl, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var playControl = this.__playControl;
          var speed = this.speed;
          var lower = this.lower;
          var upper = this.upper;
          if (speed > 0) time += EPSILON;else time -= EPSILON;

          if (speed > 0) {
            playControl.syncSpeed(time, lower, speed, true);
            return playControl.__getTimeAtPosition(upper) - EPSILON;
          } else if (speed < 0) {
            playControl.syncSpeed(time, upper, speed, true);
            return playControl.__getTimeAtPosition(lower) + EPSILON;
          }

          return Infinity;
        }
      }, {
        key: 'reschedule',
        value: function reschedule(speed) {
          var playControl = this.__playControl;
          var lower = Math.min(playControl.__loopStart, playControl.__loopEnd);
          var upper = Math.max(playControl.__loopStart, playControl.__loopEnd);
          this.speed = speed;
          this.lower = lower;
          this.upper = upper;
          if (lower === upper) speed = 0;
          if (speed > 0) this.resetTime(playControl.__getTimeAtPosition(upper) - EPSILON);else if (speed < 0) this.resetTime(playControl.__getTimeAtPosition(lower) + EPSILON);else this.resetTime(Infinity);
        }
      }, {
        key: 'applyLoopBoundaries',
        value: function applyLoopBoundaries(position, speed) {
          var lower = this.lower;
          var upper = this.upper;
          if (speed > 0 && position >= upper) return lower + (position - lower) % (upper - lower);else if (speed < 0 && position < lower) return upper - (upper - position) % (upper - lower);
          return position;
        }
      }]);
      return LoopControl;
    }(_TimeEngine5.default); // play controlled base class


    var PlayControlled = function () {
      function PlayControlled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlled);
        this.__playControl = playControl;
        engine.master = this;
        this.__engine = engine;
      }

      (0, _createClass3.default)(PlayControlled, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          this.__engine.syncSpeed(time, position, speed, seek);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__playControl = null;
          this.__engine.master = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlled;
    }(); // play control for engines implementing the *speed-controlled* interface


    var PlayControlledSpeedControlled = function (_PlayControlled) {
      (0, _inherits3.default)(PlayControlledSpeedControlled, _PlayControlled);

      function PlayControlledSpeedControlled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSpeedControlled);
        return (0, _possibleConstructorReturn3.default)(this, (PlayControlledSpeedControlled.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSpeedControlled)).call(this, playControl, engine));
      }

      return PlayControlledSpeedControlled;
    }(PlayControlled); // play control for engines implmenting the *transported* interface


    var PlayControlledTransported = function (_PlayControlled2) {
      (0, _inherits3.default)(PlayControlledTransported, _PlayControlled2);

      function PlayControlledTransported(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledTransported);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledTransported.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledTransported)).call(this, playControl, engine));

        _this3.__schedulerHook = new PlayControlledSchedulerHook(playControl, engine);
        return _this3;
      }

      (0, _createClass3.default)(PlayControlledTransported, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          if (speed !== lastSpeed || seek) {
            var nextPosition; // resync transported engines

            if (seek || speed * lastSpeed < 0) {
              // seek or reverse direction
              nextPosition = this.__engine.syncPosition(time, position, speed);
            } else if (lastSpeed === 0) {
              // start
              nextPosition = this.__engine.syncPosition(time, position, speed);
            } else if (speed === 0) {
              // stop / pause
              this.__engine.syncPosition(time, position, speed);

              nextPosition = Infinity; // if (this.__engine.syncSpeed)
              //   this.__engine.syncSpeed(time, position, 0);
            } else if (this.__engine.syncSpeed) {
              // change speed without reversing direction
              this.__engine.syncSpeed(time, position, speed);
            }

            this.__schedulerHook.resetPosition(nextPosition);
          }
        }
      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(engine) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          if (position === undefined) {
            var playControl = this.__playControl;

            var time = playControl.__sync();

            position = this.__engine.syncPosition(time, playControl.__position, playControl.__speed);
          }

          this.__schedulerHook.resetPosition(position);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__schedulerHook.destroy();

          this.__schedulerHook = null;
          (0, _get3.default)(PlayControlledTransported.prototype.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledTransported.prototype), 'destroy', this).call(this);
        }
      }]);
      return PlayControlledTransported;
    }(PlayControlled); // play control for time engines implementing the *scheduled* interface


    var PlayControlledScheduled = function (_PlayControlled3) {
      (0, _inherits3.default)(PlayControlledScheduled, _PlayControlled3);

      function PlayControlledScheduled(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledScheduled); // scheduling queue becomes master of engine

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledScheduled.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledScheduled)).call(this, playControl, engine));

        engine.master = null;
        _this4.__schedulingQueue = new PlayControlledSchedulingQueue(playControl, engine);
        return _this4;
      }

      (0, _createClass3.default)(PlayControlledScheduled, [{
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed, seek, lastSpeed) {
          if (lastSpeed === 0 && speed !== 0) // start or seek
            this.__engine.resetTime();else if (lastSpeed !== 0 && speed === 0) // stop
            this.__engine.resetTime(Infinity);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__schedulingQueue.destroy();

          (0, _get3.default)(PlayControlledScheduled.prototype.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledScheduled.prototype), 'destroy', this).call(this);
        }
      }]);
      return PlayControlledScheduled;
    }(PlayControlled); // translates transported engine advancePosition into global scheduler times


    var PlayControlledSchedulerHook = function (_TimeEngine2) {
      (0, _inherits3.default)(PlayControlledSchedulerHook, _TimeEngine2);

      function PlayControlledSchedulerHook(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSchedulerHook);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledSchedulerHook.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSchedulerHook)).call(this));

        _this5.__playControl = playControl;
        _this5.__engine = engine;
        _this5.__nextPosition = Infinity;

        playControl.__scheduler.add(_this5, Infinity);

        return _this5;
      }

      (0, _createClass3.default)(PlayControlledSchedulerHook, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var playControl = this.__playControl;
          var engine = this.__engine;
          var position = this.__nextPosition;
          var nextPosition = engine.advancePosition(time, position, playControl.__speed);

          var nextTime = playControl.__getTimeAtPosition(nextPosition);

          this.__nextPosition = nextPosition;
          return nextTime;
        }
      }, {
        key: 'resetPosition',
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__nextPosition;

          var time = this.__playControl.__getTimeAtPosition(position);

          this.__nextPosition = position;
          this.resetTime(time);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__playControl.__scheduler.remove(this);

          this.__playControl = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlledSchedulerHook;
    }(_TimeEngine5.default); // internal scheduling queue that returns the current position (and time) of the play control


    var PlayControlledSchedulingQueue = function (_SchedulingQueue) {
      (0, _inherits3.default)(PlayControlledSchedulingQueue, _SchedulingQueue);

      function PlayControlledSchedulingQueue(playControl, engine) {
        (0, _classCallCheck3.default)(this, PlayControlledSchedulingQueue);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (PlayControlledSchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(PlayControlledSchedulingQueue)).call(this));

        _this6.__playControl = playControl;
        _this6.__engine = engine;

        _this6.add(engine, Infinity);

        playControl.__scheduler.add(_this6, Infinity);

        return _this6;
      }

      (0, _createClass3.default)(PlayControlledSchedulingQueue, [{
        key: 'destroy',
        value: function destroy() {
          this.__playControl.__scheduler.remove(this);

          this.remove(this.__engine);
          this.__playControl = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__playControl.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__playControl.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__playControl.currentPosition;
        }
      }]);
      return PlayControlledSchedulingQueue;
    }(_SchedulingQueue3.default);
    /**
     * Extends Time Engine to provide playback control of a Time Engine instance.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-masters/master/examples/transport/index.html}
     *
     * @extends TimeEngine
     * @param {Object} scheduler - instance of Scheduler
     * @param {TimeEngine} engine - engine to control
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => {
     *   const now = process.hrtime();
     *   return now[0] + now[1] * 1e-9;
     * }
     * const scheduler = new masters.Scheduler(getTimeFunction);
     * const playerEngine = new MyTimeEngine();
     * const playControl = new masters.PlayControl(scheduler, playerEngine);
     *
     * playControl.start();
     */


    var PlayControl = function (_TimeEngine3) {
      (0, _inherits3.default)(PlayControl, _TimeEngine3);

      function PlayControl(scheduler, engine) {
        (0, _classCallCheck3.default)(this, PlayControl);

        var _this7 = (0, _possibleConstructorReturn3.default)(this, (PlayControl.__proto__ || (0, _getPrototypeOf2.default)(PlayControl)).call(this));

        _this7.__scheduler = scheduler;
        _this7.__playControlled = null;
        _this7.__loopControl = null;
        _this7.__loopStart = 0;
        _this7.__loopEnd = 1; // synchronized tie, position, and speed

        _this7.__time = 0;
        _this7.__position = 0;
        _this7.__speed = 0; // non-zero "user" speed

        _this7.__playingSpeed = 1;
        if (engine) _this7.__setEngine(engine);
        return _this7;
      }

      (0, _createClass3.default)(PlayControl, [{
        key: '__setEngine',
        value: function __setEngine(engine) {
          if (engine.master) throw new Error("object has already been added to a master");
          if (_TimeEngine5.default.implementsSpeedControlled(engine)) this.__playControlled = new PlayControlledSpeedControlled(this, engine);else if (_TimeEngine5.default.implementsTransported(engine)) this.__playControlled = new PlayControlledTransported(this, engine);else if (_TimeEngine5.default.implementsScheduled(engine)) this.__playControlled = new PlayControlledScheduled(this, engine);else throw new Error("object cannot be added to play control");
        }
      }, {
        key: '__resetEngine',
        value: function __resetEngine() {
          this.__playControlled.destroy();

          this.__playControlled = null;
        }
        /**
         * Calculate/extrapolate playing time for given position
         *
         * @param {Number} position position
         * @return {Number} extrapolated time
         * @private
         */

      }, {
        key: '__getTimeAtPosition',
        value: function __getTimeAtPosition(position) {
          return this.__time + (position - this.__position) / this.__speed;
        }
        /**
         * Calculate/extrapolate playing position for given time
         *
         * @param {Number} time time
         * @return {Number} extrapolated position
         * @private
         */

      }, {
        key: '__getPositionAtTime',
        value: function __getPositionAtTime(time) {
          return this.__position + (time - this.__time) * this.__speed;
        }
      }, {
        key: '__sync',
        value: function __sync() {
          var now = this.currentTime;
          this.__position += (now - this.__time) * this.__speed;
          this.__time = now;
          return now;
        }
        /**
         * Get current master time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'set',
        value: function set() {
          var engine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var time = this.__sync();

          var speed = this.__speed;

          if (this.__playControlled !== null && this.__playControlled.__engine !== engine) {
            this.syncSpeed(time, this.__position, 0);
            if (this.__playControlled) this.__resetEngine();

            if (this.__playControlled === null && engine !== null) {
              this.__setEngine(engine);

              if (speed !== 0) this.syncSpeed(time, this.__position, speed);
            }
          }
        }
        /**
         * Sets the play control loop behavior.
         *
         * @type {Boolean}
         * @name loop
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'setLoopBoundaries',

        /**
         * Sets loop start and end time.
         *
         * @param {Number} loopStart - loop start value.
         * @param {Number} loopEnd - loop end value.
         */
        value: function setLoopBoundaries(loopStart, loopEnd) {
          this.__loopStart = loopStart;
          this.__loopEnd = loopEnd;
          this.loop = this.loop;
        }
        /**
         * Sets loop start value
         *
         * @type {Number}
         * @name loopStart
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'syncSpeed',
        // TimeEngine method (speed-controlled interface)
        value: function syncSpeed(time, position, speed) {
          var seek = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var lastSpeed = this.__speed;

          if (speed !== lastSpeed || seek) {
            if ((seek || lastSpeed === 0) && this.__loopControl) position = this.__loopControl.applyLoopBoundaries(position, speed);
            this.__time = time;
            this.__position = position;
            this.__speed = speed;
            if (this.__playControlled) this.__playControlled.syncSpeed(time, position, speed, seek, lastSpeed);
            if (this.__loopControl) this.__loopControl.reschedule(speed);
          }
        }
        /**
         * Starts playback
         */

      }, {
        key: 'start',
        value: function start() {
          var time = this.__sync();

          this.syncSpeed(time, this.__position, this.__playingSpeed);
        }
        /**
         * Pauses playback and stays at the same position.
         */

      }, {
        key: 'pause',
        value: function pause() {
          var time = this.__sync();

          this.syncSpeed(time, this.__position, 0);
        }
        /**
         * Stops playback and seeks to initial (0) position.
         */

      }, {
        key: 'stop',
        value: function stop() {
          var time = this.__sync();

          this.syncSpeed(time, 0, 0, true);
        }
        /**
         * If speed if provided, sets the playback speed. The speed value should
         * be non-zero between -16 and -1/16 or between 1/16 and 16.
         *
         * @type {Number}
         * @name speed
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'seek',

        /**
         * Set (jump to) playing position.
         *
         * @param {Number} position target position
         */
        value: function seek(position) {
          var time = this.__sync();

          this.__position = position;
          this.syncSpeed(time, position, this.__speed, true);
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__scheduler.currentTime;
        }
        /**
         * Get current master time.
         *
         * @name audioTime
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'audioTime',
        get: function get() {
          return this.__scheduler.audioTime;
        }
        /**
         * Get current master position.
         * This function will be replaced when the play-control is added to a master.
         *
         * @name currentPosition
         * @type {Number}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__position + (this.__scheduler.currentTime - this.__time) * this.__speed;
        }
        /**
         * Returns if the play control is running.
         *
         * @name running
         * @type {Boolean}
         * @memberof PlayControl
         * @instance
         * @readonly
         */

      }, {
        key: 'running',
        get: function get() {
          return !(this.__speed === 0);
        }
      }, {
        key: 'loop',
        set: function set(enable) {
          if (enable && this.__loopStart > -Infinity && this.__loopEnd < Infinity) {
            if (!this.__loopControl) {
              this.__loopControl = new LoopControl(this);

              this.__scheduler.add(this.__loopControl, Infinity);
            }

            if (this.__speed !== 0) {
              var position = this.currentPosition;
              var lower = Math.min(this.__loopStart, this.__loopEnd);
              var upper = Math.max(this.__loopStart, this.__loopEnd);
              if (this.__speed > 0 && position > upper) this.seek(upper);else if (this.__speed < 0 && position < lower) this.seek(lower);else this.__loopControl.reschedule(this.__speed);
            }
          } else if (this.__loopControl) {
            this.__scheduler.remove(this.__loopControl);

            this.__loopControl = null;
          }
        },
        get: function get() {
          return !!this.__loopControl;
        }
      }, {
        key: 'loopStart',
        set: function set(loopStart) {
          this.setLoopBoundaries(loopStart, this.__loopEnd);
        },
        get: function get() {
          return this.__loopStart;
        }
        /**
         * Sets loop end value
         *
         * @type {Number}
         * @name loopEnd
         * @memberof PlayControl
         * @instance
         */

      }, {
        key: 'loopEnd',
        set: function set(loopEnd) {
          this.setLoopBoundaries(this.__loopStart, loopEnd);
        },
        get: function get() {
          return this.__loopEnd;
        }
      }, {
        key: 'speed',
        set: function set(speed) {
          var time = this.__sync();

          if (speed >= 0) {
            if (speed < 0.01) speed = 0.01;else if (speed > 100) speed = 100;
          } else {
            if (speed < -100) speed = -100;else if (speed > -0.01) speed = -0.01;
          }

          this.__playingSpeed = speed;
          if (!this.master && this.__speed !== 0) this.syncSpeed(time, this.__position, speed);
        },
        get: function get() {
          return this.__playingSpeed;
        }
      }]);
      return PlayControl;
    }(_TimeEngine5.default);

    exports.default = PlayControl;
  });
  unwrapExports(PlayControl_1);

  var Transport_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getIterator3 = _interopRequireDefault(getIterator$1);

    var _get3 = _interopRequireDefault(get$1);

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _PriorityQueue2 = _interopRequireDefault(PriorityQueue_1);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    var _TimeEngine5 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function addDuplet(firstArray, secondArray, firstElement, secondElement) {
      firstArray.push(firstElement);
      secondArray.push(secondElement);
    }

    function removeDuplet(firstArray, secondArray, firstElement) {
      var index = firstArray.indexOf(firstElement);

      if (index >= 0) {
        var secondElement = secondArray[index];
        firstArray.splice(index, 1);
        secondArray.splice(index, 1);
        return secondElement;
      }

      return null;
    } // The Transported call is the base class of the adapters between
    // different types of engines (i.e. transported, scheduled, play-controlled)
    // The adapters are at the same time masters for the engines added to the transport
    // and transported TimeEngines inserted into the transport's position-based pritority queue.


    var Transported = function (_TimeEngine) {
      (0, _inherits3.default)(Transported, _TimeEngine);

      function Transported(transport, engine, start, duration, offset) {
        var stretch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        (0, _classCallCheck3.default)(this, Transported);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Transported.__proto__ || (0, _getPrototypeOf2.default)(Transported)).call(this));

        _this.master = transport;
        _this.__engine = engine;
        engine.master = _this;
        _this.__startPosition = start;
        _this.__endPosition = !isFinite(duration) ? Infinity : start + duration;
        _this.__offsetPosition = start + offset;
        _this.__stretchPosition = stretch;
        _this.__isRunning = false;
        return _this;
      }

      (0, _createClass3.default)(Transported, [{
        key: 'setBoundaries',
        value: function setBoundaries(start, duration) {
          var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var stretch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
          this.__startPosition = start;
          this.__endPosition = start + duration;
          this.__offsetPosition = start + offset;
          this.__stretchPosition = stretch;
          this.resetPosition();
        }
      }, {
        key: 'start',
        value: function start(time, position, speed) {}
      }, {
        key: 'stop',
        value: function stop(time, position) {}
      }, {
        key: 'resetPosition',
        value: function resetPosition(position) {
          if (position !== undefined) position += this.__offsetPosition;
          this.master.resetEnginePosition(this, position);
        }
      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          if (speed > 0) {
            if (position < this.__startPosition) {
              if (this.__isRunning) this.stop(time, position - this.__offsetPosition);
              this.__isRunning = false;
              return this.__startPosition;
            } else if (position < this.__endPosition) {
              this.start(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
              return this.__endPosition;
            }
          } else {
            if (position > this.__endPosition) {
              if (this.__isRunning) // if engine is running
                this.stop(time, position - this.__offsetPosition);
              this.__isRunning = false;
              return this.__endPosition;
            } else if (position > this.__startPosition) {
              this.start(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
              return this.__startPosition;
            }
          }

          if (this.__isRunning) // if engine is running
            this.stop(time, position);
          this.__isRunning = false;
          return Infinity * speed;
        }
      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          if (!this.__isRunning) {
            this.start(time, position - this.__offsetPosition, speed);
            this.__isRunning = true;
            if (speed > 0) return this.__endPosition;
            return this.__startPosition;
          } // stop engine


          this.stop(time, position - this.__offsetPosition);
          this.__isRunning = false;
          return Infinity * speed;
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (speed === 0) {
            this.stop(time, position - this.__offsetPosition);
          }
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.master = null;
          this.__engine.master = null;
          this.__engine = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.master.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.master.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.master.currentPosition - this.__offsetPosition;
        }
      }]);
      return Transported;
    }(_TimeEngine5.default); // TransportedTransported
    // has to switch on and off the scheduled engines when the transport hits the engine's start and end position
    // @note - does not handle properly __startPosition and __endPosition


    var TransportedTransported = function (_Transported) {
      (0, _inherits3.default)(TransportedTransported, _Transported);

      function TransportedTransported(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedTransported);
        return (0, _possibleConstructorReturn3.default)(this, (TransportedTransported.__proto__ || (0, _getPrototypeOf2.default)(TransportedTransported)).call(this, transport, engine, startPosition, endPosition, offsetPosition));
      } // @todo - handle this.__running to start and stop properly the scheduled engines


      (0, _createClass3.default)(TransportedTransported, [{
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          var nextPosition = null; // Infinity * speed; // default return

          if (speed > 0) {
            if (position < this.__startPosition) {
              // sync engine at `_startPosition`
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, this.__startPosition - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else if (position < this.__endPosition) {
              // sync engine at `position`
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else {
              this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

              this.__isRunning = false;
              nextPosition = Infinity * speed;
            } // if somehow the engine asked to be called after `endPosition`, clamp value


            if (this.__isRunning && nextPosition > this.__endPosition) {
              nextPosition = this.__endPosition;
            }
          } else if (speed < 0) {
            if (position > this.__endPosition) {
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, this.__endPosition - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else if (position > this.__startPosition) {
              nextPosition = this.__offsetPosition + this.__engine.syncPosition(time, position - this.__offsetPosition, speed);
              this.__isRunning = true;
            } else {
              this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

              this.__isRunning = false;
              nextPosition = Infinity * speed;
            } // if somehow the engine asked to be called before `startPosition`, clamp value


            if (this.__isRunning && nextPosition < this.__startPosition) {
              nextPosition = this.__startPosition;
            }
          } else {
            this.__engine.syncPosition(time, position - this.__offsetPosition, 0);

            this.__isRunning = false;
            nextPosition = Infinity;
          }

          return nextPosition;
        }
      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          // ceil or floor `position` at 10^-9 to prevent float arithmetics errors
          // that make the transported go to infinite loops
          if (speed > 0) {
            position = Math.ceil(position * 1e9) * 1e-9;
          } else if (speed < 0) {
            position = Math.floor(position * 1e9) * 1e-9;
          } // stop engine if outside boundaries


          if (speed > 0 && position >= this.__endPosition && this.__isRunning) {
            // stop engine at __endPosition
            this.__engine.syncPosition(time, this.__endPosition - this.__offsetPosition, 0);

            this.__isRunning = false;
            return Infinity * speed; //
          } else if (speed < 0 && position < this.__startPosition && this.__isRunning) {
            this.__engine.syncPosition(time, this.__startPosition - this.__offsetPosition, 0);

            this.__isRunning = false;
            return Infinity * speed; //
          } // define next position and clamp to boundaries


          position = this.__offsetPosition + this.__engine.advancePosition(time, position - this.__offsetPosition, speed); // stop engine if outside boundaries - will call advancePosition once more
          // and thus `syncPosition` (cf. line 218 - 228)

          if (speed > 0 && position > this.__endPosition) {
            position = this.__endPosition;
          } else if (speed < 0 && position < this.__startPosition) {
            position = this.__startPosition;
          }

          return position;
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (this.__engine.syncSpeed) {
            this.__engine.syncSpeed(time, position, speed);
          }
        }
      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(engine) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          if (position !== undefined) {
            position += this.__offsetPosition;
          }

          this.master.resetEnginePosition(this, position);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__engine.syncPosition(this.master.currentTime, this.master.currentPosition, 0);

          (0, _get3.default)(TransportedTransported.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedTransported.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedTransported;
    }(Transported); // TransportedSpeedControlled
    // has to start and stop the speed-controlled engines when the transport hits the engine's start and end position


    var TransportedSpeedControlled = function (_Transported2) {
      (0, _inherits3.default)(TransportedSpeedControlled, _Transported2);

      function TransportedSpeedControlled(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedSpeedControlled);
        return (0, _possibleConstructorReturn3.default)(this, (TransportedSpeedControlled.__proto__ || (0, _getPrototypeOf2.default)(TransportedSpeedControlled)).call(this, transport, engine, startPosition, endPosition, offsetPosition));
      }

      (0, _createClass3.default)(TransportedSpeedControlled, [{
        key: 'start',
        value: function start(time, position, speed) {
          this.__engine.syncSpeed(time, position, speed, true);
        }
      }, {
        key: 'stop',
        value: function stop(time, position) {
          this.__engine.syncSpeed(time, position, 0);
        }
      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          if (this.__isRunning) this.__engine.syncSpeed(time, position, speed);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__engine.syncSpeed(this.master.currentTime, this.master.currentPosition - this.__offsetPosition, 0);

          (0, _get3.default)(TransportedSpeedControlled.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedSpeedControlled.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedSpeedControlled;
    }(Transported); // TransportedScheduled
    // has to switch on and off the scheduled engines when the transport hits the engine's start and end position


    var TransportedScheduled = function (_Transported3) {
      (0, _inherits3.default)(TransportedScheduled, _Transported3);

      function TransportedScheduled(transport, engine, startPosition, endPosition, offsetPosition) {
        (0, _classCallCheck3.default)(this, TransportedScheduled); // scheduling queue becomes master of engine

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (TransportedScheduled.__proto__ || (0, _getPrototypeOf2.default)(TransportedScheduled)).call(this, transport, engine, startPosition, endPosition, offsetPosition));

        engine.master = null;

        transport.__schedulingQueue.add(engine, Infinity);

        return _this4;
      }

      (0, _createClass3.default)(TransportedScheduled, [{
        key: 'start',
        value: function start(time, position, speed) {
          this.master.__schedulingQueue.resetEngineTime(this.__engine, time);
        }
      }, {
        key: 'stop',
        value: function stop(time, position) {
          this.master.__schedulingQueue.resetEngineTime(this.__engine, Infinity);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.master.__schedulingQueue.remove(this.__engine);

          (0, _get3.default)(TransportedScheduled.prototype.__proto__ || (0, _getPrototypeOf2.default)(TransportedScheduled.prototype), 'destroy', this).call(this);
        }
      }]);
      return TransportedScheduled;
    }(Transported); // translates advancePosition of *transported* engines into global scheduler times


    var TransportSchedulerHook = function (_TimeEngine2) {
      (0, _inherits3.default)(TransportSchedulerHook, _TimeEngine2);

      function TransportSchedulerHook(transport) {
        (0, _classCallCheck3.default)(this, TransportSchedulerHook);

        var _this5 = (0, _possibleConstructorReturn3.default)(this, (TransportSchedulerHook.__proto__ || (0, _getPrototypeOf2.default)(TransportSchedulerHook)).call(this));

        _this5.__transport = transport;
        _this5.__nextPosition = Infinity;
        _this5.__nextTime = Infinity;

        transport.__scheduler.add(_this5, Infinity);

        return _this5;
      } // TimeEngine method (scheduled interface)


      (0, _createClass3.default)(TransportSchedulerHook, [{
        key: 'advanceTime',
        value: function advanceTime(time) {
          var transport = this.__transport;
          var position = this.__nextPosition;
          var speed = transport.__speed;
          var nextPosition = transport.advancePosition(time, position, speed);

          var nextTime = transport.__getTimeAtPosition(nextPosition);

          this.__nextPosition = nextPosition;
          this.__nextTime = nextTime;
          return nextTime;
        }
      }, {
        key: 'resetPosition',
        value: function resetPosition() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.__nextPosition;
          var transport = this.__transport;

          var time = transport.__getTimeAtPosition(position);

          this.__nextPosition = position;
          this.__nextTime = time;
          this.resetTime(time);
        }
      }, {
        key: 'destroy',
        value: function destroy() {
          this.__transport.__scheduler.remove(this);

          this.__transport = null;
        }
      }]);
      return TransportSchedulerHook;
    }(_TimeEngine5.default); // internal scheduling queue that returns the current position (and time) of the transport


    var TransportSchedulingQueue = function (_SchedulingQueue) {
      (0, _inherits3.default)(TransportSchedulingQueue, _SchedulingQueue);

      function TransportSchedulingQueue(transport) {
        (0, _classCallCheck3.default)(this, TransportSchedulingQueue);

        var _this6 = (0, _possibleConstructorReturn3.default)(this, (TransportSchedulingQueue.__proto__ || (0, _getPrototypeOf2.default)(TransportSchedulingQueue)).call(this));

        _this6.__transport = transport;

        transport.__scheduler.add(_this6, Infinity);

        return _this6;
      }

      (0, _createClass3.default)(TransportSchedulingQueue, [{
        key: 'destroy',
        value: function destroy() {
          this.__transport.__scheduler.remove(this);

          this.__transport = null;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__transport.currentTime;
        }
      }, {
        key: 'audioTime',
        get: function get() {
          return this.__transport.audioTime;
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return this.__transport.currentPosition;
        }
      }]);
      return TransportSchedulingQueue;
    }(_SchedulingQueue3.default);
    /**
     * Provides position-based scheduling of TimeEngine instances.
     *
     * [example]{@link https://rawgit.com/wavesjs/waves-masters/master/examples/transport/index.html}
     *
     *
     * @param {Object} scheduler - instance of Scheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => {
     *   const now = process.hrtime();
     *   return now[0] + now[1] * 1e-9;
     * }
     * const scheduler = new masters.Scheduler(getTimeFunction);
     * const transport = new masters.Transport(scheduler);
     * const playControl = new masters.PlayControl(scheduler, transport);
     * const myEngine = new MyEngine();
     * const yourEngine = new yourEngine();
     *
     * transport.add(myEngine);
     * transport.add(yourEngine);
     *
     * playControl.start();
     */


    var Transport = function (_TimeEngine3) {
      (0, _inherits3.default)(Transport, _TimeEngine3);

      function Transport(scheduler) {
        (0, _classCallCheck3.default)(this, Transport);

        var _this7 = (0, _possibleConstructorReturn3.default)(this, (Transport.__proto__ || (0, _getPrototypeOf2.default)(Transport)).call(this));

        if (!scheduler) throw new Error('Invalid argument `scheduler`, should be an instance of `Scheduler`');
        _this7.__engines = [];
        _this7.__transported = [];
        _this7.__scheduler = scheduler;
        _this7.__schedulerHook = new TransportSchedulerHook(_this7);
        _this7.__transportedQueue = new _PriorityQueue2.default();
        _this7.__schedulingQueue = new TransportSchedulingQueue(_this7); // syncronized time, position, and speed

        _this7.__time = 0;
        _this7.__position = 0;
        _this7.__speed = 0;
        return _this7;
      }

      (0, _createClass3.default)(Transport, [{
        key: '__getTimeAtPosition',
        value: function __getTimeAtPosition(position) {
          if (this.__speed === 0) return +Infinity;else return this.__time + (position - this.__position) / this.__speed;
        }
      }, {
        key: '__getPositionAtTime',
        value: function __getPositionAtTime(time) {
          return this.__position + (time - this.__time) * this.__speed;
        }
      }, {
        key: '__syncTransportedPosition',
        value: function __syncTransportedPosition(time, position, speed) {
          var numTransportedEngines = this.__transported.length;
          var nextPosition = Infinity * speed;

          if (numTransportedEngines > 0) {
            this.__transportedQueue.clear();

            this.__transportedQueue.reverse = speed < 0;

            for (var i = 0; i < numTransportedEngines; i++) {
              var engine = this.__transported[i];
              var nextEnginePosition = engine.syncPosition(time, position, speed);

              this.__transportedQueue.insert(engine, nextEnginePosition);
            }

            nextPosition = this.__transportedQueue.time;
          }

          return nextPosition;
        }
      }, {
        key: '__syncTransportedSpeed',
        value: function __syncTransportedSpeed(time, position, speed) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = (0, _getIterator3.default)(this.__transported), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var transported = _step.value;
              transported.syncSpeed(time, position, speed);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        /**
         * Get current master time.
         *
         * @type {Number}
         * @name currentTime
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'resetPosition',

        /**
         * Reset next transport position
         *
         * @param {Number} next - transport position
         */
        value: function resetPosition(position) {
          var master = this.master;
          if (master && master.resetEnginePosition !== undefined) master.resetEnginePosition(this, position);else this.__schedulerHook.resetPosition(position);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         */

      }, {
        key: 'syncPosition',
        value: function syncPosition(time, position, speed) {
          this.__time = time;
          this.__position = position;
          this.__speed = speed;
          return this.__syncTransportedPosition(time, position, speed);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         */

      }, {
        key: 'advancePosition',
        value: function advancePosition(time, position, speed) {
          var engine = this.__transportedQueue.head;
          var nextEnginePosition = engine.advancePosition(time, position, speed);
          return this.__transportedQueue.move(engine, nextEnginePosition);
        }
        /**
         * Implementation of the transported time engine interface.
         *
         * @param {Number} time
         * @param {Number} position
         * @param {Number} speed
         * @param {Boolean} [seek=false]
         */

      }, {
        key: 'syncSpeed',
        value: function syncSpeed(time, position, speed) {
          var seek = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var lastSpeed = this.__speed;
          this.__time = time;
          this.__position = position;
          this.__speed = speed;

          if (speed !== lastSpeed || seek) {
            var nextPosition = void 0; // resync transported engines

            if (seek || speed * lastSpeed < 0) {
              // seek or reverse direction
              nextPosition = this.__syncTransportedPosition(time, position, speed);
            } else if (lastSpeed === 0) {
              // start
              nextPosition = this.__syncTransportedPosition(time, position, speed);
            } else if (speed === 0) {
              // stop
              nextPosition = Infinity;

              this.__syncTransportedPosition(time, position, speed);
            } else {
              // change speed without reversing direction
              this.__syncTransportedSpeed(time, position, speed);
            }

            this.resetPosition(nextPosition);
          }
        }
        /**
         * Add a time engine to the transport.
         *
         * @param {Object} engine - engine to be added to the transport
         * @param {Number} position - start position
         */

      }, {
        key: 'add',
        value: function add(engine) {
          var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
          var offsetPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var transported = null;
          if (offsetPosition === -Infinity) offsetPosition = 0;
          if (engine.master) throw new Error("object has already been added to a master");
          if (_TimeEngine5.default.implementsTransported(engine)) transported = new TransportedTransported(this, engine, startPosition, endPosition, offsetPosition);else if (_TimeEngine5.default.implementsSpeedControlled(engine)) transported = new TransportedSpeedControlled(this, engine, startPosition, endPosition, offsetPosition);else if (_TimeEngine5.default.implementsScheduled(engine)) transported = new TransportedScheduled(this, engine, startPosition, endPosition, offsetPosition);else throw new Error("object cannot be added to a transport");

          if (transported) {
            var speed = this.__speed;
            addDuplet(this.__engines, this.__transported, engine, transported);

            if (speed !== 0) {
              // sync and start
              var nextEnginePosition = transported.syncPosition(this.currentTime, this.currentPosition, speed);

              var nextPosition = this.__transportedQueue.insert(transported, nextEnginePosition);

              this.resetPosition(nextPosition);
            }
          }

          return transported;
        }
        /**
         * Remove a time engine from the transport.
         *
         * @param {object} engineOrTransported - engine or transported to be removed from the transport
         */

      }, {
        key: 'remove',
        value: function remove(engineOrTransported) {
          var engine = engineOrTransported;
          var transported = removeDuplet(this.__engines, this.__transported, engineOrTransported);

          if (!transported) {
            engine = removeDuplet(this.__transported, this.__engines, engineOrTransported);
            transported = engineOrTransported;
          }

          if (engine && transported) {
            var nextPosition = this.__transportedQueue.remove(transported);

            transported.destroy();
            if (this.__speed !== 0) this.resetPosition(nextPosition);
          } else {
            throw new Error("object has not been added to this transport");
          }
        }
        /**
         * Reset position of the given engine.
         *
         * @param {TimeEngine} transported - Engine to reset
         * @param {Number} position - New position
         */

      }, {
        key: 'resetEnginePosition',
        value: function resetEnginePosition(transported) {
          var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var speed = this.__speed;

          if (speed !== 0) {
            if (position === undefined) position = transported.syncPosition(this.currentTime, this.currentPosition, speed);
            var nextPosition = null; // the priority queue does not keep track of the elements that are
            // inserted at Infinity, so we need to reinsert transported engine in
            // this case.
            // @note - this could probably be more clean
            //       - probably the priority queue should keep these references

            if (!this.__transportedQueue.has(transported)) {
              nextPosition = this.__transportedQueue.insert(transported, position);
            } else {
              nextPosition = this.__transportedQueue.move(transported, position);
            }

            this.resetPosition(nextPosition);
          }
        }
        /**
         * Remove all time engines from the transport.
         */

      }, {
        key: 'clear',
        value: function clear() {
          this.syncSpeed(this.currentTime, this.currentPosition, 0);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = (0, _getIterator3.default)(this.__transported), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var transported = _step2.value;
              transported.destroy();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__scheduler.currentTime;
        }
        /**
         * Get master audio time.
         *
         * @type {Number}
         * @name currentTime
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'audioTime',
        get: function get() {
          return this.__scheduler.audioTime;
        }
        /**
         * Get current master position. This getter will be replaced when the transport
         * is added to a master (i.e. transport or play-control).
         *
         * @type {Number}
         * @name currentPosition
         * @memberof Transport
         * @instance
         * @readonly
         */

      }, {
        key: 'currentPosition',
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return this.__position + (this.__scheduler.currentTime - this.__time) * this.__speed;
        }
      }]);
      return Transport;
    }(_TimeEngine5.default);

    exports.default = Transport;
  });
  unwrapExports(Transport_1);

  var global$2 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js
  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;

  if (typeof global$2.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }

  if (typeof global$2.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }

  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }

  var queue$2 = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }

    draining = false;

    if (currentQueue.length) {
      queue$2 = currentQueue.concat(queue$2);
    } else {
      queueIndex = -1;
    }

    if (queue$2.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }

    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue$2.length;

    while (len) {
      currentQueue = queue$2;
      queue$2 = [];

      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }

      queueIndex = -1;
      len = queue$2.length;
    }

    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  function nextTick(fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    queue$2.push(new Item(fun, args));

    if (queue$2.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  } // v8 likes predictible objects

  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues

  var versions$2 = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;
  function binding(name) {
    throw new Error('process.binding is not supported');
  }
  function cwd() {
    return '/';
  }
  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }
  function umask() {
    return 0;
  } // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

  var performance = global$2.performance || {};

  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  }; // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime


  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);

    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];

      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }

    return [seconds, nanoseconds];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }
  var process$6 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions$2,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  /**
   * Helpers.
   */
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  var ms = function ms(val, options) {
    options = options || {};
    var type = typeof val;

    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }

    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };
  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */


  function parse(str) {
    str = String(str);

    if (str.length > 100) {
      return;
    }

    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

    if (!match) {
      return;
    }

    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();

    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;

      case 'days':
      case 'day':
      case 'd':
        return n * d;

      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;

      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;

      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;

      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;

      default:
        return undefined;
    }
  }
  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */


  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd';
    }

    if (ms >= h) {
      return Math.round(ms / h) + 'h';
    }

    if (ms >= m) {
      return Math.round(ms / m) + 'm';
    }

    if (ms >= s) {
      return Math.round(ms / s) + 's';
    }

    return ms + 'ms';
  }
  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */


  function fmtLong(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }
  /**
   * Pluralization helper.
   */


  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }

    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name;
    }

    return Math.ceil(ms / n) + ' ' + name + 's';
  }

  var debug = createCommonjsModule(function (module, exports) {
    /**
     * This is the common logic for both the Node.js and web browser
     * implementations of `debug()`.
     *
     * Expose `debug()` as the module.
     */
    exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = ms;
    /**
     * The currently active debug mode names, and names to skip.
     */

    exports.names = [];
    exports.skips = [];
    /**
     * Map of special "%n" handling functions, for the debug "format" argument.
     *
     * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
     */

    exports.formatters = {};
    /**
     * Previous log timestamp.
     */

    var prevTime;
    /**
     * Select a color.
     * @param {String} namespace
     * @return {Number}
     * @api private
     */

    function selectColor(namespace) {
      var hash = 0,
          i;

      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }

      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    /**
     * Create a debugger with the given `namespace`.
     *
     * @param {String} namespace
     * @return {Function}
     * @api public
     */


    function createDebug(namespace) {
      function debug() {
        // disabled?
        if (!debug.enabled) return;
        var self = debug; // set `diff` timestamp

        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr; // turn the `arguments` into a proper Array

        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }

        args[0] = exports.coerce(args[0]);

        if ('string' !== typeof args[0]) {
          // anything else let's inspect with %O
          args.unshift('%O');
        } // apply any `formatters` transformations


        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          // if we encounter an escaped % then don't increase the array index
          if (match === '%%') return match;
          index++;
          var formatter = exports.formatters[format];

          if ('function' === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

            args.splice(index, 1);
            index--;
          }

          return match;
        }); // apply env-specific formatting (colors, etc.)

        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }

      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

      if ('function' === typeof exports.init) {
        exports.init(debug);
      }

      return debug;
    }
    /**
     * Enables a debug mode by namespaces. This can include modes
     * separated by a colon and wildcards.
     *
     * @param {String} namespaces
     * @api public
     */


    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
      var len = split.length;

      for (var i = 0; i < len; i++) {
        if (!split[i]) continue; // ignore empty strings

        namespaces = split[i].replace(/\*/g, '.*?');

        if (namespaces[0] === '-') {
          exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
        } else {
          exports.names.push(new RegExp('^' + namespaces + '$'));
        }
      }
    }
    /**
     * Disable debug output.
     *
     * @api public
     */


    function disable() {
      exports.enable('');
    }
    /**
     * Returns true if the given mode name is enabled, false otherwise.
     *
     * @param {String} name
     * @return {Boolean}
     * @api public
     */


    function enabled(name) {
      var i, len;

      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }

      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }

      return false;
    }
    /**
     * Coerce `val`.
     *
     * @param {Mixed} val
     * @return {Mixed}
     * @api private
     */


    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  });
  var debug_1 = debug.coerce;
  var debug_2 = debug.disable;
  var debug_3 = debug.enable;
  var debug_4 = debug.enabled;
  var debug_5 = debug.humanize;
  var debug_6 = debug.names;
  var debug_7 = debug.skips;
  var debug_8 = debug.formatters;

  var browser$1 = createCommonjsModule(function (module, exports) {
    /**
     * This is the web browser implementation of `debug()`.
     *
     * Expose `debug()` as the module.
     */
    exports = module.exports = debug;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
    /**
     * Colors.
     */

    exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
    /**
     * Currently only WebKit-based Web Inspectors, Firefox >= v31,
     * and the Firebug extension (any Firefox version) are known
     * to support "%c" CSS customizations.
     *
     * TODO: add a `localStorage` variable to explicitly enable/disable colors
     */

    function useColors() {
      // NB: In an Electron preload script, document will be defined but not fully
      // initialized. Since we know we're in Chrome, we'll just detect this case
      // explicitly
      if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true;
      } // is webkit? http://stackoverflow.com/a/16459606/376773
      // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


      return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    /**
     * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
     */


    exports.formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return '[UnexpectedJSONParseError]: ' + err.message;
      }
    };
    /**
     * Colorize log arguments if enabled.
     *
     * @api public
     */


    function formatArgs(args) {
      var useColors = this.useColors;
      args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
      if (!useColors) return;
      var c = 'color: ' + this.color;
      args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
      // arguments passed either before or after the %c, so we need to
      // figure out the correct index to insert the CSS into

      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if ('%%' === match) return;
        index++;

        if ('%c' === match) {
          // we only are interested in the *last* %c
          // (the user may have provided their own)
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    /**
     * Invokes `console.log()` when available.
     * No-op when `console.log` is not a "function".
     *
     * @api public
     */


    function log() {
      // this hackery is required for IE8/9, where
      // the `console.log` function doesn't have 'apply'
      return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    /**
     * Save `namespaces`.
     *
     * @param {String} namespaces
     * @api private
     */


    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem('debug');
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {}
    }
    /**
     * Load `namespaces`.
     *
     * @return {String} returns the previously persisted debug modes
     * @api private
     */


    function load() {
      var r;

      try {
        r = exports.storage.debug;
      } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


      if (!r && typeof process$6 !== 'undefined' && 'env' in process$6) {
        r = process$6.env.DEBUG;
      }

      return r;
    }
    /**
     * Enable namespaces listed in `localStorage.debug` initially.
     */


    exports.enable(load());
    /**
     * Localstorage attempts to return the localstorage.
     *
     * This is necessary because safari throws
     * when a user disables cookies/localstorage
     * and you attempt to access it.
     *
     * @return {LocalStorage}
     * @api private
     */

    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {}
    }
  });
  var browser_1 = browser$1.log;
  var browser_2 = browser$1.formatArgs;
  var browser_3 = browser$1.save;
  var browser_4 = browser$1.load;
  var browser_5 = browser$1.useColors;
  var browser_6 = browser$1.storage;
  var browser_7 = browser$1.colors;

  var Scheduler_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);

    var _inherits3 = _interopRequireDefault(inherits);

    var _debug2 = _interopRequireDefault(browser$1);

    var _SchedulingQueue3 = _interopRequireDefault(SchedulingQueue_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var log = (0, _debug2.default)('wavesjs:masters');

    function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
    /**
     * The `Scheduler` class implements a master for `TimeEngine` instances
     * that implement the *scheduled* interface (such as the `Metronome` and
     * `GranularEngine`).
     *
     * A `Scheduler` can also schedule simple callback functions.
     * The class is based on recursive calls to `setTimeout` and uses the time
     * returned by the `getTimeFunction` passed as first argument as a logical time
     * passed to the `advanceTime` methods of the scheduled engines or to the
     * scheduled callback functions.
     * It extends the `SchedulingQueue` class that itself includes a `PriorityQueue`
     * to assure the order of the scheduled engines (see `SimpleScheduler` for a
     * simplified scheduler implementation without `PriorityQueue`).
     *
     * {@link https://rawgit.com/wavesjs/waves-masters/master/examples/scheduler/index.html}
     *
     * @param {Function} getTimeFunction - Function that must return a time in second.
     * @param {Object} [options={}] - default options.
     * @param {Number} [options.period=0.025] - period of the scheduler.
     * @param {Number} [options.lookahead=0.1] - lookahead of the scheduler.
     * @param {Number} [options.currentTimeToAudioTimeFunction] - function that convert
     *  `currentTime` to `audioTime`. Defaults to no-op.
     *
     * @see TimeEngine
     * @see SimpleScheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => preformance.now() / 1000;
     * const scheduler = new masters.Scheduler(getTimeFunction);
     *
     * scheduler.add(myEngine);
     */


    var Scheduler = function (_SchedulingQueue) {
      (0, _inherits3.default)(Scheduler, _SchedulingQueue);

      function Scheduler(getTimeFunction) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, Scheduler);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Scheduler.__proto__ || (0, _getPrototypeOf2.default)(Scheduler)).call(this));

        if (!isFunction(getTimeFunction)) throw new Error('Invalid argument `getTimeFunction`');
        _this.getTimeFunction = getTimeFunction;
        _this.__currentTime = null;
        _this.__nextTime = Infinity;
        _this.__timeout = null;
        /**
         * scheduler (setTimeout) period
         * @type {Number}
         * @name period
         * @memberof Scheduler
         * @instance
         */

        _this.period = options.period || 0.025;
        /**
         * scheduler lookahead time (> period)
         * @type {Number}
         * @name lookahead
         * @memberof Scheduler
         * @instance
         */

        _this.lookahead = options.lookahead || 0.1;

        _this._currentTimeToAudioTimeFunction = options.currentTimeToAudioTimeFunction || function (currentTime) {
          return currentTime;
        };

        return _this;
      } // setTimeout scheduling loop


      (0, _createClass3.default)(Scheduler, [{
        key: '__tick',
        value: function __tick() {
          var currentTime = this.getTimeFunction();
          var time = this.__nextTime;
          this.__timeout = null;

          while (time <= currentTime + this.lookahead) {
            this.__currentTime = time;
            time = this.advanceTime(time);
          }

          this.__currentTime = null;
          this.resetTime(time);
        }
      }, {
        key: 'resetTime',
        value: function resetTime() {
          var _this2 = this;

          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentTime;

          if (this.master) {
            this.master.reset(this, time);
          } else {
            if (this.__timeout) {
              clearTimeout(this.__timeout);
              this.__timeout = null;
            }

            if (time !== Infinity) {
              if (this.__nextTime === Infinity) log('Scheduler Start');
              var timeOutDelay = Math.max(time - this.lookahead - this.getTimeFunction(), this.period);
              this.__timeout = setTimeout(function () {
                _this2.__tick();
              }, Math.ceil(timeOutDelay * 1000));
            } else if (this.__nextTime !== Infinity) {
              log('Scheduler Stop');
            }

            this.__nextTime = time;
          }
        }
        /**
         * Scheduler current logical time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof Scheduler
         * @instance
         */

      }, {
        key: 'currentTime',
        get: function get() {
          // @note - can this really happen, and if yes, in which case?
          if (this.master) return this.master.currentTime;
          return this.__currentTime || this.getTimeFunction() + this.lookahead;
        }
        /**
         * Scheduler current audio time according to `currentTime`
         *
         * @name audioTime
         * @type {Number}
         * @memberif Scheduler
         * @instance
         */

      }, {
        key: 'audioTime',
        get: function get() {
          // @note - add this as in
          if (this.master) return this.master.audioTime;
          return this._currentTimeToAudioTimeFunction(this.currentTime);
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          var master = this.master;
          if (master && master.currentPosition !== undefined) return master.currentPosition;
          return undefined;
        } // inherited from scheduling queue

        /**
         * Add a TimeEngine or a simple callback function to the scheduler at an
         * optionally given time. Whether the add method is called with a TimeEngine
         * or a callback function it returns a TimeEngine that can be used as argument
         * of the methods remove and resetEngineTime. A TimeEngine added to a scheduler
         * has to implement the scheduled interface. The callback function added to a
         * scheduler will be called at the given time and with the given time as
         * argument. The callback can return a new scheduling time (i.e. the next
         * time when it will be called) or it can return Infinity to suspend scheduling
         * without removing the function from the scheduler. A function that does
         * not return a value (or returns null or 0) is removed from the scheduler
         * and cannot be used as argument of the methods remove and resetEngineTime
         * anymore.
         *
         * @name add
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine|Function} engine - Engine to add to the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

        /**
         * Remove a TimeEngine from the scheduler that has been added to the
         * scheduler using the add method.
         *
         * @name add
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine} engine - Engine to remove from the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

        /**
         * Reschedule a scheduled time engine at a given time.
         *
         * @name resetEngineTime
         * @function
         * @memberof Scheduler
         * @instance
         * @param {TimeEngine} engine - Engine to reschedule
         * @param {Number} time - Schedule time
         */

        /**
         * Remove all scheduled callbacks and engines from the scheduler.
         *
         * @name clear
         * @function
         * @memberof Scheduler
         * @instance
         */

      }]);
      return Scheduler;
    }(_SchedulingQueue3.default);

    exports.default = Scheduler;
  });
  unwrapExports(Scheduler_1);

  var SimpleScheduler_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _set2 = _interopRequireDefault(set$2);

    var _classCallCheck3 = _interopRequireDefault(classCallCheck);

    var _createClass3 = _interopRequireDefault(createClass);

    var _debug2 = _interopRequireDefault(browser$1);

    var _TimeEngine2 = _interopRequireDefault(TimeEngine_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    var log = (0, _debug2.default)('wavesjs:masters');

    function isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }
    /**
     *
     *
     *
     * The SimpleScheduler class implements a simplified master for time engines
     * (see TimeEngine) that implement the scheduled interface
     * such as the Metronome and the GranularEngine. The API and funtionalities of
     * the SimpleScheduler class are identical to the Scheduler class. But, other
     * than the Scheduler, the SimpleScheduler class does not guarantee the order
     * of events (i.e. calls to the advanceTime method of scheduled time engines
     * and to scheduled callback functions) within a scheduling period (see period
     * attribute).
     *
     * {@link https://rawgit.com/wavesjs/waves-masters/master/examples/scheduler/index.html}
     *
     * @param {Function} getTimeFunction - Function that must return a time in second.
     * @param {Object} [options={}] - default options
     * @param {Number} [options.period=0.025] - period of the scheduler.
     * @param {Number} [options.lookahead=0.1] - lookahead of the scheduler.
     *
     * @see TimeEngine
     * @see Scheduler
     *
     * @example
     * import * as masters from 'waves-masters';
     *
     * const getTimeFunction = () => preformance.now() / 1000;
     * const scheduler = new masters.SimpleScheduler(getTimeFunction);
     *
     * scheduler.add(myEngine);
     */


    var SimpleScheduler = function () {
      function SimpleScheduler(getTimeFunction) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, _classCallCheck3.default)(this, SimpleScheduler);
        if (!isFunction(getTimeFunction)) throw new Error('Invalid argument `getTimeFunction`');
        this.getTimeFunction = getTimeFunction;
        this.__engines = new _set2.default();
        this.__schedEngines = [];
        this.__schedTimes = [];
        this.__currentTime = null;
        this.__timeout = null;
        /**
         * scheduler (setTimeout) period
         * @type {Number}
         * @name period
         * @memberof Scheduler
         * @instance
         */

        this.period = options.period || 0.025;
        /**
         * scheduler lookahead time (> period)
         * @type {Number}
         * @name lookahead
         * @memberof Scheduler
         * @instance
         */

        this.lookahead = options.lookahead || 0.1;

        this._currentTimeToAudioTimeFunction = options.currentTimeToAudioTimeFunction || function (currentTime) {
          return currentTime;
        };
      }

      (0, _createClass3.default)(SimpleScheduler, [{
        key: '__scheduleEngine',
        value: function __scheduleEngine(engine, time) {
          this.__schedEngines.push(engine);

          this.__schedTimes.push(time);
        }
      }, {
        key: '__rescheduleEngine',
        value: function __rescheduleEngine(engine, time) {
          var index = this.__schedEngines.indexOf(engine);

          if (index >= 0) {
            if (time !== Infinity) {
              this.__schedTimes[index] = time;
            } else {
              this.__schedEngines.splice(index, 1);

              this.__schedTimes.splice(index, 1);
            }
          } else if (time < Infinity) {
            this.__schedEngines.push(engine);

            this.__schedTimes.push(time);
          }
        }
      }, {
        key: '__unscheduleEngine',
        value: function __unscheduleEngine(engine) {
          var index = this.__schedEngines.indexOf(engine);

          if (index >= 0) {
            this.__schedEngines.splice(index, 1);

            this.__schedTimes.splice(index, 1);
          }
        }
      }, {
        key: '__resetTick',
        value: function __resetTick() {
          if (this.__schedEngines.length > 0) {
            if (!this.__timeout) {
              log('SimpleScheduler Start');

              this.__tick();
            }
          } else if (this.__timeout) {
            log('SimpleScheduler Stop');
            clearTimeout(this.__timeout);
            this.__timeout = null;
          }
        }
      }, {
        key: '__tick',
        value: function __tick() {
          var _this = this;

          var currentTime = this.getTimeFunction();
          var i = 0;

          while (i < this.__schedEngines.length) {
            var engine = this.__schedEngines[i];
            var time = this.__schedTimes[i];

            while (time && time <= currentTime + this.lookahead) {
              time = Math.max(time, currentTime);
              this.__currentTime = time;
              time = engine.advanceTime(time);
            }

            if (time && time < Infinity) {
              this.__schedTimes[i++] = time;
            } else {
              this.__unscheduleEngine(engine); // remove engine from scheduler


              if (!time) {
                engine.master = null;

                this.__engines.delete(engine);
              }
            }
          }

          this.__currentTime = null;
          this.__timeout = null;

          if (this.__schedEngines.length > 0) {
            this.__timeout = setTimeout(function () {
              _this.__tick();
            }, this.period * 1000);
          }
        }
        /**
         * Scheduler current logical time.
         *
         * @name currentTime
         * @type {Number}
         * @memberof Scheduler
         * @instance
         */

      }, {
        key: 'defer',
        // call a function at a given time

        /**
         * Defer the execution of a function at a given time.
         *
         * @param {Function} fun - Function to defer
         * @param {Number} [time=this.currentTime] - Schedule time
         */
        value: function defer(fun) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!(fun instanceof Function)) throw new Error("object cannot be defered by scheduler");
          this.add({
            advanceTime: function advanceTime(time) {
              fun(time);
            } // make sur that the advanceTime method does not returm anything

          }, time);
        }
        /**
         * Add a TimeEngine function to the scheduler at an optionally given time.
         *
         * @param {TimeEngine} engine - Engine to add to the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

      }, {
        key: 'add',
        value: function add(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;
          if (!_TimeEngine2.default.implementsScheduled(engine)) throw new Error("object cannot be added to scheduler");
          if (engine.master) throw new Error("object has already been added to a master"); // set master and add to array

          engine.master = this;

          this.__engines.add(engine); // schedule engine


          this.__scheduleEngine(engine, time);

          this.__resetTick();
        }
        /**
         * Remove a TimeEngine from the scheduler that has been added to the
         * scheduler using the add method.
         *
         * @param {TimeEngine} engine - Engine to remove from the scheduler
         * @param {Number} [time=this.currentTime] - Schedule time
         */

      }, {
        key: 'remove',
        value: function remove(engine) {
          if (!engine.master || engine.master !== this) throw new Error("engine has not been added to this scheduler"); // reset master and remove from array

          engine.master = null;

          this.__engines.delete(engine); // unschedule engine


          this.__unscheduleEngine(engine);

          this.__resetTick();
        }
        /**
         * Reschedule a scheduled time engine at a given time.
         *
         * @param {TimeEngine} engine - Engine to reschedule
         * @param {Number} time - Schedule time
         */

      }, {
        key: 'resetEngineTime',
        value: function resetEngineTime(engine) {
          var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentTime;

          this.__rescheduleEngine(engine, time);

          this.__resetTick();
        }
        /**
         * Check whether a given engine is scheduled.
         *
         * @param {TimeEngine} engine - Engine to check
         */

      }, {
        key: 'has',
        value: function has(engine) {
          return this.__engines.has(engine);
        }
        /**
         * Remove all engines from the scheduler.
         */

      }, {
        key: 'clear',
        value: function clear() {
          if (this.__timeout) {
            clearTimeout(this.__timeout);
            this.__timeout = null;
          }

          this.__schedEngines.length = 0;
          this.__schedTimes.length = 0;
        }
      }, {
        key: 'currentTime',
        get: function get() {
          return this.__currentTime || this.getTimeFunction() + this.lookahead;
        }
        /**
         * Scheduler current audio time according to `currentTime`
         *
         * @name audioTime
         * @type {Number}
         * @memberif Scheduler
         * @instance
         */

      }, {
        key: 'audioTime',
        get: function get() {
          // @note - add this as in
          if (this.master) return this.master.audioTime;
          return this._currentTimeToAudioTimeFunction(this.currentTime);
        }
      }, {
        key: 'currentPosition',
        get: function get() {
          return undefined;
        }
      }]);
      return SimpleScheduler;
    }();

    exports.default = SimpleScheduler;
  });
  unwrapExports(SimpleScheduler_1);

  var dist$1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, 'TimeEngine', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(TimeEngine_1).default;
      }
    });
    Object.defineProperty(exports, 'PriorityQueue', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PriorityQueue_1).default;
      }
    });
    Object.defineProperty(exports, 'SchedulingQueue', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(SchedulingQueue_1).default;
      }
    });
    Object.defineProperty(exports, 'PlayControl', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(PlayControl_1).default;
      }
    });
    Object.defineProperty(exports, 'Transport', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Transport_1).default;
      }
    });
    Object.defineProperty(exports, 'Scheduler', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(Scheduler_1).default;
      }
    });
    Object.defineProperty(exports, 'SimpleScheduler', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(SimpleScheduler_1).default;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });
  var masters = unwrapExports(dist$1);

  /**
   * this function encapsulate some logic required to `resume` the given
   * audio context.
   */
  function resumeContext(audioContext) {
    // for compatibility with Safari
    if (!audioContext.resume) {
      audioContext.resume = new Promise.resolve();
    }

    return new Promise(function (resolve, reject) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var $btn = document.createElement('button');
      $btn.textContent = 'resume audio context';
      $btn.style.width = width + 'px'; // `${width}px`;

      $btn.style.height = height + 'px';
      $btn.style.position = 'absolute';
      $btn.style.top = '0px';
      $btn.style.left = '0px';
      document.body.appendChild($btn);
      $btn.addEventListener('click',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return audioContext.resume();

              case 3:
                $btn.remove();
                resolve();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                reject('cannot resume audio context');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      })));
    });
  }

  var MiniGranular =
  /*#__PURE__*/
  function () {
    function MiniGranular(audioContext, soundFile) {
      _classCallCheck(this, MiniGranular);

      this.audioContext = audioContext;
      this.soundFile = soundFile; // position (in sec.) of the grain in the given buffer

      this.position = 1; // period (in sec.) between to grains

      this.period = 0.02; // duration (in sec.) of the grains

      this.duration = 0.1;
      this.output = this.audioContext.createGain();
    } // mimic the API of native audio node to interface w/ "real" world


    _createClass(MiniGranular, [{
      key: "connect",
      value: function connect(node) {
        this.output.connect(node);
      } // method that is called periodically by the scheduler
      // the given `time` is the logical time at which an event must be scheduled

    }, {
      key: "advanceTime",
      value: function advanceTime(time) {
        var jit = Math.random() * 0.002;
        var env = this.audioContext.createGain();
        env.connect(this.output);
        env.gain.value = 0;
        env.gain.linearRampToValueAtTime(1, time + jit + this.duration / 2);
        env.gain.linearRampToValueAtTime(0, time + jit + this.duration);
        var source = this.audioContext.createBufferSource();
        source.connect(env);
        source.buffer = this.soundFile;
        source.start(time + jit, this.position);
        source.stop(time + jit + this.duration);
        return time + this.period;
      }
    }]);

    return MiniGranular;
  }();

  function init() {
    return _init.apply(this, arguments);
  } // wait for the page to be fully loaded before launching app


  function _init() {
    _init = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var audioContext, loader, soundFile, granular, scheduler, controls, _loop, name;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              audioContext = new AudioContext(); // resume audio context

              _context.next = 3;
              return resumeContext(audioContext);

            case 3:
              // load some sound file
              loader = new loaders.AudioBufferLoader();
              _context.next = 6;
              return loader.load('./drum-loop.wav');

            case 6:
              soundFile = _context.sent;
              // instanciate the granular engine and connect to audio output
              granular = new MiniGranular(audioContext, soundFile);
              granular.connect(audioContext.destination); // make suer to default inside the file

              granular.position = soundFile.duration / 2; // instanciate a scheduler that uses the audio clock

              scheduler = new masters.Scheduler(function () {
                return audioContext.currentTime;
              }); // add the granular engine to the scheduler

              scheduler.add(granular); // ----------------------------------------------------------
              // add controls
              // ----------------------------------------------------------

              controls = {
                position: {
                  min: 0,
                  max: soundFile.duration - 0.2,
                  value: granular.position
                },
                duration: {
                  min: 0.005,
                  max: 0.2,
                  value: granular.duration
                },
                period: {
                  min: 0.005,
                  max: 0.1,
                  value: granular.period
                }
              }; // generate interface from controls definitions

              _loop = function _loop(name) {
                var config = controls[name];
                var $container = document.createElement('div');
                var $label = document.createElement('label');
                $label.textContent = name;
                var $input = document.createElement('input');
                $input.type = 'range';
                $input.min = config.min;
                $input.max = config.max;
                $input.step = 0.001;
                $input.value = config.value;
                $input.addEventListener('input', function (e) {
                  var value = parseFloat(e.target.value);
                  granular[name] = value;
                });
                $container.appendChild($label);
                $container.appendChild($input);
                document.body.appendChild($container);
              };

              for (name in controls) {
                _loop(name);
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }

  window.addEventListener('load', init);

}());
//# sourceMappingURL=bundle.js.map
