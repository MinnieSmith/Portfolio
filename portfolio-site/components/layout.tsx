
const Layout = (props: any) => {
    return (
        
        <div className="bg-cover bg-[url('/ecobeach.jpeg')] text-xs font-san h-screen flex p-1">
            <div className="p-5 max-w-md m-auto">{props.children}</div>
        </div>
    );

}

export default Layout;