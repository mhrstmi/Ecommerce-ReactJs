import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import {mobile} from "../responsive"


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})};
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "60vh"})};
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})};
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})};

`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    ${mobile({fontSize: "15px"})};
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})};
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`
const Button = styled.button`
    padding: 15px;
    border: 2px solid green;
    background-color: white;
    cursor: pointer;
    font-size: 500;
    font-weight: bold;
    border-radius: 10px;

    &:hover{
        background-color: green;
        color: white;
    }

`


const Product = () => {
  return (
    <Container >
        <Announcement />
        <Navbar />
        <Wrapper dir="rtl">
            <ImgContainer>
                <Image src="https://dkstatics-public.digikala.com/digikala-products/fafcf8c0f35b9dd9acdbefd73560fe88c2b79372_1655537643.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" />
            </ImgContainer>

            <InfoContainer>
                <Title>ایفون 8 </Title>
                <Desc >شاید کمتر کسی فکر می‌کرد که بعد از آیفون‌های 7 شاهد معرفی آیفون‌های 8 باشیم. این اقدام اپل به‌نوعی برای همه تعجب‌آور بود؛ همچنین موردی که آیفون 8 را کمی کوچک جلوه داد، نوع معرفی آن بود. مراسم معرفی آیفون 8 و 8پلاس را هم می‌توان آرام‌ترین و بی‌سروصداترین مراسم معرفی آیفون تا امروز نامید. فیل شیلر در ظاهر از قابلیت‌های این آیفون‌ها صحبت می‌کرد؛ اما حاضرین در سالن برای فناوری‌های جدیدی که در این گوشی استفاده‌ شده بود، ذوق نداشتند تا حدی که تشویق خود را از این آیفون‌ها دریغ کردند. اما درواقع آیفون‌ها گوشی‌هایی هستند، فوق‌العاده قدرتمند که با فناوری‌های جدید به‌روز شده‌اند و می‌توان با خرید آن‌ها تا چند سالی را با خیال راحت از دنیای تکنولوژی‌های جدید لذت برد. آیفون‌ 8، سخت‌افزاری قدرتمند، دوربین‌ بهتر در مقایسه با نسل قبل، نمایشگری باهوش‌تر و از همه مهم‌تر امکان پشتیبانی از AR (واقعیت مجازی) را با خود به همراه آورده است.
                </Desc>
                
                <Price>$200</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>رنگ</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="red" />
                    <FilterColor color="blue" />

                </Filter>

                <Filter>
                    <FilterTitle>حافظه داخلی</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>16g</FilterSizeOption>
                    <FilterSizeOption>32g</FilterSizeOption>
                    <FilterSizeOption>64g</FilterSizeOption>
                    <FilterSizeOption>128g</FilterSizeOption>
                    <FilterSizeOption>256g</FilterSizeOption>
                    </FilterSize>

                </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor: 'pointer'}} />
                        <Amount>1</Amount>
                        <Add style={{cursor: 'pointer'}} />

                    </AmountContainer>
                    <Button>اضافه به سبد خرید</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product