
import NavBar from './components/Navbar.tsx';
import LeftSideBar from './components/sideBar.tsx';
import ProjectList from './components/ProjectList.tsx';
import RightSideBar from './components/rightSidebar.tsx';

function App() {
  return (
    <main className="min-h-screen justify-center gap-2 dark:bg-gray-800">
      <NavBar/>
      <div className="flex">
        <LeftSideBar/>
        <ProjectList/>
        <RightSideBar/>
      </div>
      
    </main>
  );
}

export default App;
