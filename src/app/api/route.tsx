import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req:Request, res:NextResponse) {
  const body = await req.json();
  
  // Construct the messages array
  /**
   * @dev thge reason i did this is that , 
   * The OpenAI API expects each message to be a separate object with a "role" and "content."
   */
  const messages = body.messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));

  // request data
  const requestData = {
    messages: messages,
  };

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      ...requestData, // Spread the requestData
      max_tokens: 100,
    });

    console.log(completion.choices[0].message);
    const theResponse = completion.choices[0].message;

    return NextResponse.json({ output: theResponse }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
