import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptice_icon.png";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <Avatar src={icon} size="large" />
        </Link>

        <Typography.Title level={2} className="logo">
          <Link className="menu-text" to="/">
            Cryptice
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark" style={{ backgroundColor: "#00E5E5" }}>
          <Menu.Item icon={<HomeOutlined />}>
            <Link className="menu-text" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link className="menu-text" to="/cryptocurrencies">
              Crypto Currencies
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link className="menu-text" to="/exchanges">
              Exchanges
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link className="menu-text" to="/news">
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}

      {screenSize > 768 && (
        <div className="bottom-content">
          <div>Created by: Milind Shinde</div>
          <div>Email: mhshinde95@gmail.com</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
