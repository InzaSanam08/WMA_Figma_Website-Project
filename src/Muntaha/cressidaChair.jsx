import { Row, Col, Typography, Button, Rate, Breadcrumb, Card, message } from 'antd';
import { useState } from 'react';
import sofaVideo from '../assets/sofaVedio.mp4';  
import './CressidaChair.css';

const { Title, Paragraph } = Typography;

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  
  const image1 = 'https://i.postimg.cc/jwJjZddQ/image1.png';
  const image2 = 'https://i.postimg.cc/MKvKJc3B/image3.jpg';
  const image3 = 'https://i.postimg.cc/0b1qpNs9/image2.jpg'; 
  const image4 = 'https://i.postimg.cc/HV1CQLgs/image4.jpg';
  const sofaBgImg = 'https://i.postimg.cc/L6w49HG7/Maskgroup.jpg';
  const [mainImage, setMainImage] = useState(image1); 
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#9F9F9F');

// ///
  const thumbnails = [image1, image2, image3, image4];
// ///
  const rectangleImage1 = 'https://i.postimg.cc/Lq55gVd1/Rectangle4.png'; 
  const rectangleImage2 = 'https://i.postimg.cc/nCKfTtFn/Rectangle2.jpg'; 
  const rectangleImage3 = 'https://i.postimg.cc/2VdNTfkr/Rectangle3.jpg'; 
  const rectangleImage4 = 'https://i.postimg.cc/ryhx9rt0/Rectangle4.jpg'; 

  // const videoUrl = './Muntaha/assets/sofaVedio.mp4';

  const handleThumbClick = (src, index) => {
    setMainImage(src);
    setActiveThumb(index);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    message.success(`Color changed to ${getColorName(color)}`);
  };

  const getColorName = (color) => {
    switch (color) {
      case '#9F9F9F': return 'Gray';
      case '#212122': return 'Black';
      case '#5E4736': return 'Brown';
      default: return 'Gray';
    }
  };

  const handleAddToCart = () => {
    message.success(`Added ${quantity} Cressida Chair(s) in ${getColorName(selectedColor)} color to cart!`);
  };

  // Related products data
  const relatedProducts = [
    {
      name: 'Aurelie',
      img: image1,
      price: 'Php 12,500',
      rating: 4.8
    },
    {
      name: 'Annathacia',
      img: image2,
      price: 'Php 15,200',
      rating: 4.9
    },
    {
      name: 'Cappucine',
      img: image3,
      price: 'Php 11,800',
      rating: 4.5
    },
    {
      name: 'Benoite',
      img: image4,
      price: 'Php 13,700',
      rating: 4.7
    }
  ];

  // Bottom Related products data
  const bottumRelatedProducts = [
    {
      name: 'Aurelie',
      img: rectangleImage1,
      price: 'Php 12,500',
      rating: 4.8
    },
    {
      name: 'Annathacia',
      img: rectangleImage2,
      price: 'Php 15,200',
      rating: 4.9
    },
    {
      name: 'Cappucine',
      img: rectangleImage3,
      price: 'Php 11,800',
      rating: 4.5
    },
    {
      name: 'Benoite',
      img: rectangleImage4,
      price: 'Php 13,700',
      rating: 4.7
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-section">
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Cressida Chair</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* MAIN PRODUCT SECTION */}
      <div className="main-product-section">
        <Row gutter={[80, 40]} align="top">
          {/* LEFT – Product Details */}
          <Col xs={24} lg={12}>
            <Title level={1} className="product-name">Cressida Chair</Title>

            <div className="price-rating">
              <span className="price">Php 14,000</span>
              <Rate disabled defaultValue={4.6} allowHalf style={{ fontSize: 18, color: '#98724B' }} />
              <span className="reviews">4.6/5.0 (556 reviews)</span>
            </div>

            <Paragraph className="desc">
              The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there's a tilt and height-adjusting mechanism that's built to outlast years of ups and downs.
            </Paragraph>

            <Paragraph className="desc">
              Crafted with premium quality materials and ergonomic design, this chair provides exceptional comfort for long working hours while maintaining an elegant aesthetic for any modern office or home setting.
            </Paragraph>

            {/* Colors */}
            <div className="color-section">
              <h3 className="color-label">Select Color:</h3>
              <div className="colors">
                <div
                  className={`color ${selectedColor === '#9F9F9F' ? 'active' : ''}`}
                  style={{ background: '#9F9F9F' }}
                  onClick={() => handleColorClick('#9F9F9F')}
                  title="Gray"
                ></div>
                <div
                  className={`color ${selectedColor === '#212122' ? 'active' : ''}`}
                  style={{ background: '#212122' }}
                  onClick={() => handleColorClick('#212122')}
                  title="Black"
                ></div>
                <div
                  className={`color ${selectedColor === '#5E4736' ? 'active' : ''}`}
                  style={{ background: '#5E4736' }}
                  onClick={() => handleColorClick('#5E4736')}
                  title="Brown"
                ></div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="buy-section">
              <div className="quantity-box">
                <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(q => q + 1)}>+</Button>
              </div>
              <Button
                type="primary"
                size="large"
                className="add-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </Col>

          {/* RIGHT – Images */}
          <Col xs={24} lg={12}>
            <div className="main-img-box">
              <img
                src={mainImage}
                alt="Cressida Chair"
                className="main-img"
              />
            </div>
            <div className="thumbnails">
              {thumbnails.map((src, index) => (
                <div
                  key={index}
                  className={`thumb ${activeThumb === index ? 'active' : ''}`}
                  onClick={() => handleThumbClick(src, index)}
                >
                  <img src={src} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      {/* ADDITIONAL INFORMATION SECTION */}
      <div className="additional-info-section">
        <Title level={2} className="section-title">Additional Information</Title>

        <Paragraph className="info-text">
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </Paragraph>

        <Paragraph className="info-text">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs...
        </Paragraph>
        {/* Full Video Player */}
      <div className="video-sofa">
  <video
    width="100%"
    height="500"
    controls
    preload="metadata"
    playsInline
    poster={sofaBgImg}  
  >
    <source src={sofaVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="video-caption">
    Watch our Cressida Chair assembly and features video
  </div>
</div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="related-products">
        <Title level={2} className="related-title-left">Related Products</Title>

        <Row gutter={[32, 32]} justify="start">
          {bottumRelatedProducts.map((product) => (
            <Col xs={24} sm={12} md={12} lg={6} key={product.name}>
              <Card
                hoverable
                className="related-card"
                cover={
                  <img
                    src={product.img}
                    alt={product.name}
                    className="related-card-img"
                  />
                }
              >
                <div className="related-card-content">
                  <Title level={4} className="related-product-name">{product.name}</Title>
                  <Rate
                    disabled
                    defaultValue={product.rating}
                    allowHalf
                    style={{ fontSize: 16, color: '#98724B', marginBottom: 10 }}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}