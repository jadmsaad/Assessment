import React,{useState} from 'react'
import {Container, Carousel, Row, Col} from 'react-bootstrap'

const AboutComponent = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    return (
        <div className="m-5">
            <h2 className="d-flex justify-content-center">What do we do?</h2>
            <Row>
            <Container as={Col}>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Purus sit amet volutpat consequat mauris nunc.
                    Eget gravida cum sociis natoque. In iaculis nunc sed augue lacus viverra vitae congue eu. Nunc scelerisque viverra mauris in.
                    Ac placerat vestibulum lectus mauris ultrices.
                </p>

            </Container>
                <Container as={Col}>

                <Carousel  activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../img/slide1.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../img/slide2.jpg")}
                    alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../../img/slide3.png")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </Container>
            </Row>
        </div>
    )
}

AboutComponent.propTypes = {

}

export default AboutComponent

