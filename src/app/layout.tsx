// This is a Server Component (runs on the server)
// It wraps your entire app
export default function RootLayout({
  children
}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>{children}</body>  {/* All pages render here */}
    </html>
  )
}