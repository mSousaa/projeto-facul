const { Sequelize } = require('sequelize');

// Criação da instância Sequelize conectada ao MySQL
const sequelize = new Sequelize('crud_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

// Testar a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

// recria todo o banco de dados toda vez que iniciado
/* (async () => {
  await sequelize.sync({ force: true }); // Sincroniza e recria a tabela se já existir
  console.log("Tabelas sincronizadas!");
})(); */

module.exports = sequelize;