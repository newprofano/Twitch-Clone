import styled from "styled-components";

//TN => Top Navbar
//CL => Channel List
//CC => Channel Content
//LV => Live Channel
export const Grid = styled.div`
  display: grid;

  grid-template-columns: 240px auto 340px;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "TN TN TN"
    "CL CC LV";

  height: 100vh;

  overflow-x: hidden;
`;
