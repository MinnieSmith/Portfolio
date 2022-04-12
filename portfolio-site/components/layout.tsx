import Link from "next/link";
import Footer from "./footer";

const Layout = (props: any) => {
    return (
        
        <div className="text-xs font-san h-screen flex p-1">
                    <Link href='/aboutme'>
                        <div className="shrink-0">
                            <img className= "opacity-70  absolute top-7 right-7 object-cover rounded-full hover:opacity-100 hover:animate-bounce w-16 h-16 " src="/profilepic.JPG"/>
                        </div>
                    </Link>

            <div className="max-w-xl p-5 m-auto">{props.children}</div>
        </div>

    );

}

export default Layout;