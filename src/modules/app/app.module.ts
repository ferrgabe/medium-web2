import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';
import { CommentsModule } from '../comments/comments.module';
import { LikesModule } from '../likes/likes.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, UsersModule, PostsModule, CommentsModule, LikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
