'use strict';

var formidable = require('formidable');
var fs = require('fs');

const ads = [
  {title: 'Hello, world (again)!'}
];

exports.upload_file = function(req, res) {
  console.log("file uploading");
  const form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    saveFile(files.file);
    console.log("file uploaded!!");
    res.status(201).send({data: { status: "success" }});
  });
  // res.json(ads);
};

const saveFile = (file) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`public/uploads/${file.originalFilename}`, data);
  fs.unlinkSync(file.filepath);
};