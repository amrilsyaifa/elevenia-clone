import React from 'react';
import { Layout as AntdLayout, Breadcrumb, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import PageHeader from 'src/Reusables/Components/PageHeader';
import Style from './Layout.module.scss';

const { Content, Header, Footer } = AntdLayout;

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={Style['layout-content']}>
      <AntdLayout>
        <div className={Style['container']}>
          <PageHeader />
          <Content style={{ padding: '0 50px' }}>
            <div className={Style['site-layout-content']}>{children}</div>
          </Content>
        </div>
      </AntdLayout>
    </div>
  );
};

export default Layout;
