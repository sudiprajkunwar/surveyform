import React from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";

const { Paragraph, Title } = Typography;
const PSytle = styled(Paragraph)`
  color: #878787;
  font-size: 16px;
  font-weight: 400;
`;
const TSytle = styled(Title)`
  color: #113b65 !important;
  font-weight: bold !important;
  font-size: 45px !important;
`;

const TBlock = styled.div`
  padding: 25px 0px 0 40px !important;
`;
function Heading() {
  return (
    <TBlock>
      <TSytle level={2}>Create Survey</TSytle>
      <PSytle>
        Please add valid survey title and add question to start creating a
        survey. You can select from Start rating, question. For objective type
        question, a minimum of two options is required.
      </PSytle>
    </TBlock>
  );
}

export default Heading;
