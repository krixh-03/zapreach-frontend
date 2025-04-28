import { Head } from "$fresh/runtime.ts";
import SendEmail from "../islands/SendEmail.tsx";
import Header from "../islands/Header.tsx"; // Import the Header island

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Zapreach helps you reach more leads faster. Clean, simple, and powerful cold outreach tool to grow your business." />
        <title>Zapreach - Supercharge Your Cold Outreach</title>

        <meta property="og:title" content="Zapreach - Supercharge Your Cold Outreach" />
        <meta property="og:description" content="Zapreach helps you reach more leads faster. Clean, simple, and powerful cold outreach tool to grow your business." />
        <meta property="og:image" content="https://zapreach.icu/og.png" />
        <meta property="og:url" content="https://zapreach.icu/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zapreach - Supercharge Your Cold Outreach" />
        <meta name="twitter:description" content="Zapreach helps you reach more leads faster. Clean, simple, and powerful cold outreach tool to grow your business." />
        <meta name="twitter:image" content="https://zapreach.icu/og.png" />

        <link rel="shortcut icon" type="image/x-icon" href="favicon (1).ico" />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "7bf525b54e064cfa839eff609a899251"}'></script>
      </Head>

      <div class="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-white">

        {/* Header Component goes here */}
        <Header />

        {/* Desktop button: fixed bottom-left, visible only on md+ screens */}
        <a
          href="/feedback"
          class="hidden md:flex fixed bottom-6 left-6 bg-yellow-500 text-black rounded-full px-5 py-3 shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform text-sm"
        >
          Give Feedback
        </a>

        {/* Main Content */}
        <main class="flex-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8 py-16">
          {/* Left Section */}
          <section class="space-y-6">
            <h2 class="text-5xl font-extrabold leading-snug text-white">
              Send <span class="text-yellow-400">Better Emails. <br /> </span> Get <span class="text-yellow-400">More Replies.🚀</span>
                <br />
            </h2>

            <p class="text-lg text-gray-300">
             Simple cold email tool to help creators and agencies reach leads, follow up automatically, and land in inboxes.
            </p>

            <ul class="space-y-2 text-gray-200">
              <li>✅ <span class="font-semibold">Upload your CSV, write your email, hit send</span></li>
              <li>✅ <span class="font-semibold">Personalize every message (with {"{"}{"{"}name{"}"}{"}"})</span></li>
              <li>✅ <span class="font-semibold">Auto-follow-ups, no complicated setup</span></li>
              <li>✅ <span class="font-semibold">Built for fast testing and quick wins</span></li>
            </ul>
          </section>

          {/* Right Form */}
          <section class="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
            <SendEmail />
          </section>
        </main>
      </div>
    </>
  );
}
