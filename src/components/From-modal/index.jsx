import React, {useState} from "react"
import {UploadOutlined} from "@ant-design/icons"
import {Button, Drawer, Form, Input, InputNumber, Select, Upload} from "antd"
import my_axios from "../../hook/useAxios"
import {toast} from "react-toastify"

const FormModal = ({isModalOpen, setIsModalOpen, fetchData}) => {
    const [form] = Form.useForm()
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageChange = (info) => {
        const file = info.file.originFileObj
        if (!file) return

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImageUrl(reader.result)
            form.setFieldsValue({img: reader.result})
        }
    }

    const onFinish = (values) => {
        my_axios
            .post("/products", values)
            .then(() => {
                fetchData()
                setIsModalOpen(false)
                form.resetFields()
                setImageUrl(null)
                toast.success("Product added successfully!")
            })
            .catch((error) => {
                console.error("Error adding product:", error)
                toast.error("Failed to add product")
            })
    }

    return (
        <Drawer
            title="Add Product"
            onClose={() => {
                setIsModalOpen(false)
                form.resetFields()
                setImageUrl(null)
            }}
            open={isModalOpen}
            width={400}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label="Upload Image"
                    name="img"
                    rules={[
                        {required: true, message: "Please upload an image"},
                    ]}>
                    <Upload onChange={handleImageChange} showUploadList={false}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    {imageUrl && (
                        <div style={{marginTop: 10, textAlign: "center"}}>
                            <img
                                src={imageUrl}
                                alt="Uploaded"
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "150px",
                                    borderRadius: "8px",
                                }}
                            />
                        </div>
                    )}
                </Form.Item>

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {required: true, message: "Please enter product title"},
                    ]}>
                    <Input placeholder="Enter product title" />
                </Form.Item>

                <Form.Item
                    label="Old Price"
                    name="oldPrice"
                    rules={[
                        {required: true, message: "Please enter old price"},
                    ]}>
                    <InputNumber
                        style={{width: "100%"}}
                        min={0}
                        placeholder="Enter old price"
                    />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{required: true, message: "Please enter price"}]}>
                    <InputNumber
                        style={{width: "100%"}}
                        min={0}
                        placeholder="Enter price"
                    />
                </Form.Item>

                <Form.Item
                    label="Discount (%)"
                    name="discount"
                    rules={[
                        {required: true, message: "Please enter discount"},
                    ]}>
                    <InputNumber
                        style={{width: "100%"}}
                        min={0}
                        max={100}
                        placeholder="Enter discount percentage"
                    />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{required: true, message: "Please select status"}]}>
                    <Select placeholder="Select status">
                        <Select.Option value="хит">хит</Select.Option>
                        <Select.Option value="распродажа">
                            распродажа
                        </Select.Option>
                        <Select.Option value="новинка">новинка</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default FormModal
