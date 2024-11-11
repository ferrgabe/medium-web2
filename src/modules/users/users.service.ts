import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create({ email, name, password }) {
    const User = await this.prismaService.user.findUnique({ where: { email } });
    if (User) {
      throw new HttpException('Usuário com e-mail já cadastrado', 409);
    }
    return await this.prismaService.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    const User = await this.prismaService.user.findUnique({ where: { id } });
    if (!User) {
      throw new HttpException('Usuário não encontrado', 404);
    }
    return User;
  }

  async update(id: string, { name, password }) {
    const User = await this.prismaService.user.findUnique({ where: { id } });
    if (!User) {
      throw new HttpException('Usuário não encontrado', 404);
    }
    return await this.prismaService.user.update({
      where: { id },
      data: { name, password },
    });
  }

  async remove(id: string) {
    const User = await this.prismaService.user.findUnique({ where: { id } });
    if (!User) {
      throw new HttpException('Usuário não encontrado', 404);
    }
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
