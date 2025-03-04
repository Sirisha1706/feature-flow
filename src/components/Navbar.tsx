import { Avatar, Badge, Button, Navbar } from "flowbite-react";
import { BiBell, BiSearch } from "react-icons/bi";
import { TextInput } from "flowbite-react";
import { CgCalendar } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";

const NavBar = ()=>{
    return(
        <Navbar fluid className="bg-purple-600">
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Feature Flow</span>
            </Navbar.Brand>
            <TextInput id="search" rightIcon={BiSearch} placeholder="Search" required color='purple'/>
            <div className="flex justify-between items-center gap-x-3">
                <Badge icon={BiBell} size="sm" color='purple-600'/>
                <Badge icon={CgCalendar} size="sm" color='purple-600'/>
                <Badge icon={IoSettings} size="sm" color='purple-600'/>
                <Button color="purple" > New</Button>
                <Avatar rounded size="xs" />
            </div>
            
        </Navbar>
    );
};


export default NavBar;