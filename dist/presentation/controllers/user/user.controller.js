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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_user_usecase_1 = require("../../../application/user/create-user.usecase");
const create_user_body_dto_1 = require("../../../application/user/request/dto/create-user-body.dto");
let UserController = class UserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    createUser(createUserBody) {
        return this.createUserUseCase.execute(createUserBody);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created successfully',
        type: 'CreateCandidateResponse',
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    openapi.ApiResponse({ status: 201, type: require("../../../domain/user/user").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_body_dto_1.CreateUserBodyDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('/users'),
    (0, swagger_1.ApiTags)('users'),
    __metadata("design:paramtypes", [create_user_usecase_1.CreateUserUseCase])
], UserController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3ByZXNlbnRhdGlvbi9jb250cm9sbGVycy91c2VyL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBTXdCO0FBQ3hCLDZDQUFxRTtBQUVyRSx1RkFBa0Y7QUFDbEYscUdBQStGO0FBSXhGLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFDekIsWUFBNkIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFBRyxDQUFDO0lBVXJFLFVBQVUsQ0FBUyxjQUFpQztRQUNsRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGLENBQUE7QUFkWSx3Q0FBYztBQVd6QjtJQVJDLElBQUEsYUFBSSxHQUFFO0lBQ04sSUFBQSxzQkFBWSxFQUFDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLElBQUEscUJBQVcsRUFBQztRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxJQUFJLEVBQUUseUJBQXlCO0tBQ2hDLENBQUM7SUFDRCxJQUFBLGlCQUFRLEVBQUMsSUFBSSx1QkFBYyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7O0lBQ3RDLFdBQUEsSUFBQSxhQUFJLEdBQUUsQ0FBQTs7cUNBQWlCLHdDQUFpQjs7Z0RBRW5EO3lCQWJVLGNBQWM7SUFGMUIsSUFBQSxtQkFBVSxFQUFDLFFBQVEsQ0FBQztJQUNwQixJQUFBLGlCQUFPLEVBQUMsT0FBTyxDQUFDO3FDQUVpQyx1Q0FBaUI7R0FEdEQsY0FBYyxDQWMxQiJ9