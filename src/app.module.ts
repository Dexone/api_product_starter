import { Module } from '@nestjs/common';
import { ProductModule } from './product.module';

@Module({
  imports: [ProductModule],
})
export class AppModule {}
