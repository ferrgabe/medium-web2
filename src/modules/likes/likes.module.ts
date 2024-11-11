import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentsService } from './likes.service';
import { Module } from '@nestjs/common';
import { CommentsController } from './likes.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
