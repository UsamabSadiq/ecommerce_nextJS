import { FaRegUser } from "react-icons/fa6";
const Navbar = () => {
    const navItem = ['Home', 'About', 'Contact', 'Services']
    return (
        <div>

            <nav className=" border-b">
                <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My-Store</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="flex items-center gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login <FaRegUser /></button>

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">

                            {
                                navItem.map((item, ind) => {
                                    return (
                                        <li key={ind}>
                                            <a href="#" className="block py-1 px-3 hover:bg-gray-200 rounded-xl text-gray-500">{item}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
