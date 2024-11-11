import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create({ user_id, title, description, content }) {
    return await this.prismaService.posts.create({
      data: {
        user_id,
        title,
        description,
        content,
      },
    });
  }

  async findAll() {
    return await this.prismaService.posts.findMany();
  }

  async findOne(id: string) {
    const Post = await this.prismaService.posts.findUnique({ where: { id } });
    if (!Post) {
      throw new HttpException('Postagem não encontrada', 404);
    }
    return Post;
  }

  async update(id: string, { title, description, content }) {
    const Post = await this.prismaService.posts.findUnique({ where: { id } });
    if (!Post) {
      throw new HttpException('Postagem não encontrada', 404);
    }
    return await this.prismaService.posts.update({
      where: { id },
      data: { title, description, content },
    });
  }

  async remove(id: string) {
    const Post = await this.prismaService.posts.findUnique({ where: { id } });
    if (!Post) {
      throw new HttpException('Postagem não encontrada', 404);
    }
    return await this.prismaService.posts.delete({ where: { id } });
  }
}
