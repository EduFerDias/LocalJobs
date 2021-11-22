use athena_db;

DROP TABLE infoc_atn_tb_chat;
DROP TABLE infoc_atn_tb_configuracoes_empresa
DROP TABLE infoc_atn_tb_sala;
DROP TABLE infoc_atn_tb_vagas;
DROP TABLe infoc_atn_tb_curriculo;
DROP TABLE infoc_atn_tb_pessoal;
DROP TABLE infoc_atn_tb_configuracoes_pessoais;
DROP TABLE infoc_atn_tb_empresa;


CREATE TABLE infoc_atn_tb_empresa (
   id_empresa			int primary key auto_increment,
   nm_nome				varchar(255),
   nr_cnpj				bigint,
   nm_ramo				varchar(255),
   nr_telefone			bigint,
   ds_estado_cidade		varchar(255),
   ds_email				varchar(255),
   ds_senha				varchar(255),
   ds_codigo_rec		varchar(255)
 )ENGINE=innodb;
    

 CREATE TABLE infoc_atn_tb_pessoal (
   id_pessoal			int primary key auto_increment,
   nm_nome				varchar(255),
   ds_area				varchar(255),
   ds_cargo				varchar(255),
   nr_telefone			BIGINT,
   ds_estado_cidade		varchar(255),
   ds_email				varchar(255),
   ds_senha				varchar(255),
   bl_assinatura		tinyint
 )ENGINE=innodb;
   
 CREATE TABLE infoc_atn_tb_sala (
   id_sala				int primary key auto_increment,
   nm_sala				varchar(255),
   bt_ativa				bool,
   id_empresa			int,
   id_pessoal			int,
   FOREIGN KEY (id_empresa) REFERENCES infoc_atn_tb_empresa(id_empresa),
   FOREIGN KEY (id_pessoal) REFERENCES infoc_atn_tb_pessoal(id_pessoal)
 )ENGINE=innodb;
   
 CREATE TABLE infoc_atn_tb_chat (
   id_chat			int primary key auto_increment,
   id_sala			int,
   ds_mensagem		varchar(255),
   dt_mensagem		datetime,
   tp_enviado_por	varchar(255),
   FOREIGN KEY (id_sala)REFERENCES infoc_atn_tb_sala(id_sala)
 )ENGINE=innodb;
   
 CREATE TABLE infoc_atn_tb_configuracoes_pessoais (
   id_config_pessoal int primary key auto_increment,
   id_pessoal				int,
   ds_sobre					varchar(255),
   ds_idioma1				varchar(255),
   ds_idioma2				varchar(255),
   ds_idioma3				varchar(255),
   ds_linkedin				varchar(255),
   ds_instagram				varchar(255),
   ds_twiter				varchar(255),
   ds_vagas_interesse1		varchar(255),
   ds_vagas_interesse2		varchar(255),
   ds_vagas_interesse3		varchar(255),
   ds_esperiencias			varchar(255),
   ds_formacoes_academicas	varchar(255),
   ds_link_imagem			varchar(255),
   id_curriculo				int,
   FOREIGN KEY (id_curriculo) REFERENCES infoc_atn_tb_curriculo(id_curriculo),
      FOREIGN KEY (id_pessoal) REFERENCES infoc_atn_tb_pessoal(id_pessoal) ON DELETE CASCADE
  )ENGINE=innodb;
   
 CREATE TABLE infoc_atn_tb_vagas (
   id_vaga					int primary key auto_increment,
   id_empresa				int,
   ds_profissao				varchar(255),
   ds_descricao				varchar(255),
   ds_qualificacao			varchar(255),
   ds_formacao 				varchar(255),
   ds_local_trabalho		varchar(255),
   ds_salario_de			int,
   ds_salario_a				int,
   ds_tipo_contratacao		varchar(255),
   ds_beneficios			varchar(255),
   ds_hora_trabalho			time,
   FOREIGN KEY (id_empresa) REFERENCES infoc_atn_tb_empresa(id_empresa)
   )ENGINE=innodb;

 CREATE TABLE infoc_atn_tb_configuracoes_empresa (
   id_empresaconfig 		int primary key auto_increment,
   id_empresa				int,
   ds_site					varchar(255),
   ds_descricao_empresa		varchar(255),
   ds_instagram_empresa		varchar(255),
   ds_twitter_empresa		varchar(255),
   ds_linkdin_empresa		varchar(255),
   ds_link_imagem			varchar(255),
   ds_porte					varchar(255),
   qtd_funcionarios			int,
        FOREIGN KEY (id_empresa) REFERENCES infoc_atn_tb_empresa(id_empresa) ON DELETE CASCADE
 )ENGINE=innodb;
   
   
   CREATE TABLE infoc_atn_tb_curriculo (
     id_curriculo 		int primary key auto_increment,
     id_pessoal 		int,
     id_vaga 			int,
     ds_curriculo 		varchar(255),
     FOREIGN KEY (id_pessoal) REFERENCES infoc_atn_tb_pessoal(id_pessoal),
     FOREIGN KEY (id_vaga) REFERENCES infoc_atn_tb_vagas(id_vaga) ON DELETE CASCADE
 )ENGINE=innodb;     