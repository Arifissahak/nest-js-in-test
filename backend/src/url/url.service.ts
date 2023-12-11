// url.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './url.model';
import * as shortid from 'shortid';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async shortenUrl(originalUrl: string, userId: string): Promise<Url> {
    const shortUrl = shortid.generate();
    const url = new this.urlModel({ originalUrl, shortUrl, userId });
    return url.save();
  }

  async findUrlByShortUrl(shortUrl: string): Promise<Url | null> {
    return this.urlModel.findOne({ shortUrl }).exec();
  }

  async findUrlsByUserId(userId: string): Promise<Url[]> {
    return this.urlModel.find({ userId }).exec();
  }
}
