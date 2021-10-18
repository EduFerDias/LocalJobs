 /*SCRIPT DO LUIZ EDUARDO*/
 
 CREATE TABLE infoc_atn_tb_empresa (
   id_empresa			int primary key auto_increment,
   nm_nome				varchar(100),
   nr_cnpj				varchar(14),
   nm_ramo				varchar(100),
   nr_telefone			varchar(14),
   ds_estado_cidade		varchar(100),
   ds_email				varchar(100),
   ds_senha				varchar(100),
   ds_confirmar_senha	varchar(100)
   )ENGINE=inno_db;
    
 CREATE TABLE infoc_atn_tb_pessoal (
   id_pessoal			int primary key auto_increment,
   nm_nome				varchar(100),
   ds_area				varchar(100),
   ds_cargo				varchar(100),
   nr_telefone			varchar(100),
   ds_estado_cidade		varchar(100),
   ds_email				varchar(100),
   ds_confirmar_senha	varchar(100),
   bl_assinatura		varchar(100)
   )ENGINE=inno_db;
 
 CREATE TABLE infoc_atn_tb_sala (
   id_sala				int primary key auto_increment,
   nm_sala				varchar(100),
   bt_ativa				bool,
   id_empresa			int,
   id_pessoal			int,
   FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id_empresa),
   FOREIGN KEY (id_pessoal) REFERENCES tb_pessoal(id_pessoal)
   );   
   
 CREATE TABLE infoc_atn_tb_chat (
   id_chat			int primary key auto_increment,
   id_sala			int,
   ds_mensagem		varchar(255),
   dt_mensagem		datetime,
   tp_enviado_por	varchar(100),
   FOREIGN KEY (id_sala)	REFERENCES tb_sala(id_sala)
   )ENGINE=inno_db;
   
 CREATE TABLE infoc_atn_tb_configuracoes_pessoais (
   id_pessoal				int primary key auto_increment,
   ds_sobre					varchar(100),
   ds_idioma1				varchar(100),
   ds_idioma2				varchar(100),
   ds_idioma3				varchar(100),
   ds_linkedin				varchar(100),
   ds_instagram				varchar(100),
   ds_twiter				varchar(100),
   ds_vagas_interesse1		varchar(100),
   ds_vagas_interesse2		varchar(100),
   ds_vagas_interesse3		varchar(100),
   ds_esperiencias			varchar(100),
   ds_formacoes_academicas	varchar(100),
   ds_link_imagem			varchar(100),
   ds_link_curriculo		varchar(100),
   FOREIGN KEY (id_pessoal) REFERENCES tb_pessoal(id_pessoal)
   )ENGINE=inno_db;
   
 CREATE TABLE infoc_atn_tb_vagas (
   id_vaga					int primary key auto_increment,
   id_empresa				int,
   ds_profissao				varchar(100),
   ds_descricao				varchar(100),
   ds_qualificacao			varchar(100),
   ds_local_trabalho		varchar(100),
   ds_salario_de			varchar(100),
   ds_salario_a				varchar(100),
   ds_tipo_contratacao		varchar(100),
   ds_beneficios			varchar(100),
   ds_hora_trabalho			varchar(100),
   FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id_empresa)
   )ENGINE=inno_db;

 CREATE TABLE infoc_atn_tb_configurcoes_empresa (
   id_empresa				int primary key auto_increment,
   ds_site					varchar(100),
   ds_descricao_empresa		varchar(100),
   ds_instagram_empresa		varchar(100),
   ds_twiter_empresa		varchar(100),
   ds_link_imagem			varchar(100),
   FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id_empresa)
   )ENGINE=inno_db;
