import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoa_enl_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ds_imagem: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vl_preco: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    ds_produto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    bt_ativo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    nr_media_avaliacao: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    nr_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nr_desconto: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'infoa_enl_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  return infoa_enl_produto;
  }
}
