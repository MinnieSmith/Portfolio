import Blog, { BlogInterface }  from "./blogcomponents";



const BlogBlock = () => {
    const blogDataArr = [];

    blogDataArr.push(
    {
        title: "Creative Child",
        desc: "When I was a little girl...",
        image: "/creative.png",
    }
    );

    blogDataArr.push(
    {
        title: "Young Academic",
        desc: "Exploring my scientific side",
        image: "/academia.png",
    }
    );

    blogDataArr.push(
    {
        title: "Rediscovering Creativity",
        desc: "Wanting to be creative again!",
        image: "/beachpainting.png",
    }
    );

    blogDataArr.push(
        {
            title: "Furbabies",
            desc: "Because where would life be without them!",
            image: "/furbabies2.png",
        }
        );

    const blogDataElements = [];

    for (let i = 0; i < blogDataArr.length; i++) {
    const data = blogDataArr[i];
    const element = <Blog {...data} key={i} />;
    blogDataElements.push(element);
    };


    return (
        <div className="">
             {blogDataElements}
        </div>
    );

}

export default BlogBlock;