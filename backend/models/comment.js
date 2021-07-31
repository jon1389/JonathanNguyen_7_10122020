"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			models.Comment.belongsTo(models.User, {
				foreignKey: {
					allowNull: false,
				},
				onDelete: "cascade",
			});
			models.Comment.belongsTo(models.Post, {
				foreignKey: {
					allowNull: false,
				},
				onDelete: "cascade",
			});
		}
	}
	Comment.init(
		{
			commentText: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Comment",
		}
	);
	return Comment;
};
