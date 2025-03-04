import { List, Sidebar } from "flowbite-react";
import { FaFile, FaList } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { MdCheckBox, MdPeople } from "react-icons/md";

const LeftSideBar = ()=>{
    return(
        <Sidebar className="w-44">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={FaList}>Projects List</Sidebar.Item>
                    <Sidebar.Item href="#" icon={MdPeople} >Teams</Sidebar.Item>
                    <Sidebar.Item href="#" icon={MdCheckBox} >Tasks</Sidebar.Item>
                    <Sidebar.Item href="#" icon={FaFile}>Reports</Sidebar.Item>
                    <Sidebar.Item href="#" icon={IoSettingsSharp}>Settings</Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
            <div className="m-3">
                <h1>Teams</h1>
                <List className="w-48">
                    <List.Item>Deployment</List.Item>
                    <List.Item>Design</List.Item>
                    <List.Item>Marketing</List.Item>
                </List>
            </div>
        </Sidebar>
    );
};

export default LeftSideBar;