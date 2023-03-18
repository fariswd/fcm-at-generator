import { getAccessToken } from "@/modules/accessToken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = await getAccessToken(req.body);
    res.status(200).json({
      status: "ok",
      token,
    });
  }
}
