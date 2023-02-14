import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { LinksService } from './links.service';
import { Link } from './schemas/link.schema';
import { LinkDto } from './schemas/LinkDto';

@Controller('links')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    @Get('redirect/:shortUrl')
    async redirectUrl(@Param('shortUrl') shortUrl: string): Promise<Link> {
        return this.linksService.findOne(shortUrl);
    }

    @Get()
    async findAll(): Promise<Link[]> {
        return this.linksService.findAll();
    }

    @Post('addlink')
    async addLink(@Body() linkDto: LinkDto): Promise<Link> {
        return this.linksService.createShortUrl(linkDto.fullUrl);
    }
}