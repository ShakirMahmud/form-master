import Pet from "./Pet";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="fle">
                <Pet asset={asset}></Pet>
            </section>
        </div>
    );
};

export default Myself;