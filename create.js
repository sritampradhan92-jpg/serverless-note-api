const { v4: uuidv4 } = require("uuid");
const handler = require("./libs/handler-lib");
const dynamoDb = require("./libs/dynamodb-lib");

module.exports.main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: "123",
      noteid: uuidv4(), // IMPORTANT: must match your DynamoDB partition key
      content: data.content,
      attachment: data.attachment || null,
      createdAt: Date.now(),
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});
