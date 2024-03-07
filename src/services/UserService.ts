import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users";

export default new (class UserService {
  UserRepository = AppDataSource.getRepository(Users);

  async create(datas: any): Promise<any> {
    try {
      const user = this.UserRepository.create({
        fullname: datas.fullname,
        address: datas.address,
        gender: datas.gender,
        username: datas.username,
        password: datas.password,
      });

      await this.UserRepository.createQueryBuilder()
        .insert()
        .into(Users)
        .values(user)
        .execute();

      return user;
    } catch (err) {
      throw err;
    }
  }

  async find(): Promise<any> {
    try {
      const users = await this.UserRepository.createQueryBuilder(
        "user"
      ).getMany();

      return users;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const user = await this.UserRepository.findOneBy({ id });

      if (!user) {
        return "No user";
      }

      return user;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const userRemove = await AppDataSource.getRepository(Users)
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where({ id })
        .execute();

      if (!userRemove) {
        return "This user not exist";
      }

      return userRemove;
    } catch (err) {
      throw err;
    }
  }
})();
