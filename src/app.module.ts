import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.module';
import { Test, TestSchema } from './bankcomments/tests.schema';
import { TestsController } from './bankcomments/tests.controller';
import { TestsService } from './bankcomments/tests.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), DatabaseModule,
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, TestsController],
  providers: [AppService, TestsService],
})
export class AppModule { }
