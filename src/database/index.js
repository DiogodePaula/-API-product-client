import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

const models = [];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    console.log('BOMBANDO');

    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new DataBase();
