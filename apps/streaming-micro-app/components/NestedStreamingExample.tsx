import { Suspense } from "react";

async function SlowHeader() {
  await new Promise((r) => setTimeout(r, 1000));
  return <h2 className="text-2xl font-bold">1) Header Loaded</h2>;
}

async function SlowContent() {
  await new Promise((r) => setTimeout(r, 2000));
  return <p>2) Content loaded after header</p>;
}

async function SlowFooter() {
  await new Promise((r) => setTimeout(r, 3000));
  return <p>3) Footer loaded last</p>;
}

export default function NestedStreamingExample() {
  return (
    <div className="p-4 border-white rounded-xl mt-2">
      <Suspense fallback={<div>LOADING HEADER...</div>}>
        <SlowHeader />
        <Suspense fallback={<div>LOADING CONTENT...</div>}>
          <SlowContent />
          <Suspense fallback={<div>LOADING FOOTER...</div>}>
            <SlowFooter />
          </Suspense>
        </Suspense>
      </Suspense>
    </div>
  );
}
