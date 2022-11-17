const express = require('express');
const bodyParser = require("body-parser");

const task = express();
task.use(bodyParser.json());
task.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const jobSchema = new mongoose.Schema({
  customer: String,
  ageoffence: String,
  size: String,
  color: String,
  email: String
  
});

jobSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });
  
  jobSchema.set('toJSON', {
  virtuals: true
});

const Job = mongoose.model('Job', jobSchema);

task.get('/api/jobs', async (req, res) => {
  try {
    let jobs = await Job.find();
    res.send({jobs: jobs});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


task.post('/api/jobs', async (req, res) => {
    const job = new Job({
    customer: req.body.customer,
    ageoffence: req.body.ageoffence,
    size: req.body.size,
    color: req.body.color,
    email: req.body.email
  });
  try {
    await job.save();
    res.send({ticket:job});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

task.delete('/api/jobs/:id', async (req, res) => {
  try {
    await Job.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

task.listen(3000, () => console.log('Server listening on port 3000!'));