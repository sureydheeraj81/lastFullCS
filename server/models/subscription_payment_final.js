const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const subscriptionPaymentFinal = sequelize.define(
  "subscriptionPaymentFinal",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_reg_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    ack_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cors_plan: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    subscription_charge: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    sub_gst: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    subs_recieptNo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subs_recieptAmt: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    gst_recieptNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gst_recieptAmt: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    path_sub_pdf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Verified", "Approved", "Rejected"),
      defaultValue: "Pending",
    },
    rejection_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_verified_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_verification_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    approved_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    GST_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    GST_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "subscription_payment_final",
    timestamps: true,
  }
);

module.exports = subscriptionPaymentFinal;
