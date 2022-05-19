import HomeButton from "./homebutton";

const ProjectLayout = (props: any) => {
    return (
        <div className="text-xs font-san h-screen w-screen p-1">
            <div className="text-right mt-2 mr-5">
            <HomeButton/>
            </div>
            <div className="md:max-w-5xl max-w-md m-auto place-self-center">{props.children}</div>
        </div>
    );

}

export default ProjectLayout;