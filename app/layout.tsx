import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Anomaly Detector',
  description: 'Detect unusual patterns in startup growth metrics. Real-time alerts when your MRR, CAC, churn, or engagement deviate from expected trends.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d5613a7e-7f68-49ea-b23b-3e9267ee55dc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
