import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-footer">
        <footer className="p-6">
            <div className="container-base">
                <div className="flex flex-row justify-between p-10">
                    <h1 className="fluid-xxxl font-bold uppercase ml-5 hidden md:block">mya von <br /> behren</h1>

                <div className="flex flex-row md:gap-15 gap-10 mr-20 md:mt-6 mt-0">

                <div className="flex flex-col gap-3">
                    <h3 className="fluid-m font-semibold">Quick Links</h3>
                    <ul className="flex flex-col gap-2 fluid-m">
                        <Link href="/#hero" className="hover:scale-105 transition-all duration-300 ease-in-out">Home</Link>
                        <Link href="/#experience" className="hover:scale-105 transition-all duration-300 ease-in-out">Experience</Link>
                        <Link href="/#projects" className="hover:scale-105 transition-all duration-300 ease-in-out">Projects</Link>
                        <Link href="/#about" className="hover:scale-105 transition-all duration-300 ease-in-out">About</Link>
                        <Link href="https://creative.myavonbehren.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300 ease-in-out">Creative</Link>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="fluid-m font-semibold">Socials</h3>
                    <ul className="flex flex-col gap-2 fluid-m">
                        <a href="https://www.linkedin.com/in/myavonbehren" target="_blank" className="hover:scale-105 transition-all duration-300 ease-in-out">
                            LinkedIn
                        </a>
                        <a href="https://github.com/myavonbehren" target="_blank" className="hover:scale-105 transition-all duration-300 ease-in-out">
                            GitHub
                        </a>
                        <a href="mailto:myakvb@gmail.com" target="_blank" className="hover:scale-105 transition-all duration-300 ease-in-out">Email</a>
                    </ul>
                </div>
                </div>

                </div>

            </div>
            <p className="fluid-m text-right opacity-50 pr-10 pt-3">© 2025 Mya Von Behren</p>
                </footer>
            </div>
    )
}

export default Footer;