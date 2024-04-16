import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaLink } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function Navbar() {
    return (
        <nav className="mb-5 2xl:mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>
    )
}
