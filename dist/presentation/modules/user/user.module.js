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
const create_user_usecase_1 = require("../../../application/user/create-user.usecase");
const user_repository_1 = require("../../../domain/user/user.repository");
const user_entity_1 = require("../../../infraestructure/type-orm/entities/user.entity");
const type_orm_user_repository_1 = require("../../../infraestructure/user/repository/type-orm-user.repository");
const user_controller_1 = require("../../controllers/user/user.controller");
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
                provide: user_repository_1.UserRepository,
                useClass: type_orm_user_repository_1.TypeOrmUserRepository,
            },
            {
                provide: create_user_usecase_1.CreateUserUseCase,
                useFactory: (userRepository) => new create_user_usecase_1.CreateUserUseCase(userRepository),
                inject: [user_repository_1.UserRepository],
            },
        ],
    })
], UserModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJlc2VudGF0aW9uL21vZHVsZXMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsNkNBQWdEO0FBRWhELHVGQUFrRjtBQUNsRiwwRUFBc0U7QUFDdEUsd0ZBQW9GO0FBQ3BGLGdIQUEwRztBQUMxRyw0RUFBd0U7QUFtQmpFLElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVU7Q0FBRyxDQUFBO0FBQWIsZ0NBQVU7cUJBQVYsVUFBVTtJQWpCdEIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHdCQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sRUFBRSxDQUFDLHVCQUFhLENBQUM7UUFDeEIsV0FBVyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUM3QixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZ0NBQWM7Z0JBQ3ZCLFFBQVEsRUFBRSxnREFBcUI7YUFDaEM7WUFDRDtnQkFDRSxPQUFPLEVBQUUsdUNBQWlCO2dCQUMxQixVQUFVLEVBQUUsQ0FBQyxjQUE4QixFQUFFLEVBQUUsQ0FDN0MsSUFBSSx1Q0FBaUIsQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxDQUFDLGdDQUFjLENBQUM7YUFDekI7U0FDRjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUcifQ==