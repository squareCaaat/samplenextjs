import Navigation from "../components/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | NextMovies',
    default: 'NextMovies',
  },
  description: 'Collection of the best Movies with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
