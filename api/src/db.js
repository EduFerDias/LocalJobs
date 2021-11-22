import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'athena_db',
'roberto',
'abc@123', {
host: '192.168.0.80',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;

/* npx sequelize-auto -h 192.168.0.80 -d athena_db -u roberto -x abc@123 -e mysql -o models -l esm */