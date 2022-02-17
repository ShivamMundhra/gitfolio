import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const OrgImg = styled.img`
  width: 10%;
  border-radius: 50%;
  border: 2px solid palevioletred;
  margin: 5px 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: max-content;
`;

const W2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextWrap = styled.span`
  margin: 30px 0 0 5px;
  font-size: 1.5vw;
`;

const Organisations = (props) => {
  const [orgData, setOrgData] = useState(null);
  const { Url } = props;
  const getOrgData = useCallback(async () => {
    try {
      const { data } = await axios.get(Url);
      setOrgData(data);
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  }, [Url]);
  useEffect(() => {
    getOrgData();
  }, [getOrgData]);
  return (
    <Wrapper>
      {orgData && orgData.length > 0 ? (
        <W2>
          {orgData.map((org) => (
            <OrgImg key={org.id} src={org.avatar_url} />
          ))}
        </W2>
      ) : (
        <W2>
          <TextWrap>None</TextWrap>
        </W2>
      )}
    </Wrapper>
  );
};

export default Organisations;
