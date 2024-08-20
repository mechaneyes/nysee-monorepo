import fetch from "node-fetch";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  console.log("Received request for:", req.url);
  console.log("Query parameters:", req.query);

  const { path } = req.query;
  const pdfUrl = `https://wordpress-1313045-4791931.cloudwaysapps.com/wp-content/uploads/${path.join("/")}`;

  console.log("Attempting to fetch PDF from:", pdfUrl);

  try {
    const response = await fetch(pdfUrl, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers.raw());

    if (response.status === 404) {
      console.log("PDF not found on WordPress server");
      return res.status(404).json({ error: "PDF not found on server" });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    const contentLength = response.headers.get("content-length");

    console.log("Content-Type:", contentType);
    console.log("Content-Length:", contentLength);

    res.setHeader("Content-Type", contentType || "application/pdf");
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }
    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log("Starting to pipe response...");
    await new Promise((resolve, reject) => {
      response.body.pipe(res);
      response.body.on("error", (err) => {
        console.error("Stream error:", err);
        reject(err);
      });
      response.body.on("end", () => {
        console.log("Finished piping response.");
        resolve();
      });
    });
  } catch (error) {
    console.error("Error in proxy handler:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch PDF", details: error.message });
  }
}
