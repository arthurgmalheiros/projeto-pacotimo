import styled from "styled-components";

export const Container = styled.div`
  padding: 26px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .card {
    background: #fff;
    margin: 8px;
    border-radius: 4px;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      background: #eee;
    }

    .logo {
      margin: 10px;
      max-width: 100%;
      max-height: 200px;
      overflow: hidden;
      cursor: pointer;
      border-radius: 4px;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }

    .description {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      grid-template-areas:
        "city city city city"
        "price price inboundDate outboundDate";

      flex-direction: column;
      justify-content: center;
      padding: 0 10px 10px;

      h1 {
        font-size: 22px;
        color: #333;
      }

      span {
        color: #8d8c8c;
        font-size: 16px;
      }

      p {
        margin: auto 0;
        padding: 0 10px;
        color: #8d8c8c;
        font-size: 12px;
      }
    }
  }

  @media (max-width: 720px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (min-width: 1200px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
