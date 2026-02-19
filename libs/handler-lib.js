module.exports = function handler(lambda) {
  return async function (event, context) {
    let body;
    let statusCode;

    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      console.error("Lambda Error:", e);
      body = { error: e.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
};
