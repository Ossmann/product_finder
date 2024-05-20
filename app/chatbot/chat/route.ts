import OpenAI from "openai";

// Assign API key to variable
const apiKey = process.env.OPEN_AI_KEY;
// Initialise OpenAI API
const openai = new OpenAI({ apiKey: apiKey });


export async function POST(req: Request) {
    // The 'question' variable is the user's input from the frontend
      const { question } = await req.json();
      // Here is where we communicate with the OpenAI API to create our chatbot.
      // We store the chatbot's response in the 'response' variable
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
     // We give the chatbot a role with some content to determine how it will behave
            content:
              "You are a sales assistant of the culture software group. The culture software group has 3 main partners that offer software for museums. Zetcom, fluxguide and Ortelia. Zetcom offers a web-based collection management system. Fluxguide offers mobile apps for museums, Online collections and augmented reality. Ortelia is a company from Brisbane that offers a 3D curating exhibition planning engine.",
          },
          {
      // We ask the chatbot to generate an answer based on the user's question
      // Remember, this question will come from the frontend
            role: "user",
            content: question,
          },
        ],
      // We choose the model we want to use for our chatbot
        model: "gpt-3.5-turbo",
      // We add a value for max_tokens to ensure the response won't exceed 300 tokens
      // This is to make sure the responses aren't too long
        max_tokens: 300,
      });
    // Then we return the response we receive from OpenAI
    // Note: This will only work once we set up our frontend logic
      return new Response(JSON.stringify(response));
    }