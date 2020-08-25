import Sequelize, {
  Model
} from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init({
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'product',
      foreignKey: 'brand_uid',
    });
  }
}

export default Brand;
