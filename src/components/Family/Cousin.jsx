import Friend from "./Friend";


const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {name === 'Tuhin' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;