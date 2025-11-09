import React from 'react';

function App() {
  const styles = {
    // Global styles
    app: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh',
      overflowX: 'hidden',
      position: 'relative'
    },
    
    // Background styles
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    },
    
    // Cloud styles
    cloud: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      animation: 'float 20s infinite ease-in-out'
    },
    
    cloud1: {
      width: '200px',
      height: '200px',
      top: '10%',
      left: '10%',
      animationDelay: '0s'
    },
    
    cloud2: {
      width: '150px',
      height: '150px',
      top: '60%',
      right: '15%',
      animationDelay: '5s'
    },
    
    cloud3: {
      width: '180px',
      height: '180px',
      bottom: '20%',
      left: '20%',
      animationDelay: '10s'
    },
    
    // Circuit overlay
    circuitOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0.1,
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    },
    
    // Container
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      position: 'relative',
      zIndex: 1
    },
    
    // Header
    header: {
      textAlign: 'center',
      padding: '40px 20px',
      color: 'white'
    },
    
    h1: {
      fontSize: '3em',
      marginBottom: '10px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      animation: 'fadeInDown 1s ease-out'
    },
    
    tagline: {
      fontSize: '1.3em',
      color: 'rgba(255, 255, 255, 0.9)',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
      animation: 'fadeInUp 1s ease-out'
    },
    
    // Dashboard
    dashboard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      padding: '20px',
      animation: 'fadeIn 1.5s ease-out'
    },
    
    // Card
    card: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      animation: 'cardSlideIn 0.6s ease-out backwards'
    },
    
    cardIcon: {
      fontSize: '3em',
      marginBottom: '15px',
      display: 'block'
    },
    
    cardH2: {
      color: '#333',
      marginBottom: '15px',
      fontSize: '1.5em'
    },
    
    cardP: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '20px'
    },
    
    cardBadge: {
      display: 'inline-block',
      padding: '5px 15px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      borderRadius: '20px',
      fontSize: '0.85em',
      fontWeight: 'bold'
    },
    
    // Footer
    footer: {
      textAlign: 'center',
      padding: '40px 20px',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
    }
  };

  const navigateToProject = (project) => {
    console.log(`Navigating to ${project} project...`);
    alert(`${project.charAt(0).toUpperCase() + project.slice(1)} project coming soon!`);
  };

  React.useEffect(() => {
    // Add CSS animations to the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-30px) translateX(20px); }
        66% { transform: translateY(-15px) translateX(-20px); }
      }
      
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes cardSlideIn {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .card:hover {
        transform: translateY(-10px) !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4) !important;
      }
      
      .card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      
      .card:hover::before {
        transform: scaleX(1);
      }
      
      @media (max-width: 768px) {
        .dashboard {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        .card {
          padding: 20px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Console welcome message
    console.log('%cWelcome to Vyona! 🚀', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%cEngineering the Future with AI and Cloud', 'font-size: 14px; color: #764ba2;');

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.app}>
      <div style={{ ...styles.background, ...styles.cloud }}>
        <div style={{ ...styles.cloud, ...styles.cloud1 }}></div>
        <div style={{ ...styles.cloud, ...styles.cloud2 }}></div>
        <div style={{ ...styles.cloud, ...styles.cloud3 }}></div>
      </div>
      <div style={styles.circuitOverlay}></div>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Vyona</h1>
          <p style={styles.tagline}>Engineering the Future with AI and Cloud</p>
        </header>

        <div style={styles.dashboard} className="dashboard">
          {/* Card 1: General Purpose Chatbot */}
          <div 
            style={styles.card} 
            className="card"
            onClick={() => navigateToProject('chatbot')}
          >
            <span style={styles.cardIcon}>🤖</span>
            <h2 style={styles.cardH2}>General Purpose Chatbot</h2>
            <p style={styles.cardP}>
              Intelligent conversational AI powered by advanced natural language processing. 
              Chat with our AI assistant for help, information, and engaging conversations.
            </p>
            <span style={styles.cardBadge}>AI Powered</span>
          </div>

          {/* Card 2: Blog Pages */}
          <div 
            style={styles.card} 
            className="card"
            onClick={() => navigateToProject('blog')}
          >
            <span style={styles.cardIcon}>📝</span>
            <h2 style={styles.cardH2}>Blog Pages</h2>
            <p style={styles.cardP}>
              Explore articles, tutorials, and insights on AI, cloud computing, software development, 
              and emerging technologies. Stay updated with the latest trends.
            </p>
            <span style={styles.cardBadge}>Content Hub</span>
          </div>

          {/* Card 3: Ecommerce */}
          <div 
            style={styles.card} 
            className="card"
            onClick={() => navigateToProject('ecommerce')}
          >
            <span style={styles.cardIcon}>🛍️</span>
            <h2 style={styles.cardH2}>Ecommerce Store</h2>
            <p style={styles.cardP}>
              Discover unique custom-made products crafted with care. Shop handmade items, 
              digital goods, and exclusive merchandise from our collection.
            </p>
            <span style={styles.cardBadge}>Custom Products</span>
          </div>

          {/* Card 4: Discussion Forum */}
          <div 
            style={styles.card} 
            className="card"
            onClick={() => navigateToProject('forum')}
          >
            <span style={styles.cardIcon}>💬</span>
            <h2 style={styles.cardH2}>Discussion Forum</h2>
            <p style={styles.cardP}>
              Join our vibrant community to discuss technology, share ideas, ask questions, 
              and connect with like-minded individuals from around the world.
            </p>
            <span style={styles.cardBadge}>Community</span>
          </div>

          {/* Card 5: Job Portal */}
          <div 
            style={styles.card} 
            className="card"
            onClick={() => navigateToProject('jobs')}
          >
            <span style={styles.cardIcon}>💼</span>
            <h2 style={styles.cardH2}>Job Portal</h2>
            <p style={styles.cardP}>
              Find exciting career opportunities in tech, AI, and cloud computing. 
              Connect employers with talented professionals seeking their next challenge.
            </p>
            <span style={styles.cardBadge}>Careers</span>
          </div>
        </div>

        <footer style={styles.footer}>
          <p>&copy; 2024 Vyona. Engineering the Future with AI and Cloud.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
