import { useState } from "react"

const create = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [media, setMedia] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, media, price, description);

    }

    return (
        <>
            <form className="flex items-center justify-center " onSubmit={handleSubmit}>
                <div className="grid grid-cols-2  gap-3 mx-auto md:w-[60%]">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                        <input type="text" id="name" name="name" onChange={(e) => { setName(e.target.value) }} value={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>

                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium ">Price</label>
                        <input type="text" id="price" name="price" onChange={(e) => { setPrice(e.target.value) }} value={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Upload Image</label>
                        <input name="image" accept="image/* " onChange={(e) => { setMedia(e.target.value) }} value={media} className=" p-2.5 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" />
                        {/* <img src={media ? URL.createObjectURL(media) : ""} /> */}
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium ">Description</label>
                        <textarea id="description" onChange={(e) => { setDescription(e.target.value) }} value={description} name="decscription" rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Product..." />
                    </div>

                    <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>

        </>
    )
}

export default create
