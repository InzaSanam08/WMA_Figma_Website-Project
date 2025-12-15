import {
  ShoppingCartOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  TrademarkCircleOutlined,
  ArrowRightOutlined,
  CheckOutlined
} from '@ant-design/icons';
import {
  Layout,
  Breadcrumb,
  Row, Col,
  Typography,
  Carousel,
  message,
  Button
} from 'antd';
const { Title, Text, Paragraph } = Typography;
import { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';

// css link
import './aboutUs.css';

function HeroSection() {
  const [animatedProgress, setAnimatedProgress] = useState(false);
  const progressRef = useRef();

  const bgImage = '	https://i.postimg.cc/Vd3PWBbS/about-Us-BG.jpg';
  const imgGrid1 = 'https://i.postimg.cc/WhQcw6JF/img-grid1.jpg';
  const imgGrid2 = 'https://i.postimg.cc/ppgMJYnL/img-grid2.jpg';
  const imgGrid3 = 'https://i.postimg.cc/w7SYQcsv/img-grid3.jpg';
  const people1 = 'https://i.postimg.cc/gXcC2g18/people1.jpg';
  const people2 = 'https://i.postimg.cc/3yhMP81T/people2.jpg';
  const people3 = 'https://i.postimg.cc/67KsDWcB/people3.jpg';
  const people4 = 'https://i.postimg.cc/FdFMHTwf/people4.jpg';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedProgress(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const products = [
    {
      title: 'Nordic Chair',
      description: 'Offering unmatched comfort and a futuristic flair for any room.',
      image: 'https://i.postimg.cc/sGxBWBn3/row-Chair1.png',
      imageBgColor: '#6A6A6A4D'
    },
    {
      title: 'Kruzi Aero',
      description: 'Elevate your space with the timeless and minimalist charm.',
      image: 'https://i.postimg.cc/m1kc9cdD/row-Chair2.png',
      imageBgColor: '#35736E4D'
    },
    {
      title: 'Ergonomic Chair',
      description: 'Prioritize your health and productivity with our Ergonomic Chair',
      image: 'https://i.postimg.cc/n9rsmsdr/row-Chair3.png',
      imageBgColor: '#6A6A6A4D'
    }
  ];

  const features = [
    {
      icon: <TrademarkCircleOutlined />,
      title: 'Premium Quality',
      desc: 'Handcrafted from premium sustainable materials with meticulous attention to detail',
      highlight: true
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: 'Warranty Protection',
      desc: 'Comprehensive 5-year warranty with dedicated customer support',
      highlight: false
    },
    {
      icon: <ShoppingCartOutlined />,
      title: 'Free Shipping',
      desc: 'Free worldwide delivery with carbon-neutral shipping options',
      highlight: true
    },
    {
      icon: <CustomerServiceOutlined />,
      title: '24/7 Support',
      desc: 'Round-the-clock expert support via chat, email, and phone',
      highlight: false
    },
  ];

      const steps = [
        {
            id: 1,
            image: 'https://i.postimg.cc/R33nspKd/african-american-man-paying-with-credit-card-online-while-making.png',
            title: 'Purchase Securely',
            description: 'Shop with confidence through our secure payment options.'
        },
        {
            id: 2,
            image: 'https://i.postimg.cc/kVVt1YKw/Mask.png',
            title: 'Ships From Warehouse',
            description: 'Your order ships directly from our warehouse, with fast and reliable delivery.'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/Y44mnDY3/Mask1.png',
            title: 'Style Your Room',
            description: 'Get inspired with expert design advice and furniture options.'
        }
    ];

  const teamMembers = [
    { img: people1, name: 'Samantha Tomoling', role: 'Creative Director' },
    { img: people2, name: 'John Manuel ', role: 'Head of Design' },
    { img: people3, name: 'Erika Marie Velasquez', role: 'Product Manager' },
    { img: people4, name: 'Shantel Salvador', role: 'Marketing Lead' },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <Layout style={{ minHeight: '100vh', background: '#faf6f2' }}>
      <div
        style={{
          position: 'relative',
          height: '30vh',
          minHeight: '500px',
          background: `url(${bgImage}) center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >

        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(255, 255, 255, 0.20)',   // Light overlay
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Title level={1} style={{ fontSize: '72px', color: '#5c4033', margin: 0 }}>
            About Us
          </Title>
          <Breadcrumb separator=">" style={{ marginTop: 20, fontSize: '18px' }}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* */}
      <div className="features-section">
        <Row gutter={[40, 40]} justify="center">
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <Title level={4} className="feature-title">{feature.title}</Title>
                <Paragraph className="feature-desc">{feature.desc}</Paragraph>
                {feature.highlight && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#b89b7e',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginTop: '15px'
                  }}>
                    <CheckOutlined style={{ marginRight: '8px' }} /> Most Popular
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* */}

      <div className="dream-section-container">
        <Row gutter={80} align="middle">
          <Col xs={24} lg={12}>
            <div className="image-layout">
              <div className="main-img">
                <img
                  src={imgGrid1}
                  alt="Luxury Living Room"
                />
                <div className="play-btn">
                  <svg width="90" height="90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="white" opacity="0.95" />
                    <polygon points="40,30 40,70 70,50" fill="#b89b7e" />
                  </svg>
                </div>
              </div>

              <div className="small-img top-right">
                <img src={imgGrid2} alt="Modern Furniture" />
              </div>

              <div className="small-img bottom-right">
                <img src={imgGrid3} alt="Elegant Interior" />
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={1} className="dream-title">
              We Help You Make Your<br />Dream Space a Reality
            </Title>

            <Paragraph className="dream-desc">
              Customize your space exactly the way you want. We've shared a few design ideas you can choose from, or you can bring your own unique concept — and we'll create it perfectly for you.
            </Paragraph>

            <div className="features-grid">
              <div className="feature">
                <Check size={22} color="#b89b7e" />
                <span>Personalized design consultations to suit your taste and space.</span>
              </div>
              <div className="feature">
                <Check size={22} color="#b89b7e" />
                <span>Handpicked, high-quality furniture built to last.</span>
              </div>
              <div className="feature">
                <Check size={22} color="#b89b7e" />
                <span>Expert guidance from planning to final setup.</span>
              </div>
              <div className="feature">
                <Check size={22} color="#b89b7e" />
                <span>Flexible options to fit any budget and style.</span>
              </div>
            </div>

            <Button
              size="large"
              className="explore-btn"
            >
              Explore
            </Button>
          </Col>
        </Row>
      </div>

        {/* --- Product Grid Section --- */}
      <div className="product-grid-section">
        <div className="product-grid-container">
          {products.map((product, index) => (
            <>
              {/* Image Block */}
              <div
                key={`img-${index}`}
                className="product-item-img"
              >
                <div className="product-img-inner"
                  style={{
                    height: '150px',
                    width: '80%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: product.imageBgColor,
                    borderRadius: '8px',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: '120%',
                      maxHeight: '120%',
                      objectFit: 'contain',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                </div>
              </div>

              {/* Text Block */}
              <div
                key={`text-${index}`}
                className="product-item-text"
                style={{
                  alignItems: 'flex-start'
                }}
              >
                <Title level={3} style={{
                  fontSize: '20px',
                  color: '#5C4033',
                  marginBottom: '10px',
                  fontWeight: '600'
                }}>
                  {product.title}
                </Title>

                <Paragraph style={{
                  color: '#5E4736',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '15px'
                }}>
                  {product.description}
                </Paragraph>

                <Button
                  type="text"
                  style={{
                    color: '#5E4736',
                    padding: '0',
                    height: 'auto',
                    fontWeight: '500',
                    fontSize: '14px',
                    alignSelf: 'flex-start',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'underline'
                  }}
                  icon={<ArrowRightOutlined style={{ marginLeft: '2px', fontSize: '12px' }} />}
                >
                  Read more
                </Button>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* --- How It Works Section --- */}
       <div className="how-it-works-container" style={{ padding: '80px 60px', backgroundColor: '#ffffff'}}>
            {/* Header */}
            <div style={{
                maxWidth: '80rem',
                margin: '0 auto 20px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '36px',
                    color: '#5C4033',
                    marginBottom: '16px',
                    fontWeight: 'bold'
                }}>
                    How It Works
                </h2>
                <p style={{
                    color: '#8C7A6B',
                    fontSize: '18px',
                    maxWidth: '900px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Simply explore our curated collections, select your favorite pieces, and we'll handle the rest.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="steps-container">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="step-card-modified"
                        style={{
                            position: 'relative',
                            textAlign: 'center'
                        }}
                    >
                        {/* Image Container */}
                        <div className="step-img-container" style={{
                            marginBottom: '30px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                            position: 'relative'
                        }}>
                            <img
                                src={step.image}
                                alt={step.title}
                                style={{
                                    width: '100%',
                                    height: '400px', 
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Number Badge */}
                        <div className="number-badge" style={{
                            position: 'absolute',
                            top: '360px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90px',
                            height: '90px',
                            backgroundColor: '#5E4736',
                            color: 'white',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '28px',
                            fontWeight: 'bold',
                            border: '15px solid white',
                            zIndex: 2
                        }}>
                            {step.id}
                        </div>

                        {/* Text Content */}
                        <div className="text-content" style={{ marginTop: '70px' }}>
                            <h3 style={{
                                fontSize: '24px',
                                color: '#5E4736',
                                marginBottom: '12px',
                                fontWeight: '700'
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                color: '#5E4736',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                maxWidth: '300px',
                                margin: '0 auto'
                            }}>
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      {/* */}
      <div className="team-section">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title level={2} className="team-title">Meet Our Creative Team</Title>
          <Paragraph className="team-desc">
            A passionate team of designers, craftsmen, and visionaries dedicated to creating
            furniture that tells a story and enhances your living experience
          </Paragraph>
        </div>

        <div className="team-carousel-container">
          <Carousel {...carouselSettings} className="team-carousel">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-member-img-container">
                  <img src={member.img} alt={member.name} className="team-member-img" />
                </div>
                <div className="team-member-name">{member.name}</div>
                <Text style={{
                  display: 'block',
                  color: '#8c7a6b',
                  marginTop: '10px',
                  fontSize: '15px',
                  fontStyle: 'italic'
                }}>
                  {member.role}
                </Text>
              </div>
            ))}
          </Carousel>
        </div>
      </div>


      <div className="functionality-section" ref={progressRef}>
        <div className="functionality-left">
          <Title level={2} className="functionality-title">Functionality</Title>
          <Title level={3} className="functionality-subtitle">meets perfection</Title>
          <Paragraph className="functionality-desc">
            We believe that great design should be both beautiful and practical. Our furniture
            combines innovative engineering with elegant aesthetics to create pieces that
            seamlessly integrate into your lifestyle while making a statement.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: '30px',
              background: 'linear-gradient(135deg, #5c4033, #8B4513)',
              border: 'none',
              height: '50px',
              padding: '0 40px',
              borderRadius: '25px',
              fontWeight: 600,
              fontSize: '16px'
            }}
            icon={<ArrowRightOutlined />}
          >
            Discover Our Process
          </Button>
        </div>

        <div className="functionality-right">
          <div className="progress-item">
            <div className="progress-label">
              <span>Design Innovation</span>
              <span className="progress-percent">92%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-fill"
                style={{
                  width: animatedProgress ? '92%' : '0%',
                  transitionDelay: '0.2s'
                }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Customer Satisfaction</span>
              <span className="progress-percent">98%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-fill"
                style={{
                  width: animatedProgress ? '98%' : '0%',
                  transitionDelay: '0.4s'
                }}
              />
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Sustainable Materials</span>
              <span className="progress-percent">87%</span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-fill"
                style={{
                  width: animatedProgress ? '87%' : '0%',
                  transitionDelay: '0.6s'
                }}
              />
            </div>
          </div>
        </div>
      </div>


      <div className="mailing-list-section">
        <Title level={2} className="mailing-title">Join Our Design Community</Title>
        <Paragraph className="mailing-desc">
          Be the first to receive exclusive design insights, new collection previews,
          and special offers curated for design enthusiasts
        </Paragraph>

        <div className="mailing-form-container">
          <form
            className="mailing-form"
            onSubmit={(e) => {
              e.preventDefault();
              message.success('Welcome to our design community!');
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="mailing-input"
              required
            />
            <button type="submit" className="mailing-btn">
              Subscribe <ArrowRightOutlined style={{ marginLeft: '8px' }} />
            </button>
          </form>
          <Paragraph style={{
            color: '#8c7a6b',
            fontSize: '14px',
            marginTop: '20px',
            opacity: 0.7
          }}>
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </Paragraph>
        </div>
      </div>


    </Layout>
  );
}

export default HeroSection;