import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

export const Navbar = ()=>{
    return <>
    <nav className="fixed top-0 w-full h-[40px] bg-slate-600 flex items-center">
        <Link to="/">
            <Button>
                Home
            </Button>
        </Link>
        <Link to="/flashcard">
            <Button>
                My Flashcards
            </Button>
        </Link>
    </nav>
    <div className="flex-1 mt-[40px]">
        <Outlet></Outlet>
    </div>
    </>
}