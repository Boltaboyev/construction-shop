import React, {useEffect, useState} from "react"
import {Pagination, Slider} from "antd"

import my_axios from "../../hook/useAxios"
import CardItem from "../../components/card-item"
import SkeletonLoader from "../../components/skeleton-loader"

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [maxPrice, setMaxPrice] = useState(100000)
    const [minPrice, setMinPrice] = useState(0)
    const [filterPrice, setFilterPrice] = useState([0, 0])
    const [loading, setLoading] = useState(true)
    const pageSize = 20

    useEffect(() => {
        my_axios
            .get("/products")
            .then((res) => {
                setAllProducts(res.data.reverse())

                const prices = res.data.map((item) => item.price)
                const lowestPrice = Math.min(...prices)
                const highestPrice = Math.max(...prices)

                setMinPrice(lowestPrice)
                setMaxPrice(highestPrice)
                setFilterPrice([lowestPrice, highestPrice])
                setFilteredProducts(res.data)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
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
                    min={minPrice}
                    max={maxPrice}
                    value={filterPrice}
                    onChange={(value) => setFilterPrice(value)}
                />
            </div>

            <div className="grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-3 max-[800px]:grid-cols-2 max-[475px]:grid-cols-1">
                {loading
                    ? [...Array(8)].map((_, index) => (
                          <SkeletonLoader key={index} />
                      ))
                    : products.map((item) => (
                          <CardItem key={item.id} {...item} />
                      ))}
            </div>

            {!loading && (
                <div className="flex justify-end mt-4">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={filteredProducts.length}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            )}
        </section>
    )
}

export default ProductPage
