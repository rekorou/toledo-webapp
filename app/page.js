export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">How to Use Tailwind CSS</h1>
          <p className="mt-2 text-gray-600">
            This is a simple tutorial blog page explaining the basics of Tailwind CSS.
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* What is Tailwind */}
        <section>
          <h2 className="text-xl font-semibold">1. What is Tailwind CSS?</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Tailwind CSS is a <span className="font-medium">utility-first</span> CSS framework.
            Instead of writing your own CSS file for every design, you use ready-made classes
            like <span className="font-mono bg-gray-200 px-1 rounded">p-4</span> (padding) and{" "}
            <span className="font-mono bg-gray-200 px-1 rounded">text-xl</span> (text size).
          </p>
        </section>

        {/* Setup */}
        <section>
          <h2 className="text-xl font-semibold">2. Setup Tailwind in Next.js</h2>
          <p className="mt-2 text-gray-700">
            If you created your Next.js project with Tailwind already, you can skip this. If not,
            here’s the usual install command:
          </p>

          <pre className="mt-3 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
          </pre>

          <p className="mt-3 text-gray-700">
            Then inside your <span className="font-mono bg-gray-200 px-1 rounded">globals.css</span>,
            you add:
          </p>

          <pre className="mt-3 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
          </pre>
        </section>

        {/* Basic example */}
        <section>
          <h2 className="text-xl font-semibold">3. Basic Example</h2>
          <p className="mt-2 text-gray-700">
            Here’s a simple card using Tailwind classes:
          </p>

          <pre className="mt-3 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`<div class="p-6 bg-white rounded-lg shadow">
  <h1 class="text-2xl font-bold">Hello Tailwind</h1>
  <p class="mt-2 text-gray-600">This is styled using Tailwind classes.</p>
</div>`}</code>
          </pre>

          {/* Preview */}
          <div className="mt-4 p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-bold">Hello Tailwind</h3>
            <p className="mt-2 text-gray-600">This is styled using Tailwind classes.</p>
          </div>
        </section>

        {/* Responsive */}
        <section>
          <h2 className="text-xl font-semibold">4. Responsive Design</h2>
          <p className="mt-2 text-gray-700">
            Tailwind uses breakpoints like <span className="font-mono bg-gray-200 px-1 rounded">sm:</span>,{" "}
            <span className="font-mono bg-gray-200 px-1 rounded">md:</span>,{" "}
            <span className="font-mono bg-gray-200 px-1 rounded">lg:</span>.
          </p>

          <pre className="mt-3 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`<p class="text-base md:text-lg lg:text-xl">
  This text gets bigger on larger screens.
</p>`}</code>
          </pre>

          <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-800">
            This text gets bigger on larger screens.
          </p>
        </section>

        {/* Hover */}
        <section>
          <h2 className="text-xl font-semibold">5. Hover Effects</h2>
          <p className="mt-2 text-gray-700">
            Use <span className="font-mono bg-gray-200 px-1 rounded">hover:</span> to style when the mouse is on it.
          </p>

          <pre className="mt-3 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`<button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
  Click me
</button>`}</code>
          </pre>

          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Click me
          </button>
        </section>

        {/* Conclusion */}
        <section className="border-t pt-6">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p className="mt-2 text-gray-700">
            Tailwind CSS is really helpful because you don’t need to write a lot of custom CSS.
            You just mix utility classes to build your design faster. The more you practice,
            the easier it becomes.
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500">
          Made by a student using Tailwind CSS 😄
        </div>
      </footer>
    </main>
  );
}
