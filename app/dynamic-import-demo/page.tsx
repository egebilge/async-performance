"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { HeavyComponent } from "../components/heavy-component";

// Dynamic import with loading component
const DynamicHeavyComponent = dynamic(
	async () => {
		// Simulate network delay
		await new Promise((resolve) => setTimeout(resolve, 500));
		return import("../components/heavy-component").then(
			(mod) => mod.HeavyComponent,
		);
	},
	{
		loading: () => (
			<div className="p-6 border rounded-lg bg-slate-100 dark:bg-slate-800">
				<div className="animate-pulse space-y-3">
					<div className="h-8 bg-slate-300 dark:bg-slate-600 rounded w-1/3" />
					<div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-3/4" />
					<div className="h-4 bg-slate-300 dark:bg-slate-600 rounded w-1/2" />
				</div>
			</div>
		),
	},
);

export default function DynamicImportDemo(): JSX.Element {
	const [showRegular, setShowRegular] = useState(false);
	const [showDynamic, setShowDynamic] = useState(false);

	return (
		<div className="container mx-auto p-8 space-y-8">
			<div className="prose dark:prose-invert">
				<h1>Dynamic Import Demo</h1>
				<p>
					This demo shows the difference between regular imports and dynamic
					imports. Click the buttons below to load the components:
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-semibold">Regular Import</h2>
						<button
							type="button"
							onClick={() => setShowRegular(true)}
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
							disabled={showRegular}
						>
							Load Component
						</button>
					</div>
					{showRegular && <HeavyComponent />}
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-semibold">Dynamic Import</h2>
						<button
							type="button"
							onClick={() => setShowDynamic(true)}
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
							disabled={showDynamic}
						>
							Load Component
						</button>
					</div>
					{showDynamic && (
						<Suspense fallback={<div>Loading...</div>}>
							<DynamicHeavyComponent />
						</Suspense>
					)}
				</div>
			</div>

			<div className="prose dark:prose-invert">
				<h2>What's the difference?</h2>
				<ul>
					<li>
						<strong>Regular Import:</strong> The component code is included in
						the main bundle and loaded when the page loads, even if we don't
						show it immediately.
					</li>
					<li>
						<strong>Dynamic Import:</strong> The component code is split into a
						separate chunk and only loaded when needed, reducing the initial
						bundle size.
					</li>
				</ul>

				<h2>When to use Dynamic Imports?</h2>
				<ul>
					<li>Large components that aren't immediately needed</li>
					<li>Components that are only shown to some users</li>
					<li>Alternative views/modes of your application</li>
					<li>Heavy third-party libraries (charts, editors, etc.)</li>
				</ul>
			</div>
		</div>
	);
}
