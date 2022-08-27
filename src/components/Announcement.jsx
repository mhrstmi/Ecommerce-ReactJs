import Styled from "styled-components"

const Container = Styled.div`
    height: 30px;
    background-color: peru;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>همه محصولات با %20 تخفیف فقط تا اخر ماه همین الان اقدام کنید</Container>
  )
}

export default Announcement