import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './schemas/link.schema';

export class LinksService {
  constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) {}

  findOne(id: string): Promise<Link> {
    return this.linkModel.findById(id).exec();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  createShortUrl(fullUrl: string): Promise<Link> {
    const link = new this.linkModel({ fullUrl:fullUrl });

    return link.save();
  }
}