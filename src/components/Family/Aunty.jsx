import Cousin from "./Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Sajid'}></Cousin>
                <Cousin name={'Shawmpa'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;