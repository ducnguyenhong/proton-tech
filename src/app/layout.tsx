'use client';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import './globals.css';
import Navbar from './navbar';

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
          <ChakraProvider>
            <Box position="relative">
              <Navbar />
              <Box mt="68px">{children}</Box>
            </Box>
          </ChakraProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
