import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "",
      payload: "",
      signature: ""
    },
    miniapp: {
      version: "1",
      name: "Driving Road",
      subtitle: "Platform climbing game on Base",
      description: "Get ready to hit the road! Driving Road is a fun and fast-paced mini driving game where you test your reflexes and driving skills.",
      iconUrl: "https://husa-rouge.vercel.app/blue-icon.png",
      splashImageUrl: "https://husa-rouge.vercel.app/blue-hero.png",
      splashBackgroundColor: "#0000a0",
      homeUrl: "https://husa-rouge.vercel.app/"
    },
    baseBuilder: {
      ownerAddress: "0x162cc17627C728839fb208b77f001688D04b9641"
    }
  };

  return NextResponse.json(manifest);
}
