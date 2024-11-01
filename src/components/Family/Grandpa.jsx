
import { createContext } from 'react';
import Aunty from './Aunty';
import './Family.css'
import Father from './Father';
import Uncle from './Uncle';

export const AssetContext = createContext('Ice Cream')

const Grandpa = () => {
    const asset = 'hat'
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <AssetContext.Provider value='Ball'>
                <section className="flex">
                    <Father asset={asset}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

