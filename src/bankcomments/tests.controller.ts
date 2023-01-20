import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}
  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    this.testsService.create(createTestDto);
    return {status: true}
  }
  @Get()
  list() {
    return this.testsService.findAll();
  }
}