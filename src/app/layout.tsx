// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'My Homepage',
  description: 'Built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  )
}
