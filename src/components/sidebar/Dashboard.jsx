import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'antd/es/typography/Link';


const { SubMenu } = Menu;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Sales', 'sub2', <AppstoreOutlined />, [
    getItem('Invoice', '5'),
    getItem('Draft', '6'),
    getItem('Template', '7'),
  ]),
  getItem('Procurement', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Customers', 'sub5', <SettingOutlined />, [
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
    getItem('Option 15', '15'),
    getItem('Option 16', '16'),
  ]),
  getItem('Setting', 'sub6', <SettingOutlined  />, [
    getItem('Option 17', '17'),
    getItem('Option 18', '18'),
    getItem('Option 19', '19'),
    getItem('Option 20', '20'),
  ]),
  getItem('Help & Support', 'sub7', <SettingOutlined />, [
    getItem('Option 21', '21'),
    getItem('Option 22', '22'),
    getItem('Option 23', '23'),
    getItem('Option 24', '24'),
  ]),

];

const ItemContainers = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys([]);
    }
  };

  const handleClick = (key) => {

    console.log('Clicked on item with key:', key);
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: '100%', 
        backgroundColor: '#001529', 
          color: 'white',
        fontSize: '16px',
        letterSpacing: '1px',
      }}
    >
      {items.map((item) =>
        item.children ? (
          <SubMenu key={item.key} icon={item.icon} title={item.label} style={{ color: 'grey' }}>
            {item.children.map((child) => (
              <Menu.Item key={child.key} onClick={() => handleClick(child.key)}>
                {child.label}
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key} icon={item.icon} onClick={() => handleClick(item.key)}>
            <Link to = {`/label-route/sub1/${item.key}`} relative ='path'>{item.label}</Link>
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default ItemContainers;
