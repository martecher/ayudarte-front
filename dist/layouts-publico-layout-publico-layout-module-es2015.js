(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-publico-layout-publico-layout-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "aSPh");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "s9Fo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HomeComponent = class HomeComponent {
    constructor(
    //   location:Location, 
    //   private renderer : Renderer2, 
    element, router) {
        this.element = element;
        this.router = router;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.menuVisible = false;
    }
    ngOnInit() {
        var home = this.element.nativeElement;
        this.toggleButton = home.getElementsByClassName('navbar-toggler')[0];
        //    this.router.events.subscribe((event) => {
        //      this.menuClose();
        //   });
    }
    menuToggle() {
        if (this.menuVisible === false) {
            this.menuOpen();
        }
        else {
            this.menuClose();
        }
    }
    menuOpen() { }
    menuClose() { }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomeComponent);



/***/ }),

/***/ "583M":
/*!******************************************************************!*\
  !*** ./src/app/layouts/publico-layout/publico-layout.routing.ts ***!
  \******************************************************************/
/*! exports provided: PublicoLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicoLayoutRoutes", function() { return PublicoLayoutRoutes; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_mision_mision_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/mision/mision.component */ "VYE7");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/registro/registro.component */ "dDMP");




const PublicoLayoutRoutes = [
    { path: 'registro', component: _pages_registro_registro_component__WEBPACK_IMPORTED_MODULE_3__["RegistroComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'mision', component: _pages_mision_mision_component__WEBPACK_IMPORTED_MODULE_1__["MisionComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "pG9d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../servicios/usuarios.service */ "mRib");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let LoginComponent = class LoginComponent {
    constructor(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
    }
    login() {
        const usuario = { email: this.email, password: this.password };
        this.usuarioService.login(usuario).subscribe(data => {
            //      console.log("LoginComponent.login() data");
            //      console.log(data);
            if (data.status_code === 200) {
                //guardamos en local storage
                this.router.navigateByUrl('/panel');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Los datos introducidos no son correctos", " ", "error");
                this.router.navigateByUrl('/login');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _servicios_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]])
], LoginComponent);



/***/ }),

/***/ "RBgy":
/*!***************************************************!*\
  !*** ./src/app/pages/mision/mision.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cuerpo{\r\n\tmargin: 100px 25px 25px 25px;\r\n}\r\n\r\n.carrusel{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: auto;\r\n}\r\n\r\n.div-centrado{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.texto-justificado{\r\n  text-align: justify;\r\n  text-justify: inter-palabra;\r\n}\r\n\r\n.borde70{\r\n  width: 70%;\r\n}\r\n\r\n.imagen-flotante{\r\n  float: left;\r\n}\r\n\r\n.imagen-carrusel{\r\n  width: 80%;\r\n}\r\n\r\n@media only screen and  (min-width: 100px) and (max-width: 600px){\r\n  .imagen-flotante{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n\r\n  .imagen-carrusel{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzaW9uL21pc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2lvbi9taXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdWVycG97XHJcblx0bWFyZ2luOiAxMDBweCAyNXB4IDI1cHggMjVweDtcclxufVxyXG5cclxuLmNhcnJ1c2Vse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmRpdi1jZW50cmFkb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi50ZXh0by1qdXN0aWZpY2Fkb3tcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItcGFsYWJyYTtcclxufVxyXG5cclxuLmJvcmRlNzB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmltYWdlbi1mbG90YW50ZXtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmltYWdlbi1jYXJydXNlbHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAuaW1hZ2VuLWZsb3RhbnRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlbi1jYXJydXNlbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "VYE7":
/*!**************************************************!*\
  !*** ./src/app/pages/mision/mision.component.ts ***!
  \**************************************************/
/*! exports provided: MisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisionComponent", function() { return MisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mision_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mision.component.html */ "n+O3");
/* harmony import */ var _mision_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mision.component.css */ "RBgy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MisionComponent = class MisionComponent {
    constructor() { }
    ngOnInit() {
    }
};
MisionComponent.ctorParameters = () => [];
MisionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mision',
        template: _raw_loader_mision_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mision_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MisionComponent);



/***/ }),

/***/ "aSPh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <header>\r\n\r\n   \r\n   \r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Ayudarte</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" \r\n    (click)=\"menuToggle()\"\r\n    data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/mision\">Misión</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n   \r\n\r\n</header>\r\n\r\n<main role=\"main\">\r\n<!--     <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n   <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\r\n    </ol>\r\n \r\n    <div class=\"carousel-inner\">\r\n        \r\n \r\n        <div class=\"carousel-item\">\r\n            <img class=\"img-responsive\"\r\n            src=\"assets/images/carrusel/man-changing-light-bulb2.jpg\">\r\n            <div class=\"container\">\r\n              <div class=\"carousel-caption color-verde\">\r\n                <h1>Con muy poco puedes ayudar</h1>\r\n                <p class=\"texto-carrusel\">Hay labores que para tí son tan sencillas como cambiar una bombillas y que a otros les parecen imposibles. ¿No creés que esa misma situación se te da a tí también?</p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n   \r\n        <div class=\"carousel-item active carousel-item-left\">\r\n          <img class=\"img-responsive\" src=\"assets/images/carrusel/man-cutting-grass-with-lawn-mover-back-yard2.jpg\">\r\n          <div class=\"container\">\r\n            <div class=\"carousel-caption color-amarillo\">\r\n              <h1>Tu césped siempre está a punto y el de tu vecino no</h1>\r\n              <p class=\"texto-carrusel\">Quizás no sea tan despreocupado como piensas y no cuida su césped porque no puede permitirse la máquinaria necesaria o no sabe usarla. ¿No podría ayudarte él a cambio de que tú cortaras su césped?</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n \r\n        <div class=\"carousel-item carousel-item-next carousel-item-left\">\r\n          <img class=\"img-responsive\" src=\"assets/images/carrusel/father.jpg\">\r\n          <div class=\"container\">\r\n            <div class=\"carousel-caption color-rojo\">\r\n              <h1>Ayuda a los más pequeños en sus primeros retos.</h1>\r\n              <p class=\"texto-carrusel\">Ayuda a esos peques que viven en tu barrio en sus tareas ya que no todos los padres pueden hacerlo por diferentes motivos</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n \r\n      <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n  \r\n    </div>\r\n  </div>\r\n-->\r\n\r\n<!-- empieza carrusel prueba -->\r\n\r\n\r\n<div id=\"myCarousel\" class=\"carousel slide \" data-ride=\"carousel\">\r\n    <!-- Indicators \r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n-->\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img src=\"assets/images/carrusel/man-cutting-grass-with-lawn-mover-back-yard2.jpg\" alt=\"\">\r\n            <div class=\"carousel-caption color-amarillo\">\r\n                <h4>Tu césped siempre está a punto y el de tu vecino no</h4>\r\n                <p class=\"texto-carrusel\">Quizás no sea tan despreocupado como piensas y necesita tu ayuda. ¿No podría ayudarte él a cambio de que tú cortaras su césped?</p>\r\n            </div>\r\n        </div>\r\n  \r\n        <div class=\"carousel-item\">\r\n            <img src=\"assets/images/carrusel/man-changing-light-bulb2.jpg\" alt=\"\">\r\n            <div class=\"carousel-caption\">\r\n                <h4>Alumbra la vida de otros</h4>\r\n                <p>Pequeñas acciones tuyas pueden cambiar el dia a dia de otros</p>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"carousel-item\">\r\n            <img src=\"assets/images/carrusel/father.jpg\" alt=\"\">\r\n            <div class=\"carousel-caption\">\r\n                <h4>Compartir es crear</h4>\r\n                <p>Ayuda a otros a conseguir sus retos y serás recompensado</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n<!-- termina carrusel prueba -->\r\n\r\n\r\n\r\n  <div class=\"container marketing\">\r\n    <hr class=\"featurette-divider\">\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading margen-imagen\">Enseña a quien más lo necesita. <span class=\"text-muted\">Comparte lo que mejor sabes hacer.</span></h2>\r\n        <p class=\"lead margen-imagen\">Despúes de tantos años cocinando los mejores guisos ha llegado el momento de que uses toda tu experiencia para enseñar a cocinar a joves recien independizados.</p>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n\t\t    <img class=\"img-responsive\" src=\"assets/images/500/ensennar-cocinar.jpg\">\r\n      </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7 order-md-2\">\r\n        <h2 class=\"featurette-heading margen-imagen\">Aprovecha el camino. <span class=\"text-muted\">No todos pueden hacerlo.</span></h2>\r\n        <p class=\"lead margen-imagen\">No todo el mundo puede hacer actividades tan del día a día como ir a hacer la compra, si ya estás en el super... ¿Por qué no aprovechar para ayudar a recoger la compra de un vecino mayor que no pueda ir él solo?</p>\r\n      </div>\r\n      <div class=\"col-md-5 order-md-1\">\r\n\t\t    <img class=\"img-responsive\" src=\"assets/images/500/hacer-compra.jpg\">\r\n      </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n    <div class=\"row featurette\">\r\n      <div class=\"col-md-7\">\r\n        <h2 class=\"featurette-heading margen-imagen\">Tu compañia. <span class=\"text-muted\">El mejor regalo.</span></h2>\r\n        <p class=\"lead margen-imagen\">Comparte tu tiempo con quien lo necesita, haz compañía, lee con ellos, rie y haz reir y verás que quizás no seas solo tú el que estás dando, si no que también estás recibiendo.</p>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <img class=\"img-responsive\" src=\"assets/images/500/visita-mayores.jpg\">\r\n      </div>\r\n    </div>\r\n    <hr class=\"featurette-divider\">\r\n  </div>\r\n  <footer class=\"container\">\r\n    <p class=\"float-right\"><a href=\"#\">Ir al principio</a></p>\r\n    <p>© 2020 Ayudarte. · <a href=\"#\">Privacidad</a> · <a href=\"#\">Terminos</a></p>\r\n  </footer>\r\n</main>\r\n\r\n");

/***/ }),

/***/ "n+O3":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mision/mision.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\t<header>\r\n\t  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n\t    <a class=\"navbar-brand\" routerLink=\"/home\">Ayudarte</a>\r\n\t    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t      <span class=\"navbar-toggler-icon\"></span>\r\n\t    </button>\r\n\t    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n\t      <ul class=\"navbar-nav mr-auto\">\r\n\t        <li class=\"nav-item \">\r\n\t          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n\t        </li>\r\n\t        <li class=\"nav-item active\">\r\n\t          <a class=\"nav-link\" routerLink=\"/mision\">Misión  <span class=\"sr-only\">(current)</span></a>\r\n\t        </li>\r\n\t        <li class=\"nav-item\">\r\n\t          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n\t        </li>\r\n\t      </ul>\r\n\t    </div>\r\n\t  </nav>\r\n\t</header>\r\n<main class=\"cuerpo\">\r\n    <section class=\"foto-junto-texto\">\r\n        <div >\r\n        \t<img src=\"assets/images/group-human-pile-tone-white.jpg\" hspace=\"5\" vspace=\"5\"\r\n             class=\"imagen-flotante\"  />\r\n            <p>\r\n              El año 2020 lametablemente pasara a la historia por ser el año en el que el mundo entero se vio sumido en una pandemia global a causa de la COVID-19. Esta situación llevo a toda la humanidad a tener que afrontar nuevos y numerosos retos.\r\n            </p>\r\n            <p>\r\n               A nivel institucional se tuvieron que afrontar muchos retos tanto sanitarios como económicos y sociales. La sociedad tambien tuvo que afrontar muchas situaciones que eran nuevas para todos, tales como restriccion de horarios, restricción de aforos en centros comerciales, perdida de empleos y un largo etc..\r\n            </p>\r\n            <p>\r\n                Sin embargo, estas situaciones nos llevaron a dar valor a muchas cosas que habiamos olvidado. Se volvío a valorar a sanitarios como se merecen, a las fuerzas del orden  a todas aquellas personas que desinteresadamente ofrecian su ayuda en forma de voluntariado.\r\n              </p>\r\n              <p>\r\n                Con esta perspectiva surge la idea de facilitar la colaboración intravecinal, apoyando a todos los que están en nuestro entorno y que por las circunstancias a las que nos estamos enfrentando necesitan nuestra ayuda. Partiendo de que la mejor forma de ayudar no es la caridad si no crear sinergias en las que todos podamos colaborar, ya que todas las personas independientemente de su edad o condicion pueden aportar a la sociedad proponemos esta aplicación en la que opdras intercambiar los servicios por tiempo.\r\n                Una vez que acumules tiempo en tu \"cartera de tiempo\" podrás gastarlo solicitando servicios en la plataforma.\r\n              </p>\r\n              <p>\r\n                La cantidad de servicios que puedes ofrecer es ilimitada, pudiendo desde hacer tareas del hogar, ayudar a niños en sus tareas del colegio, hacer la compra para vecinos mayores que no puedan ir al supermercado, enseñar a cocinar, enseñar bricolage, formatear un ordenador y todo aquello en lo que puedes ayudar y que seguro que hay personas que te lo agradecerían\r\n              </p>\r\n              <p>\r\n               Por un mundo mejor participa en Ayudarte.... el arte de ayudar.\r\n              </p>\r\n            </div>\r\n        </section>\r\n</main>\r\n\r\n");

/***/ }),

/***/ "pG9d":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhZG97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "s9Fo":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margen-imagen{\r\n    margin-left: 40px;\r\n}\r\n.color-amarillo{\r\n\tcolor: #ffdf00;\r\n}\r\n.color-rojo{\r\n\tcolor: #e00800;\r\n}\r\n.color-verde{\r\n\tcolor: #627f02;\r\n}\r\n.h1, h1 {\r\n    font-size: 4rem;\r\n}\r\n.texto-carrusel{\r\n  font-size: 30px;\r\n}\r\n.ancho-carrusel{\r\n\twidth: 80%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdlbi1pbWFnZW57XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4uY29sb3ItYW1hcmlsbG97XHJcblx0Y29sb3I6ICNmZmRmMDA7XHJcbn1cclxuXHJcbi5jb2xvci1yb2pve1xyXG5cdGNvbG9yOiAjZTAwODAwO1xyXG59XHJcblxyXG4uY29sb3ItdmVyZGV7XHJcblx0Y29sb3I6ICM2MjdmMDI7XHJcbn1cclxuXHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG4udGV4dG8tY2FycnVzZWx7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uYW5jaG8tY2FycnVzZWx7XHJcblx0d2lkdGg6IDgwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "soul":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/publico-layout/publico-layout.module.ts ***!
  \*****************************************************************/
/*! exports provided: PublicoLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicoLayoutModule", function() { return PublicoLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _publico_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publico-layout.routing */ "583M");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_mision_mision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/mision/mision.component */ "VYE7");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










let PublicoLayoutModule = class PublicoLayoutModule {
};
PublicoLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_publico_layout_routing__WEBPACK_IMPORTED_MODULE_5__["PublicoLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ],
        declarations: [
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _pages_mision_mision_component__WEBPACK_IMPORTED_MODULE_7__["MisionComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
        ]
    })
], PublicoLayoutModule);



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\">Ayudarte</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link\" routerLink=\"#\">Home </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/mision\">Misión</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login  <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"text-center centrado\">\r\n    <div class=\"hijo\">\r\n      <form class=\"form-signin\" method=\"post\">\r\n        <img class=\"mb-4\" src=\"assets/images/logo/logo.jpg\">\r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Por favor ingrese sus datos</h1>\r\n        <label for=\"inputEmail\" class=\"sr-only\">Dirección de correo</label>\r\n           <input\r\n            class=\"form-control\"\r\n            placeholder=\"Email address\"\r\n            type=\"email\"\r\n            [(ngModel)]=\"email\"\r\n            name=\"email\"\r\n            placeholder=\"Email\"\r\n            required=\"required\"\r\n          />\r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"password\"\r\n            [(ngModel)]=\"password\"\r\n            name=\"password\"\r\n            placeholder=\"Password\"\r\n            required=\"required\"\r\n          />\r\n          <button (click)=\"login()\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">Log in</button>\r\n      </form>\r\n      <div class=\"\">\r\n        <a class=\"nav-link enlaceCrearCuenta\" routerLink=\"/registro\"><i class=\"nc-icon2 nc-circle-10\"> Crear nueva cuenta</i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=layouts-publico-layout-publico-layout-module-es2015.js.map