import React, { useState } from 'react';
import { Card } from 'antd';


const InvoicePage = () => {
  const [activeTabKey2, setActiveTabKey2] = useState('article');

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  const tabListNoTitle = [
    {
      key: 'allInvoice',
      tab: 'All Invoice',
    },
    {
      key: 'due',
      tab: 'Due',
    },
    {
      key: 'paid',
      tab: 'Paid',
    },
  ];

  const contentListNoTitle = {
    allInvoice: <p>all Invoice content</p>,
    due: <p>due content</p>,
    paid: <p>paid content</p>,
  };

  return (
    <>
      <br />
      <br />
      <Card
        style={{
          width: '100%',
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
       
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default InvoicePage;
