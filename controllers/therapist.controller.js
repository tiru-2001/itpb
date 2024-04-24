import therapistmodel from "../models/therapistSchema.js";
const addTherapist = async (req, res) => {
  try {
    const { name, description, location, number, languages } = req.body;
    console.log(name, "hello");
    const nameExist = await therapistmodel.findOne({ name });
    console.log(nameExist);
    if (nameExist) {
      return res
        .status(400)
        .send({ message: "data already exists", success: false });
    }
    const finalResult = await new therapistmodel({
      name,
      description,
      location,
      number,
      languages,
    }).save();
    return res.status(200).send({
      message: "Added data successfully",
      success: true,
    });
    console.log(finalResult);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      success: false,
    });
  }
};

export { addTherapist };
