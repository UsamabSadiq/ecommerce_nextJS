
const Footer = () => {
    const navItem = ['About', 'LinkedIn', 'Contact', 'Services']

    return (
        <>
            {/* // w-full bg-white rounded-lg shadow dark:bg-gray-900 m-4 */}
            <footer className="">
                <div className="p-4 md:py-8 z-20">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Flowbite</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">

                            {
                                navItem.map((item, ind) => {
                                    return (
                                        <li key={ind}>
                                            <a href="#" className="mr-4 hover:underline md:mr-6 ">{item}</a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-black sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">My-Store</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}

export default Footer
