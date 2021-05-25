(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/KBC":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nueva-actividad/nueva-actividad.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " \n<main role=\"main\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n       \n      <div class=\"card\">\n        <div class=\"card-body\">   \n          <app-categoria></app-categoria>    \n        </div>\n      </div>  \n           \n\n      <div class=\"card\">\n        <div class=\"card-body\">            \n          <app-habilidad></app-habilidad> \n        </div>\n      </div>          \n      \n       \n      <div class=\"card\">\n        <div class=\"card-body\">  \n          <div class=\"card-header\">\n            <h4 class=\"card-title tituloFormulario\">Nueva tarea</h4>\n          </div>          \n          <form [formGroup]=\"nuevaTareaForm\" (ngSubmit)=\"guardarActividad()\" class=\"form-horizontal\"  id=\"nuevaActividadForm\"> \n              <div class=\"form-group\">\n                <label class=\"control-label .col labelFormulario2\" for=\"categoria_ID2\">Categoría</label>\n                <select   class=\"form-control campoFormulario\"  \n                formControlName=\"categoria_ID2\" (change)=\"onChangeCategoriaActividad($event.target.value)\">\n                  <option value=\"-1\" >Elige una categoría</option>\n                  <option *ngFor=\"let categ2 of categoriasObjet2\" [value]=\"categ2.id\">\n                  {{ categ2.descripcion }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"control-label .col labelFormulario2\" for=\"habilidad_ID2\">Habilidad</label>\n                <select class=\"form-control campoFormulario\" formControlName=\"habilidad_ID2\" (change)=\"onChangeCategoriaHabilidad($event.target.value)\">\n                  <option value=\"-1\" >Elige una habilidad</option>\n                  <option *ngFor=\"let hab2 of habilidadesObjet2\" [value]=\"hab2.habilidad_id\">\n                  {{ hab2.descripcion }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n              <label class=\"control-label .col labelFormulario2\" for=\"descripcionTarea\">Descripción</label>\n                <input class=\"form-control campoFormulario\" type=\"text\"\n                         formControlName=\"descripcionTarea\"\n                >\n              </div>\n              <button type=\"submit\"  class=\"btn btn-link\">Guardar </button>\n              <!-- <button type=\"submit\" (click)=\"volver()\"  class=\"btn btn-link\">Volver </button> -->\n          </form>         \n        </div>\n      </div>  \n       \n    </div>\n  </div>   \n</main>\n \n ";
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
      /*! C:\Users\Miguel Angel\Documents\Master Web\TFM\Ayudarte_Front\ayudarte-front\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0yRv":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"card-title tituloFormulario\">Nueva categoría</h4>\n<form [formGroup]=\"nuevaCategoriaForm\" (ngSubmit)=\"guardarCategoria()\" class=\"form-inline\" id=\"nuevaCategoriaForm\"> \n    <div class=\"form-group\">\n      <label class=\"control-label .col labelFormularioInline\"  for=\"descripcion\">Nueva categoría</label>\n      <input type=\"text\"\n             placeholder=\"Descripcion categoria\"\n             name=\"descripcionCategoria\"\n             formControlName=\"descripcionCategoria\"\n             class=\"form-control campoFormularioInline\"  \n      >\n    </div>\n    <button type=\"submit\"  class=\"btn btn-link\">Guardar </button>\n</form>\n\n ";
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ROUTES = [{
        path: '/panel',
        title: 'Panel',
        icon: 'nc-bank',
        "class": ''
      }, {
        path: '/usuario',
        title: 'Cuenta Usuario',
        icon: 'nc-single-02',
        "class": ''
      }, {
        path: '/actividades',
        title: 'Actividades',
        icon: 'nc-tile-56',
        "class": ''
      }, {
        path: '/rankingUsuarios',
        title: 'Ranking Usuarios',
        icon: 'nc-user-run',
        "class": ''
      }, {
        path: '/logout',
        title: 'Salir',
        icon: 'nc-button-power',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "550G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\r\n    <div class=\"show-dropdown\" ngbDropdown>\r\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\r\n          <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\r\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n\t          <li class=\"header-title\">Sidebar Active Color</li>\r\n            <li class=\"adjustments-line text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\r\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\r\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\r\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\r\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\r\n                </a>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5My1":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
      \**********************************************************/

    /*! exports provided: FixedPluginModule */

    /***/
    function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var FixedPluginModule = function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      };

      FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "8daD":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ranking-usuarios/ranking-usuarios.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function daD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Team -->\n<section id=\"team\" class=\"pb-5\">\n    <div class=\"container\">\n        <h5 class=\"section-title h1\">Ranking de usuarios</h5>\n        <div class=\"row\">\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\"  *ngFor=\"let usuario of rankingUsuarios\" >\n                <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                    <div class=\"mainflip\">\n                        <div class=\"frontside\">\n                            <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                    <p><img class=\" img-fluid\" src=\"assets/img/faces/{{usuario.usuario_id}}.jpg\" alt=\"card image\"></p>\n                                    <h4 class=\"card-title h4Card\">{{usuario.nombre}}</h4>\n                                    <h4 class=\"card-title h4Card\">{{usuario.apellido1}} {{usuario.apellido2}}</h4>\n                                    <h3 class=\"card-title\">                                     \n                                        <p class=\"estrellaDorada\" *ngIf=\"usuario.reputacion==1\" >★</p>\n                                        <p class=\"estrellaDorada\" *ngIf=\"usuario.reputacion==2\" >★★</p>\n                                        <p class=\"estrellaDorada\" *ngIf=\"usuario.reputacion==3\" >★★★</p>\n                                        <p class=\"estrellaDorada\" *ngIf=\"usuario.reputacion==4\" >★★★★</p>\n                                        <p class=\"estrellaDorada\" *ngIf=\"usuario.reputacion==5\" >★★★★★</p>\n                                    </h3>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"backside\">\n                            <div class=\"card \">\n                                <div class=\"card-body text-center \">\n                                    <div>                                                                        \n                                       <h4 class=\"card-title h4Card\">{{usuario.nombre}}</h4>\n                                        <h4 class=\"card-title h4Card\">{{usuario.apellido1}} {{usuario.apellido2}}</h4>                                    \n                                    </div>                         \n                                    <div>\n                                        <span>                \n                                            {{usuario.sobreMi}}     \n                                        </span>                                            \n                                    </div> \n                                    <div> \n                                        <p class=\"card-textHabilidades\">Habilidades</p>\n                                    </div>                         \n                                    <div  *ngFor=\"let habilidad of usuario.habilidades\">\n                                        <span>                \n                                            <i class=\"nc-icon nc-satisfied\"></i>\n                                            {{habilidad.descripcion}}\n                                        </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- ./Team member -->\n        </div>\n    </div>\n</section>\n<!-- Team -->";
      /***/
    },

    /***/
    "9K2D":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/ranking-usuarios/ranking-usuarios.component.css ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function K2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhbmtpbmctdXN1YXJpb3MvcmFua2luZy11c3Vhcmlvcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <div class=\"content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <footer-cmp></footer-cmp>\r\n    </div>\r\n</div>\r\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\r\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        ipBackend: "http://localhost:8000"
      };
      /***/
    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      };

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.isCollapsed = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this.sidebarClose();
            });
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Panel';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];
            console.log(navbar);

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], NavbarComponent);
      /***/
    },

    /***/
    "I6BR":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/ranking-usuarios/ranking-usuarios.component.ts ***!
      \**********************************************************************/

    /*! exports provided: RankingUsuariosComponent */

    /***/
    function I6BR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RankingUsuariosComponent", function () {
        return RankingUsuariosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ranking_usuarios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ranking-usuarios.component.html */
      "8daD");
      /* harmony import */


      var _ranking_usuarios_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ranking-usuarios.component.css */
      "9K2D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/usuarios.service */
      "mRib");

      var RankingUsuariosComponent = /*#__PURE__*/function () {
        function RankingUsuariosComponent(usuariosService) {
          _classCallCheck(this, RankingUsuariosComponent);

          this.usuariosService = usuariosService;
        }

        _createClass(RankingUsuariosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log("RankingUsuariosComponent.ngOnInit: ");
            this.usuariosService.rankingUsuarios().subscribe(function (data) {
              // console.log("RankingUsuariosComponent.ngOnInit data: "+ JSON.stringify(data))  ;
              if (data.status == "ok") {
                _this2.rankingUsuarios = data.data; //console.log("RankingUsuariosComponent.ngOnInit rankingUsuarios: "+ JSON.stringify(this.rankingUsuarios))  ;
              }
            });
          }
        }]);

        return RankingUsuariosComponent;
      }();

      RankingUsuariosComponent.ctorParameters = function () {
        return [{
          type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]
        }];
      };

      RankingUsuariosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ranking-usuarios',
        template: _raw_loader_ranking_usuarios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ranking_usuarios_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]])], RankingUsuariosComponent);
      /***/
    },

    /***/
    "IOvI":
    /*!*********************************************************!*\
      !*** ./src/app/pages/categoria/categoria.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function IOvI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYS9jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "JjLc":
    /*!*********************************************!*\
      !*** ./src/app/servicios/tareas.service.ts ***!
      \*********************************************/

    /*! exports provided: TareasService */

    /***/
    function JjLc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TareasService", function () {
        return TareasService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // src/app/users/users.service.ts


      var TareasService = /*#__PURE__*/function () {
        function TareasService(http) {
          _classCallCheck(this, TareasService);

          this.http = http;
        }

        _createClass(TareasService, [{
          key: "listaTareasAsignadas",
          value: function listaTareasAsignadas(auth_token, estado) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/asignadas/" + estado, {
              headers: headers
            });
          } // estado = 0 para no finalizadas
          // estado = 1 para finalizadas

        }, {
          key: "listaTareasFinalizadas",
          value: function listaTareasFinalizadas(auth_token, estado) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/finalizadas/" + estado, {
              headers: headers
            });
          }
        }, {
          key: "actividadesEnRealizacion",
          value: function actividadesEnRealizacion(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/actividadesEnRealizacion/" + id, {
              headers: headers
            });
          }
        }, {
          key: "actividadesEnSolicitud",
          value: function actividadesEnSolicitud(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/actividadesEnSolicitud/" + id, {
              headers: headers
            });
          }
        }, {
          key: "actividadesEnTerminadas",
          value: function actividadesEnTerminadas(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/actividadesTerminadas/" + id, {
              headers: headers
            });
          }
        }, {
          key: "solicitadasPorUsuario",
          value: function solicitadasPorUsuario(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/solicitadasPorUsuario/" + id, {
              headers: headers
            });
          }
        }, {
          key: "realizadasPorUsuario",
          value: function realizadasPorUsuario(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/realizadasPorUsuario/" + id, {
              headers: headers
            });
          }
        }, {
          key: "getTarea",
          value: function getTarea(auth_token, id) {
            // estado = 0 para no asignadas
            // estado = 1 para asignadas
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/" + id, {
              headers: headers
            });
          }
        }, {
          key: "asignarTarea",
          value: function asignarTarea(auth_token, idTarea, idUsuario) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/" + idTarea + "/usuarioId/" + idUsuario, {
              headers: headers
            });
          }
        }, {
          key: "finalizarTarea",
          value: function finalizarTarea(auth_token, tarea) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/" + tarea.id + "?finalizada=1&puntuacionSolicita=" + tarea.puntuacionSolicita + "&horasReales=" + tarea.horasReales, {
              headers: headers
            });
          }
        }, {
          key: "actividadNombre",
          value: function actividadNombre(auth_token, nombre, valor) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/actividadNombre/" + nombre + "/finalizada/" + valor, {
              headers: headers
            });
          }
        }, {
          key: "nuevaActividad",
          value: function nuevaActividad(auth_token, observacion, usuarioSolicita_id, habilidad_id) {
            // console.log("TareasService.nuevaActividad ");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              observacion: observacion,
              usuarioSolicita_id: usuarioSolicita_id,
              habilidad_id: habilidad_id
            };
            var respuesta = this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ipBackend + "/api/actividadesRealizadas/", body, {
              headers: headers
            });
            return respuesta;
          }
        }]);

        return TareasService;
      }();

      TareasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TareasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TareasService);
      /***/
    },

    /***/
    "MnPC":
    /*!********************************************************************!*\
      !*** ./src/app/pages/nueva-actividad/nueva-actividad.component.ts ***!
      \********************************************************************/

    /*! exports provided: NuevaActividadComponent */

    /***/
    function MnPC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevaActividadComponent", function () {
        return NuevaActividadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nueva_actividad_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nueva-actividad.component.html */
      "/KBC");
      /* harmony import */


      var _nueva_actividad_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nueva-actividad.component.css */
      "kwzO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../servicios/habilidades.service */
      "urII");
      /* harmony import */


      var _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/categoriaHabilidades.service */
      "TIsb");
      /* harmony import */


      var _servicios_tareas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../servicios/tareas.service */
      "JjLc");
      /* harmony import */


      var _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../servicios/usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);

      var NuevaActividadComponent = /*#__PURE__*/function () {
        function NuevaActividadComponent(router, categoriaHabilidadesService, fb, habilidadesService, tareasService, usuarioGuardado) {
          _classCallCheck(this, NuevaActividadComponent);

          this.router = router;
          this.categoriaHabilidadesService = categoriaHabilidadesService;
          this.fb = fb;
          this.habilidadesService = habilidadesService;
          this.tareasService = tareasService;
          this.usuarioGuardado = usuarioGuardado;
          this.habilidades = ['Habiliad 1', 'habiliad 2', 'habilidad 3', 'habilidad 4'];
          this.habilidadesObjet2 = [];
          this.categoriasObjet2 = [];
        }

        _createClass(NuevaActividadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.categoriaHabilidadesService.leerlistado();
            this.categoriaHabilidadesService.getCategorias$().subscribe(function (data) {
              _this3.categoriasObjet2 = data;

              _this3.habilidadesService.getHabilidades$().subscribe(function (data) {
                _this3.habilidadesObjet2 = data;
              });
            });
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            console.log("CategoriaComponent.createForm");
            this.nuevaTareaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              descripcionTarea: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
              categoria_ID2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              habilidad_ID2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            });
          }
        }, {
          key: "guardarActividadOLD",
          value: function guardarActividadOLD() {
            console.log("CategoriaComponent.createForm; " + JSON.stringify(this.nuevaTareaForm.value));
          }
        }, {
          key: "onChangeCategoriaActividad",
          value: function onChangeCategoriaActividad(idActividad) {
            var _this4 = this;

            //    console.log("NuevaActividadComponent.onChangeActividad");
            this.habilidadesService.leerlistado(idActividad);
            this.habilidadesService.getHabilidades$().subscribe(function (data) {
              _this4.habilidadesObjet2 = data; //      console.log("NuevaActividadComponent.onChangeActividad habilidadesObjet2 = "+JSON.stringify(this.habilidadesObjet2));
              // hay que meter esto en un observable para poder cargar esta lista

              _this4.idActividadSelect = idActividad;
            });
          }
        }, {
          key: "onChangeCategoriaHabilidad",
          value: function onChangeCategoriaHabilidad(idHabilidad) {
            //    console.log("NuevaActividadComponent.onChangeCategoriaHabilidad: " +idHabilidad);
            this.idHabilidadSelect = idHabilidad;
          }
        }, {
          key: "guardarActividad",
          value: function guardarActividad() {
            var _this5 = this;

            console.log("NuevaActividadComponent.guardarActividad");
            console.log("NuevaActividadComponent.guardarActividad  = " + JSON.stringify(this.nuevaTareaForm.value));
            console.log("NuevaActividadComponent.guardarActividad  idHabilidadSelect= " + this.idHabilidadSelect);
            console.log("NuevaActividadComponent.guardarActividad  idActividadSelect= " + this.idActividadSelect);

            if (this.nuevaTareaForm.valid) {
              this.tareasService.nuevaActividad(this.usuarioGuardado.getToken(), this.nuevaTareaForm.value.descripcionTarea, this.usuarioGuardado.getUsuarioId(), this.idHabilidadSelect).subscribe(function (data) {
                console.log("NuevaActividadComponent.onChangeActividad habilidadesObjet2 = " + JSON.stringify(data)); // hay que meter esto en un observable para poder cargar esta lista

                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire("Habilidad almacenada correctamente", " ", "success");

                _this5.router.navigateByUrl('/actividades');
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire("Errores en el formulario", "Revise los datos", "error");
            }
          }
        }]);

        return NuevaActividadComponent;
      }();

      NuevaActividadComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaHabilidadesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_5__["HabilidadesService"]
        }, {
          type: _servicios_tareas_service__WEBPACK_IMPORTED_MODULE_7__["TareasService"]
        }, {
          type: _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioGuardadoService"]
        }];
      };

      NuevaActividadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nueva-actividad',
        template: _raw_loader_nueva_actividad_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nueva_actividad_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaHabilidadesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_5__["HabilidadesService"], _servicios_tareas_service__WEBPACK_IMPORTED_MODULE_7__["TareasService"], _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioGuardadoService"]])], NuevaActividadComponent);
      /***/
    },

    /***/
    "Nurg":
    /*!******************************************************!*\
      !*** ./src/app/servicios/usuarioguardado.service.ts ***!
      \******************************************************/

    /*! exports provided: UsuarioGuardadoService */

    /***/
    function Nurg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioGuardadoService", function () {
        return UsuarioGuardadoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsuarioGuardadoService = /*#__PURE__*/function () {
        function UsuarioGuardadoService() {
          _classCallCheck(this, UsuarioGuardadoService);

          this._token = null;
          this._nombreUsuario = null;
          this._nombre = null;
          this._apellido1 = null;
          this._apellido2 = null;
          this._fechaNacimiento = null;
          this._exento = null;
          this._bolsaHora = null;
          this._reputacion = null;
          this._administrador = null;
          this._email = null;
          this._usuario_id = null;
          this._numeroVotaciones = null;
          this._tipoToken = null;
          this._sobreMi = null;
          this._habilidades = [];
        }

        _createClass(UsuarioGuardadoService, [{
          key: "setToken",
          value: function setToken(token) {
            this._token = token;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            var token_acceso = localStorage.getItem('token_acceso');
            return token_acceso; //return this._token;
          }
        }, {
          key: "setNombreUsuario",
          value: function setNombreUsuario(nombreUsuario) {
            this._nombreUsuario = nombreUsuario;
            localStorage.setItem('_nombreUsuario', this._nombreUsuario);
          }
        }, {
          key: "getNombreUsuario",
          value: function getNombreUsuario() {
            //return this._nombreUsuario;
            return localStorage.getItem('_nombreUsuario');
          }
        }, {
          key: "setNombre",
          value: function setNombre(nombre) {
            this._nombre = nombre;
            localStorage.setItem('_nombre', this._nombre);
          }
        }, {
          key: "getNombre",
          value: function getNombre() {
            //return this._nombre;
            return localStorage.getItem('_nombre');
          }
        }, {
          key: "setApellido1",
          value: function setApellido1(apellido1) {
            this._apellido1 = apellido1;
            localStorage.setItem('_apellido1', this._apellido1);
          }
        }, {
          key: "getApellido1",
          value: function getApellido1() {
            //return this._apellido1;
            return localStorage.getItem('_apellido1');
          }
        }, {
          key: "setApellido2",
          value: function setApellido2(apellido2) {
            this._apellido2 = apellido2;
            localStorage.setItem('_apellido2', this._apellido2);
          }
        }, {
          key: "getApellido2",
          value: function getApellido2() {
            // return this._apellido2;
            return localStorage.getItem('_apellido2');
          }
        }, {
          key: "setFechaNacimiento",
          value: function setFechaNacimiento(fechaNacimiento) {
            this._fechaNacimiento = fechaNacimiento;
            localStorage.setItem('_fechaNacimiento', this._fechaNacimiento);
          }
        }, {
          key: "getFechaNacimiento",
          value: function getFechaNacimiento() {
            return localStorage.getItem('_fechaNacimiento');
          }
        }, {
          key: "setExento",
          value: function setExento(exento) {
            this._exento = exento;
          }
        }, {
          key: "getExento",
          value: function getExento() {
            return this._exento;
          }
        }, {
          key: "setBolsaHora",
          value: function setBolsaHora(bolsaHora) {
            this._bolsaHora = bolsaHora;
            localStorage.setItem('_bolsaHora', this._bolsaHora);
          }
        }, {
          key: "getBolsaHora",
          value: function getBolsaHora() {
            return localStorage.getItem('_bolsaHora');
          }
        }, {
          key: "setReputacion",
          value: function setReputacion(reputacion) {
            this._reputacion = reputacion;
            localStorage.setItem('_reputacion', this._reputacion);
          }
        }, {
          key: "getReputacion",
          value: function getReputacion() {
            return localStorage.getItem('_reputacion');
          }
        }, {
          key: "setAdministrador",
          value: function setAdministrador(administrador) {
            this._administrador = administrador;
          }
        }, {
          key: "getAdministrador",
          value: function getAdministrador() {
            return this._administrador;
          }
        }, {
          key: "setEmail",
          value: function setEmail(email) {
            this._email = email;
            localStorage.setItem('_email', this._email);
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            //return this._email;
            return localStorage.getItem('_email');
          }
        }, {
          key: "setTipoToken",
          value: function setTipoToken(tipoToken) {
            this._tipoToken = tipoToken;
          }
        }, {
          key: "getTipoToken",
          value: function getTipoToken() {
            return this._tipoToken;
          }
        }, {
          key: "setUsuarioId",
          value: function setUsuarioId(id) {
            this._usuario_id = id;
            localStorage.setItem('idUsuario', this._usuario_id);
          }
        }, {
          key: "getUsuarioId",
          value: function getUsuarioId() {
            return localStorage.getItem('idUsuario');
          }
        }, {
          key: "getSobreMi",
          value: function getSobreMi() {
            return localStorage.getItem('sobreMi');
          }
        }, {
          key: "setSobreMi",
          value: function setSobreMi(sobreMi) {
            this._sobreMi = sobreMi;
            localStorage.setItem('sobreMi', this._sobreMi);
          }
        }, {
          key: "setNumeroVotaciones",
          value: function setNumeroVotaciones(numeroVotaciones) {
            this._numeroVotaciones = numeroVotaciones;
            localStorage.setItem('_numeroVotaciones', this._numeroVotaciones);
          }
        }, {
          key: "getNumeroVotaciones",
          value: function getNumeroVotaciones() {
            return localStorage.getItem('_numeroVotaciones');
          }
        }, {
          key: "setHabilidades",
          value: function setHabilidades(habilidades) {
            this._habilidades = habilidades;
            localStorage.setItem('_habilidades', JSON.stringify(this._habilidades));
          }
        }, {
          key: "getHabilidades",
          value: function getHabilidades() {
            return localStorage.getItem('_habilidades');
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token_acceso = localStorage.getItem('token_acceso');
            return token_acceso != null;
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.setToken(null);
            this.setNombreUsuario(null);
            localStorage.removeItem('token_acceso');
          }
        }, {
          key: "toString",
          value: function toString() {
            console.log("UsuarioGuardadoService.toString()");
            console.log("_token: " + this.getToken());
            console.log("_nombreUsuario: " + this.getNombreUsuario());
            console.log("_nombre: " + this.getNombre());
            console.log("_apellido1: " + this.getApellido1());
            console.log("_apellido2: " + this.getApellido2());
            console.log("_fechaNacimiento: " + this.getFechaNacimiento());
            console.log("_exento: " + this.getExento());
            console.log("_bolsaHora: " + this.getBolsaHora());
            console.log("_reputacion: " + this.getReputacion());
            console.log("_administrador: " + this.getAdministrador());
            console.log("_email: " + this.getEmail());
            console.log("_id: " + this.getUsuarioId());
            console.log("_tipoToken: " + this.getTipoToken());
            console.log("_numeroVotaciones: " + this.getNumeroVotaciones());
            console.log("sobreMi: " + this.getSobreMi());
          }
        }]);

        return UsuarioGuardadoService;
      }();

      UsuarioGuardadoService.ctorParameters = function () {
        return [];
      };

      UsuarioGuardadoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UsuarioGuardadoService);
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Pqk8":
    /*!*************************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
      \*************************************************************/

    /*! exports provided: FixedPluginComponent */

    /***/
    function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);

          this.sidebarColor = "white";
          this.sidebarActiveColor = "danger";
          this.state = true;
        }

        _createClass(FixedPluginComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "Qgsp":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/habilidad/habilidad.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qgsp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4 class=\"card-title tituloFormulario\">Nueva habilidad</h4>\n<form [formGroup]=\"formHabilidad\"  (ngSubmit)=\"guardarHabilidad()\" class=\"form-horizontal\" id=\"form\"> \n       <div class=\"form-group\">\n              <label class=\"control-label .col labelFormulario2\"  for=\"categoria_ID\">Categoría</label>\n              <select  class=\"form-control campoFormulario\" formControlName=\"categoria_ID\">\n                     <option value=\"\" disabled>Elige una categoría</option>\n                     <option *ngFor=\"let categ of categoriasObjet\" [ngValue]=\"categ\">\n                     {{ categ.descripcion }}\n                     </option>\n              </select>\n       </div>\n      \n       <div class=\"form-group\">\n              <label class=\"control-label .col labelFormulario2\"  for=\"descripcionHabilidad\">Habilidad</label>\n              <input type=\"text\"\n                     placeholder=\"Descripcion habilidad\"\n                     name=\"descripcionHabilidad\"\n                     formControlName=\"descripcionHabilidad\"            \n              >\n       </div>\n       \n       <div class=\"form-group\">\n                <label class=\"control-label .col labelFormulario2\"  for=\"horasEstipuladas\">Horas</label>\n                <input type=\"number\"\n                       placeholder=\"horas Estipuladas\"\n                       name=\"horasEstipuladas\"\n                       formControlName=\"horasEstipuladas\"            \n                >\n       </div>\n       <button type=\"submit\"  class=\"btn btn-link\">Guardar </button>\n     </form>\n\n     ";
      /***/
    },

    /***/
    "RLWv":
    /*!**************************************************!*\
      !*** ./src/app/pages/logout/logout.component.ts ***!
      \**************************************************/

    /*! exports provided: LogoutComponent */

    /***/
    function RLWv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
        return LogoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logout.component.html */
      "j2Nr");
      /* harmony import */


      var _logout_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logout.component.css */
      "Y8qW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/usuarios.service */
      "mRib");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../servicios/usuarioguardado.service */
      "Nurg");

      var LogoutComponent = /*#__PURE__*/function () {
        function LogoutComponent(router, usuarioGuardadoService, usuarioService) {
          _classCallCheck(this, LogoutComponent);

          this.router = router;
          this.usuarioGuardadoService = usuarioGuardadoService;
          this.usuarioService = usuarioService;
        }

        _createClass(LogoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usuarioGuardadoService.logOut();
            this.router.navigateByUrl('/home');
          }
        }]);

        return LogoutComponent;
      }();

      LogoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioGuardadoService"]
        }, {
          type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]
        }];
      };

      LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logout',
        template: _raw_loader_logout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logout_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioGuardadoService"], _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]])], LogoutComponent);
      /***/
    },

    /***/
    "Rfvx":
    /*!**************************************!*\
      !*** ./src/app/guardas/authGuard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function Rfvx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../servicios/usuarioguardado.service */
      "Nurg");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(_authService, router) {
          _classCallCheck(this, AuthGuard);

          this._authService = _authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (!this._authService.isLoggedIn()) {
              this.router.navigate(['login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioGuardadoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioGuardadoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TIsb":
    /*!***********************************************************!*\
      !*** ./src/app/servicios/categoriaHabilidades.service.ts ***!
      \***********************************************************/

    /*! exports provided: CategoriaHabilidadesService */

    /***/
    function TIsb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaHabilidadesService", function () {
        return CategoriaHabilidadesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // src/app/users/users.service.ts


      var CategoriaHabilidadesService = /*#__PURE__*/function () {
        function CategoriaHabilidadesService(http, usuarioGuardadoServicio) {
          _classCallCheck(this, CategoriaHabilidadesService);

          this.http = http;
          this.usuarioGuardadoServicio = usuarioGuardadoServicio; // this.categorias NO SE deberia inicializar a vacio
          // deberia hacerse una lectura de bd
          //   console.log("CategoriaHabilidadesService.constructor");

          this.categorias = [];
          this.categorias$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
          });
          this.leerlistado();
        }

        _createClass(CategoriaHabilidadesService, [{
          key: "leerlistado",
          value: function leerlistado() {
            var _this6 = this;

            this.listaCategoriaHabilidades().subscribe(function (data) {
              _this6.categorias = data.data; //     console.log("CategoriaHabilidadesService.leerlistado  = "+JSON.stringify(this.categorias));

              _this6.categorias$.next(_this6.categorias); // hay que meter esto en un observable para poder cargar esta lista
              // automaticamente cuando de de alta la categoria

            });
          }
        }, {
          key: "listaCategoriaHabilidades",
          value: function listaCategoriaHabilidades() {
            //   console.log("CategoriaHabilidadesService.listaCategoriaHabilidades antes de hacer llamada: " +  JSON.stringify(this.categorias) );
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            var respuesta = this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/categoriasHabilidades", {
              headers: headers
            });
            return respuesta;
          }
        }, {
          key: "getCategoriaHabilidad",
          value: function getCategoriaHabilidad(id) {
            //    console.log("CategoriaHabilidadesService.getCategoriaHabilidad ");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/categoriasHabilidades/" + id, {
              headers: headers
            });
          }
        }, {
          key: "actualizarCategoriaHabilidad",
          value: function actualizarCategoriaHabilidad(id, descripcion) {
            //    console.log("CategoriaHabilidadesService.actualizarCategoriaHabilidad ");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            var body = {
              descripcion: descripcion
            };
            var respuesta = this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/categoriasHabilidades/" + id, body, {
              headers: headers
            });
            return respuesta;
          }
        }, {
          key: "nuevaCategoriaHabilidad",
          value: function nuevaCategoriaHabilidad(descripcion) {
            //   console.log("CategoriaHabilidadesService.nuevaCategoriaHabilidad ");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            var body = {
              descripcion: descripcion
            };
            var respuesta = this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/categoriasHabilidades/", body, {
              headers: headers
            });
            return respuesta;
          }
        }, {
          key: "getCategorias$",
          value: function getCategorias$() {
            //   console.log("CategoriaHabilidadesService.getCategorias$ ");
            return this.categorias$.asObservable();
          }
        }]);

        return CategoriaHabilidadesService;
      }();

      CategoriaHabilidadesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]
        }];
      };

      CategoriaHabilidadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]])], CategoriaHabilidadesService);
      /***/
    },

    /***/
    "ULcA":
    /*!********************************************************!*\
      !*** ./src/app/pages/habilidad/habilidad.component.ts ***!
      \********************************************************/

    /*! exports provided: HabilidadComponent */

    /***/
    function ULcA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HabilidadComponent", function () {
        return HabilidadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_habilidad_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./habilidad.component.html */
      "Qgsp");
      /* harmony import */


      var _habilidad_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./habilidad.component.css */
      "m+wD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/habilidades.service */
      "urII");
      /* harmony import */


      var _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../servicios/categoriaHabilidades.service */
      "TIsb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../servicios/usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var HabilidadComponent = /*#__PURE__*/function () {
        function HabilidadComponent(habilidadesService, categoriaHabilidadesService, usuarioGuardado, fb) {
          _classCallCheck(this, HabilidadComponent);

          this.habilidadesService = habilidadesService;
          this.categoriaHabilidadesService = categoriaHabilidadesService;
          this.usuarioGuardado = usuarioGuardado;
          this.fb = fb;
          this.Categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];
          this.categoriasObjet = [];
          this.states = [{
            name: 'Arizona',
            abbrev: 'AZ'
          }, {
            name: 'California',
            abbrev: 'CA'
          }, {
            name: 'Colorado',
            abbrev: 'CO'
          }, {
            name: 'New York',
            abbrev: 'NY'
          }, {
            name: 'Pennsylvania',
            abbrev: 'PA'
          }];
        }

        _createClass(HabilidadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            console.log("HabilidadComponent.ngOnInit");
            this.categoriaHabilidadesService.leerlistado();
            this.categoriaHabilidadesService.getCategorias$().subscribe(function (data) {
              _this7.categoriasObjet = data; //   console.log("HabilidadComponent.ngOnInit  = "+JSON.stringify(this.categoriasObjet));
              // hay que meter esto en un observable para poder cargar esta lista
              // automaticamente cuando de de alta la categoria
            });
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            //  console.log("HabilidadComponent.createForm");

            /*
              descripcion: string;
              horasEstipuladas: string;
              categoriaHabilidad: CategoriaHabilidad;
                 
                    this.nuevaHabilidadForm = this.fb.group({
                descripcion: [null, [ Validators.required ] ],
                horasEstipuladas: ['', [ Validators.required ] ],
                categoria_ID:  [null, [ Validators.required ] ]
              });
                */
            this.formHabilidad = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              descripcionHabilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)]),
              horasEstipuladas: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)]),
              categoria_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.categoriasObjet[3])
            });
          }
        }, {
          key: "guardarHabilidad",
          value: function guardarHabilidad() {
            var _this8 = this;

            console.log("HabilidadComponent.guardarHabilidad form: " + JSON.stringify(this.formHabilidad.value));
            console.log("HabilidadComponent.guardarHabilidad idcategoria: " + this.formHabilidad.value.categoria_ID.id);

            if (this.formHabilidad.valid) {
              this.habilidadesService.nuevaHabilidad(this.formHabilidad.value.descripcionHabilidad, this.formHabilidad.value.horasEstipuladas, this.formHabilidad.value.categoria_ID.id).subscribe(function (data) {
                //      console.log("HabilidadComponent.guardarHabilidad: " + JSON.stringify (data) );
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire("Habilidad almacenada correctamente", " ", "success");

                _this8.habilidadesService.leerlistado(_this8.formHabilidad.value.categoria_ID.id);
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire("Hay errores en el formulario", "Revise la habilidad", "error");
            }
          }
        }]);

        return HabilidadComponent;
      }();

      HabilidadComponent.ctorParameters = function () {
        return [{
          type: _servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_4__["HabilidadesService"]
        }, {
          type: _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_5__["CategoriaHabilidadesService"]
        }, {
          type: _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioGuardadoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      HabilidadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-habilidad',
        template: _raw_loader_habilidad_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_habilidad_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_habilidades_service__WEBPACK_IMPORTED_MODULE_4__["HabilidadesService"], _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_5__["CategoriaHabilidadesService"], _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioGuardadoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], HabilidadComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "Y8qW":
    /*!***************************************************!*\
      !*** ./src/app/pages/logout/logout.component.css ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Y8qW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_publico_layout_publico_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layouts/publico-layout/publico-layout.component */
      "hkBb");
      /* harmony import */


      var _pages_habilidad_habilidad_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/habilidad/habilidad.component */
      "ULcA");
      /* harmony import */


      var _pages_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/categoria/categoria.component */
      "zVyJ");
      /* harmony import */


      var _pages_nueva_actividad_nueva_actividad_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/nueva-actividad/nueva-actividad.component */
      "MnPC");
      /* harmony import */


      var _pages_ranking_usuarios_ranking_usuarios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/ranking-usuarios/ranking-usuarios.component */
      "I6BR");
      /* harmony import */


      var _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/logout/logout.component */
      "RLWv");
      /* harmony import */


      var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/registro/registro.component */
      "dDMP");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR"); //import { ActividadComponent } from './pages/actividad/actividad.component';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_13__["AdminLayoutComponent"], _layouts_publico_layout_publico_layout_component__WEBPACK_IMPORTED_MODULE_14__["PublicoLayoutComponent"], _pages_habilidad_habilidad_component__WEBPACK_IMPORTED_MODULE_15__["HabilidadComponent"], _pages_categoria_categoria_component__WEBPACK_IMPORTED_MODULE_16__["CategoriaComponent"], _pages_nueva_actividad_nueva_actividad_component__WEBPACK_IMPORTED_MODULE_17__["NuevaActividadComponent"], _pages_ranking_usuarios_ranking_usuarios_component__WEBPACK_IMPORTED_MODULE_18__["RankingUsuariosComponent"], _pages_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"], _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_20__["RegistroComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"], {
          useHash: true
        }), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_10__["FixedPluginModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].production
        })],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "Zl3j":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zl3j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <header>\n    <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n      <a class=\"navbar-brand\" routerLink=\"/home\">Ayudarte</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"#\">Home </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/mision\">Misión</a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  \n  <main role=\"main\">\n    <div class=\"text-center centrado\">\n        <div>\n                <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card cardRegistro\">\n                    <div class=\"card-body\">               \n                        <div class=\"card-header\">\n                        <h4 class=\"card-title tituloFormulario\">Registro de usuario</h4>\n                        </div>          \n                        <form [formGroup]=\"registroForm\" (ngSubmit)=\"guardarUsuario()\" class=\"form-horizontal\"  id=\"nuevaActividadForm\"> \n                            <div class=\"form-group\">\n                                <label class=\"control-label .col labelFormulario2\" for=\"nombre\">Nombre</label>\n                                <input \n                                    class=\"form-control campoFormulario\" \n                                    type=\"text\"\n                                    formControlName=\"nombre\"\n                                >\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label .col labelFormulario2\" for=\"apellido1\">Primer apellido</label>\n                                <input \n                                    class=\"form-control campoFormulario\" \n                                    type=\"text\"\n                                    formControlName=\"apellido1\"\n                                >\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label .col labelFormulario2\" for=\"apellido2\">Segundo apellido</label>\n                                <input \n                                    class=\"form-control campoFormulario\" \n                                    type=\"text\"\n                                    formControlName=\"apellido2\"\n                                >\n                            </div>\n                            <div class=\"form-group\">\n                              <label class=\"control-label .col labelFormulario2\" for=\"fechaNacimiento\">Fecha de Nacimiento</label>\n                              <input \n                                  class=\"form-control campoFormulario\" \n                                  type=\"date\"\n                                  formControlName=\"fechaNacimiento\"\n                              >\n                            </div>\n                           \n                            <div class=\"form-group\">\n                                <label for=\"inputEmail\" class=\"control-label .col labelFormulario2\">Dirección de correo</label>\n                                <input\n                                    class=\"form-control campoFormulario\" \n                                    placeholder=\"Email address\"\n                                    type=\"email\"\n                                    formControlName=\"email\"\n                                    name=\"email\"\n                                    placeholder=\"Email\"\n                                    required=\"required\"\n                                />\n                            </div>  \n                            <div class=\"form-group\">\n                                <label for=\"inputPassword\" class=\"control-label .col labelFormulario2\">Password</label>\n                                <input\n                                    class=\"form-control campoFormulario\" \n                                    type=\"password\"\n                                    formControlName=\"password\"\n                                    name=\"password\"\n                                    placeholder=\"Password\"\n                                    required=\"required\"\n                                />\n                            </div>\n                            <button type=\"submit\"  class=\"btn btn-link\">Guardar </button>\n                        </form>         \n                    </div>\n                    </div>\n                </div>\n                </div>   \n        </div>\n    </div>\n</main>  \n   \n ";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _layouts_publico_layout_publico_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layouts/publico-layout/publico-layout.component */
      "hkBb");
      /* harmony import */


      var _guardas_authGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guardas/authGuard */
      "Rfvx");

      var AppRoutes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_publico_layout_publico_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicoLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/publico-layout/publico-layout.module#PublicoLayoutModule'
        }]
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_guardas_authGuard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
      }, {
        path: '**',
        redirectTo: 'home'
      }];
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"],
        "./layouts/publico-layout/publico-layout.module": ["soul", "layouts-publico-layout-publico-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "crnd";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "dDMP":
    /*!******************************************************!*\
      !*** ./src/app/pages/registro/registro.component.ts ***!
      \******************************************************/

    /*! exports provided: RegistroComponent */

    /***/
    function dDMP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
        return RegistroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registro.component.html */
      "Zl3j");
      /* harmony import */


      var _registro_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registro.component.css */
      "dQyG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/usuarios.service */
      "mRib");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

      var RegistroComponent = /*#__PURE__*/function () {
        function RegistroComponent(usuariosService, router, fb) {
          _classCallCheck(this, RegistroComponent);

          this.usuariosService = usuariosService;
          this.router = router;
          this.fb = fb;
        }

        _createClass(RegistroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            /*
            nombre: string;
            apellido1: string;
            apellido2: string;
            fechaNacimiento: string;
            email: string;
            password: string;
            */
            this.registroForm = this.fb.group({
              nombre: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              apellido1: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              apellido2: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              fechaNacimiento: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              email: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              password: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
          }
        }, {
          key: "guardarUsuario",
          value: function guardarUsuario() {
            if (this.registroForm.valid) {
              this.nuevoUsuario = {};
              this.nuevoUsuario.nombre = this.registroForm.value.nombre;
              this.nuevoUsuario.apellido1 = this.registroForm.value.apellido1;
              this.nuevoUsuario.apellido2 = this.registroForm.value.apellido2;
              this.nuevoUsuario.fechaNacimiento = this.registroForm.value.fechaNacimiento;
              this.nuevoUsuario.email = this.registroForm.value.email;
              this.nuevoUsuario.password = this.registroForm.value.password;
              console.log("RegistroComponent.guardarUsuario: " + JSON.stringify(this.nuevoUsuario));
              this.usuariosService.registro(this.nuevoUsuario).subscribe(function (data) {
                console.log("Registro.guardarUsuario()" + JSON.stringify(data));

                if (data.status == "ok") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Usuario registrado correctamente", " ", "success");
                } else {
                  console.log("RegistroComponent.guardarUsuario error data = " + JSON.stringify(data));
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Errores en el formulario", "Revise los datos", "error");
            }
          }
        }]);

        return RegistroComponent;
      }();

      RegistroComponent.ctorParameters = function () {
        return [{
          type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      RegistroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], RegistroComponent);
      /***/
    },

    /***/
    "dQyG":
    /*!*******************************************************!*\
      !*** ./src/app/pages/registro/registro.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function dQyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "hkBb":
    /*!********************************************************************!*\
      !*** ./src/app/layouts/publico-layout/publico-layout.component.ts ***!
      \********************************************************************/

    /*! exports provided: PublicoLayoutComponent */

    /***/
    function hkBb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicoLayoutComponent", function () {
        return PublicoLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_publico_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./publico-layout.component.html */
      "lZ4f");
      /* harmony import */


      var _publico_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./publico-layout.component.scss */
      "u4zW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PublicoLayoutComponent = /*#__PURE__*/function () {
        function PublicoLayoutComponent() {
          _classCallCheck(this, PublicoLayoutComponent);
        }

        _createClass(PublicoLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PublicoLayoutComponent;
      }();

      PublicoLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publico-layout',
        template: _raw_loader_publico_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publico_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PublicoLayoutComponent);
      /***/
    },

    /***/
    "j2Nr":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/logout/logout.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function j2Nr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>logout works!</p>\n";
      /***/
    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n    </div>\r\n</footer>\r\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "kwzO":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/nueva-actividad/nueva-actividad.component.css ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function kwzO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL251ZXZhLWFjdGl2aWRhZC9udWV2YS1hY3RpdmlkYWQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "lZ4f":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/publico-layout/publico-layout.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lZ4f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\r\n    <router-outlet></router-outlet>   \r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "m+wD":
    /*!*********************************************************!*\
      !*** ./src/app/pages/habilidad/habilidad.component.css ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function mWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhYmlsaWRhZC9oYWJpbGlkYWQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "mRib":
    /*!***********************************************!*\
      !*** ./src/app/servicios/usuarios.service.ts ***!
      \***********************************************/

    /*! exports provided: UsuariosService */

    /***/
    function mRib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuariosService", function () {
        return UsuariosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // src/app/users/users.service.ts


      var UsuariosService = /*#__PURE__*/function () {
        function UsuariosService(http, usuarioGuardadoServicio) {
          _classCallCheck(this, UsuariosService);

          this.http = http;
          this.usuarioGuardadoServicio = usuarioGuardadoServicio;
          console.log("UsuariosService.constructor");
          this.usuariosRanking = [];
          this.usuariosRanking$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.leerRanking();
        }

        _createClass(UsuariosService, [{
          key: "leerRanking",
          value: function leerRanking() {
            var _this9 = this;

            this.rankingUsuarios().subscribe(function (data) {
              _this9.usuariosRanking = data.data; //     console.log("CategoriaHabilidadesService.leerlistado  = "+JSON.stringify(this.categorias));

              _this9.usuariosRanking$.next(_this9.usuariosRanking); // hay que meter esto en un observable para poder cargar esta lista
              // automaticamente cuando de de alta la categoria

            });
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this10 = this;

            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
              //console.log("UsuariosService.login: "+  JSON.stringify(resp)  )
              _this10.usuarioGuardadoServicio.setToken(resp.token_acceso);

              _this10.usuarioGuardadoServicio.setNombreUsuario(resp.nombreUsuario);

              _this10.usuarioGuardadoServicio.setNombre(resp.nombre);

              _this10.usuarioGuardadoServicio.setApellido1(resp.apellido1);

              _this10.usuarioGuardadoServicio.setApellido2(resp.apellido2);

              _this10.usuarioGuardadoServicio.setFechaNacimiento(resp.fechaNacimiento);

              _this10.usuarioGuardadoServicio.setExento(resp.exento);

              _this10.usuarioGuardadoServicio.setBolsaHora(resp.bolsaHora);

              _this10.usuarioGuardadoServicio.setReputacion(resp.reputacion);

              _this10.usuarioGuardadoServicio.setAdministrador(resp.administrador);

              _this10.usuarioGuardadoServicio.setEmail(resp.email);

              _this10.usuarioGuardadoServicio.setUsuarioId(resp.usuario_id);

              _this10.usuarioGuardadoServicio.setTipoToken(resp.tipo_token);

              _this10.usuarioGuardadoServicio.setNumeroVotaciones(resp.numeroVotaciones);

              _this10.usuarioGuardadoServicio.setSobreMi(resp.sobreMi);

              localStorage.setItem('token_acceso', resp.token_acceso); //              console.log("-----");
              //              console.log("UsuariosService.login()");
              //           		console.log("Usuario guardado: " +  resp.token_acceso);
              //          		console.log(this.usuarioGuardadoServicio.toString());
              //              console.log("-----");

              return resp;
            }));
          }
        }, {
          key: "registro",
          value: function registro(usuario) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            /*
              nombre: string;
              apellido1: string;
              apellido2: string;
              fechaNacimiento: string;
              email: string;
              password: string;
                 */

            var body = {
              nombre: usuario.nombre,
              apellido1: usuario.apellido1,
              apellido2: usuario.apellido2,
              fechaNacimiento: usuario.fechaNacimiento,
              email: usuario.email,
              password: usuario.password,
              exento: 0,
              bolsaHora: 0,
              reputacion: 1,
              administrador: 0
            };
            console.log("UsuarioService.registro: " + JSON.stringify(body));
            return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/register", body, {
              headers: headers
            });
          }
        }, {
          key: "listaUsuarios",
          value: function listaUsuarios(auth_token) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/usuarios", {
              headers: headers
            });
          }
        }, {
          key: "rankingUsuarios",
          value: function rankingUsuarios() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/rankingUsuarios", {
              headers: headers
            });
          }
        }, {
          key: "getUsuario",
          value: function getUsuario(auth_token, id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/usuarios/" + id, {
              headers: headers
            });
          }
        }, {
          key: "asignarDesasignarHabilidad",
          value: function asignarDesasignarHabilidad(auth_token, idUsuario, idHabilidad, accion) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              idHabilidad: idHabilidad,
              accion: accion
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/habilidadesUsuarios/" + idUsuario, body, {
              headers: headers
            });
          }
        }, {
          key: "actualizarValoracionUsuario",
          value: function actualizarValoracionUsuario(auth_token, id, numeroVotaciones, reputacionSolicita, nVotos5, nVotos4, nVotos3, nVotos2, nVotos1) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              numeroVotaciones: numeroVotaciones,
              reputacion: reputacionSolicita,
              numVotos5: nVotos5,
              numVotos4: nVotos4,
              numVotos3: nVotos3,
              numVotos2: nVotos2,
              numVotos1: nVotos1
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/usuarios/updateNoPass/" + id, body, {
              headers: headers
            });
          }
        }, {
          key: "actualizarHorasUsuarios",
          value: function actualizarHorasUsuarios(auth_token, id, horas, signo) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              horas: horas,
              signo: signo
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/actualizarBolsa/" + id, body, {
              headers: headers
            });
          }
        }, {
          key: "actualizaractualizarContrasegna",
          value: function actualizaractualizarContrasegna(auth_token, id, passActual, passNueva) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              passActual: passActual,
              passNueva: passNueva
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/actualizarPassword/" + id, body, {
              headers: headers
            });
          }
        }, {
          key: "actualizarUsuario",
          value: function actualizarUsuario(auth_token, id, nombre, apellido1, apellido2, fechaNacimiento, email, sobreMi) {
            /*
            nombre
            apellido1
            apellido2
            fechaNacimiento
            email
            sobreMi
            
            */
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(auth_token)
            });
            var body = {
              nombre: nombre,
              apellido1: apellido1,
              apellido2: apellido2,
              fechaNacimiento: fechaNacimiento,
              email: email,
              sobreMi: sobreMi
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ipBackend + "/api/usuarios/updateNoPass/" + id, body, {
              headers: headers
            });
          }
        }, {
          key: "getRanking$",
          value: function getRanking$() {
            //   console.log("CategoriaHabilidadesService.getCategorias$ ");
            return this.usuariosRanking$.asObservable();
          }
        }]);

        return UsuariosService;
      }();

      UsuariosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]
        }];
      };

      UsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]])], UsuariosService);
      /***/
    },

    /***/
    "u4zW":
    /*!**********************************************************************!*\
      !*** ./src/app/layouts/publico-layout/publico-layout.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function u4zW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcHVibGljby1sYXlvdXQvcHVibGljby1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "urII":
    /*!**************************************************!*\
      !*** ./src/app/servicios/habilidades.service.ts ***!
      \**************************************************/

    /*! exports provided: HabilidadesService */

    /***/
    function urII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HabilidadesService", function () {
        return HabilidadesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // src/app/users/users.service.ts


      var HabilidadesService = /*#__PURE__*/function () {
        function HabilidadesService(http, usuarioGuardadoServicio) {
          _classCallCheck(this, HabilidadesService);

          this.http = http;
          this.usuarioGuardadoServicio = usuarioGuardadoServicio; //    console.log("HabilidadesService.constructor");

          this.habilidades = [];
          this.habilidades$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.leerlistado(0);
        }

        _createClass(HabilidadesService, [{
          key: "leerlistado",
          value: function leerlistado(idCategoria) {
            var _this11 = this;

            //    console.log("HabilidadesService.leerlistado ");    
            this.listaHabilidadesCategoria(idCategoria).subscribe(function (data) {
              _this11.habilidades = data.data; //      console.log("HabilidadesService.leerlistado  = "+JSON.stringify(this.habilidades));

              _this11.habilidades$.next(_this11.habilidades);
            });
          }
        }, {
          key: "listaHabilidadesCategoria",
          value: function listaHabilidadesCategoria(id) {
            //    console.log("HabilidadesService.listaHabilidades ");    
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/habilidades/categoria/" + id, {
              headers: headers
            });
          }
        }, {
          key: "listaHabilidades",
          value: function listaHabilidades() {
            //    console.log("HabilidadesService.listaHabilidades ");    
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/habilidades", {
              headers: headers
            });
          }
        }, {
          key: "getHabilidad",
          value: function getHabilidad(id) {
            //    console.log("HabilidadesService.getHabilidad ");    
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/habilidades/" + id, {
              headers: headers
            });
          }
        }, {
          key: "actualizarHabilidad",
          value: function actualizarHabilidad(id, descripcion, horasEstipuladas) {
            //    console.log("HabilidadesService.actualizarHabilidad ");    
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            var body = {
              descripcion: descripcion,
              horasEstipuladas: horasEstipuladas
            };
            return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/habilidades/" + id, body, {
              headers: headers
            });
          }
        }, {
          key: "nuevaHabilidad",
          value: function nuevaHabilidad(descripcion, horasEstipuladas, categoria) {
            //    console.log("HabilidadesService.nuevaHabilidad ");
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.usuarioGuardadoServicio.getToken())
            });
            var body = {
              descripcion: descripcion,
              horasEstipuladas: horasEstipuladas,
              categoria_Habilidad_id: categoria
            };
            var respuesta = this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].ipBackend + "/api/habilidades/", body, {
              headers: headers
            });
            return respuesta;
          }
        }, {
          key: "getHabilidades$",
          value: function getHabilidades$() {
            //    console.log("CategoriaHabilidadesService.getCategorias$ ");
            return this.habilidades$.asObservable();
          }
        }]);

        return HabilidadesService;
      }();

      HabilidadesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]
        }];
      };

      HabilidadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _usuarioguardado_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioGuardadoService"]])], HabilidadesService);
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top bg-white\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n    </div>\r\n\r\n<!--\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n--> \r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Paper Dashboard Angular - v2.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zVyJ":
    /*!********************************************************!*\
      !*** ./src/app/pages/categoria/categoria.component.ts ***!
      \********************************************************/

    /*! exports provided: CategoriaComponent */

    /***/
    function zVyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function () {
        return CategoriaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categoria_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categoria.component.html */
      "0yRv");
      /* harmony import */


      var _categoria_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categoria.component.css */
      "IOvI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../servicios/categoriaHabilidades.service */
      "TIsb");
      /* harmony import */


      var _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../servicios/usuarioguardado.service */
      "Nurg");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);

      var CategoriaComponent = /*#__PURE__*/function () {
        function CategoriaComponent(categoriaHabilidadesService, usuarioGuardado, fb) {
          _classCallCheck(this, CategoriaComponent);

          this.categoriaHabilidadesService = categoriaHabilidadesService;
          this.usuarioGuardado = usuarioGuardado;
          this.fb = fb;
        }

        _createClass(CategoriaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("CategoriaComponent.ngOnInit");
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            console.log("CategoriaComponent.createForm");
            this.nuevaCategoriaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              descripcionCategoria: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4)])
            });
          }
        }, {
          key: "guardarCategoria",
          value: function guardarCategoria() {
            var _this12 = this;

            if (this.nuevaCategoriaForm.valid) {
              console.log("CategoriaComponent.guardarCategoria descripcionCategoria: " + this.nuevaCategoriaForm.value.descripcionCategoria);
              this.categoriaHabilidadesService.nuevaCategoriaHabilidad(this.nuevaCategoriaForm.value.descripcionCategoria).subscribe(function (data) {
                console.log("CategoriaComponent.guardarCategoria: " + JSON.stringify(data));

                _this12.categoriaHabilidadesService.leerlistado();

                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Categoría almacenada correctamente", " ", "success");
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Hay errores en el formulario", "Revise la categoría", "error");
            }
          }
        }]);

        return CategoriaComponent;
      }();

      CategoriaComponent.ctorParameters = function () {
        return [{
          type: _servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaHabilidadesService"]
        }, {
          type: _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioGuardadoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      CategoriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categoria',
        template: _raw_loader_categoria_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categoria_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_servicios_categoriaHabilidades_service__WEBPACK_IMPORTED_MODULE_4__["CategoriaHabilidadesService"], _servicios_usuarioguardado_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioGuardadoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], CategoriaComponent);
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\r\n      <div class=\"logo-image-small\">\r\n        <img src=\"assets/img/logo250.jpg\">\r\n      </div>\r\n    </a>\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\r\n      Ayudarte\r\n    </a>\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n            <a [routerLink]=\"[menuItem.path]\">\r\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map