import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Tuhin'}></Cousin>
                <Cousin name={'Reza'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;