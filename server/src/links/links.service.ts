import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './schemas/link.schema';
import { shortenUrl } from '../utils/LinksUtils';

export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  findOne(shortUrl: string): Promise<Link> {
    return this.linkModel.findOne({ "shortUrl": shortUrl }).exec();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  createShortUrl(fullUrl: string): Promise<Link> {
    const link = new this.linkModel({ 
      shortUrl: shortenUrl(fullUrl),
      fullUrl: fullUrl 
    });

    return link.save();
  }
}