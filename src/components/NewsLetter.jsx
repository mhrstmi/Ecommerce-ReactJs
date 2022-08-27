import styled from "styled-components";
import { Send } from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "40px"})};
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "15px"})};

`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({justifyContent: "center", width: "70%"})};

`

const Input = styled.input`
    border: none;
    flex 8;
    padding-left: 20px;
    text-align: center;

`

const Button = styled.button`
    flex; 1;
    border: none;
    background-color: peru;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: black;
    }
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>
            سایت فروشگاهی
        </Title>

        <Description dir="rtl">
            برای دریافت آخرین اخبار و اطلاع از محصولات جدید ایمیل خود را وارد کنید
        </Description>

        <InputContainer>
            <Input placeholder="ایمیل خود را وارد کنید" />

            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default NewsLetter