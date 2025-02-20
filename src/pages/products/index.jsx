import React, {useEffect, useState} from "react"
import {Pagination, Slider} from "antd"
import my_axios from "../../hook/useAxios"
import CardItem from "../../components/card-item"

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPrice, setMaxPrice] = useState(30000)
    const [filterPrice, setFilterPrice] = useState([0, 30000])
    const pageSize = 20

    useEffect(() => {
        my_axios
            .get("/products")
            .then((res) => {
                setAllProducts(res.data)

                const highestPrice = Math.max(
                    ...res.data.map((item) => item.price)
                )
                setMaxPrice(highestPrice)

                setFilterPrice([0, highestPrice])
                setFilteredProducts(res.data)
            })
            .catch((error) => console.error(error))
    }, [])

    useEffect(() => {
        const filtered = allProducts.filter(
            (item) =>
                item.price >= filterPrice[0] && item.price <= filterPrice[1]
        )
        setFilteredProducts(filtered)
        setCurrentPage(1)
    }, [filterPrice, allProducts])

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        setProducts(filteredProducts.slice(startIndex, endIndex))
    }, [currentPage, filteredProducts])

    return (
        <section className="py-[20px]">
            <div className="mb-4 w-[300px] max-[500px]:w-[230px] max-[500px]:m-auto">
                <div className="grid grid-cols-2 gap-[10px]">
                    <p className="border text-center border-gray-200 p-[5px] rounded-md text-gray-500">
                        от {filterPrice[0]}
                    </p>
                    <p className="border text-center border-gray-200 p-[5px] rounded-md text-gray-500">
                        до {filterPrice[1]}
                    </p>
                </div>
                <Slider
                    range
                    min={0}
                    max={maxPrice}
                    value={filterPrice}
                    onChange={(value) => setFilterPrice(value)}
                />
            </div>

            <div className="grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[475px]:grid-cols-1">
                {products.map((item) => (
                    <CardItem key={item.id} {...item} />
                ))}
            </div>

            <div className="flex justify-end mt-4">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredProducts.length}
                    onChange={(page) => setCurrentPage(page)}
                />
            </div>
        </section>
    )
}

export default ProductPage
