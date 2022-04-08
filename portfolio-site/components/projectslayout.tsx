import HomeButton from "./homebutton";

const ProjectLayout = (props: any) => {
    return (
        <div className="text-xs font-san h-screenp-1">
            <div className="text-right mt-2 mr-5">
            <HomeButton/>
            </div>
            <div className="p-5 max-w-lg m-auto">{props.children}</div>
        </div>
    );

}

export default ProjectLayout;