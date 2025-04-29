import RewriteForm from "./components/RewriteForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1 className="text-4xl font-bold mb-4">
        GPT Text Rewriter
      </h1>
      <RewriteForm />
    </main>
  );
}