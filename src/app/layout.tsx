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
      <head />
      <body>
        <RecoilRoot>
          <ChakraProvider theme={chakraTheme}>
            <Box position="relative" className={font.className} bgGradient="linear(to-r, #1B0738, #0E0625, #1E0739)">
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
