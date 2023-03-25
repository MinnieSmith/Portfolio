import Project, { ProjectInterface }  from "./project";



const ProjectBlock = () => {
    const projectDataArr = [];

    projectDataArr.push(
    {
        title: "Drug Info App",
        desc: "Flask app with user authentication",
        url: "/druginfo",
        image: "/madison-agardi-QNrjcp90tVc-unsplash.jpg",
    }
    );

    projectDataArr.push(
    {
        title: "Burger Builder App",
        desc: "React interactive burger ordering",
        url: "/burgerapp",
        image: "/likemeat-CZhehjoDe68-unsplash.jpeg",
    }
    );

    projectDataArr.push(
    {
        title: "Socket Game Server",
        desc: "A real-time multiplayer tiles game",
        url: "/tiles",
        image: "/ella-don-JomkRNkzKhE-unsplash.jpg",
    }
    );

    projectDataArr.push(
    {
        title: "Education Dental App",
        desc: "OpenAI GPT-3 powered dental assistant",
        url: "/tooti",
        image: "/Tooti.png",
    }
    );

    const projectDataElements = [];

    for (let i = projectDataArr.length-1; i >= 0; i--) {
    const data = projectDataArr[i];
    const element = <Project {...data} key={i} />;
    projectDataElements.push(element);
    };


    return (
        <div className="div-row">
            {projectDataElements}
        </div>
    );

}

export default ProjectBlock;