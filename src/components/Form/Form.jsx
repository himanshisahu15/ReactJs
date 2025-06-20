import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Form, Button, Input, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './form.css';
import manImg from '../../assets/man.png';
import womanImg from '../../assets/women.png';

export default function Demo({ onFormSubmit }) {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(
    {
      title: '',
      amount: '',
      date: ''
    }
  );
  const [imageFile, setImageFile] = useState(null);

  const onFinish = () => {
    const productData = {
      ...formData,
      date: formData.date?.format('YYYY-MM-DD'),
      image: imageFile ? URL.createObjectURL(imageFile) : '',
    };
    console.log(productData);
    onFormSubmit(productData);
    form.resetFields();
    setImageFile(null);
  };

  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues);
    console.log(allValues);
    setFormData(allValues);
  };

  return (
    <div className='form-wrapper'>
       <img src={manImg} alt="Man Illustration" className='form-man' />
      <div className='mainForm'>
        <Form
          form={form}
          name="productForm"
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={onValuesChange}
        >
          <Form.Item
            label="Enter Title"
            name="title"
            rules={[{ required: true, message: 'Please enter title' }]}
          >
            <Input type='text' />
          </Form.Item>

          <Form.Item
            label="Enter Amount"
            name="amount"
            rules={[{ required: true, message: 'Please enter amount' }]}
          >
            <Input type='number' />
          </Form.Item>

          <Form.Item
            label="Select Date of Launch"
            name="date"
            rules={[{ required: true, message: 'Please select your launch date' }]}
          >
            <DatePicker className='datapicker' />
          </Form.Item>

          <Form.Item label="Upload PNG Image">
            <Upload
              accept=".png,.jpg,.jpeg"
              showUploadList={false}//don't show default list
              beforeUpload={(file) => {
                setImageFile(file);
                return false;//prevent auto upload
              }}
            >
              <Button className='upload-img rainbow-btn' icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            {imageFile && <div className='file-name'>{imageFile.name}</div>}
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="btn" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
       <img src={womanImg} alt="Woman Illustration" className='form-woman' />
    </div>
  );
}
