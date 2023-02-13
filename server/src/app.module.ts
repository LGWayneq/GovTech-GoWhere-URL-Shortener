import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinksModule } from './links/links.module';
import { Link, LinkSchema } from './links/schemas/link.schema';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://root:root@urlshortenercluster.plx8ebe.mongodb.net/?retryWrites=true&w=majority'),
        MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]), LinksModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule { }