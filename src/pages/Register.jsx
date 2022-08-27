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
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 25px;
    ${mobile({width: "70%", marginTop: "50px"})};
    

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: bold;   
    border-color: peru; 

`
const Agreement = styled.div`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 20%;
    border: none;
    padding: 15px 20px;
    background-color: peru;
    color: white;
    cursor: pointer;
    border-radius: 25px;
    font-weight: bold;
    ${mobile({width: "70%"})};

    &:hover {
        background-color: black;
    }

`

const Register = () => {
  return (
    <>
    <Navbar />
    <Container >
        
        <Wrapper dir="rtl">
            <Title>یک  <b>حساب کاربری</b> بسازید</Title>
            <Form>
                <Input placeholder="نام" />
                <Input placeholder="نام خانوادگی" />
                <Input placeholder="نام کاربری" />
                <Input placeholder="ایمیل" />
                <Input placeholder="رمزعبور" type="password" />
                <Input placeholder="تکرار رمزعبور" type="password" />
                <Agreement>
                    <b style={{color: "blue", fontSize: "25px", fontWeight: "bold"}}>*</b> با ساخته شدن این اکانت من تعهد میدهم که در قبال اطلاعات شخصی این حساب کاربری به این وب سایت اعتماد دارم <b>شرایط و قوانین</b>
                </Agreement>
                <Button>ثبت نام</Button>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register