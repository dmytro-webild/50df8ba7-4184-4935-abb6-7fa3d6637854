"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#features"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Results",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/mobility-creativity-concept-smartphone-screen_53876-94842.jpg"
      logoAlt="Blueline Solutions Logo"
      brandName="Blueline Solutions"
      bottomLeftText="Innovation Driven"
      bottomRightText="solutions@blueline.com.vn"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="HOLOCRAFTLABS "
      description="Revolutionizing businesses with innovative software solutions and driving digital transformation for sustainable growth."
      buttons={[
        {
          text: "Explore Our Services",          href: "#features"},
        {
          text: "Get a Free Consultation",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blue-abstract-shape-glowing-grainy-textured_474888-8017.jpg",          imageAlt: "Modern software dashboard"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/engineer-wearing-vr-headset-data-center-installing-software_482257-116005.jpg?id=414767117",          imageAlt: "Dynamic server room"},
        {
          imageSrc: "https://img.b2bpic.net/premium-photo/attractive-businesswoman-with-vr-glasses-pointing-abstract-creative-coding-programming-hologram-blurry-interior-background-science-technology-software-concept-double-exposure_670147-19953.jpg?id=35289128",          imageAlt: "Team of software developers collaborating"},
        {
          imageSrc: "https://img.b2bpic.net/premium-photo/hand-man-who-can-control-information-technology-he-can-hold-world-business-success-internet-technology-concept_112554-883.jpg?id=26459936",          imageAlt: "Tablet displaying a mobile application"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dropbox-icon-line-icon-connection-circuit-board_1379-896.jpg",          imageAlt: "Abstract data flow visualization"},
        {
          imageSrc: "https://img.b2bpic.net/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?id=13463111",          imageAlt: "Overhead view of a smart city"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Partner in Digital Excellence"
      description="Blueline Solutions Vinh is dedicated to empowering businesses through cutting-edge technology and tailored software development. We combine deep industry expertise with innovative approaches to deliver solutions that drive efficiency, growth, and competitive advantage. Our commitment to quality and client success is at the core of everything we do."
      tag="About Us"
      buttons={[
        {
          text: "Learn More"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/security-cloud_1048-2442.jpg"
      imageAlt="Sleek server rack with blue ambient lighting"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Custom Software Development",          tags: [
            "Tailored",            "Scalable",            "Innovative"],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-engineer-using-tablet-sustainable-data-center-implementing-green-technologies-it_482257-132419.jpg",          imageAlt: "Code transforming into user interface"},
        {
          id: "f2",          title: "Cloud Solutions & Migration",          tags: [
            "Secure",            "Flexible",            "Efficient"],
          imageSrc: "http://img.b2bpic.net/free-photo/cloud-system-tablet-background-smart-technology-remixed-media_53876-124705.jpg",          imageAlt: "Cloud infrastructure visualization"},
        {
          id: "f3",          title: "Data Analytics & AI Integration",          tags: [
            "Insightful",            "Predictive",            "Automated"],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-background_1048-8572.jpg",          imageAlt: "Abstract data analytics visualization"},
        {
          id: "f4",          title: "Mobile App Development",          tags: [
            "Native",            "Cross-platform",            "Engaging"],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hands-holding-post-its_23-2149930951.jpg",          imageAlt: "Sleek mobile app interface"},
        {
          id: "f5",          title: "Cybersecurity & IT Consulting",          tags: [
            "Protected",            "Compliant",            "Strategic"],
          imageSrc: "http://img.b2bpic.net/free-photo/server-room-coworkers-using-artificial-intelligence-laptop-tablet_482257-122618.jpg",          imageAlt: "Cybersecurity dashboard"},
        {
          id: "f6",          title: "UI/UX Design & Consulting",          tags: [
            "Intuitive",            "Engaging",            "User-centric"],
          imageSrc: "http://img.b2bpic.net/free-photo/innovation-technology-be-creative-futuristic-concept_53876-133718.jpg",          imageAlt: "Software dashboard with UI elements"},
      ]}
      title="Unlock Your Business Potential with Our Services"
      description="Our comprehensive suite of services is designed to address your unique business challenges and drive unparalleled success in the digital era."
      tag="Our Services"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Blueline Solutions",          name: "Enterprise Suite Pro",          price: "$299/month",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/business-man-seated-home-office-space-looking-report_1423-244.jpg",          imageAlt: "ERP System Dashboard"},
        {
          id: "p2",          brand: "Blueline Solutions",          name: "Connect CRM Advanced",          price: "$99/month",          rating: 4.8,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/customer-relationship-management-concept_23-2150038403.jpg",          imageAlt: "CRM Mobile App"},
        {
          id: "p3",          brand: "Blueline Solutions",          name: "ProjectFlow Manager",          price: "$49/month",          rating: 4.9,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/assemble-manufacturing-production-business-pattern_53876-124677.jpg",          imageAlt: "Project Management Software"},
        {
          id: "p4",          brand: "Blueline Solutions",          name: "RetailNet E-commerce",          price: "$149/month",          rating: 4.7,
          reviewCount: "70",          imageSrc: "http://img.b2bpic.net/free-photo/online-payment-purchase-e-commerce-buy-icon_53876-133903.jpg",          imageAlt: "E-commerce Platform Backend"},
        {
          id: "p5",          brand: "Blueline Solutions",          name: "InsightAI Analytics",          price: "$199/month",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/data-center-engineers-uses-artificial-intelligence-identify-hardware-failures_482257-124129.jpg",          imageAlt: "AI-powered Data Analytics Platform"},
        {
          id: "p6",          brand: "Blueline Solutions",          name: "Guardian Secure",          price: "$79/month",          rating: 4.9,
          reviewCount: "110",          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",          imageAlt: "Cybersecurity Dashboard"},
      ]}
      title="Our Flagship Software Solutions"
      description="Explore our portfolio of cutting-edge products designed to streamline operations, enhance decision-making, and accelerate your business growth."
      tag="Our Products"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          icon: CheckCircle,
          title: "Projects Completed",          value: "300+"},
        {
          id: "m2",          icon: Users,
          title: "Satisfied Clients",          value: "200+"},
        {
          id: "m3",          icon: TrendingUp,
          title: "Average ROI Increase",          value: "25%"},
        {
          id: "m4",          icon: Award,
          title: "Years in Business",          value: "5+"},
      ]}
      title="Proven Results, Tangible Growth"
      description="Our dedication to excellence and client success is reflected in the measurable outcomes we achieve, fostering long-term partnerships and impactful solutions."
      tag="Our Impact"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Nhat Toan
",          handle: "@NB_CEO",          testimonial: "Holocraft Labs not only delivers exceptional software but also fosters a dynamic and inspiring work environment. Their commitment to quality and innovation is truly commendable, and we've seen significant improvements.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-office-center_1303-19604.jpg",          imageAlt: "Thuy Nguyen Ba, CEO"},
        {
          id: "t2",          name: "Minhchi Phanba",          handle: "@MinhchiP_CTO",          testimonial: "Holocraft Labs consistently delivers high-quality products with a team that is professional, friendly, and collaborative. They truly understand client needs and exceed expectations in every project.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-engineer-solar-panels-plant-reading-documentation_482257-120499.jpg",          imageAlt: "Minhchi Phanba, CTO"},
        {
          id: "t3",          name: "Đức Dương",          handle: "@DucD_PM",          testimonial: "Choosing Holocraft Labs was one of our best decisions. Their team is dedicated, and the solutions provided are meticulously crafted and highly effective, driving real business value.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-black-suit-using-tablet-smiles_23-2148401471.jpg",          imageAlt: "Đức Dương, Project Manager"},
        {
          id: "t4",          name: "Sarah Johnson",          handle: "@SarahJ_Mkt",          testimonial: "The custom software developed by Holocraft Labs has significantly streamlined our marketing operations, giving us a powerful edge in a competitive market. Their expertise is unmatched.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg",          imageAlt: "Sarah Johnson, Marketing Director"},
        {
          id: "t5",          name: "Michael Chen",          handle: "@MichaelC_Founder",          testimonial: "As a startup founder, I needed a reliable tech partner, and Holocraft Labs delivered beyond my expectations. Their agile approach and innovative solutions are truly exceptional.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-successful-middle-aged-business-leader_1262-5690.jpg",          imageAlt: "Michael Chen, Founder"},
        {
          id: "t6",          name: "Emily Rodriguez",          handle: "@EmilyR_IT",          testimonial: "Their IT consulting services were invaluable in optimizing our infrastructure. Holocraft Labs provided strategic insights and robust solutions that greatly improved our system performance.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/octogenarian-engineer-crypto-mining-farm-with-specialized-server-racks-using-blockchain-technology-fintech-expert-inspecting-asic-racks-solving-complex-computational-operations-data-center_482257-70453.jpg",          imageAlt: "Emily Rodriguez, IT Director"},
      ]}
      showRating={true}
      title="Trusted by Industry Leaders"
      description="Hear directly from our clients about how Holocraft Labs has transformed their operations and helped them achieve their strategic goals."
      tag="Client Success Stories"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateX",        "DataStream Analytics",        "CloudGen Systems",        "Nexus Networks",        "Synthetica AI",        "SecureVault Tech",        "Quantum Leap Innovations"]}
      title="Our Valued Partners & Clients"
      description="We are proud to partner with leading organizations across various industries, collaborating to build innovative solutions and drive collective success."
      tag="Trusted by"
      speed={60}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "What types of software solutions do you develop?",          content: "We specialize in custom software development, including web and mobile applications, enterprise resource planning (ERP) systems, customer relationship management (CRM) software, and AI-powered platforms tailored to your specific business needs."},
        {
          id: "q2",          title: "What is your software development process?",          content: "Our process typically involves discovery and planning, UI/UX design, agile development sprints, rigorous testing, deployment, and ongoing support. We prioritize transparency and collaboration at every stage."},
        {
          id: "q3",          title: "How do you ensure data security and privacy?",          content: "Data security and privacy are paramount. We implement industry-leading encryption protocols, secure coding practices, regular security audits, and adhere to relevant compliance standards to protect your sensitive information."},
        {
          id: "q4",          title: "Do you offer post-launch support and maintenance?",          content: "Yes, we provide comprehensive post-launch support and maintenance packages. This includes bug fixes, performance monitoring, updates, and ongoing enhancements to ensure your software remains robust and up-to-date."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-handsome-man-walking-evening-outside-street_1303-17048.jpg"
      imageAlt="Stylized chatbot interface"
      mediaAnimation="slide-up"
      title="Your Questions, Answered"
      description="Find quick answers to the most common questions about our software development services, processes, and support."
      tag="FAQ"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Contact Us"
      title="Ready to Transform Your Business?"
      description="Let's discuss your next big idea and how Blueline Solutions Vinh can help bring it to life with our innovative software solutions."
      buttons={[
        {
          text: "Get in Touch",          href: "mailto:solutions@blueline.com.vn"},
        {
          text: "Call Us",          href: "tel:+84904723257"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      videoSrc="https://img.b2bpic.net/free-photo/modern-business-building-scenery-touching-sky_181624-5785.jpg?id=8753338"
      videoAriaLabel="Abstract digital network animation"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLIrCg6b9RWobHQYPdVhadyGxG/uploaded-1780310908027-2fp4j6vw.png"
      logoAlt="Blueline Solutions Logo"
      logoText="Blueline Solutions"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#features"},
            {
              label: "Products",              href: "#products"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Solutions",          items: [
            {
              label: "Custom Software",              href: "#features"},
            {
              label: "Cloud Integration",              href: "#features"},
            {
              label: "Data Analytics",              href: "#features"},
            {
              label: "Mobile Development",              href: "#features"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2026 Holocraft Labs. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
