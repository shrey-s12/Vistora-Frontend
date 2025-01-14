import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CarouselImage1 from '../../assets/CarouselImage-1.jpg';
import CarouselImage2 from '../../assets/CarouselImage-2.jpg';
import CarouselImage3 from '../../assets/CarouselImage-3.jpg';
import CarouselImage4 from '../../assets/CarouselImage-4.jpg';
import CarouselImage5 from '../../assets/CarouselImage-5.jpg';
import CarouselImage6 from '../../assets/CarouselImage-6.jpg';
import CarouselImage7 from '../../assets/CarouselImage-7.jpg';
import CarouselImage8 from '../../assets/CarouselImage-8.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={CarouselImage1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage3} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage4} alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage5} alt="Fifth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage6} alt="Sixth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage7} alt="Seventh slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={CarouselImage8} alt="Eighth slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <HiOutlineChevronLeft className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <HiOutlineChevronRight className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
