import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create({ user_id, post_id, content }) {
    return await this.prismaService.comments.create({
      data: {
        user_id,
        post_id,
        content,
      },
    });
  }

  async findAll() {
    return await this.prismaService.comments.findMany();
  }

  async findOne(id: string) {
    const Comments = await this.prismaService.comments.findUnique({
      where: { id },
    });
    if (!Comments) {
      throw new HttpException('Comentário não encontrado', 404);
    }
    return Comments;
  }

  async update(id: string, { user_id, post_id, content }) {
    const Comments = await this.prismaService.comments.findUnique({
      where: { id },
    });
    if (!Comments) {
      throw new HttpException('Comentário não encontrado', 404);
    }
    return await this.prismaService.comments.update({
      where: { id },
      data: { user_id, post_id, content },
    });
  }

  async remove(id: string) {
    const Comments = await this.prismaService.comments.findUnique({
      where: { id },
    });
    if (!Comments) {
      throw new HttpException('Comentário não encontrado', 404);
    }
    return await this.prismaService.comments.delete({ where: { id } });
  }
}
