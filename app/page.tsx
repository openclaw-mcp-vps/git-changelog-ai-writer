export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          AI-Generated Changelogs<br />
          <span className="text-[#58a6ff]">from Git Commits</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, let AI analyze your commit history, and get beautifully formatted changelogs — with features, fixes, and breaking changes automatically categorized.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-12 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left text-sm font-mono text-[#8b949e] overflow-x-auto">
          <div className="mb-2 text-[#58a6ff] font-bold"># Changelog — v2.4.0</div>
          <div className="mb-1"><span className="text-green-400">✨ Features</span></div>
          <div className="ml-4 mb-1">- Add dark mode support across all dashboard views</div>
          <div className="ml-4 mb-3">- Introduce webhook notifications for new releases</div>
          <div className="mb-1"><span className="text-yellow-400">🐛 Bug Fixes</span></div>
          <div className="ml-4 mb-3">- Fix pagination offset in commit history endpoint</div>
          <div className="mb-1"><span className="text-red-400">⚠️ Breaking Changes</span></div>
          <div className="ml-4">- Rename `getCommits()` to `fetchCommits()` in SDK</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub repositories",
              "AI-powered commit categorization",
              "Features, fixes & breaking changes",
              "Impact assessment per release",
              "Export to Markdown, HTML, JSON",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my GitHub repos?</h3>
            <p className="text-[#8b949e] text-sm">You authenticate via GitHub OAuth. We request read-only access to your repositories so we can fetch commit history and generate changelogs — we never write to your repos.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">What AI model powers the changelog generation?</h3>
            <p className="text-[#8b949e] text-sm">We use a fine-tuned large language model trained on thousands of open source changelogs to categorize commits, assess impact, and write human-readable release notes automatically.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. Your subscription stays active until the end of the billing period with no hidden fees or lock-in.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Git Changelog AI Writer. All rights reserved.
      </footer>
    </main>
  );
}
