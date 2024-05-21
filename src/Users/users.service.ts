import {Injectable, Param} from "@nestjs/common";
import { UserInterface } from "src/interface/user-interface";

@Injectable()
export class UserService{
    Users:UserInterface[] =[];

    getAllUsers (): UserInterface[]{
        return this.Users;
    }

    getUserById(params): UserInterface[]{
        const {id } = params;
        const filteredList = this.Users.filter((items: UserInterface)=>{
            if(items.id === id){
                return items
            }
        });

        if(filteredList && filteredList.length > 0){
            return filteredList;
        }
        return [];
     }

    // TODO : creating user 

    createUsers(payload : UserInterface) : { status : boolean , message :string}{
        try {
            const findUser = this.Users.find((item)=> item.id === payload?.id);
            if(findUser){
                return {
                     status : false,
                     message : `User ${payload?.id} already exists `
                }
            }

            this.Users.push(payload);

            return {
                status : true,
                message : `User ${payload?.id} added successfully`
            }
        } catch (error) {
            console.error(error);
            return {
                 status : false,
                 message : "Something Went Wrong!"
            }
        }
    }

    deleteUser(param : { id : string}): { status : boolean , message ? : string , error ?: string}{
        try {
            const findOne = this.Users.find(items => items.id === param?.id);
            if(findOne){
                const userDeletd = this.Users.filter((items:UserInterface)=>{
                    if(items?.id !== param?.id){
                        return items;
                    }
                });

                this.Users = userDeletd;
                return {
                    status :true,
                    message : `User ${param?.id} deleted successfully`
                }
            }

            return {
                status :false,
                message : `User ${param?.id} not exists`
            }

        } catch (error) {
            console.error(error);
            return {
                 status : false,
                 error : "Something went Wrong!"
            }
        }

    }
}

