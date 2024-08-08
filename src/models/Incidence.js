/* import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const Incidence = sequelize.define('Incidence', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'in_progress', 'resolved'),
        defaultValue: 'pending',
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Incidence; */

/* // src/models/Incidence.js

import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Incidence extends Model {
    static associate(models) {
      Incidence.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'user'
      });
    }
  }

  Incidence.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('maintenance', 'security', 'cleaning'),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'in_progress', 'resolved'),
      defaultValue: 'pending',
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Incidence',
  });

  return Incidence;
}; */


import { DataTypes, Model } from "sequelize";

class Incidence extends Model {
  static associate(models) {
    Incidence.belongsTo(models.User, {
      foreignKey: 'UserId',
      as: 'user'
    });
  }

  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('maintenance', 'security', 'cleaning'),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'in_progress', 'resolved'),
        defaultValue: 'pending',
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    }, {
      sequelize,
      modelName: 'Incidence',
    });

    return Incidence;
  }
}

export default Incidence;