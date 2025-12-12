import {Card} from "@/widgets"
import {project} from "@/shared"

export default function Projects(){

    return(



    <div className="container mx-auto px-6 md:px-20 py-10">
     <Card project={project} />
     </div>
    )
}