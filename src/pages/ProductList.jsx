import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import {mobile} from "../responsive"


const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})};
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "10px 0px"})};
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />

        <Title>گوشی ها</Title>

        <FilterContainer>
            <Filter>
                <FilterText>فیلتر : </FilterText>
                <Select>
                    <Option>مشکی</Option>
                    <Option>سفید</Option>
                    <Option>خاکستری</Option>
                    <Option>زرد</Option>
                    <Option>قرمز</Option>
                </Select>

                <Select>
                    <Option>16g</Option>
                    <Option>32g</Option>
                    <Option>64g</Option>
                    <Option>128g</Option>
                    <Option>256g</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>  مرتب سازی :  </FilterText>
                <Select>
                    <Option>ارزان ترین</Option>
                    <Option>گران ترین</Option>
                    <Option>جدیدترین</Option>
                    <Option>پرفروش ترین</Option>
                </Select>
                </Filter>
        </FilterContainer>

        <Products />
    </Container>
  )
}

export default ProductList