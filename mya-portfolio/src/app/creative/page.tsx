import Gallery from "./gallery";
import Container from "@/app/_components/container";
import Footer from "../_components/footer";

const page = () => {
    return (
        <div className="bg-gradient"> 
            <Container> 
                <Gallery />
            </Container>
            <Footer/>
        </div>
    )
}

export default page;