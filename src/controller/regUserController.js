const db = require("../modules/regUser");
const path = require("path");
const multer = require("multer");

const Reguser = db.regUser;
// -------------add User-------------
const createUser = async (req, res) => {
  let info = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    city:req.body.city,
    gender: req.body.gender,
    language:req.body.language,
    image: req.file.path
  };

  const user = await Reguser.create(info);
  res.status(200).send(user);
  console.log(user);
};

// ----------------view-------------
const getUser = async (req, res) => {
  let users = await Reguser.find({});
  res.status(200).send(users);
};

//-------------update data---------------

const updateUser = async (req, res) => {
  let id = req.params.id;

  await Reguser.findByIdAndUpdate(id, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city:req.body.city,
      gender: req.body.gender,
      language:req.body.language,
      // image:req.file.image
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "data not found with id " + req.params.id,
        });
      }
      res.send("Record Updated Successfully");
    })
    .catch((err) => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message: "data not found with id " + res.params.id,
        });
      }
      return res.status(500).send({
        message: "Error updating note with id " + res.params.id,
      });
    });
};


//-------------delete user data--------------

const userdelete = async(req,res)=>{
    let id = req.params.id;
    await Reguser.deleteOne({ where: { id: id} });

    res.status(200).send("Employee is deleted..!");
};


// 8. Upload Image Controller
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, './images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/
      const mimeType = fileTypes.test(file.mimetype)  
      const extname = fileTypes.test(path.extname(file.originalname))

      if(mimeType && extname) {
          return cb(null, true)
      }
      cb('Give proper files formate to upload')
  }
}).single('image')

module.exports = {
  createUser,
  getUser,
  updateUser,
  userdelete,
  upload
};
