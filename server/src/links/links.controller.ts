import { Controller, Get, Post, Param } from '@nestjs/common';
import { LinksService } from './links.service';
import { Link } from './schemas/link.schema';

@Controller('links')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    @Get('/:id')
    async redirectUrl(@Param() id): Promise<Link> {
        return this.linksService.findOne(id);
    }

    @Get()
    async findAll(): Promise<Link[]> {
        return this.linksService.findAll();
    }

    @Post('/:fullUrl')
    async addLink(@Param('fullUrl') fullUrl:  string): Promise<Link> {
        return this.linksService.createShortUrl(fullUrl);
    }
}