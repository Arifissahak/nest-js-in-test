// url.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlService } from './url.service';
import { UrlSchema } from './url.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Url', schema: UrlSchema }]),
  ],
  providers: [UrlService],
  exports: [UrlService],
})
export class UrlModule {}
