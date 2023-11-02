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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
class User {
    constructor(id, name, lastName, username, email, password) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static fromEntity(userEntity) {
        return new User(userEntity.id, userEntity.name, userEntity.lastName, userEntity.username, userEntity.email, userEntity.password);
    }
}
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb21haW4vdXNlci91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE4QztBQUk5QyxNQUFNLElBQUk7SUFtQlIsWUFDRSxFQUFVLEVBQ1YsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixRQUFnQjtRQUVoQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQXNCO1FBQ3RDLE9BQU8sSUFBSSxJQUFJLENBQ2IsVUFBVSxDQUFDLEVBQUUsRUFDYixVQUFVLENBQUMsSUFBSSxFQUNmLFVBQVUsQ0FBQyxRQUFRLEVBQ25CLFVBQVUsQ0FBQyxRQUFRLEVBQ25CLFVBQVUsQ0FBQyxLQUFLLEVBQ2hCLFVBQVUsQ0FBQyxRQUFRLENBQ3BCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFUSxvQkFBSTtBQTdDWDtJQURDLElBQUEscUJBQVcsR0FBRTs7Z0NBQ0g7QUFHWDtJQURDLElBQUEscUJBQVcsR0FBRTs7a0NBQ0Q7QUFHYjtJQURDLElBQUEscUJBQVcsR0FBRTs7c0NBQ0c7QUFHakI7SUFEQyxJQUFBLHFCQUFXLEdBQUU7O3NDQUNHO0FBR2pCO0lBREMsSUFBQSxxQkFBVyxHQUFFOzttQ0FDQTtBQUdkO0lBREMsSUFBQSxxQkFBVyxHQUFFOztzQ0FDRyJ9