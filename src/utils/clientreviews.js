import React from "react";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - rating < 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return stars;
};
const ClientReviews = () => {
  const clientReviews = [
    {
      clientName: "Tech Corp",
      projectTitle: "Web Development",
      projectOutcome:
        "Delivered a responsive and modern web application that increased user engagement by 40%.",
      reviewText:
        "Zidio went above and beyond to deliver an amazing web platform for us. Highly recommended!",
      rating: 5,
      caseStudyUrl: "https://www.infront.com/web-development-case-studies/",
    },
    {
      clientName: "Innova Solutions",
      projectTitle: "Mobile App Development",
      projectOutcome:
        "Created a feature-rich mobile app that reduced operational costs by 30%.",
      reviewText:
        "Working with Zidio was a pleasure. The mobile app has exceeded our expectations!",
      rating: 4,
      caseStudyUrl:
        "https://saigontechnology.com/case-studies/mobile-app-development",
    },
    {
      clientName: "GreenTech Enterprises",
      projectTitle: "SaaS Platform Development",
      projectOutcome:
        "Launched a scalable SaaS platform that increased customer acquisition by 25%.",
      reviewText:
        "The Zidio team was incredibly professional and delivered the project on time. We are very satisfied!",
      rating: 5,
      caseStudyUrl:
        "https://www.contentbeta.com/saas-growth-3-simple-case-study-examples-to-inspire-you/",
    },
    {
      clientName: "Future Ventures",
      projectTitle: "E-commerce Solution",
      projectOutcome:
        "Developed an e-commerce website that boosted sales by 50% within the first three months.",
      reviewText:
        "Zidio provided us with an innovative solution that perfectly fits our needs. Excellent work!",
      rating: 5,
      caseStudyUrl: "https://wisepops.com/blog/ecommerce-case-studies",
    },
    {
      clientName: "Digital Media Co.",
      projectTitle: "Custom CMS Development",
      projectOutcome:
        "Created a custom CMS that improved content management efficiency by 60%.",
      reviewText:
        "Their attention to detail and understanding of our requirements were impressive. The CMS is easy to use and effective.",
      rating: 4,
      caseStudyUrl: "https://www.dnnsoftware.com/resources/case-studies",
    },
    {
      clientName: "Eco Logistics",
      projectTitle: "Logistics Tracking System",
      projectOutcome:
        "Developed a tracking system that streamlined our logistics operations, improving delivery time by 20%.",
      reviewText:
        "Zidio delivered a robust solution that helped us optimize our processes. Highly recommended!",
      rating: 5,
      caseStudyUrl:
        "https://www.weblineindia.com/case-studies/truck-logistics-tracking-service/",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <div className="flex justify-between my-[-20px]">
        <h2 className="text-4xl font-bold mb-16 text-center ">
          Client Reviews & Case Studies
        </h2>
        <img className="size-32 my-[-60px]" src="https://png.pngtree.com/png-vector/20221118/ourmid/pngtree-vector-icon-concept-for-customer-reviews-ratings-and-user-feedback-depicted-in-a-flat-illustration-against-a-white-background-vector-png-image_41028674.jpg" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-9 lg:grid-cols-3 gap-8  ">
        {clientReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg  rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:bg-yellow-50"
          >
            <h3 className="text-xl font-semibold mb-2">
              {review.projectTitle}
            </h3>
            <p className="text-sm text-gray-500">Client: {review.clientName}</p>
            <p className="mt-4 text-gray-600">{review.projectOutcome}</p>
            <p className="mt-2 text-gray-800">"{review.reviewText}"</p>
            <div className="mt-4 flex items-center">
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            {review.caseStudyUrl && (
              <a
                href={review.caseStudyUrl}
                className="mt-4 block text-blue-500 hover:underline"
              >
                Read Full Case Study
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
