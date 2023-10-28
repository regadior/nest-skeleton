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
exports.TestController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
let TestController = class TestController {
    getTest() {
        return 'test';
    }
};
exports.TestController = TestController;
__decorate([
    (0, common_1.Get)('/test'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestController.prototype, "getTest", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)()
], TestController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3ByZXNlbnRhdGlvbi9jb250cm9sbGVycy90ZXN0L3Rlc3QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBR2pELElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFFbEIsT0FBTztRQUNMLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBO0FBRVEsd0NBQWM7QUFMckI7SUFEQyxJQUFBLFlBQUcsRUFBQyxPQUFPLENBQUM7Ozs7OzZDQUdaO3lCQUpHLGNBQWM7SUFEbkIsSUFBQSxtQkFBVSxHQUFFO0dBQ1AsY0FBYyxDQUtuQiJ9