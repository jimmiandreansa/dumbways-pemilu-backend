import { AppDataSource } from "../data-source";
import { Articles } from "../entity/Articles";

export default new (class ArticleService {
  ArticleRepository = AppDataSource.getRepository(Articles);

  async create(reqBody: any): Promise<any> {
    try {
      const article = this.ArticleRepository.create({
        title: reqBody.title,
        content: reqBody.content,
        userId: reqBody.userId,
        imageUrl: reqBody.imageUrl,
        isHeadline: reqBody.isHeadline,
      });

      await this.ArticleRepository.createQueryBuilder()
        .insert()
        .into(Articles)
        .values(article)
        .execute();

      return article;
    } catch (err) {
      throw err;
    }
  }

  async find(): Promise<any> {
    try {
      const articles =
        await this.ArticleRepository.createQueryBuilder().getMany();

      return articles;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      const article = await this.ArticleRepository.findOneBy({ id });

      if (!article) return "No articles found";

      return article;
    } catch (err) {
      throw err;
    }
  }

  async update(
    id: number,
    data: {
      title: string;
      content: string;
      imageUrl: string;
      isHeadline: boolean;
    }
  ): Promise<any> {
    try {
      const articleUpdate = await this.ArticleRepository.createQueryBuilder()
        .update(Articles)
        .set({
          title: data.title,
          content: data.content,
          imageUrl: data.imageUrl,
          isHeadline: data.isHeadline,
        })
        .where("id = :id", { id: id })
        .execute();

      return articleUpdate;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number): Promise<any> {
    try {
      const articleRemove = await this.ArticleRepository.createQueryBuilder()
        .delete()
        .from(Articles)
        .where({ id })
        .execute();

      if (!articleRemove) return "This article not found";

      return articleRemove;
    } catch (err) {
      throw err;
    }
  }
})();
