import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class AppService {
  constructor(
      // @InjectModel(Profile) private profileRepository: typeof Profile,
      // @InjectModel(User) private profileUser: typeof User,
  ) {
  }
  getHello(): string {
    // this.profileRepository.destroy({where: {'userId': 1}, cascade: true});
    // this.profileUser.destroy({where: {'id': 1}});
    return 'Hello World!!';

  }
}
