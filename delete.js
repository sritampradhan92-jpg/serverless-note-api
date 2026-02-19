const handler = require("./libs/handler-lib");
const dynamoDb = require("./libs/dynamodb-lib");

module.exports.main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123",
      noteid: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});
