import React from 'react';
import styled from 'styled-components';
import {HelmetProvider} from "react-helmet-async";
import {BottomNavigation} from "./BottomNavigation";
import {Header} from "./Header";

const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px 60px;
`;

export function PageLayout({children}) {
    return (
        <HelmetProvider>
            <Header />
            <Content>
                {children}
            </Content>
            <BottomNavigation />
        </HelmetProvider>
    )
}
