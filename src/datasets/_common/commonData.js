const commonData = {
    "navData": [
        { navItem: 'HOME', link: '/' },
        { navItem: 'ABOUT US', link: '/about-us' },
        { navItem: 'INDUSTRIES', link: '/industries' , dropdowns: [
            { navItem: 'Industry 1', link: '/industries/service-1' },
            { navItem: 'Industry 2', link: '/industries/service-2' },
            { navItem: 'Industry 3', link: '/industries/service-3' }
        ] },
        {
            navItem: 'SERVICES', link: '/services', dropdowns: [
                { navItem: 'Service 1', link: '/services/service-1' },
                { navItem: 'Service 2', link: '/services/service-2' },
                { navItem: 'Service 3', link: '/services/service-3' }
            ]
        },
        { navItem: 'CONTACT US', link: '/contact-us' },
    ],
    "testimonialData": {
        "title": "Testimonials",
        "subtitle": "What our clients have to say",
        "backgroundImage": "/image/service-banner.webp",
        "contents": [
            {
                "content": "Working with Alphatech was a game-changer for our business! Their team's expertise and dedication helped us achieve our goals faster than we ever imagined.",
                "author": " Jason Smith",
                "position": "CEO, Talent IT Solutions"
            },
            {
                "content": "I can't recommend Alphatech enough! From start to finish, their professionalism and attention to detail were top-notch. They truly went above and beyond to exceed our expectations.",
                "author": " Jane Thomas ",
                "position": ""
            },
            {
                "content": "Alphatech has been an invaluable partner for us. Their innovative solutions and exceptional customer service have made a significant impact on our bottom line. We look forward to continuing our partnership for years to come.",
                "author": "Michael Johnson,",
                "position": "COO, LMN Enterprises"
            },
            {
                "content": "Choosing Alphatech was one of the best decisions we made for our business. Their team not only delivered results but also provided invaluable guidance every step of the way. We couldn't be happier with the outcome!",
                "author": "Sarah Brown",
                "position": "Marketing Manager, DEF Inc."
            }
        ]
    },
    "faqData": {
        title: "F. A. Q",
        subtitle: "Frequently Asked Questions",
        contents: [
            {
                "question": "What types of IT services do you offer?",
                "answer": "We offer a wide range of IT services including software development, IT consulting, cloud computing, cybersecurity services, data management, and analytics. Our comprehensive IT solutions are designed to meet the diverse needs of businesses across various industries."
            },
            {
                "question": "How can your IT services benefit my business?",
                "answer": "Our IT services can benefit your business by enhancing efficiency, improving security, and driving innovation. By leveraging our expertise in technology, we help businesses streamline their operations, protect their digital assets, and stay competitive in the market."
            },
            {
                "question": "What is included in your cybersecurity services?",
                "answer": "Our cybersecurity services include threat detection and prevention, incident response and recovery, vulnerability assessments, penetration testing, and compliance management. We aim to protect your business from cyber threats and ensure the security of your data and systems."
            },
            {
                "question": "Can you provide customized software solutions?",
                "answer": "Yes, we specialize in providing customized software solutions tailored to your specific business needs. Our team of experienced developers works closely with you to understand your requirements and deliver software that enhances your business processes and performance."
            },
            {
                "question": "What are the advantages of using cloud computing services?",
                "answer": "Cloud computing services offer several advantages including scalability, cost savings, flexibility, and enhanced collaboration. By using our cloud services, you can easily scale your IT resources up or down based on your needs, reduce infrastructure costs, and improve accessibility and collaboration among your teams."
            },
            {
                "question": "How do you ensure data security and compliance?",
                "answer": "We ensure data security and compliance by implementing robust security measures and following industry best practices. Our data management services include encryption, access controls, regular security audits, and compliance with relevant regulations such as GDPR and HIPAA."
            },
            {
                "question": "What is your approach to IT consulting?",
                "answer": "Our IT consulting approach involves understanding your business goals and challenges, assessing your current IT infrastructure, and providing strategic recommendations to optimize your technology investments. We work with you to develop and implement IT strategies that align with your business objectives."
            },
            {
                "question": "How do your data management and analytics services work?",
                "answer": "Our data management and analytics services include data collection, storage, cleaning, preparation, analysis, and visualization. We use advanced tools and techniques to transform your data into actionable insights, helping you make informed decisions and drive business growth."
            }
        ]
    },
    "footerData": {
        "icon": "/logo/logo.png",
        "title": "Let our expert recruiters bring the right talent your way- connect with us today!",
        "social": [
            {
                "icon": "fab fa-facebook",
                "link": "https://www.facebook.com"
            },
            {
                "icon": "fab fa-twitter",
                "link": "https://www.twitter.com"
            },
            {
                "icon": "fab fa-linkedin",
                "link": "https://www.linkedin.com"
            },
            {
                "icon": "fab fa-instagram",
                "link": "https://www.instagram.com"
            },
            {
                "icon": "fab fa-youtube",
                "link": "https://www.youtube.com"
            }
        ],
        "links": [
            // {
            //     "title": "Important Links",
            //     "links": [
            //         {
            //             "value": "Top RPO Companies in World",
            //             "link": "#"
            //         },
            //         {
            //             "value": "Best IT Recruiters in USA",
            //             "link": "#"
            //         },
            //         {
            //             "value": "Best Non-IT Recruiter in USA",
            //             "link": "#"
            //         },
            //         {
            //             "value": "Recruitment Process in USA",
            //             "link": "#"
            //         },
            //         {
            //             "value": "Best RPO Services in USA",
            //             "link": "#"
            //         },
            //         {
            //             "value": "Top RPO Agency in USA",
            //             "link": "#"
            //         }
            //     ],
            // },
            {
                "title": "About Company",
                "links": [
                    {
                        "value": "About Us",
                        "link": "#"
                    },
                    {
                        "value": "Leadership",
                        "link": "#"
                    },
                    {
                        "value": "Careers",
                        "link": "#"
                    },
                    {
                        "value": "News & Articles",
                        "link": "#"
                    },
                    {
                        "value": "Privacy Policy",
                        "link": "#"
                    }
                ],
            },
            {
                "title": "Get In Touch",
                "links": [
                    {
                        "icon": "fas fa-envelope",
                        "text": "info@alphatechinnovation.com",
                        "link": "mailto:info@govanator.com"
                    },
                    {
                        "icon": "fas fa-phone",
                        "text": "india: +91 80830 53457",
                        "link": "tel:+91032202294"
                    },
                    {
                        "icon": "fas fa-location",
                        "text": "2260 Whitney Ave, Hamden, CT 06518, US",
                        "link": "#"
                    },
                    {
                        "icon": "fas fa-location",
                        "text": "Delivery Address: H-157, Ground Floor, Sector 63, Noida, Uttar Pradesh 201301",
                        "link": "#"
                    }
                ],
            },
        ],
        "copyright": "Copyright © 2024 Alphatech Innovation, All rights reserved."
    },
}

export default commonData