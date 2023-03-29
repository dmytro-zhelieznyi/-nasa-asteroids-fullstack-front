import "./Loader.css";

const Loader = () => {
    return (
        <div className={"position-absolute top-50 start-50 translate-middle"}>
            <div className={"lds-ripple"}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;
