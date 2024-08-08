/* import { sequelize } from '../config/database.js';
import UserModel  from './User.js';
import IncidenceModel from './Incidence.js';

const User = UserModel(sequelize);
const Incidence = IncidenceModel(sequelize);

const models = {
    User,
    Incidence,
};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { sequelize };
export default models; */


// src/models/model.index.js
//import { Sequelize } from "sequelize";
import { sequelize as dbConnection } from '../config/database.js';
import UserModel from './User.js';
import IncidenceModel from './Incidence.js';

const sequelize = dbConnection;

const UserInstance = UserModel.init(sequelize);
const IncidenceInstance = IncidenceModel.init(sequelize);

UserInstance.associate({ Incidence: IncidenceInstance });
IncidenceInstance.associate({ User: UserInstance });

const models = {
  User: UserInstance,
  Incidence: IncidenceInstance
};

export { sequelize, models };