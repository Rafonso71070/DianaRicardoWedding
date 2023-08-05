(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'Yani and Brian 2019';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travel/travel.component */ "./src/app/travel/travel.component.ts");
/* harmony import */ var _entourage_entourage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entourage/entourage.component */ "./src/app/entourage/entourage.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _registry_registry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registry/registry.component */ "./src/app/registry/registry.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _song_request_song_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./song-request/song-request.component */ "./src/app/song-request/song-request.component.ts");
/* harmony import */ var _services_songRequest_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/songRequest.service */ "./src/app/services/songRequest.service.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/top-nav/top-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"] },
    { path: 'travel', component: _travel_travel_component__WEBPACK_IMPORTED_MODULE_8__["TravelComponent"] },
    // { path: 'entourage', component: EntourageComponent},
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"] },
    { path: 'registry', component: _registry_registry_component__WEBPACK_IMPORTED_MODULE_11__["RegistryComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"] },
    { path: 'song-request', component: _song_request_song_request_component__WEBPACK_IMPORTED_MODULE_13__["SongRequestComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleComponent"],
                _travel_travel_component__WEBPACK_IMPORTED_MODULE_8__["TravelComponent"],
                _entourage_entourage_component__WEBPACK_IMPORTED_MODULE_9__["EntourageComponent"],
                _song_request_song_request_component__WEBPACK_IMPORTED_MODULE_13__["SongRequestComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__["TopNavComponent"],
                _registry_registry_component__WEBPACK_IMPORTED_MODULE_11__["RegistryComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [_services_songRequest_service__WEBPACK_IMPORTED_MODULE_14__["SongRequestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entourage/entourage.component.css":
/*!***************************************************!*\
  !*** ./src/app/entourage/entourage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entourage/entourage.component.html":
/*!****************************************************!*\
  !*** ./src/app/entourage/entourage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n\r\n  <!-- Content -->\r\n  <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n\r\n        \r\n      <!-- section -->\r\n      <section class=\"gla_section gla_image_bck\" data-color=\"#fff\">\r\n          \r\n          \r\n          <div class=\"container text-center\">\r\n\r\n              <h2>The Wedding Party</h2>\r\n              \r\n              <!-- filters -->\r\n              <div class=\"button-group filter-button-group\">\r\n                  <a data-filter=\"*\">Show All</a>\r\n                  <a data-filter=\".groomsmen\">Groomsmen</a>\r\n                  <a data-filter=\".bridesmaids\">Bridesmaids</a>\r\n                  <a data-filter=\".kids\">Adorable Kids</a>\r\n              </div>\r\n              <!-- filters end -->\r\n\r\n              <!-- grid -->\r\n              <div class=\"gla_portfolio_no_padding grid\">\r\n                  \r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"assets/images/eleyni.jpg\" class=\"lightbox\">\r\n                              <img src=\"assets/images/eleynimin.jpg\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Eleyni Rodriguez<br>Maid of Honor<br>Sisterhood est. 1992\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Layla Gros<br>Matron of Honor<br>Sisterhood est. 1989\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Megan O'Donnell<br>Bridesmaid<br>Friendship est. 2014\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Michelle Piluso<br>Bridesmaid<br> Friendship est. 2004\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Fernanda Rodriguez<br>Bridesmaid<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item bridesmaids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Tamara Rodriguez<br>Bridesmaid<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Daniel O'Donnell<br>Best Man<br>Brotherhood est. 1990\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD<br>Groomsman<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD<br>Groomsman<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD<br>Groomsman<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD<br>Groomsman<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item groomsmen\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD<br>Groomsman<br>Friendship est. ????\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item kids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Ainsley Bell<br>Flower Girl<br>Cuteness est. 2016?\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item kids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"http://placehold.it/1400x800\" class=\"lightbox\">\r\n                              <img src=\"http://placehold.it/600x600\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              TBD Bell<br>TBD<br>Cuteness est. 2018\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4 gla_anim_box grid-item kids\">\r\n                      <div class=\"gla_shop_item\">\r\n                          <a href=\"assets/images/vale.jpg\" class=\"lightbox\">\r\n                              <img src=\"assets/images/valemin.jpeg\" alt=\"\">\r\n                          </a>\r\n                          \r\n                          <a href=\"#\" class=\"gla_shop_item_title\">\r\n                              Valentina Gros<br>Flower Girl<br>Cuteness est. 2014\r\n                          </a>\r\n\r\n                      </div>\r\n                  </div>\r\n\r\n\r\n               </div>\r\n               <!-- grid end -->\r\n              \r\n          </div>\r\n          <!-- container end -->\r\n\r\n      </section>\r\n      <!-- section end -->\r\n\r\n  </section>\r\n  <!-- section end -->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/entourage/entourage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/entourage/entourage.component.ts ***!
  \**************************************************/
/*! exports provided: EntourageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntourageComponent", function() { return EntourageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntourageComponent = /** @class */ (function () {
    function EntourageComponent(router) {
        this.router = router;
    }
    EntourageComponent.prototype.ngOnInit = function () {
    };
    EntourageComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    EntourageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entourage',
            template: __webpack_require__(/*! ./entourage.component.html */ "./src/app/entourage/entourage.component.html"),
            styles: [__webpack_require__(/*! ./entourage.component.css */ "./src/app/entourage/entourage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EntourageComponent);
    return EntourageComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n\r\n<!-- Content -->\r\n<section id=\"gla_content\" class=\"gla_content\">\r\n\r\n    <!-- section -->\r\n    <section id=\"accordion\" class=\"gla_section\">\r\n        <div class=\"container\">\r\n            <p class=\"text-center\"><img src=\"assets/images/flowers_slider/flowertop.png\" data-bottom-top=\"@src:assets/images/flowers_slider/flowertop.png\" height=\"150\" alt=\"\"></p>\r\n            <h3  class=\"text-center\" style= \"margin-bottom: 10px;\">Perguntas Frequentes</h3>\r\n\r\n        <!-- <div class=\"row\" data-100-top=\"@class:row sticky_block\" data--200-bottom=\"@class:row hide_sticky_block\" data-bottom-top=\"@class:row nosticky_block\"> -->\r\n            <!-- <div class=\"center\"> -->\r\n                <!-- CONTENT  -->\r\n                <!-- <div class=\"col-md-9 gla_main_sidebar top-margin-xlg\"> -->\r\n            \r\n                    <!-- Accordion -->\r\n                    <!-- <h3 id=\"accordions\">Frequently Asked Questions</h3> -->\r\n                    \r\n                    <div class=\"panel-group accord-chev top-margin-xlg\" >\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">O que devo vestir?</a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Cocktail chique. <br><br>Senhoras, apesar da cerimonia e cocktail serem no exterior, a refeição será no salão recomendamos calçado confortavel para dançar e participar nos jogos! <br><br>Senhores, gravatas são opcionais.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">São permitidas crianças?</a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Sim. Voces conhecem os Noivos CERTO???🤣</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">Existe estacionamento no local?</a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Sim. Não irá faltar lugares para estacionarem as vossas viaturas <b>gratuitamente</b>, no entanto é gravilha, podendo haver um pouco de pó.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">Vão fornecer transporte?</a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Infelizmente não. Pelo que sugerimos que se organizem com os convidados que conhecem para virem à boleia</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\">Is the venue ADA accessible?</a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Yes. The ceremony, cocktail hour, and reception areas are all on the same level and wheelchair accessible. If you have any special needs, please don't hesitate to reach out in advance. We want to make sure everyone has a great time.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>-->\r\n                    </div>\r\n                    <!-- Accordion end--> \r\n\r\n                <!-- </div> -->\r\n            <!-- </div> -->\r\n        <!-- </div> -->\r\n        </div>\r\n    </section>\r\n</section>\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent(router) {
        this.router = router;
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n\r\n  <!-- Content -->\r\n  <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n    <!-- section -->\r\n    <section id=\"lightbox\" class=\"gla_section gla_image_bck\">\r\n            \r\n            \r\n        <div class=\"container text-center\">\r\n            <h2 style=\"margin-top: 50px;\">Gallery</h2>\r\n            <p>Below is a glimpse of the past 5 amazing years. We can't wait to get started on our lifetime of photos as a married couple!</p>\r\n            \r\n            <!-- filters -->\r\n            <!-- <div class=\"button-group filter-button-group\">\r\n                <a data-filter=\"*\">Show All</a>\r\n                <a data-filter=\".fun\">Fun</a>\r\n                <a data-filter=\".family\">Family & Friends</a>\r\n                <a data-filter=\".milestones\">Milestones</a>\r\n            </div> -->\r\n            <!-- filters end -->\r\n\r\n            <!-- grid -->\r\n            <div class=\"gla_portfolio grid\" style=\"position: relative; height: 1235.62px;\">\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb_horiz_street_light.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb_horiz_street_light.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb1.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb1.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb_vert_lighthouse.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb_vert_lighthouse.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam14.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam14.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb2.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb2.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb_horiz_water.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb_horiz_water.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam19.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam19.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb3.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb3.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb4.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb4.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb5.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb5.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam3.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam3.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb50.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb50.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb6.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb6.jpg\" alt=\"\">\r\n                        </a>  \r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam31.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam31.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb7.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb7.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb8.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb8.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam16.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam16.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam18.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam18.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb9.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb9.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb10.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb10.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb47.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb47.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam5.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam5.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb11.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb11.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb12.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb12.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb13.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb13.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam6.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam6.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb14.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb14.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam8.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam8.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb16.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb16.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb15.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb15.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb17.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb17.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb49.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb49.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb19.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb19.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam1.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam1.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb20.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb20.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb21.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb21.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb22.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb22.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam21.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam21.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb23.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb23.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb24.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb24.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb25.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb25.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam7.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam7.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb26.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb26.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb27.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb27.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam9.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam9.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb28.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb28.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb29.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb29.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam13.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam13.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb30.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb30.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb31.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb31.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam29.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam29.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb32.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb32.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb33.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb33.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb34.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb34.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb51.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb51.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam11.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam11.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam30.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam30.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb35.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb35.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb36.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb36.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb37.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb37.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb38.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb38.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb39.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb39.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb40.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb40.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam15.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam15.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb46.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb46.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb42.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb42.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb43.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb43.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb44.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb44.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam20.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam20.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb45.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb45.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb48.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb48.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam23.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam23.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb18.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb18.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-4 gla_anim_box grid-item milestones\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb41.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb41.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam25.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam25.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item family\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/fam27.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/fam27.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4 gla_anim_box grid-item fun\">\r\n                    <div class=\"gla_shop_item\">\r\n                        <a href=\"/assets/images/yb2_vert_lighthouse.jpg\" class=\"lightbox\">\r\n                            <img src=\"/assets/images/yb2_vert_lighthouse.jpg\" alt=\"\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n             <!-- grid end -->\r\n\r\n        </div>\r\n        <!-- container end -->\r\n\r\n    </section>\r\n    <!-- section end -->\r\n\r\n  </section>\r\n  <!-- content section end -->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(router) {
        this.router = router;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page gla_middle_titles\" id=\"gla_page\">\r\n\r\n  <!-- To Top -->\r\n  <a href=\"#gla_page\" class=\"gla_top ti ti-angle-up gla_go\"></a>\r\n\r\n  <!-- Music -->\r\n  <div class=\"gla_music_icon\">\r\n    <i class=\"ti ti-music\"></i>\r\n  </div>\r\n  <div class=\"gla_music_icon_cont\">\r\n    <iframe src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108238095&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true\" allow=\"autoplay\"></iframe>ß\r\n  </div>\r\n\r\n\r\n  <!-- NAVIGATION -->\r\n  <app-top-nav></app-top-nav>\r\n  <!-- END of NAVIGATION -->\r\n\r\n\r\n  <!-- Slider -->\r\n  <div class=\"gla_slider gla_image_bck gla_fixed\" data-stellar-background-ratio=\"0.2\" data-color=\"#efe5dd\" style=\"background-color: rgb(239, 229, 221); background-attachment: fixed;\">\r\n\r\n    <div class=\"gla_slider_flower\">\r\n      <div class=\"gla_slider_flower_c1 gla_slider_flower_item\" data-start=\"top:0px; left:0px\" data-200-start=\"top:-300px; left:-300px\"></div>\r\n      <div class=\"gla_slider_flower_c2 gla_slider_flower_item\" data-start=\"top:0px; right:0px\" data-200-start=\"top:-300px; right:-300px\"></div>\r\n      <div class=\"gla_slider_flower_c3 gla_slider_flower_item\" data-start=\"bottom:0px; right:0px\" data-200-start=\"bottom:-300px; right:-300px\"></div>\r\n      <div class=\"gla_slider_flower_c3 gla_slider_flower_item\" data-start=\"bottom:-48px; left:0px\" data-200-start=\"bottom:-300px; left:-300px\" style=\"bottom: -48px;left: 0px;transform: rotate(90deg);\"></div>\r\n      <div class=\"gla_slider_flower_c5 gla_slider_flower_item\" data-start=\"top:0px; left:50%\" data-200-start=\"top:-300px; left:50%\"></div>\r\n      <div class=\"gla_slider_flower_c6 gla_slider_flower_item\" data-start=\"bottom:0px; left:50%\" data-200-start=\"bottom:-300px; left:50%\"></div>\r\n    </div>\r\n\r\n    <!-- Over -->\r\n    <div class=\"gla_over\" data-color=\"#9abab6\" data-opacity=\"0\"></div>\r\n\r\n    <div class=\"container\">\r\n\r\n      <!-- Slider Texts -->\r\n      <div class=\"gla_slide_txt gla_slide_center_middle text-center\">\r\n\r\n        <div class=\"gla_slide_midtitle\">Diana e Ricardo\r\n          <br>09 Junho 2024</div>\r\n\r\n      </div>\r\n      <!-- Slider Texts End -->\r\n\r\n    </div>\r\n    <!-- container end -->\r\n\r\n    <!-- Slide Down -->\r\n    <a class=\"gla_scroll_down gla_go\" href=\"#gla_content\">\r\n      <b></b>\r\n      Scroll\r\n    </a>\r\n\r\n  </div>\r\n  <!-- Slider End -->\r\n\r\n\r\n  <!-- Content -->\r\n  <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n    <!-- section -->\r\n    <section class=\"gla_section gla_lg_padding gla_image_bck gla_fixed gla_wht_txt\" id=\"homepage-image-tint\" data-stellar-background-ratio=\"0.2\" \r\n      style=\"background-image: url(assets/images/TestbalcaoMadeira.jpg); background-attachment: fixed; background-repeat: no-repeat; background-size: cover;\">\r\n\r\n     <!-- <div class=\"gla_slider_flower\" data-bottom-top=\"@class:active\" data--200-bottom=\"@class:no_active\">\r\n        <div class=\"gla_slider_flower_c1 gla_slider_flower_item\"></div>\r\n        <div class=\"gla_slider_flower_c2 gla_slider_flower_item\"></div>\r\n        <div class=\"gla_slider_flower_c3 gla_slider_flower_item\"></div>\r\n        <div class=\"gla_slider_flower_c4 gla_slider_flower_item\"></div>\r\n        <div class=\"gla_slider_flower_c5 gla_slider_flower_item\"></div>\r\n        <div class=\"gla_slider_flower_c6 gla_slider_flower_item\"></div>\r\n      </div>-->\r\n\r\n\r\n      <div class=\"container text-center\">\r\n\r\n        <p>\r\n          <img src=\"assets/images/animations/mrandmrs_wh.gif\" data-bottom-top=\"@src:assets/images/animations/mrandmrs_wh.gif\" height=\"150\" alt=\"\">\r\n        </p>\r\n\r\n        <h2>We’re Getting Married!</h2>\r\n\r\n        <p>Em 2019 duas pessoas \"especiais\" decidiram que juntos eram muito mais completos. Agora 4 anos depois estamos prontos para nos unirmos para o resto da nossas vidas. E tudo o que queremos é celebrar esse momento junto dos nossos familiares e amigos mais proximos! \r\n        </p>\r\n\r\n\r\n\r\n      </div>\r\n      <!-- container end -->\r\n\r\n    </section>\r\n    <!-- section end -->\r\n\r\n\r\n    <!-- section -->\r\n    <section class=\"gla_section gla_image_bck gla_fixed\" data-stellar-background-ratio=\"0.2\" data-color=\"#fff\">\r\n\r\n\r\n      <div class=\"container text-center\">\r\n        <p>\r\n          <img src=\"assets/images/animations/savethedate.gif\" data-bottom-top=\"@src:assets/images/animations/savethedate.gif\" height=\"150\" alt=\"\">\r\n        </p>\r\n        <h2>09 Junho 2024</h2>\r\n        <h3 class=\"gla_subtitle\">OUR QUINTA<br>Vila Franca do Rosáro - Mafra</h3>\r\n        <div class=\"gla_countdown\" data-year='2024' data-month='06' data-day='09'>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- container end -->\r\n\r\n    </section>\r\n    <!-- section end -->\r\n  </section>\r\n  <!-- Content End -->\r\n\r\n</div>\r\n<!-- Page End -->"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(router) {
        this.router = router;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/registry/registry.component.css":
/*!*************************************************!*\
  !*** ./src/app/registry/registry.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registry/registry.component.html":
/*!**************************************************!*\
  !*** ./src/app/registry/registry.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n<iframe id=\"formApp\" allowtransparency=\"true\" allowfullscreen=\"true\" allow=\"geolocation; microphone; camera\" src=\"https://my.forms.app/form/64ce475ae6534249b4b960f4\" frameborder=\"0\" style=\"width: 100vw; min-width:100%; height:100vh; border:none;\"></iframe>\r\n<!-- Content -->\r\n<!-- section end -->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/registry/registry.component.ts":
/*!************************************************!*\
  !*** ./src/app/registry/registry.component.ts ***!
  \************************************************/
/*! exports provided: RegistryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryComponent", function() { return RegistryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistryComponent = /** @class */ (function () {
    function RegistryComponent(router) {
        this.router = router;
    }
    RegistryComponent.prototype.ngOnInit = function () {
    };
    RegistryComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
        var iframe = document.getElementById('test');
        console.log(iframe);
    };
    RegistryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registry',
            template: __webpack_require__(/*! ./registry.component.html */ "./src/app/registry/registry.component.html"),
            styles: [__webpack_require__(/*! ./registry.component.css */ "./src/app/registry/registry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistryComponent);
    return RegistryComponent;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.component.css":
/*!*************************************************!*\
  !*** ./src/app/schedule/schedule.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/schedule/schedule.component.html":
/*!**************************************************!*\
  !*** ./src/app/schedule/schedule.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n\r\n    <!-- Content -->\r\n    <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n        <!-- section -->\r\n        <section class=\"gla_section\">\r\n            \r\n            <div class=\"container text-center\">\r\n                <p><img src=\"assets/images/flowers_slider/flowertop.png\" data-bottom-top=\"@src:assets/images/flowers_slider/flowertop.png\" height=\"150\" alt=\"\"></p>\r\n                <h3>Detalhes do Casamento</h3>\r\n                <h4 class=\"gla_subtitle\">Domingo, Junho 09, 2024</h4><br>\r\n                <h4 class=\"gla_subtitle\">OUR QUINTA<br>Vila Franca do Rosáro - Mafra</h4>\r\n\r\n                <!-- boxes -->\r\n                <div class=\"gla_icon_boxes row text-left\">\r\n\r\n                    <!-- item -->\r\n                    <div class=\"col-md-4 col-sm-6\">\r\n                        <span class=\"gla_news_block\">\r\n                            <span class=\"gla_news_img\">\r\n                                <span class=\"gla_over\" style=\"background-image:url(assets/images/cerimonia.jpg);\"></span>    \r\n                            </span>\r\n                            <span class=\"gla_news_title\">O Local</span>\r\n                            <p><strong>OUR QUINTA</strong><br>Rua Nossa Senhora da Memória<br>2665-419 Vila Franca do Rosário<br><br>Existe bastante espaço para estacionamento e um numero limitado de quartos para quem necessitar de passar a noite na quinta.<br><strong>Taxis e Uber</strong> estão disponiveis na zona.</p><br>\r\n                        </span>\r\n                    </div> \r\n\r\n                    <!-- item -->\r\n                    <div class=\"col-md-4 col-sm-6\">\r\n                        <span class=\"gla_news_block\">\r\n                            <span class=\"gla_news_img\">\r\n                                <span class=\"gla_over\" style=\"background-image:url(assets/images/cocktail.jpg);\"></span>  \r\n                            </span>\r\n                            <span class=\"gla_news_title\">O Horário</span>\r\n                            <p><strong>A cerimonia de casamento irá realizar-se as 17h00</strong>.<br><br>Seguir-se-á o cocktail e recepção.</p><br><br><br><br><br><br>\r\n                        </span>\r\n                    </div> \r\n\r\n                    <!-- item -->\r\n                    <div class=\"col-md-4 col-sm-6\">\r\n                        <span class=\"gla_news_block\">\r\n                            <span class=\"gla_news_img\">\r\n                                <span class=\"gla_over\" style=\"background-image:url(assets/images/ourquinta_Placa.jpg);\"></span>  \r\n                            </span>\r\n                            <span class=\"gla_news_title\">Detalhes</span>\r\n                            <ul>\r\n                            <li> A cerimonia ira realizar-se no exterior e não será muito longa</li>\r\n                            <li> Vão existir actividades exteriores bem como bar e sitios para conviver e tirar fotos</li>\r\n                            <li> Todo o local tem condições para pessoas com mobilidade reduzida </li>\r\n                            <li> O local é pet Friendly podem trazer os vossos companheiros de quatro patas </li>\r\n                            </ul>\r\n                        </span>\r\n                    </div> \r\n\r\n                </div>\r\n                <!-- boxes end -->\r\n                \r\n            </div>\r\n            <!-- container end -->\r\n\r\n        </section>\r\n        <!-- section end -->\r\n    \r\n    </section>\r\n    <!-- content end -->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/schedule/schedule.component.ts":
/*!************************************************!*\
  !*** ./src/app/schedule/schedule.component.ts ***!
  \************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(router) {
        this.router = router;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/services/songRequest.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/songRequest.service.ts ***!
  \*************************************************/
/*! exports provided: SongRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRequestService", function() { return SongRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongRequestService = /** @class */ (function () {
    function SongRequestService(myHttp) {
        this.myHttp = myHttp;
    }
    SongRequestService.prototype.submitSong = function (theSong) {
        return this.myHttp.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/song-request", theSong)
            .map(function (responseFromApi) { return responseFromApi.json(); });
    };
    SongRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SongRequestService);
    return SongRequestService;
}());



/***/ }),

/***/ "./src/app/song-request/song-request.component.css":
/*!*********************************************************!*\
  !*** ./src/app/song-request/song-request.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/song-request/song-request.component.html":
/*!**********************************************************!*\
  !*** ./src/app/song-request/song-request.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n  <!-- NAVIGATION -->\r\n  <app-top-nav></app-top-nav>\r\n  <!-- END of NAVIGATION -->\r\n\r\n    <!-- Content -->\r\n    <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n      <!-- section -->\r\n      <section class=\"gla_section\">\r\n\r\n          <div class=\"container text-center\">\r\n              <h2 style=\"margin-bottom: 10px;\">Request a Song</h2><br><br><br>\r\n              <p>Help us make sure our reception is poppin. What song do you want to hear?</p>\r\n              \r\n              <div class=\"row\">\r\n                  <div class=\"col-md-8 col-md-push-2\">\r\n                      <form action=\"https://formspree.io/your@mail.com\" method=\"POST\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                  <!-- <label>What song do you want to hear at the reception?</label> -->\r\n                                  <input type=\"text\" [(ngModel)]=\"formInfo.song\" id=\"song\" name=\"song\" class=\"form-control form-opacity\" placeholder=\"Name your song\"/>\r\n                              </div>\r\n                              \r\n                              <div class=\"col-md-12\">\r\n                                  <button (click)=\"submitSong()\" class=\"btn submit\" value=\"Submit\">Submit</button>\r\n                              </div>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n              \r\n              \r\n          </div>\r\n          <!-- container end -->\r\n\r\n      </section>\r\n      <!-- section end -->\r\n\r\n    </section>\r\n    <!-- content end-->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/song-request/song-request.component.ts":
/*!********************************************************!*\
  !*** ./src/app/song-request/song-request.component.ts ***!
  \********************************************************/
/*! exports provided: SongRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongRequestComponent", function() { return SongRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_songRequest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/songRequest.service */ "./src/app/services/songRequest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongRequestComponent = /** @class */ (function () {
    function SongRequestComponent(songRequestService, router) {
        this.songRequestService = songRequestService;
        this.router = router;
        this.formInfo = { song: '' };
    }
    SongRequestComponent.prototype.ngOnInit = function () {
    };
    SongRequestComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    SongRequestComponent.prototype.submitSong = function () {
        var _this = this;
        this.songRequestService.submitSong(this.formInfo)
            .subscribe(function () {
            _this.formInfo = {};
        });
    };
    SongRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-request',
            template: __webpack_require__(/*! ./song-request.component.html */ "./src/app/song-request/song-request.component.html"),
            styles: [__webpack_require__(/*! ./song-request.component.css */ "./src/app/song-request/song-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_songRequest_service__WEBPACK_IMPORTED_MODULE_2__["SongRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SongRequestComponent);
    return SongRequestComponent;
}());



/***/ }),

/***/ "./src/app/top-nav/top-nav.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<header class=\"gla_header\">\r\n\r\n  <nav class=\"gla_light_nav gla_image_bck gla_fixed\" data-color=\"#313e2c\" style=\"background-color: rgb(49, 62, 44);\">\r\n    <div class=\"gla_over\" data-color=\"#313e2c\" data-opacity=\"0.8\" style=\"background-color: rgb(49, 62, 44);\">\r\n    </div>\r\n    \r\n    <div class=\"container\">\r\n\r\n      <div class=\"gla_logo_container clearfix\">\r\n        <div class=\"gla_logo_txt\">\r\n          <!-- Logo -->\r\n          <a href=\"/\" class=\"gla_logo\">D+R</a>\r\n\r\n          <!-- Text Logo -->\r\n          <div class=\"gla_logo_und\">09 Junho 2024</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Menu -->\r\n      <div class=\"gla_main_menu gla_main_menu_mobile\">\r\n\r\n        <div class=\"gla_main_menu_icon\">\r\n          <i></i>\r\n          <i></i>\r\n          <i></i>\r\n          <i></i>\r\n          <b>Menu</b>\r\n          <b class=\"gla_main_menu_icon_b\">Back</b>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Menu Content -->\r\n      <div class=\"gla_main_menu_content gla_image_bck\" data-color=\"rgba(0,0,0,0.9)\" style=\"background-color: rgba(0, 0, 0, 0.9);\">\r\n        <!-- Over -->\r\n        <div class=\"gla_over\" data-color=\"#000\" data-opacity=\"0.7\" style=\"background-color: rgb(0, 0, 0); opacity: 0.7;\"></div>\r\n      </div>\r\n\r\n      <div class=\"gla_main_menu_content_menu gla_wht_txt text-right\">\r\n        <div class=\"container\">\r\n            <div class=\"menu-menu-1-container\">\r\n              <ul>\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/index']\">Home</a>\r\n                </li>\r\n\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/schedule']\">Horario</a>\r\n                </li>\r\n\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/travel']\">Localização</a>\r\n                </li>\r\n\r\n                <!-- <li class=\"gla\">\r\n                  <a [routerLink]=\"['/entourage']\">Entourage</a>\r\n                </li> -->\r\n\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/faq']\">FAQ</a>\r\n                </li>\r\n\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/registry']\">Registo</a>\r\n                </li>\r\n\r\n                <li class=\"gla\">\r\n                  <a [routerLink]=\"['/gallery']\">Galeria</a>\r\n                </li>\r\n\r\n                <!-- <li class=\"gla\">\r\n                  <a [routerLink]=\"['/song-request']\">Request a Song</a>\r\n                </li> -->\r\n              </ul>\r\n            </div>\r\n        </div>\r\n        <!-- container end -->\r\n      </div>\r\n      <!-- menu content end -->\r\n\r\n      <!-- Top Menu -->\r\n      <div class=\"gla_default_menu\">\r\n        <ul>\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/index']\">Home</a>\r\n          </li>\r\n\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/schedule']\">Horario</a>\r\n          </li>\r\n\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/travel']\">Localização</a>\r\n          </li>\r\n\r\n          <!-- <li class=\"gla\">\r\n            <a [routerLink]=\"['/entourage']\">Entourage</a>\r\n          </li> -->\r\n\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/faq']\">FAQ</a>\r\n          </li>\r\n\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/registry']\">Registo</a>\r\n          </li>\r\n\r\n          <li class=\"gla\">\r\n            <a [routerLink]=\"['/gallery']\">Galeria</a>\r\n          </li>\r\n\r\n          <!-- <li class=\"gla\">\r\n            <a [routerLink]=\"['/song-request']\">Request a Song</a>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n      <!-- Top Menu End -->\r\n    </div>\r\n    <!-- container end -->\r\n  </nav>\r\n\r\n</header>\r\n<!-- Header End -->"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(router) {
        this.router = router;
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.css */ "./src/app/top-nav/top-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel.component.css":
/*!*********************************************!*\
  !*** ./src/app/travel/travel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/travel/travel.component.html":
/*!**********************************************!*\
  !*** ./src/app/travel/travel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"gla_page\" id=\"gla_page\">\r\n\r\n<!-- NAVIGATION -->\r\n<app-top-nav></app-top-nav>\r\n<!-- END of NAVIGATION -->\r\n\r\n    <!-- Content -->\r\n    <section id=\"gla_content\" class=\"gla_content\">\r\n\r\n        <!-- section -->\r\n        <section class=\"gla_section\">\r\n            \r\n            <div class=\"container text-center\">\r\n                <!-- <p><img src=\"assets/images/flowers_slider/flowertop.png\" data-bottom-top=\"@src:assets/images/flowers_slider/flowertop.png\" height=\"150\" alt=\"\"></p> -->\r\n                <h3 style=\"margin-bottom: 10px; margin-top: 50px;\">Travel Information</h3>\r\n                <p>We are so grateful and excited to have you with us on our special day! Below is everything you need to know to make the most of your time in the D.C. area.</p>\r\n                <div class=\"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d29b89c\" data-id=\"d29b89c\" data-element_type=\"column\">\r\n                    <div class=\"elementor-column-wrap elementor-element-populated\">\r\n                                    <div class=\"elementor-widget-wrap\">\r\n                                <div class=\"elementor-element elementor-element-dc41d9d elementor-widget elementor-widget-menu-anchor\" data-id=\"dc41d9d\" data-element_type=\"widget\" data-widget_type=\"menu-anchor.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                            <div id=\"contactos\" class=\"elementor-menu-anchor\"></div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"elementor-element elementor-element-ec46148 elementor-widget elementor-widget-spacer\" data-id=\"ec46148\" data-element_type=\"widget\" data-widget_type=\"spacer.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                            <div class=\"elementor-spacer\">\r\n                    <div class=\"elementor-spacer-inner\"></div>\r\n                </div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"elementor-element elementor-element-37c64db elementor-widget elementor-widget-heading\" data-id=\"37c64db\" data-element_type=\"widget\" data-widget_type=\"heading.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                    \r\n                    <h3 class=\"elementor-heading-title elementor-size-default\">Localização</h3>\t\t</div>\r\n                        </div>\r\n                        <div class=\"elementor-element elementor-element-cfa89af elementor-widget elementor-widget-image\" data-id=\"cfa89af\" data-element_type=\"widget\" data-widget_type=\"image.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                            <div class=\"elementor-image\">\r\n                                                    <a href=\"https://goo.gl/maps/HxVBhuyoUsbaRSFD8\" target=\"_blank\">\r\n                                    <img width=\"613\" height=\"202\" src=\"https://ourquinta.com/wp-content/uploads/2020/11/our-quinta-mapa.png\" class=\"attachment-large size-large\" alt=\"our-quinta-mapa\" decoding=\"async\" loading=\"lazy\" srcset=\"https://ourquinta.com/wp-content/uploads/2020/11/our-quinta-mapa.png 613w, https://ourquinta.com/wp-content/uploads/2020/11/our-quinta-mapa-300x99.png 300w\" sizes=\"(max-width: 613px) 100vw, 613px\">\t\t\t\t\t\t\t\t</a>\r\n                                                    </div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"elementor-element elementor-element-5f804f9 elementor-widget elementor-widget-text-editor\" data-id=\"5f804f9\" data-element_type=\"widget\" data-widget_type=\"text-editor.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                            <div class=\"elementor-text-editor elementor-clearfix\"><p><span style=\"color: #333333;\">Mapa do Google: <a href=\"https://goo.gl/maps/HxVBhuyoUsbaRSFD8\" target=\"_blank\" rel=\"noopener\">https://goo.gl/maps/HxVBhuyoUsbaRSFD8</a></span>&nbsp;</p></div>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"elementor-element elementor-element-0eed23d elementor-widget elementor-widget-text-editor\" data-id=\"0eed23d\" data-element_type=\"widget\" data-widget_type=\"text-editor.default\">\r\n                        <div class=\"elementor-widget-container\">\r\n                            <div class=\"elementor-text-editor elementor-clearfix\"><p><span style=\"color: #ffffff;\"><a style=\"color: #ffffff;\" href=\"https://ourquinta.com/wp-content/uploads/2023/04/0-mapa-localizacao-our-quinta-2023.pdf\" target=\"_blank\" rel=\"noopener\"><span style=\"color: #000000;\">Como chegar (PDF)</span></a></span></p></div>\r\n                        </div>\r\n                        </div>\r\n                                </div>\r\n                            </div>\r\n                </div>\r\n                \r\n            \r\n            </div>\r\n            <!-- container end -->\r\n\r\n        </section>\r\n        <!-- section end -->\r\n    \r\n    </section>\r\n    <!-- content end -->\r\n\r\n</div>\r\n<!-- page end -->"

/***/ }),

/***/ "./src/app/travel/travel.component.ts":
/*!********************************************!*\
  !*** ./src/app/travel/travel.component.ts ***!
  \********************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelComponent = /** @class */ (function () {
    function TravelComponent(router) {
        this.router = router;
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/glanz_script.js');
    };
    TravelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel',
            template: __webpack_require__(/*! ./travel.component.html */ "./src/app/travel/travel.component.html"),
            styles: [__webpack_require__(/*! ./travel.component.css */ "./src/app/travel/travel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TravelComponent);
    return TravelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\project\DianaRicardoWedding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map