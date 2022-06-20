import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

import NavBar from "./../Partners/components/NavBar";

const Container = styled.div`
  ${tw`
    
  `}
`;
const ContentContainer = styled.div`
  ${tw`
     w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-20
    justify-items-center
  `}
`;
const Card = styled.div`
  ${tw`
        bg-white
        p-8
        mt-4
        flex
        flex-col
      justify-between
      justify-items-center
`}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px -1px;
`;
const Select = styled.select`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
`;
const InputCheck = styled.input`
  ${tw`
  ml-5
  `}
  border: 1px solid gray;
`;
const Input = styled.input`
  ${tw`
  w-full
  p-1
  mb-3
  `}
  border: 1px solid gray;
`;
const Button = styled.button`
  ${tw`
    bg-secondary-color
    text-white
    py-3
    px-4
    text-sm
    font-bold
    mt-6
    `}
`;

const Rooms = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <form onSubmit={onSubmitHandler}>
          <Card>
            <div className="w-4/6 ml-[auto] mr-[auto]">
              <p className="text-2xl font-bold mb-5">Price and Layout</p>
              <label>Room Type</label>
              <br />
              <Select>
                <option>Single</option>
                <option>Double</option>
                <option>Twin</option>
                <option>Triple</option>
                <option>Quad</option>
                <option>Family</option>
                <option>Suite</option>
                <option>Studio</option>
              </Select>
              <br />
              <label>Maximun Number To Stay</label>
              <br />
              <Input
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              />
              <br />
              <label>Number of Rooms</label>
              <br />
              <Input
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              />
              <br />
              <label>Price</label>
              <br />
              <Input
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              />
            </div>
          </Card>
          <Card>
            <div className="w-4/6 ml-[auto] mr-[auto]">
              <p className="text-2xl font-bold mb-5">Facilities</p>
              <label>Parking</label>
              <br />
              <Select
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              >
                <option>Yes</option>
                <option>No</option>
              </Select>
              <br />
              <label>Breakfast</label>
              <br />
              <Select
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              >
                <option>Yes</option>
                <option>No</option>
              </Select>
              <br />
              <label>Language</label>
              <br />
              <Select
              //type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              //placeholder="email"
              >
                <option>Yes</option>
                <option>No</option>
              </Select>
            </div>
          </Card>
          <Card>
            <p className="text-2xl font-bold mb-5 w-4/6 ml-[auto] mr-[auto]">
              Popular facilities with gusts
            </p>
            <div className="w-4/6 ml-[auto] mr-[auto] grid grid-cols-2 gap-2 content-center items-center">
              <div className="flex flex-col">
                <div className="flex items-center justify-start">
                  <label>Free wifi</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Restaurant</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Room Service</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>24-hours front desk</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Bar Facilities</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-start">
                  <label>None Smoking Rooms</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Spa & Wellness Center</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Hot tube && Jacuzzi</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Air Conditioning</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
                <br />
                <div className="flex items-center justify-start">
                  <label>Sauna</label>
                  <br />
                  <InputCheck
                    type="checkbox"
                    //type="email"
                    //value={email}
                    //onChange={(e) => setEmail(e.target.value)}
                    //placeholder="email"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className=" w-4/6 ml-[auto] mr-[auto]">
              Photo
              <Input type="file"></Input>
            </div>
          </Card>
          <Card>
            <Button type="submit">Add Room</Button>
          </Card>
        </form>
      </ContentContainer>
    </Container>
  );
};

export default Rooms;
