type Paragraph = string;

interface Section {
    title: string;
    content: Paragraph[];
    image?: string;
}

interface BlogProps {
    title: string;
    sections: Section[];
}

function Blog({ title, sections }: BlogProps) {
    const renderedSections = sections.map((section, index) => {
        return (
            <div key={index} className="mb-4">
                <h2 className="text-xl mb-2">{section.title}</h2>
                <img src={section.image} alt="" className="w-1/3 float-right" />
                {section.content.map((paragraph) => {
                    return <Paragraph paragraph={paragraph} />;
                })}
            </div>
        );
    });
    return (
        <div>
            <h1 className="text-3xl mb-8">{title}</h1>
            {renderedSections}
        </div>
    );
}

function Paragraph({ paragraph }: { paragraph: string }) {
    return <p className="float-left mb-2 text-base">{paragraph}</p>;
}

export default Blog;
