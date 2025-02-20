import React from "react"
import {Table, Image} from "antd"
import my_axios from "../../hook/useAxios"
import {toast} from "react-toastify"

const ProductTable = ({productData, fetchData}) => {
    const handleDelete = async (id) => {
        try {
            await my_axios.delete(`/products/${id}`)
            fetchData()
            toast.success("Product deleted successfully!")
        } catch (error) {
            console.error(error)
            toast.error("Failed to delete")
        }
    }

    const columns = [
        {
            title: "Product",
            dataIndex: "title",
            key: "title",
            render: (text, record) => (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}>
                    <Image width={50} src={record.img} alt={text} />
                    <span>{text}</span>
                </div>
            ),
        },
        {title: "Status", dataIndex: "status", key: "status"},
        {title: "Price", dataIndex: "price", key: "price"},
        {title: "Discount", dataIndex: "discount", key: "discount"},
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (
                <a onClick={() => handleDelete(record.id)}>Delete</a>
            ),
        },
    ]

    return (
        <Table
            columns={columns}
            dataSource={[...productData].reverse()}
            pagination={{pageSize: 6}}
            rowKey="id"
        />
    )
}

export default ProductTable
