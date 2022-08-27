import styled from "styled-components"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
    url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML843_VW_34FR+watch-41-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630526865000%2C1631662192000);

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 25px;
    ${mobile({width: "70%"})};
    

`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: bold;   
    border-color: peru; 

`

const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: peru;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 10px;
    font-weight: bold;
    ${mobile({width: "50%"})};

    &:hover {
        background-color: black;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 13px;
    text-direction: underline;
    cursor: pointer;

`

const Login = () => {
  return (
    <>
    <Navbar />
    <Container >
        
        <Wrapper dir="rtl">
            <Title> وارد  <b>حساب کاربری</b> خود شوید</Title>
            <Form>
                <Input placeholder="نام کاربری" />
                <Input placeholder="رمزعبور" type="password" />
                <Button> ورود</Button>
                <Link>رمزعبور خود را فراموش کردیه اید؟</Link>
                <Link>ساخت یک حساب کاربری جدید</Link>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login