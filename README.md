```
   ██████  ██████  ████████    ██████  ███████ ██     ██ ██████  ██ ████████ ███████ ██████  
  ██       ██   ██    ██      ██   ██ ██      ██     ██ ██   ██ ██    ██    ██      ██   ██ 
  ██   ███ ██████     ██      ██████  █████   ██  █  ██ ██████  ██    ██    █████   ██████  
  ██    ██ ██         ██      ██   ██ ██      ██ ███ ██ ██   ██ ██    ██    ██      ██   ██ 
   ██████  ██         ██      ██   ██ ███████  ███ ███  ██   ██ ██    ██    ███████ ██   ██ 
                                                                                           
```

# GPT Text Rewriter

> Transform any text into multiple tones with AI magic ✨

A powerful yet simple full-stack application that leverages OpenAI's GPT-3.5 to rewrite text in various tones and styles. Built with modern web technologies for optimal performance.

## ✨ Features

- **12+ Custom Tones** - Transform your writing to be formal, casual, funny, sarcastic, pirate-speak, roast, and more
- **Instant Transformations** - Powered by OpenAI's GPT-3.5 for high-quality results
- **Modern Stack** - Built with Next.js App Router, React, and TailwindCSS
- **Responsive Design** - Works beautifully on all devices
- **Easy Deployment** - One-click deployment via Vercel

## 📸 Preview

![Application Screenshot](public/screenshot.png)

## 🚀 Live Demo

> Coming soon! Deploy your own instance with one click via Vercel.

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| Next.js App Router | Frontend framework with built-in API routes |
| React | UI component library |
| TailwindCSS | Utility-first CSS framework |
| OpenAI API | AI text transformation (`gpt-3.5-turbo`) |
| Vercel | Hosting and deployment |

## 🚀 Getting Started

### Prerequisites

- Node.js 16.8+ installed
- OpenAI API key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/gpt-text-rewriter.git
cd gpt-text-rewriter
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the project root:

```
OPENAI_API_KEY=your_openai_api_key_here
```

4. **Start the development server**

```bash
npm run dev
```

5. **Access the application**

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app
  /api
    /rewrite
      route.js         # API handler for OpenAI requests
  page.js              # Main frontend with rewrite form
/components
  RewriteForm.jsx      # Form logic and UI
.env.local             # API key configuration (not committed)
/public
  screenshot.png       # Preview image
```

## 💡 Future Roadmap

- [ ] Support for uploading and rewriting text files
- [ ] Batch processing of multiple tones simultaneously
- [ ] History feature using localStorage or Supabase
- [ ] User authentication and usage tracking
- [ ] Custom tone creation

## 🧑‍💻 Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## ⚠️ Important Note

This project uses OpenAI's API and may incur costs based on usage. Use responsibly and secure your API keys.

## 📄 License

MIT