import Sibebar from "@/components/sidebar";

export default function PersonIdLayout({children}:Readonly<{children:React.ReactNode}>){
     return (
       <div className="flex">
         <Sibebar/>
        {children}
       </div>
     )
}