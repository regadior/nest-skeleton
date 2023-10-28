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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserBodyDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserBodyDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.CreateUserBodyDto = CreateUserBodyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserBodyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserBodyDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserBodyDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserBodyDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserBodyDto.prototype, "password", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXVzZXItYm9keS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwbGljYXRpb24vdXNlci9yZXF1ZXN0L2R0by9jcmVhdGUtdXNlci1ib2R5LmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscURBQXVEO0FBRXZELE1BQWEsaUJBQWlCOzs7O0NBb0I3QjtBQXBCRCw4Q0FvQkM7QUFqQkM7SUFGQyxJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLDBCQUFRLEdBQUU7OytDQUNFO0FBSWI7SUFGQyxJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLDBCQUFRLEdBQUU7O21EQUNNO0FBSWpCO0lBRkMsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwwQkFBUSxHQUFFOzttREFDTTtBQUlqQjtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMEJBQVEsR0FBRTs7Z0RBQ0c7QUFJZDtJQUZDLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMEJBQVEsR0FBRTs7bURBQ00ifQ==