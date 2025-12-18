import {Card} from "@/widgets"
import {project} from "@/shared"

export default function Projects(){

    return(



    <div className="container mx-auto px-5 lg:px-10 py-10">
     <Card project={project} />

     </div>
    )
}