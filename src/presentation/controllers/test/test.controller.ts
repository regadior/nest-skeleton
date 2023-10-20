import { Controller, Get } from '@nestjs/common';

@Controller()
class TestController {
  @Get('/test')
  getTest() {
    return 'test';
  }
}

export { TestController };
