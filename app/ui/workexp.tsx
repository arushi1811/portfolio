import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import me from "./memoji.svg";

function Checkbox() {
  return (
    <svg
      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
}

export function Workexp() {
  const data = [
    {
      title: "April 2018",
      content: (
        <div >
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Orana Hotels & Resorts
          </p>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <Checkbox />
              Designed and developed a Property Management System using the MERN
              stack.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Translated UX wireframes into a React web application for desktop,
              mobile, and tablets.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Deployed the application using a CI/CD pipeline with Github
              Actions, AWS CodeBuild, AWS S3, and AWS Cloudfront.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Implemented testing with Jest and Enzyme to ensure
              production-ready code.
            </li>
          </ul>
          <h1 className="mb-4 text-lg font-bold text-gray-900 dark:text-white md:text-xl lg:text-2xl flex items-center pt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Tech Stack:{"  "}
              <span className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                React | TypeScript | AWS | MaterialUI | MERN
              </span>
            </span>
          </h1>
        </div>
      ),
    },
    {
      title: "May 2020",
      content: (
        <div>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            NBC
          </p>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <Checkbox />
              Migrated core applications to the React/GraphQL stack as part of
              the web engineering team.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Converted report files from Excel to JSON format and integrated
              them into the UI.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Developed ReactJS applications for customer-facing software using
              modern JavaScript techniques and responsive design methodologies.
            </li>
            <li className="flex items-center">
              <Checkbox />
              Developed customized CSS frameworks with SCSS code and created
              SCSS for hover effects and trigger functionalities using
              pseudo-classes and pseudo-elements.
            </li>
          </ul>
          <h1 className="mb-4 text-lg font-bold text-gray-900 dark:text-white md:text-xl lg:text-2xl flex items-center pt-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              Tech Stack:{"  "}
              <span className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                React | TypeScript | SCSS | SheetJS
              </span>
            </span>
          </h1>
        </div>
      ),
    },
    {
      title: "October 2021",
      content: (
        <div >
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          JP Morgan Chase & Co.
        </p>
        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
          <li className="flex items-center">
            <Checkbox />
            Part of the web engineering team to create a foreign exchange trading application to replace a legacy application in an 
            Agile setting. 
          </li>
          <li className="flex items-center">
            <Checkbox />
            Built reusable components using Material-UI including complex dashboards, full-page layouts, and data grids (AG Grid) 
            based on atomic-design principles. 
          </li>
          <li className="flex items-center">
            <Checkbox />
            Responsible for architecting complex full-stack solutions for business requirements and coordinating requirements with 
            backend and design teams. 
          </li>
          <li className="flex items-center">
            <Checkbox />
            Developed APIs in Java and delivered full-stack features based on business requirements. 
          </li>
          <li className="flex items-center">
            <Checkbox />
            Internalized the entire application using the FBT library and created scripts for parsing and updating translations. 
          </li>
          <li className="flex items-center">
            <Checkbox />
            Implemented unit-tests using Jest and integration tests using Playwright.
          </li>
        </ul>
        <h1 className="mb-4 text-lg font-bold text-gray-900 dark:text-white md:text-xl lg:text-2xl flex items-center pt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Tech Stack:{"  "}
            <span className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              React | TypeScript | MaterialUI | AG Grid | Java | Playwright | Jest
            </span>
          </span>
        </h1>
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
