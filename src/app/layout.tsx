'use client';
import Header from '@/app/layouts//header';
import Footer from '@/app/layouts/footer';
import { chakraTheme } from '@/configs/chakra-theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import { RecoilRoot } from 'recoil';
import './globals.css';

const font = Inter({ subsets: ['vietnamese', 'latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head />
      <body>
        <RecoilRoot>
          <ChakraProvider theme={chakraTheme}>
            <Box position="relative" className={font.className}>
              <Header />
              <main style={{ marginTop: '80px' }}>{children}</main>
              <Footer />
            </Box>
          </ChakraProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
