import { Body, Controller, Delete, Get, Param, Post, Response } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserInterface } from "src/interface/user-interface";
import { response } from "express";
@Controller("user")
export class userController {
    constructor(private readonly userService: UserService) { }
    @Get('/all')
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    // TODO get specific User id
    @Get(":id")
    getUserById(@Param() param : { id : string}){
        return this.userService.getUserById(param);
    }

    @Post("create")
    createUser(@Body() body: UserInterface , @Response({passthrough : true})  response ){
        return this.userService.createUsers(body);
    }

    // TOSO : this route delete user from the List 
    @Delete(":id")
    deleteUser(@Param() param : { id :string}){
        return this.userService.deleteUser(param);
    }


}