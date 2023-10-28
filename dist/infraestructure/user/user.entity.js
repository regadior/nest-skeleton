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
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, lastName: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5mcmFlc3RydWN0dXJlL3VzZXIvdXNlci5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFpRTtBQUdqRSxJQUFNLFVBQVUsR0FBaEIsTUFBTSxVQUFVOzs7O0NBa0JmLENBQUE7QUFFUSxnQ0FBVTtBQWxCakI7SUFEQyxJQUFBLGdDQUFzQixFQUFDLE1BQU0sQ0FBQzs7c0NBQ3BCO0FBR1g7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3dDQUNJO0FBR2I7SUFEQyxJQUFBLGdCQUFNLEdBQUU7OzRDQUNRO0FBR2pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzs0Q0FDUjtBQUdqQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ0s7QUFHZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7NENBQ1E7cUJBakJiLFVBQVU7SUFEZixJQUFBLGdCQUFNLEVBQUMsTUFBTSxDQUFDO0dBQ1QsVUFBVSxDQWtCZiJ9