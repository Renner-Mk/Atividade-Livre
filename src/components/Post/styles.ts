import styled from "styled-components";

export const Container = styled.div`
    width: 220px;
    padding: 20px;
    background-color:${({ theme }) => theme.colors.inputColor};
    display: flex;
    flex-direction: column;
    gap: 20px;

    .category{
        color: #00b894;
    }

    .italic{
        font-style: italic;
    }

    span {
      color: ${({ theme }) => theme.colors.textColor};
    }

    .author {
      color: ${({ theme }) => theme.colors.title};
      font-size: 13px;
      line-height: 20px;
    }

    .title {
    color: ${({ theme }) => theme.colors.title};
    font-size: 28px;
    line-height: 30px;
    letter-spacing: -1px;
  }

  ul{
    display:flex;
    list-style-type: none;
  }
  li{
    margin-right: 15px;
  }
`