import Link from "next/link"

const products = () => {
    return (
        <>
            <div className="main">
                <h2 className="text-center text-lg font-semibold">Products Page</h2>

                <Link href={'/'}>Go to home page</Link>
            </div>
        </>
    )
}

export default products
