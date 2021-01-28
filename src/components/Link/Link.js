import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
    color: #fff;
`;

const Link = ({url, title}) => (
    <InnerLink
        href={url}
    >
        {title}
    </InnerLink>
);

export default Link;