import { Body,Controller,Delete,Get,Param,Post, Put} from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() CreateUserDto: CreateUserDto){
        return this.userService.create(CreateUserDto);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    getById(@Param("id") id: string) {
        return this.userService.getById(+id)
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() 
    updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.userService.delete(+id)
    }   
}