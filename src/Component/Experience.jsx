import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import image from "../assets/texon.webp";
import javreact from "../assets/javareact.png"
import sql from "../assets/sql.png"

const Experience = () => {
    return (
        <>
            <div className='p-10 ' id='experience'>
                <div className="text-center ">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                        My Experience
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-5xl text-[#89b02d]">
                        ----- What I’ve Done ------
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={image} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Software Engineer I, Frontend</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>7EDGE | August 2022 – Present</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>7EDGE | August 2022 – Present</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Optimized UI performance, reducing page load times by 40% through code splitting, lazy loading, memoization, and minimizing
                                unnecessary re-renders in React
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Developed scalable and responsive web applications with a mobile-first approach, ensuring cross-device consistency using Tailwind
                                CSS, Material UI, and Bootstrap

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Implemented Redux for efficient state management, improving application performance, scalability, and maintainability
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Enhanced cross-browser compatibility across Chrome, Firefox, Safari, and Edge using feature detection, and CSS fallbacks, improving
                                accessibility.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Conducted unit and integration testing using Jest, React Testing Library, and Cypress, improving code reliability and reducing production
                                bugs by 30%.

                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Collaborated with UI/UX designers and backend developers to deliver pixel-perfect, high-quality applications.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Led performance optimizations, identifying and resolving bottlenecks using Lighthouse audits, Web Vitals, and lazy-loaded assets to
                                improve FCP and LCP scores
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Developed reusable, modular UI components by following Atomic Design principles, improving code reusability and maintainability.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Improved accessibility (A11Y) compliance by ensuring WCAG standards, enhancing usability for screen readers and keyboard navigation.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Collaborated closely with UI/UX designers, backend developers, and product managers to deliver high-quality, production-ready
                                applications.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Refactored legacy codebases, replacing class-based components with React Hooks and functional components for better maintainability
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Mentored junior developers, conducted thorough code reviews, and enforced React best practices
                                </span>
                            </li>
                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Optimized UI performance, reducing page load times by 40% through code splitting, lazy loading, memoization, and minimizing
                        unnecessary re-renders in React. 
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Developed scalable and responsive web applications with a mobile-first approach, ensuring cross-device consistency using Tailwind
                        CSS, Material UI, and Bootstrap.
                        </span>
                    </li>


                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Implemented Redux for efficient state management, improving application performance, scalability, and maintainability
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Enhanced cross-browser compatibility across Chrome, Firefox, Safari, and Edge using feature detection, and CSS fallbacks, improving
                        accessibility
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Conducted unit and integration testing using Jest, React Testing Library, and Cypress, improving code reliability and reducing production
                        bugs by 30%.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Led performance optimizations, identifying and resolving bottlenecks using Lighthouse audits, Web Vitals, and lazy-loaded assets to
                        improve FCP and LCP scores
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Developed reusable, modular UI components by following Atomic Design principles, improving code reusability and maintainability.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Improved accessibility (A11Y) compliance by ensuring WCAG standards, enhancing usability for screen readers and keyboard navigation.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Collaborated closely with UI/UX designers, backend developers, and product managers to deliver high-quality, production-ready
                        applications
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Refactored legacy codebases, replacing class-based components with React Hooks and functional components for better maintainability.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Mentored junior developers, conducted thorough code reviews, and enforced React best practices.
                        </span>
                    </li>
                </ul>
            </div>

            {/* // second section */}
            <div className='p-10 ' id='experience'>
                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={javreact} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Java Full Stack development - Internship</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>TECHSHRESHTA | August 2023 – September 2023</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>TECHSHRESHTA | August 2023 – September 2023</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                    Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                                </span>
                            </li>

                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Hands-on Full Stack Development: Gained experience in Java, Spring Boot, MySQL, and React.js, working on both frontend and backend development.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Real-World Project Exposure: Participated in end-to-end development, including database management, API integration, and UI design.
                        </span>
                    </li>



                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Skill Enhancement & Learning: Improved problem-solving, debugging, and performance optimization skills under industry professionals.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                            Professional Development: Engaged in team collaboration, code reviews, and personality development to enhance communication and adaptability.
                        </span>
                    </li>
                </ul>
            </div>
            {/* 3rd section */}
            <div className='p-10 ' id='experience'>
                <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10 lg:my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center  lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={sql} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt="Texon Logo" />
                    </div>
                    <div className='w-full md:w-3/4  lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>Java & SQL - Internship</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>QSPIDERS | june 2023 – july 2023</h2>

                        <h2 className='my-2 lg:hidden md:hidden text-lg'>QSPIDERS | june 2023 – july 2023</h2>

                        {/* for large device  */}
                        <ul className='list-disc hidden lg:block mt-5 md:ml-5 space-y-3  md:pl-5'>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Java & OOP Concepts: Gained expertise in Core Java, OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction), and Exception Handling.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                SQL & Database Management: Learned SQL fundamentals, relational models, normalization, and writing queries using Joins, Subqueries, and Constraints.

                                </span>
                            </li>


                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Hands-on Project Development: Developed Core Java projects implementing OOP principles and Collection Framework.
                                </span>
                            </li>
                            <li className='flex items-start gap-3 leading-relaxed'>
                                <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                    <FiCheckCircle className="text-[#89b02d]" />
                                </div>
                                <span className='flex-grow'>
                                Practical SQL Implementation: Worked with SQL commands (DDL, DML, TCL, DCL, DQL), creating tables, inserting records, and handling data efficiently.
                                </span>
                            </li>

                        </ul>



                    </div>
                </div>
                <ul className='list-disc  lg:hidden  space-y-3  md:pl-5'>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Java & OOP Concepts: Gained expertise in Core Java, OOP principles (Encapsulation, Inheritance, Polymorphism, Abstraction), and Exception Handling.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        SQL & Database Management: Learned SQL fundamentals, relational models, normalization, and writing queries using Joins, Subqueries, and Constraints.
                        </span>
                    </li>



                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Hands-on Project Development: Developed Core Java projects implementing OOP principles and Collection Framework.
                        </span>
                    </li>
                    <li className='flex items-center gap-3 leading-relaxed'>
                        <div className='w-5 h-5 flex-shrink-0'>
                            <FiCheckCircle className="text-[#89b02d]" />
                        </div>
                        <span className='flex-grow'>
                        Practical SQL Implementation: Worked with SQL commands (DDL, DML, TCL, DCL, DQL), creating tables, inserting records, and handling data efficiently.
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Experience;
