import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from '@/store/provider'
import { Layout } from '@/components/layout/Layout'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingProvider } from '@/components/common/LoadingProvider'
import './globals.css'

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
          <ErrorBoundary>
            <Providers>
              <LoadingProvider>
                <Layout>{children}</Layout>
              </LoadingProvider>
            </Providers>
          </ErrorBoundary>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
