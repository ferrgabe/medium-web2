import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SessionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ email, password }) {
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const passwordMatch = await bcrypt.compare(user.password, password);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
  }
}
