import styled from 'styled-components';
import image from '../../images/phone-book.png';

export const Header = styled.header`
  border-bottom: 2px solid #2a363b;
  width: 100%;
  background-color: #deaf85;
  background-image: url(${image});
  background-size: 200px 140px;
  background-repeat: no-repeat;
  background-position: center;
÷`;

export const Container = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 50px 20px;
`;