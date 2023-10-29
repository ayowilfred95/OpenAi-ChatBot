import {NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

interface Message {
  role: string;
  content: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req:NextRequest, res:NextResponse) {
  const body = await req.json();
  
  const messages: Message[] = body.messages;

  // Convert the `messages` array to the required format
  const chatMessages = messages.map((message: Message) => {
    return {
      role: message.role as "system" | "user" | "assistant" | "function",
      content: message.content,
    };
  });

  const requestData = {
    messages: chatMessages, // Use the converted array
    model: "gpt-3.5-turbo",
    max_tokens: 100,
  };

  try {
    const completion = await openai.chat.completions.create(requestData);

    console.log(completion.choices[0].message);
    const theResponse = completion.choices[0].message;

    return NextResponse.json({ output: theResponse }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
