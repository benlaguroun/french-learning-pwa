import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// This API route will handle audio file access and validation
export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const audioPath = url.searchParams.get("path")

  if (!audioPath) {
    return NextResponse.json({ error: "No audio path provided" }, { status: 400 })
  }

  try {
    // For security reasons, only allow access to files in the public/audio directory
    if (!audioPath.startsWith("/audio/")) {
      return NextResponse.json({ error: "Invalid audio path" }, { status: 403 })
    }

    // Remove the leading slash and construct the path from the public directory
    const fullPath = path.join(process.cwd(), "public", audioPath)

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: "Audio file not found" }, { status: 404 })
    }

    // Return information about the audio file
    const stats = fs.statSync(fullPath)

    return NextResponse.json({
      path: audioPath,
      size: stats.size,
      exists: true,
    })

    // Note: In a production environment, you might want to stream the file directly
    // or use a more robust file serving mechanism
  } catch (error) {
    console.error("Error accessing audio file:", error)
    return NextResponse.json({ error: "Failed to access audio file" }, { status: 500 })
  }
}

