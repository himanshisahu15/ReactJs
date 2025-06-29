import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset
} from "../CounterSlice/CounterSlice.js";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 100px;
  background: linear-gradient(135deg,rgb(240, 221, 201) 0%,rgb(247, 222, 202) 100%);
  border-radius: 20px;
  width: 350px;
  margin: 230px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 30px;
  color: #2e57ad;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  background: #2e57ad;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #204088;
  }

  &:active {
    transform: scale(0.97);
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <Container>
            <Title>Counter: {count}</Title>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
                <Button onClick={() => dispatch(reset())}>Reset</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Counter;
