export default function ModernLoader() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "80px",
                    height: "80px",
                }}
            >
                {/* Outer rotating ring */}
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        border: "4px solid rgba(255, 255, 255, 0.1)",
                        borderTop: "4px solid #ffffff",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                    }}
                />

                {/* Inner pulsing circle */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "40px",
                        height: "40px",
                        background: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "50%",
                        animation: "pulse 1.5s ease-in-out infinite",
                    }}
                />

                <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            50% { 
              transform: translate(-50%, -50%) scale(0.7);
              opacity: 0.7;
            }
          }
        `}</style>
            </div>
        </div>
    );
}