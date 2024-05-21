import { Module} from "@nestjs/common";
import { userController } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    controllers : [userController],
    providers : [UserService]
})

export class UserModule {};
