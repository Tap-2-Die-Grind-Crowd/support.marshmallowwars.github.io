import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
    const handleAppStoreRedirect = () => {
        // Placeholder for iOS App Store redirect
        window.open('https://apps.apple.com/app/marshmallow-wars/id[APP_ID]', '_blank')
    }

    const handleSupportEmail = () => {
        // Placeholder for support email
        window.location.href = 'mailto:support@marshmallowwars.com'
    }

    return (
        <>
            <Head>
                <title>Marshmallow Wars - Fantasy Unicorn Adventure</title>
                <meta name="description" content="Join the magical candy battle in Marshmallow Wars! Download now for iOS." />
            </Head>

            <div className="container">
                <header className="header">
                    <div className="logo-section">
                        <h1 className="title">
                            <span className="rainbow-text">Marshmallow Wars</span>
                        </h1>
                    </div>
                </header>

                <main className="main-content">
                    <div className="game-description">
                        <h2>Enter the Magical Candy Kingdom!</h2>
                        <p>
                            Join Princess Marshmallow and her rainbow unicorn friends in an epic battle
                            against the sour candy monsters. Collect magical sweets, cast rainbow spells,
                            and restore sweetness to the Candy Kingdom!
                        </p>
                    </div>

                    <div className="action-buttons">
                        <button
                            className="app-store-button"
                            onClick={handleAppStoreRedirect}
                            aria-label="Download from App Store"
                        >
                            <div className="button-content">
                                <div className="apple-icon">🍎</div>
                                <div className="button-text">
                                    <span className="download-text">Download on the</span>
                                    <span className="store-text">App Store</span>
                                </div>
                            </div>
                        </button>

                        <button
                            className="support-button"
                            onClick={handleSupportEmail}
                            aria-label="Contact Support"
                        >
                            <div className="button-content">
                                <div className="support-icon">📧</div>
                                <div className="button-text">
                                    <span className="support-text">Get Support</span>
                                </div>
                            </div>
                        </button>
                    </div>

                </main>

                <footer className="footer">
                    <p>&copy; 2024 Marshmallow Wars. All rights reserved.</p>
                </footer>
            </div>

            <style jsx>{`
        .container {
          min-height: 100vh;
          background-image: url('/images/unicorn-rainbow-bg.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          display: flex;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          position: relative;
        }

        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        .container > * {
          position: relative;
          z-index: 2;
        }

        .header {
          text-align: center;
          padding: 2rem 1rem;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .rainbow-text {
          background: linear-gradient(45deg, #ff6b6b, #ffa726, #fff176, #66bb6a, #42a5f5, #ab47bc);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow 3s ease-in-out infinite;
        }

        @keyframes rainbow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .subtitle {
          font-size: 1.2rem;
          color: #6a4c93;
          margin: 0;
          font-weight: 500;
        }

        .main-content {
          flex: 1;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }


        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          width: 100%;
          max-width: 300px;
        }

        .app-store-button, .support-button {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 15px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .app-store-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .app-store-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .support-button {
          background: linear-gradient(135deg, #ff6b9d 0%, #ff1744 100%);
          color: white;
        }

        .support-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .apple-icon, .support-icon {
          font-size: 1.5rem;
        }

        .button-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .download-text, .support-text {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .store-text {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .game-description {
          text-align: center;
          max-width: 500px;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .game-description h2 {
          color: #6a4c93;
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .game-description p {
          color: #4a4a4a;
          line-height: 1.6;
          margin: 0;
        }

        .footer {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          color: #6a4c93;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          
          .main-content {
            padding: 1rem;
          }
        }
      `}</style>
        </>
    )
}

export default Home
