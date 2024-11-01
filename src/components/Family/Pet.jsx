import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Pet = ({asset}) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Maw</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Pet;