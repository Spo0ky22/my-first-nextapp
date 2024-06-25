import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          background: #eee;
          color: white;
          padding: 1rem;
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          margin-right: 1rem;
        }
        main {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
