import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "images";

    if (!file) {
      return NextResponse.json(
        { error: "Dosya bulunamadı" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Desteklenmeyen dosya formatı. JPG, PNG, WebP veya SVG kullanın." },
        { status: 400 }
      );
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Dosya boyutu 5MB'ı aşamaz." },
        { status: 400 }
      );
    }

    const filename = `${folder}/${Date.now()}-${file.name}`;
    const blob = await put(filename, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Yükleme sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
