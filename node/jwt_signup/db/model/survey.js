module.exports = (Sequelize, sequelize) => {
  const survey = sequelize.define('survey', {

    id: {//만든이 아이디
      type: Sequelize.STRING(50),
      primaryKey: true,
      allowNull: false
    },

    survey_name: {//전시회 명
      type: Sequelize.STRING(50),
      allowNull: false
    },

    pin: {//핀번호
      type: Sequelize.TEXT,
      allowNull: false
    },

    optiona: {//옵션
      type: Sequelize.TEXT,
      allowNull: false
    },

    question: {//질문
      type: Sequelize.TEXT,
      allowNull: false
    },

    many: {//개체 개수
      type: Sequelize.INTEGER,
      allowNull: false
    },

    survey_u: {//참가한 사람
      type: Sequelize.TEXT,
      allowNull: true
    },

    views: {//조회수
      type: Sequelize.INTEGER,
      allowNull: false
    }

  });
 
  survey.sync();
  return survey;
};