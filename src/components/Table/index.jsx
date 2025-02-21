import React from "react"
import my_axios from "../../hook/useAxios"
import {Table, Image} from "antd"
import {EditOutlined, DeleteOutlined} from "@ant-design/icons"
import {toast} from "react-toastify"

const ProductTable = ({productData, fetchData, onEdit}) => {
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
                    <Image width={40} height={40} src={record.img} alt={text} />
                    <span>{text}</span>
                </div>
            ),
        },
        {title: "Status", dataIndex: "status", key: "status"},
        {title: "Price", dataIndex: "price", key: "price"},
        {title: "Discount", dataIndex: "discount", key: "discount"},
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div style={{display: "flex", gap: "10px"}}>
                    <EditOutlined
                        style={{color: "blue", cursor: "pointer"}}
                        onClick={() => onEdit(record)}
                    />
                    <DeleteOutlined
                        style={{color: "red", cursor: "pointer"}}
                        onClick={() => handleDelete(record.id)}
                    />
                </div>
            ),
        },
    ]

    return (
        <Table
            columns={columns}
            dataSource={[...productData].reverse()}
            pagination={{pageSize: 4}}
            rowKey="id"
        />
    )
}

export default ProductTable
