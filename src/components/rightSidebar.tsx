import { Button, List, Sidebar } from "flowbite-react";

const RightSideBar = ()=>{
    return(
        <Sidebar className="w-96">
            <div className="my-4">
                <h1 className="my-1">AI Assistant</h1>
                <Button color='gray' size='xs' outline className="my-1">Generate project Report</Button>
                <Button color='gray' size='xs' outline className="my-1">Analyse Risks</Button>
                <Button color='gray' size='xs' outline className="my-1">Schedule Assistant</Button>
            </div>
            <div className="my-4">
                <h1 className="my-1">Recent AI Insights</h1>
                <p color='gray' className="my-1 text-xs">Potential delay detected in UI development phase</p>
                <p color='gray' className="my-1 text-xs">Backend integration completed ahead of schedule</p>
                <p color='gray' className="my-1 text-xs">New team velocity metric available</p>
            </div>
            <div className="m-3 text-sm">
                <h1>Team Availability</h1>
                <List>
                    <List.Item>Deployment team    3/5 available</List.Item>
                    <List.Item>Design team     2/3 available</List.Item>
                    <List.Item>Q/A team    4/4 available</List.Item>
                </List>
            </div>
        </Sidebar>
    );
};

export default RightSideBar;