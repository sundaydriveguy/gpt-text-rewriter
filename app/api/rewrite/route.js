export async function POST(req) {
    const { text, tone } = await req.json();
    console.log(text, tone);
    const prompt = `Rewrite the following text in ${tone} tone: ${text}`;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
        })
    });
    const data = await response.json();
    return Response.json({ rewrittenText: data.choices[0].message.content.trim() });
}