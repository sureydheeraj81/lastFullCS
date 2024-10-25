const subscriptionPaymentFinal = require("../models/subscription_payment_final");

exports.submitSubsPaymentFinal = async (req, res) => {
  try {
    let finalData = new subscriptionPaymentFinal(req.body);
    console.log(finalData);

    if (finalData.length === 0) {
      return res
        .status(200)
        .send({ message: "Error in data submission!", success: false });
    }

    res.status(201).send({
      message: "Your form data submitted successfully!",
      success: true,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error in details submission!", success: false, error });
  }
};

exports.getSubsPaymentFinal = async (req, res) => {
  try {
    let getData = await subscriptionPaymentFinal.findAll();

    if (getData.length === 0) {
      return res
        .status(200)
        .send({ message: "Data not found!", success: true });
    }

    res
      .status(200)
      .send({ message: "Data fetched successfully!", success: true , data: getData});
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error in details fetching!", success: false, error });
  }
};

exports.updateSubsPaymentFinal = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error in final payment details updation",
      success: false,
      error,
    });
  }
};
