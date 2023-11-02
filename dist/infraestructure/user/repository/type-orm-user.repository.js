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
exports.TypeOrmUserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../type-orm/entities/user.entity");
let TypeOrmUserRepository = class TypeOrmUserRepository {
    constructor(typeOrmUser) {
        this.typeOrmUser = typeOrmUser;
    }
    async create(userData) {
        const createduser = await this.typeOrmUser.save(userData);
        console.log(createduser);
        return createduser;
    }
    async findById(userId) {
        const findedUser = await this.typeOrmUser.findOne({
            where: { id: userId },
        });
        console.log(findedUser);
        return findedUser;
    }
    async update(user) {
        console.log(user);
    }
    async delete(user) {
        console.log(user);
    }
};
exports.TypeOrmUserRepository = TypeOrmUserRepository;
exports.TypeOrmUserRepository = TypeOrmUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmUserRepository);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1vcm0tdXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2luZnJhZXN0cnVjdHVyZS91c2VyL3JlcG9zaXRvcnkvdHlwZS1vcm0tdXNlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1Qyw2Q0FBbUQ7QUFDbkQscUNBQXFDO0FBS3JDLHFFQUFpRTtBQUVqRSxJQUNNLHFCQUFxQixHQUQzQixNQUNNLHFCQUFxQjtJQUN6QixZQUVtQixXQUFtQztRQUFuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7SUFDbkQsQ0FBQztJQUVHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBMkI7UUFDN0MsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQWM7UUFDbEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUNoRCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO1NBQ3RCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBUztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQTtBQUVRLHNEQUFxQjtnQ0E3QnhCLHFCQUFxQjtJQUQxQixJQUFBLG1CQUFVLEdBQUU7SUFHUixXQUFBLElBQUEsMEJBQWdCLEVBQUMsd0JBQVUsQ0FBQyxDQUFBO3FDQUNDLG9CQUFVO0dBSHRDLHFCQUFxQixDQTJCMUIifQ==