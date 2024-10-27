import { NextResponse } from 'next/server';

interface GitHubFileResponse {
    content: string;
    encoding: string;
}

export async function GET() {
    const repo = "curriculum";
    const filePath = 'CVEdmundo.pdf';
    const owner = 'mundosk8';

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Error fetching the file from GitHub' }, { status: 500 });
        }

        const data: GitHubFileResponse = await response.json();

        if (data.encoding !== 'base64') {
            return NextResponse.json({ error: 'File is not base64 encoded' }, { status: 500 });
        }
        // If the file is base64 encoded, decode it
        const fileBuffer = Buffer.from(data.content, 'base64');

        return new Response(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="CVEdmundo.pdf"',
            },
        });
    } catch (error) {
        console.error('Error fetching file:', error);
        return NextResponse.json({ error: 'Failed to download the file' }, { status: 500 });
    }
}
