const express = require('express');
const cors = require('cors');

const app = express();

const projectRoute = require('./routes/project.route');
const listRoute = require('./routes/list.route');
const issueRoute = require('./routes/issue.route');

app.use(cors());
app.use(express.json());
app.use('/api/lists', listRoute);
app.use('/api/issues', issueRoute);
app.use('/api/projects', projectRoute);

app.listen(5000);
