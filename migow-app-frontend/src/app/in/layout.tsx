import { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function InLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <Header />
            {children}
        </>
    )

}