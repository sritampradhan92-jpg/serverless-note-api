const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  QueryCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const dynamoDb = DynamoDBDocumentClient.from(client);

module.exports = {
  put: (params) => dynamoDb.send(new PutCommand(params)),
  get: (params) => dynamoDb.send(new GetCommand(params)),
  query: (params) => dynamoDb.send(new QueryCommand(params)),
  update: (params) => dynamoDb.send(new UpdateCommand(params)),
  delete: (params) => dynamoDb.send(new DeleteCommand(params)),
};
