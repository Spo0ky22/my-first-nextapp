export const SIGNS = ['Data Science', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning', 'Productivity', 'Politics']

export const CATEGORIES = ['Web前端', '服务端', '其他']

export const ART_LIST = [
  {
    title: 'When a Programmer Reaches His 40, What Kind of Work He Can Do',
    avatar: 'https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1368902%2F05836273-390f-4ff6-8c41-bfb424e2c3d7.png',
    author: 'Josef Cruz',
    publish: 'JavaScript in Plan English',
    date: 'Feb 28, 2024',
    watch: 36000,
    like: 1100,
    comment: 83,
    picture: 'https://res.cloudinary.com/practicaldev/image/fetch/s--vvhtfRGd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://coderblog.net/me-images/0%2A6cwDHSEDenyIdtXj',
    content: `First about all, outside about about 30, you are forced toward take a job called System Engineer, which is mainly applicable inside program factories and can hardly be called an engineer.\n
    We do not do coding or design but rather listen toward customers, manage project progress, outsource, manage budgets and man- hours, estimate, and make various arrangements.\n
    In other words, he is the on - site supervisor and arranger.\n
    In program factories, it seems these System engineers are called engineers, but that’s aside. You are usually promoted toward a management position as you get older, upward toward 50—a section chief or department head. Even if you are not very good at it, you will probably be able toward become a supervisor. And instead about technology, I am made toward manage my subordinates' attendance.\n
    In program factories’s seniority-based salary system, wages increase along with age, so this is the only course available. They become section managers inside their 40s, department managers inside their 50s, managers inside their 60s, become executives or work as managers, and then retire.\n
    If you stubbornly refuse this promotion course, what will happen if you work during a major company is that you will be transferred toward a subsidiary. In small and medium-sized businesses, you must choose between becoming a manager and outsourcing management or being dispatched yourself.\n
    If you don’t want toward be inside a managerial position, don’t want outsourced management, or don’t like being dispatched, you have no choice but toward quit the company. I can’t continue working as an office worker.\n
    So, how can you continue toward work as a programmer even at 50? First, you need toward have a specialized field and become a specialist.\n
    This could be a particular technology, a methodology, or even a niche area of the industry that you are passionate about.\n
    Staying updated with the latest trends and continuously learning is crucial.\n
    Networking with other professionals and attending industry events can also help you stay relevant and open up new opportunities.\n
    Transitioning into consulting, freelancing, or even starting your own business can be viable options.\n
    The key is to remain adaptable and open to change, leveraging your experience and expertise to stay valuable in the industry.\n
    Thank you for reading this post!`,
    tags: ['CSS', 'HTML'],
  },
  {
    title: 'Understanding JavaScript Closures',
    avatar: 'https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F605978%2F60384c72-76a2-4ce6-8e48-af8d6a520661.jpeg',
    author: 'Sara Jones',
    publish: 'JavaScript Daily',
    date: 'Mar 12, 2024',
    watch: 45000,
    like: 2300,
    comment: 110,
    picture: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fk0vurkahspzxqlnps9v0.png',
    content: `Closures are a fundamental concept in JavaScript. They allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared.\n
    Closures are created whenever a function is created. They are used extensively in JavaScript for various tasks, including implementing private variables and functions, and for creating function factories.\n
    Let's explore how closures work and how to use them effectively in JavaScript.\n
    A closure is a combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.\n
    Closures are powerful because they allow a function to have "private" variables, they enable data encapsulation, and they can be used to create factory functions that generate new functions with their own enclosed environment.\n
    Here's an example to illustrate closures:\n
    \`\`\`javascript
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        }
    }
    
    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    \`\`\`
    In this example, the \`count\` variable is enclosed within the returned function, creating a closure that retains access to \`count\` even after \`createCounter\` has finished executing.\n
    Understanding and mastering closures is essential for any JavaScript developer, as they are a core part of the language's design and are used in many advanced patterns and libraries.\n
    Thank you for reading this post!`,
    tags: ['JavaScript', 'Closures'],
  },
  {
    title: "A Beginner's Guide to React Hooks",
    avatar: 'https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F784473%2F1770dea2-974d-4565-983b-8d4975713aa3.png',
    author: 'Emily White',
    publish: 'React Community',
    date: 'Apr 10, 2024',
    watch: 52000,
    like: 3400,
    comment: 150,
    picture: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fabmnnwl2a9fezo1avq17.png',
    content: `React Hooks provide a powerful and expressive way to manage state and side effects in functional components. Introduced in React 16.8, hooks allow you to use state and other React features without writing a class.\n
    In this guide, we'll cover the basics of React Hooks and how to use them effectively in your projects.\n
    The most commonly used hooks are \`useState\` and \`useEffect\`.\n
    \`useState\` allows you to add state to functional components. Here's an example:\n
    \`\`\`javascript
    import React, { useState } from 'react';

    function Counter() {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        );
    }
    \`\`\`
    \`useEffect\` is used for performing side effects in function components. It's similar to \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` in class components.\n
    Here's an example of using \`useEffect\` to fetch data:\n
    \`\`\`javascript
    import React, { useState, useEffect } from 'react';

    function DataFetcher() {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch('https://api.example.com/data')
                .then(response => response.json())
                .then(data => setData(data));
        }, []);

        return (
            <div>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
            </div>
        );
    }
    \`\`\`
    React also provides other hooks like \`useContext\`, \`useReducer\`, and \`useRef\` for handling context, complex state logic, and referencing DOM elements respectively.\n
    Understanding and using hooks effectively can greatly enhance your ability to write clean, functional React components.\n
    Thank you for reading this post!`,
    tags: ['React', 'Hooks'],
  },
  {
    title: 'Exploring the Future of Web Development',
    avatar: 'https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F194876%2Fd6e7cdc4-820c-4732-bb0f-24b9c2bd3f5f.jpeg',
    author: 'Michael Brown',
    publish: 'Web Dev Trends',
    date: 'May 5, 2024',
    watch: 61000,
    like: 4200,
    comment: 200,
    picture: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9n6jpty8crhdn5citdco.jpeg',
    content: `Web development is an ever-evolving field with new technologies and trends emerging every year. Staying updated with these trends is crucial for developers who want to remain relevant and competitive in the industry.\n
    In this article, we'll explore the future of web development and what trends to watch out for in the coming years.\n
    One significant trend is the rise of Progressive Web Apps (PWAs). PWAs combine the best of web and mobile apps, providing a seamless experience for users. They are fast, reliable, and can work offline, making them a great option for businesses looking to improve user engagement.\n
    Another trend is the increasing use of Artificial Intelligence (AI) and Machine Learning (ML) in web development. AI and ML can be used to create more personalized user experiences, improve search functionality, and automate various tasks. For example, chatbots powered by AI can provide instant customer support, enhancing the user experience.\n
    The adoption of serverless architecture is also on the rise. Serverless computing allows developers to build and run applications without having to manage servers. This can lead to reduced costs, increased scalability, and faster time to market.\n
    WebAssembly (Wasm) is another technology that is gaining traction. Wasm allows developers to run high-performance applications on the web, opening up new possibilities for complex applications like video editing, 3D rendering, and games.\n
    Lastly, the importance of web performance and accessibility cannot be overstated. As users expect faster and more accessible websites, developers must prioritize optimizing their sites for speed and ensuring they are accessible to all users, including those with disabilities.\n
    The future of web development is exciting, with many new technologies and trends shaping the industry. By staying informed and continuously learning, developers can stay ahead of the curve and build innovative, user-friendly applications.\n
    Thank you for reading this post!`,
    tags: ['Web Development', 'Future'],
  },
  {
    title: 'Mastering CSS Grid Layout',
    avatar: 'https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F690534%2F3e6164cf-a0e6-49ad-b091-108b38cb7f23.png',
    author: 'Anna Smith',
    publish: 'CSS Tricks',
    date: 'Jun 2, 2024',
    watch: 48000,
    like: 3100,
    comment: 170,
    picture: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Nx9oJR0j--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_100%2Cw_775/https://i.imgur.com/4UsqqGa.png',
    content: `CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It allows developers to design complex layouts with ease, providing a flexible and intuitive way to arrange content.\n
    In this article, we'll dive into the basics of CSS Grid and how to create complex layouts with ease.\n
    CSS Grid introduces a new layout system optimized for two-dimensional layouts, allowing you to create responsive and adaptive designs with less code. Here's an example to get you started:\n
    \`\`\`css
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    }

    .item {
        background-color: #ccc;
        padding: 20px;
        text-align: center;
    }
    \`\`\`
    In this example, we have a container with three equal columns and a 10px gap between them. Each item inside the container will automatically fit into the grid layout.\n
    CSS Grid also provides a range of powerful features such as grid areas, line-based placement, and flexible sizing options. You can define named grid areas to simplify your layout and make your CSS more readable:\n
    \`\`\`css
    .container {
        display: grid;
        grid-template-areas:
            "header header header"
            "sidebar content content"
            "footer footer footer";
        grid-gap: 10px;
    }

    .header {
        grid-area: header;
    }

    .sidebar {
        grid-area: sidebar;
    }

    .content {
        grid-area: content;
    }

    .footer {
        grid-area: footer;
    }
    \`\`\`
    This example defines a grid with specific areas for the header, sidebar, content, and footer. Each element is placed in its designated area, creating a clear and structured layout.\n
    CSS Grid Layout is a game-changer for web design, providing a powerful and flexible way to create modern, responsive layouts. By mastering CSS Grid, you can take your web design skills to the next level and build stunning, user-friendly websites.\n
    Thank you for reading this post!`,
    tags: ['CSS', 'Grid'],
  },
]
