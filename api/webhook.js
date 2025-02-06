export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received GitHub Webhook:", req.body);
    res.status(200).json({ message: "Webhook received successfully!" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
