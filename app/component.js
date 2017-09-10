"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repository_model_1 = require("./repository.model");
var ProductComponent = (function () {
    function ProductComponent() {
        this.model = new repository_model_1.Model();
        this.targetName = "Kayak";
    }
    ProductComponent.prototype.getClasses = function () {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    };
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    ProductComponent.prototype.getProductCount = function () {
        return this.getProducts().length;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app/template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
