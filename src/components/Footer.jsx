import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Telegram, Twitter, WhatsApp } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
    display: flex;
    background-color: #FAEBD7;
    ${mobile({flexDirection: "column",})};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    margin-top: 50px;
    ${mobile({marginTop: "0px"})};
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;

`

const Footer = () => {
  return (
    <Container  dir="rtl">
        <Left>
            <Logo>سایت فروشگاهی</Logo>
            <Desc>خرید جدیدترین و بهترین محصولات دیجیتالی با بالاترین کیفیت و 7 روز ضمانت پس از خرید فقط در این فروشگاه به همراه تخفیف های ماهیانه و هفتگی و قرعه کشی های ماهیانه با جوایز نفیس هرماه</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook  />
                </SocialIcon>

                <SocialIcon color="E4405F">
                    <Instagram  />
                </SocialIcon>

                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>

                <SocialIcon color="E60023">
                    <Pinterest  />
                </SocialIcon>

            </SocialContainer>
        </Left>
        
        <Center>
            <Title> لینک های پرکاربرد</Title>
            <List>
                <ListItem>خانه</ListItem>
                <ListItem>سبد خرید</ListItem>
                <ListItem>دسته بندی ها</ListItem>
                <ListItem>ارتباط با ما</ListItem>
                <ListItem>درباره ما</ListItem>
                <ListItem>مجله خبری</ListItem>

                <ListItem>راهنمای خرید</ListItem>
                <ListItem> برترین محصولات</ListItem>
                <ListItem> شرایط و قوانین</ListItem>
                <ListItem>نحوه ارسال محصولات </ListItem>

            </List>
        </Center>
        <Right>
            <Title>ارتباط با ما</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}} />
                آدرس: تهران - میدان آزادی 
            </ContactItem>
                
            <ContactItem >
                <Phone style={{marginRight: "10px"}} />
                +21 234 56 78
            </ContactItem>

            <ContactItem>
                <MailOutline style={{marginRight: "10px"}} />
                example@gmail.com
            </ContactItem>

            <Payment src="http://elmozendegi-sch.ir/cache/01e22df35a7145df862d7888ff680718.png"></Payment>
        </Right>
    </Container>
  )
}

export default Footer