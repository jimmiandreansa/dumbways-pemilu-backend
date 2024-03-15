import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";

export default new (class PartaiService {
  PartaiRepo = AppDataSource.getRepository(Partai);

  async create(reqBody: any): Promise<any> {
    try {
      const partai = this.PartaiRepo.create({
        namePartai: reqBody.namePartai,
        paslonId: reqBody.paslonId,
        ketumPartai: reqBody.ketumPartai,
        visiMisi: reqBody.visiMisi,
        address: reqBody.address,
        logoPartai: reqBody.logoPartai,
      });

      await this.PartaiRepo.createQueryBuilder()
        .insert()
        .into(Partai)
        .values(partai)
        .execute();

      return partai;
    } catch (err) {
      throw err;
    }
  }

  async find(): Promise<any> {
    try {
      const partai = this.PartaiRepo.createQueryBuilder().getMany();
      return partai;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const partai = await this.PartaiRepo.findOneBy({ id });
      if (!partai) return "No partai found";
      return partai;
    } catch (err) {
      throw err;
    }
  }

  async update(
    id: number,
    data: {
      namePartai: string;
      paslonId: number;
      ketumPartai: string;
      visiMisi: any;
      address: string;
      logoPartai: string;
    }
  ): Promise<any> {
    try {
      const partaiUpdate = await this.PartaiRepo.createQueryBuilder()
        .update(Partai)
        .set({
          namePartai: data.namePartai,
          paslonId: data.paslonId,
          ketumPartai: data.ketumPartai,
          visiMisi: data.visiMisi,
          address: data.address,
          logoPartai: data.logoPartai,
        })
        .where("id = :id", { id: id })
        .execute();

      return partaiUpdate;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number) : Promise<any> {
    try {
      const partaiRemove = await this.PartaiRepo
        .createQueryBuilder()
        .delete()
        .from(Partai)
        .where("id = :id", {id : id})
        .execute()

      return partaiRemove
    }catch(err) {
      throw err
    }
  }
})();
