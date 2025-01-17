import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from '@/store/provider'
import { Layout } from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
