import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() response, @Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    try {
      const newProduct = await this.productService.create(createProductDto);
      console.log(newProduct);
      return response.status(HttpStatus.CREATED).json({
        message: 'Product has been created successfully',
        newProduct,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Quest not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
