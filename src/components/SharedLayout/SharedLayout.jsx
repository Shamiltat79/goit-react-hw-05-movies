import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (<>
    <Container>
                    <Header>
                    <nav>
                        <Link to="/" end>Home</Link>
                        <Link to="/movies">Movies</Link>
                    </nav>
                    </Header>
                    
                     
    </Container>
        
       
         
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense></>
        
                
    )
}

export default SharedLayout;
