import { NextResponse } from "next/server";
const { translate } = require('bing-translate-api');

export async function POST(request: Request) {
  try 
  {
    const { body } = await request.json();

    const translationData = await translate(body, null, 'en');
    if (translationData.translation) 
    {
      return new NextResponse(translationData.translation);
    }
    else 
    {
      return new NextResponse('Translation not found', { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return new NextResponse('Internal error', { status: 500 });
  }
}
