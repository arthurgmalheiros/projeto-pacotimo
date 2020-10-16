import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  .header-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    width: auto;
    background: #365bc7;
    position: relative;
    padding: 16px;

    img {
      width: 120px;
    }

    svg {
      cursor: pointer;
    }

    svg {
      position: absolute;
      left: 16px;
      transition: all 0.6s;

      &:hover#Search {
        transform: rotate(90deg);
      }

      &:hover#Arrow {
        left: 10px;
      }
    }

    input {
      position: absolute;
      right: 16px;
      z-index: 5;
      background: #fff0;
      border-bottom: 1px solid #fff;
      transition: all 0.4s;
      color: #fff;
      width: ${props => (props.showInput ? "300px" : "0px")};
      opacity: ${props => (props.showInput ? "1" : "0")};
      padding-right: ${props => (props.showInput ? "36px" : "0px")};
      padding-left: 10px;
      padding-top: 20px;
      padding-bottom: 4px;

      &::placeholder {
        color: #dddd;
      }
    }
  }

  @media (max-width: 850px) {
    .header-container {
      img {
        transition: all 0.4s;
        width: ${props => (props.showInput ? "0px" : "120px")};
      }

      input {
        width: ${props => (props.showInput ? "100%" : "0px")};
        padding-left: 70px;
      }
    }
  }
`;
