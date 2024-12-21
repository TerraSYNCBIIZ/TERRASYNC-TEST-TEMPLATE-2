import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text, field } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    let prompt = '';
    switch (field) {
      case 'projectGoals':
        prompt = `Improve and structure the following project goals, making them clearer and more specific: "${text}"`;
        break;
      case 'targetAudience':
        prompt = `Create a detailed audience profile based on this description, highlighting key demographics and needs: "${text}"`;
        break;
      case 'keyFeatures':
        prompt = `Organize and prioritize these features into a clear, structured list with brief explanations: "${text}"`;
        break;
      case 'competitors':
        prompt = `Analyze and structure this list of competitor/reference websites, highlighting key points of interest: "${text}"`;
        break;
      default:
        prompt = `Improve and structure the following text: "${text}"`;
    }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that improves and structures text to be more professional and clear. Keep the same core meaning but enhance the clarity and presentation."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-3.5-turbo",
    });

    const improvedText = completion.choices[0]?.message?.content || text;

    return NextResponse.json({ improvedText });
  } catch (error) {
    console.error('Error improving text:', error);
    return NextResponse.json(
      { error: 'Failed to improve text' },
      { status: 500 }
    );
  }
} 