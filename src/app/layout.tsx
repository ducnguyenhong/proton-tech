'use client';
import { chakraTheme } from '@/configs/chakra-theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Manrope } from '@next/font/google';
import { RecoilRoot } from 'recoil';
import Footer from './footer';
import './globals.css';
import Navbar from './navbar';

const manrope = Manrope({ subsets: ['vietnamese', 'latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RecoilRoot>
          <ChakraProvider theme={chakraTheme}>
            <Box position="relative" className={manrope.className}>
              <Navbar />
              <Box mt="68px">{children}</Box>
              <Footer />
            </Box>
          </ChakraProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
