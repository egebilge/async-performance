import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <div className="prose dark:prose-invert">
        <h1>Next.js Performance Demos</h1>
        <ul>
          <li>
            <Link href="/dynamic-import-demo" className="text-blue-500 hover:underline">
              Dynamic Import Demo
            </Link>
            {" - "}
            <span className="text-sm text-muted-foreground">
              Learn how dynamic imports can improve initial page load performance
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
}
