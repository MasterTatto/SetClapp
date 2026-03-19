import ViewTable from "./pages/viewTable";
import Header from "./components/header";

function App() {
    return (
        <div className={'flex bg-gray-100 items-center flex-col w-full min-h-screen'}>
            <Header/>
            <div className={'container flex flex-col my-4 grow '}>
                <ViewTable/>
            </div>
        </div>
    )
}

export default App
