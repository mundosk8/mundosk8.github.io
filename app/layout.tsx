import './styles/globals.css'

export const metadata = {
  title: 'Edmundo Freitas',
  description: 'Edmundo portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
