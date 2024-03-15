import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";

export default new (class PaslonService {
  PaslonRepo = AppDataSource.getRepository(Paslon);

  async create(reqBody: any): Promise<any> {
    try {
      const paslon = this.PaslonRepo.create({
        namePaslon: reqBody.namePaslon,
        numberPaslon: reqBody.numberPaslon,
        imagePaslon: reqBody.imagePaslon,
        visiMisi: reqBody.visiMisi,
        koalisi: reqBody.koalisi,
      });

      await this.PaslonRepo.createQueryBuilder()
        .insert()
        .into(Paslon)
        .values(paslon)
        .execute();

      return paslon;
    } catch (err) {
      throw err;
    }
  }

  async find(): Promise<any> {
    try {
      const paslon = await this.PaslonRepo.createQueryBuilder().getMany();
      return paslon;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const paslon = await this.PaslonRepo.createQueryBuilder()
        .where("id = :id", { id: id })
        .getOne();
      if (!paslon) return "No paslon found";
      return paslon;
    } catch (err) {
      throw err;
    }
  }

  async update(
    id: number,
    data: {
      namePaslon: string;
      numberPaslon: number;
      imagePaslon: string;
      visiMisi: any;
      koalisi: any;
    }
  ): Promise<any> {
    try {
      const paslonUpdate = await this.PaslonRepo.createQueryBuilder()
        .update(Paslon)
        .set({
          namePaslon: data.namePaslon,
          numberPaslon: data.numberPaslon,
          imagePaslon: data.imagePaslon,
          visiMisi: data.visiMisi,
          koalisi: data.koalisi,
        })
        .where("id = :id", { id: id })
        .execute();

      return paslonUpdate;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const paslonRemove = this.PaslonRepo.createQueryBuilder()
        .delete()
        .from(Paslon)
        .where("id = :id", {id : id})
        .execute()

      return paslonRemove
    } catch (err) {
      throw err;
    }
  }
})();
