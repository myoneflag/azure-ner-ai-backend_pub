'use strict';

module.exports = function(app) {
  var file = require('../controllers/file');

  // todoList Routes
  app.route('/api/file')
    // .get(file.get_file)
    .post(file.upload_file);

  app.route('/')
    .get(() => {
      res.status(200).send({data: { status: "success" }});
    });
};
