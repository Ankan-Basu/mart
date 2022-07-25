import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const NewsletterContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 10rem 0;
  background-color: darkseagreen;
`;

const Form = styled.form`
  display: flex;
  ${'' /* border: 2px solid green; */}
  width: 25rem;
`;

const Input = styled.input`
  flex:15;
  border: 2px solid black;
  border-radius: 0.25rem;
  outline: none;
  padding: 0 0.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  flex:2;
`;

const Newsletter = () => {
  return (
    <NewsletterContainer>
    <h2>Subscribe to our Newsletter</h2> to get the latest updates
    <br />
    <br />
      <Form>
        <Input type="email" placeholder="E-mail" />
        <Button type="button">
          <SendIcon />
        </Button>
      </Form>
    </NewsletterContainer>
  )
}

export default Newsletter