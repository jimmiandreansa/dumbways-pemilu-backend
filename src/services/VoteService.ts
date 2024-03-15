import { AppDataSource } from "../data-source";
import { Vote } from "../entity/Vote";

export default new (class VoteService {
  VoteRepo = AppDataSource.getRepository(Vote);

  async create(datas: any): Promise<any> {
    try {
      const vote = this.VoteRepo.create({
        paslonId: datas.candidate_id,
        userId: datas.user_id,
      });

      await this.VoteRepo.createQueryBuilder()
        .insert()
        .into(Vote)
        .values(vote)
        .execute();

      return vote;
    } catch (err) {
      throw err;
    }
  }

  async find(): Promise<any> {
    try {
      const vote = await this.VoteRepo
        .createQueryBuilder("vote")
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.paslon", "paslon")
        .getMany();
      return vote;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const vote = await this.VoteRepo
        .createQueryBuilder("vote")
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.paslon", "paslon")
        .where("vote.id = :id", { id: id })
        .getOne();
      return vote;
    } catch (err) {
      throw err;
    }
  }

  async update(
    body: {
      paslonId: number;
      userId: number;
    },
    id: number
  ): Promise<any> {
    try {
      const dataUpdate = await this.VoteRepo
        .createQueryBuilder()
        .update(Vote)
        .set({
          paslonId: body.paslonId,
          userId: body.userId,
        })
        .where("id = :id", { id: id })
        .execute();

      return dataUpdate;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const dataRemove = await this.VoteRepo
        .createQueryBuilder()
        .leftJoinAndSelect("vote.user", "user")
        .leftJoinAndSelect("vote.paslon", "paslon")
        .delete()
        .where("id = :id", { id: id })
        .execute();

      return dataRemove;
    } catch (err) {
      throw err;
    }
  }

})();
