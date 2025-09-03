'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


type Activelinkprops = {
    children:React.ReactNode
    href:string
}

export function ActiveLink({children,href}:Activelinkprops){
 const pathname = usePathname()
 const isActive = pathname===href
 
 return (
    
        <Link href={href} 
        className={`${isActive ? "text-chart-1" : "text-gray-400"} hover:text-chart-1`}
        >
        {children}
        
        </Link>

 )
}