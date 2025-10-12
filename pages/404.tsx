import React from 'react'
import Head from 'next/head'

const Custom404: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Marshmallow Wars</title>
                <meta name="description" content="Oops! This magical page seems to have disappeared." />
            </Head>

            <div className="error-container">
                <div className="error-content">
                    <h1 className="error-title">404</h1>
                    <h2 className="error-subtitle">Oops! Page Not Found</h2>
                    <p className="error-description">
                        This magical page seems to have disappeared into the candy clouds!
                    </p>
                    <a href="/" className="home-button">
                        🏠 Return to Marshmallow Wars
                    </a>
                </div>
            </div>

            <style jsx>{`
        .error-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 1rem;
        }

        .error-content {
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          padding: 3rem 2rem;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          backdrop-filter: blur(10px);
          max-width: 500px;
        }


        .error-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(45deg, #ff6b6b, #ffa726, #fff176, #66bb6a, #42a5f5, #ab47bc);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow 3s ease-in-out infinite;
          margin: 0 0 0.5rem 0;
        }

        @keyframes rainbow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .error-subtitle {
          color: #6a4c93;
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }

        .error-description {
          color: #4a4a4a;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }

        .home-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ff6b9d 0%, #ff1744 100%);
          color: white;
          text-decoration: none;
          border-radius: 15px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .home-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .error-content {
            padding: 2rem 1.5rem;
          }
          
          .error-title {
            font-size: 3rem;
          }
        }
      `}</style>
        </>
    )
}

export default Custom404
