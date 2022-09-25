const UserModel = require("../models/user.model");
const fs = require("fs"); //natif à Express ou node
const { promisify } = require("util"); //natif à Express ou node
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {
  const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };

  try {
    if (!MIME_TYPES) throw Error("invalid file"); //un throw passe directement au catch

    if (req.file.size > 1000000) throw Error("max size");
    // if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
  const fileName = req.body.name + ".jpg"; //le nom de la photo est le pseudo de l'user, donc en modifiant l'image de profil, ça remplacera l'ancienne photo sans code pour supprimer l'ancienne

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      `${__dirname}/../client/public/uploads/profil/${fileName}` //stock image dans dossier upload profil dans le front
    )
  );

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: "./uploads/profil/" + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
