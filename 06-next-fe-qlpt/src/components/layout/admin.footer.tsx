'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Quản lý Trọ ©{new Date().getFullYear()} Created by @hieu912k3@gmail.com
            </Footer>
        </>
    )
}

export default AdminFooter;