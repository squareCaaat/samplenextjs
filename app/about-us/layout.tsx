export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        &copy; Next JS
    </div>
  )
}
