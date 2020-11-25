module.exports = (Sequelize, sequelize) => {
  const element = sequelize.define('element', {
    
    num: {//고유 번호
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    id: {//만든이 아이디
      type: Sequelize.STRING(50),
      allowNull: false
    },

    pin: {//소속 핀
      type: Sequelize.TEXT,
      allowNull: false
    },

    sub_name: {//부제목
      type: Sequelize.TEXT,
      allowNull: false
    },

    picture: {//cdn 서버
      type: Sequelize.TEXT,
      allowNull: true
    },
    
    q1: {//문제에 대한 답 
      type: Sequelize.INTEGER,
      allowNull: true
    },

    q2: {//문제에 대한 답 
      type: Sequelize.INTEGER,
      allowNull: true
    },

    q3: {//문제에 대한 답 
      type: Sequelize.INTEGER,
      allowNull: true
    },

    q4: {//문제에 대한 답 
      type: Sequelize.INTEGER,
      allowNull: true
    },

    q5: {//문제에 대한 답 
      type: Sequelize.INTEGER,
      allowNull: true
    },

    rate: {//평점
      type: Sequelize.INTEGER,
      allowNull: true
    },

    survey_u: {//참가한 사람
      type: Sequelize.TEXT,
      allowNull: true
    }

  });
 
  element.sync();
  return element;
};

/*
id
survey_name
pin
optioq2
many
view
*/