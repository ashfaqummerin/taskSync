import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log("todos", todos);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user and say Welcome to Task Sync. Limit the response to 200 characters ",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of following todos. Count how many are there in each category such as to do, in progress and done, then tell the user to have a productive day! Here is the data: ${JSON.stringify(
          todos
        )} `,
      },
    ],
  });

  const { data } = response;

  console.log("DATA IS", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
