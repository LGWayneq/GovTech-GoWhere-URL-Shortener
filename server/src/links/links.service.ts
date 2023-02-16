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

  async createShortUrl(fullUrl: string): Promise<Link> {
    var shortUrl = shortenUrl(fullUrl);
    
    // check if generated short url exists
    const prevLink = await this.linkModel.findOne({ "shortUrl": shortUrl }).exec();
    if (prevLink != null && prevLink.fullUrl == fullUrl) {
      // if previous full url is the same, can return previously created Link object.
      return prevLink; 
    }

    const link = new this.linkModel({ 
      shortUrl: shortUrl,
      fullUrl: fullUrl 
    });

    return link.save();
  }
}