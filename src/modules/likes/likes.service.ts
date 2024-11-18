import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private readonly prismaService: PrismaService) {}
  async create({ user_id, post_id }) {
    return await this.prismaService.likes.create({
      data: {
        user_id,
        post_id,
      },
    });
  }

  async remove({ user_id, post_id }) {
    const like = await this.prismaService.likes.findFirst({
      where: { user_id, post_id },
    });
    if (!like) {
      throw new HttpException('Like não encontrado', 404);
    }
    return await this.prismaService.likes.delete({ where: { id:like.id } });
  }
}
