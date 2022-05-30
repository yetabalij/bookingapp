import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    
    `}
`;
const HorizontalLine = styled.hr`
  ${tw`
    my-5
`}
  width: 100%;
  border: 1px solid #f3f3f3;
`;
const PContainer = styled.div`
  ${tw`
    
    `}
`;
const Button = styled.button`
  ${tw`
    mt-5
    w-full
    text-secondary-color
    bg-white
    py-2
    `}
  border: 1px solid blue;
`;

const SignInComp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HorizontalLine />
      <PContainer>
        <p className="text-xs">
          Do you have questions about your property or the extranet? Visit the
        </p>
        <p className="text-xs">
          <span className="text-blue-500">
            <Link to="/partnershelpcenter">Partner Help Center</Link>
          </span>
          or ask another partner on the{" "}
          <span className="text-blue-500">
            <Link to="/partnercommunity">Partner Community</Link>
          </span>
          .
        </p>
      </PContainer>
      <Button onClick={() => navigate("/partnersignin")}>Sign in</Button>
      <HorizontalLine />
      <PContainer>
        <p className="text-xs">
          By signing in or creating an account, you agree with our
        </p>
        <p className="text-xs">
          <span className="text-blue-500">
            <Link to="/termsandconditions">Terms and Conditions</Link>
          </span>
          and
          <span className="text-blue-500">
            <Link to="/privacystatement">Privacy Statement</Link>
          </span>
          .
        </p>
      </PContainer>
      <HorizontalLine />
      <p className="text-xs">All rights reserved.</p>
    </div>
  );
};

export default SignInComp;
