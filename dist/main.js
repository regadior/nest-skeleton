"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nestjs_pino_1 = require("nestjs-pino");
const app_module_1 = require("./presentation/modules/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest Skeleton')
        .setDescription('Nest Skeleton App ')
        .setVersion(process.env.VERSION || '1.0')
        .addBearerAuth()
        .build();
    if (process.env.NODE_ENV === 'development') {
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        app.enableCors({
            allowedHeaders: '*',
            origin: '*',
        });
    }
    else {
        app.enableCors({
            origin: process.env.FRONTEND_URL,
        });
    }
    //setup logger
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.useGlobalInterceptors(new nestjs_pino_1.LoggerErrorInterceptor());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQTJDO0FBQzNDLDZDQUFpRTtBQUNqRSw2Q0FBNkQ7QUFFN0Qsa0VBQThEO0FBRTlELEtBQUssVUFBVSxTQUFTO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0lBRWhELEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsTUFBTSxPQUFPLEdBQUcsSUFBSSx5QkFBZSxFQUFFO1NBQ2xDLFFBQVEsQ0FBQyxlQUFlLENBQUM7U0FDekIsY0FBYyxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLFVBQVUsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQWtCLElBQUksS0FBSyxDQUFDO1NBQ3BELGFBQWEsRUFBRTtTQUNmLEtBQUssRUFBRSxDQUFDO0lBRVgsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUU7UUFDMUMsTUFBTSxRQUFRLEdBQUcsdUJBQWEsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELHVCQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNiLGNBQWMsRUFBRSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1NBQ2pDLENBQUMsQ0FBQztLQUNKO0lBRUQsY0FBYztJQUNkLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxvQkFBTSxDQUFDLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxvQ0FBc0IsRUFBRSxDQUFDLENBQUM7SUFFeEQsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyJ9