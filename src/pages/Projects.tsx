import ProjectCollection from "../components/ProjectCollection"

function Projects() {
    return (
        <ProjectCollection perPage={9} pagination={true} />
    )
}

export default Projects