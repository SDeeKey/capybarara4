import type {Metadata} from "next";
import "./globals.scss";
import React from "react";
import {Inter} from 'next/font/google'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    style: ['normal'],
})

export const metadata: Metadata = {
    title: "Capybarara",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
        <body>
        {children}
        </body>
        </html>
    );
}
