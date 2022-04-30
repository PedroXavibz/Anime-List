import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.3rem;

  &.create-border {
    border: 0.4rem solid ${({ theme }) => theme.colors.secondaryNeon};
    background: #ffffff;
  }

  input {
    background: none;
    padding: 0.2rem;

    font-size: ${({ theme }) => theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fonts.paragraph};
    font-weight: 800;
    letter-spacing: 0.05rem;

    border: none;
    outline: none;
  }

  button {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.secondaryNeon};

    background: none;
    border: none;

    z-index: 2;
    cursor: pointer;
  }
`;

export default Form;
