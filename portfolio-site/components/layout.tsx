import Link from "next/link";
import Footer from "./footer";

const Layout = (props: any) => {
    return (
        
        <div className="text-sm font-san w-screen h-screen flex p-1">
                    <Link href='/aboutme'>
                        <div className="shrink-0">
                            <img className= "opacity-70  absolute top-8 right-8 object-cover rounded-full hover:opacity-100 hover:animate-bounce w-20 h-20 " src="/profilepic.JPG"/>
                        </div>
                    </Link>

            <div className="max-w-screen-xl min-w-sm p-5 m-auto">{props.children}</div>
        </div>

    );

}

export default Layout;