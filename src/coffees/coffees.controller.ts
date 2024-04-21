/* eslint-disable prettier/prettier */
import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    Res
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coofeesService: CoffeesService
    ) {

    }

    @Get()
    findAll(@Query() paginationQuery) {
        return this.coofeesService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.coofeesService.findOne(id);
    }

    @Post()
    create(@Body() body:CreateCoffeeDto) {
        return  this.coofeesService.create(body);
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(
        @Param('id') id: number,
        @Body() body:UpdateCoffeeDto
      ) {
        return this.coofeesService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: number) {
        return this.coofeesService.remove(id);
    }
    
}
