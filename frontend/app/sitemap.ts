import type { MetadataRoute } from "next"
import fs from "fs";
import path from "path";

const BASE_DIR = "/app";
const BASE_URL = process.env.SITE_URL || "http://localhost:3000";

const excludeDirs = ["api", "fonts"];

export const revalidate = 3600;

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
    const fullPath = path.join(process.cwd(), BASE_DIR);
    const entries = fs.readdirSync(fullPath, { withFileTypes: true });
    const routes: string[] = ["/"];

    entries.forEach((entry) => {
        if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
            routes.push(`/${entry.name}`);
        }
    })

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    }));
}

export default function sitemap(){
    return getRoutes();
}