const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
	var response = await openai.listModels();
	console.dir(response, { depth: null });
	console.log('Total Models: ' + response.data.data.length);
})();

