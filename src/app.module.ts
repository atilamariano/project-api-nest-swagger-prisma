import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { GenreModule } from './genre/genre.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
   imports: [UsersModule, BooksModule, GenreModule, PrismaModule],
   controllers: [],
   providers: [],
})
export class AppModule {}
