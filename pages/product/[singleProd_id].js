import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../components/Modal";
import { useState } from "react";

const singleProduct = ({ product }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 ml-auto mr-4 mt-4 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                <FaRegTrashCan /> Delete</button>

            {showModal &&
                <Modal fetchedProductData={product} onClose={() => setShowModal(false)} />
            }

            <div className="container px-5 pb-24 pt-12 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.name}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                        </div>
                        <p className="leading-relaxed mb-4">{product.description}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Color</span>
                            <span className="ml-auto text-gray-900">/</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Size</span>
                            <span className="ml-auto text-gray-900">/</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-b mb-6 border-gray-200 py-2">
                            <label htmlFor="quantity" className="text-gray-500">Quantity</label>
                            <input type="text" id="quantity" className=" w-12 p-2.5" min={'1'} max={'2'} placeholder="123.." />
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Add To Cart</button>
                            {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button> */}
                        </div>
                    </div>
                    <img alt="Product-Image" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps({ params }) {
    const { singleProd_id } = params
    const response = await fetch(`http://localhost:3000/api/product/${singleProd_id}`)
    const data = await response.json()
    return {
        props: {
            product: data
        }
    }
}

export default singleProduct