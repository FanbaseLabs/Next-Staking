import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic"

const StakingWidget = dynamic(() => import('fanbase-staking-widget'), { ssr: false })

const Home: NextPage = () => {
    return (
        <div>
            <main style={{ width: '600px' }}>
                <StakingWidget 
                    appId="0x3946fb7bd818532c15370fe059de80783d3fae31070dd3e0730838fd20cb1aa5" // Access key from plan.fanbase.io
                    chainId={80001} // Plan paid chain ID
                />
            </main>
        </div>
    );
};

export default Home;
