"use client";

import { useEffect, useState } from "react";

function simulateHeavyLoad(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function HeavyComponent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    void simulateHeavyLoad().then(() => {
      setLoaded(true);
      console.log("🚀 Heavy component loaded!");
    });
  }, []);

  return (
    <div className="p-6 border rounded-lg bg-slate-100 dark:bg-slate-800">
      <h2 className="text-2xl font-bold mb-4">Heavy Component</h2>
      <div className="space-y-4">
        {!loaded ? (
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/2" />
            <div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-2/3" />
          </div>
        ) : (
          <>
            <p>This is a simulated heavy component that took 2 seconds to load.</p>
            <p>In a real application, this could be:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>A complex chart library</li>
              <li>A rich text editor</li>
              <li>A large third-party component</li>
              <li>A map visualization</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
