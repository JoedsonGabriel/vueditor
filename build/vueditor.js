/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _app = __webpack_require__(7);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Vueditor(el) {
	  _app2.default.el = el;
	  return new Vue(_app2.default);
	}

	exports.default = Vueditor;


	window.Vueditor = Vueditor;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toolbar = __webpack_require__(9);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _design = __webpack_require__(61);

	var _design2 = _interopRequireDefault(_design);

	var _code = __webpack_require__(66);

	var _code2 = _interopRequireDefault(_code);

	var _store = __webpack_require__(71);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    el: '',
	    store: _store2.default,
	    vuex: {
	        // todo 根节点这样有没有问题?
	        getters: {
	            content: function content(state) {
	                return state.content;
	            }
	        },
	        actions: {
	            updateContent: _actions.updateContent
	        }
	    },
	    components: {
	        toolbar: _toolbar2.default,
	        design: _design2.default,
	        code1: _code2.default
	    },
	    methods: {
	        getContent: function getContent() {
	            return this.content;
	        },
	        setContent: function setContent(content) {
	            this.updateContent(content);
	        }
	    }
	};
	// </script>
	// <template>
	//     <div class="vueditor">
	//         <toolbar v-ref:toolbar></toolbar>
	//         <design v-ref:design></design>
	//         <code1 v-ref:code></code1>
	//     </div>
	// </template>
	//
	// <script>
	// 取名为code 和 sourcecode 渲染不出来?

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\toolbar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./toolbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _color = __webpack_require__(13);

	var _color2 = _interopRequireDefault(_color);

	var _fontname = __webpack_require__(19);

	var _fontname2 = _interopRequireDefault(_fontname);

	var _fontsize = __webpack_require__(24);

	var _fontsize2 = _interopRequireDefault(_fontsize);

	var _view = __webpack_require__(29);

	var _view2 = _interopRequireDefault(_view);

	var _elements = __webpack_require__(32);

	var _elements2 = _interopRequireDefault(_elements);

	var _table = __webpack_require__(37);

	var _table2 = _interopRequireDefault(_table);

	var _undo = __webpack_require__(42);

	var _undo2 = _interopRequireDefault(_undo);

	var _link = __webpack_require__(45);

	var _link2 = _interopRequireDefault(_link);

	var _emoji = __webpack_require__(50);

	var _emoji2 = _interopRequireDefault(_emoji);

	var _picture = __webpack_require__(55);

	var _picture2 = _interopRequireDefault(_picture);

	var _actions = __webpack_require__(17);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {toolbarConfig} from '../js/config';

	var nativeBtns = {

	  removeFormat: { title: '清除选中区域格式', class: 'fa-eraser' },

	  bold: { title: '加粗', class: 'fa-bold' },
	  italic: { title: '斜体', class: 'fa-italic' },
	  underline: { title: '下划线', class: 'fa-underline' },
	  strikeThrough: { title: '中划线', class: 'fa-strikethrough' },

	  superscript: { title: '上标文字', class: 'fa-superscript' },
	  subscript: { title: '下标文字', class: 'fa-subscript' },
	  indent: { title: '增加缩进', class: 'fa-indent' },
	  outdent: { title: '减少缩进', class: 'fa-outdent' },

	  justifyLeft: { title: '左对齐', class: 'fa-align-left' },
	  justifyCenter: { title: '中间对齐', class: 'fa-align-center' },
	  justifyRight: { title: '右对齐', class: 'fa-align-right' },
	  justifyFull: { title: '两端对齐', class: 'fa-align-justify' },

	  insertOrderedList: { title: '设置有序列表', class: 'fa-list-ol' },
	  insertUnorderedList: { title: '设置无序列表', class: 'fa-list-ul' }
	}; //
	// <style lang="less" rel="stylesheet/less">
	//   .ve-toolbar {
	//     border: 1px solid #ddd;
	//     -webkit-user-select: none;
	//     -moz-user-select: none;
	//     user-select: none;
	//     &:after {
	//       clear: both;
	//       content: "";
	//       display: block;
	//       width: 0;
	//       height: 0;
	//       visibility: hidden;
	//     }
	//     &>a {
	//       float: left;
	//       &.ve-divider {
	//         display: block;
	//         width: 0;
	//         height: 26px;
	//         margin: 6px;
	//         border-right: 1px solid #ddd;
	//       }
	//       &:not(.ve-divider) {
	//         display: inline-block;
	//         padding: 10px 12px;
	//         color: rgba(0, 0, 0, 0.6);
	//       }
	//       &:not(.ve-disabled) {
	//         &:hover, &.ve-active {
	//           background: #eee;
	//           color: #000;
	//         }
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <div class="ve-toolbar">
	//     <template v-for="item in config" v-ref="config">
	//       <a v-if="nativeBtns[item]" href="javascript:;" title="{{nativeBtns[item].title}}"
	//          :class="{'ve-active': toolBtns[item].active, 've-disabled': toolBtns[item].disabled}" @click="clickHandler(item, null)"  unselectable="on">
	//         <i class="fa" :class="[nativeBtns[item].class]"></i>
	//       </a>
	//       <a v-if="item == 'divider' || item == '|'" href="javascript:;" class="ve-divider"></a>
	//       <component v-else :is="item" :param="customBtns[item]"></component>
	//     </template>
	//   </div>
	// </template>
	//
	// <script>

	var customBtns = {
	  foreColor: { colorType: 'foreColor' },
	  backColor: { colorType: 'backColor' }
	};

	exports.default = {
	  data: function data() {
	    return {
	      nativeBtns: nativeBtns,
	      customBtns: customBtns,
	      defaultConfig: ['removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider', 'bold', 'italic', 'underline', 'strikeThrough', 'link', 'divider', 'subscript', 'superscript', 'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent', 'insertOrderedList', 'insertUnorderedList', '|', 'emoji', 'picture', 'table1', '|', 'view'],
	      customConfig: toolbarConfig
	    };
	  },

	  computed: {
	    config: function config() {
	      return this.customConfig || this.defaultConfig;
	    }
	  },
	  vuex: {
	    getters: {
	      toolBtns: function toolBtns(state) {
	        return state.toolBtns;
	      }
	    },
	    actions: actions
	  },
	  methods: {
	    clickHandler: function clickHandler(name, value) {
	      this.$root.$refs.design.exec(name, value);
	    }
	  },
	  ready: function ready() {
	    var temp = null;
	    this.$children.forEach(function (comp) {
	      comp.hasOwnProperty('canRedo') && (temp = comp);
	    });
	    this.$refs.undo = temp;
	  },

	  components: {
	    'foreColor': _color2.default,
	    'backColor': _color2.default,
	    fontName: _fontname2.default,
	    fontSize: _fontsize2.default,
	    view: _view2.default,
	    elements: _elements2.default,
	    table1: _table2.default,
	    undo: _undo2.default,
	    link: _link2.default,
	    emoji: _emoji2.default,
	    picture: _picture2.default
	  }
	};
	// </script>

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\color.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./color.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	// <style lang="less" rel="stylesheet/less">
	//   .colorpicker {
	//     width: 176px;
	//     padding: 10px;
	//     position: absolute;
	//     top: 39px;
	//     z-index: 1000;
	//     background: #fff;
	//     border: 1px solid #ccc;
	//     li {
	//       margin: 1px;
	//       float: left;
	//       a {
	//         display: block;
	//         width: 20px;
	//         height: 20px;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <a href="javascript:;" title="{{param.colorType == 'foreColor' ? '文字颜色' : '背景颜色'}}"
	//      :class="{'ve-active': toolBtns[this.param.colorType].showmenu, 've-disabled': toolBtns[this.param.colorType].disabled}" @click="toggle">
	//     <i class="fa" :class="{'fa-file-text': param.colorType == 'backColor', 'fa-file-text-o': param.colorType == 'foreColor'}"></i>
	//   </a>
	//   <div class="ve-toolbar-dropdown colorpicker" v-show="toolBtns[this.param.colorType].showmenu" :style="{left: left + 'px', top: top + 'px'}">
	//     <div class="ve-input-box">
	//       <input type="text" class="ve-input" placeholder="颜色代码" v-model="color">
	//       <button type="button" class="ve-btn" @click="inputHandler">确定</button>
	//     </div>
	//     <ul>
	//       <li v-for="color in colors" @click="clickHandler(color)"><a href="javascript:;" title="{{color}}" :style="{background: color}"></a></li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

	/*'#E53333', '#E56600', '#FF9900', '#64451D', '#DFC5A4', '#FFE500', '#009900', '#006600', '#99BB00', '#B8D100',
	 '#60D978', '#337FE5', '#003399', '#4C33E5', '#9933E5', '#CC33E5', '#EE33EE', '#00D5FF', '#FFFFFF', '#CCCCCC',
	 '#999999', '#666666', '#333333', '#000000'*/

	var colors = ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF', '#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF', '#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE', '#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD', '#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5', '#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B', '#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842', '#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'];

	exports.default = {
	  data: function data() {
	    return {
	      colors: colors,
	      color: '',
	      left: 0,
	      top: 0
	    };
	  },

	  props: ['param'],
	  vuex: {
	    getters: {
	      toolBtns: function toolBtns(state) {
	        return state.toolBtns;
	      }
	    },
	    actions: {
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (!this.toolBtns[this.param.colorType].disabled) {
	        var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	        this.left = obj.offsetLeft;
	        this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	        //this.display = !this.display;
	        this.updateTBDropdownDisplay(this.param.colorType);
	      }
	    },
	    checkValid: function checkValid(color) {
	      var sColor = color.replace(/\s+/g, '');
	      var hsl3 = /^#[0-9a-f]{3}$/i,
	          hsl6 = /^#[0-9a-f]{6}$/i,
	          rgb = /^rgb\(((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]),){2}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\)$/;
	      if (hsl3.test(sColor) || hsl6.test(sColor) || rgb.test(sColor)) {
	        return true;
	      }
	    },
	    setColor: function setColor(colorType, color) {
	      this.$root.$refs.design.exec(colorType, color);
	    },
	    clickHandler: function clickHandler(color) {
	      this.setColor(this.param.colorType, color);
	      this.updateTBDropdownDisplay();
	    },
	    inputHandler: function inputHandler() {
	      var color = this.color;
	      var result = this.checkValid(color);
	      if (!result) {
	        alert('请输入正确的颜色代码。');
	      } else {
	        this.setColor(this.param.colorType, color);
	        this.updateTBDropdownDisplay();
	      }
	      this.color = '';
	    }
	  }
	};
	// </script>

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var updateTBActive = exports.updateTBActive = function updateTBActive(_ref, obj) {
	    var dispatch = _ref.dispatch;

	    dispatch('UPDATE_TB_ACTIVE', obj);
	};

	var updateTBDisabled = exports.updateTBDisabled = function updateTBDisabled(_ref2, json) {
	    var dispatch = _ref2.dispatch;

	    dispatch('UPDATE_TB_DISABLED', json);
	};

	var updateTBDropdownDisplay = exports.updateTBDropdownDisplay = function updateTBDropdownDisplay(_ref3, current) {
	    var dispatch = _ref3.dispatch;

	    dispatch('UPDATE_TB_DROPDOWN_DISPLAY', current);
	};

	var updateContent = exports.updateContent = function updateContent(_ref4, content) {
	    var dispatch = _ref4.dispatch;

	    dispatch('UPDATE_CONTENT', content);
	};

	var switchView = exports.switchView = function switchView(_ref5) {
	    var dispatch = _ref5.dispatch;

	    dispatch('SWITCH_VIEW');
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" title=\"{{param.colorType == 'foreColor' ? '文字颜色' : '背景颜色'}}\"\n   :class=\"{'ve-active': toolBtns[this.param.colorType].showmenu, 've-disabled': toolBtns[this.param.colorType].disabled}\" @click=\"toggle\">\n  <i class=\"fa\" :class=\"{'fa-file-text': param.colorType == 'backColor', 'fa-file-text-o': param.colorType == 'foreColor'}\"></i>\n</a>\n<div class=\"ve-toolbar-dropdown colorpicker\" v-show=\"toolBtns[this.param.colorType].showmenu\" :style=\"{left: left + 'px', top: top + 'px'}\">\n  <div class=\"ve-input-box\">\n    <input type=\"text\" class=\"ve-input\" placeholder=\"颜色代码\" v-model=\"color\">\n    <button type=\"button\" class=\"ve-btn\" @click=\"inputHandler\">确定</button>\n  </div>\n  <ul>\n    <li v-for=\"color in colors\" @click=\"clickHandler(color)\"><a href=\"javascript:;\" title=\"{{color}}\" :style=\"{background: color}\"></a></li>\n  </ul>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\fontname.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./fontname.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	//
	// <style lang="less" rel="stylesheet/less">
	//   .font-select {
	//     width: 100px;
	//     font-size: 14px;
	//     vertical-align: bottom;
	//     overflow: hidden;
	//     white-space: nowrap;
	//     text-overflow: ellipsis;
	//   }
	//   .font-name {
	//     li {
	//       padding: 6px;
	//       border-bottom: 1px solid #ddd;
	//       &:last-child {
	//         border-bottom: none;
	//       }
	//       &:hover {
	//         background: #d5e1f2;
	//         border-color: #a3bde3;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <a href="javascript:;" class="ve-select font-select" :class="{'ve-disabled': disabled}" @click="toggle">
	//     <span>{{val || fonts[0].abbr}}</span><i :class="{'triangle-down': !display, 'triangle-up': display}"></i>
	//   </a>
	//   <div class="ve-toolbar-dropdown ve-select-dropdown font-name" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//     <ul>
	//       <li v-for="font in fonts" @click="clickHandler(font)">
	//         <a href="javascript:;" :style="{fontFamily: font.name + ', sans-serif'}">{{font.abbr || font.name}}</a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

	var fonts = [{ name: "宋体, SimSun", abbr: "宋体" }, { name: "黑体, SimHei", abbr: "黑体" }, { name: "楷体, SimKai", abbr: "楷体" }, { name: "微软雅黑, 'Microsoft YaHei'", abbr: "微软雅黑" }, { name: "arial black" }, { name: "times new roman" }, { name: "Courier New" }];

	exports.default = {
	  data: function data() {
	    return {
	      fonts: fonts,
	      val: '',
	      left: 0,
	      top: 0
	    };
	  },

	  vuex: {
	    getters: {
	      disabled: function disabled(state) {
	        return state.toolBtns.fontName.disabled;
	      },
	      display: function display(state) {
	        return state.toolBtns.fontName.showmenu;
	      }
	    },
	    actions: {
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (!this.disabled) {
	        var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	        this.left = obj.offsetLeft;
	        this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	        this.updateTBDropdownDisplay('fontName');
	      }
	    },
	    clickHandler: function clickHandler(font) {
	      this.val = font.abbr || font.name;
	      this.$root.$refs.design.exec('fontName', font.name + ', sans-serif');
	      this.updateTBDropdownDisplay();
	    }
	  }
	};
	// </script>

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" class=\"ve-select font-select\" :class=\"{'ve-disabled': disabled}\" @click=\"toggle\">\n  <span>{{val || fonts[0].abbr}}</span><i :class=\"{'triangle-down': !display, 'triangle-up': display}\"></i>\n</a>\n<div class=\"ve-toolbar-dropdown ve-select-dropdown font-name\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n  <ul>\n    <li v-for=\"font in fonts\" @click=\"clickHandler(font)\">\n      <a href=\"javascript:;\" :style=\"{fontFamily: font.name + ', sans-serif'}\">{{font.abbr || font.name}}</a>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\fontsize.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./fontsize.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	//
	// <style lang="less" rel="stylesheet/less">
	//   .font-size {
	//     li {
	//       padding: 6px;
	//       border-bottom: 1px solid #ddd;
	//       &:last-child {
	//         border-bottom: none;
	//       }
	//       &:hover {
	//         background: #d5e1f2;
	//         border-color: #a3bde3;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <a href="javascript:;" class="ve-select" :class="{'ve-disabled': disabled}" @click="toggle">
	//     <span>{{val || fontSize[0]}}px</span><i :class="{'triangle-down': !display, 'triangle-up': display}"></i>
	//   </a>
	//   <div class="ve-toolbar-dropdown ve-select-dropdown font-size" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//     <ul>
	//       <li v-for="size in fontSize" @click="clickHandler(size)">
	//         <a href="javascript:;">{{size}}px</a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

	var fontSize = [12, 14, 16, 18, 20, 24, 28, 32, 36];

	exports.default = {
	  data: function data() {
	    return {
	      fontSize: fontSize,
	      val: '',
	      left: 0,
	      top: 0
	    };
	  },

	  vuex: {
	    getters: {
	      disabled: function disabled(state) {
	        return state.toolBtns.fontSize.disabled;
	      },
	      display: function display(state) {
	        return state.toolBtns.fontSize.showmenu;
	      }
	    },
	    actions: {
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (!this.disabled) {
	        var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	        this.left = obj.offsetLeft;
	        this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	        this.updateTBDropdownDisplay('fontSize');
	      }
	    },
	    clickHandler: function clickHandler(size) {
	      this.val = size;
	      this.$root.$refs.design.exec('fontSize', size);
	      this.updateTBDropdownDisplay();
	    }
	  }
	};
	// </script>

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" class=\"ve-select\" :class=\"{'ve-disabled': disabled}\" @click=\"toggle\">\n  <span>{{val || fontSize[0]}}px</span><i :class=\"{'triangle-down': !display, 'triangle-up': display}\"></i>\n</a>\n<div class=\"ve-toolbar-dropdown ve-select-dropdown font-size\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n  <ul>\n    <li v-for=\"size in fontSize\" @click=\"clickHandler(size)\">\n      <a href=\"javascript:;\">{{size}}px</a>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\view.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./view.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	  data: function data() {
	    return {
	      editor: null
	    };
	  },

	  vuex: {
	    actions: {
	      switchView: _actions.switchView,
	      updateTBDisabled: _actions.updateTBDisabled,
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    clickHandler: function clickHandler() {
	      this.switchView();
	      this.updateTBDisabled();
	      this.updateTBDropdownDisplay();
	    }
	  }
	};
	// </script>
	//
	// <template>
	//   <a href="javascript:;" title="源码" @click="clickHandler">
	//     <i class="fa fa-code"></i>
	//   </a>
	// </template>
	//
	// <script>

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n\n<a href=\"javascript:;\" title=\"源码\" @click=\"clickHandler\">\n  <i class=\"fa fa-code\"></i>\n</a>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\elements.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./elements.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	  data: function data() {
	    return {
	      arr: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	      val: '',
	      left: 0,
	      top: 0
	    };
	  },

	  vuex: {
	    getters: {
	      disabled: function disabled(state) {
	        return state.toolBtns.elements.disabled;
	      },
	      display: function display(state) {
	        return state.toolBtns.elements.showmenu;
	      }
	    },
	    actions: {
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (!this.disabled) {
	        // https://vuejs.org.cn/api/#vm-el
	        // https://vuejs.org.cn/guide/components.html#片断实例
	        var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	        this.left = obj.offsetLeft;
	        this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	        this.updateTBDropdownDisplay('elements');
	      }
	    },
	    selectItem: function selectItem(event) {
	      var tagName = event.target.innerHTML.trim();
	      this.val = tagName;
	      this.$root.$refs.design.exec('formatBlock', tagName);
	      this.updateTBDropdownDisplay();
	    }
	  }
	};

	// </script>
	// <style lang="less" rel="stylesheet/less">
	//   .format-block {
	//     a {
	//       display: block;
	//       padding: 6px;
	//       border-bottom: 1px solid #ddd;
	//       &:last-child {
	//         border-bottom: none;
	//       }
	//       &:hover {
	//         background: #d5e1f2;
	//         border-color: #a3bde3;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <a href="javascript:;" class="ve-select" :class="{'ve-disabled': disabled}" @click="toggle">
	//     <span>{{val || arr[0]}}</span><i :class="{'triangle-down': !display, 'triangle-up': display}"></i>
	//   </a>
	//   <div class="ve-toolbar-dropdown ve-select-dropdown format-block" @click="selectItem" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//     <a href="javascript:;" v-for="item in arr">{{item}}</a>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" class=\"ve-select\" :class=\"{'ve-disabled': disabled}\" @click=\"toggle\">\n  <span>{{val || arr[0]}}</span><i :class=\"{'triangle-down': !display, 'triangle-up': display}\"></i>\n</a>\n<div class=\"ve-toolbar-dropdown ve-select-dropdown format-block\" @click=\"selectItem\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n  <a href=\"javascript:;\" v-for=\"item in arr\">{{item}}</a>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(38)
	__vue_script__ = __webpack_require__(40)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	  data: function data() {
	    return {
	      num: 64,
	      x: -1,
	      y: -1,
	      left: 0,
	      top: 0
	    };
	  },

	  vuex: {
	    getters: {
	      disabled: function disabled(state) {
	        return state.toolBtns.table1.disabled;
	      },
	      display: function display(state) {
	        return state.toolBtns.table1.showmenu;
	      }
	    },
	    actions: {
	      updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      if (!this.disabled) {
	        var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	        this.left = obj.offsetLeft;
	        this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	        this.x = -1;
	        this.y = -1;
	        this.updateTBDropdownDisplay('table1');
	      }
	    },
	    overHandler: function overHandler(index) {
	      this.x = index % 8;
	      this.y = parseInt(index / 8);
	    },
	    clickHandler: function clickHandler(index) {
	      var html = this.createTable(this.x + 1, this.y + 1);
	      this.$root.$refs.design.exec('insertHTML', html);
	      this.updateTBDropdownDisplay();
	    },
	    createTable: function createTable(rows, cols) {
	      var oTable = document.createElement('table');
	      var oTbody = document.createElement('tbody');
	      oTable.style.cssText = 'border-collapse: collapse;';
	      oTable.appendChild(oTbody);
	      for (var i = 0; i < rows; i++) {
	        var tr = document.createElement('tr');
	        for (var j = 0; j < cols; j++) {
	          var td = document.createElement('td');
	          td.innerHTML = '<br>';
	          td.style.cssText = 'width: 50px; border: 1px #ddd solid;';
	          tr.appendChild(td);
	        }
	        oTbody.appendChild(tr);
	      }
	      return oTable.outerHTML;
	    }
	  }
	};

	// </script>
	//
	// <style lang="less" rel="stylesheet/less">
	//   .mytable {
	//     width: 192px;
	//     padding: 10px;
	//     position: absolute;
	//     top: 39px;
	//     z-index: 1000;
	//     background: #fff;
	//     border: 1px solid #ccc;
	//     li a {
	//       width: 20px;
	//       height: 20px;
	//       margin: 1px;
	//       float: left;
	//       border: 1px solid #ddd;
	//       &.active {
	//         background: #F7F7F7;
	//       }
	//     }
	//   }
	// </style>
	//
	// <template>
	//   <a href="javascript:;" title="表格" :class="{'ve-disabled': disabled, 've-active': display}" @click="toggle">
	//     <i class="fa fa-table"></i>
	//   </a>
	//   <div class="ve-toolbar-dropdown mytable" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//     <ul>
	//       <li v-for="i in num" @mouseover="overHandler(i)" @click="clickHandler(i)">
	//         <a href="javascript:;" :class="{'active': (i%8 <= x && parseInt(i/8) <= y)}"></a>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" title=\"表格\" :class=\"{'ve-disabled': disabled, 've-active': display}\" @click=\"toggle\">\n  <i class=\"fa fa-table\"></i>\n</a>\n<div class=\"ve-toolbar-dropdown mytable\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n  <ul>\n    <li v-for=\"i in num\" @mouseover=\"overHandler(i)\" @click=\"clickHandler(i)\">\n      <a href=\"javascript:;\" :class=\"{'active': (i%8 <= x && parseInt(i/8) <= y)}\"></a>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\undo.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./undo.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	    data: function data() {
	        return {
	            stack: [],
	            index: -1
	        };
	    },

	    vuex: {
	        getters: {
	            undoState: function undoState(state) {
	                return state.toolBtns.undo.disabled;
	            },
	            redoState: function redoState(state) {
	                return state.toolBtns.redo.disabled;
	            },
	            currentView: function currentView(state) {
	                return state.currentView;
	            },
	            content: function content(state) {
	                return state.content;
	            }
	        },
	        actions: {
	            updateContent: _actions.updateContent,
	            updateTBDisabled: _actions.updateTBDisabled
	        }
	    },
	    computed: {
	        canUndo: function canUndo() {
	            return this.index > 0;
	        },
	        canRedo: function canRedo() {
	            return this.index < this.stack.length - 1;
	        }
	    },
	    watch: {
	        'content': function content(_content) {
	            this.push(_content);
	        },
	        'currentView': function currentView() {
	            this.stack = [];
	            this.index = -1;
	            this.push(this.content, true);
	        }
	    },
	    methods: {
	        undo: function undo() {
	            if (!this.canUndo) return;
	            this.index--;
	            var content = this.stack[this.index];
	            this.updateContent(content);
	        },
	        redo: function redo() {
	            if (!this.canRedo) return;
	            this.index++;
	            var content = this.stack[this.index];
	            this.updateContent(content);
	        },
	        push: function push(content, isInit) {
	            if (content != this.stack[this.index]) {
	                this.stack = this.stack.slice(0, this.index + 1);
	                this.stack.push(content);
	                this.index++;
	            }
	            this.updateTBDisabled(isInit ? { undo: true, redo: true } : { undo: !this.canUndo, redo: !this.canRedo });
	        }
	    },
	    ready: function ready() {
	        this.push(this.content, true);
	    }
	};
	// </script>
	//
	// <template>
	//     <a href="javascript:;" title="撤销" :class="{'ve-disabled': undoState}" @click="undo">
	//         <i class="fa fa-undo"></i>
	//     </a>
	//     <a href="javascript:;" title="恢复" :class="{'ve-disabled': redoState}" @click="redo">
	//         <i class="fa fa-repeat"></i>
	//     </a>
	// </template>
	//
	// <script>

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "\n\n<a href=\"javascript:;\" title=\"撤销\" :class=\"{'ve-disabled': undoState}\" @click=\"undo\">\n    <i class=\"fa fa-undo\"></i>\n</a>\n<a href=\"javascript:;\" title=\"恢复\" :class=\"{'ve-disabled': redoState}\" @click=\"redo\">\n    <i class=\"fa fa-repeat\"></i>\n</a>\n";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(46)
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\link.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./link.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */,
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	    data: function data() {
	        return {
	            left: 0,
	            top: 0,
	            linkVal: ''
	        };
	    },

	    vuex: {
	        getters: {
	            linkState: function linkState(state) {
	                return state.toolBtns.link.disabled;
	            },
	            unLinkState: function unLinkState(state) {
	                return state.toolBtns.unlink.disabled;
	            },
	            display: function display(state) {
	                return state.toolBtns.link.showmenu;
	            }
	        },
	        actions: {
	            updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            var valid = this.$root.$refs.design.rangeValid();
	            if (!valid) {
	                alert('请选择一段文本！');
	                return;
	            }
	            if (!this.disabled) {
	                var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	                this.left = obj.offsetLeft - this.width / 2 + obj.offsetWidth / 2;
	                this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	                this.updateTBDropdownDisplay('link');
	            }
	        },
	        checkValid: function checkValid() {
	            var link = this.linkVal;
	            link.indexOf('http://') == -1 && (link = 'http://' + link);
	            return link;
	        },
	        linkHandler: function linkHandler() {
	            var link = this.checkValid();
	            this.$root.$refs.design.exec('CreateLink', link);
	            this.updateTBDropdownDisplay();
	        },
	        unLinkHandler: function unLinkHandler() {
	            var comp = this.$root.$refs.design;
	            var range = comp.getRange();
	            var container = range.commonAncestorContainer;
	            if (container.nodeType == 3) {
	                container = container.parentNode;
	            }
	            if (container.tagName == 'A') {
	                var newRange = document.createRange();
	                newRange.selectNode(container);
	                comp.setRange(newRange);
	                comp.exec('Unlink', null);
	                comp.removeRange(newRange);
	            } else {
	                comp.exec('Unlink', null);
	            }
	        }
	    }
	};
	// </script>
	// <style lang="less" rel="stylesheet/less">
	//     .link-popover {
	//         width: 240px;
	//         height: 90px;
	//     }
	// </style>
	//
	// <template>
	//     <a href="javascript:;" title="添加超链接" :class="{'ve-disabled': linkState, 've-active': display}" @click="toggle">
	//         <i class="fa fa-link"></i>
	//     </a>
	//     <a href="javascript:;" title="取消超链接" :class="{'ve-disabled': unLinkState}" @click="unLinkHandler">
	//         <i class="fa fa-unlink"></i>
	//     </a>
	//     <div class="ve-popover link-popover" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//         <div class="pop-arrow"></div>
	//         <div class="pop-header">添加超链接</div>
	//         <div class="pop-body">
	//             <div class="ve-input-box">
	//                 <input type="text" class="ve-input" v-model="linkVal"><button class="ve-btn" @click="linkHandler">确定</button>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n<a href=\"javascript:;\" title=\"添加超链接\" :class=\"{'ve-disabled': linkState, 've-active': display}\" @click=\"toggle\">\n    <i class=\"fa fa-link\"></i>\n</a>\n<a href=\"javascript:;\" title=\"取消超链接\" :class=\"{'ve-disabled': unLinkState}\" @click=\"unLinkHandler\">\n    <i class=\"fa fa-unlink\"></i>\n</a>\n<div class=\"ve-popover link-popover\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n    <div class=\"pop-arrow\"></div>\n    <div class=\"pop-header\">添加超链接</div>\n    <div class=\"pop-body\">\n        <div class=\"ve-input-box\">\n            <input type=\"text\" class=\"ve-input\" v-model=\"linkVal\"><button class=\"ve-btn\" @click=\"linkHandler\">确定</button>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\emoji.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./emoji.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	    data: function data() {
	        return {
	            arr: ["U_E056", "U_E057", "U_E058", "U_E059", "U_E105", "U_E106", "U_E107", "U_E108", "U_E401", "U_E402", "U_E403", "U_E404", "U_E405", "U_E406", "U_E407", "U_E408", "U_E409", "U_E410", "U_E411", "U_E412", "U_E413", "U_E414", "U_E415", "U_E416", "U_E417", "U_E418", "U_E40A", "U_E40B", "U_E40C", "U_E40D", "U_E40E", "U_E40F"],
	            left: 0,
	            top: 0
	        };
	    },

	    vuex: {
	        getters: {
	            disabled: function disabled(state) {
	                return state.toolBtns.emoji.disabled;
	            },
	            display: function display(state) {
	                return state.toolBtns.emoji.showmenu;
	            }
	        },
	        actions: {
	            updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            if (!this.disabled) {
	                var obj = this.$el.nextElementSibling || this.$el.nextSibling;
	                this.left = obj.offsetLeft - this.width / 2 + obj.offsetWidth / 2;
	                this.top = obj.offsetTop + (obj.offsetHeight + parseInt(getComputedStyle(obj).marginBottom));
	                this.updateTBDropdownDisplay('emoji');
	            }
	        },
	        insertItem: function insertItem(event) {
	            var img = event.target.cloneNode(true);
	            img.style.width = '30px';
	            this.$root.$refs.design.exec('insertHTML', img.outerHTML.replace('/dist', ''));
	        }
	    }
	};
	// </script>
	// <style lang="less" rel="stylesheet/less">
	//     .emoji-popover {
	//         width: 260px;
	//         height: 180px;
	//     }
	//     .emoji-wrap {
	//         overflow: hidden;
	//         a {
	//             float: left;
	//             width: 30px;
	//             height: 30px;
	//         }
	//         img {
	//             max-width: 100%;
	//         }
	//     }
	// </style>
	//
	// <template>
	//     <a href="javascript:;" title="插入表情" :class="{'ve-disabled': disabled, 've-active': display}" @click="toggle">
	//         <i class="fa fa-smile-o"></i>
	//     </a>
	//     <div class="ve-popover emoji-popover" v-show="display" :style="{left: left + 'px', top: top + 'px'}">
	//         <div class="pop-arrow"></div>
	//         <div class="pop-header">插入表情</div>
	//         <div class="pop-body">
	//             <div class="emoji-wrap" @click="insertItem">
	//                 <a href="javascript:;" v-for="item in arr">
	//                     <img :src="'../dist/images/emoji/'+item+'.png'">
	//                 </a>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<a href=\"javascript:;\" title=\"插入表情\" :class=\"{'ve-disabled': disabled, 've-active': display}\" @click=\"toggle\">\n    <i class=\"fa fa-smile-o\"></i>\n</a>\n<div class=\"ve-popover emoji-popover\" v-show=\"display\" :style=\"{left: left + 'px', top: top + 'px'}\">\n    <div class=\"pop-arrow\"></div>\n    <div class=\"pop-header\">插入表情</div>\n    <div class=\"pop-body\">\n        <div class=\"emoji-wrap\" @click=\"insertItem\">\n            <a href=\"javascript:;\" v-for=\"item in arr\">\n                <img :src=\"'../dist/images/emoji/'+item+'.png'\">\n            </a>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\picture.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(59)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./picture.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	    data: function data() {
	        return {
	            ctnW: window.innerWidth,
	            ctnH: window.innerHeight
	        };
	    },

	    vuex: {
	        getters: {
	            disabled: function disabled(state) {
	                return state.toolBtns.picture.disabled;
	            },
	            display: function display(state) {
	                return state.toolBtns.picture.showmenu;
	            }
	        },
	        actions: {
	            updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	        }
	    },
	    methods: {
	        toggle: function toggle() {
	            if (!this.disabled) {
	                this.updateTBDropdownDisplay('picture');
	            }
	        },
	        hideDialog: function hideDialog() {
	            this.updateTBDropdownDisplay();
	        },
	        certainHandler: function certainHandler(event) {
	            var url = '';
	            var parent = this.$el.nextElementSibling.nextElementSibling || this.$el.nextSibling.nextSibling;
	            var obj = parent.querySelector('input');
	            if (navigator.userAgent.indexOf('MSIE') >= 1) {
	                // IE
	                url = obj.value;
	            } else {
	                if (obj.files.length != 0 && obj.files.item(0).type.indexOf('image') != -1) {
	                    url = window.URL.createObjectURL(obj.files.item(0));
	                }
	            }
	            if (url) {
	                this.$root.$refs.design.exec('insertHTML', '<img src="' + url + '">');
	                this.hideDialog();
	            } else {
	                alert('未选择图片或选择的文件并非图片!');
	            }
	        }
	    },
	    ready: function ready() {
	        window.addEventListener('resize', function () {
	            this.ctnW = window.innerWidth;
	            this.ctnH = window.innerHeight;
	        }.bind(this), false);
	    }
	};
	// </script>
	// <style lang="less" rel="stylesheet/less">
	//     .pic-dialog .ve-dialog-wrap {
	//         width: 500px;
	//     }
	// </style>
	//
	// <template>
	//     <a href="javascript:;" title="插入图片" :class="{'ve-disabled': disabled}" @click="toggle">
	//         <i class="fa fa-file-image-o"></i>
	//     </a>
	//     <div class="ve-dialog pic-dialog" v-show="display" @click="hideDialog" :style="{width: ctnW + 'px', height: ctnH + 'px'}">
	//         <div class="ve-dialog-wrap" v-on:click.stop>
	//             <div class="dialog-header">插入图片<a href="javascript:;" class="ve-close" @click="hideDialog">&times;</a></div>
	//             <div class="dialog-body">
	//                 <input type="file">
	//             </div>
	//             <div class="dialog-footer">
	//                 <div class="ve-btn-box">
	//                     <buttton class="ve-btn" @click="hideDialog">取消</buttton>
	//                     <buttton class="ve-btn" @click="certainHandler">确定</buttton>
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n<a href=\"javascript:;\" title=\"插入图片\" :class=\"{'ve-disabled': disabled}\" @click=\"toggle\">\n    <i class=\"fa fa-file-image-o\"></i>\n</a>\n<div class=\"ve-dialog pic-dialog\" v-show=\"display\" @click=\"hideDialog\" :style=\"{width: ctnW + 'px', height: ctnH + 'px'}\">\n    <div class=\"ve-dialog-wrap\" v-on:click.stop>\n        <div class=\"dialog-header\">插入图片<a href=\"javascript:;\" class=\"ve-close\" @click=\"hideDialog\">&times;</a></div>\n        <div class=\"dialog-body\">\n            <input type=\"file\">\n        </div>\n        <div class=\"dialog-footer\">\n            <div class=\"ve-btn-box\">\n                <buttton class=\"ve-btn\" @click=\"hideDialog\">取消</buttton>\n                <buttton class=\"ve-btn\" @click=\"certainHandler\">确定</buttton>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"ve-toolbar\">\n  <template v-for=\"item in config\" v-ref=\"config\">\n    <a v-if=\"nativeBtns[item]\" href=\"javascript:;\" title=\"{{nativeBtns[item].title}}\"\n       :class=\"{'ve-active': toolBtns[item].active, 've-disabled': toolBtns[item].disabled}\" @click=\"clickHandler(item, null)\"  unselectable=\"on\">\n      <i class=\"fa\" :class=\"[nativeBtns[item].class]\"></i>\n    </a>\n    <a v-if=\"item == 'divider' || item == '|'\" href=\"javascript:;\" class=\"ve-divider\"></a>\n    <component v-else :is=\"item\" :param=\"customBtns[item]\"></component>\n  </template>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(62)
	__vue_script__ = __webpack_require__(64)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\design.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./design.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(17);

	exports.default = {
	    data: function data() {
	        return {
	            iframeEle: null,
	            iframeWin: null,
	            iframeDoc: null,
	            iframeBody: null,
	            timer: null,
	            inited: false,
	            cache: ''
	        };
	    },


	    vuex: {
	        getters: {
	            currentView: function currentView(state) {
	                return state.currentView;
	            },
	            content: function content(state) {
	                return state.content;
	            }
	        },
	        actions: {
	            updateContent: _actions.updateContent,
	            updateTBActive: _actions.updateTBActive,
	            updateTBDropdownDisplay: _actions.updateTBDropdownDisplay
	        }
	    },

	    watch: {
	        'content': function content(val) {
	            if (this.inited) {
	                this.iframeBody.innerHTML != val && (this.iframeBody.innerHTML = val);
	            } else {
	                this.cache = val;
	            }
	        }
	    },

	    methods: {
	        init: function init(event) {
	            this.iframeEle = event.target;
	            this.iframeWin = this.iframeEle.contentWindow;
	            this.iframeDoc = this.iframeWin.document;
	            this.iframeBody = this.iframeWin.document.body;
	            this.inited = true;
	            if (this.cache) {
	                this.iframeBody.innerHTML != this.cache && (this.iframeBody.innerHTML = this.cache);
	                this.cache = '';
	            }
	            this.addEvent();
	        },
	        addEvent: function addEvent() {
	            this.selectionChange();
	            this.iframeDoc.addEventListener('click', this.updateTBDropdownDisplay, false);
	            this.iframeBody.addEventListener('keydown', this.keydownHandler, false);
	            this.iframeBody.addEventListener('keyup', this.keyupHandler, false);
	        },
	        keydownHandler: function keydownHandler(event) {
	            var comp = this.$root.$refs.toolbar.$refs.undo;
	            if (event.ctrlKey && event.keyCode == 89) {
	                //恢复
	                event.preventDefault();
	                comp.redo();
	            }
	            if (event.ctrlKey && event.keyCode == 90) {
	                //撤销
	                event.preventDefault();
	                comp.undo();
	            }
	        },
	        keyupHandler: function keyupHandler(event) {
	            clearTimeout(this.timer);
	            this.timer = setTimeout(function () {
	                this.updateContent(this.iframeBody.innerHTML);
	            }.bind(this), 500);
	        },
	        selectionChange: function selectionChange() {
	            var _this = this;

	            this.iframeDoc.addEventListener('selectionchange', function () {
	                this.updateTBActive(this.iframeDoc);
	            }.bind(this), false);
	            if (navigator.userAgent.indexOf('Firefox') !== -1) {
	                (function () {
	                    var oSel = _this.iframeWin.getSelection();
	                    var focusNode = null;
	                    setInterval(function () {
	                        if (oSel && oSel.rangeCount) {
	                            if (focusNode != oSel.focusNode) {
	                                focusNode = oSel.focusNode;
	                                this.updateTBActive(this.iframeDoc);
	                            }
	                        } else {
	                            oSel = this.iframeWin.getSelection();
	                        }
	                    }.bind(_this), 500);
	                })();
	            }
	        },
	        exec: function exec(name, value) {
	            if (document.queryCommandSupported('styleWithCss')) {
	                this.iframeDoc.execCommand('styleWithCss', false, true);
	            }
	            this[name] ? this[name](name, value) : this.iframeDoc.execCommand(name, false, value);
	            this.updateTBActive(this.iframeDoc);
	            this.updateContent(this.iframeBody.innerHTML);
	        },
	        insertHTML: function insertHTML(name, value) {
	            var oSel = this.iframeWin.getSelection();
	            var oRange = this.getRange();
	            if (!oRange) return;
	            var node = null;
	            var frag = this.iframeDoc.createDocumentFragment();
	            var obj = this.iframeDoc.createElement('div');
	            obj.innerHTML = value;
	            while (obj.firstChild) {
	                node = obj.firstChild;
	                frag.appendChild(node);
	            }
	            oRange.insertNode(frag);
	            oRange.setStartAfter(node);
	            oRange.collapse(true);
	            oSel.removeAllRanges();
	            oSel.addRange(oRange);
	        },
	        fontSize: function fontSize(name, value) {
	            var selection = this.iframeWin.getSelection();
	            var range = this.getRange();
	            if (!range || range.collapsed) {
	                return;
	            }
	            var childNodes = range.cloneContents().childNodes;
	            if (childNodes.length == 1 && childNodes[0].nodeType == 1 && childNodes[0].tagName.toLowerCase() == 'span') {
	                var span = range.extractContents().childNodes[0];
	                span.style.fontSize = value + 'px';
	                range.insertNode(span);
	                range.selectNode(span);
	                selection.removeAllRanges();
	                selection.addRange(range);
	            } else {
	                if (navigator.userAgent.indexOf('Chrome') != -1 && navigator.userAgent.indexOf('Edge') == -1) {
	                    if (document.queryCommandSupported('styleWithCss')) {
	                        this.iframeDoc.execCommand('styleWithCss', false, true);
	                    }
	                    this.iframeDoc.execCommand('fontSize', false, 7); //设置为1-7一般都可以，但是当设置为3时，在chrome中会没反应，应该是face="3"和默认字号一样大造成的。
	                    var container = range.commonAncestorContainer;
	                    container.nodeType == 3 && (container = container.parentNode);
	                    container.tagName.toLowerCase() == 'span' && (container = container.parentNode);
	                    Array.prototype.forEach.call(container.getElementsByTagName('span'), function (span) {
	                        if (span.style.fontSize.trim() == '-webkit-xxx-large' || span.style.fontSize.trim() == 'xx-large') {
	                            span.style.fontSize = value + 'px';
	                        }
	                        span.normalize();
	                    });
	                } else {
	                    if (document.queryCommandSupported('styleWithCss')) {
	                        this.iframeDoc.execCommand('styleWithCss', false, false);
	                    }
	                    this.iframeDoc.execCommand('fontSize', false, 7);

	                    var fontList = [],
	                        spanList = [];
	                    var _container = range.commonAncestorContainer;
	                    _container.nodeType == 3 && (_container = _container.parentNode);
	                    _container.tagName.toLowerCase() == 'font' && (_container = _container.parentNode);
	                    fontList = _container.getElementsByTagName('font');

	                    var _loop = function _loop(_i) {
	                        //将<font face="7"></font>转换成<span style="font-size: npx;"></span>
	                        var font = fontList[_i];
	                        var span = document.createElement('span');
	                        Array.prototype.forEach.call(font.attributes, function (attr) {
	                            attr.nodeName == 'size' ? span.style.fontSize = value + 'px' : span.setAttribute(attr.nodeName, attr.nodeValue);
	                        });
	                        span.innerHTML = font.innerHTML;
	                        span.querySelectorAll('span').length != 0 && veUtil.command.format(span, 'span', 'fontSize'); //firefox 不会格式化选区内部元素的字号，手动修改。将来firefox改的跟chrome一样，这个函数不执行。
	                        span.normalize();
	                        font.parentNode.replaceChild(span, font);
	                        spanList.push(span);
	                        _i--;
	                        i = _i;
	                    };

	                    for (var i = 0; i < fontList.length; i++) {
	                        _loop(i);
	                    }
	                    range.setStartBefore(spanList[0]);
	                    range.setEndAfter(spanList[spanList.length - 1]);
	                    selection.removeAllRanges();
	                    selection.addRange(range);
	                }
	            }
	        },
	        formatBlock: function formatBlock(name, value) {
	            var ua = navigator.userAgent.toLowerCase();
	            if (ua.match(/rv:([\d.]+)\) like gecko/) || ua.match(/msie ([\d.]+)/)) {
	                var range = this.getRange();
	                if (!range || range.collapsed) {
	                    alert('在IE浏览器中必须选中一段文字才能使用此功能！');
	                } else {
	                    this.iframeDoc.execCommand('formatblock', false, '<' + value.toUpperCase() + '>');
	                }
	            } else {
	                this.iframeDoc.execCommand('formatblock', false, value);
	            }
	        },
	        formatContent: function formatContent(obj, tagName, cssName) {
	            var temp = [];
	            var pattern = { fontSize: /font\-size:\s?\d+px;/g, verticalAlign: /vertical\-align:\s?(sub|super);/g };
	            var nodeList = obj.getElementsByTagName(tagName);
	            for (var i = 0; i < nodeList.length; i++) {
	                var node = nodeList[i];
	                if (node.attributes.length == 1 && node.style.length != 0 && node.getAttribute('style').match(pattern[cssName]) != null) {
	                    if (node.children.length == 0) {
	                        if (node.style.length == 1) {
	                            var parent = node.parentNode;
	                            parent.replaceChild(document.createTextNode(node.innerHTML), node);
	                            parent.normalize();
	                            i--;
	                        } else {
	                            node.style[cssName] = '';
	                        }
	                    } else {
	                        temp.push(node);
	                    }
	                }
	            }
	            if (temp.length != 0) {
	                this.formatContent(obj, tagName, cssName);
	            }
	        },
	        removeFormat: function removeFormat(name, value) {
	            this.iframeDoc.execCommand(name, false, value);
	            var range = this.getRange();
	            if (!range) return;
	            var container = range.commonAncestorContainer;
	            container.nodeType == 3 && (container = container.parentNode);
	            container.tagName.toLowerCase() == 'span' && (container = container.parentNode);
	            this.formatContent(container, 'span', 'verticalAlign');
	            container.normalize();
	        },
	        getRange: function getRange() {
	            var oSel = void 0,
	                oRange = void 0;
	            if (this.iframeWin.getSelection) {
	                oSel = this.iframeWin.getSelection();
	                if (oSel && oSel.rangeCount != 0) {
	                    oRange = oSel.getRangeAt(0);
	                }
	            }
	            return oRange;
	        },
	        setRange: function setRange(range) {
	            var oSel = void 0;
	            if (this.iframeWin.getSelection) {
	                oSel = this.iframeWin.getSelection();
	                oSel.removeAllRanges();
	                oSel.addRange(range);
	            }
	        },
	        removeRange: function removeRange() {
	            var oSel = void 0;
	            if (this.iframeWin.getSelection) {
	                oSel = this.iframeWin.getSelection();
	                oSel.removeAllRanges();
	            }
	        },
	        rangeValid: function rangeValid() {
	            var range = this.getRange();
	            return range && !range.collapsed;
	        }
	    }
	};

	// </script>
	//
	// <style lang="less" rel="stylesheet/less">
	//     .ve-design {
	//         border: 1px solid #ddd;
	//         border-top: none;
	//     }
	// </style>
	//
	// <template>
	//     <div class="ve-design" v-show="currentView == 'design'">
	//         <iframe src="../dist/iframe/page.html" frameborder="0" @load="init"></iframe>
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n<div class=\"ve-design\" v-show=\"currentView == 'design'\">\n    <iframe src=\"../dist/iframe/page.html\" frameborder=\"0\" @load=\"init\"></iframe>\n</div>\n";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_script__ = __webpack_require__(69)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\code.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(70)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./code.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 68 */,
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style lang="less" rel="stylesheet/less">
	//     .ve-code {
	//         border: 1px solid #ddd;
	//         border-top: none;
	//     }
	// </style>
	//
	// <template>
	//     <div class="ve-code" v-show="currentView == 'sourceCode'">
	//         <textarea name="codemirror" id="codemirror"></textarea>
	//     </div>
	// </template>
	//
	// <script>
	var cmConfig = {
	    mode: 'htmlmixed',
	    scrollbarStyle: 'null',
	    viewportMargin: Infinity,
	    lineNumbers: true,
	    lineWrapping: true,
	    styleActiveLine: true,
	    autoCloseTags: true,
	    foldGutter: true,
	    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
	    extraKeys: {
	        'Ctrl-Q': function CtrlQ(cm) {
	            cm.foldCode(cm.getCursor());
	        },
	        'F11': function F11(cm) {
	            cm.setOption('fullScreen', !cm.getOption('fullScreen'));
	        },
	        'Esc': function Esc(cm) {
	            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
	        }
	    }
	};

	exports.default = {
	    data: function data() {
	        return {
	            editor: null
	        };
	    },

	    vuex: {
	        getters: {
	            currentView: function currentView(state) {
	                return state.currentView;
	            },
	            content: function content(state) {
	                return state.content;
	            }
	        }
	    },
	    watch: {
	        'currentView': function currentView() {
	            this.editor.setValue(beautifyHTML(this.content, { 'indent_inner_html': true, 'indent_size': 2 }));
	            setTimeout(function () {
	                this.editor.refresh();
	            }.bind(this), 100);
	        }
	    },
	    ready: function ready() {
	        this.editor = CodeMirror.fromTextArea(document.getElementById('codemirror'), cmConfig);
	    }
	};
	// </script>

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n<div class=\"ve-code\" v-show=\"currentView == 'sourceCode'\">\n    <textarea name=\"codemirror\" id=\"codemirror\"></textarea>\n</div>\n";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mutations = __webpack_require__(72);

	var _mutations2 = _interopRequireDefault(_mutations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {toolbarConfig} from '../js/config';

	var toolBtns = {};
	toolbarConfig.push('redo');
	toolbarConfig.push('unlink');
	toolbarConfig.forEach(function (name) {
	    !toolBtns[name] && (toolBtns[name] = {});
	    toolBtns[name].active = false;
	    toolBtns[name].disabled = false;
	    toolBtns[name].showmenu = false;
	});

	var state = {

	    // toolbar disabled state & active state
	    toolBtns: toolBtns,

	    // editor content
	    content: '',

	    // current display block: design or sourceCode
	    currentView: 'design'

	};

	exports.default = new Vuex.Store({
	    state: state,
	    mutations: _mutations2.default
	});

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var mutations = {
	    UPDATE_TB_ACTIVE: function UPDATE_TB_ACTIVE(state, iframeDoc) {
	        for (var name in state.toolBtns) {
	            try {
	                state.toolBtns[name].active = iframeDoc.queryCommandState(name);
	            } catch (e) {}
	        }
	    },
	    UPDATE_TB_DISABLED: function UPDATE_TB_DISABLED(state, json) {
	        var disabled = state.currentView !== 'design';
	        for (var name in state.toolBtns) {
	            state.toolBtns[name].disabled = disabled;
	        }
	        for (var _name in json) {
	            state.toolBtns[_name].disabled = json[_name];
	        }
	        state.toolBtns.view.disabled = false;
	    },
	    UPDATE_TB_DROPDOWN_DISPLAY: function UPDATE_TB_DROPDOWN_DISPLAY(state, current) {
	        current && typeof current == 'string' && (state.toolBtns[current].showmenu = !state.toolBtns[current].showmenu);
	        for (var name in state.toolBtns) {
	            name != current && (state.toolBtns[name].showmenu = false);
	        }
	    },
	    UPDATE_CONTENT: function UPDATE_CONTENT(state, content) {
	        state.content = content;
	    },
	    SWITCH_VIEW: function SWITCH_VIEW(state) {
	        state.currentView = state.currentView == 'design' ? 'sourceCode' : 'design';
	    }
	};

	exports.default = mutations;

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"vueditor\">\n    <toolbar v-ref:toolbar></toolbar>\n    <design v-ref:design></design>\n    <code1 v-ref:code></code1>\n</div>\n";

/***/ }
/******/ ]);