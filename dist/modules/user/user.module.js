"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../infraestructure/user/user.entity");
const create_user_usecase_1 = require("../../application/user/create-user.usecase");
const user_controller_1 = require("../../presentation/controllers/user/user.controller");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: create_user_usecase_1.CreateUserUseCase,
                useFactory: () => new create_user_usecase_1.CreateUserUseCase(),
                inject: [],
            },
        ],
    })
], UserModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3VzZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyw2Q0FBZ0Q7QUFFaEQsd0VBQWdFO0FBQ2hFLG9GQUEwRTtBQUMxRSx5RkFBZ0Y7QUFjekUsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQUFHLENBQUE7QUFBYixnQ0FBVTtxQkFBVixVQUFVO0lBWnRCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyx3QkFBVSxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLEVBQUUsQ0FBQyx1QkFBYSxDQUFDO1FBQ3hCLFdBQVcsRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDN0IsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHVDQUFpQjtnQkFDMUIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksdUNBQWlCLEVBQUU7Z0JBQ3pDLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUcifQ==