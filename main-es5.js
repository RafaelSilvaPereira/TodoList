function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _todo_todos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo/todos-routing.module */
    "./src/app/todo/todos-routing.module.ts");

    var routes = [{
      path: '',
      redirectTo: 'list-todos/list-todos',
      pathMatch: 'full'
    }].concat(_toConsumableArray(_todo_todos_routing_module__WEBPACK_IMPORTED_MODULE_2__["todoRoutes"]));

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todolist';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], [1, "container-fluid"], [1, "navbar", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "nav-b"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".nav-b[_ngcontent-%COMP%] {\n  padding: 0.19rem;\n  margin: 0.08rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iIHtcbiAgcGFkZGluZzogMC4xOXJlbTtcbiAgbWFyZ2luOiAwLjA4cmVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo/todo.module */
    "./src/app/todo/todo.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__["TodoModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__["TodoModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_5__["TodoModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 10,
      vars: 0,
      consts: [["type", "email", "placeholder", "email"], ["type", "text", "placeholder", "nome"], ["type", "tel", "placeholder", "numero de telefone"], ["for", ""], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "sua mensagem"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/create-todo/create-todo.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/todo/create-todo/create-todo.component.ts ***!
    \***********************************************************/

  /*! exports provided: CreateTodoComponent */

  /***/
  function srcAppTodoCreateTodoCreateTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTodoComponent", function () {
      return CreateTodoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/todo/shared/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formTodo"];

    function CreateTodoComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Digite a Todo. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A Todo deve conter ao menos 5 caracteres. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r7.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r7.errors.minlength);
      }
    }

    var _c1 = function _c1() {
      return ["/todos"];
    };

    var CreateTodoComponent =
    /*#__PURE__*/
    function () {
      function CreateTodoComponent(service, route) {
        _classCallCheck(this, CreateTodoComponent);

        this.route = route;
        this.service = service;
      }

      _createClass(CreateTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.todo = new _shared__WEBPACK_IMPORTED_MODULE_1__["TodoModel"](new Date().getTime());
        }
      }, {
        key: "create",
        value: function create() {
          if (this.formTodo.form.valid) {
            this.service.create(this.todo);
            this.route.navigate(['/todos']).then(function (r) {
              return console.log('foi');
            });
          }
        }
      }]);

      return CreateTodoComponent;
    }();

    CreateTodoComponent.ɵfac = function CreateTodoComponent_Factory(t) {
      return new (t || CreateTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CreateTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateTodoComponent,
      selectors: [["app-create-todo"]],
      viewQuery: function CreateTodoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formTodo = _t.first);
        }
      },
      decls: 15,
      vars: 5,
      consts: [[1, "well"], ["formTodo", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "minlength", "5", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", "value", "Criar Nova Tarefa", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-default", 3, "routerLink"], [1, "alert", "alert-danger"], [3, "hidden"]],
      template: function CreateTodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cadastrar Todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Todo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateTodoComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.todo.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateTodoComponent_div_10_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTodoComponent_Template_input_click_12_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors && (_r7.dirty || _r7.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vY3JlYXRlLXRvZG8vY3JlYXRlLXRvZG8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-todo',
          templateUrl: './create-todo.component.html',
          styleUrls: ['./create-todo.component.css']
        }]
      }], function () {
        return [{
          type: _shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        formTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formTodo', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/todo/create-todo/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/todo/create-todo/index.ts ***!
    \*******************************************/

  /*! exports provided: CreateTodoComponent */

  /***/
  function srcAppTodoCreateTodoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _create_todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./create-todo.component */
    "./src/app/todo/create-todo/create-todo.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateTodoComponent", function () {
      return _create_todo_component__WEBPACK_IMPORTED_MODULE_0__["CreateTodoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/todo/edit-todo/edit-todo.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/edit-todo/edit-todo.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditTodoComponent */

  /***/
  function srcAppTodoEditTodoEditTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditTodoComponent", function () {
      return EditTodoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/todo/shared/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["formTodo"];

    function EditTodoComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Digite a todo. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A todo deve conter ao menos 5 caracteres. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r10.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r10.errors.minlength);
      }
    }

    var _c1 = function _c1() {
      return ["/todos"];
    };

    var EditTodoComponent =
    /*#__PURE__*/
    function () {
      function EditTodoComponent(service, router, route) {
        _classCallCheck(this, EditTodoComponent);

        this.service = service;
        this.router = router;
        this.route = route;
      }

      _createClass(EditTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = +this.route.snapshot.params.id;
          this.todo = this.service.findById(id);
        }
      }, {
        key: "update",
        value: function update() {
          if (this.formTodo.valid) {
            this.service.updateTodo(this.todo);
            this.router.navigate(['/todos']).then(function (r) {
              return console.log('foi');
            });
          }
        }
      }]);

      return EditTodoComponent;
    }();

    EditTodoComponent.ɵfac = function EditTodoComponent_Factory(t) {
      return new (t || EditTodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    EditTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditTodoComponent,
      selectors: [["app-edit-todo"]],
      viewQuery: function EditTodoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formTodo = _t.first);
        }
      },
      decls: 16,
      vars: 5,
      consts: [[1, "well"], ["formTodo", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "minlength", "5", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "submit", "value", "Atualizar", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-default", 3, "routerLink"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-left"], [1, "alert", "alert-danger"], [3, "hidden"]],
      template: function EditTodoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Todo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTodoComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.todo.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditTodoComponent_div_10_Template, 5, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTodoComponent_Template_input_click_12_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Voltar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.todo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors && (_r10.dirty || _r10.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r9.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vZWRpdC10b2RvL2VkaXQtdG9kby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-todo',
          templateUrl: './edit-todo.component.html',
          styleUrls: ['./edit-todo.component.css']
        }]
      }], function () {
        return [{
          type: _shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        formTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['formTodo', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/todo/list-todos/index.ts":
  /*!******************************************!*\
    !*** ./src/app/todo/list-todos/index.ts ***!
    \******************************************/

  /*! exports provided: ListTodosComponent */

  /***/
  function srcAppTodoListTodosIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _list_todos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-todos.component */
    "./src/app/todo/list-todos/list-todos.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function () {
      return _list_todos_component__WEBPACK_IMPORTED_MODULE_0__["ListTodosComponent"];
    });
    /***/

  },

  /***/
  "./src/app/todo/list-todos/list-todos.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/todo/list-todos/list-todos.component.ts ***!
    \*********************************************************/

  /*! exports provided: ListTodosComponent */

  /***/
  function srcAppTodoListTodosListTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListTodosComponent", function () {
      return ListTodosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/todo/shared/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function ListTodosComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListTodosComponent_tr_12_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var todo_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.completeTodo(todo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListTodosComponent_tr_12_Template_a_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var todo_r2 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.remove($event, todo_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("success", !todo_r2.complete);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", todo_r2.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", todo_r2.id)("checked", todo_r2.complete);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/editTodo/" + todo_r2.id));
      }
    }

    function ListTodosComponent_p_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nenhuma todo cadastrada.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ListTodosComponent =
    /*#__PURE__*/
    function () {
      function ListTodosComponent(service, route) {
        _classCallCheck(this, ListTodosComponent);

        this.service = service;
        this.route = route;
      }

      _createClass(ListTodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.todos = this.service.listAll();
          this.todos = [new _shared__WEBPACK_IMPORTED_MODULE_1__["TodoModel"](1, 'dasddasa', false)];
        }
      }, {
        key: "listAll",
        value: function listAll() {
          return this.service.listAll();
        }
      }, {
        key: "remove",
        value: function remove($event, id) {
          $event.preventDefault();
          this.service.remove(id);
        }
      }, {
        key: "edit",
        value: function edit(todo) {
          this.service.updateTodo(todo);
        }
      }, {
        key: "completeTodo",
        value: function completeTodo(id) {
          this.service.completeTodo(id);
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.service.findById(id);
        }
      }, {
        key: "create",
        value: function create() {
          this.route.navigate(['/create-todo/create-todo']).then(function (r) {
            return console.log('foi');
          });
        }
      }]);

      return ListTodosComponent;
    }();

    ListTodosComponent.ɵfac = function ListTodosComponent_Factory(t) {
      return new (t || ListTodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ListTodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListTodosComponent,
      selectors: [["app-list-todos"]],
      decls: 14,
      vars: 2,
      consts: [[1, "table", "table-striped", "table-bordered", "table-hover"], [1, "text-center"], [1, "btn", "btn-xs", "btn-success", "material-icons", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-center", 2, "width", "70px"], ["type", "checkbox", 3, "value", "checked", "click"], [1, "text-center", 2, "width", "200px"], ["title", "Edit", "alt", "Edit", 1, "btn", "btn-xs", "btn-info", "material-icons", 3, "routerLink"], ["href", "#", "title", "Remove", "alt", "Remove", 1, "btn", "btn-xs", "btn-danger", "material-icons", 3, "click"]],
      template: function ListTodosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListTodosComponent_Template_a_click_10_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " add ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListTodosComponent_tr_12_Template, 10, 8, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListTodosComponent_p_13_Template, 2, 0, "p", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listAll());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.todos.length == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vbGlzdC10b2Rvcy9saXN0LXRvZG9zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListTodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-todos',
          templateUrl: './list-todos.component.html',
          styleUrls: ['./list-todos.component.css']
        }]
      }], function () {
        return [{
          type: _shared__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/shared/index.ts":
  /*!**************************************!*\
    !*** ./src/app/todo/shared/index.ts ***!
    \**************************************/

  /*! exports provided: TodoModel, TodoService */

  /***/
  function srcAppTodoSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./todo.model */
    "./src/app/todo/shared/todo.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TodoModel", function () {
      return _todo_model__WEBPACK_IMPORTED_MODULE_0__["TodoModel"];
    });
    /* harmony import */


    var _service_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/todo.service */
    "./src/app/todo/shared/service/todo.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return _service_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"];
    });
    /***/

  },

  /***/
  "./src/app/todo/shared/service/todo.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todo/shared/service/todo.service.ts ***!
    \*****************************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppTodoSharedServiceTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService() {
        _classCallCheck(this, TodoService);
      }

      _createClass(TodoService, [{
        key: "listAll",
        value: function listAll() {
          var todos = localStorage.todos;
          return !!todos ? JSON.parse(todos) : [];
        }
      }, {
        key: "create",
        value: function create(todo) {
          var todos = this.listAll();
          todo.id = new Date().getTime();
          todos.push(todo);
          localStorage.todos = JSON.stringify(todos);
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.listAll().find(function (todoModel) {
            return todoModel.id === id;
          });
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(todo) {
          var todoModels = this.listAll();
          todoModels.forEach(function (todoModel, i, todos) {
            if (todoModel.id === todo.id) {
              todos[i] = todo;
            }
          });
          localStorage.todos = JSON.stringify(todoModels);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          localStorage.todos = JSON.stringify(this.listAll().filter(function (todoModel) {
            return todoModel.id !== id;
          }));
        }
      }, {
        key: "completeTodo",
        value: function completeTodo(id) {
          var todoModels = this.listAll();
          todoModels.forEach(function (todo, i, todos) {
            if (todo.id === id) {
              todo.complete = true;
            }
          });
          localStorage.todos = JSON.stringify(todoModels);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)();
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/shared/todo.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/todo/shared/todo.model.ts ***!
    \*******************************************/

  /*! exports provided: TodoModel */

  /***/
  function srcAppTodoSharedTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModel", function () {
      return TodoModel;
    });

    var TodoModel = function TodoModel(id, name, complete) {
      _classCallCheck(this, TodoModel);

      this.id = id;
      this.name = name;
      this.complete = complete;
    };
    /***/

  },

  /***/
  "./src/app/todo/todo.module.ts":
  /*!*************************************!*\
    !*** ./src/app/todo/todo.module.ts ***!
    \*************************************/

  /*! exports provided: TodoModule */

  /***/
  function srcAppTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModule", function () {
      return TodoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared */
    "./src/app/todo/shared/index.ts");
    /* harmony import */


    var _list_todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-todos */
    "./src/app/todo/list-todos/index.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create-todo/create-todo.component */
    "./src/app/todo/create-todo/create-todo.component.ts");
    /* harmony import */


    var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-todo/edit-todo.component */
    "./src/app/todo/edit-todo/edit-todo.component.ts");

    var TodoModule = function TodoModule() {
      _classCallCheck(this, TodoModule);
    };

    TodoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoModule
    });
    TodoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoModule_Factory(t) {
        return new (t || TodoModule)();
      },
      providers: [_shared__WEBPACK_IMPORTED_MODULE_2__["TodoService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoModule, {
        declarations: [_list_todos__WEBPACK_IMPORTED_MODULE_3__["ListTodosComponent"], _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_7__["CreateTodoComponent"], _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_8__["EditTodoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_list_todos__WEBPACK_IMPORTED_MODULE_3__["ListTodosComponent"], _create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_7__["CreateTodoComponent"], _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_8__["EditTodoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
          providers: [_shared__WEBPACK_IMPORTED_MODULE_2__["TodoService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo/todos-routing.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/todo/todos-routing.module.ts ***!
    \**********************************************/

  /*! exports provided: todoRoutes */

  /***/
  function srcAppTodoTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "todoRoutes", function () {
      return todoRoutes;
    });
    /* harmony import */


    var _list_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./list-todos */
    "./src/app/todo/list-todos/index.ts");
    /* harmony import */


    var _create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-todo */
    "./src/app/todo/create-todo/index.ts");
    /* harmony import */


    var _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-todo/edit-todo.component */
    "./src/app/todo/edit-todo/edit-todo.component.ts");

    var todoRoutes = [{
      path: 'todos',
      redirectTo: 'list-todos/list-todos'
    }, {
      path: 'list-todos/list-todos',
      component: _list_todos__WEBPACK_IMPORTED_MODULE_0__["ListTodosComponent"]
    }, {
      path: 'createTodo',
      redirectTo: 'create-todo/create-todo'
    }, {
      path: 'create-todo/create-todo',
      component: _create_todo__WEBPACK_IMPORTED_MODULE_1__["CreateTodoComponent"]
    }, {
      path: 'editTodo/:id',
      redirectTo: 'edit-todo/edit-todo/:id'
    }, {
      path: 'edit-todo/edit-todo/:id',
      component: _edit_todo_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__["EditTodoComponent"]
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/empresa/angular-projects/todolist/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map