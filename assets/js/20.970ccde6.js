(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),n("p",[t._v("显式原型是用来实现基于原型的继承与属性的共享，隐式原型则是用来构成原型链，同样用于实现基于原型的继承。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/iClassic-Live/Blog/wiki/%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%9A%84%E4%B8%80%E4%B8%AA%E9%87%8D%E8%A6%81%E5%BA%94%E7%94%A8%EF%BC%9A%E5%9C%A3%E6%9D%AF%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型链的一个重要应用：圣杯模式"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型和原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型和原型链")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（null 除外）")])]),t._v(" "),n("li",[n("strong",[t._v("所有的引用类型（数组、对象、函数），都有一个")]),t._v("proto"),n("strong",[t._v("属性，属性值是一个普通的对象")])]),t._v(" "),n("li",[n("strong",[t._v("所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象")])]),t._v(" "),n("li",[n("strong",[t._v("所有的引用类型（数组、对象、函数），"),n("strong",[t._v("proto")]),t._v("属性值指向它的构造函数的 prototype 属性值")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("从上可知，"),n("code",[t._v("Funtion")]),t._v("是对象，"),n("code",[t._v("Function.prototype")]),t._v("也是一个对象，他们都具有对象的特点。即对象具有属性"),n("code",[t._v("__proto__")]),t._v("，可称为隐式原型。"),n("strong",[t._v("一个对象的隐式原型指向构造该对象的构造函数原型")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("Function")]),t._v("是一个特殊的对象，其具有一个"),n("strong",[t._v("独有的原型属性"),n("code",[t._v("prototype")])]),t._v("，这个属性为一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（此对象被称为原型对象）。这个原型对象同时也有一个属性叫"),n("code",[t._v("constructor")]),t._v(",这个"),n("code",[t._v("constructor")]),t._v("包含了一个指向原构造函数的指针。\n而所谓的"),n("code",[t._v("constructor")]),t._v("并不表示被构造，且本身很容易被修改。构造函数也只是被"),n("code",[t._v("new")]),t._v("调用的函数而已。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"proto-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto-prototype","aria-hidden":"true"}},[this._v("#")]),this._v(" __proto & prototype")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[n("code",[t._v("__proto__")]),t._v(" 隐式原型 "),n("code",[t._v("prototype")]),t._v("显式原型，"),n("strong",[t._v("对象")]),t._v("proto"),n("strong",[t._v("属性的值就会它对应的原型对象")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" one "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" two "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\none"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token comment"}},[t._v("// true  这里的Array是数组构造函数，‘function’")]),t._v("\ntwo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Function.prototype.bind 方法构造出来的函数是个例外，它没有 prototype 属性")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("fun")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Function"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("bind")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'f'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfun\n"),n("span",{attrs:{class:"token function"}},[t._v("ƒ")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("native code"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfun"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token comment"}},[t._v("//undefined")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("JS 正是通过"),s("code",[this._v("__proto__")]),this._v("和"),s("code",[this._v("prototype")]),this._v("合作实现了原型链以及对象的继承。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("label"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//我们创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype")]),t._v("\n    Bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 这里的Object.create 会创建一个新的对象并将新对象内部的[prototype]指向关联的对象。")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 注意！现在没有 Bar.prototype.constructor 了")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果你需要这个属性的话可能需要手动修复一下它")]),t._v("\n    Bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("myLabel")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"a"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"obj a"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("myName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// "a"')]),t._v("\n    a"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("myLabel")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v('// "obj a"')]),t._v("\n\n\n最后，\n\n"),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("``")])]),t._v("`js\nObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[this._v("#")]),this._v(" 继承")])}],!1,null,null,null);e.options.__file="3.md";s.default=e.exports}}]);