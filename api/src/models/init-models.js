import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infoc_atn_tb_chat from  "./infoc_atn_tb_chat.js";
import _infoc_atn_tb_configuracoes_empresa from  "./infoc_atn_tb_configuracoes_empresa.js";
import _infoc_atn_tb_configuracoes_pessoais from  "./infoc_atn_tb_configuracoes_pessoais.js";
import _infoc_atn_tb_curriculo from  "./infoc_atn_tb_curriculo.js";
import _infoc_atn_tb_empresa from  "./infoc_atn_tb_empresa.js";
import _infoc_atn_tb_pessoal from  "./infoc_atn_tb_pessoal.js";
import _infoc_atn_tb_sala from  "./infoc_atn_tb_sala.js";
import _infoc_atn_tb_vagas from  "./infoc_atn_tb_vagas.js";

export default function initModels(sequelize) {
  var infoc_atn_tb_chat = _infoc_atn_tb_chat.init(sequelize, DataTypes);
  var infoc_atn_tb_configuracoes_empresa = _infoc_atn_tb_configuracoes_empresa.init(sequelize, DataTypes);
  var infoc_atn_tb_configuracoes_pessoais = _infoc_atn_tb_configuracoes_pessoais.init(sequelize, DataTypes);
  var infoc_atn_tb_curriculo = _infoc_atn_tb_curriculo.init(sequelize, DataTypes);
  var infoc_atn_tb_empresa = _infoc_atn_tb_empresa.init(sequelize, DataTypes);
  var infoc_atn_tb_pessoal = _infoc_atn_tb_pessoal.init(sequelize, DataTypes);
  var infoc_atn_tb_sala = _infoc_atn_tb_sala.init(sequelize, DataTypes);
  var infoc_atn_tb_vagas = _infoc_atn_tb_vagas.init(sequelize, DataTypes);

  infoc_atn_tb_configuracoes_pessoais.belongsTo(infoc_atn_tb_curriculo, { as: "id_curriculo_infoc_atn_tb_curriculo", foreignKey: "id_curriculo"});
  infoc_atn_tb_curriculo.hasMany(infoc_atn_tb_configuracoes_pessoais, { as: "infoc_atn_tb_configuracoes_pessoais", foreignKey: "id_curriculo"});
  infoc_atn_tb_configuracoes_empresa.belongsTo(infoc_atn_tb_empresa, { as: "id_empresa_infoc_atn_tb_empresa", foreignKey: "id_empresa"});
  infoc_atn_tb_empresa.hasMany(infoc_atn_tb_configuracoes_empresa, { as: "infoc_atn_tb_configuracoes_empresas", foreignKey: "id_empresa"});
  infoc_atn_tb_sala.belongsTo(infoc_atn_tb_empresa, { as: "id_empresa_infoc_atn_tb_empresa", foreignKey: "id_empresa"});
  infoc_atn_tb_empresa.hasMany(infoc_atn_tb_sala, { as: "infoc_atn_tb_salas", foreignKey: "id_empresa"});
  infoc_atn_tb_vagas.belongsTo(infoc_atn_tb_empresa, { as: "id_empresa_infoc_atn_tb_empresa", foreignKey: "id_empresa"});
  infoc_atn_tb_empresa.hasMany(infoc_atn_tb_vagas, { as: "infoc_atn_tb_vagas", foreignKey: "id_empresa"});
  infoc_atn_tb_configuracoes_pessoais.belongsTo(infoc_atn_tb_pessoal, { as: "id_pessoal_infoc_atn_tb_pessoal", foreignKey: "id_pessoal"});
  infoc_atn_tb_pessoal.hasMany(infoc_atn_tb_configuracoes_pessoais, { as: "infoc_atn_tb_configuracoes_pessoais", foreignKey: "id_pessoal"});
  infoc_atn_tb_curriculo.belongsTo(infoc_atn_tb_pessoal, { as: "id_pessoal_infoc_atn_tb_pessoal", foreignKey: "id_pessoal"});
  infoc_atn_tb_pessoal.hasMany(infoc_atn_tb_curriculo, { as: "infoc_atn_tb_curriculos", foreignKey: "id_pessoal"});
  infoc_atn_tb_sala.belongsTo(infoc_atn_tb_pessoal, { as: "id_pessoal_infoc_atn_tb_pessoal", foreignKey: "id_pessoal"});
  infoc_atn_tb_pessoal.hasMany(infoc_atn_tb_sala, { as: "infoc_atn_tb_salas", foreignKey: "id_pessoal"});
  infoc_atn_tb_chat.belongsTo(infoc_atn_tb_sala, { as: "id_sala_infoc_atn_tb_sala", foreignKey: "id_sala"});
  infoc_atn_tb_sala.hasMany(infoc_atn_tb_chat, { as: "infoc_atn_tb_chats", foreignKey: "id_sala"});
  infoc_atn_tb_curriculo.belongsTo(infoc_atn_tb_vagas, { as: "id_vaga_infoc_atn_tb_vaga", foreignKey: "id_vaga"});
  infoc_atn_tb_vagas.hasMany(infoc_atn_tb_curriculo, { as: "infoc_atn_tb_curriculos", foreignKey: "id_vaga"});

  return {
    infoc_atn_tb_chat,
    infoc_atn_tb_configuracoes_empresa,
    infoc_atn_tb_configuracoes_pessoais,
    infoc_atn_tb_curriculo,
    infoc_atn_tb_empresa,
    infoc_atn_tb_pessoal,
    infoc_atn_tb_sala,
    infoc_atn_tb_vagas,
  };
}
