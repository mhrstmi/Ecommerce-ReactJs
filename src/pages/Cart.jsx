import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"

const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})};
 
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=>props.type === "filled" && "white"};
  border-radius: 10px;

  &:hover {
    background-color: ${(props)=>props.type === "filled" ? "transparent" : "black"};
    color: ${(props)=>props.type === "filled" ? "black" : "white"};
  }
`

const TopTexts  = styled.div`
  ${mobile({display: "none"})};
`
const TopText = styled.span`
  color: blue;
  font-weight: bold;
  cursor: pointer;
  margin: 0px 10px;
  
  
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};

`
const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})};
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})};
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}; 
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

`

const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 700;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    background-color: white;
    color: black;
  }
`


const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper dir="rtl">
            <Title>سبد خرید شما</Title>
            <Top>
              <TopButton>ادامه خرید</TopButton>
              <TopTexts>
                <TopText>سبد خرید (2) </TopText>
                <TopText>علاقه مندی ها (5)</TopText>
              </TopTexts>
              <TopButton type="filled">پرداخت </TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML843_VW_34FR+watch-41-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630526865000%2C1631662192000" />
                    <Details>
                      <ProductName><b>محصول : </b> اپل واچ</ProductName>
                      <ProductId><b>شناسه : </b> 28756</ProductId>
                      <ProductColor color="black" />
                      <ProductSize><b>سایز : </b> 42 mm </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />

                      <ProductAmount>2</ProductAmount>

                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
                <Product>
                  <ProductDetail>
                    <Image src="https://dkstatics-public.digikala.com/digikala-products/d02f328f09a8636efb4b2b1054649a65ec9ce027_1624801479.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    <Details>
                      <ProductName><b>محصول : </b>  ایپد</ProductName>
                      <ProductId><b>شناسه : </b> 78345</ProductId>
                      <ProductColor color="gray" />
                      <ProductSize><b>سایز : </b> 10 inch </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />

                      <ProductAmount>1</ProductAmount>

                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 70</ProductPrice>
                  </PriceDetail>
                </Product>

                <Hr />

                <Product>
                  <ProductDetail>
                    <Image src="https://dkstatics-public.digikala.com/digikala-products/5a4eb650fb7ccab910323c035cf249142ea110ec_1653819285.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
                    <Details>
                      <ProductName><b>محصول : </b> آیفون 8 </ProductName>
                      <ProductId><b>شناسه : </b> 64825</ProductId>
                      <ProductColor color="red" />
                      <ProductSize><b>سایز : </b> 5 inch </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />

                      <ProductAmount>1</ProductAmount>

                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 50</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>

              <Summary>
                <SummaryTitle>خلاصه سفارش</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>جمع</SummaryItemText>
                  <SummaryItemPrice>$ 150 </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>هزینه تحویل</SummaryItemText>
                  <SummaryItemPrice>$ 5 </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                  <SummaryItemText>تخفیف</SummaryItemText>
                  <SummaryItemPrice>$ -10 </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                  <SummaryItemText >جمع کل</SummaryItemText>
                  <SummaryItemPrice>$ 145 </SummaryItemPrice>
                </SummaryItem>

                <SummaryButton>پرداخت</SummaryButton>

              </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart