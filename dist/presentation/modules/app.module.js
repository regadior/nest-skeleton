"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const dotenv = __importStar(require("dotenv"));
const nestjs_pino_1 = require("nestjs-pino");
const user_module_1 = require("./user/user.module");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +(process.env.DB_PORT || 5432),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            }),
            config_1.ConfigModule.forRoot(),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                    },
                },
            }),
            user_module_1.UserModule,
        ],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVzZW50YXRpb24vbW9kdWxlcy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDJDQUE4QztBQUM5Qyw2Q0FBZ0Q7QUFDaEQsK0NBQWlDO0FBQ2pDLDZDQUEyQztBQUUzQyxvREFBZ0Q7QUFFaEQsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBMEJULElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztDQUFHLENBQUE7QUFBWiw4QkFBUztvQkFBVCxTQUFTO0lBeEJyQixJQUFBLGVBQU0sRUFBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHVCQUFhLENBQUMsT0FBTyxDQUFDO2dCQUNwQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztnQkFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7Z0JBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7Z0JBQ2pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Z0JBQzdCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7WUFDRixxQkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0QiwwQkFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsUUFBUSxFQUFFO29CQUNSLFNBQVMsRUFBRTt3QkFDVCxNQUFNLEVBQUUsYUFBYTtxQkFDdEI7aUJBQ0Y7YUFDRixDQUFDO1lBQ0Ysd0JBQVU7U0FDWDtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUcifQ==