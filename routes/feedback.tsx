import FeedbackForm from "../islands/FeebackForm.tsx";
import { Head } from "$fresh/runtime.ts";

export default function FeedbackPage() {
 return (
  <div class="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
    <Head>
      <title>Feedback</title>

      <link rel="shortcut icon" type="image/x-icon" href="favicon (1).ico" />
      <meta name="description" content="Feedback page for Zapreach" />
    </Head>
    <FeedbackForm />
  </div>
  ); 
}
