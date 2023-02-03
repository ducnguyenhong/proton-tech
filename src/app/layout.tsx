'use client';
import { chakraTheme } from '@/configs/chakra-theme';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Quicksand } from '@next/font/google';
import { RecoilRoot } from 'recoil';
import Footer from './footer';
import './globals.css';
import Navbar from './navbar';

const font = Quicksand({ subsets: ['vietnamese', 'latin'] });

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
            <Box position="relative" className={font.className}>
              <Navbar />
              <Box mt="80px">{children}</Box>
              <Footer />
            </Box>
          </ChakraProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
