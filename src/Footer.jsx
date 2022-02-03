import { Typography, Space } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
  <div>
      <Typography.Title level={5} style={{color:"white", textAlign:"center"}} >
          Cryptonite <br/>
          All rights reserved
      </Typography.Title>
      <Space>
          <Link to="/">Home</Link>
      </Space>
  </div>
  );
};

export default Footer;
