import Image from "next/image";


export default function AuthLayout({
    children,   
    }: Readonly<{
        children:React.ReactNode;
    }>) {
    return (
        <div className="bg-orange-200 w-screen h-screen overlow-hidden grid">
            <div className="place-content-center place-self-center place-itemes-center text-center">
                <div className="flex flex-col items-center bottom-10 relative">
                    <Image src="/Oxxo.png" alt="Logo de oxxo" width={200} height={0}/>
                </div>
                {children}
            </div>
        </div>
    )
}