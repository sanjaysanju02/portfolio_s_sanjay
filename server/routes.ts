import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(__dirname, "..", "attached_assets", "S SANJAY_CV_BE_ECE_CloudDevOps_2024-1 (2) (2)_1763373113654.pdf");
    res.download(resumePath, "S_Sanjay_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(500).json({ error: "Failed to download resume" });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
