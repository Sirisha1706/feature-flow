import { Avatar, Button, Card, Progress } from "flowbite-react";
import { BsRobot } from "react-icons/bs";
import { FaCalendar, FaPlus } from "react-icons/fa6";
import { GiStarShuriken } from "react-icons/gi";
import { IoMdCheckbox } from "react-icons/io";

const projects = [
    { title: "AI-Powered Search", category: "E-Commerce", progress: 80, date:'Oct 1 - Dec 15' ,status: "On-track",},
    { title: "User Authentication", category: "Security System", progress: 50,date:'sep 15 - Nov 30', status: "At-Risk", risk: "⚠️ Delayed tasks" },
    { title: "Payment Gateway", category: "Finance", progress: 20,date:'Aug 1 - Oct 30', status: "Blocked", },
    { title: "Analysis Dashboard", category: "Data Visualization", progress: 60, date:'Oct 15 - Dec 30' ,status: "On-track"},
    { title: "Mobile-App-Redesign", category: "UX improvement", progress: 75, date:'sep 15 - Nov 30', status: "At-Risk" },
    { title: "API Integration", category: "Third party service ", progress: 20, date:'Aug 1 - Oct 30', status: "On-track"},
];

const ProjectList = ()=>{
    return(
        <div className="w-max p-4">
        <div className="flex my-3 gap-x-2 justify-between">
            <h1 className="text-2xl font-bold">Project List</h1>
                <Button color="purple" pill outline>
                    <FaPlus className="m-1 h-3 w-3"/>
                    New Project</Button>
                <Button color="purple" pill outline>
                    <GiStarShuriken className="m-1 h-4 w-4"/>
                    AI Project</Button>
                <Button color="purple" pill outline>Finalize Spices</Button>
                <Button color='gray' pill outline>
                    <BsRobot className="m-1 h-4 w-4"/>
                    AI Summary</Button>
        </div>
        <div className="flex gap-2 flex-wrap">
        {projects.map((prj, index)=>(
            <Card href="#" className="w-72" key={index}>
            <span className="font-bold text-sm">{prj.title}</span>
            <p className="text-xs">{prj.category}</p>
            <Progress progress={prj.progress} color="purple"/>
            <div className="flex gap-x-2 items-center justify-between">
               <p className="text-xs flex" ><FaCalendar className="m-1 h-2 w-2"/>{prj.date}</p>
               <Button size='xs' color="purple">Open</Button>
            </div>
            <Avatar.Group>
                <Avatar img="" rounded stacked size='xs'/>
                <Avatar img="" size='xs' rounded stacked />
                <Avatar img="" size='xs' rounded stacked />
                <Avatar img="" size='xs' rounded stacked />
            </Avatar.Group>
            <div className="flex gap-x-2 items-center">
               <p className="text-xs flex" ><IoMdCheckbox className="m-1 h-4 w-4"/>{prj.status}</p>
               <Button size='xs' color='none' className="text-purple-600" >AI Insights</Button>
            </div>
            
        </Card>
        ))}
        </div>
    </div>
    );
}

export default ProjectList;