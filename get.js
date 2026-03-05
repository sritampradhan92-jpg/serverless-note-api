const handler = require("./libs/handler-lib");
const dynamoDb = require("./libs/dynamodb-lib");

module.exports.main = handler(async (event) => {
  if (!event.pathParameters || !event.pathParameters.id) {
    throw new Error("Missing note id");
  }

  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteid: event.pathParameters.id  // must match table exactly
    },
  };

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});
