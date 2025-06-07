import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || "unknown";
  const acceptLanguage = req.headers.get("accept-language") || "unknown";
  const host = req.headers.get("host") || "unknown";
  const country = req.headers.get("x-vercel-ip-country") || "unknown"; // Vercel-specific
  const city = req.headers.get("x-vercel-ip-city") || "unknown"; // Vercel-specific
  const region = req.headers.get("x-vercel-ip-region") || "unknown"; // Vercel-specific
  const timestamp = Date.now().toString();

  const item = {
    PK: { S: `VISITOR#${timestamp}` },
    ip: { S: ip },
    userAgent: { S: userAgent },
    referer: { S: referer },
    acceptLanguage: { S: acceptLanguage },
    host: { S: host },
    country: { S: country },
    city: { S: city },
    region: { S: region },
    timestamp: { N: timestamp },
  };

  await client.send(
    new PutItemCommand({
      TableName: process.env.DYNAMODB_TABLE,
      Item: item,
    })
  );

  return NextResponse.json({ success: true });
}
