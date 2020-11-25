module.exports = (Sequelize, sequelize) => {
  const log = sequelize.define('log', {

    num: {//고유 번호
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    code: {//로그 주제 (딥뱐 확정 등등)
      type: Sequelize.TEXT
    },

    pin: {//핀
      type: Sequelize.TEXT
    },

    sub_name: {//부제목
      type: Sequelize.TEXT
    },

    id: {//유저
      type: Sequelize.TEXT
    },

    answer: {//내용
      type: Sequelize.TEXT
    },

    when: {//시간
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    }
    
  });
 
  log.sync();
  return log;
};