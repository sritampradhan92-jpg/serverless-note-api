const handler = require("./libs/handler-lib");
const dynamoDb = require("./libs/dynamodb-lib");

module.exports.main = handler(async () => {
  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});
