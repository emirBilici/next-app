export default function Layout({ children })
{
    return (
        <>
            <div className="container">
                {children}
            </div>
            <style jsx>{`
              .container {
              display: block;
              position: relative;
              padding-top: 58px;
              }
            `}</style>
        </>
    );
}