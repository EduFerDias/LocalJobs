import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'mysql_17753_nsftcc',
'nsftcc',
'nsf@tcc', {
host: 'my01.winhost.com',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;

/* npx sequelize-auto -h my01.winhost.com -d mysql_17753_nsftcc -u nsftcc -x nsf@tcc -e mysql -o models -l esm */