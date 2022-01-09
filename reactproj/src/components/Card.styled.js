import styled from 'styled-components';

export const StyledCard = styled.div`
   background: #ffe3fe;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   box-shadow:  0px 1px 0px rgba(0, 0, 0, 0.2);
   &:hover {
      background: rgba(0, 0, 0, 0.05);
   }
`;
