import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 500px;
`;

// export const Item = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   font-size: 25px;
//   line-height: 1.15;
//   padding: 10px 0;
//   letter-spacing: 0.05em;
// `;

// export const Button = styled.button`
//   box-shadow: inset 0px 0px 12px 3px #ffffff;
//   background: linear-gradient(to bottom, #deaf85 5%, #deaf85 100%);
//   background-color: #deaf85;
//   border-radius: 4px;
//   border: 2px solid #deaf85;
//   display: inline-block;
//   cursor: pointer;
//   color: #212121;
//   font-family: Arial;
//   font-size: 20px;
//   font-weight: bold;
//   padding: 16px 16px;
//   text-decoration: none;
//   &:hover {
//     background: linear-gradient(to bottom, #dfaf98 5%, #dfaf98 100%);
//     background-color: #212121;
//     color: #ffffff;
//   }
// `;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  justify-content: space-between;
  transition-duration: 500ms;
  :hover {
    background-color: #e7e6e1;
  }
  border-radius: 4px;
  padding-left: 12px;
`;