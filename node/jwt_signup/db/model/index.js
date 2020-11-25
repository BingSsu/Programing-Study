const log = require('./log');//로그
const survey = require('./survey');//어드민 정보
const element = require('./element');//어드민에게 요청된 유저들의 데이터
const comment = require('./comment');//댓글정보

module.exports = (Sequelize, sequelize) => {
	return {
    log: log(Sequelize, sequelize),
    survey: survey(Sequelize, sequelize),
    element: element(Sequelize, sequelize),
    comment: comment(Sequelize, sequelize)
	};
};