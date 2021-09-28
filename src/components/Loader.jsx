import React from 'react'
import { Spin } from "antd";
import { DollarCircleOutlined } from "@ant-design/icons";

const antIcon = <DollarCircleOutlined style={{ fontSize: 24 }} spin />;

function Loader() {
    return (
        <div className="loader">
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Loader
