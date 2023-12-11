// url.controller.ts
import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UrlService } from './url.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Url } from './url.model';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  @UseGuards(JwtAuthGuard)
  async shortenUrl(@Request() req, @Body() body: { originalUrl: string }): Promise<Url> {
    const userId = req.user.id;
    return this.urlService.shortenUrl(body.originalUrl, userId);
  }

  @Get('list')
  @UseGuards(JwtAuthGuard)
  async getUserUrls(@Request() req): Promise<Url[]> {
    const userId = req.user.id;
    return this.urlService.findUrlsByUserId(userId);
  }

  @Get(':shortUrl')
  async redirect(@Request() req): Promise<{ originalUrl: string } | { error: string }> {
    const shortUrl = req.params.shortUrl;
    const url = await this.urlService.findUrlByShortUrl(shortUrl);
    if (url) {
      return { originalUrl: url.originalUrl };
    } else {
      return { error: 'URL not found' };
    }
  }
}
