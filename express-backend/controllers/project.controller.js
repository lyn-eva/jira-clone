const { PrismaClient } = require('@prisma/client');

const client = new PrismaClient();

exports.getListsInProject = async (req, res) => {
  const { projectId } = req.params;
  const project = await client.list.findMany({
    where: { projectId: +projectId },
    orderBy: { order: 'asc' },
  });
  res.json(project).end();
};
