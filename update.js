const handler = require("./libs/handler-lib");
const dynamoDb = require("./libs/dynamodb-lib");

module.exports.main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123",
      noteid: event.pathParameters.id, // ✅ fixed here
    },
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":content": data.content || null,
      ":attachment": data.attachment || null,
    },
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return { status: true };
});
