import { Injectable } from "@nestjs/common";
import { IUser } from "./entity/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    private users: IUser[] = [];

    async create(CreateUserDto: CreateUserDto) {
        this.users.push(CreateUserDto);
        return this.users.at(-1);
    }
    
    async getAll() {
        return this.users;
    }

    async getById(id:number) {
        if(id <= 0 || id > this.users.length){
            return 'Error bunday id mavjud emas';
        }
        return this.users[id-1];
    }

    async update(id: number, data:any) {
        if(id <= 0 || id > this.users.length) {
            return 'Error bunday id mavjud emas';
        }

        this.users[id-1] = data;
        return this.users
    }

    delete (id:number){
        if(id <= 0 || id > this.users.length) {
            return 'Error bunday id mavjud emas';
        }
        this.users.splice(id-1, 1)[0]
        return {}
    }
}