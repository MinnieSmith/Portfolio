import Blog, { BlogInterface }  from "./blogcomponents";



const BlogBlock = () => {
    const blogDataArr = [];

    blogDataArr.push(
    {
        title: "Creative Child",
        desc: "when I was a little girl... Qui fugit perspiciatis quo molestias dolor et enim error aut exercitationem quis.Vel dolorem ipsa qui possimus voluptatem sit blanditiis labore. Eos consequatur incidunt qui repudiandae omnis ut consequatur quaerat et assumenda libero sed voluptas iste! Sit voluptatum suscipit est neque.",
        image: "/creative.png",
    }
    );

    blogDataArr.push(
    {
        title: "Young Academic",
        desc: "Exploring my scientific side...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus quam,lobortis sit amet ligula vel, imperdiet auctor massa. Vestibulum tristique sapien ut iaculis pharetra. Donec urna risus, tincidunt non orci at, cursus pulvinar nisl. Mauris pretium, enim sit amet vestibulum aliquet, metus libero dignissim neque, ut volutpat dui eros nec est.",
        image: "/academia.png",
    }
    );

    blogDataArr.push(
    {
        title: "Rediscovering Creativity",
        desc: "Wanting to be creative again!...Suspendisse rutrum interdum eros. Aliquam sit amet neque a dui sodales efficitur non in metus. Etiam ac lorem vel erat aliquet ultrices nec ac dui. Morbi quis eros risus. Mauris a felis at lorem suscipit varius at aliquet ante. Proin vitae sagittis mi. Sed posuere nisi lectus, a convallis libero mollis at",
        image: "/beachpainting.png",
    }
    );

    blogDataArr.push(
        {
            title: "Furbabies",
            desc: "Because where would life be without them!...Sed non leo efficitur, eleifend dolor vel, vestibulum dolor.Mauris consectetur dolor id elit tincidunt, placerat aliquet felis aliquam. Integer ut urna risus. Curabitur ac orci nunc. Donec sagittis leo nunc, eu interdum neque ultricies sit amet. Sed sit amet volutpat arcu.",
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