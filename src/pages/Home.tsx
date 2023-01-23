import { Button } from "react-bootstrap";

function Home() {

    return <div className="home-page d-flex flex-column justify-content-evenly align-items-center" style={{height: "calc(100vh - 72px)"}}>
        <p className="text-white text-center h1">
            <span className="text-shadow-red-sm">R</span>
            <span className="text-shadow-green-sm">G</span>
            <span className="text-shadow-blue-sm">B</span>
            <span>PARTS</span>
            </p>
        <p className="text-white text-center h1">Raise Your <span className="text-shadow-lblue-sm">SPECS</span></p>
        <Button variant="outline-light box-shadow-white" style={{width: "33%"}}><a className="h5" href="/store">See Catalog</a></Button>
    </div>

}

export default Home;