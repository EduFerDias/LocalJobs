import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_atn_tb_configuracoes_pessoais extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_config_pessoal: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pessoal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_pessoal',
        key: 'id_pessoal'
      }
    },
    ds_sobre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_idioma1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_idioma2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_idioma3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_linkedin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_instagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_twiter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_vagas_interesse1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_vagas_interesse2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_vagas_interesse3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_esperiencias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_formacoes_academicas: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ds_link_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_atn_tb_curriculo',
        key: 'id_curriculo'
      }
    }
  }, {
    sequelize,
    tableName: 'infoc_atn_tb_configuracoes_pessoais',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_config_pessoal" },
        ]
      },
      {
        name: "id_curriculo",
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
      {
        name: "id_pessoal",
        using: "BTREE",
        fields: [
          { name: "id_pessoal" },
        ]
      },
    ]
  });
  return infoc_atn_tb_configuracoes_pessoais;
  }
}
