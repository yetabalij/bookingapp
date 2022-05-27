import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const EmailComp = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        Create your partner account
      </h1>
      <p className="text-sm text-gray-500 mt-2 mb-8">
        Create an account to list and manage your property.
      </p>
      <form>
        <label>Email address</label>
        <br />
        <input type="email" placeholder="email"></input>
        <br />
        <button>Continue</button>
      </form>
    </div>
  );
};

export default EmailComp;
