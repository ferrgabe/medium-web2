import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() body) {
    return this.likesService.create({ ...body });
  }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.likesService.remove(id);
//   }
}
