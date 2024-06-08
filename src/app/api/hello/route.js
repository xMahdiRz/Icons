import { ImageResponse } from "@vercel/og";

export async function GET(request) {
  return new ImageResponse(
    (
      <>
        dd qdqdq Qsdqsdq <></>
      </>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
